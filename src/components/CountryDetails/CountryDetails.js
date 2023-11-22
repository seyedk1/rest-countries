import { computed } from "vue";
import { useCountryStore } from "stores/country-store";
import mixinTheme from "src/resources/composable/theme";

// default options

export default {
  setup() {
    const {theme,getDarkModeStatus} = mixinTheme();
    const store = useCountryStore();
    const getCountryInformation = computed(() => store.get_country_details);

    // for show currencies
    const getCurrencies = computed(() => {
      return Object.keys(getCountryInformation.value?.currencies || {});
    });

    return {
      getCountryInformation,
      getCurrencies,
      theme,
      getDarkModeStatus
    };
  },
};
