import axios from "axios";

export default class EveryTask {
    token = "";
    username = "";

    async login(email, password) {
        await axios
            .post("http://localhost:8080/", {
                action: "login",
                email: email,
                password: password,
            })
            .then((response) => {
                console.log(response.data);
                this.token = response.data.token;
                this.username = response.data.username;
                localStorage.setItem("token", this.token);
                localStorage.setItem("username", this.username);
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

    async addTask(group_id, title, description, is_done, due_time, note) {
        console.log(due_time);
        await axios
            .post("http://localhost:8080/", {
                action: "addTask",
                token: this.token,
                group_id: group_id,
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
        let response = await axios.post("http://localhost:8080/", {
            action: "getTasks",
            token: this.token,
        });

        console.log(response.data);
        return response.data;
    }

    currentTime() {
        var now = new Date();
        if (now.getMonth() < 10) {
            var month = "0" + (now.getMonth() + 1);
        } else {
            var month = now.getMonth() + 1;
        }
        return (
            now.getFullYear() +
            "-" +
            month +
            "-" +
            now.getDate() +
            " " +
            now.getHours() +
            ":" +
            now.getMinutes() +
            ":" +
            now.getSeconds()
        );
    }

    timeFormat(date) {
        return date + " 12:00:00";
    }

    async getTaskId(description, due_time, create_time) {
        let id = await axios.post("http://localhost:8080/", {
            action: "getTaskId",
            description: description,
            due_time: due_time,
            create_time: create_time,
        });

        console.log(response.data);
        return response.data;
    }

    async editTask(
        old_description,
        old_due_time,
        old_create_time,
        title_new,
        description_new,
        done_new,
        due_time_new,
        create_time_new,
        note_new
    ) {
        await axios.post("http://localhost:8080/", {
            action: "editTask",
            task_id: this.getTaskId(old_description, old_due_time, old_create_time),
            token: this.token,
            title_new: title_new,
            description_new: description_new,
            done_new: done_new,
            due_time_new: this.timeFormat(due_time_new),
            create_time_new: this.timeFormat(create_time_new),
            note_new: note_new,
        });
    }

    async editTaskbyId(
        task_id,
        title_new,
        description_new,
        done_new,
        due_time_new,
        create_time_new,
        note_new
    ) {
        await axios.post("http://localhost:8080/", {
            action: "editTask",
            task_id: task_id,
            token: this.token,
            title_new: title_new,
            description_new: description_new,
            done_new: done_new,
            due_time_new: this.timeFormat(due_time_new),
            create_time_new: this.timeFormat(create_time_new),
            note_new: note_new,
        });
    }

    getToken() {
        return this.token;
    }

    setToken(token) {
        this.token = token;
    }

    getUsername() {
        return this.username;
    }

    setUsername(username) {
        this.username = username;
    }

    async addGroup(group_name, group_icon, group_description) {
        await axios
            .post("http://localhost:8080/", {
                action: "addGroup",
                group_name: group_name,
                group_icon: group_icon,
                group_description: group_description,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    async switchTaskStatus(task_id) {
        await axios
            .post("http://localhost:8080/", {
                action: "switch_task_status",
                task_id: task_id,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
