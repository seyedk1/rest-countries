import { ref, reactive, computed, onMounted } from "vue";
import { useCountryStore } from "stores/country-store";
// import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = useCountryStore();

    let selected = ref();
    let countries = reactive([]);

    const search = (terms, done) => {
      // make an AJAX call
      // then call done(Array results)
      // DO NOT forget to call done! When no results or an error occurred,
      // just call with empty array as param. Example: done([])
    };

    // Option 3: use destructuring to use the store in the template
    const getCountriesList = computed(() => store.get_countries);
    const { get_countries_action } = store; // actions can be destructured directly

    const regions = reactive([
      "Africa",
      "Amreica",
      "Asia",
      "Europe",
      "Oceania",
    ]);

    onMounted(() => {
      console.log("Hello World!");
      get_countries_action();
    });
    return {
      selected,
      countries,
      search,
      regions,
      onItemClick() {
        // console.log('Clicked on an Item')
      },

      getCountriesList,
      get_countries_action,
      // onLoad(index, done) {
      //   setTimeout(() => {
      //     items.value.push({}, {}, {}, {}, {}, {}, {});
      //     done();
      //   }, 2000);
      // },
    };
  },
};
