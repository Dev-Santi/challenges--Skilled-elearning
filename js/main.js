//on click buttons animation

let buttonsCollection = document.getElementsByClassName('getStartedBtn');
let buttons = [];

for(i = 0; i < buttonsCollection.length; i++) {
    buttons.push(buttonsCollection[i]);
}

buttons.map((e) => {
    e.onclick = () => {
        e.classList.toggle('anim');
        setTimeout(() => {
            e.classList.remove('anim');
            e.classList.toggle('animOut')
            setTimeout(() => {
                e.classList.remove('animOut')
            }, 1500);
        }, 1000);
    }
});