function nowClock(){
  var nowTime = new Date();
  var nowHour = set2(nowTime.getHours());
  var nowMin = set2(nowTime.getMinutes());
  var nowSec = set2(nowTime.getSeconds());
  var msg = "現在時刻　　"+nowHour+":"+nowMin+":"+nowSec;
  document.getElementById("DegitalClock").innerHTML = msg;
}

function set2(num){
  //桁数が1桁の時先頭に０を加えて2桁にする
  var ret;
  if(num<10){
    ret = "0"+num;
  }else{
    ret = num;
  }return ret;
}

setInterval('nowClock()',1000);
