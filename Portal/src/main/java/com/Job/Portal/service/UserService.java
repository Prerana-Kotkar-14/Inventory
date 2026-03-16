package com.Job.Portal.service;

import com.Job.Portal.dto.UserResponseDTO;

public interface UserService {

    UserResponseDTO loginUser(String email, String password);
}