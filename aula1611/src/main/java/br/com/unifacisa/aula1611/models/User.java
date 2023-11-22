package br.com.unifacisa.aula1611.models;

import java.util.ArrayList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    private String id;

    private String name;
    private String email;
    private ArrayList<String> social = new ArrayList<String>();

    public User(String name, String email){
        this.name = name;
        this.email = email;
    }
    public User(String name, String email, ArrayList<String> social){
        this.name = name;
        this.email = email;
        this.social = social;
    }
}
