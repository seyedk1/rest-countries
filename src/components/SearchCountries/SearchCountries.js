import { ref } from "vue";
import { useCountryStore } from "stores/country-store";
import { useRouter } from "vue-router";
import mixinTheme from "src/resources/composable/theme";

export default {
  setup() {
    const {theme,getDarkModeStatus} = mixinTheme();

    // for store countries
    const store = useCountryStore();

    const router = useRouter();

    const { get_country_details_action } = store;

    // Input search
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
      model.value = value;
      router.push({
        name: "details-page",
        query: { countryName: model.value.label },
      });
    };

    return {
      theme,
      getDarkModeStatus,
      model,
      options,
      setModel,
      handleOptionClick,
      get_country_details_action,
    };
  },
};
