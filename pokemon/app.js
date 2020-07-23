const canvas = document.querySelector('#canvas')
const slider = document.querySelector('#slider')

slider.addEventListener('input',()=>{
    loadImage(slider.value)
})

let images = []
for (let i = 1; i < 39; i++) {
   
    const number = i.toString().padStart(2 , '00')
    const url = `./images/${number}.jpg`;
    const img = new Image()

    img.src= url;
    img.addEventListener('load',()=>{
        images[i]=img
        loadImage(1)
    })
}

function loadImage(index){
    const ctx = canvas.getContext('2d');
    ctx.drawImage(images[index], 0,0, canvas.width, canvas.height);
}