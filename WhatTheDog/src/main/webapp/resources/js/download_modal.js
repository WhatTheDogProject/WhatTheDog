/**
 * 
 */
//한번에 왼쪽 탭하기 : 쉬프트 탭
const imgDownloadBtn = document.getElementById('img_download_btn');
const closeModal = document.getElementById('closeModal');
let captureDiv = document.getElementById('download_img_modal');
let downloadButton = document.getElementById('download_f');  // 다운로드 버튼

//모달 뒤쪽 오버레이 블러처리
let overlay = document.createElement('div');
overlay.classList.add('modal_overlay');
let scrollbarHeight = window.innerHeight - document.documentElement.clientHeight;
overlay.style.height = `calc(100vh - ${scrollbarHeight}px)`;
document.body.appendChild(overlay);


//결과 이미지 다운 버튼 클릭시 모달 열기
imgDownloadBtn.addEventListener('click', ()=> {
    overlay.style.display = "block"; // 오버레이 보이기
    captureDiv.style.display = "block"; // 모달 보이기
    closeModal.style.display = "block"; // X 버튼 보이기
    downloadButton.style.display = "block"; // 최종 다운로드 버튼 보이기

});

// X 버튼 클릭 시 모달 닫기
closeModal.addEventListener('click', ()=> {
    overlay.style.display = "none"; // 오버레이 숨기기
    closeModal.style.display = "none";
    captureDiv.style.display = "none";
    downloadButton.style.display = 'none';
});


// 다운로드 버튼을 클릭했을 때
downloadButton.addEventListener('click', () => {
    // 다운로드 버튼을 먼저 숨김 처리
    downloadButton.style.display = 'none';
	
	// 고정된 크기로 캡처하기 위해 div를 복사해 임시로 추가
	  const modalClone = document.querySelector('.result_img_download').cloneNode(true);
	  const inputElement = modalClone.querySelectorAll('.result_dog_img');
	  inputElement.forEach(inpu=>{
			inpu.style.width = '260px'
		  	inpu.style.height = '260px'
	  	}
	  )
	  
	  modalClone.style.width = '750px'; // 고정 너비
	  modalClone.style.height = '470px'; // 고정 높이
	  modalClone.style.position = 'absolute';
	  document.body.appendChild(modalClone);
	
	
    // html2canvas로 저장한 요소를 캡처 후 이미지로 저장
    html2canvas(modalClone, {scale: 1}).then(canvas => {
        
        let fixedCanvas = document.createElement('canvas');
	    fixedCanvas.width = 750;
	    fixedCanvas.height = 470;
	    
	    let ctx = fixedCanvas.getContext('2d');
	    ctx.drawImage(canvas, 0, 0, 750, 470);
        
        saveImg(canvas.toDataURL('image/jpeg'), 'what_the_dog_img.jpeg');
		modalClone.style.visibility = 'hidden';
		
        // 다운로드 버튼 다시 보이기
        downloadButton.style.display = 'block';
    }).catch(error => {
        console.error("이미지를 캡처하는 동안 오류가 발생", error);
        downloadButton.style.display = 'block'; // 오류가 발생해도 다시 버튼이 보이도록 설정
    });
});

// 이미지를 저장하는 함수
const saveImg = (uri, filename) => {
    // a 태그를 생성
    let link = document.createElement('a');
    
    // a 태그를 body에 추가
    document.body.appendChild(link);
    
    // 이미지 URI와 다운로드 파일 이름 설정
    link.href = uri;
    link.download = filename;

    // 링크 클릭을 통해 다운로드 실행
    link.click();

    // 다운로드가 끝난 후 a 태그를 body에서 제거
    document.body.removeChild(link);
};


//<a href="https://www.flaticon.com/kr/free-icons/" title="파일 아이콘">파일 아이콘 제작자: Freepik - Flaticon</a>


let notCorlink = document.querySelector('#notCorrect');
let dog_kor_name = document.querySelector('#dog_kor_name');
let notCorbox = document.querySelector('#notCorBox');
let notCorForm = document.querySelector('#notCorForm');
let notCorBtn = document.querySelector('#notCorBtn');
let notCorH3 = document.querySelector('#notCorH3');
let notCorH5 = document.querySelector('#notCorH5');
let notCorRe = document.querySelector('#notCorRe');
let result_dog_img = document.querySelector('#result_dog_img');
let okBtn =document.querySelector('#okBtn');


notCorlink.addEventListener('click', ()=> {
    overlay.style.display = "block"; // 오버레이 보이기
    notCorbox.style.display = "block"; // 모달 보이기
    notCorBtn.style.display = "block"; // X 버튼 보이기
    

});

window.onclick = function(event) {
  if (event.target == overlay) {
    overlay.style.display = 'none';
    notCorbox.style.display='none';
    overlay.style.display = "none"; // 오버레이 숨기기
    closeModal.style.display = "none";
    captureDiv.style.display = "none";
    downloadButton.style.display = 'none';
  }
}
notCorBtn.addEventListener('click', ()=> {
    notCorForm.style.display = "none"; 
    console.log("dddd : "+result_dog_img.dataset.sfile)
    let data={
		dog_kor_name : dog_kor_name.value, 
		"sfile_name" : result_dog_img.dataset.sfile
	}
    fetch("/insertNotCor", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)})
	.then((res) => {
	  return res.json()
	}).then((data) => {
		console.log("data : "+ data)
		if(data == 1){
			notCorRe.style.display='block';
			okBtn.style.display='block';
			
			okBtn.addEventListener('click', function(){
				overlay.style.display = 'none';
    			notCorbox.style.display='none';
			})
			
		}else{
			notCorRe.style.display='block';
			notCorRe.innerHTML='처리 중 오류가 발생했습니다. 다시 시도해주세요.';
		}
		
	})
    // 여기에 fetch로 input 속성과 그 값을 json으로 넘겨서 메세지 반환. 넘긴 값은 db에 insert(파일이름&종명) 
    

});
