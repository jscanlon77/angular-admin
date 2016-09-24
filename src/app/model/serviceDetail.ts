export class ServiceDetail {
    public serviceName: string;
    public description:  string;
    public isActivated: boolean;

    constructor(_serviceName:string, _description:string, _isActivated:boolean) {
        this.serviceName = _serviceName;
        this.description = _description;
        this.isActivated = _isActivated;
    }
}