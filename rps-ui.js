const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener('click', () => {
    alert('Rock was clicked!');
});

paper.addEventListener('click', () => {
    alert('Paper was clicked!');
});

scissors.addEventListener('click', () => {
    alert('Scissors was clicked!');
});

