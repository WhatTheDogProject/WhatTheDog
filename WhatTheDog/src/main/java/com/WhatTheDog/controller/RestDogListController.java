package com.WhatTheDog.controller;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.WhatTheDog.dto.DogListDto;
import com.WhatTheDog.dto.MapDto;
import com.WhatTheDog.service.DogListService;

@RestController
public class RestDogListController {

	@Autowired
	DogListService ser;
	

	
	// dog_en_name 작업표시줄로 변수 받아서 견종리스트 조회
	@GetMapping(value="/findList")
	public  ResponseEntity<DogListDto> findDog(@RequestParam String dog_en_name) {
		DogListDto oneDogDto = ser.getOneDog(dog_en_name);
		System.out.println("restCon-oneDogDto"+oneDogDto);
		
		return ResponseEntity.ok(oneDogDto);
	}
	
	// 결과 불일치 시, 사용자가 입력한 견종명, 파일이름 저장.
	@PostMapping(value="/insertNotCor")
	public ResponseEntity<Integer> insertNotCor(@RequestBody Map<String, Object> data) {
		String dog_kor_name = (String) data.get("dog_kor_name");
		String sfile_name = (String) data.get("sfile_name");
		int res = ser.insertNotCor(dog_kor_name, sfile_name);
		System.out.println("res : "+res);
		return ResponseEntity.ok(res);
	}
	
	
	@PostMapping(value="/getMapReg1")
	public ResponseEntity<List<MapDto>> getMapReg1(@RequestBody MapDto mapDto) {
		System.out.println("mapDto : "+ mapDto);
		List<MapDto> list = ser.getMapReg1(mapDto);
		return ResponseEntity.ok(list);
	}
	
	
	@PostMapping(value="/getMapReg2")
	public ResponseEntity<List<MapDto>> getMapReg2(@RequestBody MapDto mapDto) {
		System.out.println("mapDto : "+ mapDto);
		List<MapDto> list = ser.getMapReg2(mapDto);
		return ResponseEntity.ok(list);
	}
	
	
	@PostMapping(value="/getMap")
	public ResponseEntity<List<MapDto>> getMap(@RequestBody MapDto mapDto) {
		System.out.println("mapDto : "+ mapDto);
		List<MapDto> list = ser.getMap(mapDto);
		return ResponseEntity.ok(list);
	}
}
