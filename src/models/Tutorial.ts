export class Tutorial
{
    private idTutorial : Number;
    private title : String;
    private description : String;
    private date : Date;
    private videoLink : String;
    private imageLink : String;

    constructor(id:Number,title:String,description:String,date:Date,vlink:String,imageLink:String)
    {
        this.idTutorial = id;
        this.title = title;
        this.description = description;
        this.date = date; 
        this.videoLink = vlink;
        this.imageLink = imageLink;
    }
}