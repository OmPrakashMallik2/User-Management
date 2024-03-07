package com.example.UserManagement.Controllers;

import com.example.UserManagement.Models.User;
import com.example.UserManagement.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/users/{userId}")
    public ResponseEntity<User> getAllUsers(@PathVariable Integer userId) throws Exception {
        return new ResponseEntity<>(userService.getUserById(userId), HttpStatus.OK);
    }

    @GetMapping("/users/{username}/{password}")
    public ResponseEntity<User> getUserByUsernamePassword(@PathVariable("username") String username, @PathVariable("password") String password) throws Exception {
        return new ResponseEntity<>(userService.getUserByUsernamePassword(username, password), HttpStatus.OK);
    }

    @PostMapping("/user")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        return new ResponseEntity<>(userService.addUser(user), HttpStatus.CREATED);
    }
}
