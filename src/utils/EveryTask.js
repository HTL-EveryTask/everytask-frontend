import axios from "axios"

export default class EveryTask {

    login(email, password) {
        axios
            .post("http://localhost:8080", {
                action: 'login',
                email: email,
                password: password,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    register(email, password, username) {
        axios
        .post("http://localhost:8080/", {
          action: "register",
          email: email,
          password: password,
          username: username,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getTasks() {

    }
}
