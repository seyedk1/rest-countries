import { ref, computed, onMounted } from "vue";
import { useCountryStore } from "stores/country-store";
import { useRouter } from "vue-router";
import SearchCountries from "components/SearchCountries/SearchCountries.vue";
import FilterRegion from "components/FilterRegion/FilterRegion.vue";
import CountryCard from "components/CountryCard/CountryCard.vue";
import mixinTheme from "src/resources/composable/theme";

export default {
  components: {
    SearchCountries,
    FilterRegion,
    CountryCard,
  },

  setup() {
    const { theme, getDarkModeStatus } = mixinTheme();
    const store = useCountryStore();
    const router = useRouter();

    const scrollTargetRef = ref(null);

    const getCountriesList = computed(() => store.get_countries);
    const getVisibleCountriesList = computed(() => store.get_visible_countries);
    const getOffset = computed(() => store.get_offset);
    const getLimit = computed(() => store.get_limit);
    const { get_countries_action, get_countries_by_limit_action } = store; // actions can be destructured directly

    // navigation
    const navigateToCountryDetails = (country) => {
      router.push({
        name: "details-page",
        query: { countryName: country },
      });
    };

    const loadMore = (index, done) => {
      setTimeout(() => {
        get_countries_by_limit_action();
        done();
      }, 1000);
    };

    onMounted(async () => {
      await get_countries_action(`name,population,flags,region,capital`);
      await loadMore();
    });
    return {
      loadMore,
      getCountriesList,
      get_countries_action,
      navigateToCountryDetails,
      getVisibleCountriesList,
      getLimit,
      getOffset,
      scrollTargetRef,
      theme,
      getDarkModeStatus,
    };
  },
};
