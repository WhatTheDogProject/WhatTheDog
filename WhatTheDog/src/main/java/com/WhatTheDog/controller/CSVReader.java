package com.WhatTheDog.controller;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CSVReader {

	public static void main(String[] args) {
		
	
	CSVReader csvReader = new CSVReader();
	
	csvReader.readCSV();
	}

	
	public List<List<String>> readCSV(){
		List<List<String>> csvList = new ArrayList<List<String>>();
		File csv = new File("D:/KC_PET_ACP_CTLSTT_LC_DATA_2023.csv");
		BufferedReader br = null;
		String line = "";
		
		try {
			br = new BufferedReader(new FileReader(csv));
			while((line = br.readLine()) != null) {
				List<String> aLine = new ArrayList<String>();
				String[] lineArr = line.split(",");
				aLine = Arrays.asList(lineArr);
				csvList.add(aLine);
			}
			
			
			
		} catch (FileNotFoundException e) {
			
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				if (br != null) {
					br.close()
;				}
			}catch(IOException e) {
				e.printStackTrace();
			}
		}
		
		
		for(List<String> item : csvList ) {
			System.out.println(item.get(0));
		}
		return csvList;
	};
	
}
