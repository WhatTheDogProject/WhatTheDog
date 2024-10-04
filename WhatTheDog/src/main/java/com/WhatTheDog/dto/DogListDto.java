package com.WhatTheDog.dto;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class DogListDto {
	
	private String doglist_num;
	private String dog_kor_name;
	private String dog_en_name;
	private String dog_size;
	private String dog_outfit;
	private String dog_personality;
	private String dog_rec;
	private String dog_dis;
	private String dog_color;
	private String dog_comment;

}
