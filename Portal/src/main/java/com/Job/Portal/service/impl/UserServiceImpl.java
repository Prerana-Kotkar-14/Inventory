package com.Job.Portal.service.impl;

import com.Job.Portal.dto.RegisterRequestDTO;
import com.Job.Portal.dto.UserResponseDTO;
import com.Job.Portal.entity.Role;
import com.Job.Portal.entity.User;
import com.Job.Portal.exception.InvalidPasswordException;
import com.Job.Portal.exception.UserNotFoundException;
import com.Job.Portal.repository.UserRepository;
import com.Job.Portal.security.JwtUtil;
import com.Job.Portal.service.UserService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    public UserServiceImpl(UserRepository userRepository, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    @Override
    public UserResponseDTO loginUser(String email, String password) {
        User user =  userRepository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("User Not Found with email : " + email));

        if(!user.getPassword().equals(password)) {
            throw new InvalidPasswordException("Invalid password");
        }

        String token = jwtUtil.generateToken(user.getEmail());

        UserResponseDTO response = new UserResponseDTO();

        response.setId(user.getId());
        response.setName(user.getName());
        response.setEmail(user.getEmail());
        response.setRole(user.getRole());
        response.setToken(token);

        return response;
    }

    @Override
    public void registerUser(RegisterRequestDTO dto) {

        userRepository.findByEmail(dto.getEmail())
                .ifPresent( u-> {
                    throw new RuntimeException("Email already exists");
                });

        Role role;
        try {
            role = Role.valueOf(dto.getRole().toUpperCase());
        } catch (Exception e) {
            throw new RuntimeException("Invalid user");
        }

        User user = new User();
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        user.setRole(String.valueOf(role));
        user.setCreatedAt(LocalDateTime.now());

        userRepository.save(user);
    }
}