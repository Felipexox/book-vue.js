<template>
    <v-layout>
        <v-flex xs6 offset-xs3>
            <panel title="Login">
                <div class="pl-4 pr-4 pt-4 pb-4">
                    <v-text-field
                        label="Email"
                        type="text"
                        placeholder="Ex: abcde@gmail.com"
                        v-model="email"
                    ></v-text-field>
                    <br>
                    <v-text-field
                        label="Password"
                        :append-icon="show ? 'visibility_off' : 'visibility'"
                        :type="show ? 'text' : 'password'"
                        v-model="password"
                        @click:append="show = !show"
                    ></v-text-field>
                    <br>
                    <v-btn dark @click="login">
                        Login
                    </v-btn>
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
      email: '',
      password: '',
      show: false
    }
  },
  components: {
    Panel
  },
  methods: {
    async login () {
      try {
        const callBack = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', callBack.data.token)
        this.$store.dispatch('setUser', callBack.data.user)
      } catch (err) {
        console.log('error')
      }
    }
  }
}
</script>
