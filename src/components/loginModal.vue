<template>

<div class="fill"  @click="close">

 <div class="display-none" @click="$emit('keep-login')">
  <h1>LOGIN</h1>
  <form @submit.prevent="submit">
<div class="username">
<label for="username">Email or Username</label>
<input type="text" placeholder="Type email"  name="username" v-model="form.email">

</div>
<div class="pass">
<label for="password">Password</label>
<input type="password" placeholder="password" name="password" v-model="form.password">
</div>
<div >
<button type="submit" class="submit">
<span v-if="!isLoading">Login</span>
<span v-else>Loading</span>
</button>
</div>


</form>
</div>
</div>
</template>

<script>


// @ts-ignore
import firebase from '@/utilities/firebase'
export default {
  data() {
    return {
      form:{
        email:'',
        password:''
      },
      isLoading:false,
    }
  },
  methods: {
    

        close(){
          this.$emit('close-login');
      
    },
    submit(){
      this.email='';
      this.password='';
      this.isLoading = false;
      this.close();


      firebase.auth().signInWithEmailAndPassword(this.form.email,this.form.password).then(()=>{
     
        this.isLoading=false;
       

      }).catch((e)=>{
        this.isLoading=false
        console.log(e)
      })

    },


  },

}
</script>

<style>
h1{
  text-align: center;
}
.submit{
  background: blue;
  color: white;
  width: 80px;
  height: 25px;
  border: none;
  margin-top: 5px;
  border-radius: 7px;
}
form{

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  height: 60%;
  z-index: 51;

}
.username,.pass{
  display: flex;
  flex-direction: column;
}
input{
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid rgb(0, 98, 255);
}
.fill{
  width: 100vw;
  height: 100vw;
  z-index: 40;
  position: absolute;
  background: rgba(0, 0, 0, 0.315);
  display: flex;
  justify-content: center;
  align-items: center;
}
.display-none{
  z-index: 50;
  width: 350px;
  height: 370px;
  background: white;
  color: black;
  border-radius:12px ;
  box-shadow: 7px black;
  flex-direction: column;
  display: flex;
  justify-content : center;
  position: fixed;
  top: 30%;
}
</style>