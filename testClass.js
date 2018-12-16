

class pars{
constructor(x,y,wd,idd){
this.count=0;
this.p=createP(wd);this.x=x;this.y=y;
this.spx=4;this.spy=3;
this.p.position(x,y);this.p.id(idd);
this.p.class("parbdd");
this.img=createImg("mandel1.jpg");
//this.img.position(x+10,y-100);
this.img.class("picbdd");
this.img.parent(idd);

}
move(){
	this.x=this.x+this.spx;
	this.y+=this.spy;
	this.p.position(this.x,this.y);
	}

bdd(){
	if(this.x>windowWidth||this.x<0){this.count++;
	this.spx=this.spx*(-1);}
    if(this.y>windowHeight||this.y<0){this.spy=this.spy*(-1);}
	}

}