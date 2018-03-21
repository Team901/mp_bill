<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <ul>
        <li v-for="(app,i) in appList">
          <div class="appIcon" @click="toAppViewTap(app.url)">
              <img class=""  :src="app.imgSrc" background-size="cover" />
          </div>
          <div class="appName">
            <span>{{app.name}}</span>
          </div>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Mini Programs of 901',
      userInfo: {},
      appList:[],
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/logs'
      wx.navigateTo({ url })
    },
    toAppViewTap (url) {
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  },
  mounted(){
    let billApp = {
      name:'Bill',
      url:'../bill/bill',
      imgSrc:'bill.png',
    }
    this.appList.push(billApp)
  },
}
</script>

<style lang="less" scoped>
  *{
    font-family:consolas;
  }

.userinfo {
  font-family:consolas;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
}

.appIcon{
  border:1px solid #ddd;
  border-radius:50%;

  img{
    width: 68rpx;
    height: 56rpx;
    margin: 20rpx;
  }

}

  .appName{
    text-align:center;
    font-family:consolas;
  }

</style>
