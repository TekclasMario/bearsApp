<template>
  <v-dialog max-width="600px">
    <v-btn fab slot="activator" color="black lime
--text">
      <v-icon large>add_circle</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <h2>Sign UP</h2>
      </v-card-title>
      
      <v-card-text> 
        <v-form v-on:submit.prevent="signup" class="px-3" ref="form">
         
          <v-text-field
            v-model="username"
            label="User Name"
            prepend-icon="person"
            color="orange"
            hint="Must be unique">
          </v-text-field>
          
          <v-text-field 
           v-model="email" 
           label="Email" 
           prepend-icon="email"
           hint="Use your favorie email">
          </v-text-field>
          
          <v-text-field
            v-model="password"
            label="Create Password"
            :append-icon="show1 ? 'visibility_off' : 'visibility'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            prepend-icon="security"
            color="blue"
            hint="Must be at least 6 characters don't fuck around"
            counter
            @click:append="show1 = !show1">
          </v-text-field>

          <p class="pl-2 red--text" v-if="feedback">{{feedback}}</p>

          <v-spacer></v-spacer>

          <v-btn flat @click.prevent="signup" class="success mx-0 mt-3">Sign up</v-btn>
       
         </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import slugify from "slugify";
import db from "@/fb";

import firebase from "firebase/app";

import "firebase/auth";

export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      username: "",
      slug: "",
      feedback: "",
      show1: false,
      show2: true,
      show3: false,
      show4: false
    };
  },
  methods: {
    signup() {
      if(this.username && this.email && this.password){
        this.feedback = null
        this.slug = slugify(this.username, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
          
      let ref = db.collection('users').doc(this.slug)
        ref.get().then(doc => {
          if(doc.exists){
            this.feedback = 'This alias already exists'}
            
               else {
          // this alias does not yet exists in the db
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                   
           .then(cred => {
                
              ref.set({
                username: this.username,
                geolocation: null,
                user_id: cred.user.uid
              })
            }).then(() => {
              this.feedback = 'User Name Added Ya Digg'
            }).then(() => {
              this.$router.push({ name: 'Team' })
            })
            .catch(err => {
              this.feedback = err.message
            })
          }
        })
      } else {
        this.feedback = 'Please fill in all fields'
      }
    }
  }
}
</script>