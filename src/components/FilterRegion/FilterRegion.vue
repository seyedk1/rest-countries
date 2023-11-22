<template>
  <!--start filter-parent-->
  <div class="filter-parent">
    <q-btn-dropdown
      class="filter-button"
      :class="{ 'q-dark': getDarkModeStatus }"
      :label="selectedRegion || 'Filter by Region'"
      :content-style="{
        backgroundColor: getDarkModeStatus ? '#2b3945' : '#fafafa',
      }"
      no-caps
    >
      <q-list class="region-element-parent">
        <q-item
          clickable
          v-close-popup
          @click="onItemClick(region)"
          v-for="(region, index) in regions"
          :key="index"
          class="region-element"
        >
          <q-item-section>
            <q-item-label>{{ region }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
  <!--end filter-parent-->
</template>

<style src="./FilterRegion.scss" lang="scss" scoped></style>
<script src="./FilterRegion.js"></script>
