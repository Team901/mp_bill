<template>
  <div id="container">
    <div id="inputBox" v-show="show.input">
      <textarea name="" id="" cols="30" rows="10" v-model="inputContent"></textarea>
      <div class="btnBox">
        <button class="btn" @click="getItem()">add</button>
        <button class="btn" @click="clearInput()">clear</button>
      </div>
    </div>

    <div id="itemListBox" v-show="show.itemList">
      <h5>清单</h5>
      <ul>
        <li v-for="(item,i) in itemList">
          {{item.name}}--{{item.price}}
            <button class="btn" @click="deleteItem(i)">-</button>
            <div class="btn typeBtn">
              <picker :value="item.typeIndex" :range="personsName" @change="setItemType">
                <view class="picker">
                  {{personsName[item.typeIndex]}}
                </view>
              </picker >
            </div>


        </li>
      </ul>

      <div class="btnBox">
        <button class="btn" @click="getResult()">ok</button>
        <button class="btn" @click="clearItem()">clear</button>
      </div>

    </div>

    <div id="resListBox"  v-show="show.resList">
      <h5>结果</h5>
      <ul>
        <li v-for="(person, n) in persons" v-if="person.name!=='AA'">{{person.name}}--{{person.sum}}</li>
      </ul>
      <div class="btnBox">
        <button class="btn" @click="clearResult()">clear</button>
      </div>


    </div>
  </div>

</template>

<script>

  export default {
    data(){
      return{
        show:{
          input:true,
          itemList:false,
          resList:false,
        },
        inputContent:'',
        personsName:['AA','付力','苏迪','龚芹'],
        persons:[],
        itemList:[],
        resList:[],
      }
    },

    methods:{
      getItem(){
        let _this =this
        this.inputContent = this.inputContent.trim()
        if(this.inputContent==='') return

        let itemArr = this.inputContent.split(/[,，\n]/g)

        itemArr.forEach(item=>{
          let price = item.match(/[¥￥]*[0-9.]+[元块¥￥]*/g).join(''),
            name = item.replace(price,'')

          _this.itemList.push({
            name:name,
            price:parseFloat(price.replace(/[元块¥￥]*/g,'')),
            type:'AA',
            typeIndex:0,
          })
        })

        this.show.itemList = true
        this.clearInput()
      },

      deleteItem(item){
        this.itemList.splice(this.itemList.indexOf(item),1)
      },

      clearInput(){
        this.inputContent = ''
      },


      setItemType(e){
        console.log(e.currentTarget.dataset.eventid)
        let [i,j] = [e.currentTarget.dataset.eventid.split('-')[1],e.mp.detail.value]
        this.itemList[i].typeIndex = e.mp.detail.value
        this.itemList[i].type = this.personsName[j]
      },

      getResult(){
        let [_this,personNum] = [this,this.persons.length-1]
        this.persons.forEach(person=>{
          person.item = []
          if(person.name!=='AA'){
            _this.itemList.forEach(item=>{
              let price = item.type===person.name?item.price:item.type==='AA'?item.price/personNum:0
              if(price!==0){
                person.item.push({
                  name:item.name,
                  price:price,
                })
              }
            })
          }
        })

        this.persons.forEach(person=>{
          let sum = 0
          person.item.forEach(item=>{
            sum += item.price
          })
          person.sum = Math.round(sum*100)/100
        })

        this.show.resList = true

      },

      clearItem(){
        this.show.itemList = false
        this.itemList = []
        this.clearResult()
      },

      clearResult(){
        this.persons.forEach(person=>{
          person.sum = 0
          person.item = []
        })
        this.show.resList = false
      },



    },

    mounted(){
      let _this = this
      this.persons = []
      this.personsName.forEach(name=>{
        _this.persons.push({
          name:name,
          sum:0,
          item:[],
        })
      })
    },
  }

</script>

<style lang="less">
  *{
    font-family:consolas;
  }

  .btnBox{
    margin:10rpx;
    height: 100rpx;
    .btn{
      display:inline-block;
      float: right;
      margin:10rpx 15rpx;
    }
  }

  #container{
    font-size:32rpx;

  }

  #inputBox,
  #itemListBox,
  #resListBox{
    box-shadow: 0 0 2rem rgba(68, 68, 68, 0.3);
    width:86%;
    margin:5%;
    padding:2%;

    ul{
      margin-left:32rpx;
    }
  }

  #inputBox{
    textarea{
      width:94%;
      padding:3%;
      border:1px solid #ddd;
      /*border-radius: 0.2rem;*/
    }

  }

  #itemListBox{

    li{
      line-height:70rpx;
      /*font-size:32rpx;*/

      .btn{
        display:inline-block;
        float: right;
        margin:0 15rpx;
        font-size: 24rpx;
      }

      .typeBtn{
        border:1px solid #ddd;
        height:56rpx;
        line-height:56rpx;
        padding:0 25rpx;
        border-radius:20rpx;
        font-size:24rpx;

      }
    }

  }

</style>
