import { computed } from "vue";
import { useThemeStore } from "stores/theme-store";
import { useQuasar } from "quasar";

export default {
  name: "MainLayout",
  setup() {
    const theme = useThemeStore();

    const $q = useQuasar();

    //dark mode use getters
    const getDarkModeStatus = computed(() => theme.get_dark_mode_status);

    const { toggle_dark_mode_action } = theme;

    // change mode function
    const changeMode = () => {
      toggle_dark_mode_action($q);
    };
    return {
      theme,
      getDarkModeStatus,
      changeMode,
    };
  },
};
