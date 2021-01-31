<template>
<nav>
<router-link  id="link" v-for="link in links" :key="link.to" :to="link.to">{{link.title}}</router-link>

<button id="button" @click="$emit('open-login-modal')">Login</button>
<button id="button" @click="logout">Logout</button>
</nav>

  
</template>

<script>
// @ts-ignore
import firebase from '@/utilities/firebase'
export default {
  data() {
    return {
      links:[
        {title:"Todo",to:"/Items"},
        {title:"Calendar",to:"/calendar"},
        {title:"Markdown", to:"/markdown"},
        {title:"carousel", to:"/carousel"},
      ]

    }
  },
  methods: {
    logout(){

      firebase.auth().signOut().then((res)=> {
     console.log(res)
  }).catch(function(error) {
     console.log(error)
  });
    }
  },

}
</script>

<style>
#button{
  width: 80px;
  height: 30px;
  background: green;
  border-radius: 12px;
  border:none ;
  color: white ;

}
#link{
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  margin: 7px;
  border-bottom:2px solid rgb(12, 204, 230) ;
  
}
nav{
    text-align: center;
    position: fixed;
    top: 0;
    background:white;
    color: black;
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

#app{
background-image: linear-gradient(147deg, #923cb5 0%, #000000 74%);
  height: auto;
    
}
</style>

