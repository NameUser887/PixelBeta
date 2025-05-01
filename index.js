let IS_CLICKED = false
let CURRENT_COLOR = 'rgb(167, 43, 43)'
let DEFAULT_COLOR = 'rgb(167, 43, 43)'
let FILL_MODE = false

document.addEventListener('mousedown', function(){
    IS_CLICKED = true
})

document.addEventListener('mouseup', function(){
    IS_CLICKED = false
})

let field = document.querySelector('.field')

for (let i = 0; i < 450; i += 1) {
    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.setAttribute('id', `${i}`)
    field.appendChild(cell)
}

let cells = document.querySelectorAll('.cell')

cells.forEach(cell => {
    cell.addEventListener('mouseover', function(){
        if (IS_CLICKED){cell.style.backgroundColor = CURRENT_COLOR}
    })

    cell.addEventListener('click', function(){
        if (FILL_MODE) {
            cells.forEach(cell => {
                cell.style.backgroundColor = CURRENT_COLOR
            })
        } else {
            cell.style.backgroundColor = CURRENT_COLOR
        }

        }
    )
})

let color_bittersweet = document.querySelector('.bittersweet')
color_bittersweet.addEventListener('click', function(){
    CURRENT_COLOR = '#FF715B'
    document.documentElement.style.cssText = `--current-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    color_bittersweet.classList.add('selected')
})

let color_pumpkin = document.querySelector('.pumpkin')
color_pumpkin.addEventListener('click', function(){
    CURRENT_COLOR = '#EA7317'
    document.documentElement.style.cssText = `--current-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    color_pumpkin.classList.add('selected')
})

let color_cadetgray = document.querySelector('.cadetgray')
color_cadetgray.addEventListener('click', function(){
    CURRENT_COLOR = '#7B9EA8'
    document.documentElement.style.cssText = `--current-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    color_cadetgray.classList.add('selected')
})

let color_paynegray = document.querySelector('.paynegray')
color_paynegray.addEventListener('click', function(){
    CURRENT_COLOR = '#55636F'
    document.documentElement.style.cssText = `--current-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    color_paynegray.classList.add('selected')
})

let color_raisinblack = document.querySelector('.raisinblack')
color_raisinblack.addEventListener('click', function(){
    CURRENT_COLOR = '#2E2836'
    document.documentElement.style.cssText = `--current-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    color_raisinblack.classList.add('selected')
})

document.querySelector('.eraser').addEventListener('click', function(){
    CURRENT_COLOR = DEFAULT_COLOR
    document.documentElement.style.cssText = `--current-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    document.querySelector('.eraser').classList.add('selected')
})

document.querySelector('.fill').addEventListener('click', function(){
    FILL_MODE = !FILL_MODE
    if (FILL_MODE) {
        document.querySelector('.fill').style.border = "2px solid white"
    } else {
        document.querySelector('.fill').style.border = "none"
    }
})

function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
}

let header = document.querySelector('header')
let main = document.querySelector('main')
let start_btn = document.querySelector('#buttonone')
start_btn.addEventListener('click', function(e){
    // e.preventDefault()
    main.style.display = 'flex'
    scrollDown()
    setTimeout(function(){header.style.display = 'none'}, 500)
})

let safe_btn = document.querySelector('.safe')
safe_btn.addEventListener('click', function(){
    field.style.gap = '0'
    domtoimage.toJpeg(field)
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'pixel-image.jpeg';
        link.href = dataUrl;
        link.click();
    field.style.gap = '.5px'
    });
})
