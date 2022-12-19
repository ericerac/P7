


function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}


// textarea {
//     resize: none;
//     overflow: hidden;
//     min-height: 50px;
//     max-height: 100px;
// }
// <textarea oninput="auto_grow(this)"></textarea>