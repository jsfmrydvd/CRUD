package com.example.demo.entity;


import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    public Long getId() {
        return id;
    }

    public User(String name, String studentNumber) {
        this.name = name;
        this.studentNumber = studentNumber;
    }

    public void setId(Long id) {
        this.id = id;

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStudentNumber() {
        return studentNumber;
    }

    public void setStudentNumber(String studentNumber) {
        this.studentNumber = studentNumber;
    }
    public User() {
    //
    }

    public User(Long id, String name, String studentNumber) {
        this.id = id;
        this.name = name;
        this.studentNumber = studentNumber;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

    private Long id;
    private String name;
    private String studentNumber;
    private boolean deleted;

    public User(Long id, String name, String studentNumber, String age, String mobile, String email) {
        this.id = id;
        this.name = name;
        this.studentNumber = studentNumber;
        this.age = age;
        this.mobile = mobile;
        this.email = email;
    }

    public User(Long id, String name, String studentNumber, boolean deleted, String age, String mobile, String email) {
        this.id = id;
        this.name = name;

        this.studentNumber = studentNumber;
        this.deleted = deleted;
        this.age = age;
        this.mobile = mobile;
        this.email = email;
    }
    @Column(nullable = true)
    public String getAge() {
        return age;

    }

    public void setAge(String age) {
        this.age = age;
    }
    @Column(nullable = true)
    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
    @Column(nullable = true)
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    private String age;
    private String mobile;
    private String email;

}
