
import {defineStore} from 'pinia'

import {Todo,TodoList} from '../types/todoType.d'
import useTodo from '../hooks/useTodo'


const useTodoStore=defineStore('todomvc',{
    state(){
        return{
            todoList:useTodo('todomvc').value||[],
            visibility:'All'
            
        }
    },
    actions:{
        //改变todo状态
        changeDone(index:number,flag:boolean){
            this.todoList[index].done=flag
        },
        //改变所有状态
        changeAllDone(flag:boolean){
            this.todoList.forEach((item:any)=>item.done=flag)
        },
        //删除
        deleteTodo(index:number){
            this.todoList.splice(index,1)
        },
        //全删
        deleteAll(){
            this.todoList=this.todoList.filter((item:any)=>!item.done)
        },
        //改变状态
        changevisibility(visibility:string){
            this.visibility=visibility
        },
        //编辑
        editTodoTitle(index:number,title:string){
            this.todoList[index].title=title;
        },
        //添加
        addTodos(obj:Todo){
            let flag=this.todoList.some((item:any)=>item.title==obj.title)
            if(!flag){
                this.todoList.push(obj)
            }else{
                alert('请勿重复添加哦~')
            }
        }

    },
    getters:{
        doneLeft():number{
            return this.todoList.filter((item:any)=>!item.done).length
        },
        isAllChecked():boolean{
            return this.todoList.every((item:any)=>item.done)
        },
        clearShow():boolean{
            return this.todoList.some((item:any)=>item.done)
        },
        showTodo():TodoList{
            if(this.visibility=='Active'){
                return this.todoList.filter((item:any)=>!item.done)
            }else if(this.visibility=='Completed'){
                return this.todoList.filter((item:any)=>item.done)
            }
            return this.todoList
        }
    }
})


export default useTodoStore