export class InstitutionResultsModel {
    public _institutionName: string;
    public _position: number;
    public _price:number;
    public _institutionId:string;
    constructor(institutionName: string, position: number, price:number, institutionId:string) {
        this._institutionName = institutionName;
        this._position = position;
        this._price = price;
        this._institutionId = institutionId;
    }

}