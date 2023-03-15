//Avant on créait des prototypes (similaire à du OO) avec des functions
// function Voiture(){
//     this.roue = 4;
// }

// let v1 = new Voiture();

class Voiture implements IVoiture{

    roue : number;
    couleur : string;
    plaque? : string;
    proprietaire! : string;

    constructor(couleur : string){
        this.roue = 4;
        this.couleur = couleur;
    }

    rouler(vitesse: number, distance: number): number {
        console.log(`Je roule à ${vitesse} km/h sur une distance de ${distance} km!`)
        return distance/vitesse;
    }
}