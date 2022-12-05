const messages = [
    "Wir haben unseren ersten Backpackurlaub in Costa gemeinsam gemeister",
    "Wir haben uns gegenseitig bei unseren Studium unterstützt und ausgehalten",
    "Wir sind miteinander gewachsen und haben uns weiterentwickelt",
    "Wir haben eine Fernbeziehung gemeistert sowohl was Körpergröße angeht als auch Distanz",
    "Du bist mit mir durch dick und dünn gegangen, aber öfters dick =D",
    "Wir haben die Ikea-Prüfung gemeinsam gemeistert",
    "Wir meistern extreme Situationen nicht gut aber besser gemeinsam (bungee)",
    "Wir meistern die Baustelle bis jetzt ziemlich gut",
    "Wir meistern das Familienleben in den jeweiligen Familien mit ihren Herausforderungen gut",
    "Ich wünsche mir das wir in unserere Ehe immer Gesund bleiben",
    "Ich hoffe wir werden uns immer Zeit füreianander nehmen",
    "Wir weiterhin so viel gemeinsam Lachen",
    "Wir weiterhin die Eigenheiten des anderen verstehen und handeln können",
    "Wir uns gegenseitig auffangen wenn es einem schlecht geht",
    "Wir noch viele neue Erfahrungen miteinander haben werden",
    "Wir auch ein gemeinsames Hobby finden, wenn wir wieder mehr Zeit haben",
    "Sex darf natürlich auch nicht fehlen",
    "?????????????????",
    "?????????????????",
    "Unternehmen1",
    "Unternehmen2",
    "Unternehmen3",
    "Unternehmen4",
    "UnternehmenFIX",
];
const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container");
const calendarMessage = document.querySelector(".message");
const calendarButtonReload= document.querySelector(".btn-reload");
const calendarDays = 24;
const check = 0;
console.log(messages[1]);

const openDoor = (path, event) => {
    let today = new Date().getDate();
    let calendarDate = event.target.parentNode.getAttribute("data-datecheck");
    //console.log("Heute ist " + today.getDate());
    console.log(event.target.parentNode.getAttribute("data-datecheck"));
    console.log(today);
    if(today >= calendarDate){
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#521751";

    calendarMessage.innerHTML = messages[calendarDate];
    calendarMessage.style.textAlign = "center";
    calendarMessage.style.fontWeight = "bolder";
    calendarMessage.style.padding = "20px";
    calendarMessage.style.color = "white";
    calendarMessage.style.border ="5px dotted white"
    calendarMessage.style.width ="fit content"
    calendarMessage.style.backgroundImage= `url(./img/textbg.jpg)`
    calendarMessage.style.backgroundSize = "cover"

    }
    else{
        event.target.parentNode.style.backgroundImage = `url(./img/12.jpg)`;
        event.target.innerHTML = "TO SOON";
        event.target.style.color = "red";
        event.target.style.textAlign = "center";
        event.target.style.opacity = "0";
        event.target.style.backgroundColor = "#521751"
        
    }
}

const createCalendar = () => {
    for(let i = 0; i  < calendarDays; i++) {
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");

        calendarDoor.classList.add("image");
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);

        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.setAttribute("data-datecheck",i+1);
        calendarDoor.appendChild(calendarDoorText);

        imgNumber = i + 1;
        let coursePath = `./img/${imgNumber}.jpg`;
        calendarDoorText.addEventListener("click", openDoor.bind(null,  coursePath));
    }
}
const reloadCalendar = () =>{ window.location.reload();}

calendarButton.addEventListener("click", createCalendar);
calendarButtonReload.addEventListener("click", reloadCalendar);

