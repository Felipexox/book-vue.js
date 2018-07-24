<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar dark>
          <v-toolbar-title class="white--text">Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-4 pb-4">
          <v-text-field
              label="email"
              v-model="email"
              placeholder="Ex: abcde@gmail.com">
          </v-text-field>
          <br>
          <v-text-field
            label = "Password"
            :append-icon="show ? 'visibility_off' : 'visibility'"
            :type = "show ? 'text' : 'password'"
            placeholder = "Ex: aab156866"
            v-model="password"
            @click:append="show = !show"
          ></v-text-field>
          <br>
          <div class="error" v-html="error"/>
          <v-btn class="cyan" @click="register">Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      show: false,
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.error = null
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error{
    color: red;
  }
</style>
