<template>
<v-flex>
<v-layout>
 <v-img :src="landing"> 
  <v-layout  align-center justify-center column fill-height > 
     <Login/> 
     <p>log in</p>
     <Signup/> 
      <p>Sign up</p>
  </v-layout> 
</v-img> 

</v-layout>
</v-flex>
</template>
<script>
        
import Signup from "@/components/Signup2";
import Login from "@/components/Login";  
export default {
  components: { Signup, Login },

  data() {
    return {
     landing:  "/landing.jpg",
    };
  }
};    
    
</script>