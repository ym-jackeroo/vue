<template>
    <div>
        <h1>
            小计：{{count*price}}
        </h1>
        <h2>
            {{msg}}
        </h2>
    </div>
</template> 

<script>
    // import bus from '../bus'
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                msg: ""
            }
        },
        created() {
            this.$bus.$on('toData', (msg) => {
                this.msg = msg
            })
        },
        name: "comA",
        computed: {
            total() {
                return this.$store.state.price * this.$store.state.count
            },
            ...mapState(['count', 'price'])
        }
    }
</script>

<style scoped>
div{
    width: 200px;
}
h1{
    height: 50px;
    line-height: 50px;
}
</style>
