package com.uttam.rest.webservices.restful_web_services.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class ToDoResourceController {

    @Autowired
    private ToDoHardcodedService toDoHardcodedService;

    @GetMapping("/users/{username}/todos")
    public List<ToDo> getAllToDos(@PathVariable String username){
        System.out.println("CONTROLLER: findAll() --> List of todo  :");
        return toDoHardcodedService.findAll();
    }
}
