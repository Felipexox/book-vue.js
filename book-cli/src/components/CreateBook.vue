<template>
    <v-layout>
        <v-flex xs4>
            <panel title="Create Book">
                <div class="pl-4 pr-4 pt-4 pb-4">
                    <v-text-field
                        label="Title"
                        v-model="title"
                    ></v-text-field>
                    <v-text-field
                        label="Launch Date"
                        v-model="launchDate"
                    ></v-text-field>
                    <v-btn
                        @click="register"
                    > Save </v-btn>
                </div>
            </panel>
        </v-flex>
        <v-flex xs8  class="ml-4">
            <panel title="Synopsis">
                <v-text-field
                    multi-line
                    v-model="synopsis"
                ></v-text-field>
            </panel>
        </v-flex>
    </v-layout>
</template>
<script>
import Panel from '@/components/Panel'
import BooksServices from '@/services/BooksServices'
export default {
  data () {
    return {
      title: '',
      synopsis: '',
      launchDate: ''
    }
  },
  components: {
    Panel
  },
  methods: {
    async register () {
      const callBack = await BooksServices.registerBook({
        title: this.title,
        synopsis: this.synopsis,
        launchDate: this.launchDate
      })
      console.log(callBack)
    }
  }
}
</script>
