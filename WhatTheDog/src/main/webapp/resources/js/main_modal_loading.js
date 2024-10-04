// 1. 요소 참조
const startAnalysisBtn =document.getElementById('start_analysis_btn');
const loadingModal = document.getElementById('loading_modal');
const mainContrnt = document.getElementById('upload_contaier_main')

// 2. 분석시작 버튼 클릭 시 동작
startAnalysisBtn.addEventListener('click', () => {
    //모달보여주기
    loadingModal.style.display = 'block';

    //배경 흐리게 처리
    mainContrnt.classList.add('blur');

    // 10초 뒤 페이지 이동 -> 자바로 옮겨서는 분석이 끝난 후 이동으로 변경
    setTimeout(()=> {
        mainContrnt.classList.remove('blur'); // 이동 전 blur 해제
        //window.location.href = "/DogResult";
    }, 3000); //5000 밀리초 = 5초
    
});