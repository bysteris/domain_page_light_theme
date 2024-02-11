<template>
  <form action="">
    <h3 class="txt-center">{{ $t("formTitle") }}</h3>
    <div class="form-controls">
      <input type="text" :placeholder="$t(`namePlaceholder`)" required />
      <input type="email" :placeholder="$t(`emailPlaceholder`)" required />
      <!-- <input type="tel" :placeholder="$t(`phonePlaceholder`)" required />
      <vue-tel-input v-model="phone" :inputOptions="options"></vue-tel-input> -->

      <vue-tel-input v-model="phone" :inputOptions="options"></vue-tel-input>

      <input type="number" :placeholder="$t(`pricePlaceholder`)" required />
      <textarea rows="5" :placeholder="$t(`messagePlaceholder`)"></textarea>
      <label for="checkbox_form">
        <input type="checkbox" id="checkbox_form" checked />
        <span>
          {{ $t("checkboxTextOne") }}
          <a href="" target="_blank">{{ $t("checkboxTextTwo") }}</a>
        </span>
      </label>
      <button class="btn btn-submit">{{ $t("btnSubmit") }}</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      phone: "",
      options: {
        placeholder: this.$t(`phonePlaceholder`),
      },
    };
  },
  // methods: {
  //   placeholder() {
  //     return this.$t("phonePlaceholder");
  //   },
  // },
};
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: calc(20px + (40 - 20) * ((100vw - 900px) / (1920 - 900)));
  border-radius: 20px;
  box-shadow: 2px 4px 5px 2px rgba(0, 0, 0, 0.25);
  background: linear-gradient(225deg, #29d1a9 0%, #0d4280 100%);

  @media (max-width: 900px) {
    padding: 20px 10px 10px;
  }

  .form-controls {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 900px) {
      gap: 10px;
    }

    input,
    textarea {
      outline: none;
      border: none;
      display: flex;
      align-items: center;
      border-radius: 15px;
      padding: 11px 20px;

      @media (max-width: 900px) {
        border-radius: 10px;
        padding: 8px 12px;
      }

      &::placeholder {
        font-size: 14px;

        @media (max-width: 900px) {
          font-size: 12px;
        }
      }

      &[type="checkbox"] {
        position: relative;
        min-height: 20px;
        max-height: 20px;
        min-width: 20px;
        max-width: 20px;
        padding: 0;
        border-radius: 3px;
        color: #ffffff;
        border: 1px solid #ffffff;
        background-color: #ffffff;
        cursor: pointer;
        -webkit-appearance: none;

        @media (max-width: 900px) {
          min-height: 15px;
          max-height: 15px;
          min-width: 15px;
          max-width: 15px;
        }

        &::after {
          content: "";
          position: absolute;
          top: -1px;
          left: -1px;
          height: 20px;
          width: 20px;
          background: #ffffff url(../assets/check.svg) center no-repeat;
          border-radius: 3px;
          transition: 0.2s;
          opacity: 0;

          @media (max-width: 900px) {
            height: 15px;
            width: 15px;
            background-size: contain;
          }
        }

        &:checked::after {
          opacity: 1;
        }
      }
    }

    textarea {
      resize: none;
    }
  }

  label {
    display: flex;
    align-items: center;
    grid-gap: 5px;
    cursor: pointer;

    span {
      display: block;
      font-size: 12px;

      @media (max-width: 900px) {
        font-size: 10px;
      }
    }

    a {
      color: inherit;
      text-decoration: underline;
    }
  }

  .btn-submit {
    padding: 12px;
  }
}
</style>
