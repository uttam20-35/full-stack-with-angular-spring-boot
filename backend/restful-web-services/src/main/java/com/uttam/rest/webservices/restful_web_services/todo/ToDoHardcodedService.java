package com.uttam.rest.webservices.restful_web_services.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ToDoHardcodedService {

    private static List<ToDo> todos = new ArrayList<>();
    private static Long idCounter=0L;

    static {
        todos.add(new ToDo(++idCounter, "uttam","Learn to Code",new Date(),false));
        todos.add(new ToDo(++idCounter, "uttam","Learn to Micro",new Date(),true));
        todos.add(new ToDo(++idCounter, "uttam","Learn to Angular",new Date(),false));
    }

    public List<ToDo> findAll(){
        todos.forEach(todo -> System.out.println(todo.getId()
                + " " + todo.getDescription() + " " + todo.getDone() + " " + todo.getTargetDate()));
        return todos;
    }

    public ToDo deleteById(Long id){
        ToDo todo = findById(id);
        if(todo ==null) return null;

        if(todos.remove(todo)){
            return todo;
        }
        return null;
    }

    public ToDo findById(Long id) {
        for (ToDo todo:todos){
            if(todo.getId() == id){
                return todo;
            }
        }
        return null;
    }
}
