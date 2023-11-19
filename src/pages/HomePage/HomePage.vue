<template>
  <div id="show-countries-parent">
    <div class="home-page-header-parent">
      <!--start search-input-parent-->
      <div class="search-input-parent">
        <q-input
          v-model="selected"
          debounce="500"
          placeholder="Search for a country..."
          class="searh-country-input"
          borderless
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <!--end search-input-parent-->

      <!--start filter-parent-->
      <div class="filter-parent">
        <q-btn-dropdown class="filter-button" label="Filter by Region" no-caps>
          <q-list>
            <q-item
              clickable
              v-close-popup
              @click="onItemClick"
              v-for="(region, index) in regions"
              :key="index"
            >
              <q-item-section>
                <q-item-label>{{ region }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <!--end filter-parent-->
    </div>

    <div class="countries-card-parent">
      <q-card
        class="country-card"
        flat
        bordered
        v-for="(country, index) in getCountriesList.data"
        :key="index"
      >
        <q-img
          :src="country.flags.png"
          spinner-color="white"
          width="270px"
          height="170px"
          img-class="my-custom-image"
          class="rounded-borders img-fuild"
        >
        </q-img>

        <q-list>
          <q-item>
            <q-item-section class="each-card-item">
              <q-item-label class="country-name">{{
                country.name.common
              }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section class="each-card-item">
              <q-item-label>Population: </q-item-label>
              <q-item-label caption class="items-value">
                {{ country.population }}</q-item-label
              >
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section class="each-card-item">
              <q-item-label>Region: </q-item-label>
              <q-item-label caption class="items-value">
                {{ country.region }}</q-item-label
              >
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section class="each-card-item">
              <q-item-label>Capital: </q-item-label>
              <q-item-label caption class="items-value">
                {{ country.capital[0] }}</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
  </div>
</template>

<style src="./HomePage.scss" lang="scss" scoped></style>
<script src="./HomePage.js"></script>
