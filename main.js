const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container");

const calendarDays = 24;

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
    }
    else{
        event.target.style.backgroundColor = "#F3f321";
        event.target.innerHTML = "TO SOON";
        event.target.style.textAlign = "center"
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
        let coursePath = `./courses/Fenster${imgNumber}.jpg`;

        calendarDoorText.addEventListener("click", openDoor.bind(null,  coursePath));
    }
}

calendarButton.addEventListener("click", createCalendar);

