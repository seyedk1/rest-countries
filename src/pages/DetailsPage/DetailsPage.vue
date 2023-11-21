<template>
  <div id="details-page-container">
    <!-- start up-content-parent -->
    <div class="up-content-parent">
      <q-btn
        align="around"
        class="btn-fixed-width back-btn-style"
        :class="{ 'q-dark': getDarkModeStatus }"
        label="Back"
        icon="arrow_back"
        no-caps
        @click="$router.go(-1)"
      />
    </div>
    <!-- end up-content-parent -->

    <!-- start down-content-parent -->
    <div class="down-content-parent">
      <div class="country-image-parent">
        <q-img
          :src="getCountryInformation?.flags?.png"
          spinner-color="white"
          width="500px"
          height="350px"
          img-class="my-custom-image"
          class="rounded-borders img-fuild country-image"
        >
        </q-img>
      </div>

      <div class="country-info-parent">
        <div class="country-name-parent">
          <h4 class="country-name">
            {{ getCountryInformation?.name?.common }}
          </h4>
        </div>

        <div class="info-parent">
          <ul class="ul-details-parent">
            <li class="each-info">
              <!-- {{ info.infoTitle }} <span class="info-value">{{ info.infoValue }}</span> -->
              {{ "Native Name:  " }}
              <span
                class="info-value"
                :class="{ 'q-dark': getDarkModeStatus }"
                >{{ getCountryInformation?.name?.common }}</span
              >
            </li>
            <li class="each-info">
              {{ "Population: " }}
              <span
                class="info-value"
                :class="{ 'q-dark': getDarkModeStatus }"
                >{{ getCountryInformation?.population }}</span
              >
            </li>
            <li class="each-info">
              {{ "region: " }}
              <span
                class="info-value"
                :class="{ 'q-dark': getDarkModeStatus }"
                >{{ getCountryInformation?.region }}</span
              >
            </li>
            <li class="each-info">
              {{ "Sub Region: " }}
              <span
                class="info-value"
                :class="{ 'q-dark': getDarkModeStatus }"
                >{{ getCountryInformation?.subregion }}</span
              >
            </li>
            <li
              class="each-info"
              v-for="(capital, i) in getCountryInformation?.capital"
              :key="i"
            >
              {{ "Capital: " }}
              <span
                class="info-value"
                :class="{ 'q-dark': getDarkModeStatus }"
                >{{ capital }}</span
              >
            </li>

            <li
              class="each-info"
              v-for="(tld, j) in getCountryInformation?.tld"
              :key="j"
            >
              {{ "Top Level Domain: " }}
              <span
                class="info-value"
                :class="{ 'q-dark': getDarkModeStatus }"
                >{{ tld }}</span
              >
            </li>
            <li
              class="each-info"
              v-for="(currencyCode, m) in getCurrencies"
              :key="m"
            >
              {{ "Currencies: " }}
              <span
                class="info-value"
                :class="{ 'q-dark': getDarkModeStatus }"
                >{{
                  getCountryInformation?.currencies?.[currencyCode]?.name
                }}</span
              >
            </li>

            <li
              class="each-info"
              v-for="(language, k) in getCountryInformation?.languages"
              :key="k"
            >
              {{ "Top Level Domain: " }}
              <span
                class="info-value"
                :class="{ 'q-dark': getDarkModeStatus }"
                >{{ language }}</span
              >
            </li>
          </ul>
        </div>

        <div class="border-countries-parent">
          <span class="title"> Border Countries: </span>
          <div class="btn-group-parent">
            <q-btn
              v-for="(name, index) in getCountryInformation.borders"
              :key="index"
              class="btn-fixed-width border-country-btn-style"
              :class="{ 'q-dark': getDarkModeStatus }"
              :label="name"
              no-caps
              @click="navigateToCountryDetails(name)"
            />
          </div>
        </div>
      </div>

      <q-inner-loading
        :showing="showing"
        size="100px"
        color="secondary"
      ></q-inner-loading>
    </div>
    <!-- end down-content-parent -->
  </div>
</template>

<style src="./DetailsPage.scss" lang="scss" scoped></style>
<script src="./DetailsPage.js"></script>
