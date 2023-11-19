import { defineStore } from "pinia";
import axios from "axios";

export const useCountryStore = defineStore("country", {
  state: () => ({
    countries: [],
    countryDetails: {},
  }),

  getters: {
    get_countries: (state) => state.countries,
    get_country_details: (state) => state.countryDetails,
  },

  actions: {
    async get_countries_action() {
      try {
        /*
        params: {
            page: data.currentPage || 1,
            size: data.size || 10,
            service_provider_id: data.service_provider_id,
            user_id: data.user_id,
          },
        */
        const res = await axios({
          url: "all",
          method: "GET",
        });
        this.countries = res;
        console.log("resss get all countries:", res);

        return res;
      } catch (err) {
        console.log("err: ", err);
        return err;
      }
    },
  },
});
