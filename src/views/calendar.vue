<template>
 <h1>Calendar</h1>
 <span class="flex">
   <h2>{{currentMonthName}}</h2>
  <h2>{{currentYear}}</h2>
 </span>

 <section class="inline-days">

 <p  v-for="day in days" :key="day" >
 {{day}}
 </p>
 </section>
 <section class="inline-num">
 <p v-for="num in startDay()" :key="num" id="empty" ></p>
 <p v-for="num in daysInMonth()" :key="num" :class="currentDateClass(num)">{{num}}</p>

 </section>
 <section class="btn">
 <button @click="prev()">PREV</button>
 <button @click="next()">NEXT</button>
 </section>

</template>

<script>
export default {
    data() {
        return {
            currentDate: new Date().getUTCDate(),
            currentMonth: new Date().getMonth(),
            currentYear: new Date().getFullYear(),
            days:['Sun','Mon','Tue','wed','Thu','Fri','Sat'],
        }
    },
    methods:{
        currentDateClass(num){
        const calendarFullDate = new Date(this.currentYear,this.currentMonth,num).toDateString();
        const currentFullDate = new Date().toDateString();
         return calendarFullDate === currentFullDate ? 'highlight':'';

        },
        daysInMonth(){
          
            return new Date(this.currentYear, this.currentMonth+1, 0).getDate();
        },
        startDay(){
            return new Date(this.currentYear,this.currentMonth).getDay();
        },next(){
          
          if(this.currentMonth === 11){
             this.currentMonth = 0;
             this.currentYear++;
          }else{
              this.currentMonth++
          }
          
        },
        prev(){
            if(this.currentMonth === 0){
             this.currentMonth = 11;
             this.currentYear--;
          }else{
              this.currentMonth--;
          }
           
        },

    },
    computed:{
        currentMonthName(){
            return new Date(this.currentYear,this.currentMonth).toLocaleString('default', {month:'long'})
        }
      
    }

}
</script>

<style>
#app{
    display: flex;
    flex-wrap: wrap;
}
.highlight{
    background: white;
    color: black;
}
.flex{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;
}
#empty{
    display: hidden;
    border: 1px solid yellow;
}

.inline-days,.inline-num{
    width: 450px;
    display: flex;
}
.inline-days>p{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    width: 50px;
    height: 50px;
    border-bottom: 2px solid rgb(12, 204, 230);

}
.inline-num{
    
    
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    
    
    
    
}

.inline-num>p{
    

    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    margin: 5px;
    border: 1px solid red;
    border-radius: 5px;
    flex-wrap: wrap;
}
.btn{
    width: 450px;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
}
.btn>button{
    width: 80px;
    height: 30px;
    text-align: center;
    border: 1px solid rgb(12, 204, 230);
    background: none;
    color: white;
}

@media (max-width: 600px) {

    .inline-num,.inline-days{
        width: 300px;
    }
  
    .inline-days>p{
        width: 30px;
        height: 30px;
    }
    .inline-num>p{
        width: 30px;
        height: 30px;

    }
    .btn{
        width: 90vw;
    }
    .btn>button{
        width: 50px;
    }
}
</style>