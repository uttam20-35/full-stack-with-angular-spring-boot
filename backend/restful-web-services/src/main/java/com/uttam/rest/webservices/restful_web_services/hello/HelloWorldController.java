package com.uttam.rest.webservices.restful_web_services.hello;

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
        System.out.println("1st");
        return "hello World";
    }

    @GetMapping("/helloBean")
    public HelloWorldBean helloWorldBean(){
        System.out.println("2nd");
//        throw new RuntimeException("Something error happened");
        return new HelloWorldBean(222,"Hello World");
    }

    @GetMapping("/helloBean/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name){
        System.out.println("3rd");
        return new HelloWorldBean(String.format("Hello ,%s",name));
    }
}
