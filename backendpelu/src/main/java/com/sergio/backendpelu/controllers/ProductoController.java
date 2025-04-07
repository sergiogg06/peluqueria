package com.sergio.backendpelu.controllers;

import com.sergio.backendpelu.modelo.entidades.Producto;
import com.sergio.backendpelu.modelo.repositorios.ProductoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:5173") // Para que React pueda acceder
public class ProductoController {

    private final ProductoRepository productoRepo;

    public ProductoController(ProductoRepository productoRepo) {
        this.productoRepo = productoRepo;
    }

    @GetMapping
    public List<Producto> getAll() {
        return productoRepo.findAll();
    }
}