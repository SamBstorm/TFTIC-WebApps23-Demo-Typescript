let v1 : IVoiture = new Voiture('Rouge');
let c1 : Camionette = new Camionette('Blanche',150);

console.log(`Ma voiture v1 a ${v1.roue} roues et est de couleur ${v1.couleur}!`);
console.log(`Ma camionette c1 a ${c1.roue} roues et est de couleur ${c1.couleur}! Elle peut stocker ${c1.capaciteCoffre} littres dans son coffre!`);

let t1 : number = v1.rouler(120,60);
let t2 : number = c1.rouler(60,120);