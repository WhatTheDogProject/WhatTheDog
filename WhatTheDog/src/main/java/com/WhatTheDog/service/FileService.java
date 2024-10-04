package com.WhatTheDog.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.WhatTheDog.dto.FileDto;
import com.WhatTheDog.mapper.FileMapper;
import com.oreilly.servlet.MultipartRequest;

@Service
public class FileService {

   
   
   @Autowired
   FileMapper mapper;
   /*
   if(osName.contains("win")) {
      FILEPATH = "d:/upload";
   }else if(osName.contains("nix") || osName.contains("nux") || osName.contains("aix")) {
      FILEPATH = "/upload";
      
   }
   */
   
   // 파일테이블에 이미지명 업로드
   public Map<String, Object> regFile(MultipartRequest mr) {
      int res=0;
      Map<String, Object> map = new HashMap<String, Object>();
      Enumeration<String> e = mr.getFileNames();
      if(e.hasMoreElements()) {
         String elname = (String)e.nextElement();
         String oname = mr.getFilesystemName(elname);
         FileDto file = new FileDto();
         String sname = rename(oname);
         file.setOfile_name(oname);
         file.setSfile_name(sname);
         System.out.println("세팅된 getOfile_name값 : " + file.getOfile_name());
         System.out.println("세팅된 getSfile_name값 : " + file.getSfile_name());
         res = mapper.regFile(file);
         map.put("res", res);
         map.put("sfile", sname);
         map.put("ofile", oname);
      }else {
         System.out.println("해당되는 파일이 없습니다. ");
      }
      return map;
   }

   
   public String rename(String fileName) {
      // 파일이름생성 및 파일에 새이름 적용
      String FILEPATH = "/home/upload";
      String frontName = fileName.substring(0, fileName.lastIndexOf('.'));
      String endName = fileName.substring(fileName.lastIndexOf('.'));
      String now = new SimpleDateFormat("_yyyyMMdd_HmsS").format(new Date());
      String NewFileName = frontName+now+endName;
      File oldFile = new File(FILEPATH+ File.separator+fileName);
      File newFile = new File(FILEPATH+ File.separator+NewFileName);
      oldFile.renameTo(newFile);
      System.out.println("newFile : "+newFile);
      // cmd창 실행 python.exe실행 py파일 실행 h5모델 실행 >> 결과 json파일 생성.
      ProcessBuilder builder = new ProcessBuilder();
      
      builder.command("bash", "-c", 
    		  "python3.12 /home/pythonExeFile/real_final_checker_4layers.py "+ 
              newFile.getAbsolutePath());

      /*
      if(osName.contains("win")) {
         builder.command("cmd.exe", "/c", 
               "D:\\pythonExeFile\\venv\\Scripts\\python.exe", 
                   "D:\\pythonExeFile\\real_final_checker_4layers.py", 
                   newFile.getAbsolutePath());
      }else if(osName.contains("nix") || osName.contains("nux") || osName.contains("aix")) {
         builder.command("cmd.exe", "/c", 
               "/pythonExeFile/venv/Scripts/python.exe", 
                   "/pythonExeFile/real_final_checker_4layers.py", 
                   newFile.getAbsolutePath());
      }
      */
      /*builder.command("cmd.exe", "/c", 
                "D:\\Project\\WhatDog\\WhatTheDog\\venv\\Scripts\\python.exe", 
                "D:\\Project\\WhatDog\\WhatTheDog\\src\\com\\WhatTheDog\\final_code\\real_final_checker_4layers.py", 
                newFile.getAbsolutePath()); 
      builder.command("cmd.exe", "/c", 
            "D:\\pythonExeFile\\venv\\Scripts\\python.exe", 
                "D:\\pythonExeFile\\real_final_checker_4layers.py", 
                newFile.getAbsolutePath()); */
      try {
         Process process = builder.start();
         BufferedReader br = new BufferedReader(new InputStreamReader(process.getInputStream(), StandardCharsets.UTF_8 ));
           String line = null;
           while((line = br.readLine()) != null ){
                System.out.println(line);
           }
           if(process != null) {
               process.destroy();
           }
      } catch (IOException e) {
         e.printStackTrace();
      }
      return NewFileName;
   }

}

