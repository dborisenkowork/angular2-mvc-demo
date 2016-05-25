import {Injectable} from "angular2/core";

@Injectable()
export class AuthService
{
    private token: AuthToken;

    isAuthenticated() {
        return !!this.token;
    }

    getToken(): AuthToken {
        if(this.isAuthenticated()) {
            return this.token;
        }else{
            throw new Error('Not authenticated');
        }
    }

    signIn(email: string, password: string) {
        this.token = new AuthToken(email, password);
    }

    signUp(email: string, password: string) {
        this.token = new AuthToken(email, password);
    }

    signOut() {
        this.token = undefined;
    }
}

class AuthToken
{
    email: string;
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}