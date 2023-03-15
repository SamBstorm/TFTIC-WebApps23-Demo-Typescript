"use strict";
//Avant on créait des prototypes (similaire à du OO) avec des functions
// function Voiture(){
//     this.roue = 4;
// }
// let v1 = new Voiture();
class Voiture {
    roue;
    couleur;
    plaque;
    proprietaire;
    constructor(couleur) {
        this.roue = 4;
        this.couleur = couleur;
    }
    rouler(vitesse, distance) {
        console.log(`Je roule à ${vitesse} km/h sur une distance de ${distance} km!`);
        return distance / vitesse;
    }
}
