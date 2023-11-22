import { ref, reactive, computed } from "vue";
import { useCountryStore } from "stores/country-store";
import mixinTheme from "src/resources/composable/theme";

export default {
  setup() {
    const {theme,getDarkModeStatus} = mixinTheme();

    const store = useCountryStore();

    const { get_countries_by_limit_action, filter_countries_by_region_action } =
      store; // actions can be destructured directly

    /* 
            there is no any apies in document for get only regions so I should handle this 
            part manually
        */
    const regions = reactive([
      "Africa",
      "Americas",
      "Asia",
      "Europe",
      "Oceania",
    ]);
    const selectedRegion = ref(null);

    const loadMore = (index, done) => {
      setTimeout(() => {
        get_countries_by_limit_action();
        done();
      }, 1000);
    };

    const onItemClick = async (region) => {
      console.log(region);
      selectedRegion.value = region;
      await filter_countries_by_region_action(region);
      await loadMore();
    };

    return {
      theme,
      getDarkModeStatus,
      regions,
      loadMore,
      selectedRegion,
      onItemClick,
    };
  },
};
