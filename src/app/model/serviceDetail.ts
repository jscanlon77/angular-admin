export class ServiceDetail {
    public serviceName: string;
    public description:  string;
    public isAvailable: boolean;

    constructor(_serviceName:string, _description:string, _isAvailable:boolean) {
        this.serviceName = _serviceName;
        this.description = _description;
        this.isAvailable = _isAvailable;
    }
}