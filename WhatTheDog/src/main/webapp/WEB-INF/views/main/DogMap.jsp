<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>내가 누구개 | 문화생활지도</title>
    <link rel="stylesheet" href="resources/css/main_sh.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Yeon+Sung&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="resources/css/DogMap.css">
</head>
<%@include file="/WEB-INF/views/common/header.jsp" %>
<body>
	<div class="map_body">
	<div id="menu_box">
	    <button class="bu_2 jua-regular clear_select" id="clear_select">선택 지우기</button>
	    <form action="" class="container yeon-sung-regular" id="search_bar" method="post">
	        <div class="checkbox purpose" >
	            <h3>이용목적</h3>
	            <fieldset class="checkbox_group" id="ctgry_three_nm">
	                <label><input type="radio"  name="categoryN" value="동물약국" checked> 동물약국</label>
	                <label><input type="radio"  name="categoryN" value="동물병원"> 동물병원</label>
	                <label><input type="radio"  name="categoryN" value="미술관"> 미술관</label>
	                <label><input type="radio"  name="categoryN" value="문예회관"> 문예회관</label>
	                <label><input type="radio"  name="categoryN" value="미용"> 미용</label>
	                <label><input type="radio"  name="categoryN" value="박물관"> 박물관</label>
	                <label><input type="radio"  name="categoryN" value="동물용품"> 동물용품</label>
	                <label><input type="radio"  name="categoryN" value="식당"> 식당</label>
	                <label><input type="radio"  name="categoryN" value="여행지"> 여행지</label>
	                <label><input type="radio"  name="categoryN" value="위탁관리"> 위탁관리</label>
	                <label><input type="radio"  name="categoryN" value="카페"> 카페</label>
	                <label><input type="radio"  name="categoryN" value="펜션"> 펜션</label>
	                <label><input type="radio"  name="categoryN" value="호텔"> 호텔</label>
	            </fieldset>
	        </div>
	        <div class="checkbox">
	            <h3>지역 1 (특별시, 광역시, 도)</h3> 
	            <fieldset class="checkbox_group" id="ctprvn_nm">
	                <label><input type="radio" name="region1N" value="강원도" checked> 강원도</label>
	                <label><input type="radio" name="region1N" value="경기도" > 경기도</label>
	                <label><input type="radio" name="region1N" value="경상남도"> 경상남도</label>
	                <label><input type="radio" name="region1N" value="경상북도"> 경상북도</label>
	                <label><input type="radio" name="region1N" value="광주광역시"> 광주광역시</label>
	                <label><input type="radio" name="region1N" value="대구광역시"> 대구광역시</label>
	                <label><input type="radio" name="region1N" value="대전광역시"> 대전광역시</label>
	                <label><input type="radio" name="region1N" value="부산광역시"> 부산광역시</label>
	                <label><input type="radio" name="region1N" value="서울특별시" > 서울특별시</label>
	                <label><input type="radio" name="region1N" value="울산광역시"> 울산광역시</label>
	                <label><input type="radio" name="region1N" value="인천광역시"> 인천광역시</label>
	                <label><input type="radio" name="region1N" value="전라남도"> 전라남도</label>
	                <label><input type="radio" name="region1N" value="전라북도"> 전라북도</label>
	                <label><input type="radio" name="region1N" value="충청남도"> 충청남도</label>
	                <label><input type="radio" name="region1N" value="충청북도"> 충청북도</label>
	                <label><input type="radio" name="region1N" value="세종특별자치시"> 세종특별자치시</label>
	                <label><input type="radio" name="region1N" value="제주특별자치도"> 제주특별자치도</label>
	            </fieldset>
	        </div>
	        <div class="checkbox">
	            <h3>지역 2 (시, 군, 구)</h3> 
	            <fieldset class="checkbox_group" id="signgu_nm">
	            </fieldset>
	        </div>
	        <div class="checkbox">
	            <h3>지역 3 (동)</h3>
	            <fieldset class="checkbox_group" id="legaldong_nm">
	            </fieldset> 
	        </div>
	    </form>
	    <button class="bu_2 btn_location1 jua-regular" id="btnClose">검색 조건 닫기</button>
	    <button class="bu_2 btn_location2 jua-regular" id="btnOpen">검색 조건 열기</button>
	    </div>
	    <div class="map" id="map" >
	    
	    </div>
	
	<script type="text/javascript" src="resources/js/testapi.js"></script>
	<script type="text/javascript" src="resources/js/DogMap.js"></script>
	<div id="notification" class="notification jua-regular">주소가 복사되었습니다.</div>
</div>
</body>
<script src="resources/js/DogMap_2.js"></script>

<%@include file="/WEB-INF/views/common/footer.jsp" %>
</html>