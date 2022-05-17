import axios from "axios";

export default class EveryTask {
  token = "";

    async login(email, password) {
        await axios
            .post("http://localhost:8080", {
                action: 'login',
                email: email,
                password: password,
            })
            .then((response) => {
                console.log(response.data);
                this.token= response.data.token
            })
            .catch((error) => {
                console.log(error);
            });
    }

    async register(email, password, username) {
        await axios
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

    async addTask(title, description, is_done, due_time, note) {
        console.log(due_time);
        await axios
            .post("http://localhost:8080/", {
                action: "addTask",
                token: this.token,
                title: title,
                description: description,
                is_done: is_done,
                due_time: this.timeFormat(due_time),
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

    async deleteTask(task_id) {
        await axios
          .post("http://localhost:8080/", {
              action: "deleteTask",
              task_id: task_id,
          })
          .then((response) => {
              console.log(response.data);
          })
          .catch((error) => {
              console.log(error);
          });
    }

    async getTasks() {
        let response = await axios
        .post("http://localhost:8080/", {
            action: "getTasks",
        });

        console.log(response.data);
        return response.data;
    }

    currentTime() {
      var now = new Date;
      if (now.getMonth() < 10) {
        var month = "0" + (now.getMonth() + 1);
      } else {
        var month = now.getMonth() + 1;
      }
      return now.getFullYear()+'-'+month+'-'+now.getDate() + " "+ now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    }

    timeFormat(date) {
        return date + " 12:00:00";
    }

    getToken(){
      return this.token;
    }

}
