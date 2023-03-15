"use strict";
class Camionette extends Voiture {
    capaciteCoffre;
    constructor(couleur, cap) {
        super(couleur);
        this.capaciteCoffre = cap;
    }
    rouler(vitesse, distance) {
        let temps = super.rouler(vitesse, distance);
        console.log('Avec ma camionette...');
        return temps;
    }
}
