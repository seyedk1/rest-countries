import { defineStore } from "pinia";
import axios from "axios";

export const useCountryStore = defineStore("country", {
  state: () => ({
    countries: [],
    countryDetails: {},
    offset: 0,
    limit: 8,
    visibleCountries: [],
    region: [],
    searchResults: [],
  }),

  getters: {
    get_countries: (state) => state.countries,
    get_country_details: (state) => state.countryDetails,
    get_offset: (state) => state.offset,
    get_limit: (state) => state.limit,
    get_visible_countries: (state) => state.visibleCountries,
    get_region: (state) => state.region,
    get_search_results: (state) => state.searchResults,
  },

  actions: {
    async get_countries_action(fields) {
      try {
        const params = {};
        // Only include the 'fields' parameter if it's provided
        if (fields !== undefined) {
          params.fields = fields;
          console.log(params);
        }

        const res = await axios({
          url: `all`,
          method: "GET",
          params,
        });
        this.countries = res.data;

        return res;
      } catch (err) {
        console.log("err: ", err);
        return err;
      }
    },

    async get_country_details_action(data) {
      try {
        const params = {};
        // Only include the 'fields' parameter if it's provided
        if (data.fields !== undefined) params.fields = data.fields;
        else
          params.fields =
            "name,flags,region,population,borders,subregion,capital,tld,currencies,languages";

        const res = await axios({
          url: `name/${data.countryName}`,
          method: "GET",
          params,
        });
        this.countryDetails = res.data[0];
        return res;
      } catch (error) {
        return error;
      }
    },

    async get_countries_by_limit_action() {
      try {
        if (this.offset < this.countries.length) {
          const end = Math.min(this.offset + this.limit, this.countries.length);
          this.visibleCountries = [
            ...this.visibleCountries,
            ...this.countries.slice(this.offset, end),
          ];
          this.offset += this.limit;
        }

        console.log({
          offset: this.offset,
          visibleCountries: this.visibleCountries,
          limit: this.limit,
        });
      } catch (error) {
        return error;
      }
    },

    async filter_countries_by_region_action(region) {
      try {
        // should empty all these states for fill again for region selected
        this.countries = [];
        this.visibleCountries = [];
        this.offset = 0;
        this.limit = 8;

        const res = await axios({
          url: `region/${region}`,
          method: "GET",
        });

        this.countries = res.data;
        console.log("countries filter by region: ", this.countries);
        return res;
      } catch (error) {
        return error;
      }
    },
  },
});
