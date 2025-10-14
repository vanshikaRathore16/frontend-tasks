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
const removeBtn = document.getElementById("removeBtn");
let totalPrice = 0;
let ticketPrice = 0;
let selectedSeat = [];
const maxTicket = 4;
const minTicket = 1;

function setSeatname(i){
    let rows = ["A","B","C","D",'E'];
    let cols = 6;
    let r = rows[Math.floor(i/cols)];
    let c = (i % cols) + 1;
    return r+c;
}

removeBtn.addEventListener("click", () => {
    muvieSelect.selectedIndex = 0;
    theaterSelect.selectedIndex = 0;
    output.innerHTML = "";
    seatContainer.innerHTML = "";
    summery.classList.add("hidden");
    output.classList.add("hidden");
    count.textContent = 0;
    total.textContent = 0;
    selectedSeat = [];
    totalPrice = 0;
    localStorage.removeItem("selectedMuvie");
    localStorage.removeItem("selectedTheater");
});

window.addEventListener("load", () => {
    // const savedMuvie = localStorage.getItem("selectedMuvie");
    // const savedTheater = localStorage.getItem("selectedTheater");
    // if(savedMuvie) muvieSelect.value = savedMuvie;
    // if(savedTheater) theaterSelect.value = savedTheater; 
    // if(savedMuvie && savedTheater){
    //     ticketPrice = parseInt(savedMuvie);
    //     console.log( "ticket price window",ticketPrice);
    // showOutput();
    //seatLayout();
    // }
})

function getBookedSeatKey(movie, theater) {
    return `bookedSeat_${movie}_${theater}`
}

applyBtn.addEventListener("click", () => {
    const movieValue = muvieSelect.value;
    const theaterValue = theaterSelect.value;
    console.log(movieValue, theaterValue);

    if (!movieValue || !theaterValue) {
        alert("please select both movie and theater")
        return
    }
    localStorage.setItem("selectedMuvie", movieValue);
    localStorage.setItem("selectedTheater", theaterValue);
    console.log("data save in local storage")
    ticketPrice = parseInt(movieValue);
    console.log("ticket price click", ticketPrice);
    showOutput();
    seatLayout();
})

function showOutput() {
    const muvieValue = muvieSelect.value;
    const theaterValue = theaterSelect.value;
    if (!muvieValue || !theaterValue) {
        return
    }
    const muvieName = muvieSelect.options[muvieSelect.selectedIndex].text;
    const threaterName = theaterSelect.options[theaterSelect.selectedIndex].text;
    console.log(muvieName, threaterName);
    output.innerHTML = `
    movie : <b>${muvieName}</b>
    theater : <b>${threaterName}</b>
    `
    output.classList.remove("hidden")
}

// function seatLayout(){
//     seatContainer.innerHTML = "";
//     let muvie = muvieSelect.value;
//     let theater = theaterSelect.value;
//     summery.classList.remove("hidden");
//     let BS = JSON.parse(localStorage.getItem(getBookedSeatKey(muvie, theater))) || []
//     console.log("key for bookSeat", getBookedSeatKey(muvie, theater));
//     console.log("book seat",BS);
//     let seatIndex = Array.from(({ length: 24 }), (_, i) => i + 1);
//     console.log(seatIndex);
//     console.log("seat index length", seatIndex.length);
//     for (let i in seatIndex){
//         console.log("type of i inside for loop = ", typeof (i));
//         // console.log("for in",i);
//         let seatnum = seatIndex[i];
//         let seat = document.createElement("button");
//         seat.classList.add("seat");
//         seat.innerText = setSeatname(seatnum);
//         console.log("seat innertext", seat.innerText);
//         console.log("outside if", seatnum);
//         if (BS.includes(Number(i))) {
//             console.log("inside if statement", i);
//             seat.classList.add("occupied");
//             seat.disabled = true;
//         }
//         seat.addEventListener("click", () => { selecteSeat(seat) });
//         seatContainer.appendChild(seat);
//     }
    
//     updateSummery();
// }

function seatLayout(){
seatContainer.innerHTML = "";
  let muvie = muvieSelect.value;
  let theater = theaterSelect.value;
  summery.classList.remove("hidden");
  let BS = JSON.parse(localStorage.getItem(getBookedSeatKey(muvie, theater))) || [];
  let seatIndex = Array.from({ length: 24 }, (_, i) => i + 1);
  const rows = ["A", "B", "C", "D"];
  let cols = 6;
  for(let i in seatIndex){
     let num = parseInt(i);
     let rowLetter = rows[Math.floor(num/cols)];
     let colNumber = (num % cols) + 1;
     let seatName = `${rowLetter}${colNumber}`

     let seat = document.createElement("button");
     seat.classList.add("seat");
     seat.textContent = seatName;
     if(BS.includes(seatName)){
        seat.classList.add("occupied");
        seat.disabled = true;
     }
     seat.addEventListener("click",()=>{
        selecteSeat(seat);
     })
     seatContainer.appendChild(seat);
  }
    updateSummery()
}

function selecteSeat(seat) {
    seat.classList.toggle("selected");
    let nodelist = document.querySelectorAll(".seat.selected");
    selectedSeat = [...nodelist];
    if(selectedSeat.length > maxTicket){
        seat.classList.remove("selected");
        alert(`Max ticket limit is ${maxTicket}`)
        selectedSeat.pop();
    }
    updateSummery();
}

function updateSummery() {
    let countvalue = selectedSeat.length;
    totalPrice = countvalue * ticketPrice;
    console.log("total price", totalPrice);
    count.textContent = countvalue;
    total.textContent = totalPrice;
    bookbtn.disabled = countvalue === 0;
}

bookbtn.addEventListener("click", () => {
    modelSeat.textContent = selectedSeat.length;
    modelPrice.textContent = totalPrice;
    model.classList.remove("hidden");
})

cancelBtn.addEventListener("click", () => {
    model.classList.add("hidden")
})

confirmBtn.addEventListener("click", () => { 
    if(selectedSeat.length < minTicket){
        alert(`Please select at least ${minTicket} ticket`)
        return
    } 
    const movie = muvieSelect.value;
    const theater = theaterSelect.value;
    const bookedSeatedKey = getBookedSeatKey(movie, theater);
    const bookSeat = JSON.parse(localStorage.getItem(bookedSeatedKey)) || [];
    console.log(bookedSeatedKey);
    selectedSeat.forEach(seat => {
        const seatNumber = seat.textContent;
        bookSeat.push(seatNumber);
        seat.classList.remove("selected");
        seat.classList.add("occupied");
        seat.disabled = true;
    })
    localStorage.setItem(bookedSeatedKey, JSON.stringify(bookSeat));
    alert("ticket booked successfully......");
    updateSummery();
    selectedSeat = [];
    model.classList.add("hidden");
})


