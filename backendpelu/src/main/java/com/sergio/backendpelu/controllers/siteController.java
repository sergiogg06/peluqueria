package com.sergio.backendpelu.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class siteController {
    @GetMapping("/")
    public String home() {
    return "www/site/index";
    }

}
