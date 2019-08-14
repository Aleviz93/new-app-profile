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
            v-validate="'required|name'"
            name="username"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter UserName"
          >
          <small class="text-danger">
            <span>{{ errors.first('username') }}</span>
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            v-model="profile.name"
            v-validate="'required|name'"
            name="Name"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
          >
          <small class="text-danger">
            <span>{{ errors.first('Name') }}</span>
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            v-model="profile.email"
            v-validate="'required|email'"
            name="email"
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          >
          <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your email with anyone else.</small>

          <small class="text-danger">
            <span>{{ errors.first('email') }}</span>
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Phone</label>
          <input
            v-model="profile.phone"
            v-validate="'required|phone'"
            name="phone"
            type="text"
            class="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter Phone"
          >
          <small class="text-danger">
            <span>{{ errors.first('phone') }}</span>
          </small>
        </div>
        <button class="btn btn-primary" :disabled="proccesing" @click="changeProfile()">
          Change
        </button>
        <div v-if="proccesing" class="spinner-border spinner-border-sm" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" scoped lang="scss"></style>
