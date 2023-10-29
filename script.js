const calendar = setInterval(function time() {
    let dateToday = new Date();

    const weekName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let week = weekName[dateToday.getDay()];
    document.getElementById('week').innerHTML = week;

    const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = monthName[dateToday.getMonth()];
    document.getElementById('month').innerHTML = month;

    let day = dateToday.getDate();
    if (day == 1) day = day + 'st';
    if (day == 2) day = day + 'nd';
    if (day == 3) day = day + 'rd';
    if (day > 3) day = day + 'th';
    document.getElementById('day').innerHTML = day;

    let year = dateToday.getFullYear();
    document.getElementById('year').innerHTML = year;
})

const clock = setInterval(function time() {
    let dateToday = new Date();

    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    minutes.textContent = min;
    seconds.textContent = s;
})

const twentyFourHour = setInterval(function time() {
    let dateToday = new Date();

    const hours = document.getElementById('hours-24');

    let hr = dateToday.getHours();

    if (hr < 10) hr = '0' + hr;

    hours.textContent = hr;
})

const twelveHour = setInterval(function time() {
    let dateToday = new Date();

    const hours = document.getElementById('hours-12');
    const session = document.getElementById('session')

    let hr = dateToday.getHours();

    if (hr < 10) hr = '0' + hr;

    if (hr >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }

    if (hr > 12) {
        hr = hr - 12;
    }

    hours.textContent = hr;
})

function clockTwelve() {
    
    var span = document.getElementById('hours-24');
    span.style.display = 'none';
    var span = document.getElementById('hours-12');
    span.style.display = 'inline-block';

    var button = document.getElementById('twelve-hour')
    button.style.display = 'none';
    var button = document.getElementById('twenty-four-hour')
    button.style.display = 'inline-block';
}

function clockTwentyFour() {
    var span = document.getElementById('hours-12');
    span.style.display = 'none';
    var span = document.getElementById('hours-24');
    span.style.display = 'inline-block';

    var button = document.getElementById('twenty-four-hour')
    button.style.display = 'none';
    var button = document.getElementById('twelve-hour')
    button.style.display = 'inline-block';
}