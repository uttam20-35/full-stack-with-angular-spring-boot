package com.uttam.rest.webservices.restful_web_services;

public class HelloWorldBean {
    private String message;

    private Integer num;

    private HelloWorldBeanTwo helloWorldBeanTwo;

    public HelloWorldBean(String message, Integer num, HelloWorldBeanTwo helloWorldBeanTwo) {
        this.message = message;
        this.num = num;
        this.helloWorldBeanTwo = helloWorldBeanTwo;
    }

    public HelloWorldBeanTwo getHelloWorldBeanTwo() {
        return helloWorldBeanTwo;
    }

    public void setHelloWorldBeanTwo(HelloWorldBeanTwo helloWorldBeanTwo) {
        this.helloWorldBeanTwo = helloWorldBeanTwo;
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
//    @Override
//    public String toString() {
//        return "HelloWorldBean{" +
//                "message='" + message + '\'' +
//                '}';
//    }
}
