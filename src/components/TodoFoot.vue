<template>
    <footer class="footer">
      <span class="todo-count"> <strong></strong> {{ doneLeft }} item left </span>
      <ul class="filters">
        <li>
          <a href="" 
          @click.prevent="changevisibility('All')"
          :class="{selected:visibility=='All'}"
          >All</a>
        </li>
        <li>
          <a href="" 
          @click.prevent="changevisibility('Active')"
          :class="{selected:visibility=='Active'}"
          >Active</a>
        </li>
        <li>
          <!-- :class="{ selected: visibility == 'Completed'} -->
          <a href=""
          @click.prevent="changevisibility('Completed')"
          :class="{selected:visibility=='Completed'}"
          >Completed</a>
        </li>
      </ul>
      <button class="clear-completed" v-show="clearShow" @click="deleteAll">
        Clear completed
      </button>
    </footer>
</template>

<script setup lang="ts">
import useTodoStore from '../store/useTodoStore.js'
import {storeToRefs} from 'pinia'

let store=useTodoStore()
let {changevisibility,deleteAll}=store
let {doneLeft,clearShow,visibility}=storeToRefs(store)

</script>

<style scoped lang="less">

</style>