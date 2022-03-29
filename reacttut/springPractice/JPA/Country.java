package com.springPractice.springPractice.JPA;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity // marks class as table
public class Country {

    @Id // marks country as primary key
    String country;
    String head;

    protected Country(){

    }

    public Country(String country, String head) {
        this.country = country;
        this.head = head;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getHead() {
        return head;
    }

    public void setHead(String head) {
        this.head = head;
    }
}
