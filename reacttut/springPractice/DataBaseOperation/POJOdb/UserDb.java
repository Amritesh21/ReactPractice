package com.springPractice.springPractice.DataBaseOperation.POJOdb;

import com.springPractice.springPractice.DataBaseOperation.Service.UserValidation;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.UUID;

public class UserDb {

    @Autowired
    UserValidation userValidation;

    String name;
    String age;
    String uuid = UUID.randomUUID().toString();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getUuid() {
        return uuid;
    }
}
