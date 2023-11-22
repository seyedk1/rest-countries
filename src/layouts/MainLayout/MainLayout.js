import { useQuasar } from "quasar";
import mixinTheme from "src/resources/composable/theme";

export default {
  name: "MainLayout",
  setup() {
    const { theme, getDarkModeStatus } = mixinTheme();
    const $q = useQuasar();

    const { toggle_dark_mode_action } = theme;

    // change mode function
    const changeMode = () => {
      toggle_dark_mode_action($q);
    };
    return {
      changeMode,
      theme,
      getDarkModeStatus,
    };
  },
};
