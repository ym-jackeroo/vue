<template>
    <div class="container">
        <div class="header">
            <h1>头部</h1>
        </div>
        <div class="nav">
            <ul>
                <li>
                    <router-link :to="{name: 'home1'}">首页</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'about1'}">详情页</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'login1'}">登录页</router-link>
                </li>
            </ul>
        </div>
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .header{
        text-align: center;
        padding-left: 200px;
        background-color: #0ff;
    }

    .nav{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 998;
        width: 200px;
        background-color: #273647;
    }

    .main-content{
        padding-left: 200px;
        background-color: #fff;
    }

    .nav li{
        line-height: 50px;
        height: 50px;
        text-align: center;
        width: 200px;
    }

    a{
        text-decoration: none;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
    }
</style>


