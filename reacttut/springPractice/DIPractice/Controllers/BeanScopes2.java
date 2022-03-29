package com.springPractice.springPractice.DIPractice.Controllers;

import com.springPractice.springPractice.DIPractice.DemoPOJO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class BeanScopes2 {

    Logger logger = LoggerFactory.getLogger(BeanScopes.class);

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    @Qualifier("bean2")
    RestTemplate restTemplate2;

    @Autowired
    DemoPOJO demoPOJO;

    @RequestMapping("bean/singleton3")
    public void returnBeanObject(){
        logger.info(restTemplate.toString());
        logger.info(restTemplate2.toString());
        logger.info(demoPOJO.toString());
    }

    @RequestMapping("bean/singleton4")
    public void returnBeanObject2(){
        logger.info(restTemplate.toString());
        logger.info(restTemplate2.toString());
        logger.info(demoPOJO.toString());
    }

}
