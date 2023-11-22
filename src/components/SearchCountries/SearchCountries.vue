<template>
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
</template>

<style src="./SearchCountries.scss" lang="scss" scoped></style>
<script src="./SearchCountries.js"></script>
