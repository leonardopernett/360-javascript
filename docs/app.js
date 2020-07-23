const slider = document.querySelector('#slider');
const canvas = document.querySelector('#canvas');


slider.addEventListener('input',()=>{
    loadImage(slider.value)
})

let images = []
for (let i = 1; i <= 36; i++) {
     const number = i.toString().padStart(2,'00')
     const url = `https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Yecheil/Images/adidas-Yeezy-Boost-350-V2-Yecheil/Lv2/img${number}.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1574449122`
     //creamos la images
     const image = new Image();
     image.src=url

     image.addEventListener('load',()=>{
         images[i]= image
         loadImage(1)
     })
}

function loadImage(index){
   const ctx =  canvas.getContext('2d');
   ctx.drawImage(images[index], 0,0, canvas.width, canvas.height)
}