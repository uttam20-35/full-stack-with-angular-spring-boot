package com.uttam.rest.webservices.restful_web_services;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

//1st way:    @RequestMapping(method = RequestMethod.GET, path = "/hello-world")
//2nd way:    @GetMapping(path = "/hello")
/*3rd way:*/@GetMapping("/hello")
    public String helloWorld(){
        return "hello World";
    }

    @GetMapping("/helloBean")
    public HelloWorldBean helloWorldBean(){
        return new HelloWorldBean("Hello World");
    }
}
