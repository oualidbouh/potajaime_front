import {Evenement} from './Event';
export class HomePageModel
{
    humidity : String;
    temperature : String
    water : String;
    light : String;
    
    evenements : Evenement[];

    

    constructor(humidity,temperature,water,light,events)
    {
        this.humidity = humidity;
        this.temperature = temperature;
        this.water = water;
        this.light = light;
        this.evenements = events;
    }   
}