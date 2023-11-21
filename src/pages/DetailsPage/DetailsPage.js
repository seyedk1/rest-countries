import { computed, onBeforeMount, onMounted, ref } from "vue";
import { useCountryStore } from "stores/country-store";
import { useRoute } from "vue-router";
import { useThemeStore } from "stores/theme-store";

// default options

export default {
  setup() {

    //loading for page
    const showing = ref(true);

    setTimeout(() => {
      showing.value = false
    }, 1500);
    //dark mode status
    const theme = useThemeStore();

    const route = useRoute();

    const store = useCountryStore();
    const getCountryInformation = computed(() => store.get_country_details);
    const { get_country_details_action } = store; // actions can be destructured directly

    const information = ref([]);

    //dark mode use getters
    const getDarkModeStatus = computed(() => theme.get_dark_mode_status);

    // for show currencies
    const getCurrencies = computed(() => {
      return Object.keys(getCountryInformation.value?.currencies || {});
    });

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
      information,
      getCurrencies,
      theme,
      // getCountryCurrencyName,
      getDarkModeStatus,
      showing
    };
  },
};
