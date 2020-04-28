<template>
  <v-app class="grey app_view">
   
    <v-content class="mb-4">
     <router-view/>
    </v-content>
  </v-app>
</template>

<style>

	.app_view{
		height: 800px;
	}


</style>

<script>	
export default

{
  name: "App",

  data() {
    return {
      //
    };
  }
};
</script>
