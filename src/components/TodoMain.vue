<template>
        <li class="todo" @dblclick="dbClick">
            <div v-show="!isEdit">
                <input :checked="todo.done" @change="changeThis" class="toggle" type="checkbox" />
                <label>{{ todo.title }}</label>
                <button class="destroy" @click="del(index)"></button>
            </div>
            <input class="edit" type="text" 
            :style="{display: isEdit?'block':'none'}" 
            :value="todo.title"
            ref="editIpt"
            @keyup.enter="editThis"
            @blur="editThis"
            />
        </li>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'
import useTodoStore from '../store/useTodoStore.js'
import {ref,nextTick} from 'vue'

let isEdit=ref(false);
//ref
let editIpt=ref()

//自定义 类型
interface Props{
    todo:{id:string,title:string,done:boolean},
    index:number
}

let {changeDone,deleteTodo,editTodoTitle}=useTodoStore();
const props = defineProps<Props>()


let changeThis=(e:any)=>{
    changeDone(props.index,e.target.checked)
}

//删除
let del=(index:number)=>{
    deleteTodo(index)
}

//双击
let dbClick=()=>{
    isEdit.value=true;
    //自动聚焦
    nextTick(()=>{
        editIpt.value.focus()
    })

}

let editThis=(e:any)=>{
   if(e.target.value){
    editTodoTitle(props.index,e.target.value);
   }
   isEdit.value=false
}

</script>

<style scoped lang="less"></style>