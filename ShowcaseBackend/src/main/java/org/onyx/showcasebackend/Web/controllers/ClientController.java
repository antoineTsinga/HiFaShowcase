package org.onyx.showcasebackend.Web.controllers;

import org.onyx.showcasebackend.Web.services.ClientService;
import org.onyx.showcasebackend.dao.ClientRepository;
import org.onyx.showcasebackend.dao.RoleRepository;
import org.onyx.showcasebackend.entities.Client;
import org.onyx.showcasebackend.entities.Role;

import org.onyx.showcasebackend.security.MyUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;

@RestController
public class ClientController {
    @Autowired
    private ClientService clientService;

    @Autowired
    private ClientRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;


    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("api/clients")
    private List<Client> getAllClients() {
        return clientService.getClients();
    }

    // creating a get mapping that retrieves the detail of a specific client
    @GetMapping("api/clients/{id}")
    private Client getClients(@PathVariable("id") long clientId) {
        return clientService.getClientById(clientId);
    }

    // creating a deleted mapping that deletes a specified client
    @DeleteMapping("api/clients/{id}")
    private void deleteClient(@PathVariable("id") long clientId) {
        clientService.deleteClient(clientId);
    }

    // creating post mapping that post the client detail in the database
    @PostMapping("api/clients")
    private long saveClient(@RequestBody Client client) {
        clientService.saveClient(client);
        return client.getId();
    }

    // creating put mapping that updates the client detail
    @PutMapping("api/clients")
    private Client update(@RequestBody Client client) {
        clientService.saveClient(client);
        return client;
    }

    @PostMapping("/api/register")
    public ResponseEntity<?> registerClient(@RequestBody Client client) {
        if (userRepository.existsByEmail(client.getEmail())) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .contentType(MediaType.APPLICATION_JSON)
                    .body("Error: Email is already in use !");

        }
        // Set Role User

        Role role = roleRepository.findByName("ROLE_USER");
        client.setRole(role);
        client.setPassword(passwordEncoder.encode(client.getPassword()));

        clientService.save(client);

        return ResponseEntity.status(HttpStatus.CREATED)
                .contentType(MediaType.APPLICATION_JSON)
                .body("User registered successfully!");
    }

    @GetMapping("/api/users/current")
    public ResponseEntity<?> currentClient(){

        if(SecurityContextHolder.getContext().getAuthentication().getPrincipal().equals("anonymousUser")){
            return ResponseEntity.status(HttpStatus.OK)
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(null);
        }

        MyUserDetails currentUser = (MyUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(currentUser.getUsername()==null){
            return ResponseEntity.status(HttpStatus.OK)
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(null);
        }
        HashMap<String,Object> data = new HashMap<>();
        data.put("username", currentUser.getUsername());
        data.put("id", currentUser.getId());
        data.put("Authorities", currentUser.getAuthorities());
        data.put("accountNonExpired", currentUser.isAccountNonExpired());
        data.put("credentialsNonExpired", currentUser.isAccountNonExpired());
        data.put("accountNonLocked", currentUser.isAccountNonLocked());


        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.APPLICATION_JSON)
                .body(data);
    }

    @RequestMapping(value = {"/api/logout"}, method = RequestMethod.POST)
    public ResponseEntity<?> logoutDo(HttpServletRequest request ){
        if(SecurityContextHolder.getContext().getAuthentication().getPrincipal().equals("anonymousUser")){
            return ResponseEntity.status(HttpStatus.OK)
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(null);
        }

        SecurityContextHolder.getContext().getAuthentication().setAuthenticated(false);

        request.getSession(false);
        HttpSession session;
        SecurityContextHolder.clearContext();
        session= request.getSession(false);

            session.invalidate();


        if(request.getCookies() !=null) {
            for (Cookie cookie : request.getCookies()) {
                if (cookie.getName().equals("JSESSIONID")) {
                    cookie.setMaxAge(0);
                }
                cookie.setMaxAge(0);

            }
        }

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("");
    }


}
