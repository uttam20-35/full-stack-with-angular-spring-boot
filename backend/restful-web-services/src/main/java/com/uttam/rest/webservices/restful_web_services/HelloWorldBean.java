package com.uttam.rest.webservices.restful_web_services;

public class HelloWorldBean {
    private String message;

    private Integer num;

    public HelloWorldBean(Integer num, String message) {
        this.num = num;
        this.message = message;
    }

    public HelloWorldBean(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

}
