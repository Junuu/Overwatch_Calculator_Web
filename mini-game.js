
const CANVAS_HEIGHT = screen.height/2; //convas의 크기
const CANVAS_WIDTH  = screen.width-20; //screen. 을 사용해서 screen의 크기로 넓이 지정
let context;
let score = 0;
let highScore = 0;
let SCROLL_SPEED = 10; //블록이 나오는 속도
const GRAVITY = 0.5;
const START_X = 100; //player의 시작점
const START_Y = 100;

const player = {
  x: START_X, //play9er 시작위치
  y: START_Y,
  width: 30, //player 크기
  height: 30,
  jumpPower: 15, //player 점프력
  yVelocity: 0,
  gravity: GRAVITY, //중력 0이면 공중에 고정, 높을수록 점프가 짧아짐.
}
let platforms = [
  {
    x: 0, //나오는 블록의 위치
    y: 250,
    width: CANVAS_WIDTH, //나오는 블록의 크기
    height: 200,
  },
];

// 윈도우가 로드되면 함수가 실행됨.
window.onload = function() {
  const canvas = document.createElement('canvas');
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  document.body.appendChild(canvas);
  context = canvas.getContext('2d');
  window.addEventListener('keydown', keydownHandler);
  window.addEventListener('keyup', keyupHandler);
  setInterval(
  () => requestAnimationFrame(update),
  1000/60, // 60 fps /*frame이 증가할수록 속도가 매우빨라짐*/
  )
  // Create a new platform every half second
  createPlatform();

  setInterval(
    createPlatform,
    250,
    )
}


function update() {
  context.fillStyle = 'lightblue';
  context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  for (const platform of platforms) {
    platform.x -= SCROLL_SPEED ;
    context.fillStyle = 'white';
    context.fillRect(platform.x, platform.y, platform.width, platform.height);
  }
  player.y = player.y + player.yVelocity;
  if (!isPlayerOnPlatform()) {
    player.yVelocity += player.gravity;
  }
  context.fillStyle = 'black';
  context.fillRect(player.x, player.y, player.width, player.height);

  // 패배조건 : 플레이어가 떨어지거나 playfrom에 충돌한 경우
  if (player.y > CANVAS_HEIGHT || didPlayerHitSideOfPlatform()) {
    if (score > highScore) {
      highScore = score;
      document.getElementById('highScoreLabel').innerHTML = highScore;
    }
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    player.x = START_X;
    player.y = START_Y;
    player.yVelocity = 0;
    SCROLL_SPEED = 10;
  // alert("\tGame Over!\n\t내 점수 : "+score);
    score = 0;

  }
}

function isPlayerOnPlatform() {
  for (const platform of platforms) {
    const isPlatformUnderneathPlayer = (platform.x + platform.width) > player.x && platform.x < player.x;
    const isStandingStill = (player.y + player.height) >= platform.y;
    if (isPlatformUnderneathPlayer && isStandingStill) {
      player.y = platform.y - player.height;
      return true;
    }
  }
  return false;
}

function didPlayerHitSideOfPlatform() {
  for (const platform of platforms) {
    if (player.x + player.width === platform.x &&
      player.y + player.height > platform.y) {
      return true;
    }
  }
  return false;
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createPlatform() {
  // Remove platforms that have been passed
  platforms = platforms.filter(function(platform) {
    if (platform.x + platform.width >= 0) {
      return true;
    }
    score++;
    if(score!=0 && score%5 == 0){
      SCROLL_SPEED++;
    }

    document.getElementById('scoreLabel').innerHTML = score;
    return false;
  });
  if (platforms.length > 10) {
    return;
  }
  const lastPlatform = platforms[platforms.length - 1];
  platforms.push({
    x: lastPlatform.x + lastPlatform.width + getRandomNumber(10 * player.jumpPower, 20 * player.jumpPower),
    y: lastPlatform.y + getRandomNumber(player.jumpPower*(-1), player.jumpPower),
    width: getRandomNumber(CANVAS_WIDTH/10, CANVAS_WIDTH/3), //플랫폼의 랜덤 길이 결정 왼쪽수가 최소, 오른쪽 수가 최대
    height: 200,
  });
}

function keydownHandler() {
  switch (event.keyCode) {
    case 32: //Space
      // Only allow jumping from ground
      if (isPlayerOnPlatform()) {
        player.yVelocity = -player.jumpPower;
        break;
      }
  }
}
function keyupHandler() {
  switch (event.keyCode) {
    case 32: //Space
      // Allow for small or large jumps based on time held
      // Prevents double jumps
      if (player.yVelocity < -player.jumpPower/2) {
        player.yVelocity = -player.jumpPower/2;
        break;
      }
  }
}
