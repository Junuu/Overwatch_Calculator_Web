var p0to2000;
var p2000to2500;
var p2500to3000;
var p3000to3250;
var p3250to3500;
var p3500to3750;
var p3750to4000;
var p4000to4100;
var p4100to4200;
var p4200to4300;
var p4300to4400;
var p4400to4450;
var p4450to4500;
function set_price_team(){
  p0to2000=4500;
  p2000to2500=5500;
  p2500to3000=6000;
  p3000to3250=7000;
  p3250to3500=8500;
  p3500to3750=12000;
  p3750to4000=16000;
  p4000to4100=25000;
  p4100to4200=40000;
  p4200to4300=70000;
  p4300to4400=100000;
}
function set_price_not_team()
{
p0to2000=3000;
p2000to2500=3500;
p2500to3000=4000;
p3000to3250=5500;
p3250to3500=6500;
p3500to3750=9000;
p3750to4000=12000;
p4000to4100=18000;
p4100to4200=30000;
p4200to4300=50000;
p4300to4400=65000;
p4400to4450=80000;
p4450to4500=90000;
}
function calculate(startscore,finishscore,check_team)
{
  var price=0;
  while(startscore!=finishscore)
  {
    if(startscore<2000)
    {
      price=price+(p0to2000/50);
    }
    else if(startscore<2500)
    {
      price=price+(p2000to2500/50);
    }
    else if(startscore<3000)
    {
      price=price+(p2500to3000/50);
    }
    else if(startscore<3250)
    {
      price=price+(p3000to3250/50);
    }
    else if(startscore<3500)
    {
      price=price+(p3250to3500/50);
    }
    else if(startscore<3750)
    {
      price=price+(p3500to3750/50);
    }
    else if(startscore<4000)
    {
      price=price+(p3750to4000/50);
    }
    else if(startscore<4100)
    {
      price=price+(p4000to4100/50);
    }
    else if(startscore<4200)
    {
      price=price+(p4100to4200/50);
    }
    else if(startscore<4200)
    {
      price=price+(p4100to4200/50);
    }
    else if(startscore<4300)
    {
      price=price+(p4200to4300/50);
    }
    else if(startscore<4400)
    {
      price=price+(p4300to4400/50);
    }
    else if(startscore<4450)
    {
      if(check_team =="팀장")
      {
      alert("[ERROR: 계산허용범위 초과] 4400까지 계산된 가격을 반환합니다");
      return price;
      }
      else {
        price=price+(p4400to4450/50);
      }
    }
    else if(startscore<4500)
    {
      price=price+(p4450to4500/50);
    }
    else
    {
      alert("[ERROR: 계산허용범위 초과] 4500까지 계산된 가격을 반환합니다");
      return price;
    }
    startscore = startscore + 1;
  }
  return price;
}
function button_active() {
  var start_score = form1.txt1.value ;
  var finish_score = form1.txt2.value ;
  var check_team = form1.team.value ;
  var result = 0;
  if(check_team == "팀장")
  {
    set_price_team();
  }
  else
  {
    set_price_not_team();
  }
  start_score = Number(start_score);
  finish_score = Number(finish_score);
  if(start_score >5000 || finish_score > 5000 || start_score < 0 || finish_score < 0)
  {
    alert("ERROR: 0~5000 사이의 수를 입력해 주십시오.");
    return;
  }
  if(start_score>finish_score)
  {
    alert("ERROR: 마무리 점수가 시작점수보다 낮습니다.");
    document.getElementById("msg").innerHTML = "마무리 점수를 시작점수보다 높게 설정해주세요." ;
    return;
  }
  result = calculate(start_score,finish_score,check_team);
  document.getElementById("msg").innerHTML = "계산된 가격 : " + result ;
  }