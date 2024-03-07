package com.example.UserManagement.Services;

import com.example.UserManagement.Models.User;
import com.example.UserManagement.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User addUser(User user) {
        User newUser = new User();

        newUser.setFullName(user.getFullName());
        newUser.setEmail(user.getEmail());
        newUser.setUsername(user.getUsername());
        newUser.setPassword(user.getPassword());
        newUser.setDateOfBirth(user.getDateOfBirth());
        newUser.setGender(user.getGender());
        newUser.setAddress(user.getAddress());
        newUser.setContactNumber(user.getContactNumber());
        newUser.setQualifications(user.getQualifications());
        newUser.setBio(user.getBio());

        return userRepository.save(newUser);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Integer userId) throws Exception {
        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            throw new Exception("user not found");
        }
        return user.get();
    }

    @Override
    public User getUserByUsernamePassword(String username, String password) throws Exception {
        User user = userRepository.findByUsernameAndPassword(username, password);
        if (user == null) {
            throw new Exception("User not found");
        }
        return user;
    }
}
