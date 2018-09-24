package com.example.demo.api;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserApi {

    @Autowired
    private UserRepository userRepository;

    Map<String, Object> response = new HashMap<String, Object>();

    //save
    @PostMapping("/save")
    public Map<String,Object> saveUser(@RequestBody User user) {
         User users = userRepository.findByStudentNumber(user.getStudentNumber());
         String name = user.getName();
         if(!name.equals("null")){
             if(users != null) {
                 response.put("success", false);

             } else {
                 user.setName(user.getName());
                 user.setStudentNumber(user.getStudentNumber());
                 user.setDeleted(false);
                 userRepository.save(user);
                 response.put("success", true);
             }
         } else {
             response.put("success", false);
         }

        return response;
    }
    //show
    @GetMapping("/list")
    public Map<String,Object> getAllUsers() {
        response.put("userList", userRepository.getUsers());
        response.put("userLists", userRepository.getAllDeleted());
        return response;
    }
    //delete
    @PostMapping("/delete")
    public Map<String,Object> deleteUser(@RequestBody User user) {
        userRepository.findOne(user.getId());
        user.setDeleted(true);
        userRepository.save(user);
        response.put("success", true);
        return response;
    }
    //update
    @PostMapping("/update")
    public Map<String,Object> updateUser(@RequestBody User user) {
        response.put("name", user.getName());
        response.put("studentNumber", user.getStudentNumber());
        response.put("age", user.getAge());
        response.put("mobile", user.getMobile());
        response.put("email", user.getEmail());
        response.put("success", true);
        return response;
    }
    //active
    @PostMapping("/active")
    public Map<String,Object> activeUser(@RequestBody User user) {
        userRepository.findOne(user.getId());
        user.setDeleted(false);
        userRepository.save(user);
        response.put("success", true);
        return response;
    }
    //edit
    @PostMapping("/edit")
    public Map<String,Object> editUser(@RequestBody User user) {
        String name = user.getName();
        if(!name.equals("null")){
            user.setName(name);
            user.setStudentNumber(user.getStudentNumber());
            user.setDeleted(false);
            user.setAge(user.getAge());
            user.setEmail(user.getEmail());
            user.setMobile(user.getMobile());
            userRepository.save(user);
            response.put("success", true);
        } else {
            response.put("success", false);
        }
        return response;
    }
    //search
    @PostMapping("/search")
    public Map<String, Object> searchData(@RequestBody HashMap<String, String> userData) {
        String user = userData.get("studentNumber");
        if(userRepository.getUserByStudentNumber(user) != null && !userRepository.getUserByStudentNumber(user).isEmpty()){
            response.put("success", true);
            response.put("userList", userRepository.getUserByStudentNumber(user));

        }
        else if(userRepository.getUserByName(user) != null && !userRepository.getUserByName(user).isEmpty()){
            response.put("success", true);
            response.put("userList", userRepository.getUserByName(user));
        }
        else if(userRepository.getUserByEmail(user) != null && !userRepository.getUserByEmail(user).isEmpty()){
            response.put("success", true);
            response.put("userList", userRepository.getUserByEmail(user));
        }
        else{
            response.put("success",false);
            response.put("message", user + " can't be found!");
        }
        return response;
    }
}
