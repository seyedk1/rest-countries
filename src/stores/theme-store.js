import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    darkMode: false,
  }),
  getters: {
    get_dark_mode_status: (state) => state.darkMode,
  },
  actions: {
    toggle_dark_mode_action(quasar) {
      this.darkMode = !this.darkMode;
      quasar.dark.set(this.darkMode);
    },
  },
});
