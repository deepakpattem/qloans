package com.example.demo.controller;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.model.User;
import com.example.demo.model.Service.UserService;

@org.springframework.web.bind.annotation.RestController
public class RestController {


	@Autowired
	private UserService service;
	
	@PostMapping("/save-user")
	@Transactional
	@CrossOrigin
	public String registerUser(@RequestBody User user) {
		
		service.saveMyUser(user);
		return "Hello " +user.getFirstname()+"your registratin is sucessful";
	
	
		
	}
	
	@GetMapping("/all-users")	
	public Iterable<User> showAllUsers(){
		return service.showAllUsers();
	}
	
	@GetMapping("/delete/{username}")
	@Transactional
	public Iterable<User> deleteUser(@PathVariable  String username){
		return service.deleteUserByUsername(username);
		
	}

}
