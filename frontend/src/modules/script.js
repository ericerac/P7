
'use strict'
export function delire(a){
const ratio = .3;

const options = {
    root: null,
  rootMargin: '0px',
  threshold: ratio,
}



const app_scroll = (entries,observer) => {
entries.forEach ( (entry ) => {
    console.log("APP_SCROLL");
    if(entry.intersectionRatio >= ratio){
        entry.target.classList.add("app-card-on")
         console.log(" SCREEN-IN",entry)
    }else{
        // console.log(" SCREEN-OFF")
    }
    

});
}

var observer = new IntersectionObserver(app_scroll, options);

const target = document.querySelectorAll('.meeting-item');
target.forEach((el)=>{
    observer.observe(el);
        console.log("element",el);
})


const optionsMois = {
    root: null,
  rootMargin: '0px',
  threshold: ratio,
}
var observerMois = new IntersectionObserver(app_scroll, optionsMois);

const targetMois= document.querySelectorAll('.month_date');
target.forEach((el)=>{
    observer.observe(el);
        console.log("elementMois",el);
})

// ------------------------------------------------------ //
 
    console.log("MODULE JS",a);
}
 