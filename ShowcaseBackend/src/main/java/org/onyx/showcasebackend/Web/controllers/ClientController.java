package org.onyx.showcasebackend.Web.controllers;

import org.onyx.showcasebackend.Web.services.ClientService;
import org.onyx.showcasebackend.entities.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClientController {
    @Autowired
    private ClientService clientService;

    @GetMapping("/clients")
    private List<Client> getAllClients() {
        return clientService.getClients();
    }

    // creating a get mapping that retrieves the detail of a specific client
    @GetMapping("/clients/{id}")
    private Client getClients(@PathVariable("id") long clientId) {
        return clientService.getClientById(clientId);
    }

    // creating a deleted mapping that deletes a specified client
    @DeleteMapping("/clients/{id}")
    private void deleteClient(@PathVariable("id") long clientId) {
        clientService.deleteClient(clientId);
    }

    // creating post mapping that post the client detail in the database
    @PostMapping("/clients")
    private long saveClient(@RequestBody Client client) {
        clientService.saveClient(client);
        return client.getId();
    }

    // creating put mapping that updates the client detail
    @PutMapping("/clients")
    private Client update(@RequestBody Client client) {
        clientService.saveClient(client);
        return client;
    }

}
