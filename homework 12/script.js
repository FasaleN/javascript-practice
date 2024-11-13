// Homework 1
const tablePythagor = document.createElement("table");
    for( let i = 1; i <= 10; i++ ) {
        const row = document.createElement("tr");
        for( let j = 1; j <= 10; j++ ) {
            const col = document.createElement("td");
            col.textContent = (i * j).toString();
            row.appendChild(col);
        }
        tablePythagor.appendChild(row);
    }
document.body.appendChild(tablePythagor);
console.log(tablePythagor);

//Homework 2

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    const span = document.querySelector("span");
    span.classList.toggle("new_color");
});

// Homework 3

const img = document.createElement("img");
    const randomImg = Math.floor(Math.random()*9) +1;
    const imgFolder = `./img/${randomImg}.png`
    img.src = imgFolder;
    img.alt = `${randomImg}`;
document.body.appendChild(img);