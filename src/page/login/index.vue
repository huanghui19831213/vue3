<template>
    <div class="login">
        <div class="login_div">
            <a-input @change="handlerChange"></a-input>
            <a-button type="primary" @click="login">登陆</a-button>
        </div>
    </div>
</template>
<script>
import {ref,getCurrentInstance} from 'vue';
import { useStore } from "vuex";
export default {
    setup(props,context) {
        console.log(props,context)
        const { ctx } = getCurrentInstance();
        const store = useStore()
        let username = ref('')
        const handlerChange=(e)=>{
            username.value=e.target.value
        }
        const login=()=>{
            store.commit('login',username)
            ctx.$root.$router.push({path:'/home'})
        }
        return{
            handlerChange,login,username
        }
    }
}
</script>
<style lang="scss">
    .login{
        padding-top:80px;
        box-sizing:border-box;
        position:fixed;
        top:0px;
        height:100%;
        width:100%;
        .login_div{
            width:600px;
            height:100%;
            margin: 0 auto;
            display:flex;
            align-items:center;
            padding-top:80px;
            padding-bottom:120px;
            >*{
                height:80px !important;
                line-height:80px !important;
            }
        }
        
        input{
            flex:1;
            margin-right:10px;
        }
        button{
            padding-left:40px;
            padding-right:40px;
            font-size:20px;
        }
    }
</style>