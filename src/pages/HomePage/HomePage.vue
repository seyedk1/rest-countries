<template>
  <div id="show-countries-parent">
    <div class="home-page-header-parent">
      <!--start search-input-parent-->
      <div class="search-input-parent">
        <q-select
          v-model="model"
          placeholder="Search for a country..."
          use-input
          borderless
          hide-selected
          clearable
          fill-input
          input-debounce="1000"
          :options="options"
          @input-value="setModel"
          @update:model-value="handleOptionClick"
          :hide-dropdown-icon="true"
          class="searh-country-input"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>

          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey"> No results </q-item-section>
            </q-item>
          </template>

          <template v-slot:option="{ opt, selected, toggleOption, index }">
            <q-item clickable @click="handleOptionClick(opt)">
              <q-item-section>{{ opt.label }}</q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
      <!--end search-input-parent-->

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
    </div>

    <div ref="scrollTargetRef">
      <q-infinite-scroll
        :offset="getOffset"
        @load="loadMore"
        v-if="getOffset < getCountriesList.length"
        class="countries-card-parent"
      >
        <q-card
          class="country-card"
          flat
          bordered
          v-for="(country, index) in getVisibleCountriesList"
          :key="index"
          @click="navigateToCountryDetails(country.name.common)"
        >
          <q-img
            :src="country?.flags?.png"
            spinner-color="black"
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
                <q-item-label
                  caption
                  class="items-value"
                  v-for="(capital, i) in country.capital"
                  :key="i"
                >
                  {{ capital }}</q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>

        <template v-slot:loading>
          <div class="row justify-center q-my-md" loading-parent>
            <q-spinner
              :color="getDarkModeStatus ? 'primary' : 'secondary'"
              name="dots"
              size="40px"
            />
          </div>
        </template>
      </q-infinite-scroll>
    </div>
  </div>
</template>

<style src="./HomePage.scss" lang="scss" scoped></style>
<script src="./HomePage.js"></script>
