package com.LAB.LabSystem;

import com.LAB.LabSystem.Service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication

public class LabSystemApplication {
	@Autowired
	private EmailService emailService;

	public static void main(String[] args) {
		SpringApplication.run(LabSystemApplication.class, args);
	}

}
