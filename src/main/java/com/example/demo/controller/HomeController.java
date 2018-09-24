package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

//    @RequestMapping("")
//    public String viewPage(Model model) {
//        model.addAttribute("title", "title");
//        return "home";
//    }

    @RequestMapping("")
    public String welcomePage(Model model) {
        model.addAttribute("title", "title");
        return "index";
    }

}
