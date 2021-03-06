// 값을 저장하기 위한 변수를 미리 선언
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
//가격을 4개로 분리하여 함수를 통해 변수에 값 저장

function set_price_team_et()
{
    p0to2000=4000;
    p2000to2500=4500;
    p2500to3000=5500;
    p3000to3250=6500;
    p3250to3500=8000;
    p3500to3750=11000;
    p3750to4000=15000;
    p4000to4100=22000;
    p4100to4200=35000;
    p4200to4300=55000;
    p4300to4400=80000;
    p4400to4450=110000;
    p4450to4500=120000;
    p4500to4550=300000;
    p4550to4600=600000;

}
function set_price_team_duo_et()
{
	p0to2000=6000;
	p2000to2500=7000;
	p2500to3000=8500;
	p3000to3250=10000;
	p3250to3500=12000;
	p3500to3750=17000;
	p3750to4000=23000;
}
function set_price_team_dealer_et()
{
    p0to2000=4600;
    p2000to2500=5175;
    p2500to3000=6325;
    p3000to3250=7475;
    p3250to3500=9200;
    p3500to3750=12650;
    p3750to4000=17250;
    p4000to4100=25300;
    p4100to4200=40250;
    p4200to4300=63250;
    p4300to4400=92000;
    p4400to4450=110000;
    p4450to4500=120000;
    p4500to4550=300000;
    p4550to4600=600000;

}

function set_price_team()
{
    p0to2000=5000;
    p2000to2500=6000;
    p2500to3000=6500;
    p3000to3250=7000;
    p3250to3500=9500;
    p3500to3750=13000;
    p3750to4000=17000;
    p4000to4100=30000;
    p4100to4200=40000;
    p4200to4300=75000;
    p4300to4400=90000;
    p4400to4450=110000;
    p4450to4500=120000;
    p4500to4550=300000;
    p4550to4600=600000;

}

function set_price_team_dealer()
{
    p0to2000=5500;
    p2000to2500=7000;
    p2500to3000=7500;
    p3000to3250=8000;
    p3250to3500=10500;
    p3500to3750=14500;
    p3750to4000=19000;
    p4000to4100=33000;
    p4100to4200=44000;
    p4200to4300=82000;
    p4300to4400=99000;
    p4400to4450=110000;
    p4450to4500=120000;
    p4500to4550=300000;
    p4550to4600=600000;

}
function set_price_max_team()
{
  p0to2000=5000;
  p2000to2500=6000;
  p2500to3000=6500;
  p3000to3250=7000;
  p3250to3500=9500;
  p3500to3750=13000;
  p3750to4000=17000;
  p4000to4100=30000;
  p4100to4200=40000;
  p4200to4300=75000;
  p4300to4400=90000;
  p4400to4450=110000;
  p4450to4500=120000;
  p4500to4550=300000;
  p4550to4600=600000;

}
function set_price_max_team_dealer()
{
  p0to2000=5500;
  p2000to2500=7000;
  p2500to3000=7500;
  p3000to3250=8000;
  p3250to3500=10500;
  p3500to3750=14500;
  p3750to4000=19000;
  p4000to4100=33000;
  p4100to4200=44000;
  p4200to4300=82000;
  p4300to4400=99000;
  p4400to4450=110000;
  p4450to4500=120000;
  p4500to4550=300000;
  p4550to4600=600000;

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
function set_price_team_duo()
{
	p0to2000=6000;
	p2000to2500=7500;
	p2500to3000=8000;
	p3000to3250=10000;
	p3250to3500=12000;
	p3500to3750=19000;
	p3750to4000=27000;
}

function set_price_not_team_duo()
{
  p0to2000=3900;
  p2000to2500=4550;
  p2500to3000=5200;
  p3000to3250=7150;
  p3250to3500=8450;
  p3500to3750=13500;
  p3750to4000=18000;
}

function calculate(startscore,finishscore,check_team,check_solo,add_pay)
{
  var price=0;
  console.log(add_pay);
  var check_nan=isNaN(add_pay);
  if(check_nan)
  {
    add_pay= 1.0;
  }
  else
  {
    add_pay= add_pay/100 + 1.0
  }

  console.log(add_pay);
  //시작 점수가 마지막점수와 같지 않을 때 까지 startscore를 하나씩 더해가며 점수를 검사하여 price값을 갱신
  while(startscore!=finishscore)
  {
      if (startscore < 2000) {
          price = price + (p0to2000 / 50);
      }
      else if (startscore < 2500) {
          price = price + (p2000to2500 / 50);
      }
      else if (startscore < 3000) {
          price = price + (p2500to3000 / 50);
      }
      else if (startscore < 3250) {
          price = price + (p3000to3250 / 50);
      }
      else if (startscore < 3500) {
          price = price + (p3250to3500 / 50);
      }
      else if (startscore < 3750) {
          price = price + (p3500to3750 / 50);
      }
      else if (startscore < 4000) {
          price = price + (p3750to4000 / 50);
      }
      else if (startscore < 4100) {
          if (check_solo == "듀오") //듀오의 경우 4000점까지의 가격밖에 설정이 안되있으므로 4000점까지 계산
          {
              alert("[ERROR: 계산허용범위 초과] 4000까지 계산된 가격을 반환합니다");
              return price*add_pay;
          }
          price = price + (p4000to4100 / 50);
      }
      else if (startscore < 4200) {
          price = price + (p4100to4200 / 50);
      }
      else if (startscore < 4200) {
          price = price + (p4100to4200 / 50);
      }
      else if (startscore < 4300) {
          price = price + (p4200to4300 / 50);
      }
      else if (startscore < 4400) {
          price = price + (p4300to4400 / 50);
      }
      else if (startscore < 4450) {
          price = price + (p4400to4450 / 50);
      }
      else if (startscore < 4500) {
          price = price + (p4450to4500 / 50);
      }
      else if (startscore < 4550)//4500점 까지 가격설정이 안되있기 떄문에 4500점 까지 계산
      {
          if (check_team == "기사") {
              alert("[ERROR: 계산허용범위 초과] 4500까지 계산된 가격을 반환합니다");
              return price*add_pay;
          }
          else
          {
              price = price + (p4500to4550/50);
          }

      }
      else if (startscore < 4600)
      {
          price = price + (p4550to4600 / 50);
      }
      else
      {

              alert("[ERROR: 계산허용범위 초과] 4600까지 계산된 가격을 반환합니다");
              return price*add_pay;

      }
    startscore = startscore + 1;
  }
  return price*add_pay;
}
//첫번째 버튼이 눌렸을 때 호출되는 함수
function button_active() {
    //form으로 부터 데이터를 받아옴
    var start_score = form1.txt1.value ;
    var finish_score = form1.txt2.value ;
    var add_pay = form1.txt5.value ;
    var check_team = form1.team.value ;
    var check_solo = form1.check_solo.value;
    var result = 0;

    if(check_team == "팀장")
    {
      if(check_solo=="듀오")
      {
        set_price_team_duo();
      }
      else if(check_solo=="딜러") //솔로
      {
          set_price_team_dealer();
      }
      else
      {
        set_price_team();
      }
    }
    else if(check_team=="맥스팀")
    {
      if(check_solo=="듀오")
      {
        set_price_team_duo();
      }
      
      else if(check_solo=="딜러")
      {
        set_price_max_team_dealer();
      }	
      else //솔로
      {
          set_price_max_team();
      }
    }
    else //기사
    {
      if(check_solo=="듀오")
      {
        set_price_not_team_duo();
      }
      else
      {
        set_price_not_team();
      }

    }
    // text에서 문자로 입력을 받기 때문에 Number()를 통하여 숫자로 형변환
    start_score = Number(start_score);
    finish_score = Number(finish_score);
    add_pay = Number(add_pay);
    //입력 범위 설정
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
    result = calculate(start_score,finish_score,check_team,check_solo,add_pay);
    document.getElementById("msg").innerHTML = "계산된 가격 : " + result ;
  }

//2번째 버튼이 눌렸을때 호출되는 함수
function batch_button_active(){
  var startscore = form1.txt3.value;
  var win_count = form1.txt4.value;
  var result = 0;

  startscore = Number(startscore);
  win_count = Number(win_count);
  if(startscore >5000 || startscore < 0)
  {
    alert("ERROR: 배치점수를 0~5000 사이의 수를 입력해 주십시오.");
    return;
  }
  if(win_count < 0 || win_count> 10)
  {
    alert("ERROR: 승 수를 0~10 사이의 수를 입력해 주십시오.");
    return;
  }

  if(startscore< 3000)
  {
    result= 3000* win_count;
  }
  else if(startscore<3250)
  {
    result= 3500* win_count;
  }
  else if(startscore<3500)
  {
    result= 4000* win_count;
  }
  else if(startscore<3750)
  {
    result= 5000* win_count;
  }
  else if(startscore<4000)
  {
    result= 6000* win_count;
  }
  else if(startscore<4100)
  {
    result= 9000* win_count;
  }
  else if(startscore<4200)
  {
    result= 10000* win_count;
  }
  else if(startscore<4300)
  {
    result= 12000* win_count;
  }
  else if(startscore<4400)
  {
    result= 13000* win_count;
  }
  else if(startscore<4450)
  {
    result= 14000* win_count;
  }
  else if(startscore<4500)
  {
    result= 16000* win_count;
  }
  else
  {
    alert("ERROR : 4500 이하까지만 계산 가능합니다.");
    return;
  }
  document.getElementById("msg").innerHTML = "계산된 가격 : " + result ;
}

function et_button_active() {
    //form으로 부터 데이터를 받아옴
    var start_score = form1.txt1.value ;
    var finish_score = form1.txt2.value ;
    var add_pay = form1.txt5.value ;
    var check_team = form1.team.value ;
    var check_solo = form1.check_solo.value;
    var result = 0;

    if(check_team == "팀장")
    {
      if(check_solo=="듀오")
      {
        set_price_team_duo_et();
      }
      else if(check_solo=="딜러") //솔로
      {
          set_price_team_dealer_et();
      }
      else
      {
        set_price_team_et();
      }
    }
    else if(check_team=="맥스팀")
    {
      if(check_solo=="듀오")
      {
        set_price_team_duo();
      }
      
      else if(check_solo=="딜러")
      {
        set_price_max_team_dealer();
      }	
      else //솔로
      {
          set_price_max_team();
      }
    }
    else //기사
    {
      if(check_solo=="듀오")
      {
        set_price_not_team_duo();
      }
      else
      {
        set_price_not_team();
      }

    }
    // text에서 문자로 입력을 받기 때문에 Number()를 통하여 숫자로 형변환
    start_score = Number(start_score);
    finish_score = Number(finish_score);
    add_pay = Number(add_pay);
    //입력 범위 설정
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
    result = calculate(start_score,finish_score,check_team,check_solo,add_pay);
    document.getElementById("msg").innerHTML = "계산된 가격 : " + result ;
  }

//2번째 버튼이 눌렸을때 호출되는 함수
function et_batch_button_active(){
  var startscore = form1.txt3.value;
  var win_count = form1.txt4.value;
  var result = 0;

  startscore = Number(startscore);
  win_count = Number(win_count);
  if(startscore >5000 || startscore < 0)
  {
    alert("ERROR: 배치점수를 0~5000 사이의 수를 입력해 주십시오.");
    return;
  }
  if(win_count < 0 || win_count> 10)
  {
    alert("ERROR: 승 수를 0~10 사이의 수를 입력해 주십시오.");
    return;
  }

  if(startscore< 3000)
  {
    result= 3000* win_count;
  }
  else if(startscore<3250)
  {
    result= 3500* win_count;
  }
  else if(startscore<3500)
  {
    result= 4000* win_count;
  }
  else if(startscore<3750)
  {
    result= 5000* win_count;
  }
  else if(startscore<4000)
  {
    result= 6000* win_count;
  }
  else if(startscore<4100)
  {
    result= 9000* win_count;
  }
  else if(startscore<4200)
  {
    result= 10000* win_count;
  }
  else if(startscore<4300)
  {
    result= 12000* win_count;
  }
  else if(startscore<4400)
  {
    result= 13000* win_count;
  }
  else if(startscore<4450)
  {
    result= 14000* win_count;
  }
  else if(startscore<4500)
  {
    result= 16000* win_count;
  }
  else
  {
    alert("ERROR : 4500 이하까지만 계산 가능합니다.");
    return;
  }
  document.getElementById("msg").innerHTML = "계산된 가격 : " + result ;
}
