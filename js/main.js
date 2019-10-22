
$(document).ready(function(){
    var i = 0 ;
    var timer;
  
   //用jquery方法设置第一张图片显示，其余隐藏
   $('.item').eq(0).show().siblings('.item').hide();
    
   //调用showTime()函数（轮播函数）
   showTime();
    
   //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
   $('.tab').hover(function(){
     //获取当前i的值，并显示，同时还要清除定时器
     i = $(this).index();
     Show();
     clearInterval(timer);
   },function(){
     //
     showTime();
   });
    
 //创建一个showTime函数
 function showTime(){
   //定时器
   timer = setInterval(function(){
     //调用一个Show()函数
     Show();
     i++;
     //当图片是最后一张的后面时，设置图片为第一张
     if(i==5){
       i=0;
     }
   },2000);
 }
  
  
 //创建一个Show函数
 function Show(){
   //在这里可以用其他jquery的动画
   $('.item').eq(i).fadeIn(300).siblings('.item').fadeOut(300);
    
   //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
   $('.tab').eq(i).addClass('active').siblings('.tab').removeClass('active');
    
 }
   
 });

var timer = null;
window.onload = function(){
	//开启定时器
	timer = setInterval(show,100);
	//回调函数
	function show(){
		var d1 = new Date();//获取到当前的时间
		var d1Ms = d1.getTime();
		var d2 = new Date("11 11,2019");
		var d2Ms = d2.getTime();
		var differMs = d2Ms-d1Ms;//相差的毫秒数
		var date = parseInt(differMs/(3600*24*1000));//天
		var hours = parseInt((differMs%(3600*24*1000))/(3600*1000));//1小时=3600s
		var minutes =parseInt((differMs%(3600*1000))/(60*1000));//分钟
		var seconds = parseInt((differMs%(60*1000))/1000);//秒
		var ms = differMs%1000;//毫秒
		//当前分秒为个位数字时，对其进行的处理
		hours = hours<10?"0"+hours:hours;
		minutes = minutes<10?"0"+minutes:minutes;
		seconds = seconds<10?"0"+seconds:seconds;
		// document.getElementById("spantime").innerHTML = date+"天"+hours+"小时"+ minutes+"分"+ seconds+"秒"+ ms;
		document.getElementById("time-t").innerHTML =date;
		document.getElementById("time-s").innerHTML =hours;
		document.getElementById("time-f").innerHTML =minutes;
		document.getElementById("time-m").innerHTML =seconds;
	}	
}