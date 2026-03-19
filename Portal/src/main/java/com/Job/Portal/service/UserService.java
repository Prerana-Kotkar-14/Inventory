package com.Job.Portal.service;

import com.Job.Portal.dto.RegisterRequestDTO;
import com.Job.Portal.dto.UserResponseDTO;
import org.springframework.http.ResponseEntity;

public interface UserService {

    UserResponseDTO loginUser(String email, String password);
    void registerUser(RegisterRequestDTO dto);
}