package com.Job.Portal.exception;

public class UserNotFoundException extends RuntimeException{

//    custom exception for user-related errors
    public UserNotFoundException(String message) {
        super(message);
    }
}
