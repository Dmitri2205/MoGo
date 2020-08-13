let sliderLine = document.getElementsByClassName('service__slider_line')[0];
let whatWeDoLine = document.getElementsByClassName('whatWeDo__slider_line')[0];
let mapSection = document.getElementsByClassName('stories__map');
let map = document.getElementsByClassName('stories__map_frame');
let closed = document.getElementsByClassName('closed');
let sections = document.querySelectorAll("section");
let current = 0;



function slideLeft(value) {
    let style = getComputedStyle(sliderLine);
    if (value === 'first') {
    	switch (style.left) {
    		case "0px" :
 				current = -900;   		
    			sliderLine.style.left = current + 'px';
    			break;
    		case  "-900px":
 				current += -900;   		
    			sliderLine.style.left = current + 'px';
    			break;
    		case  "-1800px":
 				current += -900;   		
    			sliderLine.style.left = current + 'px';
    			break;
    		case "-2700px":
    			current = 0;
    			sliderLine.style.left = current + 'px';
    			break;
    	}
    }else if (value === 'second') {
    let style = getComputedStyle(whatWeDoLine);
    	switch (style.left) {
    		case "0px" :   		
 				current = -900;   		
    			whatWeDoLine.style.left = current + 'px';
    			break;
    		case "-900px":
 				current += -900;   		
    			whatWeDoLine.style.left = current + 'px';
    			break;
    		case  "-1800px":
 				current += -900;   		
    			whatWeDoLine.style.left = current + 'px';
    			break;
    		case  "-2700px":
 				current = 0;   		
    			whatWeDoLine.style.left = current + 'px';
    			break;
    	}
    	
    }
};


function slideRight(value) {
    if (value === 'first') {
  	let style = getComputedStyle(sliderLine);
    	switch (style.left) {
    		case "0px" :
 				current = -2700;   		
    			sliderLine.style.left = current + 'px';
    			break;
    		case  "-2700px":
 				current += 900;   		
    			sliderLine.style.left = current + 'px';
    			break;
    		case  "-1800px":
 				current += 900;   		
    			sliderLine.style.left = current + 'px';
    			break;
    		case "-900px":
    			sliderLine.style.left ='0px';
    			break;
    	}
    }else if (value === 'second') {
  	let style = getComputedStyle(whatWeDoLine);
    	switch (style.left) {
    		case "0px" :
 				current = -2700;   		
    			whatWeDoLine.style.left = current + 'px';
    			break;
    		case  "-2700px":
 				current += 900;   		
    			whatWeDoLine.style.left = current + 'px';
    			break;
    		case  "-1800px":
 				current += 900;   		
    			whatWeDoLine.style.left = current + 'px';
    			break;
    		case "-900px":
    			whatWeDoLine.style.left ='0px';
    			break;
    	}
    };
};



const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)
        console.log(anchor.getAttribute('href').substr(1));

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}



mapOpen = () => {
    console.log(closed[0]);
    mapSection[0].style.animation = 'heightAnimation .4s ease-in';
    closed[0].style.animation = 'mapActions 1s ease';
    closed[0].classList.add("stories__map_frame");
    closed[0].classList.remove("closed");
    console.log(mapSection[0]);
};
mapClose = () => {
    console.log('closed map')
    map[0].style.animation = 'mapClose .4s ease';
    mapSection[0].style.animation = 'heightBackAnimation .5s ease-in';
    setTimeout(()=>{
        map[0].classList.add("closed");
    },300);
    setTimeout(()=>{
        map[0].classList.remove("stories__map_frame");
    },700);
}