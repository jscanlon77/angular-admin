export class RegistrationModel {
    public _email: string;
    public _password: string;
    public _confirmPassword: string;

    constructor(email: string, password: string, confirmPassword: string) {
        this._email = email;
        this._password = password;
        this._confirmPassword = confirmPassword;
    }

}