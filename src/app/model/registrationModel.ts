export class RegistrationModel {
    public Email: string;
    public Password: string;
    public ConfirmPassword: string;

    constructor(email: string, password: string, confirmPassword: string) {
        this.Email = email;
        this.Password = password;
        this.ConfirmPassword = confirmPassword;
    }

}