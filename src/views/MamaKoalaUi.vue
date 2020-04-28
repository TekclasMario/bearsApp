<template>
  <div id="r" class="mamakoalaui">
    <!-- Navigation Drawer menu -->

    <v-navigation-drawer app v-model="drawer" class="grey lighten-2">
      <v-subheader class="pink darken-4">Mama Koala</v-subheader>
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100" class="grey lighten-1">
            <img src="Koala.png" />
            <p class="black--text subheading mt-1">Mama</p>
            <p class="black--text mt-1">Kuala</p>
          </v-avatar>
        </v-flex>
        <v-flex class="mt-4 mb-3"></v-flex>
      </v-layout>
      <v-list>
        <v-list-tile
          :class="link.color"
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-tile-action>
            <v-icon class="black--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="black--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-footer app inset height="90" color="pink darken-4"></v-footer>
    </v-navigation-drawer>
    <!-- Navigation Drawer menu End -->

    <!-- Navbar  -->

    <nav>
      <v-toolbar color="grey darken-1" flat app>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">Tooooodo</span>
          <span>Bears</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <!-- dropdown menu -->

        <v-spacer></v-spacer>
        <Logout />
      </v-toolbar>
    </nav>

    <!-- Navbar End -->

    <!-- Drop Down -->
    <h1 class="subheading white--text">Mama Koala Ui</h1>
    <Popup />
    <Chores />
  </div>
</template>

<script>
import Logout from "@/components/Logout";
import Popup from "@/components/Popup";
import Chores from "@/components/Chores";
import db from "@/fb";

export default {
  components: { Logout, Popup, Chores },

  data() {
    return {
      drawer: true,
      links: [
        {
          icon: "dashboard",
          color: "pink lighten-4",
          text: "Daaashboard",
          route: "/"
        },
        { icon: "person", color: "pink lighten-4", text: "Team", route: "/" }
      ],

      projects: []
    };
  },

  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  },
  created() {
    db.collection("projects").onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  }
};
</script>

<style>
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