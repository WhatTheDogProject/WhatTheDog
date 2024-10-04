package com.WhatTheDog.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URLEncoder;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FileController {
	
	
	
	// 파일 다운로드
	@GetMapping(value="/downLoad")
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		// os 환경에 따른 디렉토리 변경
		String osName = System.getProperty("os.name").toLowerCase();
		String FILEPATH = "/home/upload";
		/*
		if(osName.contains("win")) {
			FILEPATH="d:/upload";
		}else if(osName.contains("nix") ) {
			FILEPATH="/upload";
		}
		*/
		
		String oname = "";
		if(request.getParameter("ofile_name") != null) {
			oname = URLEncoder.encode(request.getParameter("ofile_name"), "utf-8");
		}
		String sname = request.getParameter("sfile_name");
		File file = new File(FILEPATH + File.separator+sname); //저장된 파일 경로
		if(file.exists()) {
			response.setContentType("application/octet-stream"); // 파일 다운시 지정하는 속성.
			response.setHeader("Content-Length", ""+file.length()); // 길이지정
			response.setHeader("Content-Disposition", "attachment; filename=\""+oname+"\""); //다운로드 파일 이름 지정
			
			ServletOutputStream ostream = response.getOutputStream(); //출력스트림
			FileInputStream istream = new FileInputStream(file);
			int byteRead = -1;
			byte[] buffer = new byte[4096];
			while((byteRead = istream.read(buffer))>-1) {
				ostream.write(buffer, 0, byteRead);
			}
			istream.close();
			ostream.close();
		}else {
			request.setAttribute("msg", "파일이 존재하지 않습니다. ");
			request.getRequestDispatcher("/WEB-INF/views/common/msgBox.jsp").forward(request, response);
		}
		
	}
	
	
}
