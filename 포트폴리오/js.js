  // 배경이미지 조절
  let count = 6
  let target = document.querySelector("#layout")
  let target2 = document.querySelector("#contant")
  let target3 = document.querySelector("#container")
  let span = document.querySelectorAll(".fontspan")
  let painting = document.querySelector(" #painting")
  
 document.querySelector("html").addEventListener("mousewheel",(delta)=>{
     if (delta.wheelDelta > 0 && count == 6)
     {
      target.style.marginTop= "700px"
      target.style.opacity="0%"
      target3.style.opacity="0%"
     }else if (delta.wheelDelta > 0 && count == 5)
     {
         for(var i=0;i<span.length;i++)
     {
       span[i].style.filter= "blur(0px)";
       span[i].style.opacity= "100%";
     }
     
     setTimeout(()=>{
         painting.style.opacity="100%"
     },1000)
     
    
      target.style.marginTop= "500px"
      target.style.opacity="100%"
      target3.style.opacity="100%"
      count++
     }
     else if (delta.wheelDelta > 0 && count == 4)
     {  
      target.style.marginTop= "300px"
      target.style.opacity="100%"
     target3.style.opacity="100%"
      count++
     }
     else if (delta.wheelDelta > 0 && count == 3)
     {
      target.style.marginTop= "100px"
      target.style.opacity="100%"
      target3.style.opacity="100%"
      count++
     }
     else if (delta.wheelDelta > 0 && count < 3)
     {
    
      count++
     }
     
     else if (delta.wheelDelta < 0 && count == 6)
     {
     for(var i=0;i<span.length;i++ )
     {
       span[i].style.filter= "blur(30px)";
       span[i].style.opacity= "0%";
     }
     setTimeout(()=>{
         painting.style.opacity="0%"
     },300)
    
      target.style.marginTop= "500px"
      target.style.opacity="100%"
      target3.style.opacity="100%"
      count--
     }
     else if (delta.wheelDelta < 0 && count == 5)
     {
      target.style.marginTop= "300px"
      target.style.opacity="100%"
      target3.style.opacity="100%"
      count--
     }
     else if (delta.wheelDelta < 0 && count == 4)
     {
         
      
      target.style.marginTop= "-100px"
      target.style.opacity="100%"
      target3.style.opacity="100%"
     
      count--
     }
     else if (delta.wheelDelta < 0 && count < 4 && count > -16)
     {
     
      count--
     }
 })
 // 패키지 항공 호텔 클릭시 바뀌는부분
 var targetTitle = document.querySelectorAll(".title");
 var targetMeun1 = document.querySelector("#menu1");
 var targetMeun2 = document.querySelector("#menu2");
 var targetMeun3 = document.querySelector("#menu3");

 targetTitle[0].addEventListener("click",function(){
     targetMeun1.style.zIndex = 3;
     targetMeun2.style.zIndex = 1;
     targetMeun3.style.zIndex = 2;

     targetTitle[0].style.borderBottom ="3px solid #000";
     targetTitle[1].style.borderBottom ="1px solid #000";
     targetTitle[2].style.borderBottom ="1px solid #000";

     targetTitle[0].style.fontWeight= "bolder";
     targetTitle[1].style.fontWeight= "normal";
     targetTitle[2].style.fontWeight= "normal";
     
 });
 targetTitle[1].addEventListener("click",function ()
 {
     targetMeun1.style.zIndex = 2;
     targetMeun2.style.zIndex = 3;
     targetMeun3.style.zIndex = 1;

     targetTitle[0].style.borderBottom ="1px solid #000";
     targetTitle[1].style.borderBottom ="3px solid #000";
     targetTitle[2].style.borderBottom ="1px solid #000";

     targetTitle[0].style.fontWeight= "normal";
     targetTitle[1].style.fontWeight= "bolder";
     targetTitle[2].style.fontWeight= "normal";
 });
 targetTitle[2].addEventListener("click",function (){
     targetMeun1.style.zIndex = 1;
     targetMeun2.style.zIndex = 2;
     targetMeun3.style.zIndex = 3;

     targetTitle[0].style.borderBottom ="1px solid #000"
     targetTitle[1].style.borderBottom ="1px solid #000"
     targetTitle[2].style.borderBottom ="3px solid #000"

     targetTitle[0].style.fontWeight= "normal";
     targetTitle[1].style.fontWeight= "normal";
     targetTitle[2].style.fontWeight= "bolder";
     
 });
 // 나라 선택창
 const targetSelcetcity1 = document.querySelector("#seleccontry")
 var playBlockNoneVar = playBlockNone()


 function playBlockNone() {
    
     return function () 
     {
     document.querySelector("#selectcitybox").style.display = cilckPoint?"block":"none"; 
     cilckPoint = !cilckPoint
     }
 }
 targetSelcetcity1.addEventListener("click",playBlockNoneVar)

 var selcetContryClass = document.querySelectorAll(".selcetcontryclass");
 var selcetCity = document.querySelectorAll(".selcetcity");
 var indexCount = 11;

 clickIndexChange()

 function clickIndexChange()
 {
  for(let i=0;i<selcetContryClass.length;i++)
  {  
     selcetContryClass[i].addEventListener("click",()=>{
         selcetCity[i].style.zIndex = indexCount
         indexCount++
     })
  }   
 }




 // 세계지도 

 var jsContry =[document.querySelector("#rus"),document.querySelector("#jep"),document.querySelector("#cha"),document.querySelector("#us"),document.querySelector("#aus"),document.querySelector("#eu")]

 function eventMouse(x) {
 x.addEventListener("mouseover",function()
 {
     x.style.transform ="scale(1.2)";
     x.style.zIndex = 3;
 });
 
 x.addEventListener("mouseout",function()
 {
     x.style.transform ="scale(1)";
     x.style.zIndex = 0;
 });
     
 }
 eventMouse(jsContry[0])
 eventMouse(jsContry[1])
 eventMouse(jsContry[2])
 eventMouse(jsContry[3])
 eventMouse(jsContry[4])
 eventMouse(jsContry[5])

 // 세계지도 클릭하면 나오는 박스
 // 호주
   let worldCountry=[document.querySelector("#rusvideo"),
                     document.querySelector("#jepvideo"),
                     document.querySelector("#chavideo"),
                     document.querySelector("#usvideo"),
                     document.querySelector("#ausvideo"), 
                     document.querySelector("#euvideo")]
 var mapBlockNoneVar1 = mapBlockNone1()
 var mapBlockNoneVar2 = mapBlockNone2()
 var mapBlockNoneVar3 = mapBlockNone3()
 var mapBlockNoneVar4 = mapBlockNone4()
 var mapBlockNoneVar5 = mapBlockNone5()
 var mapBlockNoneVar6 = mapBlockNone6() 
 let cilckPoint = true


function mapBlockNone1() {
 let worldRemove = worldCountry.slice()
     worldRemove.shift()
     return function () 
     {
     document.querySelector("#rusvideo").style.opacity = cilckPoint?"100%":"0%"; 
     for(var i = 0;i < worldRemove.length;i++)
     {
      worldRemove[i].style.opacity="0%";
     }
     document.querySelector("#rusvideo").style.width= "460px"
     document.querySelector("#rusvideo").style.height = "600px"
     document.querySelector("#video1").width="460px"
     document.querySelector("#video1").height="200px"
     document.querySelector("#video1").src = cilckPoint?"https://www.youtube.com/embed/5dJ9hb__GQg?autoplay=1&mute=1&autohide=1":"https://www.youtube.com/embed/5dJ9hb__GQg"
     cilckPoint = !cilckPoint
     }
 }
 jsContry[0].addEventListener("click",mapBlockNoneVar1)




 function mapBlockNone2() {
     let worldRemove1 = worldCountry.slice()
         worldRemove1.splice(1,1)  
     return function () 
     {
     document.querySelector("#jepvideo").style.opacity = cilckPoint?"100%":"0%";
     for(var i = 0;i < worldRemove1.length;i++)
     {
      worldRemove1[i].style.opacity="0%";
     }
      
     document.querySelector("#jepvideo").style.width= "460px"
     document.querySelector("#jepvideo").style.height = "600px"
     document.querySelector("#video2").width="460px"
     document.querySelector("#video2").height="200px"
     document.querySelector("#video2").src = cilckPoint?"https://www.youtube.com/embed/gqYzEv_AqYM?autoplay=1&mute=1&autohide=1":"https://www.youtube.com/embed/gqYzEv_AqYM"
     cilckPoint = !cilckPoint
     }
 }
 jsContry[1].addEventListener("click",mapBlockNoneVar2)


 function mapBlockNone3() {
     let worldRemove2 = worldCountry.slice()
         worldRemove2.splice(2,1)
     
     return function () 
     {
     document.querySelector("#chavideo").style.opacity = cilckPoint?"100%":"0%"; 
     for(var i = 0;i < worldRemove2.length;i++)
     {
     worldRemove2[i].style.opacity="0%";
     }
     document.querySelector("#chavideo").style.width= "460px"
     document.querySelector("#chavideo").style.height = "600px"
     document.querySelector("#video3").width="460px"
     document.querySelector("#video3").height="200px"
     document.querySelector("#video3").src = cilckPoint?"https://www.youtube.com/embed/p1e68fqMkME?autoplay=1&mute=1&autohide=1":"https://www.youtube.com/embed/p1e68fqMkME"
     cilckPoint = !cilckPoint
     }
 }
 jsContry[2].addEventListener("click",mapBlockNoneVar3)




 function mapBlockNone4() {
     let worldRemove3 = worldCountry.slice()
         worldRemove3.splice(3,1)
        
     return function () 
     {
     document.querySelector("#usvideo").style.opacity = cilckPoint?"100%":"0%"; 
     for(var i = 0;i < worldRemove3.length;i++)
     {
     worldRemove3[i].style.opacity="0%";
     }
     document.querySelector("#usvideo").style.width= "460px"
     document.querySelector("#usvideo").style.height = "600px"
     document.querySelector("#video4").width="460px"
     document.querySelector("#video4").height="200px"
     document.querySelector("#video4").src = cilckPoint?"https://www.youtube.com/embed/0dVzUvPQOto?autoplay=1&mute=1&autohide=1":"https://www.youtube.com/embed/0dVzUvPQOto"
     cilckPoint = !cilckPoint
     }
 }
 jsContry[3].addEventListener("click",mapBlockNoneVar4)
 function mapBlockNone5() {
     let worldRemove4 = worldCountry.slice()
         worldRemove4.splice(4,1)
         
     return function () 
     {
     document.querySelector("#ausvideo").style.opacity = cilckPoint?"100%":"0%"; 
     for(var i = 0;i < worldRemove4.length;i++)
     {
     worldRemove4[i].style.opacity="0%";
     }
     document.querySelector("#ausvideo").style.width= "460px"
     document.querySelector("#ausvideo").style.height = "600px"
     document.querySelector("#video5").width="460px"
     document.querySelector("#video5").height="200px"
     document.querySelector("#video5").src = cilckPoint?"https://www.youtube.com/embed/ZUw5rpaS-wk?autoplay=1&mute=1&autohide=1":"https://www.youtube.com/embed/ZUw5rpaS-wk?"
     cilckPoint = !cilckPoint
     }
 }
 jsContry[4].addEventListener("click",mapBlockNoneVar5)

 function mapBlockNone6() {
     let worldRemove5 = worldCountry.slice()
         worldRemove5.splice(5,1)
         
     return function () 
     {
     document.querySelector("#euvideo").style.opacity = cilckPoint?"100%":"0%"; 
     for(var i = 0;i < worldRemove5.length;i++)
     {
     worldRemove5[i].style.opacity="0%";
     }
     document.querySelector("#euvideo").style.width= "460px"
     document.querySelector("#euvideo").style.height = "600px"
     document.querySelector("#video6").width="460px"
     document.querySelector("#video6").height="200px"
     document.querySelector("#video6").src = cilckPoint?"https://www.youtube.com/embed/YM_4shi_fsk?autoplay=1&mute=1&autohide=1":"https://www.youtube.com/embed/YM_4shi_fsk?"
     cilckPoint = !cilckPoint
     }
 }
 jsContry[5].addEventListener("click",mapBlockNoneVar6)
 // 이미지 슬라이더
 let targetContainer = document.querySelector("#container")
 let targetInfo = document.querySelector("#info")
 let targetMenu = document.querySelectorAll(".menu")
 let slide = document.querySelector(".slide")
 let arrowRight = document.querySelector(".right")
 let arrowLeft = document.querySelector(".left")
 let moveCount = 0;

 
var autoSlide = setInterval(() => {
    moveSlide(moveCount - 1)
}, 2000);


 arrowRight.addEventListener("click",()=> {
     moveSlide(moveCount - 1)
 })

 arrowLeft.addEventListener("click",()=>{
     moveSlide(moveCount + 1)
 })


function moveSlide(num){   

 slide.classList.add("tranform0")
if (num > -4) {
 slide.style. marginLeft=num*(700)+'px'
 moveCount = num
}

setTimeout(()=> {
 if (moveCount == -3)
 {  
      slide.classList.remove("tranform0")
     slide.style. marginLeft="0px"
     moveCount = 0;
 }else if (moveCount == 1) {
     slide.classList.remove("tranform0")
     slide.style. marginLeft="-1400px"
     moveCount = -2;
 }
},500)



if (num == -1 )
 {targetContainer.style.backgroundColor= "#84EAC0";targetInfo.style.backgroundColor= "#84EAC0";
 for(let i = 0;i <targetMenu.length;i++)
 {targetMenu[i].style.backgroundColor= "#84EAC0"}
 }
 else if (num ==-2  || num == 1  ) 
 {targetContainer.style.backgroundColor= "#FFE7E2";targetInfo.style.backgroundColor= "#FFE7E2";
 for(let i = 0;i <targetMenu.length;i++)
 {targetMenu[i].style.backgroundColor= "#FFE7E2"}
 }
 else if ( num==-3 || num == 0 ) 
 {targetContainer.style.backgroundColor= "#b3d5fd";targetInfo.style.backgroundColor= "#b3d5fd";
 for(let i = 0;i <targetMenu.length;i++)
 {targetMenu[i].style.backgroundColor= "#b3d5fd"}
 } 


 
}
// 마우스 올리면 슬라이더 자동 움직임 중지

document.querySelector(".imgsliderlayout").addEventListener("mouseover",()=>{
 clearInterval(autoSlide)
})
document.querySelector(".imgsliderlayout").addEventListener("mouseout",()=>{
 autoSlide = setInterval(() => {
 moveSlide(moveCount - 1)
}, 2000);
})
// 이벤트 
const targetMainBut = document.querySelectorAll(".mainbut")
const targetslidBut = document.querySelectorAll(".side")
const targetslidBut1 = document.querySelectorAll(".side1")
const targetslidBut2 = document.querySelectorAll(".side2")
let slidButcount= 1;  
 targetslidBut[0].style.backgroundColor ="blue";
 targetslidBut1[0].style.backgroundColor ="blue";
 targetslidBut2[0].style.backgroundColor ="blue";
 targetslidBut[1].style.backgroundColor ="red";
 targetslidBut1[1].style.backgroundColor ="red";
 targetslidBut2[1].style.backgroundColor ="red";
 targetslidBut[2].style.backgroundColor ="black";
 targetslidBut1[2].style.backgroundColor ="black";
 targetslidBut2[2].style.backgroundColor ="black";



targetMainBut[0].addEventListener("click",()=>{
 targetslidBut[0].style.zIndex =  slidButcount
 targetslidBut1[0].style.zIndex =  slidButcount
 targetslidBut2[0].style.zIndex =  slidButcount
 slidButcount++
})
targetMainBut[1].addEventListener("click",()=>{
 targetslidBut[1].style.zIndex =  slidButcount
 targetslidBut1[1].style.zIndex =  slidButcount
 targetslidBut2[1].style.zIndex =  slidButcount
 slidButcount++
})
targetMainBut[2].addEventListener("click",()=>{
 targetslidBut[2].style.zIndex =  slidButcount
 targetslidBut1[2].style.zIndex =  slidButcount
 targetslidBut2[2].style.zIndex =  slidButcount
 slidButcount++
})

// 네비게이션바
let mainmenuboxcount = true
const targetLinebottom = document.querySelectorAll(".line")

document.querySelector(".mainmenu").addEventListener("click",
()=>{
 document.querySelector("#mainmenubox").style.right = mainmenuboxcount?"0px":"-350px"
 targetLinebottom[0].style.transform= mainmenuboxcount?"rotate(-50deg)":"rotate(0deg)";
 targetLinebottom[0].style.marginTop= mainmenuboxcount?"35px":"15px";
 targetLinebottom[1].style.opacity= mainmenuboxcount?"0%":"100%";
 targetLinebottom[2].style.transform= mainmenuboxcount?"rotate(50deg)":"rotate(0deg)";
 targetLinebottom[2].style.marginTop= mainmenuboxcount?"-25px":"15px";
 mainmenuboxcount = !mainmenuboxcount
})
// 클릭시 포커싱 


targetSelcetcity1.addEventListener("click",()=>{
 targetSelcetcity1.style.transition="0.5s" ;
 targetSelcetcity1.scrollIntoView(true)
 count = -5
})
//  뒤집기
let targetCard = document.querySelectorAll(".card")
let targetHovercard = document.querySelectorAll(".hovercard")
let targetBack = document.querySelectorAll(".back")
let targetfront= document.querySelectorAll(".front")

function cardMove()
{    
  for (let i = 0; i < targetCard.length; i++) {
     targetHovercard[i].addEventListener("mouseover",()=>{
     targetHovercard[i].style.boxShadow = "1px 1px 100px white";
     targetHovercard[i].style.border="2px solid #fff";
     
     targetCard[i].style.transform="rotateX(180deg)"
     targetBack[i].style.transform="rotateX(180deg)"
     targetfront[i].style.transform="rotateX(180deg)"
 }) 
 
}

}
cardMove()
function cardMove2()
{    
  for (let i = 0; i < targetCard.length; i++) {
     targetHovercard[i].addEventListener("mouseout",()=>{
         targetHovercard[i].style.boxShadow = "";
     targetHovercard[i].style.border="";
     targetCard[i].style.transform="rotateX(0deg)"
     targetBack[i].style.transform="rotateX(0deg)"
     targetfront[i].style.transform="rotateX(0deg)"
 }) 
 
}

}
cardMove2()