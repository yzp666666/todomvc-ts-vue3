
<template>
  <section class="todoapp">
    <TodoHead/>
    <section class="main">
      <input id="toggle-all" @change="changeAll" :checked="isAllChecked" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- :class="{ completed: item.done }" -->
        <TodoMain
          v-for="(todo,index) in showTodo"
          :key="index"
          :todo="todo"
          :index="index"
          :class="{ completed: todo.done }"
        />
      </ul>
    </section>
    
    <TodoFoot/>

  </section>
</template>


<script setup lang="ts">
import TodoHead from './components/TodoHead.vue' 
import TodoMain from './components/TodoMain.vue' 
import TodoFoot from './components/TodoFoot.vue' 
import useTodoStore from './store/useTodoStore.js'
import {storeToRefs} from 'pinia'
import {watchEffect} from 'vue'
import useTodo from './hooks/useTodo'

let store=useTodoStore()

let {changeAllDone}=store
let {isAllChecked,showTodo,todoList}=storeToRefs(store)


let changeAll=(e:any)=>{
    changeAllDone(e.target.checked)
}

//监听副作用
watchEffect(()=>{
    store.$subscribe((mutations,state)=>{
        useTodo('todomvc',todoList.value)
    })
})

</script>


<style scoped>

</style>
