package com.example.demo.model.repositry;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.User;

public interface UserRepositry extends CrudRepository<User,Integer>{

	public Iterable<User> deleteByUsername(String username);
	
}
