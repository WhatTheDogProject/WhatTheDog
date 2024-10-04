package com.WhatTheDog.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.WhatTheDog.dto.DogListDto;
import com.WhatTheDog.dto.MapDto;

@Mapper
public interface DogListMapper {

	// 견종리스트 가져오기
	public DogListDto getDogList();

	// dog_en_name으로 견종목록 가져오기
	public DogListDto getOneDog(String dog_en_name);
	
	// 이용목적, 지역1 이용해 지역2 가져오기
	public List<MapDto> getMapReg1(MapDto mapDto);
	
	// 이용목적, 지역1,2 이용해 지역3 가져오기
	public List<MapDto> getMapReg2(MapDto mapDto);
	
	// 이용목적, 지역1,2,3 이용해 해당 리스트 가져오기 
	public List<MapDto> getMap(MapDto mapDto);

	// 잘못된 결과 수집. 파일명, 견종 한국이름 저장.
	public int insertNotCor(@Param("dog_kor_name") String dog_kor_name, @Param("sfile_name") String sfile_name);

	
	
}
