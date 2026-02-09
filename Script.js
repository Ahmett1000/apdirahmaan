const form = document.getElementById("bookingForm");
const result = document.getElementById("result");

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

if(form){
form.addEventListener("submit", function(e){
e.preventDefault();

const name = document.getElementById("name").value.trim();
const phone = document.getElementById("phone").value.trim();
const roomType = document.getElementById("roomType").value;
const days = document.getElementById("days").value;

if(!/^[A-Za-z]{3,15}$/.test(name)){
result.textContent="Name must be 3-15 letters only";
result.className="text-red-500";
return;
}

if(!/^(61|62|68)\d{7}$/.test(phone)){
result.textContent="Phone must be 9 digits and start with 61/62/68";
result.className="text-red-500";
return;
}

if(roomType==="" || days===""){
result.textContent="Please fill all fields";
result.className="text-red-500";
return;
}

let price = roomType==="vip"?250:50;
let total = price * days;

let booking = {name, phone, roomType, days, total};
bookings.push(booking);
localStorage.setItem("bookings", JSON.stringify(bookings));

result.textContent = `Welcome ${name}! Your room is ready. Total: $${total}`;
result.className="text-green-600";

form.reset();
});
}