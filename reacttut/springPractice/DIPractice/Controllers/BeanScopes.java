package com.springPractice.springPractice.DIPractice.Controllers;

import com.springPractice.springPractice.DIPractice.DemoPOJO;
import com.springPractice.springPractice.DIPractice.Service.ServiceClass;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class BeanScopes {

    /*
        For classes annotated with @RestController different objects will be created for
        classes or beans annotated with @Scope("prototype")
        Suppose there are two classes BeanScopes and BeanScopes2 both have same Autowired objects

        So when we will hit the API multiple times for @BeanScopes the autowired objects will remain same
        even if we will hit two different API's in BeanScopes class.

        Now if we hit API in class BeanScopes2 new Objects will be made for class or bean annotated
        with @Scope("prototype") whereas the object will remain same for @Scope annotation.

     */

    Logger logger = LoggerFactory.getLogger(BeanScopes.class);

    // bean annotation invocation
    @Autowired
    RestTemplate restTemplate;

    // bean methods with similar return type invocation
    // + use of qualifier annotation
    @Autowired
    @Qualifier("bean2")
    RestTemplate restTemplate2;

    // Custom bean/ @Component invocation
    // Note :- If a custom bean contains any possible object dependency
    //          then it is better to use @Configuration annotation then @Component
    @Autowired
    DemoPOJO demoPOJO;

    // Properties file variable
    @Value("${server.port}")
    int portno;

    /*
        We can define custom property  in application.properties file
        but it has to follow some sort of naming convention
        like properties name should be in lower case
        no need to use quotation marks/symbol for defining string and
        avoid using space between value instead use _ symbol
        just keep it like :- property_name = my_name
     */
    @Value("${property.new.name}")
    String propertyName;

    @Value("${custom_prop}")
    String customPropertyName;

    // @Service annotation invocation
    @Autowired
    ServiceClass serviceClass;

    @RequestMapping("bean/singleton")
    public void returnBeanObject(){
        logger.info(restTemplate.toString());
         logger.info(restTemplate2.toString());

         logger.info(demoPOJO.toString());

         logger.info(Integer.toString(portno));
         logger.info(propertyName);
         logger.info(customPropertyName);

         logger.info(Boolean.toString(serviceClass.checkName("Amritesh Singh")));
    }

    @RequestMapping("bean/singleton2")
    public void returnBeanObject2(){
        logger.info(restTemplate.toString());
        logger.info(restTemplate2.toString());
        logger.info(demoPOJO.toString());
    }

}
