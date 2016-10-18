export class PositionsMatrix {
    public Period: string;
    public PrimaryEquity: string;
    public IdentifierList: string[];
    public _institutionId:string
    constructor(period: string, primaryEquity: string, identifierList:string[]) {
        this.Period = period;
        this.PrimaryEquity = primaryEquity;
        this.IdentifierList = identifierList;
        
    }

}