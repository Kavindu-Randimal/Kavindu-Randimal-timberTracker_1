package com.example.demo.model;

import javax.persistence.GeneratedValue;

public class LoginUser {

    private String name;
    private Boolean loggin;
    private String message;

    public LoginUser(String name, boolean logging, String message ) {
        this.name = name;
        this.loggin = logging;
        this.message = message;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getLoggin() {
        return loggin;
    }

    public void setLoggin(Boolean loggin) {
        this.loggin = loggin;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
