<template>
<h1>Do this {{herosCount}}</h1>

<ul>
<li v-for="(hero, index) in DCHeros" :key="hero.name">
<div>{{hero.name}} <button @click="removeHero(index)">X</button></div>
</li>
</ul>
<form @submit.prevent="addHero">
<input type="text" name="" placeholder="Type here" id="" v-model="newHero">


<button type="submit" >Add</button>
</form>
</template>
<script>
export default {
    computed:{
    herosCount(){
      return this.DCHeros.length;
    },

    fullName:{
            get(){
      return this.fname +" "+ this.lname;
        
      },

    } 
  },
    data() {
    return {
     

      newHero:"",
      DCHeros: [
       { name:"read a book"},
        {name:'Get to tal to client'},
        {name:'Focus on the blog'},
        ]
      
    }
  },
  methods: {
    addHero(){
      if(this.newHero !== ''){
        this.DCHeros.push({name:this.newHero});
        this.newHero='';
      }
    },
    removeHero(index){
    this.DCHeros = this.DCHeros.filter((hero , i) => i !== index)

    }

  },
    
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  align-items: center;
  height: 100vh;
  background-color: #923cb5;
  font-family: 'Source Code Pro', monospace;
background-image: linear-gradient(147deg, #923cb5 0%, #000000 74%);
}
#app>h1{
  margin: 12px;
  border-bottom: 2px solid rgb(12, 204, 230);

}
#app>ul>li{
  list-style: none;
}
#app>ul>li>div{

  display: flex;
  justify-content: space-between;
  width: 200px;
}
#app>ul>li>div>button{
  background: none;
  border: 1px solid red;
  color: white;
  width: 15px;
  height: 15px;
}
#app>form>input{
  width: 140px;
  height: 30px;
  margin-top: 20px;
  background: none;color: white;
  border: none;
  border-bottom: 2px solid rgb(12, 204, 230);
  color: white;
  font-size: 0.9rem;
  margin-right: 7px;
}
#app>form>input:focus{
  outline: none;
}
#app>form>button{
  border: 1px solid red;
  background: none;
  color: white;
  height:30px ; 
  width: 70px;

}
    
</style>