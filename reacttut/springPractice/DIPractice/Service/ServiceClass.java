package com.springPractice.springPractice.DIPractice.Service;

import org.springframework.stereotype.Service;

@Service
public class ServiceClass {

    public boolean checkName(String name){
        if(name.length() > 8){
            return true;
        }
        return false;
    }
}
