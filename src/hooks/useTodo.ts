
import {ref,watch} from 'vue'

function useTodo(key:string,value?:any){
    let data=ref(value);
        if(value){
            window.localStorage.setItem(key,JSON.stringify(value))
        }else{
            data.value=JSON.parse(window.localStorage.getItem(key)||'0')
        }
        watch(data,(newValue)=>{
            window.localStorage.setItem(key,JSON.stringify(newValue))
        })
        return data
}


export default useTodo