import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

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
