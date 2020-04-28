 <template>
  <v-container class="my-3">
    <v-layout row class="mb-3">
      <v-tooltip class="pink darken-1" top>
        <v-btn small flat color="white" @click="sortBy('title')" slot="activator">
          <v-icon left small>folder</v-icon>
          <span class="caption text-lowercase white--text">by chore name</span>
        </v-btn>
        <span>sort chores by project Name</span>
      </v-tooltip>
    </v-layout>
    <v-card flat v-for="project in projects" :key="project.title">
      <v-layout row wrap :class="`pa-3 project ${project.status}`">
        <v-flex xs12 md6>
          <div class="caption grey--text">Chore</div>
          <div>{{project.title}}</div>
        </v-flex>
        <v-flex xs6 sm4 md6>
          <div class="caption grey--text">Bear</div>
          <div>{{project.person}}</div>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </v-card>
  </v-container>
</template>
    
<script>
import db from "@/fb";

export default {
  data() {
    return {
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
    
    
    
    