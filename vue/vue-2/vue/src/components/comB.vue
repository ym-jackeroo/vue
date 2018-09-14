<template>
    <div>
        <button @click="handleReduce" class="btn">
           - 
        </button>
        <strong>{{count}}</strong>
        <button @click="handleAdd" class="btn">
            +
        </button>
        <button @click="handleClick">
            兄弟组件传值
        </button>
        <button @click="handleClick1">
            父子组件传值
        </button>
    </div>
</template>

<script>
    // import bus from '../bus'
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                msg: '来自兄弟组件b的内容',
                msg1: '来自子组件b的内容'
            }
        },
        name: "comB",
        methods: {
            handleReduce() {
                this.$store.commit('REDUCE_COUNT')
            },
            handleAdd() {
                this.$store.commit('ADD_COUNT')
            },
            handleClick() {
                this.$bus.$emit('toData', this.msg)
            },
            handleClick1() {
                this.$bus.$emit('toData1', this.msg1)
            }
        },
        computed: {
            ...mapState(['count'])
        }
    }
</script>

<style scoped>
    .btn{
        height: 50px;
        width: 50px;
        font-size: 30px;
        line-height: 50px;
    }
    strong{
        font-size: 30px;
        line-height: 50px;
        
        display: inline-block;
        text-align: center;
    }
</style>

