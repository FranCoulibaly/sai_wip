// let header = document.querySelector('.header');

function counter() {
    var index = parseInt(document.querySelector('.header').getAttribute('data-lang'));
    if (document.querySelector('.header').classList.contains('hover')) {
        document.querySelector('.header').classList.remove('hover');
        setTimeout(function() {
            if (index < 5) {
                document.querySelector('.header').setAttribute('data-lang', index + 1);
            } else {
                document.querySelector('.header').setAttribute('data-lang', 0);
            }
        }, 600);
    } else {
        document.querySelector('.header').classList.add('hover');
    }
}

function counterMobile() {
    var headerMobile = document.querySelector('.sai-text--mobile');
    var index = parseInt(headerMobile.getAttribute('data-lang'));
    setTimeout(function() {
        if (index < 6) {
            headerMobile.setAttribute('data-lang', index + 1);
        } else {
            headerMobile.setAttribute('data-lang', 0);
        }
    }, 300);
}

function refreshWindow() {
  $(window).resize()
}

var clockButton = document.querySelector('#clock-button');

function showContent(){
    var index = parseInt(document.querySelector('#clock-button').getAttribute('data-deg'));
    var h3 = document.querySelector('h3.content');
    var p = document.querySelector('p.content');
    var about = document.querySelector('.content.about');
    var work = document.querySelector('.content.work');
    var culture = document.querySelector('.content.culture');
    
    if (index === 1) {
        clockButton.style.transform = "rotate(45deg)";
        window.setTimeout(refreshWindow, 50);
        document.querySelector('div.contact').style.display = "none";
        document.querySelector('.work-carousel').style.display = "none";
        document.querySelector('.culture-carousel').style.display = "none";
        document.querySelector('.career-carousel').style.display = "none";
        h3.innerHTML = "About";
        h3.style.visibility = "visible";
        about.style.display = "block";
        about.style.visibility = "visible";
        about.style.width = "330px";
        about.style.margin = " 0 auto";
        document.querySelector('#nl').style.display = "inline-block";
        document.querySelector('#se').style.display = "inline-block";
        document.querySelector('#fi').style.display = "inline-block";
    } else if (index === 2) {
        clockButton.style.transform = "rotate(135deg)";
        
        // window.setTimeout(refreshWindow, 50);
        about.style.display = "none";
        about.style.visibility = "hidden";
        document.querySelector('#nl').style.display = "none";
        document.querySelector('#se').style.display = "none";
        document.querySelector('#fi').style.display = "none";
        document.querySelector('div.contact').style.display = "none";
        document.querySelector('.culture-carousel').style.display = "none";
        document.querySelector('.career-carousel').style.display = "none";
        document.querySelector('.work-carousel').style.display = "block";
        $('.slick-slider').slick('refresh');
        h3.innerHTML = "Work";
        work.style.display = "block";
        work.style.visibility = "visible";
        work.style.width = "100%";
        work.style.margin = " 0 auto";

        $('.work-carousel .main-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true});

    } else if (index === 3) {
        clockButton.style.transform = "rotate(180deg)"; 
        // window.setTimeout(refreshWindow, 50);
        work.style.display = "none";
        work.style.visibility = "hidden";
        document.querySelector('div.contact').style.display = "none";
        document.querySelector('.work-carousel').style.display = "none";
        document.querySelector('.career-carousel').style.display = "none";
        document.querySelector('.culture-carousel').style.display = "block";
        $('.slick-slider').slick('refresh');
        h3.innerHTML = "Culture";
        culture.style.display = "block";
        culture.style.visibility = "visible";
        culture.style.width = "100%";
        culture.style.margin = " 0 auto";

        $('.culture-carousel .main-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        mobileFirst: true,
        });


    } else if (index === 4) {
        clockButton.style.transform = "rotate(225deg)";
        
        // window.setTimeout(refreshWindow, 50);
        hideMedia()
        culture.style.display = "none";
        culture.style.visibility = "hidden";
        document.querySelector('div.contact').style.display = "none";
        document.querySelector('.work-carousel').style.display = "none";
        document.querySelector('.culture-carousel').style.display = "none";
        document.querySelector('.career-carousel').style.display = "block";
        $('.slick-slider').slick('refresh');
        h3.innerHTML = "Careers";

        $('.main-vertical-carousel').slick({
            infinite: false,
            vertical: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            swipeToSlide: true,
            // arrows: true,
            verticalSwiping: true, 
            verticalScrolling: true,
            // centerMode: true 
            mobileFirst: true,
          });

    } else if (index === 5) {
        clockButton.style.transform = "rotate(315deg)";
        window.setTimeout(refreshWindow, 50);
        h3.innerHTML = "Contact";
        h3.style.visibility = "visible";
        // p.style.display = "none";
        document.querySelector('.career-carousel').style.display = "none";
        document.querySelector('div.contact').style.visibility = "visible";
        document.querySelector('div.contact').style.display = "block";
        

        document.querySelector('#sai-address').style.visibility = "visible";
        document.querySelector('#sai-address').style.display = "block";
    } else {
        clockButton.style.transform = "rotate(360deg)";

        h3.style.visibility = "hidden";
        p.style.display = "none";
        document.querySelector('div.contact').style.display = "none";
        document.querySelector('div.contact').style.visibility = "hidden";
        document.querySelector('#sai-address').style.visibility = "hidden"; 
        document.querySelector('#sai-address').style.display = "none";
    }
}

function detectTouchscreen() {
  var result = false;
  if (window.PointerEvent && ('maxTouchPoints' in navigator)) {
    if (navigator.maxTouchPoints > 0) {
      result = true;
    }
  } else {
    if (window.matchMedia && window.matchMedia("(any-pointer:coarse)").matches) {
      result = true;
    } else if (window.TouchEvent || ('ontouchstart' in window)) {
      result = true;
    }
  }
  return result;
}

function rotateClockButton(){
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if ((w < 768) || (w >= 768 && w <= 1024) || (detectTouchscreen() === true)) {
        var index = parseInt(document.querySelector('#clock-button').getAttribute('data-deg'));
        if (index < 5) {
            document.querySelector('#clock-button').setAttribute('data-deg', index + 1);    
        } else {
            document.querySelector('#clock-button').setAttribute('data-deg', 0);
        }
        showContent();
    }
}

function showMedia(){
    window.setTimeout(function(){

        //desktop
        if (window.screen.height >= 759 && window.screen.width > 1024){
        document.querySelector('.header').setAttribute('style', 'top:-240px;');
        document.querySelector('.content').setAttribute('style', 'position:relative;bottom:255px');
        document.querySelector('.culture-carousel').setAttribute('style', 'display:block;position:relative;bottom:280px');
        document.querySelector('#clock-button').setAttribute('style', 'top:-325px;transform:rotate(180deg);');
        document.querySelector('.video').style.display = 'block';
        console.log("desktop");
        } 
        // tablet portrait
        else if (window.screen.width >= 768 && window.screen.height <= 1024 && window.screen.orientation.type === "portrait-primary") {
        document.querySelector('.header').setAttribute('style', 'top:-275px;');
        document.querySelector('.content').setAttribute('style', 'position:relative;bottom:160px');
        document.querySelector('.culture-carousel').setAttribute('style', 'display:block;position:relative;bottom:120px');
        document.querySelector('#clock-button').setAttribute('style', 'top:25px;transform:rotate(180deg);');
        document.querySelector('.video').setAttribute('style', 'display:block;top:-90px;');
        // console.log("tablet portrait");
        }
        //tablet landscape
        else if (window.screen.height >= 768 && window.screen.height <= 768 && window.screen.orientation.type === "landscape-primary") {
        document.querySelector('.header').setAttribute('style', 'top:-240px;');
        document.querySelector('.content').setAttribute('style', 'position:relative;bottom:230px');
        document.querySelector('.culture-carousel').setAttribute('style', 'display:block;position:relative;bottom:250px');
        document.querySelector('#clock-button').setAttribute('style', 'top:-285px;transform:rotate(180deg);');
        document.querySelector('.video').setAttribute('style', 'display:block;top:-70px;');
        // console.log("tablet landscape");
        }
        // mobile
        else {
        document.querySelector('.header').setAttribute('style', 'top:-200px;');
        document.querySelector('.content').setAttribute('style', 'position:relative;bottom:100px');
        document.querySelector('.culture-carousel').setAttribute('style', 'display:block;position:relative;top:-90px');
        document.querySelector('#clock-button').setAttribute('style', 'top:40px;transform:rotate(180deg);');
        document.querySelector('.video').setAttribute('style', 'display:block;height:auto;bottom:-10px;'); 
        // console.log("mobile"); 
        }
    }, 100)
}

function hideMedia(){
    // window.setTimeout(function(){
    document.querySelector('.video').src = "";
    document.querySelector('.video').style.display = 'none';
    document.querySelector('.header').style.top = "";
    document.querySelector('.content').setAttribute('style', 'position:"";bottom:"";')
    document.querySelector('.culture-carousel').setAttribute('style', 'position:"";bottom:"";')
    document.querySelector('#clock-button').style.top = "";
    // }, 100)
}

//  ---------------- Needs fixing, same issue as click with clock-button ---------------
// function directToContact(){
//     // console.log(snaps[position]);
//     clockButton.style.transform = "rotate(315deg)";
//     snaps[position] = 315;
//     onRotate();
// }

var snaps = [0, 45, 135, 180, 225, 315, 360];
if ((window.screen.width > 1024) && (detectTouchscreen() === false)){
    // let clockButton = document.querySelector('#clock-button')
    var draggable = Draggable.create([clockButton], {
            type: "rotation",
            allowEventDefault: true,
            throwProps: true,
            onDrag: onRotate,
            liveSnap: function(value) {
            position = getClosestIndex((value + 360 * 99999999) % 360, snaps); //adding 360 * 999999999 in order to ensure it's always a positive rotational value
            return snaps[position];
            },
            // onClick: function(){ 
            //     draggable[0].disable();
            //     if (snaps[position] === 0){
            //         snaps[position] = 45;
            //         draggable[0].enable();
            //         console.log("clicked 1");
                    
            //     } else if (snaps[position] === 45){
            //         snaps[position] = 135;
            //         draggable[0].enable();
            //         console.log("clicked 2");
                    
            //     } else if (snaps[position] === 135){
            //         snaps[position] = 180;
            //         draggable[0].enable();
            //         console.log("clicked 3");
                    
            //     } else if (snaps[position] === 180){
            //         snaps[position] = 225;
            //         draggable[0].enable();
            //         console.log("clicked 4");
                    
            //     } else if (snaps[position] === 225){
            //         snaps[position] = 315;
            //         draggable[0].enable();
            //         console.log("clicked 5");
                    
            //     } else if (snaps[position] === 315){
            //         snaps[position] = 360;
            //         draggable[0].enable();
            //         console.log("clicked 6");
                    
            //     } else {
            //         snaps[position] = 0;
            //         draggable[0].enable();
            //         console.log("clicked");
                    
            //     }
            //     console.log("snaps:" + snaps[position]);
            // }
                
        });
}





function getClosestIndex(value, choices) {
  var i = choices.length;
  var closest = 0;
  var absDif = 9999999999;
  var dif, val;
  while (--i > -1) {
    val = choices[i];
    dif = Math.abs(val - value);
    if (dif < absDif) {
      closest = i;
      absDif = dif;
    }
  }
  return closest;
}

function onRotate(){
    if (window.screen.width > 1024){
        window.setTimeout(function(){
       var h3 = document.querySelector('h3.content');
        var p = document.querySelector('p.content');
        var about = document.querySelector('.content.about');
        var work = document.querySelector('.content.work');
        var culture = document.querySelector('.content.culture');

        if (snaps[position] === 45){
            work.style.display = "none";
            work.style.visibility = "hidden";
            culture.style.display = "none";
            culture.style.visibility = "hidden";
            document.querySelector('div.contact').style.display = "none";
            document.querySelector('.work-carousel').style.display = "none";
            document.querySelector('.culture-carousel').style.display = "none";
            document.querySelector('.career-carousel').style.display = "none";
            h3.innerHTML = "About";
            h3.style.visibility = "visible";
            about.style.display = "block";
            about.style.visibility = "visible";
            about.style.width = "330px";
            about.style.margin = " 0 auto";
            document.querySelector('#nl').style.display = "inline-block";
            document.querySelector('#se').style.display = "inline-block";
            document.querySelector('#fi').style.display = "inline-block";
            
        } else if (snaps[position] === 135) {
            hideMedia()
            culture.style.display = "none";
            culture.style.visibility = "hidden";
            about.style.display = "none";
            about.style.visibility = "hidden";
            document.querySelector('#nl').style.display = "none";
            document.querySelector('#se').style.display = "none";
            document.querySelector('#fi').style.display = "none";
            document.querySelector('div.contact').style.display = "none";
            document.querySelector('.culture-carousel').style.display = "none";
            document.querySelector('.career-carousel').style.display = "none";
            document.querySelector('.work-carousel').style.display = "block";
            h3.innerHTML = "Work";
            work.style.display = "block";
            work.style.visibility = "visible";
            work.style.width = "100%";
            work.style.margin = " 0 auto";

            $('.work-carousel .main-carousel').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: true});

        } else if (snaps[position] === 180) {
            hideMedia()
            work.style.display = "none";
            work.style.visibility = "hidden";
            about.style.display = "none";
            about.style.visibility = "hidden";
            document.querySelector('#nl').style.display = "none";
            document.querySelector('#se').style.display = "none";
            document.querySelector('#fi').style.display = "none";
            document.querySelector('div.contact').style.display = "none";
            document.querySelector('.work-carousel').style.display = "none";
            document.querySelector('.career-carousel').style.display = "none";
            document.querySelector('.culture-carousel').style.display = "block";
            h3.innerHTML = "Culture";
            culture.style.display = "block";
            culture.style.visibility = "visible";
            culture.style.width = "100%";
            culture.style.margin = " 0 auto";

            $('.culture-carousel .main-carousel').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: true,
            mobileFirst: true,
            });
            // $('.slick__slider', context)[0].slick.refresh();

        } else if (snaps[position] === 225) {
            hideMedia()
            work.style.display = "none";
            work.style.visibility = "hidden";
            culture.style.display = "none";
            culture.style.visibility = "hidden";
            about.style.display = "none";
            about.style.visibility = "hidden";
            document.querySelector('#nl').style.display = "none";
            document.querySelector('#se').style.display = "none";
            document.querySelector('#fi').style.display = "none";
            document.querySelector('div.contact').style.display = "none";
            document.querySelector('.work-carousel').style.display = "none";
            document.querySelector('.culture-carousel').style.display = "none";
            document.querySelector('.career-carousel').style.display = "block";
            h3.innerHTML = "Careers";

            $('.main-vertical-carousel').slick({
                infinite: false,
                vertical: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                swipeToSlide: true,
                // arrows: true,
                verticalSwiping: true, 
                verticalScrolling: true,
                // centerMode: true 
                mobileFirst: true,
              });
            

        } else if (snaps[position] === 315) {
            h3.innerHTML = "Contact";
            h3.style.visibility = "visible";
            culture.style.display = "none";
            culture.style.visibility = "hidden";
            about.style.display = "none";
            about.style.visibility = "hidden";
            work.style.display = "none";
            work.style.visibility = "hidden";
            document.querySelector('.work-carousel').style.display = "none";
            document.querySelector('.culture-carousel').style.display = "none";
            document.querySelector('#nl').style.display = "none";
            document.querySelector('#se').style.display = "none";
            document.querySelector('#fi').style.display = "none";
            // p.style.display = "none";
            document.querySelector('.career-carousel').style.display = "none";
            document.querySelector('div.contact').style.visibility = "visible";
            document.querySelector('div.contact').style.display = "block";

            document.querySelector('#sai-address').style.visibility = "visible";
            document.querySelector('#sai-address').style.display = "block";

        } else {
            document.querySelector('#nl').style.display = "none";
            document.querySelector('#se').style.display = "none";
            document.querySelector('#fi').style.display = "none";
            about.style.display = "none";
            about.style.visibility = "hidden";
            h3.style.visibility = "hidden";
            p.style.display = "none";
            culture.style.display = "none";
            culture.style.visibility = "hidden";
            document.querySelector('div.contact').style.display = "none";
            document.querySelector('div.contact').style.visibility = "hidden";
            document.querySelector('#sai-address').style.visibility = "hidden"; 
            document.querySelector('#sai-address').style.display = "none";
            document.querySelector('.career-carousel').style.display = "none";
            work.style.display = "none";
            work.style.visibility = "hidden";

         }
        }, 150);
    }
}




document.addEventListener(
    "DOMContentLoaded", function(){
        if (window.screen.width > 1024) {
            document.querySelector(".sai-text--mobile").style.display = "none";
            document.querySelector('.header').addEventListener('click', counter);
        } else {
            document.querySelector('.header').addEventListener('click', counterMobile);
        }
        document.querySelector('#clock-button').addEventListener('click', rotateClockButton);

        document.querySelector('#video-button-1').addEventListener('click', function(){
          showMedia()  
          document.querySelector('.video').src = 'https://player.vimeo.com/video/222319927?autoplay=1&title=0&byline=0&portrait=0';
        });

        document.querySelector('#video-button-2').addEventListener('click', function(){
          showMedia()  
          document.querySelector('.video').src = "https://player.vimeo.com/video/223576301?autoplay=1&title=0&byline=0&portrait=0";
        });
        document.querySelector('#video-button-3').addEventListener('click', function(){
          showMedia()  
          document.querySelector('.video').src = "https://player.vimeo.com/video/212268868?autoplay=1&title=0&byline=0&portrait=0";
        });
        // --------------------- Media repeated below, waiting on extra video files to be updated -------------------------
        // document.querySelector('#video-button-4').addEventListener('click', function(){
        //   showMedia()  
        //   document.querySelector('.video').src = "https://player.vimeo.com/video/212268868?autoplay=1&title=0&byline=0&portrait=0";
        // });
        // document.querySelector('#video-button-5').addEventListener('click', function(){
        //   showMedia()  
        //   document.querySelector('.video').src = "https://player.vimeo.com/video/212268868?autoplay=1&title=0&byline=0&portrait=0";
        // });
        // document.querySelector('#video-button-6').addEventListener('click', function(){
        //   showMedia()  
        //   document.querySelector('.video').src = 'https://player.vimeo.com/video/222319927?autoplay=1&title=0&byline=0&portrait=0';
        // });
        

    });
        // also needs a dragOver eventListener
   



