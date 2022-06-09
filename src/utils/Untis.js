import axios from "axios";
import WebUntis from "webuntis";

export default class Untis {

    domain = "";
    school = "";
    username = "";
    password = "";
    untis = null;

    initialize(domain, school, username, password){
        this.domain = domain;
        this.school = school;
        this.username = username;
        this.password = password;
        this.untis = new WebUntis(this.school, this.username, this.password, this.domain);
        //login to untis
        console.log(this.untis);

        this.untis
            .login()
            .then(() => {
                return this.untis.getOwnTimetableForToday();
            })
            .then((timetable) => {
                // profit
            });
    }

}