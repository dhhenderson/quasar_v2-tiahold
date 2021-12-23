<template>
  <q-page class="column">

    <q-list dense class="row items-baseline">
      <q-item-label
        header
      >
        Links
      </q-item-label>
      <q-item v-for="item in favorites" :key="item.id"
        clickable
        tag="a"
        target="_blank"
        :href="item.url"
      >
        <p>{{ item.name }}</p>
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
      const favorites = await API.graphql(graphqlOperation(listFavorites));
      this.favorites = favorites.data.listFavorites.items;
    }
  }
})
</script>
