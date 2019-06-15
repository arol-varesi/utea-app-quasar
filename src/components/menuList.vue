<template>
  <div class="q-mr-md cursor-pointer non-selectable">
    {{menuName}}
    <q-menu>
      <q-list dense style="min-width: 100px">
        <div v-for="pagina in pages" :key='pagina.index'>
          <q-item dense v-if='pagina.menu === menuName' clickable :to='pagina.path' >
            <q-item-section>{{pagina.name}}</q-item-section>
          </q-item>
        </div>
      </q-list>
    </q-menu>
  </div>
</template>

<script>
import routes from '../router/routes'
const pagine = routes[0].children

export default {
  name: 'menuList',
  props: [
    'menuName'
  ],
  data () {
    return {
      pages: pagine
    }
  }
}
</script>

<style>

</style>
