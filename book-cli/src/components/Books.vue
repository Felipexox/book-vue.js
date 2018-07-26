<template>
    <v-layout>
        <v-flex xs6 offset-xs3>
            <panel title="Books">
                <div v-for="book in books" :key="book.title">
                    {{book.title}}
                    {{book.synopsis}}
                </div>
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
      books: null
    }
  },
  async mounted () {
    this.books = (await BooksServices.getAllBooks()).data
  },
  components: {
    Panel
  }
}
</script>
