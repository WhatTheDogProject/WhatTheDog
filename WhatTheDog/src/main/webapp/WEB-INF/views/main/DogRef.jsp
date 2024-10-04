<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>내가 누구개 | 제작자/출처</title>
     <link rel="stylesheet" href="resources/css/main_sh.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
    <style>
          .producer, .sources, .dog_img_Sources{
            border: 2px solid violet;
            border-radius: 10px;
            margin-bottom: 2%;
            background-color: #faebfc;
            width: 84%
        }
        .name_img_move{
            display: flex; /* Flexbox 사용 */
            align-items: center; /* 아이템들을 세로로 가운데 정렬 */
            justify-content: left; /* 아이템들을 가로로 가운데 정렬 */
            margin: 0% 20% 2% 0%; /* 각 제작자 이름과 이미지 사이에 간격 추가 */
        }
        .name_img{
            margin-right: 3%;
            margin-left: 0%;
            width: 100px;
            height: 100px;
            justify-content: left;
            
        }
        .icon_a{
            font-size: 0.9rem;
            text-decoration: none;
            color: black;
        }
        .enter3{
            margin: 8px;
            justify-content: flex-start;
            
            
        }
        .producer{
        	margin-top: 2%;
        	}
       	 @media screen and (max-width: 510px){
          .name_img{
             width: 50px;
             height: 50px;
          }
          .name_img_move{
             font-size: 1rem;
          }
        }
                   
        @media screen and (max-width: 330px){
          .name_img{
             width: 50px;
             height: 50px;
          }
          .name_img_move{
             font-size: 0.6rem;
          }
        }
    </style>
</head>
<%@include file="/WEB-INF/views/common/header.jsp" %>
<body>
    <div class="producer jua-regular ">
        <h2 class="enter3"> 제작자 :</h2> 
        <h2 class="name_img_move enter3"><img src="resources/image/main/CGH.png" alt="cgh" class="name_img"> 최금호 <br> email : duck2498@gmail.com</h2>
        <h2 class="name_img_move enter3"><img src="resources/image/main/YMJ2.png" alt="ymj" class="name_img"> 양민지 <br> email : chymj12172947@gmail.com</h2>
    </div>
    <div class="sources jua-regular">   
        <h2 class="enter3">무료 아이콘 출처 : </h2>
        <h3>
            <a href="https://www.flaticon.com/kr/" title="파일,발 아이콘" class="icon_a enter3">아이콘 제작자: Freepik - Flaticon</a><br>
            <a href="https://www.flaticon.com/kr/free-icons/" title="발 아이콘"  class="icon_a enter3">아이콘 제작자: Us and Up - Flaticon</a><br>
            <a href="https://www.flaticon.com/kr/free-icons/" title="사모예드 아이콘"  class="icon_a enter3">아이콘 제작자: Chanut-is-Industries - Flaticon</a><br>
            <a href="https://www.flaticon.com/kr/free-icons/-" title="아이콘, 다시하기"  class="icon_a enter3">아이콘 제작자: Moon.de - Flaticon</a><br>
            <a href="https://www.iconfinder.com/"  class="icon_a enter3">아이콘 제작자: iconfinder</a><br>
            <a href="https://www.flaticon.com/kr/free-icons/" title="그림 아이콘"  class="icon_a enter3">아이콘 제작자: Pixel perfect - Flaticon</a><br>
            <a href="https://www.flaticon.com/kr/free-icons/" title="공유 아이콘"  class="icon_a enter3">아이콘 제작자: moogun - Flaticon</a><br>
            <a href="https://www.flaticon.com/kr/free-icons/" title="그림 업로드 아이콘"  class="icon_a enter3">아이콘 제작자: mim_studio - Flaticon</a><br>
            <a href="https://www.flaticon.com/kr/free-icons/-" title="메뉴 열기 아이콘"  class="icon_a enter3">아이콘 제작자: Dwi ridwanto - Flaticon</a>
        </h3>
        <h2 class="enter3">무료 폰트 출처 : </h2>
        <a href="https://fonts.google.com/?subset=korean&script=Kore" class="icon_a enter3">구글 폰트 바로가기</a>
        <br><br>
    </div>
    <div class="dog_img_Sources jua-regular">
        <h2 class="enter3">무료 이미지 출처 : </h2>
        <a href="https://pixabay.com/ko/images/search/%EA%B0%95%EC%95%84%EC%A7%80/" class="icon_a enter3">pixabay 바로가기</a><br>
        <a href="https://unsplash.com/ko" class="icon_a enter3">unsplash 바로가기</a><br>
        <a href="https://www.pexels.com/ko-kr/search/%EA%B0%95%EC%95%84%EC%A7%80/" class="icon_a enter3">pexels 바로가기</a>
        <h2 class="enter3">강아지 정보 출처 : </h2>
        <a href="https://terms.naver.com/entry.naver?docId=4347829&cid=46677&categoryId=46677" class="icon_a enter3">네이버 지식백과</a><br>
        <a href="https://www.bigdata-culture.kr/bigdata/user/data_market/detail.do?id=3c3d50c0-0337-11ee-a67e-69239d37dfae" class="icon_a enter3">전국 반려동물 동반 가능 문화시설 위치 데이터 바로가기</a>
        <br> <br>
    </div>
</body>
</html>