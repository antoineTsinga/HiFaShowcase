package org.onyx.showcasebackend.Web.controllers;

import org.onyx.showcasebackend.Web.services.AdminService;
import org.onyx.showcasebackend.dao.AdminRepository;
import org.onyx.showcasebackend.entities.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping("/admins")
    private List<Admin> getAllAdmins(){
        return adminService.getAdmins();
    }

    

}
