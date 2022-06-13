import axios from "axios";
import WebUntis from "webuntis";

export default class Untis {
  domain = "";
  school = "";
  username = "";
  password = "";
  untis = null;
  login = false;

  subjects = [];

  initialize(domain, school, username, password) {
    this.untis = new WebUntis(
      school,
      username,
      password,
      domain
    );
    //login to untis
    console.log(this.untis);

    this.untis.validateSession = async () => {
      if (!this.untis.sessionInformation) return false;
      const response = await this.untis.axios({
        method: "POST",
        url: `/WebUntis/jsonrpc.do`,
        params: {
          school: this.untis.school,
        },
        headers: {},
        data: {
          id: this.untis.id,
          validationString: this.untis._buildCookies(),
          method: "getLatestImportTime",
          params: {},
          jsonrpc: "2.0",
        },
      });
      console.log(typeof response.data.result === "number");
     this.login = typeof response.data.result === "number";
      return typeof response.data.result === "number";
    };

    this.untis._request = async (
      method,
      parameter = {},
      validateSession = true,
      url = `/WebUntis/jsonrpc.do`
    ) => {
      if (validateSession && !(await this.untis.validateSession()))
        throw new Error("Current Session is not valid");
      const response = await this.untis.axios({
        method: "POST",
        url: url,
        params: {
          school: this.untis.school,
        },
        headers: {},
        data: {
          validationString: this.untis._buildCookies(),
          id: this.untis.id,
          method: method,
          params: parameter,
          jsonrpc: "2.0",
        },
      });
      if (!response.data.result)
        throw new Error("Server didn't return any result.");
      if (response.data.result.code)
        throw new Error(
          "Server returned error code: " + response.data.result.code
        );
      return response.data.result;
    };

    this.untis.axios = axios.create({
      baseURL: "http://localhost:3002",
      maxRedirects: 0,
      withCredentials: true,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    });

    this.untis
      .login()
      .then(() => {
        console.log("in here", this.untis.sessionInformation);
        return this.untis.getSubjects();
      })
      .then((subjects) => {
        console.log(subjects);
        this.subjects = subjects;
        this.domain = domain;
        this.school = school;
        this.username = username;
        this.password = password;
      })
      .catch((err) => {
        console.log("Couldn't log in!");
      });
  }
}