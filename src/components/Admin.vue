<template>
<div class="add">
  价格:<input v-model="num1">
  数量:<input v-model="num2">
  总额：<span>{{sum}}</span>
  <div>
    千米 : <input type = "text" v-model = "kilometers">
    米 : <input type = "text" v-model = "meters">
  </div>
  <p v-model="bbb" id="info"></p>

</div>
</template>

<script>
    export default {
        name: "Admin",
        data() {
            return {
                num1: 0,
                num2: 0,
                kilometers : 0,
                meters:0,

            }
        },
        methods: {
            getmessage: function () {
                alert(this. message)
            },

        },
        bbb: function (newValue, oldValue) {
            document.getElementById ("info").innerHTML = "修改前值为: " + oldValue + "，修改后值为: " + newValue;
        },
        // watch : {
        //      num2:function() {
        //          this.sum=this.num1*this.num2
        //      },
        //      num1:function () {
        //          this.sum=this.num1*this.num2
        //      }
        // },
        computed:{
            sum :function () {
                return this.num1*this.num2
            }
        }

    }
</script>

<style scoped>

</style>
