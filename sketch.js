let can;
let p1,p2;
function setup(){
	can=createCanvas(800,600);can.position(50,50);
	can.class("bdd");this.spx=4;this.spy=3;
	p1=new pars(200,200,"testOne","id1");
	p2=new pars(400,200,"testTwo","id2");
}

function draw(){
background(255,0,0);
p1.move();p1.bdd();
p2.move();p2.bdd();

}	

