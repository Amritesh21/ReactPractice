package com.springPractice.springPractice.JPA;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

//JPA + Hibernate content

@RestController
public class JPAController {

    Logger logger = LoggerFactory.getLogger(JPAController.class);

    @Autowired
    CountryDAOService countryDAOService;

    @Autowired
    CountryRepository countryRepository;

    @PostMapping("jpa/insert")
    public void jpainsert(){
        Country country1 = new Country("USA","Joe");
        String c = countryDAOService.insert(country1);
        logger.info(c);
    }

    @PostMapping("jpa/insert2")
    public void jparepo(){
        Country country2 = new Country("France","David");
        countryRepository.save(country2);
    }

    @GetMapping("jpa/get")
    public void getData(){
        List<Country> country1 = countryRepository.findAll();
        logger.info(Integer.toString(country1.size()));

        Optional<Country> country2 = countryRepository.findById("India");
        logger.info(country2.toString());
    }
}
