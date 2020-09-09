package com.wealth.wealthusers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@SpringBootApplication
public class WealthusersApplication {



	public static void main(String[] args) {
		SpringApplication.run(WealthusersApplication.class, args);
	}

}
