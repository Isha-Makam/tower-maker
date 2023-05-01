class Box {
    constructor(x,y,w,h,color){
        this.w = w
        this.h = h
        this.color = color

        var options={
            isStatic :true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);

        World.add(world,this.body)
    }

    display(){
        var  pos = this.body.position 

        push();
        if(frameCount % 20 == 0){
            var r = random(150,850)
            Matter.Body.setPosition(this.body,{x:r,y:200})
        }
        
        
        rectMode(CENTER)
        fill(this.color);
        noStroke();
        rect(pos.x,pos.y,this.w,this.h);
        pop();
        
    }
}