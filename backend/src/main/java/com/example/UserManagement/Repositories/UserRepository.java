package com.example.UserManagement.Repositories;

import com.example.UserManagement.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
