<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      class="header-style"
      :class="{ 'q-dark': getDarkModeStatus }"
    >
      <q-toolbar class="header-title--dark-mode-parent">
        <q-toolbar-title
          class="header-title"
          :class="{ 'q-dark': getDarkModeStatus }"
        >
          Where in the world?
        </q-toolbar-title>

        <div>
          <q-btn
            flat
            align="between"
            class="btn-fixed-width dark-mode-button"
            color="black"
            label="Dark Mode"
            no-caps
            icon="dark_mode"
            @click="changeMode()"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style src="./MainLayout.scss" lang="scss" scoped></style>
<script src="./MainLayout.js"></script>
