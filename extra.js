let but;

function extraS(){
but=createButton('hit Me');
but.class('bdd');but.position(900,100);
but.mousePressed(addOn);
}
let j=4;
function addOn(){
parray.push(new pars(random(200),50,"add via button","id"+j));	
j++;	
}