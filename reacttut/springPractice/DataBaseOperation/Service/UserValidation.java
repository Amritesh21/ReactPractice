package com.springPractice.springPractice.DataBaseOperation.Service;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.UUID;

@Service
public class UserValidation {

    private static HashSet<String> contains_uuid = new HashSet<>();
    public String ifUserExists(String uuid){
        if(! contains_uuid.contains(uuid)){
            contains_uuid.add(uuid);
            return uuid;
        }
        return uuid;
    }
}
