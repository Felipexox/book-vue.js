<template>
  <v-toolbar fixed dark>
    <v-toolbar-title class="white--text">
        <span class="home"
            @click="navigateTo ({name: 'root' }) "> Book Stadium
        </span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat
          v-if="!$store.state.isUserLoggedIn"
          @click="navigateTo ({name: 'login'})"
      > Login </v-btn>
      <v-btn flat
          v-if="!$store.state.isUserLoggedIn"
          @click="navigateTo ({name: 'register'})"
      >  Sign In </v-btn>
      <v-btn flat
          v-if="$store.state.isUserLoggedIn"
          @click="logout"
      >  Logout </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'root'})
    }
  }
}
</script>

<style scoped>
   .home{
        cursor: pointer;
   }
   .home:hover{
       color: gray;
   }
</style>
