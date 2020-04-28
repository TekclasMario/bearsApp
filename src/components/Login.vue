<template>
  <v-dialog max-width="600px" >
    <v-btn fab slot="activator" class="green accent-3">
      <v-icon large>star</v-icon>
    </v-btn>
    <v-card> 
      <v-card-title>
        <h2>Log In</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            v-model="email"
            label="Email Address"
            prepend-icon="email"
       
         ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'visibility_off' : 'visibility'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            prepend-icon="security"
            label="Password"
            hint=""
            counter
            @click:append="show1 = !show1"
            color="blue"
          ></v-text-field>

          <v-spacer></v-spacer>

          <v-btn flat @click="login" class="success mx-0 mt-3">log in</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import firebase from "firebase/app";
    
export default {
  name: 'Login',
  data(){
    return{
      email: "",
      password: "",
      feedback: "",
      show1: false,
      show2: true,
      show3: false,
      show4: false
    }
  },
  methods: {
    login(){
      if(this.email && this.password){
        this.feedback = null
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(cred => {
          //console.log(user)
          this.$router.push({ name: 'team' })
        }).catch(err => {
          this.feedback = err.message
        })
          
      } else {
        this.feedback = 'Please fill in both fields'
      }
    }
  }
}
</script>