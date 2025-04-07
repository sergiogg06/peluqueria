package com.sergio.backendpelu.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") // Asegura que React pueda acceder al backend
public class PeluqieriaController {
    @GetMapping("/saludo")
    public String saludo() {
        return "Hola desde el backend";
    }
}
