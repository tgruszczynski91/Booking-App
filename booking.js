const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.selected)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');


let ticketPrice = +movieSelect.value;
//UPDATE TOTAL AND COUNT
function updateCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    count.textContent = selectedSeatsCount;
    total.textContent = selectedSeatsCount * ticketPrice;
}

//Movie select event
movieSelect.addEventListener('change', function(e){
    ticketPrice = +e.target.value
    updateCount();
})


// Seat click event
container.addEventListener('click', function(e) {
    if(e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')) 
    
    {e.target.classList.toggle('selected');
    updateCount();
    }   
});

