import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "answers" */
export type Answers = {
  __typename?: 'answers';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  text: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "answers" */
export type Answers_Aggregate = {
  __typename?: 'answers_aggregate';
  aggregate?: Maybe<Answers_Aggregate_Fields>;
  nodes: Array<Answers>;
};

/** aggregate fields of "answers" */
export type Answers_Aggregate_Fields = {
  __typename?: 'answers_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Answers_Max_Fields>;
  min?: Maybe<Answers_Min_Fields>;
};


/** aggregate fields of "answers" */
export type Answers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Answers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "answers". All fields are combined with a logical 'AND'. */
export type Answers_Bool_Exp = {
  _and?: InputMaybe<Array<Answers_Bool_Exp>>;
  _not?: InputMaybe<Answers_Bool_Exp>;
  _or?: InputMaybe<Array<Answers_Bool_Exp>>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "answers" */
export enum Answers_Constraint {
  /** unique or primary key constraint on columns "id" */
  AnswersPkey = 'answers_pkey'
}

/** input type for inserting data into table "answers" */
export type Answers_Insert_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Answers_Max_Fields = {
  __typename?: 'answers_max_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Answers_Min_Fields = {
  __typename?: 'answers_min_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "answers" */
export type Answers_Mutation_Response = {
  __typename?: 'answers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Answers>;
};

/** on_conflict condition type for table "answers" */
export type Answers_On_Conflict = {
  constraint: Answers_Constraint;
  update_columns?: Array<Answers_Update_Column>;
  where?: InputMaybe<Answers_Bool_Exp>;
};

/** Ordering options when selecting data from "answers". */
export type Answers_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: answers */
export type Answers_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "answers" */
export enum Answers_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "answers" */
export type Answers_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "answers" */
export type Answers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Answers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Answers_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "answers" */
export enum Answers_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Answers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Answers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Answers_Bool_Exp;
};

/** columns and relationships of "articles" */
export type Articles = {
  __typename?: 'articles';
  /** An object relationship */
  author: Persons;
  author_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  image?: Maybe<Images>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  is_part_of?: Maybe<Scalars['uuid']['output']>;
  name: Scalars['String']['output'];
  published_at?: Maybe<Scalars['timestamptz']['output']>;
  text: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "articles" */
export type Articles_Aggregate = {
  __typename?: 'articles_aggregate';
  aggregate?: Maybe<Articles_Aggregate_Fields>;
  nodes: Array<Articles>;
};

export type Articles_Aggregate_Bool_Exp = {
  count?: InputMaybe<Articles_Aggregate_Bool_Exp_Count>;
};

export type Articles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Articles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Articles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "articles" */
export type Articles_Aggregate_Fields = {
  __typename?: 'articles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Articles_Max_Fields>;
  min?: Maybe<Articles_Min_Fields>;
};


/** aggregate fields of "articles" */
export type Articles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Articles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "articles" */
export type Articles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Articles_Max_Order_By>;
  min?: InputMaybe<Articles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "articles" */
export type Articles_Arr_Rel_Insert_Input = {
  data: Array<Articles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Articles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "articles". All fields are combined with a logical 'AND'. */
export type Articles_Bool_Exp = {
  _and?: InputMaybe<Array<Articles_Bool_Exp>>;
  _not?: InputMaybe<Articles_Bool_Exp>;
  _or?: InputMaybe<Array<Articles_Bool_Exp>>;
  author?: InputMaybe<Persons_Bool_Exp>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  headline?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<Images_Bool_Exp>;
  image_id?: InputMaybe<Uuid_Comparison_Exp>;
  is_part_of?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  published_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "articles" */
export enum Articles_Constraint {
  /** unique or primary key constraint on columns "id" */
  ArticlesPkey = 'articles_pkey'
}

/** input type for inserting data into table "articles" */
export type Articles_Insert_Input = {
  author?: InputMaybe<Persons_Obj_Rel_Insert_Input>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Images_Obj_Rel_Insert_Input>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  is_part_of?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  published_at?: InputMaybe<Scalars['timestamptz']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Articles_Max_Fields = {
  __typename?: 'articles_max_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  is_part_of?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  published_at?: Maybe<Scalars['timestamptz']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "articles" */
export type Articles_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  headline?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  is_part_of?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  published_at?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Articles_Min_Fields = {
  __typename?: 'articles_min_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  is_part_of?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  published_at?: Maybe<Scalars['timestamptz']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "articles" */
export type Articles_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  headline?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  is_part_of?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  published_at?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "articles" */
export type Articles_Mutation_Response = {
  __typename?: 'articles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Articles>;
};

/** on_conflict condition type for table "articles" */
export type Articles_On_Conflict = {
  constraint: Articles_Constraint;
  update_columns?: Array<Articles_Update_Column>;
  where?: InputMaybe<Articles_Bool_Exp>;
};

/** Ordering options when selecting data from "articles". */
export type Articles_Order_By = {
  author?: InputMaybe<Persons_Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  headline?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Images_Order_By>;
  image_id?: InputMaybe<Order_By>;
  is_part_of?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  published_at?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: articles */
export type Articles_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "articles" */
export enum Articles_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Headline = 'headline',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  IsPartOf = 'is_part_of',
  /** column name */
  Name = 'name',
  /** column name */
  PublishedAt = 'published_at',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "articles" */
export type Articles_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  is_part_of?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  published_at?: InputMaybe<Scalars['timestamptz']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "articles" */
export type Articles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Articles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Articles_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  is_part_of?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  published_at?: InputMaybe<Scalars['timestamptz']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "articles" */
export enum Articles_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Headline = 'headline',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  IsPartOf = 'is_part_of',
  /** column name */
  Name = 'name',
  /** column name */
  PublishedAt = 'published_at',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

export type Articles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Articles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Articles_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "events" */
export type Events = {
  __typename?: 'events';
  created_at: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  end_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  image_id?: Maybe<Scalars['uuid']['output']>;
  in_language?: Maybe<Scalars['String']['output']>;
  keywords?: Maybe<Scalars['jsonb']['output']>;
  name: Scalars['String']['output'];
  start_at: Scalars['timestamptz']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "events" */
export type EventsKeywordsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "events" */
export type Events_Aggregate = {
  __typename?: 'events_aggregate';
  aggregate?: Maybe<Events_Aggregate_Fields>;
  nodes: Array<Events>;
};

/** aggregate fields of "events" */
export type Events_Aggregate_Fields = {
  __typename?: 'events_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Events_Max_Fields>;
  min?: Maybe<Events_Min_Fields>;
};


/** aggregate fields of "events" */
export type Events_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Events_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Events_Append_Input = {
  keywords?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "events". All fields are combined with a logical 'AND'. */
export type Events_Bool_Exp = {
  _and?: InputMaybe<Array<Events_Bool_Exp>>;
  _not?: InputMaybe<Events_Bool_Exp>;
  _or?: InputMaybe<Array<Events_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  end_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_id?: InputMaybe<Uuid_Comparison_Exp>;
  in_language?: InputMaybe<String_Comparison_Exp>;
  keywords?: InputMaybe<Jsonb_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  start_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "events" */
export enum Events_Constraint {
  /** unique or primary key constraint on columns "id" */
  EventsPkey = 'events_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Events_Delete_At_Path_Input = {
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Events_Delete_Elem_Input = {
  keywords?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Events_Delete_Key_Input = {
  keywords?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "events" */
export type Events_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  in_language?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Events_Max_Fields = {
  __typename?: 'events_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  end_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  in_language?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  start_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Events_Min_Fields = {
  __typename?: 'events_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  end_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  in_language?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  start_at?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "events" */
export type Events_Mutation_Response = {
  __typename?: 'events_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Events>;
};

/** on_conflict condition type for table "events" */
export type Events_On_Conflict = {
  constraint: Events_Constraint;
  update_columns?: Array<Events_Update_Column>;
  where?: InputMaybe<Events_Bool_Exp>;
};

/** Ordering options when selecting data from "events". */
export type Events_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  end_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  in_language?: InputMaybe<Order_By>;
  keywords?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  start_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: events */
export type Events_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Events_Prepend_Input = {
  keywords?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "events" */
export enum Events_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndAt = 'end_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  InLanguage = 'in_language',
  /** column name */
  Keywords = 'keywords',
  /** column name */
  Name = 'name',
  /** column name */
  StartAt = 'start_at',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "events" */
export type Events_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  in_language?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "events" */
export type Events_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Events_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Events_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  in_language?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Scalars['jsonb']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_at?: InputMaybe<Scalars['timestamptz']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "events" */
export enum Events_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndAt = 'end_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  InLanguage = 'in_language',
  /** column name */
  Keywords = 'keywords',
  /** column name */
  Name = 'name',
  /** column name */
  StartAt = 'start_at',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Events_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Events_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Events_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Events_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Events_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Events_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Events_Set_Input>;
  /** filter the rows which have to be updated */
  where: Events_Bool_Exp;
};

/** columns and relationships of "images" */
export type Images = {
  __typename?: 'images';
  author_id?: Maybe<Scalars['uuid']['output']>;
  caption?: Maybe<Scalars['uuid']['output']>;
  created_at: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  exifData?: Maybe<Scalars['jsonb']['output']>;
  height?: Maybe<Scalars['numeric']['output']>;
  id: Scalars['uuid']['output'];
  license?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  width?: Maybe<Scalars['numeric']['output']>;
};


/** columns and relationships of "images" */
export type ImagesExifDataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "images" */
export type Images_Aggregate = {
  __typename?: 'images_aggregate';
  aggregate?: Maybe<Images_Aggregate_Fields>;
  nodes: Array<Images>;
};

/** aggregate fields of "images" */
export type Images_Aggregate_Fields = {
  __typename?: 'images_aggregate_fields';
  avg?: Maybe<Images_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Images_Max_Fields>;
  min?: Maybe<Images_Min_Fields>;
  stddev?: Maybe<Images_Stddev_Fields>;
  stddev_pop?: Maybe<Images_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Images_Stddev_Samp_Fields>;
  sum?: Maybe<Images_Sum_Fields>;
  var_pop?: Maybe<Images_Var_Pop_Fields>;
  var_samp?: Maybe<Images_Var_Samp_Fields>;
  variance?: Maybe<Images_Variance_Fields>;
};


/** aggregate fields of "images" */
export type Images_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Images_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Images_Append_Input = {
  exifData?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Images_Avg_Fields = {
  __typename?: 'images_avg_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "images". All fields are combined with a logical 'AND'. */
export type Images_Bool_Exp = {
  _and?: InputMaybe<Array<Images_Bool_Exp>>;
  _not?: InputMaybe<Images_Bool_Exp>;
  _or?: InputMaybe<Array<Images_Bool_Exp>>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  caption?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  exifData?: InputMaybe<Jsonb_Comparison_Exp>;
  height?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  license?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  width?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "images" */
export enum Images_Constraint {
  /** unique or primary key constraint on columns "id" */
  ImagesPkey = 'images_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Images_Delete_At_Path_Input = {
  exifData?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Images_Delete_Elem_Input = {
  exifData?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Images_Delete_Key_Input = {
  exifData?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "images" */
export type Images_Inc_Input = {
  height?: InputMaybe<Scalars['numeric']['input']>;
  width?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "images" */
export type Images_Insert_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  caption?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  exifData?: InputMaybe<Scalars['jsonb']['input']>;
  height?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  license?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  width?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Images_Max_Fields = {
  __typename?: 'images_max_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  caption?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  license?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  width?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Images_Min_Fields = {
  __typename?: 'images_min_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  caption?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  license?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  width?: Maybe<Scalars['numeric']['output']>;
};

/** response of any mutation on the table "images" */
export type Images_Mutation_Response = {
  __typename?: 'images_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Images>;
};

/** input type for inserting object relation for remote table "images" */
export type Images_Obj_Rel_Insert_Input = {
  data: Images_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Images_On_Conflict>;
};

/** on_conflict condition type for table "images" */
export type Images_On_Conflict = {
  constraint: Images_Constraint;
  update_columns?: Array<Images_Update_Column>;
  where?: InputMaybe<Images_Bool_Exp>;
};

/** Ordering options when selecting data from "images". */
export type Images_Order_By = {
  author_id?: InputMaybe<Order_By>;
  caption?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  exifData?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  license?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** primary key columns input for table: images */
export type Images_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Images_Prepend_Input = {
  exifData?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "images" */
export enum Images_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Caption = 'caption',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  ExifData = 'exifData',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  License = 'license',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Width = 'width'
}

/** input type for updating data in table "images" */
export type Images_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  caption?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  exifData?: InputMaybe<Scalars['jsonb']['input']>;
  height?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  license?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  width?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Images_Stddev_Fields = {
  __typename?: 'images_stddev_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Images_Stddev_Pop_Fields = {
  __typename?: 'images_stddev_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Images_Stddev_Samp_Fields = {
  __typename?: 'images_stddev_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "images" */
export type Images_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Images_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Images_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  caption?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  exifData?: InputMaybe<Scalars['jsonb']['input']>;
  height?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  license?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  width?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Images_Sum_Fields = {
  __typename?: 'images_sum_fields';
  height?: Maybe<Scalars['numeric']['output']>;
  width?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "images" */
export enum Images_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Caption = 'caption',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  ExifData = 'exifData',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  License = 'license',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Width = 'width'
}

export type Images_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Images_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Images_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Images_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Images_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Images_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Images_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Images_Set_Input>;
  /** filter the rows which have to be updated */
  where: Images_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Images_Var_Pop_Fields = {
  __typename?: 'images_var_pop_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Images_Var_Samp_Fields = {
  __typename?: 'images_var_samp_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Images_Variance_Fields = {
  __typename?: 'images_variance_fields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "answers" */
  delete_answers?: Maybe<Answers_Mutation_Response>;
  /** delete single row from the table: "answers" */
  delete_answers_by_pk?: Maybe<Answers>;
  /** delete data from the table: "articles" */
  delete_articles?: Maybe<Articles_Mutation_Response>;
  /** delete single row from the table: "articles" */
  delete_articles_by_pk?: Maybe<Articles>;
  /** delete data from the table: "events" */
  delete_events?: Maybe<Events_Mutation_Response>;
  /** delete single row from the table: "events" */
  delete_events_by_pk?: Maybe<Events>;
  /** delete data from the table: "images" */
  delete_images?: Maybe<Images_Mutation_Response>;
  /** delete single row from the table: "images" */
  delete_images_by_pk?: Maybe<Images>;
  /** delete data from the table: "pages" */
  delete_pages?: Maybe<Pages_Mutation_Response>;
  /** delete single row from the table: "pages" */
  delete_pages_by_pk?: Maybe<Pages>;
  /** delete data from the table: "persons" */
  delete_persons?: Maybe<Persons_Mutation_Response>;
  /** delete single row from the table: "persons" */
  delete_persons_by_pk?: Maybe<Persons>;
  /** delete data from the table: "questions" */
  delete_questions?: Maybe<Questions_Mutation_Response>;
  /** delete single row from the table: "questions" */
  delete_questions_by_pk?: Maybe<Questions>;
  /** insert data into the table: "answers" */
  insert_answers?: Maybe<Answers_Mutation_Response>;
  /** insert a single row into the table: "answers" */
  insert_answers_one?: Maybe<Answers>;
  /** insert data into the table: "articles" */
  insert_articles?: Maybe<Articles_Mutation_Response>;
  /** insert a single row into the table: "articles" */
  insert_articles_one?: Maybe<Articles>;
  /** insert data into the table: "events" */
  insert_events?: Maybe<Events_Mutation_Response>;
  /** insert a single row into the table: "events" */
  insert_events_one?: Maybe<Events>;
  /** insert data into the table: "images" */
  insert_images?: Maybe<Images_Mutation_Response>;
  /** insert a single row into the table: "images" */
  insert_images_one?: Maybe<Images>;
  /** insert data into the table: "pages" */
  insert_pages?: Maybe<Pages_Mutation_Response>;
  /** insert a single row into the table: "pages" */
  insert_pages_one?: Maybe<Pages>;
  /** insert data into the table: "persons" */
  insert_persons?: Maybe<Persons_Mutation_Response>;
  /** insert a single row into the table: "persons" */
  insert_persons_one?: Maybe<Persons>;
  /** insert data into the table: "questions" */
  insert_questions?: Maybe<Questions_Mutation_Response>;
  /** insert a single row into the table: "questions" */
  insert_questions_one?: Maybe<Questions>;
  /** update data of the table: "answers" */
  update_answers?: Maybe<Answers_Mutation_Response>;
  /** update single row of the table: "answers" */
  update_answers_by_pk?: Maybe<Answers>;
  /** update multiples rows of table: "answers" */
  update_answers_many?: Maybe<Array<Maybe<Answers_Mutation_Response>>>;
  /** update data of the table: "articles" */
  update_articles?: Maybe<Articles_Mutation_Response>;
  /** update single row of the table: "articles" */
  update_articles_by_pk?: Maybe<Articles>;
  /** update multiples rows of table: "articles" */
  update_articles_many?: Maybe<Array<Maybe<Articles_Mutation_Response>>>;
  /** update data of the table: "events" */
  update_events?: Maybe<Events_Mutation_Response>;
  /** update single row of the table: "events" */
  update_events_by_pk?: Maybe<Events>;
  /** update multiples rows of table: "events" */
  update_events_many?: Maybe<Array<Maybe<Events_Mutation_Response>>>;
  /** update data of the table: "images" */
  update_images?: Maybe<Images_Mutation_Response>;
  /** update single row of the table: "images" */
  update_images_by_pk?: Maybe<Images>;
  /** update multiples rows of table: "images" */
  update_images_many?: Maybe<Array<Maybe<Images_Mutation_Response>>>;
  /** update data of the table: "pages" */
  update_pages?: Maybe<Pages_Mutation_Response>;
  /** update single row of the table: "pages" */
  update_pages_by_pk?: Maybe<Pages>;
  /** update multiples rows of table: "pages" */
  update_pages_many?: Maybe<Array<Maybe<Pages_Mutation_Response>>>;
  /** update data of the table: "persons" */
  update_persons?: Maybe<Persons_Mutation_Response>;
  /** update single row of the table: "persons" */
  update_persons_by_pk?: Maybe<Persons>;
  /** update multiples rows of table: "persons" */
  update_persons_many?: Maybe<Array<Maybe<Persons_Mutation_Response>>>;
  /** update data of the table: "questions" */
  update_questions?: Maybe<Questions_Mutation_Response>;
  /** update single row of the table: "questions" */
  update_questions_by_pk?: Maybe<Questions>;
  /** update multiples rows of table: "questions" */
  update_questions_many?: Maybe<Array<Maybe<Questions_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AnswersArgs = {
  where: Answers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Answers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ArticlesArgs = {
  where: Articles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Articles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_EventsArgs = {
  where: Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Events_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ImagesArgs = {
  where: Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Images_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PagesArgs = {
  where: Pages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Pages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PersonsArgs = {
  where: Persons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Persons_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_QuestionsArgs = {
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Questions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AnswersArgs = {
  objects: Array<Answers_Insert_Input>;
  on_conflict?: InputMaybe<Answers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Answers_OneArgs = {
  object: Answers_Insert_Input;
  on_conflict?: InputMaybe<Answers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ArticlesArgs = {
  objects: Array<Articles_Insert_Input>;
  on_conflict?: InputMaybe<Articles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Articles_OneArgs = {
  object: Articles_Insert_Input;
  on_conflict?: InputMaybe<Articles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EventsArgs = {
  objects: Array<Events_Insert_Input>;
  on_conflict?: InputMaybe<Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Events_OneArgs = {
  object: Events_Insert_Input;
  on_conflict?: InputMaybe<Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ImagesArgs = {
  objects: Array<Images_Insert_Input>;
  on_conflict?: InputMaybe<Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Images_OneArgs = {
  object: Images_Insert_Input;
  on_conflict?: InputMaybe<Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PagesArgs = {
  objects: Array<Pages_Insert_Input>;
  on_conflict?: InputMaybe<Pages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Pages_OneArgs = {
  object: Pages_Insert_Input;
  on_conflict?: InputMaybe<Pages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PersonsArgs = {
  objects: Array<Persons_Insert_Input>;
  on_conflict?: InputMaybe<Persons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Persons_OneArgs = {
  object: Persons_Insert_Input;
  on_conflict?: InputMaybe<Persons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestionsArgs = {
  objects: Array<Questions_Insert_Input>;
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questions_OneArgs = {
  object: Questions_Insert_Input;
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AnswersArgs = {
  _set?: InputMaybe<Answers_Set_Input>;
  where: Answers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Answers_By_PkArgs = {
  _set?: InputMaybe<Answers_Set_Input>;
  pk_columns: Answers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Answers_ManyArgs = {
  updates: Array<Answers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ArticlesArgs = {
  _set?: InputMaybe<Articles_Set_Input>;
  where: Articles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Articles_By_PkArgs = {
  _set?: InputMaybe<Articles_Set_Input>;
  pk_columns: Articles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Articles_ManyArgs = {
  updates: Array<Articles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_EventsArgs = {
  _append?: InputMaybe<Events_Append_Input>;
  _delete_at_path?: InputMaybe<Events_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Events_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Events_Delete_Key_Input>;
  _prepend?: InputMaybe<Events_Prepend_Input>;
  _set?: InputMaybe<Events_Set_Input>;
  where: Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Events_By_PkArgs = {
  _append?: InputMaybe<Events_Append_Input>;
  _delete_at_path?: InputMaybe<Events_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Events_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Events_Delete_Key_Input>;
  _prepend?: InputMaybe<Events_Prepend_Input>;
  _set?: InputMaybe<Events_Set_Input>;
  pk_columns: Events_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Events_ManyArgs = {
  updates: Array<Events_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ImagesArgs = {
  _append?: InputMaybe<Images_Append_Input>;
  _delete_at_path?: InputMaybe<Images_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Images_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Images_Delete_Key_Input>;
  _inc?: InputMaybe<Images_Inc_Input>;
  _prepend?: InputMaybe<Images_Prepend_Input>;
  _set?: InputMaybe<Images_Set_Input>;
  where: Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Images_By_PkArgs = {
  _append?: InputMaybe<Images_Append_Input>;
  _delete_at_path?: InputMaybe<Images_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Images_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Images_Delete_Key_Input>;
  _inc?: InputMaybe<Images_Inc_Input>;
  _prepend?: InputMaybe<Images_Prepend_Input>;
  _set?: InputMaybe<Images_Set_Input>;
  pk_columns: Images_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Images_ManyArgs = {
  updates: Array<Images_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PagesArgs = {
  _append?: InputMaybe<Pages_Append_Input>;
  _delete_at_path?: InputMaybe<Pages_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Pages_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Pages_Delete_Key_Input>;
  _inc?: InputMaybe<Pages_Inc_Input>;
  _prepend?: InputMaybe<Pages_Prepend_Input>;
  _set?: InputMaybe<Pages_Set_Input>;
  where: Pages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Pages_By_PkArgs = {
  _append?: InputMaybe<Pages_Append_Input>;
  _delete_at_path?: InputMaybe<Pages_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Pages_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Pages_Delete_Key_Input>;
  _inc?: InputMaybe<Pages_Inc_Input>;
  _prepend?: InputMaybe<Pages_Prepend_Input>;
  _set?: InputMaybe<Pages_Set_Input>;
  pk_columns: Pages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Pages_ManyArgs = {
  updates: Array<Pages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PersonsArgs = {
  _set?: InputMaybe<Persons_Set_Input>;
  where: Persons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Persons_By_PkArgs = {
  _set?: InputMaybe<Persons_Set_Input>;
  pk_columns: Persons_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Persons_ManyArgs = {
  updates: Array<Persons_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionsArgs = {
  _set?: InputMaybe<Questions_Set_Input>;
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Questions_By_PkArgs = {
  _set?: InputMaybe<Questions_Set_Input>;
  pk_columns: Questions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Questions_ManyArgs = {
  updates: Array<Questions_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "pages" */
export type Pages = {
  __typename?: 'pages';
  /** An object relationship */
  author?: Maybe<Persons>;
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  genre?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  /** An object relationship */
  image?: Maybe<Images>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  in_language: Scalars['String']['output'];
  /** An object relationship */
  isPartOf?: Maybe<Pages>;
  is_part_of?: Maybe<Scalars['uuid']['output']>;
  keywords?: Maybe<Scalars['jsonb']['output']>;
  license?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  position: Scalars['numeric']['output'];
  published_at?: Maybe<Scalars['timestamptz']['output']>;
  text: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "pages" */
export type PagesKeywordsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "pages" */
export type Pages_Aggregate = {
  __typename?: 'pages_aggregate';
  aggregate?: Maybe<Pages_Aggregate_Fields>;
  nodes: Array<Pages>;
};

export type Pages_Aggregate_Bool_Exp = {
  count?: InputMaybe<Pages_Aggregate_Bool_Exp_Count>;
};

export type Pages_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Pages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Pages_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "pages" */
export type Pages_Aggregate_Fields = {
  __typename?: 'pages_aggregate_fields';
  avg?: Maybe<Pages_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Pages_Max_Fields>;
  min?: Maybe<Pages_Min_Fields>;
  stddev?: Maybe<Pages_Stddev_Fields>;
  stddev_pop?: Maybe<Pages_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pages_Stddev_Samp_Fields>;
  sum?: Maybe<Pages_Sum_Fields>;
  var_pop?: Maybe<Pages_Var_Pop_Fields>;
  var_samp?: Maybe<Pages_Var_Samp_Fields>;
  variance?: Maybe<Pages_Variance_Fields>;
};


/** aggregate fields of "pages" */
export type Pages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "pages" */
export type Pages_Aggregate_Order_By = {
  avg?: InputMaybe<Pages_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pages_Max_Order_By>;
  min?: InputMaybe<Pages_Min_Order_By>;
  stddev?: InputMaybe<Pages_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Pages_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Pages_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Pages_Sum_Order_By>;
  var_pop?: InputMaybe<Pages_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Pages_Var_Samp_Order_By>;
  variance?: InputMaybe<Pages_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Pages_Append_Input = {
  keywords?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "pages" */
export type Pages_Arr_Rel_Insert_Input = {
  data: Array<Pages_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Pages_On_Conflict>;
};

/** aggregate avg on columns */
export type Pages_Avg_Fields = {
  __typename?: 'pages_avg_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "pages" */
export type Pages_Avg_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pages". All fields are combined with a logical 'AND'. */
export type Pages_Bool_Exp = {
  _and?: InputMaybe<Array<Pages_Bool_Exp>>;
  _not?: InputMaybe<Pages_Bool_Exp>;
  _or?: InputMaybe<Array<Pages_Bool_Exp>>;
  author?: InputMaybe<Persons_Bool_Exp>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  genre?: InputMaybe<String_Comparison_Exp>;
  headline?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<Images_Bool_Exp>;
  image_id?: InputMaybe<Uuid_Comparison_Exp>;
  in_language?: InputMaybe<String_Comparison_Exp>;
  isPartOf?: InputMaybe<Pages_Bool_Exp>;
  is_part_of?: InputMaybe<Uuid_Comparison_Exp>;
  keywords?: InputMaybe<Jsonb_Comparison_Exp>;
  license?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  position?: InputMaybe<Numeric_Comparison_Exp>;
  published_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "pages" */
export enum Pages_Constraint {
  /** unique or primary key constraint on columns "id" */
  PagesPkey = 'pages_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Pages_Delete_At_Path_Input = {
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Pages_Delete_Elem_Input = {
  keywords?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Pages_Delete_Key_Input = {
  keywords?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "pages" */
export type Pages_Inc_Input = {
  position?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "pages" */
export type Pages_Insert_Input = {
  author?: InputMaybe<Persons_Obj_Rel_Insert_Input>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Images_Obj_Rel_Insert_Input>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  in_language?: InputMaybe<Scalars['String']['input']>;
  isPartOf?: InputMaybe<Pages_Obj_Rel_Insert_Input>;
  is_part_of?: InputMaybe<Scalars['uuid']['input']>;
  keywords?: InputMaybe<Scalars['jsonb']['input']>;
  license?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['numeric']['input']>;
  published_at?: InputMaybe<Scalars['timestamptz']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Pages_Max_Fields = {
  __typename?: 'pages_max_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  genre?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  in_language?: Maybe<Scalars['String']['output']>;
  is_part_of?: Maybe<Scalars['uuid']['output']>;
  license?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['numeric']['output']>;
  published_at?: Maybe<Scalars['timestamptz']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "pages" */
export type Pages_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  genre?: InputMaybe<Order_By>;
  headline?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  in_language?: InputMaybe<Order_By>;
  is_part_of?: InputMaybe<Order_By>;
  license?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  published_at?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Pages_Min_Fields = {
  __typename?: 'pages_min_fields';
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  genre?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  in_language?: Maybe<Scalars['String']['output']>;
  is_part_of?: Maybe<Scalars['uuid']['output']>;
  license?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['numeric']['output']>;
  published_at?: Maybe<Scalars['timestamptz']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "pages" */
export type Pages_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  genre?: InputMaybe<Order_By>;
  headline?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  in_language?: InputMaybe<Order_By>;
  is_part_of?: InputMaybe<Order_By>;
  license?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  published_at?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "pages" */
export type Pages_Mutation_Response = {
  __typename?: 'pages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Pages>;
};

/** input type for inserting object relation for remote table "pages" */
export type Pages_Obj_Rel_Insert_Input = {
  data: Pages_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Pages_On_Conflict>;
};

/** on_conflict condition type for table "pages" */
export type Pages_On_Conflict = {
  constraint: Pages_Constraint;
  update_columns?: Array<Pages_Update_Column>;
  where?: InputMaybe<Pages_Bool_Exp>;
};

/** Ordering options when selecting data from "pages". */
export type Pages_Order_By = {
  author?: InputMaybe<Persons_Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  genre?: InputMaybe<Order_By>;
  headline?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Images_Order_By>;
  image_id?: InputMaybe<Order_By>;
  in_language?: InputMaybe<Order_By>;
  isPartOf?: InputMaybe<Pages_Order_By>;
  is_part_of?: InputMaybe<Order_By>;
  keywords?: InputMaybe<Order_By>;
  license?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  published_at?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pages */
export type Pages_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Pages_Prepend_Input = {
  keywords?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "pages" */
export enum Pages_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Genre = 'genre',
  /** column name */
  Headline = 'headline',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  InLanguage = 'in_language',
  /** column name */
  IsPartOf = 'is_part_of',
  /** column name */
  Keywords = 'keywords',
  /** column name */
  License = 'license',
  /** column name */
  Name = 'name',
  /** column name */
  Position = 'position',
  /** column name */
  PublishedAt = 'published_at',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "pages" */
export type Pages_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  in_language?: InputMaybe<Scalars['String']['input']>;
  is_part_of?: InputMaybe<Scalars['uuid']['input']>;
  keywords?: InputMaybe<Scalars['jsonb']['input']>;
  license?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['numeric']['input']>;
  published_at?: InputMaybe<Scalars['timestamptz']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Pages_Stddev_Fields = {
  __typename?: 'pages_stddev_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "pages" */
export type Pages_Stddev_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pages_Stddev_Pop_Fields = {
  __typename?: 'pages_stddev_pop_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "pages" */
export type Pages_Stddev_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pages_Stddev_Samp_Fields = {
  __typename?: 'pages_stddev_samp_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "pages" */
export type Pages_Stddev_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "pages" */
export type Pages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pages_Stream_Cursor_Value_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  in_language?: InputMaybe<Scalars['String']['input']>;
  is_part_of?: InputMaybe<Scalars['uuid']['input']>;
  keywords?: InputMaybe<Scalars['jsonb']['input']>;
  license?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['numeric']['input']>;
  published_at?: InputMaybe<Scalars['timestamptz']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Pages_Sum_Fields = {
  __typename?: 'pages_sum_fields';
  position?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "pages" */
export type Pages_Sum_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** update columns of table "pages" */
export enum Pages_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Genre = 'genre',
  /** column name */
  Headline = 'headline',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  InLanguage = 'in_language',
  /** column name */
  IsPartOf = 'is_part_of',
  /** column name */
  Keywords = 'keywords',
  /** column name */
  License = 'license',
  /** column name */
  Name = 'name',
  /** column name */
  Position = 'position',
  /** column name */
  PublishedAt = 'published_at',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

export type Pages_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Pages_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Pages_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Pages_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Pages_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Pages_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Pages_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Pages_Set_Input>;
  /** filter the rows which have to be updated */
  where: Pages_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Pages_Var_Pop_Fields = {
  __typename?: 'pages_var_pop_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "pages" */
export type Pages_Var_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pages_Var_Samp_Fields = {
  __typename?: 'pages_var_samp_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "pages" */
export type Pages_Var_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Pages_Variance_Fields = {
  __typename?: 'pages_variance_fields';
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "pages" */
export type Pages_Variance_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** columns and relationships of "persons" */
export type Persons = {
  __typename?: 'persons';
  additional_name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  articles: Array<Articles>;
  /** An aggregate relationship */
  articles_aggregate: Articles_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  family_name?: Maybe<Scalars['String']['output']>;
  given_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  image?: Maybe<Scalars['uuid']['output']>;
  job_title?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** An array relationship */
  pages: Array<Pages>;
  /** An aggregate relationship */
  pages_aggregate: Pages_Aggregate;
  /** An array relationship */
  questions: Array<Questions>;
  /** An aggregate relationship */
  questions_aggregate: Questions_Aggregate;
  telephone?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "persons" */
export type PersonsArticlesArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsArticles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsPagesArgs = {
  distinct_on?: InputMaybe<Array<Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pages_Order_By>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsPages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pages_Order_By>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


/** columns and relationships of "persons" */
export type PersonsQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};

/** aggregated selection of "persons" */
export type Persons_Aggregate = {
  __typename?: 'persons_aggregate';
  aggregate?: Maybe<Persons_Aggregate_Fields>;
  nodes: Array<Persons>;
};

/** aggregate fields of "persons" */
export type Persons_Aggregate_Fields = {
  __typename?: 'persons_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Persons_Max_Fields>;
  min?: Maybe<Persons_Min_Fields>;
};


/** aggregate fields of "persons" */
export type Persons_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Persons_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "persons". All fields are combined with a logical 'AND'. */
export type Persons_Bool_Exp = {
  _and?: InputMaybe<Array<Persons_Bool_Exp>>;
  _not?: InputMaybe<Persons_Bool_Exp>;
  _or?: InputMaybe<Array<Persons_Bool_Exp>>;
  additional_name?: InputMaybe<String_Comparison_Exp>;
  articles?: InputMaybe<Articles_Bool_Exp>;
  articles_aggregate?: InputMaybe<Articles_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  family_name?: InputMaybe<String_Comparison_Exp>;
  given_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<Uuid_Comparison_Exp>;
  job_title?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  pages?: InputMaybe<Pages_Bool_Exp>;
  pages_aggregate?: InputMaybe<Pages_Aggregate_Bool_Exp>;
  questions?: InputMaybe<Questions_Bool_Exp>;
  questions_aggregate?: InputMaybe<Questions_Aggregate_Bool_Exp>;
  telephone?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "persons" */
export enum Persons_Constraint {
  /** unique or primary key constraint on columns "id" */
  PersonsPkey = 'persons_pkey'
}

/** input type for inserting data into table "persons" */
export type Persons_Insert_Input = {
  additional_name?: InputMaybe<Scalars['String']['input']>;
  articles?: InputMaybe<Articles_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  family_name?: InputMaybe<Scalars['String']['input']>;
  given_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['uuid']['input']>;
  job_title?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pages?: InputMaybe<Pages_Arr_Rel_Insert_Input>;
  questions?: InputMaybe<Questions_Arr_Rel_Insert_Input>;
  telephone?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Persons_Max_Fields = {
  __typename?: 'persons_max_fields';
  additional_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  family_name?: Maybe<Scalars['String']['output']>;
  given_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['uuid']['output']>;
  job_title?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  telephone?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Persons_Min_Fields = {
  __typename?: 'persons_min_fields';
  additional_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  family_name?: Maybe<Scalars['String']['output']>;
  given_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['uuid']['output']>;
  job_title?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  telephone?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "persons" */
export type Persons_Mutation_Response = {
  __typename?: 'persons_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Persons>;
};

/** input type for inserting object relation for remote table "persons" */
export type Persons_Obj_Rel_Insert_Input = {
  data: Persons_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Persons_On_Conflict>;
};

/** on_conflict condition type for table "persons" */
export type Persons_On_Conflict = {
  constraint: Persons_Constraint;
  update_columns?: Array<Persons_Update_Column>;
  where?: InputMaybe<Persons_Bool_Exp>;
};

/** Ordering options when selecting data from "persons". */
export type Persons_Order_By = {
  additional_name?: InputMaybe<Order_By>;
  articles_aggregate?: InputMaybe<Articles_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  family_name?: InputMaybe<Order_By>;
  given_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  job_title?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pages_aggregate?: InputMaybe<Pages_Aggregate_Order_By>;
  questions_aggregate?: InputMaybe<Questions_Aggregate_Order_By>;
  telephone?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: persons */
export type Persons_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "persons" */
export enum Persons_Select_Column {
  /** column name */
  AdditionalName = 'additional_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  FamilyName = 'family_name',
  /** column name */
  GivenName = 'given_name',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  JobTitle = 'job_title',
  /** column name */
  Name = 'name',
  /** column name */
  Telephone = 'telephone',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "persons" */
export type Persons_Set_Input = {
  additional_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  family_name?: InputMaybe<Scalars['String']['input']>;
  given_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['uuid']['input']>;
  job_title?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  telephone?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "persons" */
export type Persons_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Persons_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Persons_Stream_Cursor_Value_Input = {
  additional_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  family_name?: InputMaybe<Scalars['String']['input']>;
  given_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['uuid']['input']>;
  job_title?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  telephone?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "persons" */
export enum Persons_Update_Column {
  /** column name */
  AdditionalName = 'additional_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  FamilyName = 'family_name',
  /** column name */
  GivenName = 'given_name',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  JobTitle = 'job_title',
  /** column name */
  Name = 'name',
  /** column name */
  Telephone = 'telephone',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

export type Persons_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Persons_Set_Input>;
  /** filter the rows which have to be updated */
  where: Persons_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "answers" */
  answers: Array<Answers>;
  /** fetch aggregated fields from the table: "answers" */
  answers_aggregate: Answers_Aggregate;
  /** fetch data from the table: "answers" using primary key columns */
  answers_by_pk?: Maybe<Answers>;
  /** An array relationship */
  articles: Array<Articles>;
  /** An aggregate relationship */
  articles_aggregate: Articles_Aggregate;
  /** fetch data from the table: "articles" using primary key columns */
  articles_by_pk?: Maybe<Articles>;
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch aggregated fields from the table: "events" */
  events_aggregate: Events_Aggregate;
  /** fetch data from the table: "events" using primary key columns */
  events_by_pk?: Maybe<Events>;
  /** fetch data from the table: "images" */
  images: Array<Images>;
  /** fetch aggregated fields from the table: "images" */
  images_aggregate: Images_Aggregate;
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk?: Maybe<Images>;
  /** An array relationship */
  pages: Array<Pages>;
  /** An aggregate relationship */
  pages_aggregate: Pages_Aggregate;
  /** fetch data from the table: "pages" using primary key columns */
  pages_by_pk?: Maybe<Pages>;
  /** fetch data from the table: "persons" */
  persons: Array<Persons>;
  /** fetch aggregated fields from the table: "persons" */
  persons_aggregate: Persons_Aggregate;
  /** fetch data from the table: "persons" using primary key columns */
  persons_by_pk?: Maybe<Persons>;
  /** An array relationship */
  questions: Array<Questions>;
  /** An aggregate relationship */
  questions_aggregate: Questions_Aggregate;
  /** fetch data from the table: "questions" using primary key columns */
  questions_by_pk?: Maybe<Questions>;
};


export type Query_RootAnswersArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Query_RootAnswers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Query_RootAnswers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootArticlesArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


export type Query_RootArticles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


export type Query_RootArticles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Query_RootEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Query_RootEvents_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootImagesArgs = {
  distinct_on?: InputMaybe<Array<Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Images_Order_By>>;
  where?: InputMaybe<Images_Bool_Exp>;
};


export type Query_RootImages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Images_Order_By>>;
  where?: InputMaybe<Images_Bool_Exp>;
};


export type Query_RootImages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPagesArgs = {
  distinct_on?: InputMaybe<Array<Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pages_Order_By>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


export type Query_RootPages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pages_Order_By>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


export type Query_RootPages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPersonsArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Persons_Order_By>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};


export type Query_RootPersons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Persons_Order_By>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};


export type Query_RootPersons_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Query_RootQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Query_RootQuestions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "questions" */
export type Questions = {
  __typename?: 'questions';
  accepted_answer_id?: Maybe<Scalars['uuid']['output']>;
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  image_id?: Maybe<Scalars['uuid']['output']>;
  name: Scalars['String']['output'];
  suggested_answer_id?: Maybe<Scalars['uuid']['output']>;
  text: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "questions" */
export type Questions_Aggregate = {
  __typename?: 'questions_aggregate';
  aggregate?: Maybe<Questions_Aggregate_Fields>;
  nodes: Array<Questions>;
};

export type Questions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Questions_Aggregate_Bool_Exp_Count>;
};

export type Questions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Questions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Questions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "questions" */
export type Questions_Aggregate_Fields = {
  __typename?: 'questions_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Questions_Max_Fields>;
  min?: Maybe<Questions_Min_Fields>;
};


/** aggregate fields of "questions" */
export type Questions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Questions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "questions" */
export type Questions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Questions_Max_Order_By>;
  min?: InputMaybe<Questions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "questions" */
export type Questions_Arr_Rel_Insert_Input = {
  data: Array<Questions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "questions". All fields are combined with a logical 'AND'. */
export type Questions_Bool_Exp = {
  _and?: InputMaybe<Array<Questions_Bool_Exp>>;
  _not?: InputMaybe<Questions_Bool_Exp>;
  _or?: InputMaybe<Array<Questions_Bool_Exp>>;
  accepted_answer_id?: InputMaybe<Uuid_Comparison_Exp>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  suggested_answer_id?: InputMaybe<Uuid_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "questions" */
export enum Questions_Constraint {
  /** unique or primary key constraint on columns "id" */
  QuestionsPkey = 'questions_pkey'
}

/** input type for inserting data into table "questions" */
export type Questions_Insert_Input = {
  accepted_answer_id?: InputMaybe<Scalars['uuid']['input']>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  suggested_answer_id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Questions_Max_Fields = {
  __typename?: 'questions_max_fields';
  accepted_answer_id?: Maybe<Scalars['uuid']['output']>;
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  suggested_answer_id?: Maybe<Scalars['uuid']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "questions" */
export type Questions_Max_Order_By = {
  accepted_answer_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  suggested_answer_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Questions_Min_Fields = {
  __typename?: 'questions_min_fields';
  accepted_answer_id?: Maybe<Scalars['uuid']['output']>;
  author_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image_id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  suggested_answer_id?: Maybe<Scalars['uuid']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "questions" */
export type Questions_Min_Order_By = {
  accepted_answer_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  suggested_answer_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "questions" */
export type Questions_Mutation_Response = {
  __typename?: 'questions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Questions>;
};

/** on_conflict condition type for table "questions" */
export type Questions_On_Conflict = {
  constraint: Questions_Constraint;
  update_columns?: Array<Questions_Update_Column>;
  where?: InputMaybe<Questions_Bool_Exp>;
};

/** Ordering options when selecting data from "questions". */
export type Questions_Order_By = {
  accepted_answer_id?: InputMaybe<Order_By>;
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  suggested_answer_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: questions */
export type Questions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "questions" */
export enum Questions_Select_Column {
  /** column name */
  AcceptedAnswerId = 'accepted_answer_id',
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  Name = 'name',
  /** column name */
  SuggestedAnswerId = 'suggested_answer_id',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "questions" */
export type Questions_Set_Input = {
  accepted_answer_id?: InputMaybe<Scalars['uuid']['input']>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  suggested_answer_id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "questions" */
export type Questions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Questions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Questions_Stream_Cursor_Value_Input = {
  accepted_answer_id?: InputMaybe<Scalars['uuid']['input']>;
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image_id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  suggested_answer_id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "questions" */
export enum Questions_Update_Column {
  /** column name */
  AcceptedAnswerId = 'accepted_answer_id',
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  Name = 'name',
  /** column name */
  SuggestedAnswerId = 'suggested_answer_id',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Questions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Questions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Questions_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "answers" */
  answers: Array<Answers>;
  /** fetch aggregated fields from the table: "answers" */
  answers_aggregate: Answers_Aggregate;
  /** fetch data from the table: "answers" using primary key columns */
  answers_by_pk?: Maybe<Answers>;
  /** fetch data from the table in a streaming manner: "answers" */
  answers_stream: Array<Answers>;
  /** An array relationship */
  articles: Array<Articles>;
  /** An aggregate relationship */
  articles_aggregate: Articles_Aggregate;
  /** fetch data from the table: "articles" using primary key columns */
  articles_by_pk?: Maybe<Articles>;
  /** fetch data from the table in a streaming manner: "articles" */
  articles_stream: Array<Articles>;
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch aggregated fields from the table: "events" */
  events_aggregate: Events_Aggregate;
  /** fetch data from the table: "events" using primary key columns */
  events_by_pk?: Maybe<Events>;
  /** fetch data from the table in a streaming manner: "events" */
  events_stream: Array<Events>;
  /** fetch data from the table: "images" */
  images: Array<Images>;
  /** fetch aggregated fields from the table: "images" */
  images_aggregate: Images_Aggregate;
  /** fetch data from the table: "images" using primary key columns */
  images_by_pk?: Maybe<Images>;
  /** fetch data from the table in a streaming manner: "images" */
  images_stream: Array<Images>;
  /** An array relationship */
  pages: Array<Pages>;
  /** An aggregate relationship */
  pages_aggregate: Pages_Aggregate;
  /** fetch data from the table: "pages" using primary key columns */
  pages_by_pk?: Maybe<Pages>;
  /** fetch data from the table in a streaming manner: "pages" */
  pages_stream: Array<Pages>;
  /** fetch data from the table: "persons" */
  persons: Array<Persons>;
  /** fetch aggregated fields from the table: "persons" */
  persons_aggregate: Persons_Aggregate;
  /** fetch data from the table: "persons" using primary key columns */
  persons_by_pk?: Maybe<Persons>;
  /** fetch data from the table in a streaming manner: "persons" */
  persons_stream: Array<Persons>;
  /** An array relationship */
  questions: Array<Questions>;
  /** An aggregate relationship */
  questions_aggregate: Questions_Aggregate;
  /** fetch data from the table: "questions" using primary key columns */
  questions_by_pk?: Maybe<Questions>;
  /** fetch data from the table in a streaming manner: "questions" */
  questions_stream: Array<Questions>;
};


export type Subscription_RootAnswersArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Subscription_RootAnswers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Subscription_RootAnswers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAnswers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Answers_Stream_Cursor_Input>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Subscription_RootArticlesArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


export type Subscription_RootArticles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Articles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Articles_Order_By>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


export type Subscription_RootArticles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootArticles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Articles_Stream_Cursor_Input>>;
  where?: InputMaybe<Articles_Bool_Exp>;
};


export type Subscription_RootEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootEvents_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootEvents_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Events_Stream_Cursor_Input>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootImagesArgs = {
  distinct_on?: InputMaybe<Array<Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Images_Order_By>>;
  where?: InputMaybe<Images_Bool_Exp>;
};


export type Subscription_RootImages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Images_Order_By>>;
  where?: InputMaybe<Images_Bool_Exp>;
};


export type Subscription_RootImages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootImages_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Images_Stream_Cursor_Input>>;
  where?: InputMaybe<Images_Bool_Exp>;
};


export type Subscription_RootPagesArgs = {
  distinct_on?: InputMaybe<Array<Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pages_Order_By>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


export type Subscription_RootPages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Pages_Order_By>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


export type Subscription_RootPages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPages_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Pages_Stream_Cursor_Input>>;
  where?: InputMaybe<Pages_Bool_Exp>;
};


export type Subscription_RootPersonsArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Persons_Order_By>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};


export type Subscription_RootPersons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Persons_Order_By>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};


export type Subscription_RootPersons_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPersons_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Persons_Stream_Cursor_Input>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};


export type Subscription_RootQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Subscription_RootQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Subscription_RootQuestions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootQuestions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Questions_Stream_Cursor_Input>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};



export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;