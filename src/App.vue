<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

export default defineComponent({
  name: 'App'
})
</script>
