
var header = document.querySelector('.header');
var clockButton = document.querySelector('#clock-button');
var about = document.querySelector('div.about');
var work = document.querySelector('div.work');
var culture = document.querySelector('.content.culture');
var cultureCarousel = document.querySelector('.culture-carousel');
var careerCarousel = document.querySelector('.career-carousel');
var career = document.querySelector('div.career');
var contact = document.querySelector('div.contact');
var content = document.querySelector('.content');
var video = document.querySelector('.video');

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
    var draggable = Draggable.create(clockButton, {
            type: "rotation",
            dragResistance: .01,
            dragClickables: true,
            liveSnap: onLiveSnap,
            allowContextMenu:true,
            onClick: 
                function(e){ 
                adjusting = true;
                this.update();
                if (snaps[position] < 360){
                    snaps[position] = snaps[position ++];
                } else {
                    position = [1];
                }
                console.log(snaps[position]);
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
            // specifying each element as hidden as when dragged quickly cases can be skipped (need to find a neater solution)
            switch(snaps[position]){
                case 45:
                    work.classList.add("hidden");
                    culture.classList.add("hidden");
                    career.classList.add("hidden");
                    contact.classList.add("hidden");

                    about.classList.remove("hidden");
                    break;
                case 135:
                    about.classList.add("hidden");
                    culture.classList.add("hidden");
                    career.classList.add("hidden");
                    contact.classList.add("hidden");


                    work.classList.remove("hidden");
                    // refresh needed for slick display to read height & width of DOM
                    $('.slick-slider').slick('refresh');
                    $('.work-carousel .main-carousel').slick({
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        swipeToSlide: true});
                    break;
                case 180:
                    about.classList.add("hidden");
                    work.classList.add("hidden");
                    career.classList.add("hidden");
                    contact.classList.add("hidden");



                    culture.classList.remove("hidden");

                    $('.slick-slider').slick('refresh');
                    $('.culture-carousel .main-carousel').slick({
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        swipeToSlide: true,
                        mobileFirst: true,
                        });
                    break;
                case 225:
                    about.classList.add("hidden");
                    work.classList.add("hidden");
                    culture.classList.add("hidden");
                    contact.classList.add("hidden");

                    career.classList.remove("hidden");
                    
                    $('.slick-slider').slick('refresh');
                    $('.main-vertical-carousel').slick({
                        infinite: false,
                        vertical: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        swipeToSlide: true,
                        verticalSwiping: true, 
                        verticalScrolling: true, 
                        mobileFirst: true,
                      });
                    break;
                case 315:
                    career.classList.add("hidden");
                    about.classList.add("hidden");
                    work.classList.add("hidden");
                    culture.classList.add("hidden");

                    contact.classList.remove("hidden");
                    break;
                default:
                    contact.classList.add("hidden");
                    about.classList.add("hidden");
                    work.classList.add("hidden");
                    culture.classList.add("hidden");
                    career.classList.add("hidden");
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

    });

   



