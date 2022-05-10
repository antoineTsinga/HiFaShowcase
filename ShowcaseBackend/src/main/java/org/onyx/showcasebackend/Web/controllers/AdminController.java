package org.onyx.showcasebackend.Web.controllers;

import org.onyx.showcasebackend.Web.services.AdminService;
import org.onyx.showcasebackend.entities.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping("/admins")
    private List<Admin> getAllAdmins() {
        return adminService.getAdmins();
    }

    // creating a get mapping that retrieves the detail of a specific admin
    @GetMapping("/admins/{id}")
    private Admin getBooks(@PathVariable("id") long adminId) {
        return adminService.getAdminById(adminId);
    }

    // creating a deleted mapping that deletes a specified admin
    @DeleteMapping("/admins/{id}")
    private void deleteBook(@PathVariable("id") long adminId) {
        adminService.deleteAdmin(adminId);
    }

    // creating post mapping that post the admin detail in the database
    @PostMapping("/admins")
    private long saveBook(@RequestBody Admin admin) {
        adminService.saveAdmin(admin);
        return admin.getId();
    }

    // creating put mapping that updates the admin detail
    @PutMapping("/admins")
    private Admin update(@RequestBody Admin admin) {
        adminService.saveAdmin(admin);
        return admin;
    }

}
