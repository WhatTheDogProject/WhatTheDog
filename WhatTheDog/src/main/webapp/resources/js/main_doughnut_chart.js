const chart1 = document.querySelector('.doughnut1');
const chart2 = document.querySelector('.doughnut2');
const chart3 = document.querySelector('.doughnut3');
const chart4 = document.querySelector('.doughnut4');
const chart5 = document.querySelector('.doughnut5');

const makeChart = (percent, classname, color) => {
    let i = 1;
    let chartFn = setInterval(function(){
        if(i <= percent) {
            colorFn(i, classname, color);
            i++;
        } else{
            clearInterval(chartFn);
        }
    }, 10);
}

const colorFn = (i, classname, color) => {
    /* js 로 css 적용*/
    classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #dedede " + i + "% 100%)"
}

const replay = () => {
    makeChart(Per0, chart1, '#4B0082');
    makeChart(Per1, chart2, '#8A2BE2');
    makeChart(Per2, chart3, '#9370DB');
    makeChart(Per3, chart4, '#DA70D6');
    makeChart(Per4, chart5, '#DDA0DD');
}

/* 페이지 로딩 시 자동으로 replay 함수 실행 */
window.onload = () => {
    replay();
};
