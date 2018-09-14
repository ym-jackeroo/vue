<template>
    <div>
        <!-- <h1>我是首页</h1>
        <router-link :to="{path: '/main/login', query: {userinfo: 'name is yuehan'}}">
            跳转到登录
        </router-link>
        <button @click="handleGetdata">发送数据</button>
        <button @click="getJsonp">请求jsonp数据</button>
        <button @click="getNoSimple">非简单请求</button>
        <button @click="handleVue">使用vue脚手架跨域</button> -->

        <div style="border:1px solid #000; display:flex;">
            <comA></comA>
            <comB></comB>
            <h2>单价：{{price}}</h2>
            <h2>{{msg}}</h2>
        </div>
        <input type="text" v-model="count">
        <button @click="CHANGE_COUNT(count)">改变</button>
        <button @click="hanldeAsync">异步操作</button>
    </div>
</template>

<script>
import comA from './comA'
import comB from './comB'
import axios from 'axios'
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'

    export default {
        data() {
            return {
                count: 0,
                msg: ""
            }
        },
        created() {
            this.$bus.$on('toData1',(msg1) => {
                this.msg = msg1
            })
        },
        name: "home",
        components: {
            comA,
            comB
        },
        methods: {
            handleGetdata(){
                axios.get('http://localhost:3000/getMsg', {
                    withCredentials:true
                }).then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
            },
            getJsonp(){
                let script = document.createElement('script')
                let body = document.body
                script.src = 'http://localhost:3000/getJsonp?callback=getData'
                body.appendChild(script)
            },
            getNoSimple(){
                axios.post('http://localhost:3000/noSimple', {username: "王大锤"},{
                    withCredentials:true
                    }).then(res => {
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
            },
            handleVue(){
                axios.get('/api/getMsg').then(res => {
                    console.log(res)
                })
            },
            ...mapMutations(['CHANGE_COUNT']),
            changeCount(){
                this.$store.commit('CHANGE_COUNT', this.count)
            },
            hanldeAsync(){
                // setTimeout(() => {
                //     this.CHANGE_COUNT(this.count)
                // },2000)
                this.$store.dispatch('handleAsyncActions', this.count)
            }
        },
        computed: {
            ...mapState(['price'])
        }
    }
</script>

<style scoped> 
    h2{
        height: 50px;
        line-height: 50px;
        margin-left: 50px;
    }
</style>
