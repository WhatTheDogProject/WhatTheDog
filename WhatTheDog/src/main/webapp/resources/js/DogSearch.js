/**
 * 
 */

window.addEventListener('load', function(){
	
	let start_analysis_btn = document.querySelector('#start_analysis_btn');
	let file_input = document.querySelector('#file_input');
	let image_form = document.querySelector('#image_form');
	let loadingModal = document.getElementById('loading_modal');
	let mainContrnt = document.getElementById('upload_contaier_main');
	
	start_analysis_btn.addEventListener('click', function(e){
		e.preventDefault();
		if(file_input.value == ""){
			alert('이미지를 등록해주세요. ');
			location.href='/DogSearch';
		}else{
		    loadingModal.style.display = 'block';
		    mainContrnt.classList.add('blur');
		
		    // 10초 후 POST 방식으로 페이지 이동
		    setTimeout(() => {
		        mainContrnt.classList.remove('blur');
		        //postToResultPage(); // POST 요청으로 이동
		    	image_form.submit();
		    }, 3000); // 10초 대기
			    
			
			
			
			
					
			
		}
		
	})
	
	
})




 
 
 