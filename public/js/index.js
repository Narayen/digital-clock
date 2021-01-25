function clock()
{
    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minute');
    var seconds = document.getElementById('second');
    var am_pm = document.getElementById('am_pm');

    var hh = new Date().getHours();
    var mm = new Date().getMinutes();
    var ss = new Date().getSeconds();

    var AP = 'AM';

    if (hh > 12)
    {
        hh = hh - 12;
        var AP = 'PM';
    }

    hh = (hh < 10) ? '0' + hh : hh;
    mm = (mm < 10) ? '0' + mm : mm;
    ss = (ss < 10) ? '0' + ss : ss;

    hours.innerHTML = hh;
    minutes.innerHTML = mm;
    seconds.innerHTML = ss;
    am_pm.innerHTML = AP;
}

var interval = setInterval(clock, 1000);