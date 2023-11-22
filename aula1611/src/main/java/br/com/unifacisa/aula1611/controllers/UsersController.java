package br.com.unifacisa.aula1611.controllers;


import br.com.unifacisa.aula1611.models.UserRequest;
import br.com.unifacisa.aula1611.models.User;
import br.com.unifacisa.aula1611.repositories.UserRespository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;


@Controller
public class UsersController {
    
    @Autowired
    UserRespository userRespository;

    @MutationMapping()
    public User createUser(@Argument UserRequest userRequest) {
        User newUser = userRespository.save(new User(userRequest.name(), userRequest.email()));
        return newUser;
    }
    
    @QueryMapping()
    public User get(@Argument String id){
        return userRespository.findById(id)
        .map(user -> user)
        .orElse(null);
    }
}
