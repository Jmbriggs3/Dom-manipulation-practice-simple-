const buttons = document.querySelectorAll('button'); //buttons is a nodelist acts like an array
buttons.forEach((button) => { //for each method to iterate through 3 buttons
    button.addEventListener('click', (e) => {  //for each button added click listener
        alert(button.id);
    });
});