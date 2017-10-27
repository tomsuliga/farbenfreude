package org.suliga.farbenfreude.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.suliga.farbenfreude.model.GameGrid;

@Controller
public class MainController {
	@GetMapping({"/home"})
	public String getHome(Model model) {
		model.addAttribute("gameGrid", new GameGrid());
		return "home";
	}
	
	@GetMapping({"/", "/index"})
	public String getOtherHomes(Model model) {
		return "redirect:home";
	}
}
