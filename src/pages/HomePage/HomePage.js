import { ref, reactive, computed, onMounted } from "vue";
import { useCountryStore } from "stores/country-store";
import { useRouter } from "vue-router";
import { useThemeStore } from "stores/theme-store";

export default {
  setup() {
    //dark mode status
    const theme = useThemeStore();

    const store = useCountryStore();
    const router = useRouter();

    const scrollTargetRef = ref(null);
    const selected = ref();

    // Inout search
    const model = ref(null);
    let options = ref([]);

    const setModel = async (val) => {
      model.value = val;
      const res = await store.get_country_details_action({
        countryName: model.value,
        fields: "name",
      });

      options.value = res.data.map((country) => ({
        label: country.name.common,
        value: country.name.common,
      }));
    };

    const handleOptionClick = (value) => {
      // Handle the click event on the option
      console.log("Clicked:", { model: value });
      model.value = value;
      router.push({
        name: "details-page",
        query: { countryName: model.value.label },
      });
    };

    //dark mode use getters
    const getOptions = computed(() => options);
    const getDarkModeStatus = computed(() => theme.get_dark_mode_status);

    const getCountriesList = computed(() => store.get_countries);
    const getVisibleCountriesList = computed(() => store.get_visible_countries);
    const getOffset = computed(() => store.get_offset);
    const getLimit = computed(() => store.get_limit);
    const {
      get_countries_action,
      get_countries_by_limit_action,
      filter_countries_by_region_action,
      get_country_details_action,
    } = store; // actions can be destructured directly

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

    const onItemClick = async (region) => {
      console.log(region);
      selectedRegion.value = region;
      await filter_countries_by_region_action(region);
      await loadMore();
    };

    onMounted(async () => {
      await get_countries_action(`name,population,flags,region,capital`);
      await loadMore();
    });
    return {
      selected,
      regions,
      loadMore,
      selectedRegion,
      onItemClick,
      getCountriesList,
      get_countries_action,
      get_country_details_action,
      navigateToCountryDetails,
      getVisibleCountriesList,
      getLimit,
      getOffset,
      scrollTargetRef,
      theme,
      getDarkModeStatus,
      model,
      options,
      getOptions,
      setModel,
      handleOptionClick,
    };
  },
};
