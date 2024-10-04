<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> 내가 누구개 | 견종판별결과 </title>
    <link rel="stylesheet" href="resources/css/main_chart.css">
    <link rel="stylesheet" href="resources/css/header.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jua&display=swap">
    <link rel="stylesheet" href="resources/css/main_sh.css">
    <link rel="stylesheet" href="resources/css/download_result_modal.css">
	<script type="text/javascript">
		var Per0 = '${map.Per0}'.replace('%', '');
		var Per1 = '${map.Per1}'.replace('%', '');
		var Per2 = '${map.Per2}'.replace('%', '');
		var Per3 = '${map.Per3}'.replace('%', '');
		var Per4 = '${map.Per4}'.replace('%', '');
		
		window.addEventListener("load", function(){
			if('${map.En0}' == null || '${map.En0}' == ''){
				var noimage = document.querySelector(".img_dog2");
				var text = document.querySelector("#fontSize");
				var dscription = document.querySelector(".dscription");
				var donut_chart = document.querySelector(".donut_chart");
				noimage.src="resources/image/NoImage.png"
				text.innerHTML = '올바른 이미지가 아닙니다.';
				dscription.innerHTML="";
				donut_chart.style.display='none';
			}
		})
		
	</script>
</head>
<%@include file="/WEB-INF/views/common/header.jsp" %>
<body>
    
    <main id="result_main">
        <div class="jua-regular title_main">
            <h2>나의 강아지는 무슨 종일까? <img src="resources/image/main/dog_drw(f).png" alt="귀여운_강아지_이미지" class="me_dog"></h2>
            <p class="subheading">견종 판독결과</p>
        </div>
        <div id="result_img">
            <img src="/downLoad?ofile_name=${map.ofile }&sfile_name=${map.sfile} " alt="사용자_입력이미지" class="img_dog img_dog1" >
            <img src="resources/image/list/${map.En0 }.jpg" alt="결과_출력이미지" class="img_dog img_dog2">
        </div>
        <div class="result_box jua-regular">
            <div class="enter" id="fontSize"><img src="resources/image/main/강아지발.png" alt="발자국아이콘" class="icon4">AI 판독 결과 : ${map.Kor0}</div>
            <div class="dscription">아래의 이미지를 클릭하시면 해당 견종의 상세설명 페이지로 이동합니다.</div>
        </div>
        
        <div class="donut_chart">
            <div class="donut_container">
	            <div>
	            	<h4 class="jua-regular cen">${map.Kor0}</h4>
	               	<a href="/DogList?dog_en_name=${map.En0 }"><div class="chart doughnut1"><span class="dog_center dog1" style="background-image: url(resources/image/list/${map.En0 }.jpg);"><b class="font">${map.Per0}</b></span></div></a>
	            </div>
	            <div>
	            	<h4 class="jua-regular cen">${map.Kor1}</h4>   
	               	<a href="/DogList?dog_en_name=${map.En1 }"><div class="chart doughnut2"><span class="dog_center dog2" style="background-image: url(resources/image/list/${map.En1 }.jpg);"><b class="font">${map.Per1}</b></span></div></a>
	            </div>
	            <div>
	            	<h4 class="jua-regular cen">${map.Kor2}</h4>
	               	<a href="/DogList?dog_en_name=${map.En2 }"><div class="chart doughnut3"><span class="dog_center dog3" style="background-image: url(resources/image/list/${map.En2 }.jpg);"><b class="font">${map.Per2}</b></span></div></a>
	            </div>
	            <div>
	            	<h4 class="jua-regular cen">${map.Kor3}</h4>
	               	<a href="/DogList?dog_en_name=${map.En3 }"><div class="chart doughnut4"><span class="dog_center dog4" style="background-image: url(resources/image/list/${map.En3 }.jpg);"><b class="font">${map.Per3}</b></span></div></a>
	            </div>
	            <div>
	            	<h4 class="jua-regular cen">${map.Kor4}</h4>
	               	<a href="/DogList?dog_en_name=${map.En4 }"><div class="chart doughnut5"><span class="dog_center dog5" style="background-image: url(resources/image/list/${map.En4 }.jpg);"><b class="font">${map.Per4}</b></span></div></a>
	            </div>
            </div>
            
        </div>
        <div class="result_download copy_container">
        	<div class="result_img_download jua-regular" id="download_img_modal">
                <h3 class="down_title">우리 반려견의 견종은?</h3>
                <img src="/downLoad?ofile_name=${map.ofile }&sfile_name=${map.sfile} " alt="사용자_입력이미지" class="result_dog_img" id="result_dog_img" data-sfile="${map.sfile }">
                <img src="resources/image/list/${map.En0 }.jpg" alt="결과_출력이미지" class="result_dog_img">
                <p class="result_img_text"><img src="resources/image/main/강아지아이콘.png" alt="강아지아이콘" class="dog_icon">견종: ${map.Kor0}</p>
                <label for="nameInput" class="label_size">이름 : </label>
                <input type="text" id="nameInput" placeholder="멍뭉이" class="dog_input"><br>
                <label for="ageInput" class="label_size">나이 : </label>
                <input type="text" id="nameInput" placeholder="2세" class="dog_input"><br>
                <button class="download_f jua-regular" id="download_f"><img src="resources/image/main/download_marker.png" alt="다운로드" class="icon3">이미지 다운로드</button>
            </div>
            <div class="close" id="closeModal">X</div>
            <button  id="img_download_btn" class="bu_2 jua-regular"><img src="resources/image/main/image-gallery_3342119.png" alt="다운" class="icon2"> 결과다운로드</button>
            <div id="notification" class="notification jua-regular">링크가 복사되었습니다.</div>
            <button class="bu_2 jua-regular" id="copyLinkBtn"><img src="resources/image/main/share_icon.png" alt="공유" class="icon2">공유하기</button> 
            <!-- 공유하기 버튼을 클릭시 링크가 복사 -->
            <a href="/DogSearch"><button class="bu_2 jua-regular"><img src="resources/image/main/다시하기.png" alt="다시" class="icon2">다시하기</button></a>
        </div>
        <a id="notCorrect"> 결과가 일치하지 않나요?</a>
        <div id="notCorBox">
        <h3 class="jua-regular" id="notCorRe">개선 내용이 확인되었습니다! <br> 더 나아진 모습을 보여드리겠습니다!! </h3>
        	<div id="notCorForm">
        		
	        	<h3 class="jua-regular" id="notCorH3">결과 개선을 위해 도와주세요!</h3><br>
	        	<h5 class="jua-regular" id="notCorH5">원래 견종은 무엇인가요?</h5>
	        	<input type="text" id="dog_kor_name" name="dog_kor_name">
	        	<button id="notCorBtn" type="button">제출하기</button>
	        	
        	</div>
        	<button id="okBtn" class="bu_2" type="button">확인</button>
        </div>
        
    </main>
<%@include file="/WEB-INF/views/common/footer.jsp" %>
<script src="resources/js/main_sh.js"></script>
<script src="resources/js/main_doughnut_chart.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="resources/js/download_modal.js"></script>

</body>
</html>