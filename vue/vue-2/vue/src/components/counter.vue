<template>
    <div>
        <button @click="handleReduce">
           - 
        </button>
        <strong>{{$store.state.count}}</strong>
        <button @click="handleAdd">
            +
        </button>
    </div>
</template>

<script>
    export default {
        methods: {
            handleAdd() {
               this.$store.commit('ADD_COUNT')
            },
            handleReduce() {
                this.$store.commit('REDUCE_COUNT')
            }
        }
    }
</script>

<style scoped>
    button{
        height: 50px;
        width: 50px;
        font-size: 30px;
        line-height: 50px;
    }
    strong{
        font-size: 30px;
        line-height: 50px;
        width: 40px;
        display: inline-block;
        text-align: center;
    }
</style>

