let antallboller = 12;
antallboller -= 4;
antallboller += 24;
let antallbollerperPerson = antallboller / 4;
document.write(antallbollerperPerson   + "<br>");
//7 boller per person

document.write(8 + "4" + "<br>");
document.write(8 * "4" + "<br>");
document.write(8 - "4" + "<br>");
document.write(8 / "4" + "<br>");

let a = 3;
let b = 7;
document.write(a * b + "<br>");
document.write(a * b - a + "<br>");
document.write(a * b - b + "<br>");
document.write(a * b + a + "<br>");
document.write(a + b - (b + b) + "<br>");
 


let sekunder = 27
let minutter = 34
let timer = 18
let totalsekunder = timer * 3600 + minutter * 60 + sekunder
document.write(totalsekunder + "<br>"); 


let sekunderios = 66867
let timerios = Math.floor(sekunderios / 3600)
let minutterios = Math.floor((sekunderios % 3600) / 60)
let sekunderrestios = sekunderios % 60
document.write(timerios + " timer, " + minutterios + " minutter og " + sekunderrestios + " sekunder" + "<br>");
//18 timer, 34 minutter og 27 sekunder

let alfabet = "abcdefghijklmnopqrstuvwxyzæøå"  
document.write((alfabet[7] + alfabet[0] + alfabet[11] + alfabet[11] + alfabet[14]).toUpperCase() + "<br>");