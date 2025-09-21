package com.golance.backend.dto;

public class LoginResponse {
    private Long id;
    private String username;
    private String email;
    private String role;
    private String message;

    public LoginResponse(Long id, String username, String email, String role, String message) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.role = role;
        this.message = message;
    }

    // getters
    public Long getId() { return id; }
    public String getUsername() { return username; }
    public String getEmail() { return email; }
    public String getRole() { return role; }
    public String getMessage() { return message; }
}
