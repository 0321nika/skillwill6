//დავალება1

const modal = document.querySelector(".modalBtn")
const modalOvr = document.querySelector(".modal")

modal.addEventListener("click" , () => {
        modalOvr.style.display = "block"
})


//დავალება 2

const body = document.getElementsByTagName("body")[0];
const colorBtn = document.querySelector(".changeColor")

colorBtn.addEventListener("click", () =>{
    const color = document.querySelector("#colorInput").value.toLowerCase();
    if (color === "red") {
        document.body.style.backgroundColor = "red";
    } else if (color === "blue") {
        document.body.style.backgroundColor = "blue";
    } else if (color === "green") {
        document.body.style.backgroundColor = "green";
    } else if (color === "black") {
        document.body.style.backgroundColor = "black";
    } else if (color === "white") {
        document.body.style.backgroundColor = "white";
    } else {
        alert("არასწორი ფერია გთხოვთ შეიყვანოთ: red,blue,green,black ან white");
    }
    document.getElementById("colorInput").value = "";
})



//დავალება3

const calculate = document.querySelector(".calculateAverage")
calculate.addEventListener("click", () => {
    const numbersInput = document.getElementById("numbers");
        const averageResult = document.getElementById("averageResult");

        const inputNumbers = numbersInput.value.split(':').map(Number);

        const sum = inputNumbers.reduce((total, num) => total + num, 0);

        console.log(sum)

        const average = sum / inputNumbers.length;

        averageResult.textContent = average;
})

