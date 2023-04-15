
// -------- DISPLAY DELAY  ----------//

const ratio = .3;

const options = {
    root: null,
  rootMargin: '0px',
  threshold: ratio,
}

const scroller = ((x)=>{
console.log("ARGUMENT SCROLLER"),x;

const app_scroll = (entries,observer) => {
entries.forEach ( (entry ) => {
    console.log("APP_SCROLL");
    if(entry.intersectionRatio >= ratio){
        entry.target.classList.add("app-card-on")
        if(entry.target.el ){
          console.log(" IF TARGET DIV SCREEN-IN",entry.target.el)
        }
         console.log(" SCREEN-IN",entry.target)
    }else{
        // console.log(" SCREEN-OFF")
    }
});
}

var observer = new IntersectionObserver(app_scroll, options);

const target = x;

target.forEach((el)=>{
    observer.observe(el);
        console.log("element",el);
})

})

// ------------------------------------------------------ //
  // -----------------     -------------------- //
// ------------------------------------------------------ //

export default scroller