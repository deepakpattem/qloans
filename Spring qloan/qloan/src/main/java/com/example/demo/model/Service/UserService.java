package com.example.demo.model.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.model.repositry.UserRepositry;

@Service
public class UserService {

	@Autowired
	private UserRepositry repo;

	public UserService() {}
	
	public UserService(UserRepositry repo) {
		super();
		this.repo = repo;
	}
	
	public void saveMyUser(User user) {
		
		repo.save(user);
		
		
	}
	
	public Iterable<User> showAllUsers(){
		return repo.findAll();
	}
	
	public Iterable<User> deleteUserByUsername(String username){
		repo.deleteByUsername(username);
		return repo.findAll();
	}
	
}
