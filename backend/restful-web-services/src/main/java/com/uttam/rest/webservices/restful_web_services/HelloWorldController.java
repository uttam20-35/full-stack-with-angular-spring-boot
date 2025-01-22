package com.uttam.rest.webservices.restful_web_services;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200/") //subscribe to the another server
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

    @GetMapping("/helloBean/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
        return new HelloWorldBean(String.format("Hello ,%s",name));
    }
}
