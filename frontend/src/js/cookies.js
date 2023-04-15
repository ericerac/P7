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

        if(dataTheme.theme === '"day"'){

            dataTheme.dark = false

        }else if(dataTheme.theme === '"dark"'){

            dataTheme.dark = true
        }
    }
return dataTheme
}

export default dataCookies

