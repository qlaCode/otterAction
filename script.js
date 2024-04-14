// NAVBAR INDEX

document.addEventListener("DOMContentLoaded", () => {

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    const mobilebar = document.querySelector('.mobilebar');
    if(mobilebar.style.display === 'none' || mobilebar.style.display === ''){
        mobilebar.style.display = 'flex';
    } else (mobilebar.style.display = 'none')
    });
});

// TICKET MANAGEMENT

const ticketArrays = [];

function addTicket(){
    const inputTitle = document.getElementById('inputTitle').value;
    const inputEmail = document.getElementById('inputEmail').value;
    const inputDescription = document.getElementById('inputDescription').value;
    console.log("add ticket");

const ticketInfo = {
    Email : inputEmail,
    Title : inputTitle,
    Description : inputDescription
}

ticketArrays.push(ticketInfo);

ticketInfo.id = ticketArrays.length
let ticketNumber =  ticketInfo.id
console.log('ticketNumber '+ticketNumber);
const listOfTickets = document.getElementById('listOfTickets');
console.log('listOfTickets '+listOfTickets)
console.log('listOfTickets Length '+listOfTickets.children.length)
if (listOfTickets.children.length < ticketNumber) {
    let newListItem = document.createElement('li');
    newListItem.textContent = 'temp content';
    listOfTickets.appendChild(newListItem);
}

let ticketPosition = document.querySelector(`#listOfTickets li:nth-child(${ticketNumber})`);
ticketPosition.textContent = `Request from ${inputEmail} - ${inputTitle} : ${inputDescription}`;
const newDeleteButton = document.createElement("button");
newDeleteButton.textContent = "x";
newDeleteButton.onclick = () => deleteTask(newDeleteButton);
newDeleteButton.style.borderRadius = "40px";
newDeleteButton.style.borderStyle = "none";
newDeleteButton.style.color = "white";
newDeleteButton.style.backgroundColor = "red";
newDeleteButton.style.marginLeft = "5px";

ticketPosition.appendChild(newDeleteButton);
console.log(ticketPosition);
console.log(ticketArrays)

}


function deleteTask(button, ticketNumber) {
    console.log("Delete Me");
    console.log("this is "+this)
    const ticketLine = button.parentNode
    ticketLine.remove()
    console.log("ticketLine "+ticketLine);
    console.log(ticketArrays);
    ticketArrays.splice(ticketNumber - 1, 1); // Subtract 1 to account for 0-based indexing
    console.log(ticketArrays);
    
}

/* 
actions - details, edit, supprimer un ticket
voir si c'est dans une modal ou une autre page
stocker les tickets dans une bdd au lieu de dans une liste
    se connecter a la bdd
    get query 
        SELECT Title, Description, CreationDate FROM Ticket
    insert item query
        INSERT INTO Ticket (Title, Description, CreationDate)
        VALUES ('Sample Ticket', 'This is a sample ticket description.', NOW());
    delete item query

 */
