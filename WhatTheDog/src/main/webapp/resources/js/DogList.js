/**
 * 견종 리스트에서 이름을 클릭하면 dog_en_name으로 견종을 찾아와 fetch로 정적 변경.
 * 판독결과에서 사진 클릭시 해당 견종리스트로 이동.
 */
let paramValue = getQueryParam('dog_en_name');
fn_fetch(paramValue);

window.addEventListener('load', function(){
	let liList = document.querySelectorAll('#list li');
	liList.forEach(function(item){
		item.addEventListener('click',function(event){
			fn_clickName(event);
		})
	})
});

// DogList에서 견종이름에 클릭 이벤트 발생 시 정적으로 페이지 변경.
function fn_clickName(event){
	event.preventDefault()
	let dogName = event.target.getAttribute('name');
	console.log("dogName : "+dogName);
	if (!dogName){
		console.log('요소에 name 속성이 없습니다.');
		return;
	}		
	fn_fetch(dogName);
};

// 주소표시줄로 온 파라미터 추출
function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// dog_en_name 변수와 fetch로 db에서 정보 가져오기.
function fn_fetch(dog_name){
	let paramurl = '/findList?dog_en_name='+encodeURIComponent(dog_name);
	fetch(paramurl, {
		method: 'GET'
	})
	.then(res=>res.json())
	.then(data=>{
		console.log('받아온 데이터 : '+data)
		if(data){
			document.getElementById('dog_kor_name').innerHTML = data.dog_kor_name;
			document.getElementById('dog_en_name').innerHTML = data.dog_en_name;
			document.getElementById('dog_size').innerHTML = data.dog_size;
			document.getElementById('dog_outfit').innerHTML = data.dog_outfit;
			document.getElementById('dog_personality').innerHTML = data.dog_personality;
			document.getElementById('dog_rec').innerHTML = data.dog_rec;
			document.getElementById('dog_dis').innerHTML = data.dog_dis;
			document.getElementById('dog_color').innerHTML = data.dog_color;
			document.getElementById('tdBox').innerHTML = data.dog_comment;
			document.getElementById('dog_image').src = "/resources/image/list/"+data.dog_en_name+".jpg"
		}
	})
	.catch(error=>{
		console.log('error', error)
	});
}