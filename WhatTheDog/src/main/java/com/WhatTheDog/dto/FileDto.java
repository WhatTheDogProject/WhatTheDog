package com.WhatTheDog.dto;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class FileDto {

	private String user_img_id;
	private String ofile_name;
	private String sfile_name;
	private String upload_date;
	
}
