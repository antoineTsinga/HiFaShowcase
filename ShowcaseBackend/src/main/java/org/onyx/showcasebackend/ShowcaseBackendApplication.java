package org.onyx.showcasebackend;

import org.onyx.showcasebackend.Web.services.UserService;
import org.onyx.showcasebackend.entities.Role;
import org.onyx.showcasebackend.entities.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;

@SpringBootApplication
public class ShowcaseBackendApplication  {

	public static void main(String[] args) {
		SpringApplication.run(ShowcaseBackendApplication.class, args);
	}

}
