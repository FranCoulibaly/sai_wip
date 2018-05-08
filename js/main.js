
//content variables
var header = document.querySelector('.header');
var clockButton = document.querySelector('#clock-button');
var h3 = document.querySelector('h3.content');
var p = document.querySelector('p.content');
var about = document.querySelector('.content.about');
var work = document.querySelector('.content.work');
var workCarousel = document.querySelector('.work-carousel');
var culture = document.querySelector('.content.culture');
var cultureCarousel = document.querySelector('.culture-carousel');
var careerCarousel = document.querySelector('.career-carousel');
var contact = document.querySelector('div.contact');
var content = document.querySelector('.content');
var video = document.querySelector('.video');
var nl = document.querySelector('#nl');
var se = document.querySelector('#se');
var fi = document.querySelector('#fi');
var address = document.querySelector('#sai-address');

//gsap variables
var position = 0;
var snaps = [0, 45, 135, 180, 225, 315, 360];
var adjusting = false;

function counter() {
    var index = parseInt(header.getAttribute('data-lang'));
    if (header.classList.contains('hover')) {
    	header.classList.remove('hover');
        setTimeout(function() {
            if (index < 5) {
                header.setAttribute('data-lang', index + 1);
            } 
            else {
                header.setAttribute('data-lang', 0);
            }
        }, 600);
    } 
    else {
        header.classList.add('hover');
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
	$(window).resize();
}

// function showContent(){
//     var index = parseInt(clockButton.getAttribute('data-deg'));
//     if (index === 1) {
//         clockButton.style.transform = "rotate(45deg)";
//         window.setTimeout(refreshWindow, 50);
//         contact.style.display = "none";
//         workCarousel.style.display = "none";
//         cultureCarousel.style.display = "none";
//         careerCarousel.style.display = "none";
//         h3.innerHTML = "About";
//         h3.style.visibility = "visible";
//         about.style.display = "block";
//         about.style.visibility = "visible";
//         about.style.width = "330px";
//         about.style.margin = "0 auto";
//         document.querySelector('#nl').style.display = "inline-block";
//         document.querySelector('#se').style.display = "inline-block";
//         document.querySelector('#fi').style.display = "inline-block";
//     } else if (index === 2) {
//         clockButton.style.transform = "rotate(135deg)";
        
//         // window.setTimeout(refreshWindow, 50);
//         about.style.display = "none";
//         about.style.visibility = "hidden";
//         document.querySelector('#nl').style.display = "none";
//         document.querySelector('#se').style.display = "none";
//         document.querySelector('#fi').style.display = "none";
//         document.querySelector('div.contact').style.display = "none";
//         cultureCarousel.style.display = "none";
//         careerCarousel.style.display = "none";
//         workCarousel.style.display = "block";
//         $('.slick-slider').slick('refresh');
//         h3.innerHTML = "Work";
//         work.style.display = "block";
//         work.style.visibility = "visible";
//         work.style.width = "100%";
//         work.style.margin = " 0 auto";

//         $('.work-carousel .main-carousel').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         swipeToSlide: true});

//     } else if (index === 3) {
//         clockButton.style.transform = "rotate(180deg)"; 
//         // window.setTimeout(refreshWindow, 50);
//         work.style.display = "none";
//         work.style.visibility = "hidden";
//         document.querySelector('div.contact').style.display = "none";
//         document.querySelector('.work-carousel').style.display = "none";
//         document.querySelector('.career-carousel').style.display = "none";
//         document.querySelector('.culture-carousel').style.display = "block";
//         $('.slick-slider').slick('refresh');
//         h3.innerHTML = "Culture";
//         culture.style.display = "block";
//         culture.style.visibility = "visible";
//         culture.style.width = "100%";
//         culture.style.margin = " 0 auto";

//         $('.culture-carousel .main-carousel').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         swipeToSlide: true,
//         mobileFirst: true,
//         });


//     } else if (index === 4) {
//         clockButton.style.transform = "rotate(225deg)";
        
//         // window.setTimeout(refreshWindow, 50);
//         hideMedia()
//         culture.style.display = "none";
//         culture.style.visibility = "hidden";
//         document.querySelector('div.contact').style.display = "none";
//         document.querySelector('.work-carousel').style.display = "none";
//         document.querySelector('.culture-carousel').style.display = "none";
//         document.querySelector('.career-carousel').style.display = "block";
//         $('.slick-slider').slick('refresh');
//         h3.innerHTML = "Careers";

//         $('.main-vertical-carousel').slick({
//             infinite: false,
//             vertical: true,
//             slidesToShow: 5,
//             slidesToScroll: 1,
//             swipeToSlide: true,
//             // arrows: true,
//             verticalSwiping: true, 
//             verticalScrolling: true,
//             // centerMode: true 
//             mobileFirst: true,
//           });

//     } else if (index === 5) {
//         clockButton.style.transform = "rotate(315deg)";
//         window.setTimeout(refreshWindow, 50);
//         h3.innerHTML = "Contact";
//         h3.style.visibility = "visible";
//         // p.style.display = "none";
//         document.querySelector('.career-carousel').style.display = "none";
//         document.querySelector('div.contact').style.visibility = "visible";
//         document.querySelector('div.contact').style.display = "block";
        

//         document.querySelector('#sai-address').style.visibility = "visible";
//         document.querySelector('#sai-address').style.display = "block";
//     } else {
//         clockButton.style.transform = "rotate(360deg)";

//         h3.style.visibility = "hidden";
//         p.style.display = "none";
//         document.querySelector('div.contact').style.display = "none";
//         document.querySelector('div.contact').style.visibility = "hidden";
//         document.querySelector('#sai-address').style.visibility = "hidden"; 
//         document.querySelector('#sai-address').style.display = "none";
//     }
// }

function detectTouchscreen() {
	var result = false;
	if (window.PointerEvent && ('maxTouchPoints' in navigator)) {
    	if (navigator.maxTouchPoints > 0) {
      		result = true;
    	}
    } 
    else {
    	if (window.matchMedia && window.matchMedia('(any-pointer:coarse)').matches) {
      		result = true;
    	} 
    	else if (window.TouchEvent || ('ontouchstart' in window)) {
    		result = true;
    	}
	}
	return result;
}

function rotateClockButton(){
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var index = parseInt(clockButton.getAttribute('data-deg'));
    if ((w < 768) || (w >= 768 && w <= 1024) || (detectTouchscreen() === true)) {
        if (index < 5) {
            clockButton.setAttribute('data-deg', index + 1);    
        } 
        else {
            clockButton.setAttribute('data-deg', 0);
        }
        showContent();
    }
}

function showMedia(){
    window.setTimeout(function(){
        //desktop
        if (window.screen.height >= 759 && window.screen.width > 1024){
	        header.setAttribute('style', 'top:-240px;');
	        content.setAttribute('style', 'position:relative;bottom:255px');
	        cultureCarousel.setAttribute('style', 'display:block;position:relative;bottom:280px');
	        clockButton.setAttribute('style', 'top:-325px;transform:rotate(180deg);');
	        video.style.display = 'block';
        } 
        // tablet portrait
        else if (window.screen.width >= 768 && window.screen.height <= 1024 && window.screen.orientation.type === "portrait-primary") {
	        header.setAttribute('style', 'top:-275px;');
	        content.setAttribute('style', 'position:relative;bottom:160px');
	        cultureCarousel.setAttribute('style', 'display:block;position:relative;bottom:120px');
	        clockButton.setAttribute('style', 'top:25px;transform:rotate(180deg);');
	        video.setAttribute('style', 'display:block;top:-90px;');
        }
        //tablet landscape
        else if (window.screen.height >= 768 && window.screen.height <= 768 && window.screen.orientation.type === "landscape-primary") {
	        header.setAttribute('style', 'top:-240px;');
	        content.setAttribute('style', 'position:relative;bottom:230px');
	        cultureCarousel.setAttribute('style', 'display:block;position:relative;bottom:250px');
	        clockButton.setAttribute('style', 'top:-285px;transform:rotate(180deg);');
	        video.setAttribute('style', 'display:block;top:-70px;');
        }
        // mobile
        else {
	        header.setAttribute('style', 'top:-200px;');
	        content.setAttribute('style', 'position:relative;bottom:100px');
	        cultureCarousel.setAttribute('style', 'display:block;position:relative;top:-90px');
	        clockButton.setAttribute('style', 'top:40px;transform:rotate(180deg);');
	        video.setAttribute('style', 'display:block;height:auto;bottom:-10px;'); 
        }
    }, 100)
}

function hideMedia(){
    video.src = "";
    video.style.display = 'none';
    header.style.top = "";
    content.setAttribute('style', 'position:"";bottom:"";')
    cultureCarousel.setAttribute('style', 'position:"";bottom:"";')
    clockButton.style.top = "";
}

function onLiveSnap(value) {
	//adding 360 * 999999999 in order to ensure it's always a positive rotational value
    position = getClosestIndex((value + 360 * 99999999) % 360, snaps); 
    onRotate(snaps[position]);
    return snaps[position];
}


// if ((window.screen.width > 1024) && (detectTouchscreen() === false)){
    var draggable = Draggable.create([clockButton], {
            type: "rotation",
            dragResistance: .01,
            // onDrag: onRotate,
            liveSnap: onLiveSnap,
            onClick: function(e){ 
                adjusting = true;
                this.update();
                if (snaps[position] === 0 ){
                    snaps[position] = 45;  
                } else if (snaps[position] === 45){
                    snaps[position] = 135;
                    
                } else if (snaps[position] === 135){
                    snaps[position] = 180;
                    
                } else if (snaps[position] === 180){
                    snaps[position] = 225;
                    
                } else if (snaps[position] === 225){
                    snaps[position] = 315;
                    
                } else { 
                    snaps[position] = 0;  
                } 
                TweenLite.set(this.target, {
                    rotation: snaps[position]
                });
                this.endDrag();
                onRotate();

                adjusting = false;       
            },

        onRelease: function() {
            this.update();
            if(this.tween && (adjusting || this.timeSinceDrag() > 0.02)){
                this.tween.kill();
            }

        }
    });
// }

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
        if (snaps[position] === 45){
            work.style.display = "none";
            // work.style.visibility = "hidden";
            culture.style.display = "none";
            // culture.style.visibility = "hidden";
            contact.style.display = "none";
            workCarousel.style.display = "none";
            cultureCarousel.style.display = "none";
            careerCarousel.style.display = "none";
            h3.innerHTML = "About";
            // h3.style.visibility = "visible";
            about.style.display = "block";
            // about.style.visibility = "visible";
            about.style.width = "330px";
            about.style.margin = " 0 auto";
            nl.style.display = "inline-block";
            se.style.display = "inline-block";
            fi.style.display = "inline-block";
            
        } else if (snaps[position] === 135) {
            hideMedia()
            culture.style.display = "none";
            // culture.style.visibility = "hidden";
            about.style.display = "none";
            // about.style.visibility = "hidden";
            nl.style.display = "none";
            se.style.display = "none";
            fi.style.display = "none";
            contact.style.display = "none";
            cultureCarousel.style.display = "none";
            careerCarousel.style.display = "none";
            workCarousel.style.display = "block";
            // refresh needed for slick display to read height & width of DOM
            $('.slick-slider').slick('refresh');
            h3.innerHTML = "Work";
            work.style.display = "block";
            // work.style.visibility = "visible";
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
            // work.style.visibility = "hidden";
            about.style.display = "none";
            // about.style.visibility = "hidden";
            nl.style.display = "none";
            se.style.display = "none";
            fi.style.display = "none";
            contact.style.display = "none";
            workCarousel.style.display = "none";
            careerCarousel.style.display = "none";
            cultureCarousel.style.display = "block";
            $('.slick-slider').slick('refresh');
            h3.innerHTML = "Culture";
            culture.style.display = "block";
            // culture.style.visibility = "visible";
            culture.style.width = "100%";
            culture.style.margin = " 0 auto";

            $('.culture-carousel .main-carousel').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: true,
            mobileFirst: true,
            });

        } else if (snaps[position] === 225) {
            hideMedia()
            work.style.display = "none";
            // work.style.visibility = "hidden";
            culture.style.display = "none";
            // culture.style.visibility = "hidden";
            about.style.display = "none";
            // about.style.visibility = "hidden";
            nl.style.display = "none";
            se.style.display = "none";
            fi.style.display = "none";
            contact.style.display = "none";
            workCarousel.style.display = "none";
            cultureCarousel.style.display = "none";
            careerCarousel.style.display = "block";
            $('.slick-slider').slick('refresh');
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
            // h3.style.visibility = "visible";
            culture.style.display = "none";
            // culture.style.visibility = "hidden";
            about.style.display = "none";
            // about.style.visibility = "hidden";
            work.style.display = "none";
            // work.style.visibility = "hidden";
            workCarousel.style.display = "none";
            cultureCarousel.style.display = "none";
            nl.style.display = "none";
            se.style.display = "none";
            fi.style.display = "none";
            // p.style.display = "none";
            careerCarousel.style.display = "none";
            // document.querySelector('div.contact').style.visibility = "visible";
            contact.style.display = "block";

            document.querySelector('#sai-address').style.visibility = "visible";
            document.querySelector('#sai-address').style.display = "block";

        } else {
            document.querySelector('#nl').style.display = "none";
            document.querySelector('#se').style.display = "none";
            fi.style.display = "none";
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
            document.querySelector('.work-carousel').style.display = "none";
            document.querySelector('.culture-carousel').style.display = "none";
            work.style.display = "none";
            work.style.visibility = "hidden";

         }
        }, 100);
        // console.log("snaps:" + snaps[position]);
    }
}

document.addEventListener(
    "DOMContentLoaded", function(){
        if (window.screen.width > 1024) {
            document.querySelector(".sai-text--mobile").style.display = "none";
            document.querySelector('.header').addEventListener('click', counter);
            document.querySelector('.easter-egg-hunt').addEventListener('mouseover', function(){
            document.querySelector('.easter-egg').classList.add('visible');
            document.querySelector('.hide').style.visibility = 'visible';
            document.querySelector('.download').style.display = "block"; 
            });
            document.querySelector('.wrap').addEventListener('click', function(){
            document.querySelector('.easter-egg').classList.remove('visible');
            document.querySelector('.hide').style.visibility = 'hidden';
            document.querySelector('.download').style.display = "none"; 
        });

        } else {
            document.ontouchmove = function(e){ e.preventDefault(); }
            document.body.addEventListener("touchmove", function(event) {
                event.preventDefault();
            }, {passive: false});
            document.querySelector('#clock-button').addEventListener('click', rotateClockButton);
            document.querySelector('.easter-egg-hunt').addEventListener('click', function(){
                document.querySelector('.easter-egg').classList.add('visible');
                document.querySelector('.download').style.display = "block";
                document.querySelector('.hide').style.visibility = 'visible';
            });
            
            document.querySelector('.easter-egg').addEventListener('click', function(){
                document.querySelector('.easter-egg').classList.remove('visible');
                document.querySelector('.download').style.display = "none"; 
                document.querySelector('.hide').style.visibility = 'hidden';
            });

            document.querySelector('.header').addEventListener('click', counterMobile);
        }
        


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

   



