const canvas= document.querySelector('canvas');
const c= canvas.getContext('2d'); 
canvas.width=window.innerWidth; 
canvas.height= window.innerHeight
 const gravity=1
class Player{
    constructor()
    {
        this.position= {
            x:0 ,
            y:0
        }
        this.width=30
        this.height=30
        this.velocity={
            x:0, 
            y:0
        }
    }
    draw(){
        c.fillStyle="red"
        c.fillRect(this.position.x, this.position.y, this.width, this.height )
    }
    update(){
        this.draw()
        this.position.x+= this.velocity.x; 
        this.position.y+= this.velocity.y; 
        console.log(this.position.y)

        if(this.position.y + this.height + this.velocity.y < canvas.height)
        {
            this.velocity.y+=gravity
        }        
         else this.velocity.y=0
    }
}

const player= new Player(); 

const keys={
    right:{pressed:false}, 
    left:{pressed:false}
}%

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width, canvas.height)
    player.update();

    if(keys.right.pressed)player.velocity.x=5 
    else if(keys.left.pressed)  player.velocity.x=-5 
    else player.velocity.x=0
}
 
animate();

addEventListener('keydown', ({keyCode})=>{
    console.log(keyCode);
    switch (keyCode) {
        case 38:
            player.velocity.y-=20
            break;
        case 40 :
            break;
        case 39:
            keys.right.pressed=true
            break;
        case 37:
            keys.left.pressed=true
            break;

        default:
            break;
    }
})

addEventListener('keyup', ({keyCode})=>{
    switch (keyCode) {
        case 38:
            break;
        case 40 :
            break;
        case 39:
            keys.right.pressed=false
            
            break;
        case 37:
            keys.left.pressed=false

            break;

        default:
            break;
    }
})

 