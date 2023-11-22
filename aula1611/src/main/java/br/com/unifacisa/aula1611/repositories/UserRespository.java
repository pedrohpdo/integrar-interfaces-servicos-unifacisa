package br.com.unifacisa.aula1611.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import br.com.unifacisa.aula1611.models.User;

public interface UserRespository extends MongoRepository<User, String>{

    
} 
