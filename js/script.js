let sliderLine = document.getElementsByClassName('service__slider_line')[0];
let whatWeDoLine = document.getElementsByClassName('whatWeDo__slider_line')[0];
let map = document.getElementsByClassName('map');
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
    closed[0].classList.add("map");
    closed[0].classList.remove("closed");
    console.log(sections);
    for (section in sections) {
        console.log(section);
        section.style.filter = "blur(10px)";
    };
};
mapClose = () => {
    map[0].classList.add("closed");
    map[0].classList.remove("map");
}