class Paper{
	constructor(x,y,r)
	{
		var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1
		}
		this.x=x;
		this.y=y;
		this.r=r
        this.image = loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, 25, options)
		World.add(world, this.body);
	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
            image(this.image,0,0,70,70);
			pop()
	}

}