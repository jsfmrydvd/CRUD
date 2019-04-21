package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping("")
    public String welcomePage(Model model) {
        model.addAttribute("title", "Fake News Detector AI");
        return "index";
    }

//    @RequestMapping("/data")
//    public String dataPage(Model model) {
//        model.addAttribute("title","Data");
//        return "data";
//    }

}
