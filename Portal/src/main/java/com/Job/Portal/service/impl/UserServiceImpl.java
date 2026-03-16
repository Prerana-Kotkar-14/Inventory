package com.Job.Portal.service.impl;

import com.Job.Portal.dto.UserResponseDTO;
import com.Job.Portal.entity.User;
import com.Job.Portal.exception.InvalidPasswordException;
import com.Job.Portal.exception.UserNotFoundException;
import com.Job.Portal.repository.UserRepository;
import com.Job.Portal.service.UserService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserResponseDTO loginUser(String email, String password) {
        User user =  userRepository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("User Not Found with email : " + email));

        if(!user.getPassword().equals(password)) {
            throw new InvalidPasswordException("Invalid password");
        }

        UserResponseDTO response = new UserResponseDTO();

        response.setId(user.getId());
        response.setName(user.getName());
        response.setEmail(user.getEmail());
        response.setRole(user.getRole());

        return response;
    }
}