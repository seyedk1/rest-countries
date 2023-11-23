import { computed, onBeforeMount, reactive, ref, watch } from "vue";
import { useCountryStore } from "stores/country-store";
import { useRoute, useRouter } from "vue-router";
import CountryDetails from "components/CountryDetails/CountryDetails.vue";
import mixinTheme from "src/resources/composable/theme";
import { useQuasar } from "quasar";

// default options

export default {
  components: {
    CountryDetails,
  },

  setup() {
    const $q = useQuasar();

    const router = useRouter();
    const route = useRoute();

    const { theme, getDarkModeStatus } = mixinTheme();

    //loading for page
    const showing = ref(true);

    setTimeout(() => {
      showing.value = false;
    }, 1500);

    const store = useCountryStore();
    const getCountryInformation = computed(() => store.get_country_details);
    const { get_country_details_action } = store; // actions can be destructured directly

    onBeforeMount(async () => {
      const countryName = route.query.countryName;
      await get_country_details_action({ countryName });
    });

    // navigation
    const navigateToCountryDetails = async (countryName) => {
      const res = await get_country_details_action({
        countryName,
      });
      console.log("res?.response?.status: ", res);
      if (res?.status == 200) {
        router.push({
          name: "details-page",
          query: { countryName },
        });
      } else if (res?.response?.status == 404) {
        $q.notify({
          color: "negative",
          textColor: "white",
          icon: null,
          message: `doesn't find any countries with this name!`,
          position: "top",
        });
      }
    };

    // navigation
    const backBtn = () => {
      router.go(-1);
      console.log("baccclkk:", route.query.countryName);
    };

    watch(
      () => route.query.countryName,
      async (newRoute, oldRoute) => {
        console.log({ newRoute, oldRoute });
        if (newRoute !== undefined) {
          await get_country_details_action({
            countryName: route.query.countryName,
          });
        }
      }
    );
    return {
      getCountryInformation,
      get_country_details_action,
      navigateToCountryDetails,
      showing,
      theme,
      getDarkModeStatus,
      backBtn,
    };
  },
};
