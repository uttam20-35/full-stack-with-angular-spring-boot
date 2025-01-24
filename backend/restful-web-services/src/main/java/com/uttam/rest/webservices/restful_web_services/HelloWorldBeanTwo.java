package com.uttam.rest.webservices.restful_web_services;

public class HelloWorldBeanTwo {

    private String demo;
    private Integer demoOne;

    public HelloWorldBeanTwo(String demo, Integer demoOne) {
        this.demo = demo;
        this.demoOne = demoOne;
    }

    public String getDemo() {
        return demo;
    }

    public void setDemo(String demo) {
        this.demo = demo;
    }

    public Integer getDemoOne() {
        return demoOne;
    }

    public void setDemoOne(Integer demoOne) {
        this.demoOne = demoOne;
    }
}
