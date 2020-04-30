//Typing “this” and “noImplicitThis”

const elem = document.querySelector('.click');

function handleClick(this: HTMLAnchorElement, event: Event){
    event.preventDefault();
    console.log(this)
}

elem.addEventListener('click', handleClick, false)