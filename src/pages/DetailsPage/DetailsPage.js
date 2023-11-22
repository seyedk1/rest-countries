import { computed, onBeforeMount, ref } from "vue";
import { useCountryStore } from "stores/country-store";
import { useRoute } from "vue-router";
import CountryDetails from "components/CountryDetails/CountryDetails.vue";
import mixinTheme from "src/resources/composable/theme";

// default options

export default {
  components: {
    CountryDetails,
  },

  setup() {
    const { theme, getDarkModeStatus } = mixinTheme();

    //loading for page
    const showing = ref(true);

    setTimeout(() => {
      showing.value = false;
    }, 1500);

    const route = useRoute();

    const store = useCountryStore();
    const getCountryInformation = computed(() => store.get_country_details);
    const { get_country_details_action } = store; // actions can be destructured directly

    onBeforeMount(async () => {
      const countryName = route.query.countryName;
      const fields =
        "name,flags,region,population,borders,subregion,capital,tld,currencies,languages";
      const data = { countryName, fields };
      await get_country_details_action(data);
    });

    //navigation
    const navigateToCountryDetails = async (country) => {
      await get_country_details_action(country);
    };

    return {
      getCountryInformation,
      get_country_details_action,
      navigateToCountryDetails,
      showing,
      theme,
      getDarkModeStatus,
    };
  },
};
