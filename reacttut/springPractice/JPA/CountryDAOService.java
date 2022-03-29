package com.springPractice.springPractice.JPA;

import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

@Repository
@Transactional //each method will be involved in transaction
public class CountryDAOService {


    @PersistenceContext
    private EntityManager entityManager; // saves data to database

    public String insert(Country country){
        entityManager.persist(country);
        return country.getCountry();
    }
}
