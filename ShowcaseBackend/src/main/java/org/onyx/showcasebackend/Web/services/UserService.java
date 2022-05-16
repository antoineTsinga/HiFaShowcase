package org.onyx.showcasebackend.Web.services;

import org.onyx.showcasebackend.dao.RoleRepository;
import org.onyx.showcasebackend.dao.UserRepository;
import org.onyx.showcasebackend.entities.Role;
import org.onyx.showcasebackend.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public  class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getUsers(){
        List<User> users = new ArrayList<User>();
        userRepository.findAll() .forEach(user -> users.add(user));
        return  users;
    }

    public User getUsersById(Long id){
        return userRepository.findById(id).get();
    }

    public void save(User user){
        userRepository.save(user);
    }

    public void delete(Long id){
        userRepository.deleteById(id);
    }

    public void update(User user, Long id){
        user.setId(id);
        userRepository.save(user);
    }

}
