export class User
{
    nom : String;
    prenom : String;
    email : String ; 
    password : String;
    carteId : String;
    potagerId : number;
    constructor(nom,prenom,email,password,idCarte,potagerId)
    {
        this.nom = nom;
        this.email = email;
        this.prenom = prenom;
        this.password = password;
        this.carteId = idCarte;
        this.potagerId = potagerId;
    }

}