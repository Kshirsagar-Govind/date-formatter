
function DateFormate_1() {

    const my_date = new Date();
    const yyyy = my_date.getFullYear();
    let mm = my_date.getMonth() + 1;
    let dd = my_date.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const form = dd + '/' + mm + '/' + yyyy;

    return form;

}

function DateFormate_2() {

    const my_date = new Date();
    const yyyy = my_date.getFullYear();
    let mm = my_date.getMonth() + 1;
    let dd = my_date.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const form = mm + '/' + dd + '/' + yyyy;

    return form;

}

function DateFormate_3() {
    const my_date = new Date();
    const yyyy = my_date.getFullYear();
    let mm = my_date.getMonth() + 1;
    let dd = my_date.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const form = yyyy + '/' + mm + '/' + dd;

    return form;
}

function Days_From_Curr_Date(date_2) {

    const my_date = new Date();
    const yyyy = my_date.getFullYear();
    let mm = my_date.getMonth() + 1;
    let dd = my_date.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const form = dd + '/' + mm + '/' + yyyy;

    const date1 = my_date;
    const date2 = new Date(date_2);

    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;

}

function Diff_Between_Two_Date(date_1, date_2) {

    const date1 = new Date(date_1);
    const date2 = new Date(date_2);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;

}

module.exports = {
    DateFormate_1,
    DateFormate_2,
    DateFormate_3,
    Days_From_Curr_Date,
    Diff_Between_Two_Date
}

