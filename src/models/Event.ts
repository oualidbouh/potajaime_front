export class Evenement
{
    idEvenement : String;
    label:string; //titre de la tâche
    done:boolean; //état de la tâche
    dateDebut : Date;
    dateFin : Date;
    idZone : number;
    constructor(label,done,dateDebut,dateFin,id,idZone)
    {
        this.label = label;
        this.done = done;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.idEvenement = id;
        this.idZone = idZone;
    }
}