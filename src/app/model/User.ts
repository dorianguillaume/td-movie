export class User {
    
    private _firstname : string;
    public get firstname() : string {
        return this._firstname;
    }
    public set firstname(v : string) {
        this._firstname = v;
    }
    
    private _lastname : string;
    public get lastname() : string {
        return this._lastname;
    }
    public set lastname(v : string) {
        this._lastname = v;
    }

    /**
     *
     */
    constructor(firstname: string, lastname: string) {
        this._firstname = firstname
        this._lastname = lastname               
    }    
}