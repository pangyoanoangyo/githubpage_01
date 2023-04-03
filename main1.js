var d = new Date();
var year = d.getFullYear();
var month = d.getMonth()+1;
var day = d.getDate();
var hour = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();
document.getElementById("foot").innerHTML = year+"년 "+month+"월 "+day+"일 "+hour+"시 "+min+"분 "+sec+"초";
