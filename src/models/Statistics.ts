export class Statistics
{
    public temperatures : Array<number>;
    public humidities : Array<number>;
    constructor(t,h)
    {
        this.temperatures = t;
        this.humidities = h;
    }
}