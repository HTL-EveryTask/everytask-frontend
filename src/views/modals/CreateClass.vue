<template>
  <div>
    <div class="input-field">
      <label>Title</label>
      <input type="text" v-model="className" />
    </div>
    <button class="btn-cornflower" @click="createClass">Create</button>
  </div>
</template>

<script>
import WebUntis from "webuntis";
import axios from "axios";

export default {
  name: "CreateClass",

  data() {
    return {
      className: "",
    };
  },

  methods: {
    async createClass() {
      // await this.$store.getters.everyTask.createClass(this.className);
      /*
            const response = await axios({
              method: "POST",
              url: "https://urania.webuntis.com" + `/WebUntis/jsonrpc.do`,
              params: {
                school: "htl3r",
              },
              data: {
                id: "Awesome",
                method: "authenticate",
                params: {
                  user: "8085",
                  password: "testpasswort123",
                  client: "Awesome",
                },
                jsonrpc: "2.0",
              },
            });

            console.log(response);
      */
      const untis = new WebUntis(
        "htl3r",
        "8085",
        "testpasswort123",
        "urania.webuntis.com"
      );

      untis.validateSession = async () => {
        if (!untis.sessionInformation) return false;
        const response = await untis.axios({
          method: "POST",
          url: `/WebUntis/jsonrpc.do`,
          params: {
            school: untis.school,
          },
          headers: {},
          data: {
            id: untis.id,
            validationString: untis._buildCookies(),
            method: "getLatestImportTime",
            params: {},
            jsonrpc: "2.0",
          },
        });
        console.log(typeof response.data.result === "number");
        return typeof response.data.result === "number";
      };

      untis._request = async (
        method,
        parameter = {},
        validateSession = true,
        url = `/WebUntis/jsonrpc.do`
      ) => {
        if (validateSession && !(await untis.validateSession()))
          throw new Error("Current Session is not valid");
        const response = await untis.axios({
          method: "POST",
          url: url,
          params: {
            school: untis.school,
          },
          headers: {},
          data: {
            validationString: untis._buildCookies(),
            id: untis.id,
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

      untis.axios = axios.create({
        baseURL: "http://localhost:3002",
        maxRedirects: 0,
        withCredentials: true,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      });

      untis
        .login()
        .then(() => {
          console.log("in here", untis.sessionInformation);
          return untis.getOwnTimetableForToday();
        })
        .then((timetable) => {
          console.log(timetable[0].ro);
        })
        .catch((err) => {
          console.log("Couldn't log in!");
        });
    },
  },
};
</script>

<style scoped></style>
