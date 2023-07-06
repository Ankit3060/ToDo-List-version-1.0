module.exports.getDate = getDate();

// This is date function so we can get the date 
function getDate()
{
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today = new Date();
    let day=today.toLocaleDateString("en-US",options);
    return day;
}

module.exports.getDay = getDay();

function getDay()
{
    let options = { weekday: 'long'};
    let today = new Date();
    let day=today.toLocaleDateString("hi-IN",options);
    return day;
}