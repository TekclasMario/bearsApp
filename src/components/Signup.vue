<template>
  <v-dialog max-width="600px">
    <v-btn flat slot="activator" class="orange">Sign Up
      <v-icon right>done</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <h2>Sign UP</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            color="orange"
            v-model="username"
            label="User Name"
            prepend-icon="person"
            hint="Must be unique"
          ></v-text-field>
          <v-text-field v-model="email" label="Email" prepend-icon="email"></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'visibility_off' : 'visibility'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            prepend-icon="security"
            label="Create Password"
            hint="Must be at least 6 characters don't fuck around"
            counter
            @click:append="show1 = !show1"
            color="blue"
          ></v-text-field>

          <p class="pl-2 red--text" v-if="feedback">{{feedback}}</p>

          <v-spacer></v-spacer>

          <v-btn flat @click="signup" class="success mx-0 mt-3">Sign up</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import slugify from "slugify";
import db from "@/fb";

import firebase from "firebase/app";
import "firebase/firestore";
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
      if (this.username && this.email && this.password) {
        this.slug = slugify(this.username, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
          
      db.collection("users")
        .doc(this.slug)
        .get().then(doc => {
          if (doc.exist) {
            this.feedback = "Wroong This already exist";
          } else {
            this.feedback = "this is a free alias baayybe";
          }
        });

        console.log(this.slug);
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .catch(err => {
            console.log(error);
            this.feedback = err.message;
          });
        this.feedback =
          "Not so fast there buddy! The Matrix request a User Name before you can continue";
      }
    }
  }
};
</script>