

const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open');
    console.log(this)
}

function toggleActive(e){

    if (e.propertyName === 'flex-grow'){
        console.log(this)
        this.classList.toggle('open-active');
    }
}


panels.forEach(panel => panel.addEventListener('click',toggleOpen));

panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));