// 링크복사 js
document.getElementById('copyLinkBtn').addEventListener('click', function() {
    //현재 페이지 url 가져오기 currentLink : 현재링크
    const currentLink = window.location.href;

    // 클립보드에 텍스트 복사
    navigator.clipboard.writeText(currentLink).then(function(){
        //알림창 표시
        const notification = document.getElementById('notification');
        notification.style.display = 'block';
        //2초 후 알림창 숨기기
        setTimeout(function() {
            notification.style.display = 'none';
        }, 2000); 
    });

});

