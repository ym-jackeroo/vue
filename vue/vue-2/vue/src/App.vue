<template>
  <div id="app">
    <!-- <div>
      <ul>
        <li>
          <router-link :to="{name: 'home'}">首页</router-link>
        </li>
        <li>
          <router-link :to="{name: '详情', params: {id: '我是参数'}}">详情页</router-link>
        </li>
        <li>
          <router-link to="/login">登录</router-link>
        </li>
      </ul>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
    // let date = new Date()
    // date.setMinutes(57)
    // let dateStr = date.toUTCString()
    // console.log(dateStr)
    // let cookie = document.cookie
    // document.cookie = "name=kucha"
    // document.cookie = "sex=man;expires=" + dateStr
    // console.log(document.cookie)

    // function getCookie(){
    //     let obj = {}
    //     let cookieStr = document.cookie
    //     let cookieArr = cookieStr.split(';')
    //     console.log(cookieArr)
    //     cookieArr.forEach(item => {
    //       let tempArr = item.split('=')
    //       let key = tempArr[0].trim()
    //       let value = tempArr[1]
    //       obj[key] = value
    //     })
    //     return obj
    // }
    // let cookieObj = getCookie()
    // console.log(cookieObj)

    function setCookie(key, value, expires) {
      if(!expires) {
        document.cookie = `${key}=${value}`
      }else {
        let date = new Date()
        let unix = date.getTime()
        unix = expires * 1000 + unix

        let newDateStr = new Date(unix).toUTCString()
        document.cookie = `${key}=${value}; expires=${newDateStr}`
      }
    }

    // setCookie('food','cookie','60')
    // setCookie('star','莱昂纳多')

    function removeCookie(key){
      let value = ''
      let date = new Date().getTime()
      date = date - 1000
      let dateStr = new Date(date).toUTCString()
      document.cookie = `${key}=${value}; expires=${dateStr}`
    }

    setTimeout(()=>{
      removeCookie('last')
    },5000)
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
