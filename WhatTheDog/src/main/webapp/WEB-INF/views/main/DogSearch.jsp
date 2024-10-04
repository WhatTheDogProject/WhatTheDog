<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> 내가 누구개 | 견종찾기 </title>
    <link rel="stylesheet" href="resources/css/main_upload_img.css">
    <link rel="stylesheet" href="resources/css/main_sh.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
    <script src="resources/js/DogSearch.js"></script>
</head>
<%@include file="/WEB-INF/views/common/header.jsp" %>
<body>
    <main id="main_sh">
        <div class="modal_loading jua-regular"  id="loading_modal">
            <div class="sprite_dog"></div>
            <div class="sprite_dog2"></div>
            <p class="p_text">강아지 AI 가 분석 중입니다.<br>잠시만 기다려 주세요</p>
        </div>
        <div class="upload_contaier" id="upload_contaier_main">
            <div class="jua-regular title_main">
                <h2>나의 강아지는 누굴까? <img src="resources/image/main/dog_drw(f).png" alt="귀여운 강아지 이미지" class="me_dog"></h2>
            </div>
            <form enctype="multipart/form-data" method="post" class="upload_contaier2" action="/DogSearchAction" id="image_form">
	            <button class="img_re_btn jua-regular" id="img_re" type="button">이미지 변경하기</button>
	            <button class="img_test_btn jua-regular" id="start_analysis_btn">분석 시작하기</button>
	            <div id="drop_img_area" class="jua-regular">
	                <div id="view_text">
	                    <p class="text_img">여기를 클릭하여 이미지를 업로드 해주세요.</p>
	                    <br>
	                    <input type="file" id="file_input" name="file_input" accept="image/*" class="file_input_style">
	                    <img src="resources/image/main/upload_icon.png" alt="업로드이미지" class="up_img">
	                </div>
	                <img id="image_preview" src="" alt="사용자 업로드 이미지"  class="full-image">
	            </div>
	         </form>
        </div>
    </main>
    
<%@include file="/WEB-INF/views/common/footer.jsp" %>
<script src="resources/js/main_upload_img.js"></script>
</body>
</html>
</body>
</html>