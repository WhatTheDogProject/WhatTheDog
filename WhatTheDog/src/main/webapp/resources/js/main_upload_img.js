window.addEventListener('load', function(){
	const dropArea = document.getElementById("drop_img_area");
	const fileInput = document.getElementById("file_input");
	const imagePreview = document.getElementById("image_preview");
	const viewText = document.getElementById("view_text"); // 텍스트 요소
	const imgReBtn = document.getElementById("img_re"); //이미지 재업로드 버튼
	
	/*
	// 2. 드래그 앤 드롭 이벤트 처리
	dropArea.addEventListener("dragover", (e) => {
	    e.preventDefault();
	    dropArea.style.backgroundColor = "#eee";
	});
	
	dropArea.addEventListener("dragleave", () => {
	    dropArea.style.backgroundColor = "#f18fb827";
	});
	
	dropArea.addEventListener("drop", (e) => {
	    // 기본적으로 페이지에서 파일이 열리는 동작을 방지함
	    e.preventDefault();
	    dropArea.style.backgroundColor = "#f18fb827";
	    //e.dataTransfer.files는 드래그한 파일 목록
	    const file = e.dataTransfer.files[0];
	    //파일의 MIME 타입이 image로 시작하는지 확인하여 이미지 파일인지 여부를 판단
	    if (file  && file.type.startsWith("image")){
	        displayImage(file);
	    }
	});
	*/
	
	// 3. 파일 입력 필드 변경 이벤트 처리
	fileInput.addEventListener("change", () => {
       const file = fileInput.files[0]; 
       
       // 이전에 선택된 이미지가 있으면 초기화
       imagePreview.src = "";  // 이전 이미지를 지움
       imagePreview.style.display = "none";  // 이미지 감춤
       viewText.style.display = "block";  // 텍스트 다시 보임
       
       if (file && file.type.startsWith("image")) {
           displayImage(file);
       }
   });
	
	// 4. 클릭 이벤트 처리
	dropArea.addEventListener("click", () => {
	    fileInput.click();
	});
	
	// 5. 이미지 표시 함수
	function displayImage(file){
	    const reader = new FileReader();
	    reader.onload = () => {
	        viewText.style.display = "none"; // 텍스트를 숨김
	        imagePreview.src = reader.result;
	        imagePreview.style.display = "block"; // 이미지를 보이게 함
	    };
	    // 파일을 읽어서 base64 데이터 URL로 변환
	    reader.readAsDataURL(file);
	}
	
	// 이미지 변경 버튼 클릭 시 기존 이미지 삭제 처리
	imgReBtn.addEventListener("click", (e) => {
		e.preventDefault();
	    // 미리보기 이미지 숨김 및 src 초기화
	    imagePreview.src = "";
	    imagePreview.style.display = "none";
	    viewText.style.display = "block"; // 텍스트 다시 보이게 해줌
	    // 파일 입력 필드 초기화 (기존 선택한 파일 제거)
	    fileInput.value = "";  // 파일 입력 필드 초기화
});
});