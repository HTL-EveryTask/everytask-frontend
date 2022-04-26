import axios from "axios"

export default class EveryTask {

    constructor(email, password) {
        this.email = email
        this.password = password
    }

    login() {
        axios
            .post("http://localhost:8080", {
                action: 'login',
                email: this.email,
                password: this.password,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
