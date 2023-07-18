function porukica () {
  let email=document.getElementById("email").value;
alert("Vaša poruka je posalana putem servisa.\n E-mail " + email +" je uzet kao važeći");

}

function resetform() {
  document.getElementById("myForm").reset();

}


function timer ()  {
const sec=1000;
min=sec*60;
sat=min*60;
dan=sat*24;


let rox ="September 05, 2023 00:00:00",
countdown=new 
Date(rox).getTime(),
x=setInterval(function () {

  let now=new Date().getTime(), 
  distance= countdown-now ;

 
    document.getElementById("days").innerText=
    Math.floor((distance)/(dan)),
    document.getElementById("hours").innerText=
    Math.floor((distance%(dan))/(sat)),
    document.getElementById("minutes").innerText=
    Math.floor((distance%(sat))/(min)),
    document.getElementById("seconds").innerText=
    Math.floor((distance%(min))/sec)

    if (distance<0){
      let headline = document.getElementById("headline")
      headline.innerText="Moj rox"
      clearInterval(x);
      const newDate = addYears(rox, 1);
    }

  },0)
}

