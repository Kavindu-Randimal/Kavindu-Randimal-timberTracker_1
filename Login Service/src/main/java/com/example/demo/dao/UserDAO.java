package com.example.demo.dao;

import com.example.demo.model.Users;
import com.example.demo.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDAO {
    @Autowired
    UsersRepository usersRepository;

//    for save data
    public Users save(Users user){
        return usersRepository.save(user);
    }
}
