<template>
  <nav>
    <v-toolbar class="a" flat app>
    
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Bears</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- dropdown menu -->
      <v-menu offset-y>
        <v-btn slot="activator" color="black white--text">Menu
          <v-icon right>expand_more</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
   
      <Logout/>
   
      <v-spacer></v-spacer>
    </v-toolbar>

 <!-- Navigation Drawer menu -->   

 <!-- Navigation Drawer menu End -->  
 
         
  </nav>
</template>

<script>


import Logout from "./Logout";


export default {
  components: { Logout},
  data() {
    return {
      drawer: true,
      links: [
        { icon: "person", text: "Team", route: "/" },
        { icon: "person", text: "EfreUi", route: "/efrenui" },
        { icon: "person", text: "IvanUi", route: "/ivanui" },
        { icon: "person", text: "MamaKoalaUi", route: "/mamakoalaui" },
      ]
    };
  }
};
</script>

<style scoped>
    
</style>