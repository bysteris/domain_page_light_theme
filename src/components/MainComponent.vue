<template>
  <main>
    <div class="left_content">
      <h1 class="txt-center">
        {{ $t("domainName") }} <br />
        <span>{{ domainName }}</span> <br />
        {{ $t("sales") }}
      </h1>
      <button class="btn btn-large">{{ $t("btnBuyNow") }}</button>
    </div>
    <div class="right_content">
      <FormComponent></FormComponent>
    </div>
  </main>
</template>

<script>
import FormComponent from "./FormComponent.vue";

export default {
  name: "MainComponent",
  props: {
    domainName: String,
  },
  components: {
    FormComponent,
  },
};
</script>

<style scoped lang="scss">
main {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 40px;
    grid-gap: calc(20px + (40 - 20) * ((100vw - 375px) / (900 - 375)));
  }

  .left_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    @media (max-width: 900px) {
      gap: calc(20px + (40 - 20) * ((100vw - 375px) / (900 - 375)));
    }

    h1 {
      span {
        color: #29d1a9;
      }
    }

    .btn-large {
      display: flex;
      justify-content: center;
      align-content: center;
      padding: 20px 70px;
      font-size: 20px;
      width: 100%;
      width: fit-content;

      @media (max-width: 900px) {
        padding: calc(12px + (20 - 12) * ((100vw - 375px) / (900 - 375)))
          calc(50px + (70 - 50) * ((100vw - 375px) / (900 - 375)));
        font-size: calc(16px + (20 - 16) * ((100vw - 375px) / (900 - 375)));
        width: 100%;
      }
    }
  }
}
.light h1 {
  color: #122432;
}
</style>
