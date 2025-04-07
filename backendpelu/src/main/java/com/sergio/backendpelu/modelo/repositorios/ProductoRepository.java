package com.sergio.backendpelu.modelo.repositorios;

import com.sergio.backendpelu.modelo.entidades.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
}
