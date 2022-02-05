<template>
  <q-page class="column">

    <q-list class="row">
      <q-item dense v-for="item in favorites.sort((a,b)=> a.id - b.id)" :key="item.id"
        clickable
        tag="a"
        target="_blank"
        :href="item.url"
      >
        {{ item.name }}
      </q-item>
    </q-list>

    <q-img class="self-center"
      alt="This Is A House Of Learned Doctors"
      src="~assets/stepbrothers.jpg"
      width="80%"
    >
      <div class="absolute-bottom text-subtitle1 text-center">
        This Is A House Of Learned Doctors
      </div>
    </q-img>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { API, graphqlOperation } from 'aws-amplify';
import { listFavorites } from 'src/graphql/queries';

export default defineComponent({
  name: 'PageIndex',
  async created() {
    this.getFavorites();
  },
  data() {
    return {
      favorites: []
    }
  },
  methods: {
    async getFavorites() {
      //const favorites = await API.graphql(graphqlOperation(listFavorites));
      const favorites = await API.graphql({
        query: listFavorites,
        authMode: 'AWS_IAM'});
      this.favorites = favorites.data.listFavorites.items;
    }
  }
})
</script>
