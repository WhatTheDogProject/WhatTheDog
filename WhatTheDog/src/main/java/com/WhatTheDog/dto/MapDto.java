package com.WhatTheDog.dto;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class MapDto {
	private String fclty_nm;
	private String ctgry_one_nm;
	private String ctgry_two_nm;
	private String ctgry_three_nm;
	private String ctprvn_nm;
	private String signgu_nm;
	private String legaldong_nm;
	private String li_nm;
	private String lnbr_no;
	private String road_nm;
	private String buld_no;
	private double lc_la;
	private double lc_lo;
	private int zip_no;
	private String rdnmadr_nm;
	private String lnm_addr;
	private String tel_no;
	private String hmpg_url;
	private String rstde_guid_cn;
	private String oper_time;
	private String parkng_posbl_at;
	private String utiliiza_prc_cn;
	private String pet_posbl_at;
	private String pet_info_cn;
	private String entrn_posbl_pet_size_value;
	private String pet_lmtt_mtr_cn;
	private String in_place_acp_posbl_at;
	private String out_place_acp_posbl_at;
	private String fclty_info_dc;
	private String pet_acp_adit_chrge_value;
	private String last_updt_de;
}
