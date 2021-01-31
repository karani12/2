<template>
  <app-header @open-login-modal="isLoginOpen=true" />
  <router-view>

  </router-view>
  <loginModal v-if="isLoginOpen" @close-login=" isLoginOpen = false" />

</template>

<script>
import loginModal from '@/components/loginModal'
import AppHeader from '@/components/AppHeader'
import firebase from '@/utilities/firebase'


export default {
        data() {
        return {
          isLoginOpen:true,
          isSignedIn:false,
          authUser:""

        }
      },
      mounted() {
        firebase.auth().onAuthStateChanged((user)=> {
          if (user) {
            this.isSignedIn = true;
            this.authUser= user;
            
   
          } else { 
            this.isSignedIn = false;
            this.authUser={}

            
   
       }
});
      },
  components: { AppHeader, loginModal},

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
}

</style>



