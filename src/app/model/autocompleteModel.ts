export class AutoCompleteModel {
    public _equityName: string;
    public _equityTickerRegion: string;
    public _equityId:string;
    constructor(equityName: string, equityTickerRegion: string, equityId:string) {
        this._equityName = equityName;
        this._equityTickerRegion = equityTickerRegion;
        this._equityId = equityId;
    }

}