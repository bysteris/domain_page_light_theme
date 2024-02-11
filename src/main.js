import { createApp } from 'vue'
import App from './App.vue'

import "normalize.css"
import "./assets/main.scss"

import VueTelInput from 'vue-tel-input'
import './assets/vue-tel-input.css'


import { createI18n } from 'vue-i18n'
import ar from './locale/ar.json'
import cn from './locale/cn.json'
import de from './locale/de.json'
import en from './locale/en.json'
import es from './locale/es.json'
import fr from './locale/fr.json'
import it from './locale/it.json'
import pl from './locale/pl.json'
import pt from './locale/pt.json'
import ru from './locale/ru.json'
import tr from './locale/tr.json'
import ua from './locale/ua.json'
import vn from './locale/vn.json'

const localStorageLang = localStorage.getItem('locale')

const i18n = createI18n({
    legacy: false,
    locale: localStorageLang || 'en',
    fallbackLocale: 'en',
    messages: {
        ar: ar,
        cn: cn,
        de: de,
        en: en,
        es: es,
        fr: fr,
        it: it,
        pl: pl,
        pt: pt,
        ru: ru,
        tr: tr,
        ua: ua,
        vn: vn,
    }
})

const globalOptions = {
    autoFormat: true,
    mode: 'auto',
    validCharactersOnly: true,
    dropdownOptions: {
        showDialCodeInSelection: false,
    },
    inputOptions: {
        required: true,
    }
};

createApp(App).use(i18n).use(VueTelInput, globalOptions).mount('#app')
