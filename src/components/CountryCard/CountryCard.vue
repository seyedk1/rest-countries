<template>
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
</template>

<style src="./CountryCard.scss" lang="scss" scoped></style>
<script src="./CountryCard.js"></script>
