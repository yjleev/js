const arrow = document.querySelector('.arrow');
const left = document.getElementById('left');
const right = document.getElementById('right');
const slider = document.getElementById('slider');
const slides = document.getElementsByTagName('article')
let sliderwidth = slider.clientWidth;
let slidewidth = slides[0].clientWidth;

let scaleSize = 0.95;
let moveWidth = 0;

arrow.addEventListener('mousedown', function(move){
    if(move.target.id === 'left'){
        if(moveWidth == 0){
            return;
        }
        moveWidth += slidewidth;
        slider.style.transform = `translate(${moveWidth}px)`;
        left.style.transform = `scale(${scaleSize})`;
    }
    else{
        if(moveWidth*(-1)+slidewidth == sliderwidth){
            return;
        }
        moveWidth -= slidewidth;
        slider.style.transform = `translate(${moveWidth}px)`;
        right.style.transform = `scale(${scaleSize})`;
    }
    arrow.addEventListener('mouseup', function(scale){
            scale.target.style.transform = `scale(1)`;
    })
})

const plus_minus = document.querySelector('.plus_minus');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');

plus_minus.addEventListener('mousedown', function(add){
    if(add.target.id === 'plus'){
        plus.style.transform = `scale(${scaleSize})`;
    }
    else{
        minus.style.transform = `scale(${scaleSize})`;
    }
})
plus_minus.addEventListener('mouseup', function(scale){
    scale.target.style.transform = `scale(1)`;
    if(scale.target.id === 'plus'){
        if(slides.length == 7){
            alert('최대 슬라이드입니다.');
            return;
        }
        const article = document.createElement('article')
            article.innerHTML = `${slides.length+1}`;
            slider.appendChild(article);
            slider.style.width = `${sliderwidth+=slidewidth}px`; 
    }
    else{
        if(slides.length == 1){
            alert('최소 슬라이드입니다.');
            return;
        }
        slider.removeChild(slides[slides.length-1]);
            slider.style.width = `${sliderwidth-=slidewidth}px`;
            slider.style.transform = `translate(${-sliderwidth+slidewidth}px)`;
            moveWidth = -sliderwidth+slidewidth
    }
    slider.style.transform = `translate(${-sliderwidth+slidewidth}px)`;
    moveWidth = -sliderwidth+slidewidth;
})

const width = document.querySelector('.width')
const height = document.querySelector('.height')
const frame = document.getElementById('frame')
const container = document.getElementById('container')

width.addEventListener('keypress',(e)=>{
    if(e.keyCode == 13){
        for(i = 0; i < slides.length; i++){
            slides[i].style.width = `${width.value}px`
        }
        slider.style.width = `${width.value*slides.length}px`
        frame.style.width = `${width.value}px`
        let containerwidth = width.value+100;
        container.style.width = `${(containerwidth)}px`
    }
})
height.addEventListener('keypress',(e)=>{
    if(e.keyCode == 13){
        slider.style.height = `${height.value}px`
    }
})