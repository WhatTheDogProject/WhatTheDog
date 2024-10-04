package com.WhatTheDog.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.WhatTheDog.dto.FileDto;

@Mapper
public interface FileMapper {
	
	// 파일테이블에 업로드파일내역 등록
	int regFile(FileDto file);

	

	
	
}
