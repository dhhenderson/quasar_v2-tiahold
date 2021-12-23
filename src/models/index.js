// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Favorites } = initSchema(schema);

export {
  Favorites
};