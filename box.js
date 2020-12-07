class Box
{
    constructor(x,y,width,height){
    var options = {
        'isStatic':false,
        'friction':0.2,
        'density':0.5
    }

    this.body = Bodies.rectangle(x,y,width,height,options)
    this.visibility = 255;
    this.width = width;
    this.height = height;
    World.add(world, this.body)
    }


display()
{    if(this.body.speed < 13.2){
    var pos = this.body.position;
    fill(random(0,255),random(0,255),random(0,255));
    rect(pos.x,pos.y,this.width,this.height);
       }
       else{
         World.remove(world, this.body);
         push();
         this.visibility = this.visibility - 5;
         tint(255,this.visibility);
          pop();
       }
}

score()
{
  if(this.visibility<0 && this.visibility>-255)
  {
    score = score+1;
  }
}
}