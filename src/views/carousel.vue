<template>
<h1>Slider</h1>
   <div class="wrap"  >
         <div class="div" v-for="(item,index) in classes" :key="index">
         <transition name="fade">
          <div  v-if="currentSlide ===index" :class="item">  </div>
         </transition>
        </div>

   </div>
        <div class="btns"  >
           <div class="round"
           @click="makeActive(index)"
            v-for="(item, index) in classes" :key="item"

            :class="currentSlide === index ? 'red':'grey'">
             </div>
           
         
        </div>



</template>


<script>
export default {
    data() {
        return {
            classes:[
              'flex-0',
              'flex-1',
              'flex-2'
            ],
            currentSlide:1,
            interval:"",
            isTitleShowing:false,
        };
    },
    methods: {
        makeActive(index){
            this.currentSlide = index;
        }
    },
    mounted() {
      this.interval=  setInterval(() => {
            if(this.currentSlide ===2){
                this.currentSlide = 0
            }else{

                this.currentSlide++
            }
        }, 2000);
    },
    beforeUnmount() {
        clearInterval(this.interval)
    },
}
</script>

<style>
*{
    overflow: hidden;
}
.red{
    background: red;

}
.grey{
    background: gray;
}
.btns{
    display: flex;
    flex-direction: row;
    margin:5px;
}
.round{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    margin-top: 7px;
    position: relative;
    cursor: pointer;
}
.toggle{
    margin-top: 7px;
    background: none;
    height: 30px;
    width: 100px;
    color: white;
    border: 1px solid red;


}
.div{
        width: 60vw;
    height: 300px;
    position: absolute;
}
.wrap{
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 60vw;
    height: 300px;
}
.flex-0{
    width: 60vw;
    height: 300px;
    position: absolute;
    background: rgb(7, 233, 253);

}
.flex-1{
    border-radius: 12px;
    position: absolute;
    width: 60vw;
    height: 300px;
    background: white;
    border-radius: 12px;
}
.flex-2{
    border-radius: 12px;
    position: absolute;
    width: 60vw;
    height: 300px;
    background: rgba(238, 40, 40, 0.733);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease;
}

.fade-enter-from{
     opacity: 0;
     transform: translateX(-100%);

}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>