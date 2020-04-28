<template>
 
  <div class="ivanui grey">
   
<!-- Navigation Drawer menu -->   
   
    <v-navigation-drawer app v-model="drawer" class="grey lighten-2">
      <v-layout column align-center>
        <v-flex class="mt-5">
     
            <v-avatar size="100" class="grey lighten-1">
                <img  src="Icebear.png">
  <p class="black--text subheading mt-1">Ice</p>
  <p class="black--text  mt-1">Bear</p>
          </v-avatar>
        
        </v-flex>
        <v-flex class="mt-4 mb-3">
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile :class="link.color"  v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="black--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="black--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
        <v-footer
         app
         inset
         height="90"
         color="red">     
        </v-footer>
</v-navigation-drawer>
<!-- Navigation Drawer menu End --> 
   
<!-- Navbar  -->  

<Navbar/>

<!-- Navbar End -->   
   
<!-- Main View-->
     <h1 class="pt-3 white--text text-xs-center">Ivan UI</h1>

    <v-container class="my-5">
    
        <router-view></router-view>
  
    </v-container>
    
  </div>
  
  
<!-- Main View End-->
</template>

<style>
.ivanui{
		height:1200px !important;
	}
    
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}
</style>


<script>
   
import Navbar from "@/components/Navbar";
    
    
export default {
components: {  Navbar },
    
  data() {
      
       
    return {
      drawer: true, 
      links: [
        { icon: "dashboard", color:"orange", text: "Chores", route:"/IvanUi/Chores"},
        { icon: "folder", color:"grey lighten-2", text: "Stars", route: "/IvanUi/Stars" },
            { icon: "person", color:"grey lighten-2", text: "Prices and Trips", route: "/IvanUi/Prices" },
        { icon: "person", color:"grey lighten-2",text: "Team", route: "/" },
      
      ],
  
    };
  },

  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>




