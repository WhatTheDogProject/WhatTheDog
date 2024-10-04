package com.WhatTheDog.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.WhatTheDog.service.DogListService;

@Controller
public class DogMainController {
	
	@Autowired
	DogListService ser;
	
	// 견종목록 페이지에 그레이하운드 기본으로 띄움
	@GetMapping(value="/DogList")
	public String Main(Model model){
		Map<String, Object> map = ser.getDogList();
		model.addAttribute("map", map);
		return "/main/DogList";
	}
	
	// 견종판별기 페이지로
	@GetMapping(value="/DogSearch")
	public String Search(){
		return "/main/DogSearch";
	}
	
	// 견종판별결과 페이지로
	@GetMapping(value="/DogResult")
	public String Result(){
		return "/main/DogResult";
	}
	
	// 문화생활공간 페이지로
	@GetMapping(value="/DogMap")
	public String DogMap(){
		return "/main/DogMap";
	}
	
	// 제작자/출처 페이지로
	@GetMapping(value="/DogRef")
	public String DogRef(){
		return "/main/DogRef";
	}
	
	
	
	// 파일 업로드 후 견종 분석하기 클릭시 실행
	@PostMapping(value="/DogSearchAction")
	public String DogSearchAction(HttpServletRequest request, Model model, HttpSession session){
		Map<String, Object> map = ser.uploadImg(request); // MultipartRequest통한 이미지 저장 및 분석
		if(map != null) {
			session.setAttribute("map", map);
			return "redirect:/DogResult";
		}else {
			model.addAttribute("msg", "분석 실패. 다시 시도해주세요. ");
			model.addAttribute("url", "/DogSearch");
			return "/common/msgBox";
		}
		
	}
	
}
