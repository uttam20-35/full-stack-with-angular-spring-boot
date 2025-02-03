package com.uttam.rest.webservices.restful_web_services.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteToDo(@PathVariable String username,@PathVariable Long id){
       ToDo todo= toDoHardcodedService.deleteById(id);

       if (todo!=null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
