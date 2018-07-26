<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
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
          <v-btn dark @click="register">Register</v-btn>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
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
        const callBack = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', callBack.data.token)
        this.$store.dispatch('setUser', callBack.data.user)
        this.error = null
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
  .error{
    color: red;
  }
</style>
