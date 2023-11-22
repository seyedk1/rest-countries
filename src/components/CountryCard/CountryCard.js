import { computed } from "vue";
import { useRouter } from "vue-router";
import mixinTheme from "src/resources/composable/theme";
import { useCountryStore } from "stores/country-store";

export default {
  setup() {
    const { theme, getDarkModeStatus } = mixinTheme();

    const router = useRouter();

    const store = useCountryStore();

    const getVisibleCountriesList = computed(() => store.get_visible_countries);

    // navigation
    const navigateToCountryDetails = (country) => {
      router.push({
        name: "details-page",
        query: { countryName: country },
      });
    };

    return {
      theme,
      getDarkModeStatus,
      getVisibleCountriesList,
      navigateToCountryDetails,
    };
  },
};
