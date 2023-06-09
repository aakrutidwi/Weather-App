
const endDate = "25 July 2022 08:20:00 PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
    // const clock = () => {

// }

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    console.log(end);
    console.log(now);

}
clock();