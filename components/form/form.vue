<template>
  <div class="custom-form">
    <form :data-vv-scope="scope" @submit.prevent="submit">
      <div class="form-group">
        <label>{{ $t('username') }}</label>
        <input
          v-model="profile.username"
          v-validate="'required|name'"
          name="username"
          type="text"
          class="form-control"
          :placeholder="$t('enter') + ' ' + $t('username')"
        >
        <small class="text-danger">
          <span>{{ errors.first(scope + '.username') }}</span>
        </small>
      </div>
      <div class="form-group">
        <label>{{ $t('name') }}</label>
        <input
          v-model="profile.name"
          v-validate="'required|name'"
          name="Name"
          type="text"
          class="form-control"
          :placeholder="$t('enter') + ' ' + $t('name')"
        >
        <small class="text-danger">
          <span>{{ errors.first(scope + '.Name') }}</span>
        </small>
      </div>
      <div class="form-group">
        <label>{{ $t('email') }}</label>
        <input
          v-model="profile.email"
          v-validate="'required|email'"
          name="email"
          type="email"
          class="form-control"
          :placeholder="$t('enter') + ' ' + $t('email')"
        >
        <small class="text-danger">
          <span>{{ errors.first(scope + '.email') }}</span>
        </small>
      </div>
      <div class="form-group">
        <label>{{ $t('phone') }}</label>
        <input
          v-model="profile.phone"
          v-validate="'required'"
          name="phone"
          type="text"
          v-mask="'+7 ### ###-##-##'"
          class="form-control"
          :placeholder="$t('enter') + ' ' + $t('phone')"
        >
        <small class="text-danger">
          <span>{{ errors.first(scope + '.phone') }}</span>
        </small>
      </div>
      <div class="button-block">
        <button class="btn btn-primary" :disabled="proccesing" :submit="true">
          {{ $t('save') }}
        </button>
        <div role="group" aria-label="Basic example">
          <nuxt-link :to="switchLocalePath('ru')">
            <button type="button" class="btn btn-outline-primary">
              RU
            </button>
          </nuxt-link>
          <nuxt-link :to="switchLocalePath('en')">
            <button type="button" class="btn btn-outline-primary">
              EN
            </button>
          </nuxt-link>
        </div>
      </div>
      <!-- <div v-if="proccesing" class="spinner-border spinner-border-sm" role="status">
        <span class="sr-only">Loading...</span>
      </div>-->
    </form>
  </div>
</template>

<script src="./form.js"></script>
<style src="./form.scss" scoped lang="scss"></style>
