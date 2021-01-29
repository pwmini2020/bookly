package com.bookly.backend.services;

import com.bookly.backend.dao.UserRepository;
import com.bookly.backend.models.User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<User> tryGetUserByToken(String token) {
        return userRepository.getBySecurityToken(token);
    }
}
