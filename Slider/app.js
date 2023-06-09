const slides= document.querySelectorAll(".slide");


var counter= 0;
slides.forEach( (slide,index)=> {
    slide.style.left= `${index *100}% `;
});


const goPrev =() =>{
    if(counter==0){
        counter=slides.length-1;
        SlideImg()
    }
    else{
        counter--
        SlideImg()
    }
  
}

const goNext =() =>{
    if(counter==slides.length-1){
SlideImg()
    }
    else{
        counter++
        SlideImg()
    }

}


const SlideImg= () =>{
    slides.forEach (
        (slide)=>{
slide.style.transform =`translateX(${counter*100}%)`;
        }
    )

    }


