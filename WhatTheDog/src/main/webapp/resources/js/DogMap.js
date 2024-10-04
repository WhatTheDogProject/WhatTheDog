
// 카카오맵API 불러오기
var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(37.45304289, 126.901712), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
    };

let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
let positions = [];
let markers= [];
let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";


let Arr = [];
let Arr2 = [];
let cate = document.querySelector("#ctgry_three_nm");
var category = cate.querySelector('input[type="radio"]:checked');
let reg1 = document.querySelector("#ctprvn_nm");
var region1 = reg1.querySelector("input[type='radio']:checked");
let reg2 = document.querySelector("#signgu_nm");
let reg3 = document.querySelector("#legaldong_nm");


console.log('cate.value : '+category.value)
	
document.addEventListener('DOMContentLoaded', function(){
	let data = {
		ctgry_three_nm : category.value
		, ctprvn_nm : region1.value
	}
	// 이용목적과 지역1은 첫번째 요소로 선택되어 있음 
	fetch("/getMapReg1", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)})
	.then((res) => {
	  return res.json()
	}).then((data) => {
		Arr=[];
		for(let j=0; j<data.length; j++){
			if(data[j]["ctgry_three_nm"] == category.value && data[j]["ctprvn_nm"] == region1.value){
				let input = `<label><input type="radio" name="resion2N" value="${data[j]["signgu_nm"]}">${data[j]["signgu_nm"]}</label>`
				let reg2 = document.querySelector("#signgu_nm");
				if(!Arr.includes(input)){
					Arr.push(input);
					reg2.innerHTML += input;
				}
			}// 카테고리&지역1 조건
		}// for문 끝. 그냥 json에서 정보 꺼내오기 
	})// fetch 끝	
})// document.onload 끝	
		
// 이용목적에서 이벤트가 일어났을 경우, json을 다시 조회해와서 지역3 목록 띄우기
cate.addEventListener('change', function(){
	let cate = document.querySelector("#ctgry_three_nm");
	var category = cate.querySelector('input[type="radio"]:checked');
	let reg1 = document.querySelector("#ctprvn_nm");
	var region1 = reg1.querySelector("input[type='radio']:checked");
	let reg2 = document.querySelector("#signgu_nm");
	let reg3 = document.querySelector("#legaldong_nm");
	reg2.innerHTML='';
	reg3.innerHTML='';
	console.log('cate.value : '+category.value)
	
	let data = {
		ctgry_three_nm : category.value
		, ctprvn_nm : region1.value
	}
	fetch("/getMapReg1", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)})
	.then((res) => {
	  return res.json()
	}).then((data) => {
		Arr=[];
		for(let j=0; j<data.length; j++){
			if(data[j]["ctgry_three_nm"] == category.value && data[j]["ctprvn_nm"] == region1.value){
				let input = `<label><input type="radio" name="resion2N" value="${data[j]["signgu_nm"]}">${data[j]["signgu_nm"]}</label>`
				let reg2 = document.querySelector("#signgu_nm");
				if(!Arr.includes(input)){
					Arr.push(input);
					reg2.innerHTML += input;
				}
			}// 카테고리&지역1 조건
		}// for문 끝. 그냥 json에서 정보 꺼내오기 
	})// fetch 끝	
})
		
// 지역명1 에서 이벤트가 일어났을 경우, json을 다시 조회해와서 지역3 목록 띄우기		
reg1.addEventListener('change', function(){
	let cate = document.querySelector("#ctgry_three_nm");
	var category = cate.querySelector('input[type="radio"]:checked');
	let reg1 = document.querySelector("#ctprvn_nm");
	var region1 = reg1.querySelector("input[type='radio']:checked");
	let reg2 = document.querySelector("#signgu_nm");
	let reg3 = document.querySelector("#legaldong_nm");
	reg2.innerHTML='';
	reg3.innerHTML='';
	console.log('cate.value : '+category.value)
	let data = {
		ctgry_three_nm : category.value
		, ctprvn_nm : region1.value
	}
	fetch("/getMapReg1", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)})
	.then((res) => {
	  return res.json()
	}).then((data) => {
		Arr=[];
		for(let j=0; j<data.length; j++){
			if(data[j]["ctgry_three_nm"] == category.value && data[j]["ctprvn_nm"] == region1.value){
				let input = `<label><input type="radio" name="resion2N" value="${data[j]["signgu_nm"]}">${data[j]["signgu_nm"]}</label>`
				let reg2 = document.querySelector("#signgu_nm");
				if(!Arr.includes(input)){
					Arr.push(input);
					reg2.innerHTML += input;
				}
			}
		}// for문 끝. 그냥 json에서 정보 꺼내오기 
	})// fetch 끝	
})
		
		
// 지역명2에서 이벤트가 일어났을 경우, json을 다시 조회해와서 지역명3에 목록 띄우기		
reg2.addEventListener('change',function(){
	Arr2=[];
	let cate = document.querySelector("#ctgry_three_nm");
	var category = cate.querySelector('input[type="radio"]:checked');
	let reg1 = document.querySelector("#ctprvn_nm");
	var region1 = reg1.querySelector("input[type='radio']:checked");
	let reg2 = document.querySelector("#signgu_nm");
	let region2 = reg2.querySelector("input[type='radio']:checked");
	
	reg3.innerHTML='';
	console.log('cate.value : '+category.value)
	let data = {
		ctgry_three_nm : category.value
		, ctprvn_nm : region1.value
		, signgu_nm : region2.value
	}
	fetch("/getMapReg2", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)})
	.then((res) => {
	  return res.json()
	}).then((data) => {
		
		for(let j=0; j<data.length; j++){
			if(data[j]["ctgry_three_nm"] == category.value && data[j]["ctprvn_nm"] == region1.value && region2.value == data[j]["signgu_nm"]){
				let input = `<label><input type="checkbox" name="resion2N" value="${data[j]["legaldong_nm"]}">${data[j]["legaldong_nm"]}</label>`
				let reg3 = document.querySelector("#legaldong_nm");
				if(!Arr2.includes(input)){
					Arr2.push(input);
					reg3.innerHTML += input;
				}
			}
		}// for문 끝. 그냥 json에서 정보 꺼내오기 
	})// fetch 끝	
})
	
	
// 지역명3에서 이벤트가 일어났을 경우, json을 다시 조회해와서 지도에 마커 표시	
reg3.addEventListener('change', function(){
	fn_remove_marker(markers)
	positions=[];
	Arr2=[];
	let cate = document.querySelector("#ctgry_three_nm");
	var category = cate.querySelector('input[type="radio"]:checked');
	let reg1 = document.querySelector("#ctprvn_nm");
	var region1 = reg1.querySelector("input[type='radio']:checked");
	let reg2 = document.querySelector("#signgu_nm");
	let region2 = reg2.querySelector("input[type='radio']:checked");
	let reg3 = document.querySelector("#legaldong_nm");
	let region3 = reg3.querySelectorAll("input[type='checkbox']:checked");
	region3.forEach(re=>{
		console.log('region3e.value : '+re.value)
		let data = {
			ctgry_three_nm : category.value
			, ctprvn_nm : region1.value
			, signgu_nm : region2.value
			, legaldong_nm : re.value
		}
		fetch("/getMap", {
	        method: 'POST',
	        headers: {
	            'Content-Type': 'application/json'
	        },
	        body: JSON.stringify(data)})
		.then((res) => {
		  return res.json()
		}).then((data) => {
			for(let j=0; j<data.length; j++){
				if(data[j]["ctgry_three_nm"] == category.value && data[j]["ctprvn_nm"] == region1.value && region2.value == data[j]["signgu_nm"]&& re.value == data[j]["legaldong_nm"]){
					fn_po_push(positions, j, data);
				}
			}// for문 끝. 그냥 json에서 정보 꺼내오기 
			fn_marker(positions, imageSrc, map, markers);
		 	let center = new kakao.maps.LatLng(data[0]["lc_la"], data[0]["lc_lo"])
		 	map.setCenter(center);
		 	
		 	
		})// fetch 끝
	})	
})
				
	
		

// marker를 표시할 positions 리스트 생성. (전역변수 positions, 반복문 변수, fetch 반환 data)
function fn_po_push(positions, num, data){  
	let position={
		title : data[num]["fclty_nm"],
		latlng: new kakao.maps.LatLng(data[num]["lc_la"], data[num]["lc_lo"]),
		loadName : data[num]["rdnmadr_nm"],
		NumName : data[num]["lnm_addr"],
		la : data[num]["lc_la"],
		lo : data[num]["lc_lo"]
		}
	if(!positions.includes(position)){
		positions.push(position);
	}
}

// 마커제거
function fn_remove_marker(markers){
	 for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }  
}

// 포지션 길이만큼 마커 및 오버레이 추가 
function fn_marker(positions, imageSrc, map, markers){
	for (let i = 0; i < positions.length; i ++) {
	    let imageSize = new kakao.maps.Size(24, 35); 
	    let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
	    let marker = new kakao.maps.Marker({
	        map: map, // 마커를 표시할 지도
	        position: positions[i].latlng, // 마커를 표시할 위치
	        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시
	        image : markerImage // 마커 이미지 
	    });
	   	markers.push(marker);
	 	let content = `<div class="wrap">
            <div class="info">
                <div class="title"> 
                    ${positions[i].title} 
                    <div class="close" id="boxClose" onclick="closeOverlay()" title="닫기"></div> 
                </div>
                <div class="body"> 
                    <div class="desc"> 
                        <div class="small"> 도로명 주소</div>
		                <div class="ellipsis loadName"> ${positions[i].loadName}</div>
		                <div class="small"> 지번 주소</div>
		                <div class="ellipsis NumName"> ${positions[i].NumName}</div>
		                <div class="jibun ellipsis"> * 주소를 클릭하면 주소가 복사됩니다. </div>
                    </div>
                </div>
            </div>   
        </div>`;
		let overlay = new kakao.maps.CustomOverlay({
		    content: content,
		    map: null,
		    position: marker.getPosition()
		           
		});
        
		kakao.maps.event.addListener(marker, 'click', function() {
		    overlay.setMap(marker.getMap());
		});
		
		let closeBtn = document.createElement('div');
	    closeBtn.innerHTML = "닫기";
	    closeBtn.className = "close";
	    closeBtn.onclick = function () {
	    overlay.setMap(null); // 닫기 버튼 클릭 시 오버레이를 지도에서 제거
	      };
	
	      // 동적으로 닫기 버튼 이벤트를 추가한 후 콘텐츠에 적용
	    content = document.createElement('div');
	    content.innerHTML = `
	        <div class="wrap">
	          <div class="info">
	            <div class="title">
	              ${positions[i].title}
	              <div class="close" title="닫기"></div>
	            </div>
	            <div class="body">
	              <div class="desc">
	              	<div class="small"> 도로명 주소</div>
	                <div class="ellipsis loadName"> ${positions[i].loadName}</div>
	                <div class="small"> 지번 주소</div>
	                <div class="ellipsis NumName"> ${positions[i].NumName}</div>
	                <div class="jibun ellipsis"> * 주소를 클릭하면 주소가 복사됩니다. </div>
	              </div>
	            </div>
	          </div>
	        </div>`;
	      content.querySelector(".close").addEventListener("click", function () {
	        overlay.setMap(null);
	      });
	      overlay.setContent(content); // 오버레이에 새로운 content를 설정
	    content.querySelector(".loadName").addEventListener("click", function() {
            let address = positions[i].loadName;
            navigator.clipboard.writeText(address).then(() => {
                const notification = document.getElementById('notification');
		        notification.style.display = 'block';
		        //2초 후 알림창 숨기기
		        setTimeout(function() {
		            notification.style.display = 'none';
		        }, 3000);
            }).catch(err => {
                console.error('복사 실패:', err);
            });
        });

        // 지번 주소 클릭 시 텍스트 복사
        content.querySelector(".NumName").addEventListener("click", function() {
            let address = positions[i].NumName;
            navigator.clipboard.writeText(address).then(() => {
                const notification = document.getElementById('notification');
		        notification.style.display = 'block';
		        //2초 후 알림창 숨기기
		        setTimeout(function() {
		            notification.style.display = 'none';
		        }, 2000);
            }).catch(err => {
                console.error('복사 실패:', err);
            });
        });

        // 오버레이에 업데이트된 content 적용
        overlay.setContent(content);
    };    
};

// 선택한 조건 지우기 위해 새로고침. 
document.querySelector(".clear_select").addEventListener("click", function(){
	location.href="/DogMap"
});
	