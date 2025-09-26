package com.golance.backend.controller;

import com.golance.backend.model.User;
import com.golance.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    // 1️⃣ Register a new user
    @PostMapping("/register")
    public Object registerUser(@RequestBody User user) {
        try {
            return userService.registerUser(user);
        } catch (Exception e) {
            return Map.of("message", "Registration failed: " + e.getMessage());
        }
    }

    // 2️⃣ Login user
    @PostMapping("/login")
    public Object loginUser(@RequestBody User loginRequest) {
        Optional<User> userOpt = userService.findByEmail(loginRequest.getEmail());

        if (userOpt.isPresent()) {
            User user = userOpt.get();
            if (user.getPassword().equals(loginRequest.getPassword())) {
                return user; // return full User entity including skills/year/department
            }
        }
        return Map.of("message", "Invalid email or password");
    }

    // 3️⃣ Get user details by ID
    @GetMapping("/{id}")
    public Object getUserById(@PathVariable Long id) {
        try {
            User user = userService.getUserById(id);
            return user; // return full User entity
        } catch (Exception e) {
            return Map.of("message", "User not found with id: " + id);
        }
    }
}
