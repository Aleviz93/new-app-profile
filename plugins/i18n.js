import ru from 'vee-validate/dist/locale/ru'
import en from 'vee-validate/dist/locale/en'
import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'

Vue.use(VeeValidate)

const dictionary = {
  en,
  ru
}

export default function ({ app }) {
  app.i18n.onLanguageSwitched = (oldLocale = false, newLocale) => {
    Validator.localize(newLocale, dictionary[newLocale])
  }
}
