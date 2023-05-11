let increase = document.querySelector('.increase')
let reset = document.querySelector('.reset')
let decrease = document.querySelector('.decrease')
let random = document.querySelector('.random')
let counter = document.querySelector('#counter')
let count = 0

reset.onclick = () => {
    count=0
    counter.innerHTML = count
}

increase.onclick = () => {
    count+=1
    counter.innerHTML = count
}
decrease.onclick = () => {
    count-=1
    if (count < 0) {
        count=0
    }
    counter.innerHTML = count
}
random.onclick = () => {
    count = Math.ceil(Math.random() * 100);
    counter.innerHTML = count
}
    