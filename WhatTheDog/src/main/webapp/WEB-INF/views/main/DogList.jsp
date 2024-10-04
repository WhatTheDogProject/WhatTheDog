<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="resources/css/ListPage.css" rel="stylesheet">
<link href="resources/css/main_sh.css" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
<title>내가 누구개 | 견종 리스트</title>
<script src="resources/js/DogList.js" async></script>
</head>
<%@include file="/WEB-INF/views/common/header.jsp" %>
<body>
<div id="con">
       <div id="sidemenu">
         <table id="list">
           <tr>
             <th>
               <b><i>ㄱ</i></b>
             </th>
             <td>
               <ul>
                 <li><a href="" name="Grey_Hound">그레이하운드(대형)</a></li>
                 <li><a href="" name="Grey_Hound_Italian">그레이하운드(소형)</a></li>
               </ul>
             </td>
           </tr>
           <tr>
             <th>
               <b><i>ㄷ</i></b>
             </th>
             <td>
               <ul>
                 <li><a href="" name="Dalmatian" >달마티안</a></li>
                 <li><a href="" name="Dobermann_Pinscher" >도베르만핀셔</a></li>
               </ul>
             </td>
           </tr>
           <tr>
             <th>
               <b><i>ㄹ</i></b>
             </th>   
             <td>
               <ul>
                 <li><a href="" name="Retriever_Golden" >리트리버(골든)</a></li>
                 <li><a href="" name="Retriever_Labrador" >리트리버(래브라도)</a></li>
               </ul>
             </td>
           </tr>
           <tr>
             <th>
               <b><i>ㅁ</i></b>
             </th>
             <td>
               <ul>
                 <li><a href="" name="Maltese" >몰티즈</a></li>
                 <li><a href="" name="Miniature_Pinscher" >미니어쳐핀셔</a></li>
                 <li><a href="" name="Miniature_Schnauzer" >미니어쳐슈나우저</a></li>
               </ul>
             </td> 
           </tr>
           <tr>
             <th>
               <b><i>ㅂ</i></b>
             </th>
             <td>
               <ul>
                 <li><a href="" name="Beagle" >비글</a></li>
                 <li><a href="" name="Bichon_Frise" >비숑프리제</a></li>
                 <li><a href="" name="Border_Collie" >보더콜리</a></li>
                 <li><a href="" name="Bull_Terrier" >불테리어</a></li>
               </ul>
             </td>
           </tr>
           <tr>
             <th>
               <b><i>ㅅ</i></b>
             </th>
             <td>
               <ul>
                 <li><a href="" name="Samoyed" >사모예드</a></li>
                 <li><a href="" name="Shetland_Sheepdog" >셰틀랜드쉽독</a></li>
                 <li><a href="" name="Shiba_Inu" >시바견</a></li>
                 <li><a href="" name="Siberian_Husky" >시베리안허스키</a></li>
                 <li><a href="" name="Shih_Tzu" >시츄</a></li>
               </ul>
             </td>
           </tr>
           <tr>
             <th>
               <b><i>ㅇ</i></b>
             </th>
             <td>
               <ul>
                 <li><a href="" name="Yorkshire_Terrier" >요크셔테리어</a></li>
                 <li><a href="" name="Japanese_Spitz" >제페니스스피츠</a></li>
                 <li><a href="" name="Welsh_Corgi" >웰시코기</a></li>
               </ul>
             </td>
           </tr>
           <tr>
             <th>
               <b><i>ㅈ</i></b>
             </th>
             <td>
               <ul>
                 <li><a href="" name="German_Shepherd" >저먼셰퍼드</a></li>
                 <li><a href="" name="Jindo_Dog" >진돗개</a></li>
               </ul>
             </td>
           </tr>
           <tr>
             <th>
               <b><i>ㅊ</i></b>
             </th>
             <td>
               <ul>
                 <li><a href="" name="Chihuahua" >치와와</a></li>
               </ul>
             </td>
           </tr>
           <tr>
             <th>
               <b><i>ㅋ</i></b>
             </th>
             <td>
               <ul>
                 <li><a href="" name="Cocker_Spaniel" >코가스파니엘</a></li>
               </ul>
             </td>
           </tr>
           <tr>
             <th>
               <b><i>ㅍ</i></b>
             </th>
             <td>
               <ul>
                 <li><a href="" name="Papillon" >파피용</a></li>
                 <li><a href="" name="Pekingese" >페키니즈</a></li>
                 <li><a href="" name="Pomeranian" >포메라니안</a></li>
                 <li><a href="" name="Poodle_Miniature" >푸들(중형)</a></li>
                 <li><a href="" name="Poodle_Toy" >푸들(소형)</a></li>
                 <li><a href="" name="Pug" >퍼그</a></li>
                 <li><a href="" name="French_Bulldog" >프렌치불도그</a></li>
               </ul>
             </td>
           </tr>
         </table>
       </div>
       <div id="main">
           <table id="catetable" class="jua-regular">
               <tbody>
                 <tr>
                   <th scope="row">견종명</th>
                   <td id="dog_kor_name" class="jua-regular">${map.DogList.dog_kor_name}</td>
                   <td rowspan="8" id="dog_image_td"><img id="dog_image" src="/resources/image/list/Grey_Hound.jpg" alt="dog_image"></td>
                 </tr>
                 <tr>
                   <th >영어명</th>
                   <td id="dog_en_name">${map.DogList.dog_en_name} </td>
                 </tr>
                 <tr>
                   <th scope="row">크기</th>
                   <td id="dog_size">${map.DogList.dog_size}</td>
                 </tr>
                 <tr>
                   <th scope="row">외관</th>
                   <td id="dog_outfit">${map.DogList.dog_outfit}</td>
                 </tr>
                 <tr>
                   <th scope="row">성격</th>
                   <td id="dog_personality">${map.DogList.dog_personality}</td>
                 </tr>
                 <tr>
                   <th scope="row">추천 환경</th>
                   <td id="dog_rec">${map.DogList.dog_rec}</td>
                 </tr>
                 <tr>
                   <th scope="row">주요 질병</th>
                   <td id="dog_dis">${map.DogList.dog_dis}</td>
                   
                 </tr>
                 <tr>
                   <th scope="row">색상</th>
                   <td id="dog_color">${map.DogList.dog_color}</td>
                 </tr>
                 <tr >
                   <td id="dog_comment" scope="row" colspan="3" ><div id="tdBox">${map.DogList.dog_comment}</div></td>
                 </tr>
               </tbody>
             </table>
       </div>
       
   </div>
	<%@include file="/WEB-INF/views/common/footer.jsp" %>
</body>
</html>