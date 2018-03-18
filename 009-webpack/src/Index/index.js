import cc from '../common/common';
import './index.scss'
import $ from 'jquery';
import img from '../132.jpg';
$(function(){
    $("h5").css("color","green");
    let imgEl=document.createElement('img');
    imgEl.src=img;
    document.body.appendChild(imgEl);
});

alert(cc);