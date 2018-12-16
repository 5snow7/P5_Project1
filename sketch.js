let can;
let p1,p2;let parray=[];
function setup(){
	extraS();
	can=createCanvas(800,600);can.position(50,50);
	can.class("bdd");this.spx=4;this.spy=3;
	p1=new pars(200,200,"testOne","id1");
	p2=new pars(400,200,"testTwo","id2");
parray.push(p1);parray.push(new pars(100,100,"2cd array element","id3"));

	}

function draw(){
background(255,0,0);
//p1.move();p1.bdd();
p2.move();p2.bdd();
for(let k=0;k<parray.length;k++)
{
parray[k].move();
parray[k].bdd();
if(parray[k].count>4){parray.splice(1,k);}
}
}	

