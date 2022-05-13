package org.onyx.showcasebackend.Web.controllers;

import org.onyx.showcasebackend.Web.services.UserService;
import org.onyx.showcasebackend.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public  class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(value = "/users")
    private List<User> getAllUsers(){
        return userService.getUsers();
    }

    @GetMapping(value = "/users/{id}")
    private User getUser(@PathVariable("id") Long id) {
        return userService.getUsersById(id);
    }

    @DeleteMapping(value = "/users/{id}")
    private void deleteUser(@PathVariable("id") Long id) {
        userService.delete(id);
    }

    @PostMapping(value = "/users")
    private User saveUser(@RequestBody User user)
    {
         userService.save(user);
         return user;

    }

    @PutMapping(value = "/users/{id}")
    private User updateUser(@RequestBody User user, @PathVariable("id") Long id)
    {
        userService.update(user, id);
        return user;
    }



}
