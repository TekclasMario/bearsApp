<template>
  <div class="team blue">
     <Navbar/>
    <h1  class="subheading grey--text">Teamm</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat router :to="person.href"  class="text-xs-center ma-3">
            <v-responsive class="pt-4">
         
              <v-avatar :tile="person.tile" size="180" class="red">
             <img :src="person.avatar">
              </v-avatar>

            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="blue--text">{{person.role}}</div>
            </v-card-text>
          
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>


<style>
.team{
  height: 800px;
}

</style>




<script>
import Navbar from "@/components/Navbar";  
export default {
components: { Navbar },
  data() {
    return {
      team: [
        {
          name: "Sloth",
          role: "Web developer",
          avatar: "/slothdab.png",
          tile: true,
          href: "/EfrenUi"
        },
        { 
          name: "Koala", 
          role: "MaMa", 
          avatar: "/koala.png",
            href: "/MamaKoalaUi"
        },
        {
          name: "Panda",
          role: "Roblox Enthusiast",
          avatar: "/panda.png",
            href: "/EfrenUi"
        },
        { name: "Ice Bear", 
          role: "Ranch Dressing Guru", 
          avatar: "/icebear.png",
         href: "/IvanUi"
        }
      ]
    };
  }
};
</script>