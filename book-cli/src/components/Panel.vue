<template>
<div class="white elevation-2">
    <v-toolbar dark>
        <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
    </v-toolbar>
    <slot>
        No itens on the panel
    </slot>
</div>
</template>
<script>
export default {
  props: [
    'title'
  ]
}
</script>
