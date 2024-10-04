/**
 * 
 */

   

const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const searchBar = document.getElementById('search_bar');
const clearSelect = document.getElementById('clear_select');
// const kakaoMap = document.getElementById('kakao_map');

btnClose.addEventListener('click', () => {
    btnClose.style.display = 'none';
    btnOpen.style.display = 'block';
    searchBar.style.display = 'none';
    clearSelect.style.display = 'none';
    //kakaoMap.style.height = '786px';
    
});

btnOpen.addEventListener('click', ()=> {
    btnClose.style.display = 'block';
    btnOpen.style.display = 'none';
    searchBar.style.display = 'block';
    clearSelect.style.display = 'block';
    //kakaoMap.style.height = '400px';
});

clearSelect.addEventListener('click', () => {
    //input[type="checkbox : input 요소 중 type 속성이 checkbox인 모든 요소를 선택
    // 페이지에 있는 모든 체크박스들을 NodeList 형태로 반환하며, checkbpxes라는 변수에 저장
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    //forEach : 배열 또는 배열과 유사한 객체(여기서는 NodeList)의 각 항목에 대해 반복적으로 함수를 실행하는 메서드
    checkboxes.forEach(function(checkbox){
        checkbox.checked = false; // 체크박스해제
    });
});
