import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type FavoritesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Favorites {
  readonly id: string;
  readonly name?: string;
  readonly url?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Favorites, FavoritesMetaData>);
  static copyOf(source: Favorites, mutator: (draft: MutableModel<Favorites, FavoritesMetaData>) => MutableModel<Favorites, FavoritesMetaData> | void): Favorites;
}