export class SavePeerGroupModel {
    private _selectedRows: Array<any>;
    private _isPrivate: boolean;
    private _defaultCurrency: string;
    private _equityId:string;

    constructor(selectedRows: Array<any>, isPrivate: boolean, defaultCurrency: string, equityId:string) {
        this._selectedRows = selectedRows;
        this._isPrivate = isPrivate;
        this._defaultCurrency = defaultCurrency;
        this._equityId = equityId;
    }

}