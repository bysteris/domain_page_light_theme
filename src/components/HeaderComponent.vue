<template>
  <header>
    <div class="logo">
      <a href="/">
        <img src="../assets/logo.svg" />
      </a>
    </div>
    <div class="btn-lang_container">
      <button
        id="showLangList"
        class="btn btn-lang_selection"
        @click="show = !show"
      >
        {{ $i18n.locale }}
      </button>

      <transition name="slide-fade">
        <div class="language-list" v-if="show">
          <div class="language-list_container">
            <button
              id="AR"
              class="btn btn-lang"
              @click="
                ($i18n.locale = `ar`),
                  (show = !show),
                  currentLocale(),
                  reloadPage()
              "
            >
              AR - اَلْعَرَبِيَّةُ
            </button>
            <button
              id="CN"
              class="btn btn-lang"
              @click="
                ($i18n.locale = `cn`),
                  (show = !show),
                  currentLocale(),
                  reloadPage()
              "
            >
              CN - 中文
            </button>
            <button
              id="DE"
              class="btn btn-lang"
              @click="
                ($i18n.locale = `de`),
                  (show = !show),
                  currentLocale(),
                  reloadPage()
              "
            >
              DE - Deutsch
            </button>
            <button
              id="EN"
              class="btn btn-lang"
              @click="
                ($i18n.locale = `en`),
                  (show = !show),
                  currentLocale(),
                  reloadPage()
              "
            >
              EN - English
            </button>
            <button
              id="ES"
              class="btn btn-lang"
              @click="
                ($i18n.locale = `es`),
                  (show = !show),
                  currentLocale(),
                  reloadPage()
              "
            >
              ES - Español
            </button>
            <button
              id="FR"
              class="btn btn-lang"
              @click="
                ($i18n.locale = `fr`),
                  (show = !show),
                  currentLocale(),
                  reloadPage()
              "
            >
              FR - Français
            </button>
            <button
              id="IT"
              class="btn btn-lang"
              @click="
                ($i18n.locale = `it`),
                  (show = !show),
                  currentLocale(),
                  reloadPage()
              "
            >
              IT - Italian
            </button>
            <button
              id="PL"
              class="btn btn-lang"
              @click="
                ($i18n.locale = `pl`),
                  (show = !show),
                  currentLocale(),
                  reloadPage()
              "
            >
              PL - Polski
            </button>
            <button
              id="PT"
              class="btn btn-lang"
              @click="
                ($i18n.locale = `pt`),
                  (show = !show),
                  currentLocale(),
                  reloadPage()
              "
            >
              PT - Português
            </button>
            <button
              id="RU"
              class="btn btn-lang"
              @click="
                ($i18n.locale = `ru`),
                  (show = !show),
                  currentLocale(),
                  reloadPage()
              "
            >
              RU - Русский
            </button>
            <button
              id="TR"
              class="btn btn-lang"
              @click="
                ($i18n.locale = `tr`),
                  (show = !show),
                  currentLocale(),
                  reloadPage()
              "
            >
              TR - Türkiye
            </button>
            <button
              id="UA"
              class="btn btn-lang"
              @click="
                ($i18n.locale = `ua`),
                  (show = !show),
                  currentLocale(),
                  reloadPage()
              "
            >
              UA - Українська
            </button>
            <button
              id="VN"
              class="btn btn-lang"
              @click="
                ($i18n.locale = `vn`),
                  (show = !show),
                  currentLocale(),
                  reloadPage()
              "
            >
              VN - Tiếng Việt
            </button>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponenet,",
  el: "#showLangList",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    currentLocale() {
      localStorage.setItem("locale", this.$i18n.locale);
    },
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  .logo img {
    width: 100%;

    @media (max-width: 900px) {
      width: calc(180px + (250 - 180) * ((100vw - 375px) / (900 - 375)));
    }
  }
}

.btn-lang_container {
  position: relative;

  .btn-lang_selection {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: #29d1a9;
    font-size: 16px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);

    @media (max-width: 900px) {
      width: 40px;
      height: 40px;
      font-size: 14px;
    }
  }
}

.language-list {
  position: absolute;
  top: 100%;
  right: -30%;
  margin-top: 10px;

  .language-list_container {
    display: grid;
    grid-auto-flow: row;
    grid-gap: 10px;
    padding: 12px;
    background: #29d1a9;
    border-radius: 10px;

    .btn-lang {
      font-size: 14px;
      text-wrap: nowrap;
      padding: 5px;
      background: #62e5c6;
      min-width: 140px;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.4s ease-in;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
