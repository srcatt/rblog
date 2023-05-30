import React, {useEffect, useRef} from "react";

interface Props extends React.CanvasHTMLAttributes<HTMLCanvasElement>{
    radius?:number
}
const PI2 = Math.PI * 2;
interface RGB {
    r:number,g:number,b:number
}
const colors:RGB[] = [
    {r:82,g:92,b:142},
    {r:74,g:83,b:129},
]

class Particle{
    x:number
    y:number
    radius:number
    color:RGB
    vx:number
    vy:number
    constructor(x,y,radius,color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.vx = Math.random() * 4
        this.vy = Math.random() * 4
        this.color = color
    }
    animate(ctx:CanvasRenderingContext2D,cx:number,cy:number){
        this.x += this.vx
        this.y += this.vy
        if(this.x<0){
            this.vx *= -1
            this.x += 10;
        }else if(this.x > cx){
            this.vx *= -1
            this.x -= 10;
        }
        if(this.y<0){
            this.vy *= -1
            this.y += 10;
        }else if(this.y > cy){
            this.vy *= -1
            this.y -= 10;
        }
        ctx.beginPath();
        const g = ctx.createRadialGradient(
            this.x,
            this.y,
            this.radius * 0.001,
            this.x,
            this.y,
            this.radius
        )
        g.addColorStop(0,`rgba(${this.color.r},${this.color.g},${this.color.b},1)`)
        g.addColorStop(1,`rgba(${this.color.r},${this.color.g},${this.color.b},0)`)
        // ctx.fillStyle = `rgb(${this.color.r},${this.color.g},${this.color.b})`
        ctx.fillStyle = g
        ctx.arc(this.x,this.y,this.radius,0,PI2,false);
        ctx.fill()
    }
}

class GradientControl{
    canvas:HTMLCanvasElement
    ctx:CanvasRenderingContext2D
    radius:number = 460
    particles:Particle[] = []
    totalParticles:number = 16
    constructor(canvas:HTMLCanvasElement) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d')
        this.createParticles()
        window.requestAnimationFrame(this.animate.bind(this))
    }
    createParticles(){
        this.particles = []
        for (let i = 0;i < this.totalParticles;i++){
            this.particles.push(new Particle(
                Math.random() * this.canvas.width,
                Math.random() * this.canvas.height,
                this.radius,
                colors[Math.floor(Math.random() * colors.length)]
            ))
        }
    }
    animate(){
        window.requestAnimationFrame(this.animate.bind(this))
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        for(let i = 0;i < this.totalParticles;i++){
            this.particles[i].animate(this.ctx,this.canvas.width,this.canvas.height)
        }
    }
}
export default function Gradient(props:Props){
    const canvas = useRef(null);
    useEffect(()=>{
        new GradientControl(canvas.current! as HTMLCanvasElement)
    },[])
    return (
        <canvas {...props} ref={canvas}/>
    )
}