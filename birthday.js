/*
<p>Hello there!</p>
<p>---</p>
<p>It’s your birthday (kind of) soon. How soon you ask?<br>
Well actually, 365 day(s) away! I really shouldn’t<br>
probably know that, but I’m a computer.<br> 
(plus you told me, so it’s cool.)</p>
<p>~</p>
<p>Yours truely,<br> 
Computer #4367A47<p>
*/

//const birthday = ;
const daysTillBirthday = 11;
const birthdayParagraph = document.getElementById('birthday');

// need to calculate month/day/years to one number (minusing todays date?)
/*
getDaysTillBirthday(()=>{
    return 45;
})
*/

// adds an 's' to day
daysPlural = ((days)=>{
    if (daysTillBirthday > 1){
        return "s";
    }else {
        return "";
    }
});

//makes the birthday calculated paragraph with flavor text!
    birthdayParagraph.innerHTML = "<p>Hello there!<br>---<br>It's your birthday (kind of) soon. How soon you ask?<br>Well actually, " + daysTillBirthday + " day"+ daysPlural(11) + " away! I really shouldn\’t<br>probably know that, but I’m a computer.<br> (plus you told me, so it’s cool.)</p><p>~</p><p>Yours truely,<br> Computer #4367A47<p>";



