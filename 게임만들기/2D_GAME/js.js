let  game
let canvers = document.getElementById("canvers")
let ctx = canvers.getContext("2d")
let moveKeyForward = false
let moveKeyBack = false
let moveKeyUp = false
let moveKeydown = false
let keyShift = false
let keySpace = false
let keySpacecount = false
let keySpaceUpDown = false
let stamina = 5
let frameCount = 0;
let frameCountJump = 0;
let frameCountMonst = 0;
let frameCountMonstMove = true;
let upMotionPlay = false
let keyAbutton = false
let itemUseKey = false
let itemUseKey1 = false
let itemUseKey2 = false
let ladderget = false
let item1 
// 메인캐릭터 이미지
//   대기
 let heroStopimg =  new Image();
 heroStopimg.src = "img/herostop.png"
//  걷기모션 오른쪽
let heroRight1 =  new Image();
heroRight1.src = "img/heroright1.png"

let heroRight2 =  new Image();
heroRight2.src = "img/heroright2.png"

let heroRight3 =  new Image();
heroRight3.src = "img/heroright3.png"

let heroRight4 =  new Image();
heroRight4.src = "img/heroright4.png"

let heroRight5 =  new Image();
heroRight5.src = "img/heroright5.png"

let heroRight6 =  new Image();
heroRight6.src = "img/heroright6.png"

let heroRight7 =  new Image();
heroRight7.src = "img/heroright7.png"

let heroRight8 =  new Image();
heroRight8.src = "img/heroright8.png"

let heroRight9 =  new Image();
heroRight9.src = "img/heroright9.png"

let heroRight10 =  new Image();
heroRight10.src = "img/heroright10.png"

let heroRight11 =  new Image();
heroRight11.src = "img/heroright11.png"
 //  걷기모션  왼쪽
 let heroLeft1 =  new Image();
heroLeft1.src = "img/heroleft1.png"

let heroLeft2 =  new Image();
heroLeft2.src = "img/heroleft2.png"

let heroLeft3 =  new Image();
heroLeft3.src = "img/heroleft3.png"

let heroLeft4 =  new Image();
heroLeft4.src = "img/heroleft4.png"

let heroLeft5 =  new Image();
heroLeft5.src = "img/heroleft5.png"

let heroLeft6 =  new Image();
heroLeft6.src = "img/heroleft6.png"

let heroLeft7 =  new Image();
heroLeft7.src = "img/heroleft7.png"

let heroLeft8 =  new Image();
heroLeft8.src = "img/heroleft8.png"

let heroLeft9 =  new Image();
heroLeft9.src = "img/heroleft9.png"

let heroLeft10 =  new Image();
heroLeft10.src = "img/heroleft10.png"

let heroLeft11 =  new Image();
heroLeft11.src = "img/heroleft11.png"
// 점프 모션 오른쪽
let heroRightJump1 =  new Image();
heroRightJump1.src = "img/herorightjump1.png"

let heroRightJump2 =  new Image();
heroRightJump2.src = "img/herorightjump2.png"

// 점프 모션 왼쪽
let heroLeftJump1 =  new Image();
heroLeftJump1.src = "img/heroleftjump1.png"

let heroLeftJump2 =  new Image();
heroLeftJump2.src = "img/heroleftjump2.png"
// 대쉬 이미지 오른쪽
let dashRightHero1 =  new Image();
dashRightHero1.src = "img/dashrighthero1.png"

let dashRightHero2=  new Image();
dashRightHero2.src = "img/dashrighthero2.png"

let dashRightHero3 =  new Image();
dashRightHero3.src = "img/dashrighthero3.png"

let dashRightHero4=  new Image();
dashRightHero4.src = "img/dashrighthero4.png"

let dashRightHero5 =  new Image();
dashRightHero5.src = "img/dashrighthero5.png"

let dashRightHero6=  new Image();
dashRightHero6.src = "img/dashrighthero6.png"

let dashRightHero7 =  new Image();
dashRightHero7.src = "img/dashrighthero7.png"

let dashRightHero8=  new Image();
dashRightHero8.src = "img/dashrighthero8.png"
 // 대쉬 이미지 왼쪽
 let dashLeftHero1 =  new Image();
dashLeftHero1.src = "img/dashlefthero1.png"

let dashLeftHero2=  new Image();
dashLeftHero2.src = "img/dashlefthero2.png"

let dashLeftHero3 =  new Image();
dashLeftHero3.src = "img/dashlefthero3.png"

let dashLeftHero4=  new Image();
dashLeftHero4.src = "img/dashlefthero4.png"

let dashLeftHero5 =  new Image();
dashLeftHero5.src = "img/dashlefthero5.png"

let dashLeftHero6=  new Image();
dashLeftHero6.src = "img/dashlefthero6.png"

let dashLeftHero7 =  new Image();
dashLeftHero7.src = "img/dashlefthero7.png"

let dashLeftHero8=  new Image();
dashLeftHero8.src = "img/dashlefthero8.png"

//  죽는 이미지

let heroDeathRight =  new Image();
heroDeathRight.src = "img/herodeath.png"

let heroDeathRight1=  new Image();
heroDeathRight1.src = "img/herodeath1.png"
//  올라가는 이미지

let heroUP =  new Image();
heroUP.src = "img/heroup.png"



//  사다리이미지
let img1 = new Image();
img1.src ="img/woodLadder.png"
// 땅
let img2 = new Image();
img2.src ="img/roadimg.png"
// 함정
let img7 = new Image();
img7.src ="img/trap.png"

let img8 = new Image();
img8.src ="img/trap2.png"

// 몬스터
// 앉아있는 자세
let monster1 = new Image();
  monster1.src ="img/monster1.png"

let monster2 = new Image();
  monster2.src ="img/monster2.png"
//   오른쪽 모션    
let monsterRight1 = new Image();
  monsterRight1.src ="img/monster4.png"

let monsterRight2 = new Image();
  monsterRight2.src ="img/monster5.png"

//   왼쪽 모션    
let monsterLeft1 = new Image();
  monsterLeft1.src ="img/monster3.png"

let monsterLeft2 = new Image();
  monsterLeft2.src ="img/monster6.png"
//   코인    
let coin = new Image();
  coin.src ="img/coin.png"
//   상점    
let shop = new Image();
  shop.src ="img/shop.png"
//   상점    
let shopHost = new Image();
  shopHost.src ="img/shophost.png"
//   작살    
let objgun = new Image();
  objgun.src ="img/objgun.png"
let objgun2 = new Image();
  objgun2.src ="img/objgun2.png"


// 사운드
let coinSound = new Audio("sound/coingetsound.wav")
let trapsoundSound = new Audio("sound/trapsound.wav")
let gameoverSound = new Audio("sound/gameoversound.wav")
let tigersound = new Audio("sound/tigersound.mp3")


canvers.width = 1000
canvers.height = 700



let hero = {
  x : 0,
  y : 650,
  width : 50,
  height : 50,
//   걷기 오른쪽 그리기
    heroStopimg(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroStopimg,this.x,this.y,this.width,this.height)
    }
    ,
    heroRight1(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroRight1,this.x,this.y,this.width,this.height)
    },
    heroRight2(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroRight2,this.x,this.y,this.width,this.height)
    },
    heroRight3(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroRight3,this.x,this.y,this.width,this.height)
    },
    heroRight4(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroRight4,this.x,this.y,this.width,this.height)
    },
    heroRight5(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroRight5,this.x,this.y,this.width,this.height)
    },
    heroRight6(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroRight6,this.x,this.y,this.width,this.height)
    },
    heroRight7(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroRight7,this.x,this.y,this.width,this.height)
    },
    heroRight8(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroRight8,this.x,this.y,this.width,this.height)
    },
    heroRight9(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroRight9,this.x,this.y,this.width,this.height)
    },
    heroRight10(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroRight10,this.x,this.y,this.width,this.height)
    },
    heroRight11(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroRight11,this.x,this.y,this.width,this.height)
    },
     //   걷기 왼쪽 그리기
    heroLeft1(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroLeft1,this.x,this.y,this.width,this.height)
    },
    heroLeft2(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroLeft2,this.x,this.y,this.width,this.height)
    },
    heroLeft3(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroLeft3,this.x,this.y,this.width,this.height)
    },
    heroLeft4(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroLeft4,this.x,this.y,this.width,this.height)
    },
    heroLeft5(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroLeft5,this.x,this.y,this.width,this.height)
    },
    heroLeft6(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroLeft6,this.x,this.y,this.width,this.height)
    },
    heroLeft7(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroLeft7,this.x,this.y,this.width,this.height)
    },
    heroLeft8(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroLeft8,this.x,this.y,this.width,this.height)
    },
    heroLeft9(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroLeft9,this.x,this.y,this.width,this.height)
    },
    heroLeft10(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroLeft10,this.x,this.y,this.width,this.height)
    },
    heroLeft11(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroLeft11,this.x,this.y,this.width,this.height)
    },
   
//   점프모션 그리기
    heroRightJump1(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroRightJump1,this.x,this.y,this.width,this.height)
    },
    heroRightJump2(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroRightJump2,this.x,this.y,this.width,this.height)
    },
    heroLeftJump1(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroLeftJump1,this.x,this.y,this.width,this.height)
    },
    heroLeftJump2(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroLeftJump2,this.x,this.y,this.width,this.height)
    },
// 대쉬 그리기 오른쪽
dashRightHero1(){
    ctx.fillStyle = "green";
    ctx.drawImage(dashRightHero1,this.x,this.y,this.width,this.height)
    },
dashRightHero2(){
    ctx.fillStyle = "green";
    ctx.drawImage(dashRightHero2,this.x,this.y,this.width,this.height)
    },
dashRightHero3(){
    ctx.fillStyle = "green";
    ctx.drawImage(dashRightHero3,this.x,this.y,this.width,this.height)
    },
dashRightHero4(){
    ctx.fillStyle = "green";
    ctx.drawImage(dashRightHero4,this.x,this.y,this.width,this.height)
    },
dashRightHero5(){
    ctx.fillStyle = "green";
    ctx.drawImage(dashRightHero5,this.x,this.y,this.width,this.height)
    },
dashRightHero6(){
    ctx.fillStyle = "green";
    ctx.drawImage(dashRightHero6,this.x,this.y,this.width,this.height)
    },
dashRightHero7(){
    ctx.fillStyle = "green";
    ctx.drawImage(dashRightHero7,this.x,this.y,this.width,this.height)
    },
dashRightHero8(){
    ctx.fillStyle = "green";
    ctx.drawImage(dashRightHero8,this.x,this.y,this.width,this.height)
    },
     // 대쉬 그리기 왼쪽
dashLeftHero1(){
    ctx.fillStyle = "green";
    ctx.drawImage(dashLeftHero1,this.x,this.y,this.width,this.height)
    },
dashLeftHero2(){
    ctx.fillStyle = "green";
    ctx.drawImage(dashLeftHero2,this.x,this.y,this.width,this.height)
    },
dashLeftHero3(){
    ctx.fillStyle = "green";
    ctx.drawImage(dashLeftHero3,this.x,this.y,this.width,this.height)
    },
dashLeftHero4(){
    ctx.fillStyle = "green";
    ctx.drawImage(dashLeftHero4,this.x,this.y,this.width,this.height)
    },
dashLeftHero5(){
    ctx.fillStyle = "green";
    ctx.drawImage(dashLeftHero5,this.x,this.y,this.width,this.height)
    },
dashLeftHero6(){
    ctx.fillStyle = "green";
    ctx.drawImage(dashLeftHero6,this.x,this.y,this.width,this.height)
    },
dashLeftHero7(){
    ctx.fillStyle = "green";
    ctx.drawImage(dashLeftHero7,this.x,this.y,this.width,this.height)
    },
dashLeftHero8(){
    ctx.fillStyle = "green";
    ctx.drawImage(dashLeftHero8,this.x,this.y,this.width,this.height)
    },
 // 죽는 이미지
heroDeathRight(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroDeathRight,this.x,this.y,this.width,this.height)
    },
heroDeathRight1(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroDeathRight1,this.x,this.y,this.width,this.height)
    },
heroUP(){
    ctx.fillStyle = "green";
    ctx.drawImage(heroUP,this.x,this.y,this.width,this.height)
    },
  
}


class Ladder{
      constructor(x= 200,y= 600,width= 50,height= 100)
       {
           this.x=x ;
           this.y=y ;
           this.width=width ;
           this.height=height ;
       }
  
      draw(x=this.x,y=this.y,width=this.width,height=this.height){
      ctx.fillStyle = "red";
      ctx.drawImage(img1,x,y,width,height)
  }


}

class Road{
      constructor(
           x = 150,
           y = 550,
           width = 700,
           height = 50)
       {
           this.x = x;
           this.y = y;
           this.width = width;
           this.height = height;
       }
  
       draw(){
      ctx.fillStyle = "burlywood";
      ctx.drawImage(img2,this.x,this.y,this.width,this.height)
  }


}


class Trap{
      constructor(
           x = 150,
           y = 600,
           width = 50,
           height = 30)
       {
           this.x = x;
           this.y = y;
           this.width = width;
           this.height = height;
       }
  
       draw(){
      ctx.fillStyle = "burlywood";
      ctx.drawImage(img7,this.x,this.y,this.width,this.height)
            }
  
       draw2(){
      ctx.fillStyle = "burlywood";
      ctx.drawImage(img8,this.x,this.y,this.width,this.height)
            }


}


class Monster{
      constructor(
           x = 150,
           y = 600,
           width = 50,
           height = 30)
       {
           this.x = x;
           this.y = y;
           this.width = width;
           this.height = height;
       }
// 앉아있는자세
       draw1(){
      ctx.fillStyle = "burlywood";
      ctx.drawImage(monster1 ,this.x,this.y,this.width,this.height)
            }
       draw2(){
      ctx.fillStyle = "burlywood";
      ctx.drawImage(monster1 ,this.x,this.y,this.width,this.height)
            }
  
// 오른쪽 모션
       draw3(){
      ctx.fillStyle = "burlywood";
      ctx.drawImage(monsterRight1 ,this.x,this.y,this.width,this.height)
            }
       draw4(){
      ctx.fillStyle = "burlywood";
      ctx.drawImage(monsterRight2 ,this.x,this.y,this.width,this.height)
            }
  
// 왼쪽모션
       draw5(){
      ctx.fillStyle = "burlywood";
      ctx.drawImage(monsterLeft1 ,this.x,this.y,this.width,this.height)
            }
       draw6(){
      ctx.fillStyle = "burlywood";
      ctx.drawImage(monsterLeft2 ,this.x,this.y,this.width,this.height)
            }
  

     

}
class Coin {
    constructor( x = 300,y = 610, width = 25, height = 25)
    {
           this.x = x;
           this.y = y;
           this.width = width;
           this.height = height;

     }

     draw(){

        ctx.drawImage(coin,this.x,this.y,this.width,this.height)
     }

}

class Shop {
    constructor( x = 700,y = 300, width = 100, height = 100)
    {
           this.x = x;
           this.y = y;
           this.width = width;
           this.height = height;

     }

     draw(){

        ctx.drawImage(shop,this.x,this.y,this.width,this.height)
     }
     objgun(){

        ctx.drawImage(objgun,760,360,25,10)
     }
     objgun2(){

        ctx.drawImage(objgun2,760,360,25,10)
     }
     shopHost(){

        ctx.drawImage(shopHost,720,340,70,60)
     }
    }

class Text{
      constructor(
           x = 150,
           y = 600,
           width = 50,
           height = 30)
       {
           this.x = x;
           this.y = y;
           this.width = width;
           this.height = height;
       }
  
       draw(){
     
      ctx.strokeStyle = 'white'
      ctx.font = '20px Calibri'
      ctx.strokeText('점수', 30, 40);
            }
       gameOver(){
     
      ctx.strokeStyle = 'white'
      ctx.font = '150px Calibri'
      ctx.strokeText('GAME OVER', 115, 350);
            }
       shoptext(){
     
      ctx.strokeStyle = 'white'
      ctx.font = '18px Calibri'
      ctx.strokeText('사다리를 사고 싶으면 6골드를 가져와', 620, 280);
            }
       shoptext2(){
     
      ctx.strokeStyle = 'white'
      ctx.font = '18px Calibri'
      ctx.strokeText('자, 어서 구매해 아주 싸다구', 650, 280);
            }
}

 
let Ladder1 = new Ladder(700,550,50,150)
let Ladder2 = new Ladder(200,400,50,150)
let Ladder3 = new Ladder(750,200,50,200)
let road3   = new Road(100,200,700,50)
let road2   = new Road(100,400,700,50)
let road1   = new  Road
let trap1 = new Trap(500,670,50,30)
let monster = new Monster(150,500,50,50)
let coinArr= [new Coin(300,610,25,25),new Coin(325,610,25,25),new Coin(350,610,25,25),new Coin(375,610,25,25),new Coin(860,520,25,25),new Coin(860,495,25,25)]
let coinArrPoint= [];
let ladderArr=[];
let ladderArrCount = 1; 
let texts = new Text
let shops = new Shop
let coinXvalue = 50

// key이벤트

// 방향키
document.addEventListener("keydown",(e)=>{
    if(e.keyCode == 39 )
    {
        moveKeyForward = true
    }else if(e.keyCode == 37)
    {
        moveKeyBack = true
    }else if(e.keyCode == 38)
    {
        moveKeyUp = true
    }else if(e.keyCode == 40)
    {
        moveKeydown = true
    }else if(e.keyCode == 16)
    {
        keyShift  = true
    }else   if(e.keyCode == 32)
    {
        keySpace  = true
    }else if (e.keyCode == 65) {
        keyAbutton = true
    }else if (e.keyCode == 49) {
        itemUseKey = true
    }
 })
document.addEventListener("keyup",(e)=>{
    if(e.keyCode == 39)
    {
        moveKeyForward = false
    }else if(e.keyCode == 37)
    {
        moveKeyBack  = false
    }else if(e.keyCode == 38)
    {
        moveKeyUp = false
    }else if(e.keyCode == 40)
    {
        moveKeydown = false
    }else if(e.keyCode == 16)
    {
        keyShift  = false
    }else if (e.keyCode == 65) {
        keyAbutton = false
    }else if (e.keyCode == 49) {
        itemUseKey = false
    }
 })

function animationfps()
{
game = requestAnimationFrame(animationfps)
ctx.clearRect(0,0,canvers.width,canvers.height)
road3.draw()
road2.draw()
road1.draw()

Ladder2.draw()
Ladder1.draw()

shopEvent(hero,shops)
coinArr.forEach((e,i)=> {
 if (hero.x - (coinArr[i].x+coinArr[i].width) <=0 && hero.x - (coinArr[i].x+coinArr[i].width) >=-50 && hero.y + hero.height- coinArr[i].y >=0 && hero.y + hero.height- coinArr[i].y <= 50 || (hero.x + hero.width) - coinArr[i].x  > 0 && (hero.x + hero.width) - coinArr[i].x <=50 && hero.y + hero.height- coinArr[i].y >=0 && hero.y + hero.height- coinArr[i].y <= 50 )
{   coinSound.play()
    coinArr.splice(i,1)
    let coincheck = new Coin(20, 50,25,25)
    coinArrPoint.push(coincheck)
 }

  e.draw() 
})

coinArrPoint.forEach((e,i)=>{
coinArrPoint[i].x = 30*(i+1)
e.draw()    
})
trapMoveEvent(hero,trap1)
monsterMoveEvent(monster,hero)
ladderMoveEvent1(hero,Ladder1)
ladderMoveEvent2(hero,Ladder2)

if (itemUseKey == true) {
    itemUseKey1 = true
}

if (ladderArrCount == 1 && itemUseKey1== true &&itemUseKey2 == false) {
  
    let Ladder4 = new Ladder(hero.x,hero.y-150,50,200)
    ladderArr.push(Ladder4)
    itemUseKey1 = false
    itemUseKey2 = true
    ladderArrCount = 0
}
if (itemUseKey2 == true) {
    ladderMoveEvent3(hero,ladderArr[0])
    ladderArr[0].draw()
}
texts.draw()


if(monster.x >= 146 && monster.x <= 800 && frameCountMonstMove == true)
{   if (frameCountMonst < 10) {
    monster.x+=4
    monster.draw3()
    frameCountMonst++
    }
    else if (frameCountMonst < 20) {  
    monster.x+=4
    monster.draw4()
    frameCountMonst++
    }
    else if (frameCountMonst < 30) {  
    monster.x+=4
    monster.draw3()
    frameCountMonst++
    }
    else if (frameCountMonst < 40) {  
    monster.x+=4
    monster.draw4()
    frameCountMonst++
    }else{
        monster.draw4()
        frameCountMonst = 0;
    }
   
}else if (monster.x >= 150 && monster.x <= 802 && frameCountMonstMove == false) {
    if (frameCountMonst < 10) {
    monster.x+=-4
    monster.draw5()
    frameCountMonst++
    }
    else if (frameCountMonst < 20) {  
    monster.x+=-4
    monster.draw6()
    frameCountMonst++
    }
    else if (frameCountMonst < 30) {  
    monster.x+=-4
    monster.draw5()
    frameCountMonst++
    }
    else if (frameCountMonst < 40) {  
    monster.x+=-4
    monster.draw6()
    frameCountMonst++
    }else{
        monster.draw6()
        frameCountMonst = 0;
                         }
                        }

if(monster.x == 802)
{
   frameCountMonstMove =false }
else if(monster.x == 146) 
{
frameCountMonstMove = true
}
// 이동 1층 2층
if (moveKeyForward == true && hero.y == 650 && keyShift == false  && moveKeyBack == false || moveKeyForward == true && hero.y == 350 && keyShift == false  && moveKeyBack == false || moveKeyForward == true && hero.y == 150 && keyShift == false  && moveKeyBack == false) 
{
    hero.x+=2 
    if (frameCount < 5) {
        hero.heroRight1()
        frameCount++
    }else if (frameCount < 10){
        hero.heroRight2()
        frameCount++
    }
    else if (frameCount < 15){
        hero.heroRight3()
        frameCount++
    }
    else if (frameCount < 20){
        hero.heroRight4()
        frameCount++
    }
    else if (frameCount < 25){
        hero.heroRight5()
        frameCount++
    }
    else if (frameCount < 30){
        hero.heroRight6()
        frameCount++
    }
    else if (frameCount < 35){
        hero.heroRight7()
        frameCount++
    }
    else if (frameCount < 40){
        hero.heroRight8()
        frameCount++
    }
    else if (frameCount < 45){
        hero.heroRight9()
        frameCount++
    }
    else if (frameCount < 50){
        hero.heroRight10()
        frameCount++
    }
    else if (frameCount < 60){
        hero.heroRight11()
        frameCount++
    } else{
        hero.heroRight1()
        frameCount = 0;}
    
}else if (moveKeyForward == true && hero.y == 500 && keyShift == false  && moveKeyBack == false|| moveKeyForward == true && hero.y == 200 && keyShift == false  && moveKeyBack == false || moveKeyForward == true && hero.y == 150 && keyShift == false  && moveKeyBack == false)  
{
    hero.x+=2
    if (frameCount < 5) {
        hero.heroRight1()
        frameCount++
    }else if (frameCount < 10){
        hero.heroRight2()
        frameCount++
    }
    else if (frameCount < 15){
        hero.heroRight3()
        frameCount++
    }
    else if (frameCount < 20){
        hero.heroRight4()
        frameCount++
    }
    else if (frameCount < 25){
        hero.heroRight5()
        frameCount++
    }
    else if (frameCount < 30){
        hero.heroRight6()
        frameCount++
    }
    else if (frameCount < 35){
        hero.heroRight7()
        frameCount++
    }
    else if (frameCount < 40){
        hero.heroRight8()
        frameCount++
    }
    else if (frameCount < 45){
        hero.heroRight9()
        frameCount++
    }
    else if (frameCount < 50){
        hero.heroRight10()
        frameCount++
    }
    else if (frameCount < 60){
        hero.heroRight11()
        frameCount++
    } else{
        hero.heroRight1()
        frameCount = 0;}
}
if (moveKeyBack == true && hero.y == 650 && keyShift == false  && moveKeyForward == false|| moveKeyBack == true && hero.y == 350 && keyShift == false && moveKeyForward == false|| moveKeyBack == true && hero.y == 150 && keyShift == false && moveKeyForward == false) 
{
    hero.x+=-2
    if (frameCount < 5) {
        hero.heroLeft1()
        frameCount++
    }else if (frameCount < 10){
        hero.heroLeft2()
        frameCount++
    }
    else if (frameCount < 15){
        hero.heroLeft3()
        frameCount++
    }
    else if (frameCount < 20){
        hero.heroLeft4()
        frameCount++
    }
    else if (frameCount < 25){
        hero.heroLeft5()
        frameCount++
    }
    else if (frameCount < 30){
        hero.heroLeft6()
        frameCount++
    }
    else if (frameCount < 35){
        hero.heroLeft7()
        frameCount++
    }
    else if (frameCount < 40){
        hero.heroLeft8()
        frameCount++
    }
    else if (frameCount < 45){
        hero.heroLeft9()
        frameCount++
    }
    else if (frameCount < 50){
        hero.heroLeft10()
        frameCount++
    }
    else if (frameCount < 60){
        hero.heroLeft11()
        frameCount++
    }
    else{
        hero.heroLeft1()
        frameCount = 0;}
  
}else if (moveKeyBack == true && hero.y == 500 && keyShift == false && moveKeyForward == false || moveKeyBack == true && hero.y == 200 && keyShift == false && moveKeyForward == false)
{
    hero.x+=-2
    if (frameCount < 5) {
        hero.heroLeft1()
        frameCount++
    }else if (frameCount < 10){
        hero.heroLeft2()
        frameCount++
    }
    else if (frameCount < 15){
        hero.heroLeft3()
        frameCount++
    }
    else if (frameCount < 20){
        hero.heroLeft4()
        frameCount++
    }
    else if (frameCount < 25){
        hero.heroLeft5()
        frameCount++
    }
    else if (frameCount < 30){
        hero.heroLeft6()
        frameCount++
    }
    else if (frameCount < 35){
        hero.heroLeft7()
        frameCount++
    }
    else if (frameCount < 40){
        hero.heroLeft8()
        frameCount++
    }
    else if (frameCount < 45){
        hero.heroLeft9()
        frameCount++
    }
    else if (frameCount < 50){
        hero.heroLeft10()
        frameCount++
    }
    else if (frameCount < 60){
        hero.heroLeft11()
        frameCount++
    }
    else{
        hero.heroLeft1()
        frameCount = 0;}
}

// 대쉬

if (moveKeyForward == true && hero.y == 650 && keyShift == true && moveKeyBack == false  ||moveKeyForward == true && hero.y == 350 && keyShift == true &&moveKeyBack == false ) 
{
    hero.x+=6
    if (frameCount < 5) {
        hero.dashRightHero1()
        frameCount++
    }else if (frameCount < 10){
        hero.dashRightHero2()
        frameCount++
    }
    else if (frameCount < 15){
        hero.dashRightHero3()
        frameCount++
    }
    else if (frameCount < 20){
        hero.dashRightHero4()
        frameCount++
    }
    else if (frameCount < 25){
        hero.dashRightHero5()
        frameCount++
    }
    else if (frameCount < 30){
        hero.dashRightHero6()
        frameCount++
    }
    else if (frameCount < 35){
        hero.dashRightHero7()
        frameCount++
    }
    else if (frameCount < 40){
        hero.dashRightHero8()
        frameCount++
    } else{
        hero.dashRightHero1()
        frameCount = 0;}
        
}else if (moveKeyForward == true && hero.y == 500 && keyShift == true  &&moveKeyBack == false ||moveKeyForward == true && hero.y == 200 && keyShift == true   &&moveKeyBack == false) {
    hero.x+=6
    if (frameCount < 5) {
        hero.dashRightHero1()
        frameCount++
    }else if (frameCount < 10){
        hero.dashRightHero2()
        frameCount++
    }
    else if (frameCount < 15){
        hero.dashRightHero3()
        frameCount++
    }
    else if (frameCount < 20){
        hero.dashRightHero4()
        frameCount++
    }
    else if (frameCount < 25){
        hero.dashRightHero5()
        frameCount++
    }
    else if (frameCount < 30){
        hero.dashRightHero6()
        frameCount++
    }
    else if (frameCount < 35){
        hero.dashRightHero7()
        frameCount++
    }
    else if (frameCount < 40){
        hero.dashRightHero8()
        frameCount++
    } else{
        hero.dashRightHero1()
        frameCount = 0;}
}
if (moveKeyBack == true && hero.y == 650 && keyShift == true && moveKeyForward == false||moveKeyBack == true && hero.y == 350 && keyShift == true   && moveKeyForward == false) 
{
    hero.x+=-6
    if (frameCount < 5) {
        hero.dashLeftHero1()
        frameCount++
    }else if (frameCount < 10){
        hero.dashLeftHero2()
        frameCount++
    }
    else if (frameCount < 15){
        hero.dashLeftHero3()
        frameCount++
    }
    else if (frameCount < 20){
        hero.dashLeftHero4()
        frameCount++
    }
    else if (frameCount < 25){
        hero.dashLeftHero5()
        frameCount++
    }
    else if (frameCount < 30){
        hero.dashLeftHero6()
        frameCount++
    }
    else if (frameCount < 35){
        hero.dashLeftHero7()
        frameCount++
    }
    else if (frameCount < 40){
        hero.dashLeftHero8()
        frameCount++
    } else{
        hero.dashLeftHero1()
        frameCount = 0;}
}else if (moveKeyBack == true && hero.y == 500 && keyShift == true  && moveKeyForward == false ||moveKeyBack == true && hero.y == 200 && keyShift == true  && moveKeyForward == false ) {
    hero.x+=-6
    if (frameCount < 5) {
        hero.dashLeftHero1()
        frameCount++
    }else if (frameCount < 10){
        hero.dashLeftHero2()
        frameCount++
    }
    else if (frameCount < 15){
        hero.dashLeftHero3()
        frameCount++
    }
    else if (frameCount < 20){
        hero.dashLeftHero4()
        frameCount++
    }
    else if (frameCount < 25){
        hero.dashLeftHero5()
        frameCount++
    }
    else if (frameCount < 30){
        hero.dashLeftHero6()
        frameCount++
    }
    else if (frameCount < 35){
        hero.dashLeftHero7()
        frameCount++
    }
    else if (frameCount < 40){
        hero.dashLeftHero8()
        frameCount++
    } else{
        hero.dashLeftHero1()
        frameCount = 0;}
}
// 점프 & 점프 낙하
if (keySpace == true && keySpaceUpDown == false && hero.y <= 650 && hero.y >= 570 || keySpace == true && keySpaceUpDown == false && hero.y <= 500 && hero.y >= 420  || keySpace == true && keySpaceUpDown == false && hero.y <= 350 && hero.y >= 270)
{ 
   if (moveKeyForward ==true) {
        hero.y+=-2
        hero.x+=+2
        keySpacecount = true
        hero.heroRightJump1()
        }
        else if (moveKeyBack == true) {
        hero.y+=-2
        hero.x+=-2
        keySpacecount = true
        hero.heroLeftJump1()
        }
        else
        {

            hero.y+=-2
        keySpacecount = true
        hero.heroRightJump1()

        }
}

if (hero.y == 570  && keySpacecount == true || hero.y == 420 && keySpacecount == true || hero.y == 270 && keySpacecount == true) {
   if (moveKeyBack == true) {
    hero.heroLeftJump1()
    keySpaceUpDown = true
    keySpace = false
   }else{

hero.heroRightJump1()
keySpaceUpDown = true
keySpace = false

   }

}
// 점프후 이동 및 낙하
if (keySpaceUpDown == true && hero.y < 650 &&keySpacecount == true || keySpaceUpDown == true && hero.y > 500 &&keySpacecount == true || keySpaceUpDown == true && hero.y > 350 &&keySpacecount == true ){
   if(moveKeyForward == true){
 
    hero.x+=2    
    hero.y+=+2
    hero.heroRightJump2()   
   }else if (moveKeyBack == true) {
    hero.x+=-2    
    hero.y+=+2
    hero.heroLeftJump2()   
   } 
   else{
       
       hero.y+=+2
       hero.heroRightJump2() 
}
          }

if (hero.y == 650 || hero.y == 500 || hero.y == 350 || hero.y == 150)  {
keySpacecount = false
keySpaceUpDown = false
}










// 중력 

if (hero.x >= 792 && hero.y >= 350 && hero.y < 500  && keySpacecount == false) 
{
   hero.y+=+5
   hero.heroRightJump2() 
}else if (hero.x <= 62 && hero.y >= 350 && hero.y < 650  && keySpacecount == false) 
{
hero.y+=+5
hero.heroRightJump2() 
}
else if (hero.x <= 110 && hero.y >= 500 && hero.y < 650  && keySpacecount == false) 
{
hero.y+=+5 
hero.heroRightJump2() 
}else if (hero.x >= 838 && hero.y >= 500 && hero.y < 650  && keySpacecount == false) 
{
hero.y+=+5 
hero.heroRightJump2() 
}

if (hero.y == 500 || hero.y == 650 || hero.y == 350 || hero.y == 150) {
upMotionPlay = false
}


if (moveKeyForward == false & moveKeyBack == false && keySpacecount == false && keySpace == false && upMotionPlay == false && hero.y == 650|| moveKeyForward == true & moveKeyBack == true && hero.y == 650 || moveKeyForward == false & moveKeyBack == false && keySpacecount == false && keySpace == false && upMotionPlay == false && hero.y ==500||  moveKeyForward == false & moveKeyBack == false && keySpacecount == false && keySpace == false && upMotionPlay == false && hero.y ==350|| moveKeyForward == false & moveKeyBack == false && keySpacecount == false && keySpace == false && upMotionPlay == false && hero.y ==150) 
{
hero.heroStopimg()
}else if(hero.y < 650 && upMotionPlay == true  )
{hero.heroUP()}

}

// 사다리이벤트
function ladderMoveEvent1(a,b)
{  let 감지 = a.x - b.x
let 감지2 = (a.x+a.width) - (b.x+b.width)

if (감지 < 5 && 감지 > -10 && moveKeyUp && a.y <=650  && a.y > 500)
{   a.y+=-2
upMotionPlay = true
hero.heroUP()
}else if (감지2 > 0 && 감지2 < 10 && moveKeyUp && a.y <=650  && a.y > 500) {
a.y+=-2
upMotionPlay = true
hero.heroUP()
}


if (감지 < 5 && 감지 > -10 &&  moveKeydown && a.y < 650)
{
upMotionPlay = true
hero.heroUP()

a.y+=+2
}else if (감지2 > 0 && 감지2 < 10 && moveKeydown && a.y < 650) {
a.y+=+2
upMotionPlay = true
hero.heroUP()
}

}


function ladderMoveEvent2(a,b)
{  let 감지 = a.x - b.x
let 감지2 = (a.x+a.width) - (b.x+b.width)

if (감지 < 5 && 감지 > -10 && moveKeyUp && a.y <=600  && a.y > 350)
{
a.y+=-2
upMotionPlay = true
hero.heroUP()
}else if (감지2 > 0 && 감지2 < 10 && moveKeyUp && a.y <=600  && a.y > 350) {
a.y+=-2
hero.heroUP()

}
if (감지 < 5 && 감지 > -10 &&  moveKeydown && a.y < 500)
{
hero.heroUP()
upMotionPlay = true
a.y+=+2
}else if (감지2 > 0 && 감지2 < 10 && moveKeydown && a.y < 500) {
a.y+=+2
upMotionPlay = true
hero.heroUP()
}
}

function ladderMoveEvent3(a,b)
{  let 감지 = a.x - b.x
let 감지2 = (a.x+a.width) - (b.x+b.width)

if (감지 < 5 && 감지 > -10 && moveKeyUp && a.y <=350  && a.y > 150)
{
a.y+=-2
upMotionPlay = true
hero.heroUP()
}else if (감지2 > 0 && 감지2 < 10 && moveKeyUp && a.y <=350  && a.y > 150) {
a.y+=-2
hero.heroUP()

}
if (감지 < 5 && 감지 > -10 &&  moveKeydown && a.y < 350)
{
hero.heroUP()
upMotionPlay = true
a.y+=+2
}else if (감지2 > 0 && 감지2 < 10 && moveKeydown && a.y < 350) {
a.y+=+2
upMotionPlay = true
hero.heroUP()
}
}


// 함정발동이벤트

function trapMoveEvent(a,b)
{  let 왼쪽충돌 = a.x - (b.x+b.width)
let 오른쪽충돌 = (a.x + a.width) - b.x 
let 높이충돌 = a.y + a.height- b.y 



if (  높이충돌 >= 25 && 높이충돌 <= 50 && 오른쪽충돌 > 0 && 오른쪽충돌 <=50 || 왼쪽충돌<=0 && 왼쪽충돌 >=-50 && 높이충돌 >=25 && 높이충돌 <= 50 )
{   texts.gameOver() 

trapsoundSound.play()   
gameoverSound.play()
trap1.draw2()

setTimeout(()=>{cancelAnimationFrame(game)},0)

}else{
trap1.draw()
}

}

function monsterMoveEvent(a,b)
{  let 왼쪽충돌 = a.x - (b.x+b.width)
let 오른쪽충돌 = (a.x + a.width) - b.x 
let 높이충돌 = a.y + a.height- b.y 



if ( 높이충돌 >= 0 && 높이충돌 <= 50 && 오른쪽충돌 > 0 && 오른쪽충돌 <=50 || 왼쪽충돌<=0 && 왼쪽충돌 >=-50 && 높이충돌 >=0 && 높이충돌 <= 50 )
{   tigersound.play()    
gameoverSound.play()
texts.gameOver()    
cancelAnimationFrame(game)

}}

function shopEvent(a,b)
{  let 왼쪽충돌 = a.x - (b.x+b.width)
let 오른쪽충돌 = (a.x + a.width) - b.x 
let 높이충돌 = a.y + a.height- b.y 



if ( 높이충돌 >= 0 && 높이충돌 <= 100 && 오른쪽충돌 > 0 && 오른쪽충돌 <=100 && keyAbutton ==false && ladderget ==false|| 왼쪽충돌<=0 && 왼쪽충돌 >=-100 && 높이충돌 >=0 && 높이충돌 <= 100 && keyAbutton ==false && ladderget ==false )
{
if (coinArrPoint.length == 6){shops.shopHost();Ladder3.draw();texts.shoptext2();shops.draw();}else{shops.shopHost();Ladder3.draw();texts.shoptext();shops.draw();}
}
else if (높이충돌 >= 0 && 높이충돌 <= 100 && 오른쪽충돌 > 0 && 오른쪽충돌 <=100 && keyAbutton ==true  && coinArrPoint.length ==6 || 왼쪽충돌<=0 && 왼쪽충돌 >=-100 && 높이충돌 >=0 && 높이충돌 <= 100  && keyAbutton ==true && coinArrPoint.length ==6) 
{ coinArrPoint.forEach((e,i)=>{coinArrPoint.splice(i,1)}); ladderget = true;shops.shopHost(); shops.draw();}
else  if ( 높이충돌 >= 0 && 높이충돌 <= 100 && 오른쪽충돌 > 0 && 오른쪽충돌 <=100 && ladderget ==true|| 왼쪽충돌<=0 && 왼쪽충돌 >=-100 && 높이충돌 >=0 && 높이충돌 <= 100 && ladderget == true )
{shops.shopHost();shops.draw();}
else if (ladderget == true)  
{ shops.shopHost();shops.draw()}
else if(ladderget == false)
{shops.shopHost();Ladder3.draw();shops.draw(); }
}



animationfps()
