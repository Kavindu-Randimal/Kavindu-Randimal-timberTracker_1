package com.example.demo.repository;

import com.example.demo.model.Users;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.sql.ResultSet;
import java.util.Collection;
import java.util.List;

public interface UsersRepository extends CrudRepository<Users, Integer> {

    @Query(value = "SELECT * FROM Users u WHERE u.Name = :name and u.Password = :password",
            nativeQuery = true)
    Users findUserByStatusAndNameNamedParamsNative(
            @Param("name") String name, @Param("password") String password);

    @Query(value = "SELECT * FROM Users u WHERE u.Name = :name",
            nativeQuery = true)
    List<Users> findByName(@Param("name") String name);

//    @Query(value = "insert into Users (name, password) values (:name, :password)",
//            nativeQuery = true)
//    void insertUser(@Param("name") String name, @Param("[password]") String password);


}
