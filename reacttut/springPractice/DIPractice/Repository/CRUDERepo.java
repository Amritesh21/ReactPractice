package com.springPractice.springPractice.DIPractice.Repository;

import com.springPractice.springPractice.DIPractice.DemoPOJO;
import org.springframework.stereotype.Repository;

import java.util.HashMap;

/*
    Inside the below class we will be writing code to add new objects in hashmap
    remove objects from map, update and read their values
 */

@Repository
public class CRUDERepo {

    HashMap<Integer, DemoPOJO> map = new HashMap<>();
    private static int ct = 0;


    public String add(DemoPOJO object){
        map.put(ct,object);
        return "added";
    }
     public String remove(int indR){
        map.remove(indR);
        return "remmoved";
     }

     public String update(DemoPOJO object, int updInd){
        map.put(updInd, object);
        return "updated";
     }

     public DemoPOJO read(int readInd){
        return map.get(readInd);

     }


}
