package com.example.demo.controller;

import com.example.demo.model.LoginUser;
import com.example.demo.model.Users;
import com.example.demo.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("users")
public class UserController {

    @Autowired
    UsersRepository repo;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<String> checkServer() {
        return null;
    }

//    save user
//    @PostMapping("/save")
//    public Users createUser(@RequestBody Users user){
//        return repo.save(user);
//    }

    //    get user by name
    @GetMapping("/users/{name}")
    public ResponseEntity<Users> getUserById(@PathVariable(value = "name") Integer userName) {
        Users user = (Users) repo.findById(userName).get();
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(user);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginUser> persistPerson(@RequestBody Users user) {
        System.out.println("LOgginggg");
        System.out.println(user.getName()+ "  "+ user.getPassword());
        if (user.getName() == null || user.getPassword() == null) {
            return ResponseEntity.ok().body(new LoginUser(null, false, "User Name and Password Cant Be Null"));
        }
        Users returnedUser = repo.findUserByStatusAndNameNamedParamsNative(user.getName(), user.getPassword());
        if (returnedUser != null) {
            return ResponseEntity.status(HttpStatus.OK).body(new LoginUser(returnedUser.getName(), true, "Success"));
        } else {
            return ResponseEntity.ok().body(new LoginUser(null, false, "Login Fails"));
        }

    }

    @PostMapping("/signup")
    public ResponseEntity<LoginUser> signup(@RequestBody Users user) {
        System.out.println(user.getName() + "," + user.getPassword());
//        try {
            List<Users> currentUser = repo.findByName( user.getName() );
            if( currentUser != null ) {
                return ResponseEntity.ok(new LoginUser(null, false, "User Name Taken."));
            }
//        } catch ( SQLException ex ){
//            System.out.println( ex );
//        }

        if (user.getName() == null || user.getPassword() == null) {
            return ResponseEntity.ok().body(new LoginUser(null, false, "User Name Or Password Cant Be a Null Value."));
        }
        Users returnedUser = repo.save(user);
        if( returnedUser != null ) {
            return ResponseEntity.ok(new LoginUser( returnedUser.getName(), true, "Success"));
        } else {
            return ResponseEntity.ok(new LoginUser(null, false, "Fail to create user"));
        }
    }
}


