<template>
  <div class="content-wrapper">
    <div class="title">
      New Profile
    </div>
    <div class="form-profile">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">UserName</label>
          <input
            v-model="profile.username"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter UserName"
          >
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            v-model="profile.name"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
          >
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            v-model="profile.email"
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          >
          <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Phone</label>
          <input
            v-model="profile.phone"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Phone"
          >
        </div>
        <button class="btn btn-primary" @click.prevent="changeProfile()">
          Change
        </button>
      </form>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" scoped lang="scss"></style>
