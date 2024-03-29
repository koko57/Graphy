// Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  cafe: (where?: CafeWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  cafe: (where: CafeWhereUniqueInput) => CafeNullablePromise;
  cafes: (args?: {
    where?: CafeWhereInput;
    orderBy?: CafeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Cafe>;
  cafesConnection: (args?: {
    where?: CafeWhereInput;
    orderBy?: CafeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => CafeConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createCafe: (data: CafeCreateInput) => CafePromise;
  updateCafe: (args: {
    data: CafeUpdateInput;
    where: CafeWhereUniqueInput;
  }) => CafePromise;
  updateManyCafes: (args: {
    data: CafeUpdateManyMutationInput;
    where?: CafeWhereInput;
  }) => BatchPayloadPromise;
  upsertCafe: (args: {
    where: CafeWhereUniqueInput;
    create: CafeCreateInput;
    update: CafeUpdateInput;
  }) => CafePromise;
  deleteCafe: (where: CafeWhereUniqueInput) => CafePromise;
  deleteManyCafes: (where?: CafeWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  cafe: (
    where?: CafeSubscriptionWhereInput
  ) => CafeSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type CafeOrderByInput =
  | "name_ASC"
  | "name_DESC"
  | "id_ASC"
  | "id_DESC"
  | "city_ASC"
  | "city_DESC"
  | "address_ASC"
  | "address_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface CafeCreateInput {
  name: String;
  id?: Maybe<ID_Input>;
  city: String;
  address: String;
}

export interface CafeUpdateInput {
  name?: Maybe<String>;
  city?: Maybe<String>;
  address?: Maybe<String>;
}

export interface CafeUpdateManyMutationInput {
  name?: Maybe<String>;
  city?: Maybe<String>;
  address?: Maybe<String>;
}

export interface CafeWhereInput {
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  city?: Maybe<String>;
  city_not?: Maybe<String>;
  city_in?: Maybe<String[] | String>;
  city_not_in?: Maybe<String[] | String>;
  city_lt?: Maybe<String>;
  city_lte?: Maybe<String>;
  city_gt?: Maybe<String>;
  city_gte?: Maybe<String>;
  city_contains?: Maybe<String>;
  city_not_contains?: Maybe<String>;
  city_starts_with?: Maybe<String>;
  city_not_starts_with?: Maybe<String>;
  city_ends_with?: Maybe<String>;
  city_not_ends_with?: Maybe<String>;
  address?: Maybe<String>;
  address_not?: Maybe<String>;
  address_in?: Maybe<String[] | String>;
  address_not_in?: Maybe<String[] | String>;
  address_lt?: Maybe<String>;
  address_lte?: Maybe<String>;
  address_gt?: Maybe<String>;
  address_gte?: Maybe<String>;
  address_contains?: Maybe<String>;
  address_not_contains?: Maybe<String>;
  address_starts_with?: Maybe<String>;
  address_not_starts_with?: Maybe<String>;
  address_ends_with?: Maybe<String>;
  address_not_ends_with?: Maybe<String>;
  AND?: Maybe<CafeWhereInput[] | CafeWhereInput>;
  OR?: Maybe<CafeWhereInput[] | CafeWhereInput>;
  NOT?: Maybe<CafeWhereInput[] | CafeWhereInput>;
}

export interface CafeSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<CafeWhereInput>;
  AND?: Maybe<CafeSubscriptionWhereInput[] | CafeSubscriptionWhereInput>;
  OR?: Maybe<CafeSubscriptionWhereInput[] | CafeSubscriptionWhereInput>;
  NOT?: Maybe<CafeSubscriptionWhereInput[] | CafeSubscriptionWhereInput>;
}

export type CafeWhereUniqueInput = AtLeastOne<{
  name: Maybe<String>;
  id?: Maybe<ID_Input>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface AggregateCafe {
  count: Int;
}

export interface AggregateCafePromise
  extends Promise<AggregateCafe>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateCafeSubscription
  extends Promise<AsyncIterator<AggregateCafe>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface CafePreviousValues {
  name: String;
  id: ID_Output;
  city: String;
  address: String;
}

export interface CafePreviousValuesPromise
  extends Promise<CafePreviousValues>,
    Fragmentable {
  name: () => Promise<String>;
  id: () => Promise<ID_Output>;
  city: () => Promise<String>;
  address: () => Promise<String>;
}

export interface CafePreviousValuesSubscription
  extends Promise<AsyncIterator<CafePreviousValues>>,
    Fragmentable {
  name: () => Promise<AsyncIterator<String>>;
  id: () => Promise<AsyncIterator<ID_Output>>;
  city: () => Promise<AsyncIterator<String>>;
  address: () => Promise<AsyncIterator<String>>;
}

export interface CafeEdge {
  node: Cafe;
  cursor: String;
}

export interface CafeEdgePromise extends Promise<CafeEdge>, Fragmentable {
  node: <T = CafePromise>() => T;
  cursor: () => Promise<String>;
}

export interface CafeEdgeSubscription
  extends Promise<AsyncIterator<CafeEdge>>,
    Fragmentable {
  node: <T = CafeSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface CafeSubscriptionPayload {
  mutation: MutationType;
  node: Cafe;
  updatedFields: String[];
  previousValues: CafePreviousValues;
}

export interface CafeSubscriptionPayloadPromise
  extends Promise<CafeSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = CafePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = CafePreviousValuesPromise>() => T;
}

export interface CafeSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<CafeSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = CafeSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = CafePreviousValuesSubscription>() => T;
}

export interface Cafe {
  name: String;
  id: ID_Output;
  city: String;
  address: String;
}

export interface CafePromise extends Promise<Cafe>, Fragmentable {
  name: () => Promise<String>;
  id: () => Promise<ID_Output>;
  city: () => Promise<String>;
  address: () => Promise<String>;
}

export interface CafeSubscription
  extends Promise<AsyncIterator<Cafe>>,
    Fragmentable {
  name: () => Promise<AsyncIterator<String>>;
  id: () => Promise<AsyncIterator<ID_Output>>;
  city: () => Promise<AsyncIterator<String>>;
  address: () => Promise<AsyncIterator<String>>;
}

export interface CafeNullablePromise
  extends Promise<Cafe | null>,
    Fragmentable {
  name: () => Promise<String>;
  id: () => Promise<ID_Output>;
  city: () => Promise<String>;
  address: () => Promise<String>;
}

export interface CafeConnection {
  pageInfo: PageInfo;
  edges: CafeEdge[];
}

export interface CafeConnectionPromise
  extends Promise<CafeConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<CafeEdge>>() => T;
  aggregate: <T = AggregateCafePromise>() => T;
}

export interface CafeConnectionSubscription
  extends Promise<AsyncIterator<CafeConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<CafeEdgeSubscription>>>() => T;
  aggregate: <T = AggregateCafeSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Cafe",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
