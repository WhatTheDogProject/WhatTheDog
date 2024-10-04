package com.WhatTheDog.service;

import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.WhatTheDog.dto.DogListDto;
import com.WhatTheDog.dto.MapDto;
import com.WhatTheDog.mapper.DogListMapper;
import com.oreilly.servlet.MultipartRequest;

@Service
public class DogListService {

   @Autowired
   DogListMapper mapper;
   
   @Autowired
   FileService fileService;
   
   // 견종리스트 기본페이지 불러오기
   public Map<String, Object> getDogList(){
      Map<String, Object> map = new HashMap<String, Object>();
      DogListDto dogDto = mapper.getDogList();
      System.out.println("Service list "+ dogDto);
      map.put("DogList", dogDto);
      return map;
      
   }

   // 견종이름 클릭시 dog_en_name으로 견종정보 불러오기
   public DogListDto getOneDog(String dog_en_name) {
      DogListDto oneDogDto = mapper.getOneDog(dog_en_name);
      return oneDogDto;
   }


   // 이미지파일 처리 후 결과 반환 
   public Map<String, Object> uploadImg(HttpServletRequest request) {
      Map<String, Object> map = new HashMap<String, Object>();
      String Direct = "/home/upload"; // 이미지 파일 업로드 경로
      int maxSize = 4000*4000;
      String encoding = "UTF-8";
      try {
         // 지정 경로에 파일 저장
         MultipartRequest mr = new MultipartRequest(request, Direct, maxSize, encoding); 
         
         // 파일테이블에 업로드 및 딥러닝모델 통해 분석. json으로 결과 저장
         Map<String, Object> fileMap  = fileService.regFile(mr);
         // System.out.println("DogListSer regFileres : "+fileMap.get("res"));
         int res = (int)fileMap.get("res");
         String sfile = (String)fileMap.get("sfile");
         String ofile = (String)fileMap.get("ofile");
         if(res>0) {
            map.put("msg", "처리성공");
            map.put("sfile", sfile);
            map.put("ofile", ofile);
         }
         
         // 위의 코드에서 저장된 json파일 내용 읽어와서 map에 담기 
         JSONParser parser = new JSONParser();
         FileReader reader = new FileReader("/home/json/file.json");
         Object obj = parser.parse(reader);
         JSONArray jsonArray = (JSONArray) obj;
         reader.close();
         
         // 견종은 최대 5마리만 출력
         for(int i = 0; i<5; i++) {
            JSONObject firstObject = (JSONObject) jsonArray.get(i);
            String en = (String)firstObject.get("dog_en_name");
            String kor = (String)firstObject.get("dog_kor_name");
            String per = (String)firstObject.get("percentage");
            map.put("En"+i, en);
            map.put("Kor"+i, kor);
            map.put("Per"+i, per);
         }
      }catch(IOException e) {
         System.out.println("처리 중 오류 발생 : "+ e.getMessage());
      }catch(ParseException e){
         System.out.println("처리 중 오류 발생 : "+ e.getMessage());
      }
      System.out.println("DogListService, map : "+map);
      return map;
   }

   public List<MapDto> getMapReg1(MapDto mapDto) {
      List<MapDto> list = mapper.getMapReg1(mapDto);
      
      return list;
   }

   public List<MapDto> getMapReg2(MapDto mapDto) {
      List<MapDto> list = mapper.getMapReg2(mapDto);
      return list;
   }
   
   public List<MapDto> getMap(MapDto mapDto) {
      List<MapDto> list = mapper.getMap(mapDto);
      return list;
   }

   public int insertNotCor(String dog_kor_name, String sfile_name) {
      int res = mapper.insertNotCor(dog_kor_name, sfile_name);
      System.out.println("ser res : "+res);
      return res;
   }

   
}
