package com.Job.Portal.controller;

import com.Job.Portal.dto.LoginRequestDTO;
import com.Job.Portal.dto.UserResponseDTO;
import com.Job.Portal.service.UserService;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/users")
public class UserController{

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public UserResponseDTO loginUser(@RequestBody LoginRequestDTO loginData) {
        return userService.loginUser(
                loginData.getEmail(),
                loginData.getPassword()
        );
    }
}