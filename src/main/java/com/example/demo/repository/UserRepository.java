package com.example.demo.repository;

import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByStudentNumber(String studentNumber);

    @Query("SELECT new com.example.demo.entity.User(u.id, u.name, u.studentNumber,u.age, u.mobile, u.email) FROM User u where u.deleted = 0")
    List<User> getUsers();

    @Query("SELECT new com.example.demo.entity.User(u.id, u.name, u.studentNumber,u.age, u.mobile, u.email) FROM User u where u.deleted = 1")
    List<User> getAllUsers();

    @Query("SELECT new com.example.demo.entity.User(u.id, u.name, u.studentNumber,u.age, u.mobile, u.email) FROM User u where u.deleted = 1")
    List<User> getAllDeleted();

    @Query("SELECT new com.example.demo.entity.User(u.id, u.name, u.studentNumber,u.age, u.mobile, u.email) FROM User u where u.deleted = 0 and u.studentNumber like '%' || :studentNumber || '%'" )
    List<User> getUserByStudentNumber(@Param("studentNumber") String studentNumber);

    @Query("SELECT new com.example.demo.entity.User(u.id, u.name, u.studentNumber,u.age, u.mobile, u.email) FROM User u where u.deleted = 0 and u.name like '%' || :name || '%'" )
    List<User> getUserByName(@Param("name") String name);

    @Query("SELECT new com.example.demo.entity.User(u.id, u.name, u.studentNumber,u.age, u.mobile, u.email) FROM User u where u.deleted = 0 and u.email like '%' || :email || '%'" )
    List<User> getUserByEmail(@Param("email") String email);

}
