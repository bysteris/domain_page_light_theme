<template>
  <div class="wrapper">
    <HeaderComponenet></HeaderComponenet>
    <MainComponent domain-name="%domain_name%"></MainComponent>
    <FooterComponent
      year="2024"
      :copyright-text="$t(`footerText`)"
      company-name="SigmaParking"
    ></FooterComponent>
  </div>
</template>

<script>
import HeaderComponenet from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponenet,
    FooterComponent,
    MainComponent,
  },
};
</script>

<style>
#app {
  height: inherit;
}
</style>
