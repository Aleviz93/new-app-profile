import Vue from 'vue'
import VeeValidate from 'vee-validate'

import ru from 'vee-validate/dist/locale/ru'
import en from 'vee-validate/dist/locale/en'

Vue.use(VeeValidate, {
  locale: 'ru',
  dictionary: {
    en: { messages: en },
    ru: { messages: ru }
  }
})

VeeValidate.Validator.extend('name', {
  getMessage: () => 'Введите допустимые символы',
  validate: (value) => {
    return /^([a-zA-Zа-яА-Я\- ]+)$/g.test(value)
  }
})

VeeValidate.Validator.extend('phone', {
  getMessage: () => 'Введите корректный телефон',
  validate: value => value.length === 16
})
