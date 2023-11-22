<template>
  <ul class="ul-details-parent">
    <li class="each-info">
      <!-- {{ info.infoTitle }} <span class="info-value">{{ info.infoValue }}</span> -->
      {{ "Native Name:  " }}
      <span class="info-value" :class="{ 'q-dark': getDarkModeStatus }">{{
        getCountryInformation?.name?.common
      }}</span>
    </li>
    <li class="each-info">
      {{ "Population: " }}
      <span class="info-value" :class="{ 'q-dark': getDarkModeStatus }">{{
        getCountryInformation?.population
      }}</span>
    </li>
    <li class="each-info">
      {{ "region: " }}
      <span class="info-value" :class="{ 'q-dark': getDarkModeStatus }">{{
        getCountryInformation?.region
      }}</span>
    </li>
    <li class="each-info">
      {{ "Sub Region: " }}
      <span class="info-value" :class="{ 'q-dark': getDarkModeStatus }">{{
        getCountryInformation?.subregion
      }}</span>
    </li>
    <li
      class="each-info"
      v-for="(capital, i) in getCountryInformation?.capital"
      :key="i"
    >
      {{ "Capital: " }}
      <span class="info-value" :class="{ 'q-dark': getDarkModeStatus }">{{
        capital
      }}</span>
    </li>

    <li
      class="each-info"
      v-for="(tld, j) in getCountryInformation?.tld"
      :key="j"
    >
      {{ "Top Level Domain: " }}
      <span class="info-value" :class="{ 'q-dark': getDarkModeStatus }">{{
        tld
      }}</span>
    </li>
    <li class="each-info" v-for="(currencyCode, m) in getCurrencies" :key="m">
      {{ "Currencies: " }}
      <span class="info-value" :class="{ 'q-dark': getDarkModeStatus }">{{
        getCountryInformation?.currencies?.[currencyCode]?.name
      }}</span>
    </li>

    <li
      class="each-info"
      v-for="(language, k) in getCountryInformation?.languages"
      :key="k"
    >
      {{ "Top Level Domain: " }}
      <span class="info-value" :class="{ 'q-dark': getDarkModeStatus }">{{
        language
      }}</span>
    </li>
  </ul>
</template>

<style src="./CountryDetails.scss" lang="scss" scoped></style>
<script src="./CountryDetails.js"></script>
