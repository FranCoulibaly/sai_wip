
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
var easterEggHunt = document.querySelector('.easter-egg-hunt');
var easterEgg = document.querySelector('.easter-egg');
var hideBg = document.querySelector('.hide-background');
var video = document.querySelector('.video');
var download = document.querySelector('.download');
var wrap = document.querySelector('.wrap');
var position = 0;
var snaps = [0, 45, 135, 180, 225, 315, 360];
var adjusting = false;
var recVideo = document.querySelector('#rec-video');

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


function showMedia(){
        //desktop
	        header.classList.add('media-display-header');
            document.querySelector('.culture').classList.add('media-display-text');
	        document.querySelector('.navigation').classList.add('media-display-nav');
	        video.style.display = 'block';
}

function hideMedia(){
    video.src = "";
    video.style.display = 'none';
    header.classList.remove('media-display-header');
    document.querySelector('.culture').classList.remove('media-display-text');
    document.querySelector('.navigation').classList.remove('media-display-nav');
    // clockButton.style.top = "";
}

function onLiveSnap(value) {
	//adding 360 * 999999999 in order to ensure it's always a positive rotational value
    position = getClosestIndex((value + 360 * 99999999) % 360, snaps); 
    onRotate(snaps[position]);
    return snaps[position];
}



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
                // console.log(snaps[position]);
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
    window.setTimeout(function(){
        // specifying each element as hidden because when navigation is dragged quickly cases can be skipped (need to find a neater solution)
        switch(snaps[position]){
            case 45:
                work.classList.add("hidden");
                culture.classList.add("hidden");
                career.classList.add("hidden");
                contact.classList.add("hidden");

                about.classList.remove("hidden");
                break;
            case 135:
                hideMedia();
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
                hideMedia();
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
}

function controlVideo(){
    if (easterEgg.classList.contains("visible")){
        
        recVideo.play();
        console.log("play");
    }
    else {
        recVideo.pause();
        // recVideo.load();
    }
}

document.addEventListener(
    "DOMContentLoaded", function(){
        if (window.screen.width > 1024) {
            document.querySelector(".sai-text--mobile").style.display = "none";
            header.addEventListener('click', counter);

            easterEggHunt.addEventListener('mouseover', function(){
                var text = document.querySelectorAll('.content');
                var length = text.length;
                for (var index = 0; index < length; index++) {
                    text[index].style.transition = "opacity 0.02s linear 0s";
                    text[index].style.opacity = 0;
                    easterEgg.classList.add('visible');
                    document.querySelector('.easter-egg-wrapper').classList.add('visible');
                    }
                controlVideo();
            });
            wrap.addEventListener('click', function(){
            var text = document.querySelectorAll('.content');
                var length = text.length;
                for (var index = 0; index < length; index++) {
                    text[index].style.transition = "opacity 0.02s linear 0s";
                    text[index].style.opacity = 1;
                    document.querySelector('.easter-egg-wrapper').classList.remove('visible');
                    easterEgg.classList.remove('visible');
                }

            // hideBg.style.visibility = 'hidden';
            // download.style.display = "none"; 
            controlVideo();
        });

        } else {
            
            easterEggHunt.addEventListener('click', function(){
                var text = document.querySelectorAll('.content');
                var length = text.length;
                for (var index = 0; index < length; index++) {
                    text[index].style.transition = "opacity 0.02s linear 0s";
                    text[index].style.opacity = 0;
                }
                easterEgg.classList.add('visible');
                document.querySelector('.easter-egg-wrapper').classList.add('visible');
                hideMedia();
                controlVideo();
                console.log("clicked");
            });
            
            document.querySelector('.easter-egg-wrapper').addEventListener('click', function(){
                var text = document.querySelectorAll('.content');
                var length = text.length;
                for (var index = 0; index < length; index++) {
                    text[index].style.transition = "opacity 0.02s linear 0s";
                    text[index].style.opacity = 1;
                }
                document.querySelector('.easter-egg-wrapper').classList.remove('visible');
                easterEgg.classList.remove('visible');
                controlVideo();
            });
            document.body.addEventListener("touchmove", function(event) {
                event.preventDefault();
            }, {passive: false});

            header.addEventListener('click', counterMobile);
        }
        
        document.querySelector('#video-button-1').addEventListener('click', function(){
          showMedia()  
          video.src = 'https://player.vimeo.com/video/222319927?autoplay=1&title=0&byline=0&portrait=0';
        });

        document.querySelector('#video-button-2').addEventListener('click', function(){
          showMedia()  
          video.src = "https://player.vimeo.com/video/223576301?autoplay=1&title=0&byline=0&portrait=0";
        });
        document.querySelector('#video-button-3').addEventListener('click', function(){
          showMedia()  
          video.src = "https://player.vimeo.com/video/212268868?autoplay=1&title=0&byline=0&portrait=0";
        });

        recVideo.addEventListener('ended', function(){
            var text = document.querySelectorAll('.content');
            var length = text.length;
            for (var index = 0; index < length; index++) {
                text[index].style.transition = "opacity 0.02s linear 0s";
                text[index].style.opacity = 1;
            }
            document.querySelector('.easter-egg-wrapper').classList.remove('visible');
            easterEgg.classList.remove('visible');  
            console.log("ended");
            });
       

    });

   



