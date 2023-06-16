<script>
import InputText from 'primevue/inputtext';
import Button from "primevue/button";
import Card from "primevue/card";
import Divider from "primevue/divider";
import { ref } from 'vue';
import FontService from './services/FontService'

export default {
  name: "Fonts",
  data() {
    return {
      value: ref(null),
      fonts: null
    };
  },
  components: {
    InputText,
    Button,
    Card,
    Divider,
  },
  methods: {
    handleLink(link) {
      window.open(link)
    }
  },
  mounted() {
    FontService.getProducts().then((data) => (this.fonts = data));
  },
};

</script>

<template>
  <div class="w-screen min-h-screen">
    <header class="flex align-items-center justify-content-center gap-5">
      <img src="../public/Logo.png" alt="Logo" width="50">
      <h1>Which Fonts Match?</h1>
    </header>

    <main>
      <span class="p-input-icon-left">
        <i class="pi pi-search"></i>
        <InputText v-model="value" placeholder="Search fonts" />
      </span>
    </main>
  </div>
</template>

<style></style>
