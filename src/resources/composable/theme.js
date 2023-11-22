import { computed } from "vue";
import { useThemeStore } from "stores/theme-store";

export default function mixinTheme() {
  //dark mode store
  const theme = useThemeStore();

  //dark mode use getters
  const getDarkModeStatus = computed(() => theme.get_dark_mode_status);

  return {
    theme,
    getDarkModeStatus,
  };
}
