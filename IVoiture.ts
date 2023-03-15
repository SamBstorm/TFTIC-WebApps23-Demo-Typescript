interface IVoiture{
    roue : number;
    couleur : string;
    plaque? : string;
    proprietaire : string;

    rouler(vitesse : number, distance : number) : number;
}