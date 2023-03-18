import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();


let dataCookies = () => {
    let theme = "";
    let dataTheme = {
        theme:"",
        bgColor:"",
        textColor:"",
        dark:"",
    }
    if ($cookies.get("userTime")) {
        dataTheme.theme = $cookies.get("userTime");
        console.log("THEME COOKIES:JS",dataTheme.theme)

        if(dataTheme.theme === '"day"'){
            dataTheme.bgColor =  "#f1f1f1";
            dataTheme.textColor = " rgb(62, 1, 1)";
            dataTheme.dark = false
            // dataTheme.bgColor = " rgb(62, 1, 1)" ;
            // dataTheme.textColor ="#f1f1f1" ;
        }else if(dataTheme.theme === '"dark"'){
            dataTheme.bgColor = "black";
            dataTheme.textColor = "#f1f1f1";
            dataTheme.dark = true
        }
    }
    // if ($cookies.get("userTime")) {
    //     theme = $cookies.get("userTime");
    //    console.log("THEME COOKIES:JS",theme);
    //   }
// return theme

return dataTheme
}

export default dataCookies

// if (!this.theme) {
//     console.log("IF  THEME UNDEFINED", this.theme);
//     this.$store.dispatch("getLoc").then((res) => {
//         if (res) {
//             this.theme = dataCookies();
//             console.log("THEME RESPONSE", this.theme);
//             if (this.theme === '"dark"') {
//                 console.log("IF THEME DARK", this.theme);
//                 this.bgColor = "black";
//                 this.texteColor = "white";
//             }
//             else if (this.theme === '"day"') {
//                 console.log("IF THEME DAY", this.theme);
//                 this.bgColor = "white";
//                 this.texteColor = "black";
//             }
//         }
//     })
// } else if (this.theme === '"dark"') {
//     console.log("IF THEME DARK", this.theme);
//     this.bgColor = "black";
//     this.texteColor = "white";
// }
//  else if (this.theme === '"day"') {
//     console.log("IF THEME DAy", this.theme);
//     this.bgColor = "white";
//     this.texteColor = "black";
// }