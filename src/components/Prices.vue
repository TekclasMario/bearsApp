<template>
   
   <div>
       
<v-card class="text-xs-center blue" >
   <h1>Prizes!!!</h1></v-card>
    <v-timeline>
  
      <v-timeline-item
       
        color="blue lighten-2"
        large
      >
     
       
           <v-img  max-width="350px"
          :src="landing"
         
        ></v-img>
        
           <v-img  max-width="350px"
          :src="ps"
         
        ></v-img>
         
     
         
      </v-timeline-item>
          <v-timeline-item
       
        color="red lighten-2"
        large
      >
        <v-card class="elevation-2 orange">
          <v-card-title class="headline">Trip To Lego Land</v-card-title>
          <v-card-text>
            Awesome Lego Land Trip! Good Job on working towards earningthis guys!
            Keep it up!!
          </v-card-text>
         
        </v-card>
         
      </v-timeline-item>
      
    </v-timeline>
          
  </div>

</template>


<script>
         
export default {

  data() {
    return {
     landing:  "/mindcraft.png",
         ps:  "/ps4.png",
    };
  }
};    
    
</script>