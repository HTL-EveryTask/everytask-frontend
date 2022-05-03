import axios from "axios";

let token = null;

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
                token= response.data.token
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

    addTask(title, description, is_done, due_time, note) {
        axios
            .post("http://localhost:8080/", {
                action: "addTask", 
                token: this.$store.getters.getToken(),
                title: title, 
                description: description,
                is_done: is_done,
                due_time: due_time,
                created_time: this.currentTime(),
                note: note,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    currentTime() {
      var now = new Date;
      return now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate() + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    }

    getToken(){
      return this.token;
    }
}
