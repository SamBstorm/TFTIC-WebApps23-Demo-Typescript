class Camionette extends Voiture {
    capaciteCoffre : number;

    constructor(couleur: string, cap : number){
        super(couleur);
        this.capaciteCoffre = cap;
    }

    rouler(vitesse: number, distance: number): number {
        let temps = super.rouler(vitesse, distance);
        console.log('Avec ma camionette...');
        return temps;
    }
}