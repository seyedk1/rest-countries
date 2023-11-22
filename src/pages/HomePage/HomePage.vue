<template>
  <div id="show-countries-parent">
    <div class="home-page-header-parent">
      <!--start search countries component-->
      <SearchCountries></SearchCountries>
      <!--end search countries component-->

      <FilterRegion></FilterRegion>
    </div>

    <div ref="scrollTargetRef">
      <q-infinite-scroll
        :offset="getOffset"
        @load="loadMore"
        v-if="getOffset < getCountriesList.length"
        class="countries-card-parent"
      >
       <CountryCard></CountryCard>

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
