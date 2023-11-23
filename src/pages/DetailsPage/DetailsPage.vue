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
        @click="backBtn()"
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
          <CountryDetails></CountryDetails>
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
