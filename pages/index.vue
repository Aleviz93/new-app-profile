<template>
  <div class="content-wrapper">
    <nav class="navbar navbar-light bg-light">
      <span class="navbar-text">{{ user.name }}</span>
    </nav>
    <div class="content">
      <CustomForm v-if="isEmptyObject($store.state.profile.user)" @edit="emitFormChange" />
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" scoped lang="scss"></style>
