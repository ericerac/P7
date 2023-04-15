
import moment from 'moment';

const dayWeek= (value) => {
    let d = new Date(value);
    const dd = d.getDay();
    let jour = "";
    switch (dd) {
        case 0:
            jour = "Dg :";
            break
        case 1:
            jour = "Dl :";
            break
        case 2:
            jour = "Dt :";
            break
        case 3:
            jour = "Dc :";
            break
        case 4:
            jour = "Dj :";
            break
        case 5:
            jour = "Dv :";
            break
        case 6:
            jour = "Ds :";
            break

    }
    // console.log("JOUR ", jour, dd, value);
    return jour
}
const dateDay = (value) => {
    return value.getDay()
}
const dateMonth = (value) => {

    return moment(value).format('MMM', 'ca')
    return moment(value).format("MM");
    console.log("MONTH DATEMONTH", month);
    return month;
}
const date = (value) =>{
    return moment(value).format("DD/MM/YYYY");
}

export default {dayWeek, dateDay, dateMonth, date}