package org.onyx.showcasebackend.Web.controllers;

import org.onyx.showcasebackend.Web.services.AdminService;
import org.onyx.showcasebackend.entities.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping("/admins")
    private ResponseEntity<?> getAllAdmins() {
        HashMap<String,Object> data = new HashMap<>();
        List<Admin> items = adminService.getAdmins();
        data.put("results", items);
        data.put("count", items.size());
        return ResponseEntity.status(HttpStatus.OK).body(data);
    }

    // creating a get mapping that retrieves the detail of a specific admin
    @GetMapping("/admins/{id}")
    private Admin getAdmins(@PathVariable("id") long adminId) {
        return adminService.getAdminById(adminId);
    }

    // creating a deleted mapping that deletes a specified admin
    @DeleteMapping("/admins/{id}")
    private void deleteAdmin(@PathVariable("id") long adminId) {
        adminService.deleteAdmin(adminId);
    }

    // creating post mapping that post the admin detail in the database
    @PostMapping("/admins")
    private long saveAdmin(@RequestBody Admin admin) {
        adminService.saveAdmin(admin);
        return admin.getId();
    }

    // creating put mapping that updates the admin detail
    @PutMapping("/admins/{id}")
    private Admin update(@RequestBody Admin admin, @PathVariable("id") long adminId) {
        adminService.updateAdmin(admin, adminId);
        return admin;
    }

}
