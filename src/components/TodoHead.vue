<template>
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" @keyup.enter="addThis" autofocus autocomplete="off" placeholder="What needs to be done?" />
    </header>
</template>

<script setup lang="ts">
import useTodoStore from '../store/useTodoStore'


let {addTodos}=useTodoStore()



let addThis=(e:any)=>{
  if(e.target.value){
    let obj={
      id:Date.now()+'',
      title:e.target.value+'',
      done:false
    }
    addTodos(obj);
  }
  e.target.value=''
  
}


</script>

<style scoped lang="less">

</style>