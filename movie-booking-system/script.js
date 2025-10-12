const muvieSelect = document.getElementById("muvieSelect");
const theaterSelect = document.getElementById("theaterSelect");
const applyBtn = document.getElementById("applyBtn");
const output = document.getElementById("output");
const seatContainer = document.getElementById("seatContainer");
const summery = document.querySelector(".summery");
const count = document.getElementById("count");
const total = document.getElementById("total");
const bookbtn = document.getElementById("btn");
const model = document.getElementById("model");
const confirmBtn = document.getElementById("confirmbtn")
const cancelBtn = document.getElementById("cancelbtn")
const modelSeat = document.getElementById("modelSeat");
const modelPrice = document.getElementById("modelPrice");


let totalPrice = 0;
let ticketPrice = 0;
let selectedSeat = [];

window.addEventListener("load",()=>{
    const savedMuvie = localStorage.getItem("selectedMuvie");
    const savedTheater = localStorage.getItem("selectedTheater");
    if(savedMuvie) muvieSelect.value = savedMuvie;
    if(savedTheater) theaterSelect.value = savedTheater; 
    if(savedMuvie && savedTheater){
        ticketPrice = parseInt(savedMuvie);
        console.log( "ticket price window",ticketPrice);
        showOutput();
        seatLayout();
    }
})

applyBtn.addEventListener("click",()=>{
          const movieValue = muvieSelect.value;
          const theaterValue = theaterSelect.value;
          console.log(movieValue,theaterValue);

          if(!movieValue || !theaterSelect){
            alert("please select both muvie and theater")
            return
          }
          localStorage.setItem("selectedMuvie",movieValue);
          localStorage.setItem("selectedTheater",theaterValue);
          console.log("data save in local storage")
          ticketPrice = parseInt(movieValue);
          console.log( "ticket price click",ticketPrice);
          showOutput();
          seatLayout();
})

function showOutput(){
    const muvieValue = muvieSelect.value;
    const theaterValue = theaterSelect.value;
    if(!muvieValue || !theaterValue){
        return
    }
    const muvieName = muvieSelect.options[muvieSelect.selectedIndex].text;
    const threaterName = theaterSelect.options[theaterSelect.selectedIndex].text;
    console.log(muvieName,threaterName);
    output.innerHTML = `
    movie : <b>${muvieName}</b>
    theater : <b>${threaterName}</b>
    `
   output.classList.remove("hidden")
}

function seatLayout(){
    seatContainer.innerHTML = "";
    summery.classList.remove("hidden");
    let muvie = muvieSelect.value;
    let theater = theaterSelect.value;
    const bookedSeat = JSON.parse(localStorage.getItem(getBookedSeatKey(muvie,theater))) || [];
    for(let i = 0;i < 30;i++){
        let seat = document.createElement("button");
        seat.classList.add("seat");
        seat.innerText = i;
        if(bookedSeat.includes(i)){
            seat.classList.add("occupied");
            seat.disabled = true;
        }
        seat.addEventListener("click",()=> selecteSeat(seat) )
        seatContainer.appendChild(seat);
    }
    updateSummery();
}

function selecteSeat(seat){
       seat.classList.toggle("selected");
       let nodelist = document.querySelectorAll(".seat.selected");
        selectedSeat = [...nodelist];
        updateSummery()
}

function updateSummery(){
        let countvalue = selectedSeat.length;
         totalPrice = countvalue*ticketPrice;
        console.log("total price",totalPrice);
         count.textContent = countvalue;
         total.textContent = totalPrice;
         bookbtn.disabled = countvalue === 0;
}

bookbtn.addEventListener("click",()=>{
       modelSeat.textContent = selectedSeat.length;
       modelPrice.textContent = totalPrice;
       model.classList.remove("hidden");   
})

cancelBtn.addEventListener("click",()=>{
    model.classList.add("hidden")
})

confirmBtn.addEventListener("click",()=>{
    const movie = muvieSelect.value;
    const theater = theaterSelect.value;
    const bookedSeatedKey = getBookedSeatKey(movie,theater);
    const bookSeat = JSON.parse(localStorage.getItem(bookedSeatedKey)) || [];
    console.log(bookedSeatedKey);
    selectedSeat.forEach(seat=>{
        const seatNumber = [...seatContainer.children].indexOf(seat) + 1;
        bookSeat.push(seatNumber);
        seat.classList.remove("selected");
        seat.classList.add("occupied");
        seat.disabled = true;
    })
    localStorage.setItem(bookedSeatedKey,JSON.stringify(bookSeat));
    alert("ticket booked successfully......");
    updateSummery();
    selectedSeat = [];
    model.classList.add("hidden");
})

function getBookedSeatKey(movie,theater){
    return `bookedSeat_${movie}_${theater}`
}