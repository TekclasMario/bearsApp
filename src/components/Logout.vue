<template>
  <v-dialog max-width="600px" >
    <v-btn round outline  slot="activator" @click="logout" class="success">Log Out
      <v-icon right>eject</v-icon>
    </v-btn>
  
  </v-dialog>
</template>

<script>
import firebase from "firebase/app";

export default {
  
  data() { 
    return {
     //
   } 
  },
    
    methods: {
    logout(){
      firebase.auth().signOut().then(() => {
        this.$router.push({ name: "landing" })
      })
    }
  }
}
</script>