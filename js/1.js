// Дата
$(document).ready(function() {
    $.dobPicker({
        daySelector: '#dobday', /* Required */
        monthSelector: '#dobmonth', /* Required */
        yearSelector: '#dobyear', /* Required */
        dayDefault: 'Day', /* Optional */
        monthDefault: 'Month', /* Optional */
        yearDefault: 'Year', /* Optional */
        minimumAge: 0, /* Optional */
        maximumAge: 2 /* Optional */
    });
});


// Форма
function checkForm(form) {
    event.preventDefault();

    // Имя

    let test_first_name = /["a-zA-Z]/;

    let first_name = document.getElementById('exampleInputName1');
    console.log(first_name.value);

    if (first_name.value === '' || first_name.value === ' ') {
        first_name.style.borderBottom = '2px solid red';
        }

    else if (test_first_name.test(first_name.value) === false) {
        console.log('вы ввели имя неправильно');
        first_name.style.borderBottom = '2px solid red';
        }

    else {
        first_name.style.borderBottom = '2px solid green';
        first_name = true;}

    // Фамилия
    let last_name = document.getElementById('exampleInputName2');
    console.log(last_name.value);
    if (last_name.value === '' || last_name.value === ' ') {
        last_name.style.borderBottom = '2px solid red'
        }
        else {
        last_name.style.borderBottom = '2px solid green'
        last_name = true;}


    // Национальность
    let national = document.getElementById('exampleFormControlSelect1');
    console.log(national.value);
    if (national.value === '') {
        national.style.borderBottom = '2px solid red'
        }
        else {
        national.style.borderBottom = '2px solid green'
        national = true;
    }

    //Email
    let email_test = /[0-9a-z_-]+@[0-9a-z-]+\.[a-z]{2,5}/i;
    let email = document.getElementById('exampleFormControlInput1');
    // console.log(email.value);
    if (email.value === '' || email.value === ' ') {
        email.style.borderBottom = '2px solid red'
        }
    else if (email_test.test(email.value) === false) {
        console.log('вы ввели емейл неправильно');
        email.style.borderBottom = '2px solid red'
        }
    else {
        email.style.borderBottom = '2px solid green'
        email = true;
    }

    // Дата
    // День
    let day = document.getElementById('dobday');
    console.log(day.value);
    if (day.value === '' || day.value === ' ') {
        day.style.borderBottom = '2px solid red'
        }
    else {
        day.style.borderBottom = '2px solid green'
        day = true;
    }

    // Месяц
    let month = document.getElementById('dobmonth');
    console.log(month.value);
    if (month.value === '' || month.value === ' ') {
        month.style.borderBottom = '2px solid red';
        }
    else {
        month.style.borderBottom = '2px solid green'
        month = true;
    }

    // Год
    let year = document.getElementById('dobyear');
    console.log(year.value);
    if (year.value === '' || year.value === ' ') {
        year.style.borderBottom = '2px solid red';}
    else {
        year.style.borderBottom = '2px solid green'
        year = true;
    }


    // Гендер
    let div_gender = document.getElementById('gender');
    let gender = document.getElementsByName('genderRadios');
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            div_gender.style.borderBottom = '2px solid green';
            gender = true;
        } else {
            // alert('Вы не выбрали гендер')
            div_gender.style.borderBottom = '2px solid red';
            }
    }

    // Пароль
    // let password_test = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$/;

    let password = document.getElementById('inputPassword');
    if (password.value==='' || password.value===' '){
        password.style.borderBottom = '2px solid red';
        password=false;
    }

    else if (password.value.length < 8) {
        password.style.borderBottom = '2px solid red'}



    else{
        password.style.borderBottom = '2px solid green';
        password === true;
    }

    // Проверка пароля

    let confirm_test = /^\S+$/;
    let confirm= document.getElementById('confirmPassword');

    if (password.value != confirm.value) {
        confirm.style.borderBottom = '2px solid red';
    }
    else if (confirm.value.length < 8) {
        confirm.style.borderBottom = '2px solid red'}

    else if (confirm_test.test(confirm.value) === false) {
        console.log('проверка пароля с пробелом');
        confirm.style.borderBottom = '2px solid red';
    }

    else {
        confirm.style.borderBottom = '2px solid green';
        confirm = true;
    }

     if ( first_name === true
         && last_name===true
         && national === true
         && gender === true
         && email === true
         && day === true
         && month === true
         && year === true
         && confirm === true
         ) {

         let user = { first_name, last_name, national, gender, email, day, month, year, confirm};

         let ok = JSON.stringify(user);
         // console.log(ok);

         fetch("http://modal/server_ok.json",{
             method:'POST',
             body : JSON.stringify(user)
         }).then(data=>console.log(data));

         window.location='html/confirm.html'
         }

         else {
         $(".shake").effect("shake");
     }
    }


