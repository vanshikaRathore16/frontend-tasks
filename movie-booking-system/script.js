const muvieSelect = document.getElementById("muvieSelect");
const theaterSelect = document.getElementById("theaterSelect");
const applyBtn = document.getElementById("applyBtn");
const output = document.getElementById("output");
const seatContainer = document.getElementById("seatContainer");
const summery = document.querySelector(".summery");
const count = document.getElementById("count");
const total = document.getElementById("total");
const bookbtn = document.getElementById("btn");


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
    for(let i = 0;i < 30;i++){
        let seat = document.createElement("button");
        seat.classList.add("seat");
        seat.innerText = i;
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
        let totalPrice = countvalue*ticketPrice;
        console.log("total price",totalPrice);
         count.textContent = countvalue;
         total.textContent = totalPrice;
         bookbtn.disabled = countvalue === 0;
}

