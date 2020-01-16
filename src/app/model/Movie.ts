export class Movie{
    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }
    
    private _real : string;
    public get real() : string {
        return this._real;
    }
    public set real(v : string) {
        this._real = v;
    }
    
    private _date : Date;
    public get date() : Date {
        return this._date;
    }
    public set date(v : Date) {
        this._date = v;
    }

    /**
     *
     */
    constructor(name: string, real: string, date: Date){
        this._name = name
        this._real = real
        this._date = date
    }               
    
    
}