package com.sergio.backendpelu.controllers;

import com.sergio.backendpelu.modelo.entidades.Tratamiento;
import com.sergio.backendpelu.modelo.repositorios.TratamientoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tratamientos")
@CrossOrigin(origins = "http://localhost:5173")
public class TratamientoController {

    private final TratamientoRepository tratamientoRepo;

    public TratamientoController(TratamientoRepository tratamientoRepo) {
        this.tratamientoRepo = tratamientoRepo;
    }

    @GetMapping
    public List<Tratamiento> getAll() {
        return tratamientoRepo.findAll();
    }
}
