package com.springPractice.springPractice.DIPractice;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

/*
    Class annotated with @Configuration indicates that it can be used by
    Spring IOC container as a source of bean definition.

    As @Configuration inherits @Component then it can be used inplace.

    @Bean annotation tells spring that method annotated with it will return a bean
    that should be registered with Spring

    If two beans have same return type then @Qualifier annotation removes confusion of
    calling which bean. The calling can easily done based on the name.
 */
@Configuration
public class BeanPracticeModel {

    @Bean
    @Primary
    public RestTemplate getRestTemplate(){
        return new RestTemplate();
    }

    @Bean("bean2")
    @Scope("prototype")
    public RestTemplate getRestTemplate2(){
        return new RestTemplate();
    }

}
