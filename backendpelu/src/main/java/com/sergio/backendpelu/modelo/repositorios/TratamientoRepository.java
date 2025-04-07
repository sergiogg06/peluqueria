package com.sergio.backendpelu.modelo.repositorios;

import com.sergio.backendpelu.modelo.entidades.Tratamiento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TratamientoRepository extends JpaRepository<Tratamiento, Long> {
}
