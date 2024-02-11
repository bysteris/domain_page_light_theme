<template>
  <footer>
    <p>
      <strong>{{ year }}</strong>
      {{ copyrightText }}
      <strong>{{ companyName }}</strong>
    </p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  props: {
    year: Number,
    copyrightText: String,
    companyName: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
footer {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  margin-top: 40px;
  border-top: 1px solid #fff;

  p {
    line-height: 1.3;
  }

  @media (max-width: 900px) {
    margin-top: 20px;
  }
}

.light footer {
  border-top: 1px solid #122432;

  p {
    color: #122432;
  }
}
</style>
