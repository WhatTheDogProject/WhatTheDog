/**
 * 
 */
document.querySelector('.dropdown-image').addEventListener('click', function() {
    // ar dropdownMenu = document.querySelector('.dropdown-menu');: 
    // HTML에서 class="dropdown-menu"로 지정된 메뉴를 선택하고, dropdownMenu라는 변수에 저장
    var dropdownMenu = document.querySelector('.dropdown-menu');
    // if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === ''): 
    // 현재 드롭다운 메뉴가 보이지 않는지 확인합니다. 보이지 않으면 뒤따르는 코드를 실행
    // dropdownMenu.style.display === 'none': 드롭다운 메뉴가 display: none;으로 설정된 경우
    // dropdownMenu.style.display === '': 아직 스타일이 적용되지 않은 경우 (처음 로드 시).
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
        // dropdownMenu.style.display = 'block';: 드롭다운 메뉴를 보이게 함
        dropdownMenu.style.display = 'block';
    } else {
        // } else {: 만약 드롭다운 메뉴가 이미 보이고 있다면 (즉, display가 'block'이라면).
        // dropdownMenu.style.display = 'none';: 메뉴를 다시 숨김
        dropdownMenu.style.display = 'none';
    }
});

window.addEventListener('resize', function() {
  const box = document.querySelector('.dropdown-menu');
  if (window.innerWidth > 670) {
    // 화면이 400px 이상이면 박스 숨기기
    box.style.display = 'none';
  }
});