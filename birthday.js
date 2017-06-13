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
const daysTillBirthday = getDaysTillBirthday;
const birtdayParagraph = document.getElementsByClassName('.birthday');

// need to calculate month/day/years to one number (minusing todays date?)
/*
getDaysTillBirthday(()=>{
    return 45;
})
*/
//makes the birthday calculated paragraph with flavor text!
birthdayParaConcat(()=>{
    birtdayParagraph += "<p>Hello there!<br>---<br>It’s your birthday (kind of) soon. How soon you ask?<br>Well actually, " + "daysTillBirthday" + " day"+ daysPlural + " away! I really shouldn’t<br>probably know that, but I’m a computer.<br> (plus you told me, so it’s cool.)</p><p>~</p><p>Yours truely,<br> Computer #4367A47<p>";
})
// adds an 's' to day
daysPlural((daysTillBirthday)=>{
    if (daysTillBirthday > 1){
        return "s";
    }else {
        return "";
    }
})
