export function typeEffect(element, speed, next) {
  
    const paraf = element.text;
    
  
    if (element.title) {
      
      var ele = element.title;
    } else if ((element = paraf)) {
      
      var ele = paraf;
    }
    //  var ele = element.title;
    //  var paraf = element.paraf;
  
    const text = ele.innerHTML;
   
    ele.innerHTML = "";
  
    
  
    var delay = text.length * speed + speed;
  
    
    let i = 0;
    const timer = setInterval(function () {
      if (i < text.length) {
        ele.append(text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 75);
  
    setTimeout(function () {
     
   element.paraf.style.display = "inline-block"; // CSS display:none;
      typeEffect({ text: element.paraf },75);
    }, delay);
  }