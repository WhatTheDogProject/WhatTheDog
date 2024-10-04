<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<link href="resources/css/header.css" rel="stylesheet">
<title>header</title>
</head>
<body>
	 
    <header>
	   <!-- 로고(클릭시 메인화면 으로 이동)
	   메뉴 버튼 -> 클릭시 메뉴버튼이 보여짐 -> 토글버튼
	   토글 메뉴 -->
	   <a href="/DogSearch" id="logo_a"><img src="resources/image/logo(f).png" alt="로고" class="logo"></a>
	
	   <div class="menu_box" class="jua-regular">
	       <ul>
	           <li><a href="/DogSearch">내가 누구개?</a></li>
	           <li><a href="/DogList">견종목록</a></li>
	           <li><a href="/DogMap">문화공간</a></li>
	           <li><a href="/DogRef">제작자/출처</a></li>
	       </ul>
	   </div> 
	   
	    <div class="image-dropdown-container">
            <img src="resources/image/main/menu_bar.png" alt="메뉴바_이미지" id="navbar" class="dropdown-image">
            
        
        </div>   
       
    </header>
    <ul class="dropdown-menu">
       	<li><a href="/DogSearch">내가 누구개?</a></li>
    	<li><a href="/DogList">견종목록</a></li>
    	<li><a href="/DogMap">문화공간</a></li>
    	<li><a href="/DogRef">제작자/출처</a></li>
    </ul>
     <script src="resources/js/header.js"></script>
</body>
</html>
