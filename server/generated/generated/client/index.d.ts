
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Author
 * 
 */
export type Author = $Result.DefaultSelection<Prisma.$AuthorPayload>
/**
 * Model Profession
 * 
 */
export type Profession = $Result.DefaultSelection<Prisma.$ProfessionPayload>
/**
 * Model Tweet
 * 
 */
export type Tweet = $Result.DefaultSelection<Prisma.$TweetPayload>
/**
 * Model Like
 * 
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<ExtArgs>;

  /**
   * `prisma.profession`: Exposes CRUD operations for the **Profession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professions
    * const professions = await prisma.profession.findMany()
    * ```
    */
  get profession(): Prisma.ProfessionDelegate<ExtArgs>;

  /**
   * `prisma.tweet`: Exposes CRUD operations for the **Tweet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tweets
    * const tweets = await prisma.tweet.findMany()
    * ```
    */
  get tweet(): Prisma.TweetDelegate<ExtArgs>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Author: 'Author',
    Profession: 'Profession',
    Tweet: 'Tweet',
    Like: 'Like'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "author" | "profession" | "tweet" | "like"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Author: {
        payload: Prisma.$AuthorPayload<ExtArgs>
        fields: Prisma.AuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findFirst: {
            args: Prisma.AuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findMany: {
            args: Prisma.AuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          create: {
            args: Prisma.AuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          createMany: {
            args: Prisma.AuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          delete: {
            args: Prisma.AuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          update: {
            args: Prisma.AuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          deleteMany: {
            args: Prisma.AuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.AuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      Profession: {
        payload: Prisma.$ProfessionPayload<ExtArgs>
        fields: Prisma.ProfessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          findFirst: {
            args: Prisma.ProfessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          findMany: {
            args: Prisma.ProfessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>[]
          }
          create: {
            args: Prisma.ProfessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          createMany: {
            args: Prisma.ProfessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>[]
          }
          delete: {
            args: Prisma.ProfessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          update: {
            args: Prisma.ProfessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          deleteMany: {
            args: Prisma.ProfessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionPayload>
          }
          aggregate: {
            args: Prisma.ProfessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfession>
          }
          groupBy: {
            args: Prisma.ProfessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessionCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessionCountAggregateOutputType> | number
          }
        }
      }
      Tweet: {
        payload: Prisma.$TweetPayload<ExtArgs>
        fields: Prisma.TweetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TweetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TweetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>
          }
          findFirst: {
            args: Prisma.TweetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TweetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>
          }
          findMany: {
            args: Prisma.TweetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>[]
          }
          create: {
            args: Prisma.TweetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>
          }
          createMany: {
            args: Prisma.TweetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TweetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>[]
          }
          delete: {
            args: Prisma.TweetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>
          }
          update: {
            args: Prisma.TweetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>
          }
          deleteMany: {
            args: Prisma.TweetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TweetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TweetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TweetPayload>
          }
          aggregate: {
            args: Prisma.TweetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTweet>
          }
          groupBy: {
            args: Prisma.TweetGroupByArgs<ExtArgs>
            result: $Utils.Optional<TweetGroupByOutputType>[]
          }
          count: {
            args: Prisma.TweetCountArgs<ExtArgs>
            result: $Utils.Optional<TweetCountAggregateOutputType> | number
          }
        }
      }
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>
        fields: Prisma.LikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    submittedTweets: number
    likedTweets: number
    Like: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submittedTweets?: boolean | UserCountOutputTypeCountSubmittedTweetsArgs
    likedTweets?: boolean | UserCountOutputTypeCountLikedTweetsArgs
    Like?: boolean | UserCountOutputTypeCountLikeArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmittedTweetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TweetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedTweetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TweetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }


  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    tweets: number
    profession: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tweets?: boolean | AuthorCountOutputTypeCountTweetsArgs
    profession?: boolean | AuthorCountOutputTypeCountProfessionArgs
  }

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountTweetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TweetWhereInput
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountProfessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionWhereInput
  }


  /**
   * Count Type ProfessionCountOutputType
   */

  export type ProfessionCountOutputType = {
    authors: number
  }

  export type ProfessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors?: boolean | ProfessionCountOutputTypeCountAuthorsArgs
  }

  // Custom InputTypes
  /**
   * ProfessionCountOutputType without action
   */
  export type ProfessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionCountOutputType
     */
    select?: ProfessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessionCountOutputType without action
   */
  export type ProfessionCountOutputTypeCountAuthorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
  }


  /**
   * Count Type TweetCountOutputType
   */

  export type TweetCountOutputType = {
    likes: number
    User: number
  }

  export type TweetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | TweetCountOutputTypeCountLikesArgs
    User?: boolean | TweetCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * TweetCountOutputType without action
   */
  export type TweetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TweetCountOutputType
     */
    select?: TweetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TweetCountOutputType without action
   */
  export type TweetCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * TweetCountOutputType without action
   */
  export type TweetCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submittedTweets?: boolean | User$submittedTweetsArgs<ExtArgs>
    likedTweets?: boolean | User$likedTweetsArgs<ExtArgs>
    Like?: boolean | User$LikeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submittedTweets?: boolean | User$submittedTweetsArgs<ExtArgs>
    likedTweets?: boolean | User$likedTweetsArgs<ExtArgs>
    Like?: boolean | User$LikeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      submittedTweets: Prisma.$TweetPayload<ExtArgs>[]
      likedTweets: Prisma.$TweetPayload<ExtArgs>[]
      Like: Prisma.$LikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submittedTweets<T extends User$submittedTweetsArgs<ExtArgs> = {}>(args?: Subset<T, User$submittedTweetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findMany"> | Null>
    likedTweets<T extends User$likedTweetsArgs<ExtArgs> = {}>(args?: Subset<T, User$likedTweetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findMany"> | Null>
    Like<T extends User$LikeArgs<ExtArgs> = {}>(args?: Subset<T, User$LikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.submittedTweets
   */
  export type User$submittedTweetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    where?: TweetWhereInput
    orderBy?: TweetOrderByWithRelationInput | TweetOrderByWithRelationInput[]
    cursor?: TweetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TweetScalarFieldEnum | TweetScalarFieldEnum[]
  }

  /**
   * User.likedTweets
   */
  export type User$likedTweetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    where?: TweetWhereInput
    orderBy?: TweetOrderByWithRelationInput | TweetOrderByWithRelationInput[]
    cursor?: TweetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TweetScalarFieldEnum | TweetScalarFieldEnum[]
  }

  /**
   * User.Like
   */
  export type User$LikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorAvgAggregateOutputType = {
    yearOfBirth: number | null
    yearOfDeath: number | null
  }

  export type AuthorSumAggregateOutputType = {
    yearOfBirth: number | null
    yearOfDeath: number | null
  }

  export type AuthorMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    yearOfBirth: number | null
    yearOfDeath: number | null
    nationality: string | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    yearOfBirth: number | null
    yearOfDeath: number | null
    nationality: string | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    yearOfBirth: number
    yearOfDeath: number
    nationality: number
    _all: number
  }


  export type AuthorAvgAggregateInputType = {
    yearOfBirth?: true
    yearOfDeath?: true
  }

  export type AuthorSumAggregateInputType = {
    yearOfBirth?: true
    yearOfDeath?: true
  }

  export type AuthorMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    yearOfBirth?: true
    yearOfDeath?: true
    nationality?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    yearOfBirth?: true
    yearOfDeath?: true
    nationality?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    yearOfBirth?: true
    yearOfDeath?: true
    nationality?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithAggregationInput | AuthorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _avg?: AuthorAvgAggregateInputType
    _sum?: AuthorSumAggregateInputType
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    yearOfBirth: number
    yearOfDeath: number
    nationality: string
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    yearOfBirth?: boolean
    yearOfDeath?: boolean
    nationality?: boolean
    tweets?: boolean | Author$tweetsArgs<ExtArgs>
    profession?: boolean | Author$professionArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    yearOfBirth?: boolean
    yearOfDeath?: boolean
    nationality?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    yearOfBirth?: boolean
    yearOfDeath?: boolean
    nationality?: boolean
  }

  export type AuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tweets?: boolean | Author$tweetsArgs<ExtArgs>
    profession?: boolean | Author$professionArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Author"
    objects: {
      tweets: Prisma.$TweetPayload<ExtArgs>[]
      profession: Prisma.$ProfessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      yearOfBirth: number
      yearOfDeath: number
      nationality: string
    }, ExtArgs["result"]["author"]>
    composites: {}
  }

  type AuthorGetPayload<S extends boolean | null | undefined | AuthorDefaultArgs> = $Result.GetResult<Prisma.$AuthorPayload, S>

  type AuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuthorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface AuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Author'], meta: { name: 'Author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorFindUniqueArgs>(args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorFindFirstArgs>(args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorFindManyArgs>(args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
     */
    create<T extends AuthorCreateArgs>(args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Authors.
     * @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorCreateManyArgs>(args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
     */
    delete<T extends AuthorDeleteArgs>(args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorUpdateArgs>(args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorDeleteManyArgs>(args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorUpdateManyArgs>(args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends AuthorUpsertArgs>(args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Author model
   */
  readonly fields: AuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tweets<T extends Author$tweetsArgs<ExtArgs> = {}>(args?: Subset<T, Author$tweetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findMany"> | Null>
    profession<T extends Author$professionArgs<ExtArgs> = {}>(args?: Subset<T, Author$professionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Author model
   */ 
  interface AuthorFieldRefs {
    readonly id: FieldRef<"Author", 'String'>
    readonly name: FieldRef<"Author", 'String'>
    readonly createdAt: FieldRef<"Author", 'DateTime'>
    readonly updatedAt: FieldRef<"Author", 'DateTime'>
    readonly yearOfBirth: FieldRef<"Author", 'Int'>
    readonly yearOfDeath: FieldRef<"Author", 'Int'>
    readonly nationality: FieldRef<"Author", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author create
   */
  export type AuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a Author.
     */
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }

  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author createManyAndReturn
   */
  export type AuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author update
   */
  export type AuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
  }

  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }

  /**
   * Author delete
   */
  export type AuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput
  }

  /**
   * Author.tweets
   */
  export type Author$tweetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    where?: TweetWhereInput
    orderBy?: TweetOrderByWithRelationInput | TweetOrderByWithRelationInput[]
    cursor?: TweetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TweetScalarFieldEnum | TweetScalarFieldEnum[]
  }

  /**
   * Author.profession
   */
  export type Author$professionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    where?: ProfessionWhereInput
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    cursor?: ProfessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * Author without action
   */
  export type AuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
  }


  /**
   * Model Profession
   */

  export type AggregateProfession = {
    _count: ProfessionCountAggregateOutputType | null
    _min: ProfessionMinAggregateOutputType | null
    _max: ProfessionMaxAggregateOutputType | null
  }

  export type ProfessionMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessionCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfessionMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessionMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessionCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profession to aggregate.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professions
    **/
    _count?: true | ProfessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessionMaxAggregateInputType
  }

  export type GetProfessionAggregateType<T extends ProfessionAggregateArgs> = {
        [P in keyof T & keyof AggregateProfession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfession[P]>
      : GetScalarType<T[P], AggregateProfession[P]>
  }




  export type ProfessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionWhereInput
    orderBy?: ProfessionOrderByWithAggregationInput | ProfessionOrderByWithAggregationInput[]
    by: ProfessionScalarFieldEnum[] | ProfessionScalarFieldEnum
    having?: ProfessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessionCountAggregateInputType | true
    _min?: ProfessionMinAggregateInputType
    _max?: ProfessionMaxAggregateInputType
  }

  export type ProfessionGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: ProfessionCountAggregateOutputType | null
    _min: ProfessionMinAggregateOutputType | null
    _max: ProfessionMaxAggregateOutputType | null
  }

  type GetProfessionGroupByPayload<T extends ProfessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessionGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessionGroupByOutputType[P]>
        }
      >
    >


  export type ProfessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authors?: boolean | Profession$authorsArgs<ExtArgs>
    _count?: boolean | ProfessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profession"]>

  export type ProfessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profession"]>

  export type ProfessionSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors?: boolean | Profession$authorsArgs<ExtArgs>
    _count?: boolean | ProfessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profession"
    objects: {
      authors: Prisma.$AuthorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profession"]>
    composites: {}
  }

  type ProfessionGetPayload<S extends boolean | null | undefined | ProfessionDefaultArgs> = $Result.GetResult<Prisma.$ProfessionPayload, S>

  type ProfessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProfessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProfessionCountAggregateInputType | true
    }

  export interface ProfessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profession'], meta: { name: 'Profession' } }
    /**
     * Find zero or one Profession that matches the filter.
     * @param {ProfessionFindUniqueArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessionFindUniqueArgs>(args: SelectSubset<T, ProfessionFindUniqueArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Profession that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProfessionFindUniqueOrThrowArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Profession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionFindFirstArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessionFindFirstArgs>(args?: SelectSubset<T, ProfessionFindFirstArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Profession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionFindFirstOrThrowArgs} args - Arguments to find a Profession
     * @example
     * // Get one Profession
     * const profession = await prisma.profession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Professions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professions
     * const professions = await prisma.profession.findMany()
     * 
     * // Get first 10 Professions
     * const professions = await prisma.profession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professionWithIdOnly = await prisma.profession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessionFindManyArgs>(args?: SelectSubset<T, ProfessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Profession.
     * @param {ProfessionCreateArgs} args - Arguments to create a Profession.
     * @example
     * // Create one Profession
     * const Profession = await prisma.profession.create({
     *   data: {
     *     // ... data to create a Profession
     *   }
     * })
     * 
     */
    create<T extends ProfessionCreateArgs>(args: SelectSubset<T, ProfessionCreateArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Professions.
     * @param {ProfessionCreateManyArgs} args - Arguments to create many Professions.
     * @example
     * // Create many Professions
     * const profession = await prisma.profession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessionCreateManyArgs>(args?: SelectSubset<T, ProfessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professions and returns the data saved in the database.
     * @param {ProfessionCreateManyAndReturnArgs} args - Arguments to create many Professions.
     * @example
     * // Create many Professions
     * const profession = await prisma.profession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professions and only return the `id`
     * const professionWithIdOnly = await prisma.profession.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Profession.
     * @param {ProfessionDeleteArgs} args - Arguments to delete one Profession.
     * @example
     * // Delete one Profession
     * const Profession = await prisma.profession.delete({
     *   where: {
     *     // ... filter to delete one Profession
     *   }
     * })
     * 
     */
    delete<T extends ProfessionDeleteArgs>(args: SelectSubset<T, ProfessionDeleteArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Profession.
     * @param {ProfessionUpdateArgs} args - Arguments to update one Profession.
     * @example
     * // Update one Profession
     * const profession = await prisma.profession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessionUpdateArgs>(args: SelectSubset<T, ProfessionUpdateArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Professions.
     * @param {ProfessionDeleteManyArgs} args - Arguments to filter Professions to delete.
     * @example
     * // Delete a few Professions
     * const { count } = await prisma.profession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessionDeleteManyArgs>(args?: SelectSubset<T, ProfessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professions
     * const profession = await prisma.profession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessionUpdateManyArgs>(args: SelectSubset<T, ProfessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profession.
     * @param {ProfessionUpsertArgs} args - Arguments to update or create a Profession.
     * @example
     * // Update or create a Profession
     * const profession = await prisma.profession.upsert({
     *   create: {
     *     // ... data to create a Profession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profession we want to update
     *   }
     * })
     */
    upsert<T extends ProfessionUpsertArgs>(args: SelectSubset<T, ProfessionUpsertArgs<ExtArgs>>): Prisma__ProfessionClient<$Result.GetResult<Prisma.$ProfessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Professions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionCountArgs} args - Arguments to filter Professions to count.
     * @example
     * // Count the number of Professions
     * const count = await prisma.profession.count({
     *   where: {
     *     // ... the filter for the Professions we want to count
     *   }
     * })
    **/
    count<T extends ProfessionCountArgs>(
      args?: Subset<T, ProfessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfessionAggregateArgs>(args: Subset<T, ProfessionAggregateArgs>): Prisma.PrismaPromise<GetProfessionAggregateType<T>>

    /**
     * Group by Profession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessionGroupByArgs['orderBy'] }
        : { orderBy?: ProfessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profession model
   */
  readonly fields: ProfessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authors<T extends Profession$authorsArgs<ExtArgs> = {}>(args?: Subset<T, Profession$authorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profession model
   */ 
  interface ProfessionFieldRefs {
    readonly id: FieldRef<"Profession", 'String'>
    readonly name: FieldRef<"Profession", 'String'>
    readonly createdAt: FieldRef<"Profession", 'DateTime'>
    readonly updatedAt: FieldRef<"Profession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profession findUnique
   */
  export type ProfessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession findUniqueOrThrow
   */
  export type ProfessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession findFirst
   */
  export type ProfessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professions.
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professions.
     */
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * Profession findFirstOrThrow
   */
  export type ProfessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Profession to fetch.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professions.
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professions.
     */
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * Profession findMany
   */
  export type ProfessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter, which Professions to fetch.
     */
    where?: ProfessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professions to fetch.
     */
    orderBy?: ProfessionOrderByWithRelationInput | ProfessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professions.
     */
    cursor?: ProfessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professions.
     */
    skip?: number
    distinct?: ProfessionScalarFieldEnum | ProfessionScalarFieldEnum[]
  }

  /**
   * Profession create
   */
  export type ProfessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Profession.
     */
    data: XOR<ProfessionCreateInput, ProfessionUncheckedCreateInput>
  }

  /**
   * Profession createMany
   */
  export type ProfessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professions.
     */
    data: ProfessionCreateManyInput | ProfessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profession createManyAndReturn
   */
  export type ProfessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Professions.
     */
    data: ProfessionCreateManyInput | ProfessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profession update
   */
  export type ProfessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Profession.
     */
    data: XOR<ProfessionUpdateInput, ProfessionUncheckedUpdateInput>
    /**
     * Choose, which Profession to update.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession updateMany
   */
  export type ProfessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professions.
     */
    data: XOR<ProfessionUpdateManyMutationInput, ProfessionUncheckedUpdateManyInput>
    /**
     * Filter which Professions to update
     */
    where?: ProfessionWhereInput
  }

  /**
   * Profession upsert
   */
  export type ProfessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Profession to update in case it exists.
     */
    where: ProfessionWhereUniqueInput
    /**
     * In case the Profession found by the `where` argument doesn't exist, create a new Profession with this data.
     */
    create: XOR<ProfessionCreateInput, ProfessionUncheckedCreateInput>
    /**
     * In case the Profession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessionUpdateInput, ProfessionUncheckedUpdateInput>
  }

  /**
   * Profession delete
   */
  export type ProfessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
    /**
     * Filter which Profession to delete.
     */
    where: ProfessionWhereUniqueInput
  }

  /**
   * Profession deleteMany
   */
  export type ProfessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professions to delete
     */
    where?: ProfessionWhereInput
  }

  /**
   * Profession.authors
   */
  export type Profession$authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    cursor?: AuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Profession without action
   */
  export type ProfessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profession
     */
    select?: ProfessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionInclude<ExtArgs> | null
  }


  /**
   * Model Tweet
   */

  export type AggregateTweet = {
    _count: TweetCountAggregateOutputType | null
    _min: TweetMinAggregateOutputType | null
    _max: TweetMaxAggregateOutputType | null
  }

  export type TweetMinAggregateOutputType = {
    id: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
    submittorId: string | null
  }

  export type TweetMaxAggregateOutputType = {
    id: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
    submittorId: string | null
  }

  export type TweetCountAggregateOutputType = {
    id: number
    text: number
    createdAt: number
    updatedAt: number
    authorId: number
    submittorId: number
    _all: number
  }


  export type TweetMinAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    submittorId?: true
  }

  export type TweetMaxAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    submittorId?: true
  }

  export type TweetCountAggregateInputType = {
    id?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    submittorId?: true
    _all?: true
  }

  export type TweetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tweet to aggregate.
     */
    where?: TweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tweets to fetch.
     */
    orderBy?: TweetOrderByWithRelationInput | TweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tweets
    **/
    _count?: true | TweetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TweetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TweetMaxAggregateInputType
  }

  export type GetTweetAggregateType<T extends TweetAggregateArgs> = {
        [P in keyof T & keyof AggregateTweet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTweet[P]>
      : GetScalarType<T[P], AggregateTweet[P]>
  }




  export type TweetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TweetWhereInput
    orderBy?: TweetOrderByWithAggregationInput | TweetOrderByWithAggregationInput[]
    by: TweetScalarFieldEnum[] | TweetScalarFieldEnum
    having?: TweetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TweetCountAggregateInputType | true
    _min?: TweetMinAggregateInputType
    _max?: TweetMaxAggregateInputType
  }

  export type TweetGroupByOutputType = {
    id: string
    text: string
    createdAt: Date
    updatedAt: Date
    authorId: string
    submittorId: string
    _count: TweetCountAggregateOutputType | null
    _min: TweetMinAggregateOutputType | null
    _max: TweetMaxAggregateOutputType | null
  }

  type GetTweetGroupByPayload<T extends TweetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TweetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TweetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TweetGroupByOutputType[P]>
            : GetScalarType<T[P], TweetGroupByOutputType[P]>
        }
      >
    >


  export type TweetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    submittorId?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    submittor?: boolean | UserDefaultArgs<ExtArgs>
    likes?: boolean | Tweet$likesArgs<ExtArgs>
    User?: boolean | Tweet$UserArgs<ExtArgs>
    _count?: boolean | TweetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tweet"]>

  export type TweetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    submittorId?: boolean
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    submittor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tweet"]>

  export type TweetSelectScalar = {
    id?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    submittorId?: boolean
  }

  export type TweetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    submittor?: boolean | UserDefaultArgs<ExtArgs>
    likes?: boolean | Tweet$likesArgs<ExtArgs>
    User?: boolean | Tweet$UserArgs<ExtArgs>
    _count?: boolean | TweetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TweetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AuthorDefaultArgs<ExtArgs>
    submittor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TweetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tweet"
    objects: {
      author: Prisma.$AuthorPayload<ExtArgs>
      submittor: Prisma.$UserPayload<ExtArgs>
      likes: Prisma.$LikePayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      createdAt: Date
      updatedAt: Date
      authorId: string
      submittorId: string
    }, ExtArgs["result"]["tweet"]>
    composites: {}
  }

  type TweetGetPayload<S extends boolean | null | undefined | TweetDefaultArgs> = $Result.GetResult<Prisma.$TweetPayload, S>

  type TweetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TweetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TweetCountAggregateInputType | true
    }

  export interface TweetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tweet'], meta: { name: 'Tweet' } }
    /**
     * Find zero or one Tweet that matches the filter.
     * @param {TweetFindUniqueArgs} args - Arguments to find a Tweet
     * @example
     * // Get one Tweet
     * const tweet = await prisma.tweet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TweetFindUniqueArgs>(args: SelectSubset<T, TweetFindUniqueArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tweet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TweetFindUniqueOrThrowArgs} args - Arguments to find a Tweet
     * @example
     * // Get one Tweet
     * const tweet = await prisma.tweet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TweetFindUniqueOrThrowArgs>(args: SelectSubset<T, TweetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tweet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetFindFirstArgs} args - Arguments to find a Tweet
     * @example
     * // Get one Tweet
     * const tweet = await prisma.tweet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TweetFindFirstArgs>(args?: SelectSubset<T, TweetFindFirstArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tweet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetFindFirstOrThrowArgs} args - Arguments to find a Tweet
     * @example
     * // Get one Tweet
     * const tweet = await prisma.tweet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TweetFindFirstOrThrowArgs>(args?: SelectSubset<T, TweetFindFirstOrThrowArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tweets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tweets
     * const tweets = await prisma.tweet.findMany()
     * 
     * // Get first 10 Tweets
     * const tweets = await prisma.tweet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tweetWithIdOnly = await prisma.tweet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TweetFindManyArgs>(args?: SelectSubset<T, TweetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tweet.
     * @param {TweetCreateArgs} args - Arguments to create a Tweet.
     * @example
     * // Create one Tweet
     * const Tweet = await prisma.tweet.create({
     *   data: {
     *     // ... data to create a Tweet
     *   }
     * })
     * 
     */
    create<T extends TweetCreateArgs>(args: SelectSubset<T, TweetCreateArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tweets.
     * @param {TweetCreateManyArgs} args - Arguments to create many Tweets.
     * @example
     * // Create many Tweets
     * const tweet = await prisma.tweet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TweetCreateManyArgs>(args?: SelectSubset<T, TweetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tweets and returns the data saved in the database.
     * @param {TweetCreateManyAndReturnArgs} args - Arguments to create many Tweets.
     * @example
     * // Create many Tweets
     * const tweet = await prisma.tweet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tweets and only return the `id`
     * const tweetWithIdOnly = await prisma.tweet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TweetCreateManyAndReturnArgs>(args?: SelectSubset<T, TweetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tweet.
     * @param {TweetDeleteArgs} args - Arguments to delete one Tweet.
     * @example
     * // Delete one Tweet
     * const Tweet = await prisma.tweet.delete({
     *   where: {
     *     // ... filter to delete one Tweet
     *   }
     * })
     * 
     */
    delete<T extends TweetDeleteArgs>(args: SelectSubset<T, TweetDeleteArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tweet.
     * @param {TweetUpdateArgs} args - Arguments to update one Tweet.
     * @example
     * // Update one Tweet
     * const tweet = await prisma.tweet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TweetUpdateArgs>(args: SelectSubset<T, TweetUpdateArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tweets.
     * @param {TweetDeleteManyArgs} args - Arguments to filter Tweets to delete.
     * @example
     * // Delete a few Tweets
     * const { count } = await prisma.tweet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TweetDeleteManyArgs>(args?: SelectSubset<T, TweetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tweets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tweets
     * const tweet = await prisma.tweet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TweetUpdateManyArgs>(args: SelectSubset<T, TweetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tweet.
     * @param {TweetUpsertArgs} args - Arguments to update or create a Tweet.
     * @example
     * // Update or create a Tweet
     * const tweet = await prisma.tweet.upsert({
     *   create: {
     *     // ... data to create a Tweet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tweet we want to update
     *   }
     * })
     */
    upsert<T extends TweetUpsertArgs>(args: SelectSubset<T, TweetUpsertArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tweets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetCountArgs} args - Arguments to filter Tweets to count.
     * @example
     * // Count the number of Tweets
     * const count = await prisma.tweet.count({
     *   where: {
     *     // ... the filter for the Tweets we want to count
     *   }
     * })
    **/
    count<T extends TweetCountArgs>(
      args?: Subset<T, TweetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TweetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tweet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TweetAggregateArgs>(args: Subset<T, TweetAggregateArgs>): Prisma.PrismaPromise<GetTweetAggregateType<T>>

    /**
     * Group by Tweet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TweetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TweetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TweetGroupByArgs['orderBy'] }
        : { orderBy?: TweetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TweetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTweetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tweet model
   */
  readonly fields: TweetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tweet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TweetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends AuthorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorDefaultArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    submittor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    likes<T extends Tweet$likesArgs<ExtArgs> = {}>(args?: Subset<T, Tweet$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany"> | Null>
    User<T extends Tweet$UserArgs<ExtArgs> = {}>(args?: Subset<T, Tweet$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tweet model
   */ 
  interface TweetFieldRefs {
    readonly id: FieldRef<"Tweet", 'String'>
    readonly text: FieldRef<"Tweet", 'String'>
    readonly createdAt: FieldRef<"Tweet", 'DateTime'>
    readonly updatedAt: FieldRef<"Tweet", 'DateTime'>
    readonly authorId: FieldRef<"Tweet", 'String'>
    readonly submittorId: FieldRef<"Tweet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tweet findUnique
   */
  export type TweetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    /**
     * Filter, which Tweet to fetch.
     */
    where: TweetWhereUniqueInput
  }

  /**
   * Tweet findUniqueOrThrow
   */
  export type TweetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    /**
     * Filter, which Tweet to fetch.
     */
    where: TweetWhereUniqueInput
  }

  /**
   * Tweet findFirst
   */
  export type TweetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    /**
     * Filter, which Tweet to fetch.
     */
    where?: TweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tweets to fetch.
     */
    orderBy?: TweetOrderByWithRelationInput | TweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tweets.
     */
    cursor?: TweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tweets.
     */
    distinct?: TweetScalarFieldEnum | TweetScalarFieldEnum[]
  }

  /**
   * Tweet findFirstOrThrow
   */
  export type TweetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    /**
     * Filter, which Tweet to fetch.
     */
    where?: TweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tweets to fetch.
     */
    orderBy?: TweetOrderByWithRelationInput | TweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tweets.
     */
    cursor?: TweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tweets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tweets.
     */
    distinct?: TweetScalarFieldEnum | TweetScalarFieldEnum[]
  }

  /**
   * Tweet findMany
   */
  export type TweetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    /**
     * Filter, which Tweets to fetch.
     */
    where?: TweetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tweets to fetch.
     */
    orderBy?: TweetOrderByWithRelationInput | TweetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tweets.
     */
    cursor?: TweetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tweets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tweets.
     */
    skip?: number
    distinct?: TweetScalarFieldEnum | TweetScalarFieldEnum[]
  }

  /**
   * Tweet create
   */
  export type TweetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    /**
     * The data needed to create a Tweet.
     */
    data: XOR<TweetCreateInput, TweetUncheckedCreateInput>
  }

  /**
   * Tweet createMany
   */
  export type TweetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tweets.
     */
    data: TweetCreateManyInput | TweetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tweet createManyAndReturn
   */
  export type TweetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tweets.
     */
    data: TweetCreateManyInput | TweetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tweet update
   */
  export type TweetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    /**
     * The data needed to update a Tweet.
     */
    data: XOR<TweetUpdateInput, TweetUncheckedUpdateInput>
    /**
     * Choose, which Tweet to update.
     */
    where: TweetWhereUniqueInput
  }

  /**
   * Tweet updateMany
   */
  export type TweetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tweets.
     */
    data: XOR<TweetUpdateManyMutationInput, TweetUncheckedUpdateManyInput>
    /**
     * Filter which Tweets to update
     */
    where?: TweetWhereInput
  }

  /**
   * Tweet upsert
   */
  export type TweetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    /**
     * The filter to search for the Tweet to update in case it exists.
     */
    where: TweetWhereUniqueInput
    /**
     * In case the Tweet found by the `where` argument doesn't exist, create a new Tweet with this data.
     */
    create: XOR<TweetCreateInput, TweetUncheckedCreateInput>
    /**
     * In case the Tweet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TweetUpdateInput, TweetUncheckedUpdateInput>
  }

  /**
   * Tweet delete
   */
  export type TweetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
    /**
     * Filter which Tweet to delete.
     */
    where: TweetWhereUniqueInput
  }

  /**
   * Tweet deleteMany
   */
  export type TweetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tweets to delete
     */
    where?: TweetWhereInput
  }

  /**
   * Tweet.likes
   */
  export type Tweet$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Tweet.User
   */
  export type Tweet$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Tweet without action
   */
  export type TweetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tweet
     */
    select?: TweetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TweetInclude<ExtArgs> | null
  }


  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    tweetId: string | null
  }

  export type LikeMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    tweetId: string | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    tweetId: number
    _all: number
  }


  export type LikeMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    tweetId?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    tweetId?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    tweetId?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    tweetId: string
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    tweetId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    tweetId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    tweetId?: boolean
  }

  export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }
  export type LikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tweet?: boolean | TweetDefaultArgs<ExtArgs>
  }

  export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tweet: Prisma.$TweetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      tweetId: string
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<Prisma.$LikePayload, S>

  type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface LikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like'], meta: { name: 'Like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikeFindManyArgs>(args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends LikeCreateArgs>(args: SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeCreateManyArgs>(args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikeCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikeCreateManyAndReturnArgs>(args?: SelectSubset<T, LikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends LikeDeleteArgs>(args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeUpdateArgs>(args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeDeleteManyArgs>(args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeUpdateManyArgs>(args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like model
   */
  readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tweet<T extends TweetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TweetDefaultArgs<ExtArgs>>): Prisma__TweetClient<$Result.GetResult<Prisma.$TweetPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Like model
   */ 
  interface LikeFieldRefs {
    readonly id: FieldRef<"Like", 'String'>
    readonly createdAt: FieldRef<"Like", 'DateTime'>
    readonly updatedAt: FieldRef<"Like", 'DateTime'>
    readonly userId: FieldRef<"Like", 'String'>
    readonly tweetId: FieldRef<"Like", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like create
   */
  export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Like createManyAndReturn
   */
  export type LikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like update
   */
  export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
  }

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }

  /**
   * Like delete
   */
  export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput
  }

  /**
   * Like without action
   */
  export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AuthorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    yearOfBirth: 'yearOfBirth',
    yearOfDeath: 'yearOfDeath',
    nationality: 'nationality'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const ProfessionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfessionScalarFieldEnum = (typeof ProfessionScalarFieldEnum)[keyof typeof ProfessionScalarFieldEnum]


  export const TweetScalarFieldEnum: {
    id: 'id',
    text: 'text',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorId: 'authorId',
    submittorId: 'submittorId'
  };

  export type TweetScalarFieldEnum = (typeof TweetScalarFieldEnum)[keyof typeof TweetScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    tweetId: 'tweetId'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    submittedTweets?: TweetListRelationFilter
    likedTweets?: TweetListRelationFilter
    Like?: LikeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submittedTweets?: TweetOrderByRelationAggregateInput
    likedTweets?: TweetOrderByRelationAggregateInput
    Like?: LikeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    submittedTweets?: TweetListRelationFilter
    likedTweets?: TweetListRelationFilter
    Like?: LikeListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AuthorWhereInput = {
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    id?: StringFilter<"Author"> | string
    name?: StringFilter<"Author"> | string
    createdAt?: DateTimeFilter<"Author"> | Date | string
    updatedAt?: DateTimeFilter<"Author"> | Date | string
    yearOfBirth?: IntFilter<"Author"> | number
    yearOfDeath?: IntFilter<"Author"> | number
    nationality?: StringFilter<"Author"> | string
    tweets?: TweetListRelationFilter
    profession?: ProfessionListRelationFilter
  }

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    yearOfBirth?: SortOrder
    yearOfDeath?: SortOrder
    nationality?: SortOrder
    tweets?: TweetOrderByRelationAggregateInput
    profession?: ProfessionOrderByRelationAggregateInput
  }

  export type AuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    name?: StringFilter<"Author"> | string
    createdAt?: DateTimeFilter<"Author"> | Date | string
    updatedAt?: DateTimeFilter<"Author"> | Date | string
    yearOfBirth?: IntFilter<"Author"> | number
    yearOfDeath?: IntFilter<"Author"> | number
    nationality?: StringFilter<"Author"> | string
    tweets?: TweetListRelationFilter
    profession?: ProfessionListRelationFilter
  }, "id">

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    yearOfBirth?: SortOrder
    yearOfDeath?: SortOrder
    nationality?: SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _avg?: AuthorAvgOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
    _sum?: AuthorSumOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    OR?: AuthorScalarWhereWithAggregatesInput[]
    NOT?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Author"> | string
    name?: StringWithAggregatesFilter<"Author"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Author"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Author"> | Date | string
    yearOfBirth?: IntWithAggregatesFilter<"Author"> | number
    yearOfDeath?: IntWithAggregatesFilter<"Author"> | number
    nationality?: StringWithAggregatesFilter<"Author"> | string
  }

  export type ProfessionWhereInput = {
    AND?: ProfessionWhereInput | ProfessionWhereInput[]
    OR?: ProfessionWhereInput[]
    NOT?: ProfessionWhereInput | ProfessionWhereInput[]
    id?: StringFilter<"Profession"> | string
    name?: StringFilter<"Profession"> | string
    createdAt?: DateTimeFilter<"Profession"> | Date | string
    updatedAt?: DateTimeFilter<"Profession"> | Date | string
    authors?: AuthorListRelationFilter
  }

  export type ProfessionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authors?: AuthorOrderByRelationAggregateInput
  }

  export type ProfessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfessionWhereInput | ProfessionWhereInput[]
    OR?: ProfessionWhereInput[]
    NOT?: ProfessionWhereInput | ProfessionWhereInput[]
    name?: StringFilter<"Profession"> | string
    createdAt?: DateTimeFilter<"Profession"> | Date | string
    updatedAt?: DateTimeFilter<"Profession"> | Date | string
    authors?: AuthorListRelationFilter
  }, "id">

  export type ProfessionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfessionCountOrderByAggregateInput
    _max?: ProfessionMaxOrderByAggregateInput
    _min?: ProfessionMinOrderByAggregateInput
  }

  export type ProfessionScalarWhereWithAggregatesInput = {
    AND?: ProfessionScalarWhereWithAggregatesInput | ProfessionScalarWhereWithAggregatesInput[]
    OR?: ProfessionScalarWhereWithAggregatesInput[]
    NOT?: ProfessionScalarWhereWithAggregatesInput | ProfessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profession"> | string
    name?: StringWithAggregatesFilter<"Profession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Profession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profession"> | Date | string
  }

  export type TweetWhereInput = {
    AND?: TweetWhereInput | TweetWhereInput[]
    OR?: TweetWhereInput[]
    NOT?: TweetWhereInput | TweetWhereInput[]
    id?: StringFilter<"Tweet"> | string
    text?: StringFilter<"Tweet"> | string
    createdAt?: DateTimeFilter<"Tweet"> | Date | string
    updatedAt?: DateTimeFilter<"Tweet"> | Date | string
    authorId?: StringFilter<"Tweet"> | string
    submittorId?: StringFilter<"Tweet"> | string
    author?: XOR<AuthorRelationFilter, AuthorWhereInput>
    submittor?: XOR<UserRelationFilter, UserWhereInput>
    likes?: LikeListRelationFilter
    User?: UserListRelationFilter
  }

  export type TweetOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    submittorId?: SortOrder
    author?: AuthorOrderByWithRelationInput
    submittor?: UserOrderByWithRelationInput
    likes?: LikeOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
  }

  export type TweetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TweetWhereInput | TweetWhereInput[]
    OR?: TweetWhereInput[]
    NOT?: TweetWhereInput | TweetWhereInput[]
    text?: StringFilter<"Tweet"> | string
    createdAt?: DateTimeFilter<"Tweet"> | Date | string
    updatedAt?: DateTimeFilter<"Tweet"> | Date | string
    authorId?: StringFilter<"Tweet"> | string
    submittorId?: StringFilter<"Tweet"> | string
    author?: XOR<AuthorRelationFilter, AuthorWhereInput>
    submittor?: XOR<UserRelationFilter, UserWhereInput>
    likes?: LikeListRelationFilter
    User?: UserListRelationFilter
  }, "id">

  export type TweetOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    submittorId?: SortOrder
    _count?: TweetCountOrderByAggregateInput
    _max?: TweetMaxOrderByAggregateInput
    _min?: TweetMinOrderByAggregateInput
  }

  export type TweetScalarWhereWithAggregatesInput = {
    AND?: TweetScalarWhereWithAggregatesInput | TweetScalarWhereWithAggregatesInput[]
    OR?: TweetScalarWhereWithAggregatesInput[]
    NOT?: TweetScalarWhereWithAggregatesInput | TweetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tweet"> | string
    text?: StringWithAggregatesFilter<"Tweet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tweet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tweet"> | Date | string
    authorId?: StringWithAggregatesFilter<"Tweet"> | string
    submittorId?: StringWithAggregatesFilter<"Tweet"> | string
  }

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    id?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    updatedAt?: DateTimeFilter<"Like"> | Date | string
    userId?: StringFilter<"Like"> | string
    tweetId?: StringFilter<"Like"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    tweet?: XOR<TweetRelationFilter, TweetWhereInput>
  }

  export type LikeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    user?: UserOrderByWithRelationInput
    tweet?: TweetOrderByWithRelationInput
  }

  export type LikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    createdAt?: DateTimeFilter<"Like"> | Date | string
    updatedAt?: DateTimeFilter<"Like"> | Date | string
    userId?: StringFilter<"Like"> | string
    tweetId?: StringFilter<"Like"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    tweet?: XOR<TweetRelationFilter, TweetWhereInput>
  }, "id">

  export type LikeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
    _count?: LikeCountOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    OR?: LikeScalarWhereWithAggregatesInput[]
    NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Like"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Like"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Like"> | Date | string
    userId?: StringWithAggregatesFilter<"Like"> | string
    tweetId?: StringWithAggregatesFilter<"Like"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submittedTweets?: TweetCreateNestedManyWithoutSubmittorInput
    likedTweets?: TweetCreateNestedManyWithoutUserInput
    Like?: LikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submittedTweets?: TweetUncheckedCreateNestedManyWithoutSubmittorInput
    likedTweets?: TweetUncheckedCreateNestedManyWithoutUserInput
    Like?: LikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedTweets?: TweetUpdateManyWithoutSubmittorNestedInput
    likedTweets?: TweetUpdateManyWithoutUserNestedInput
    Like?: LikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedTweets?: TweetUncheckedUpdateManyWithoutSubmittorNestedInput
    likedTweets?: TweetUncheckedUpdateManyWithoutUserNestedInput
    Like?: LikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    yearOfBirth: number
    yearOfDeath: number
    nationality: string
    tweets?: TweetCreateNestedManyWithoutAuthorInput
    profession?: ProfessionCreateNestedManyWithoutAuthorsInput
  }

  export type AuthorUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    yearOfBirth: number
    yearOfDeath: number
    nationality: string
    tweets?: TweetUncheckedCreateNestedManyWithoutAuthorInput
    profession?: ProfessionUncheckedCreateNestedManyWithoutAuthorsInput
  }

  export type AuthorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    yearOfBirth?: IntFieldUpdateOperationsInput | number
    yearOfDeath?: IntFieldUpdateOperationsInput | number
    nationality?: StringFieldUpdateOperationsInput | string
    tweets?: TweetUpdateManyWithoutAuthorNestedInput
    profession?: ProfessionUpdateManyWithoutAuthorsNestedInput
  }

  export type AuthorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    yearOfBirth?: IntFieldUpdateOperationsInput | number
    yearOfDeath?: IntFieldUpdateOperationsInput | number
    nationality?: StringFieldUpdateOperationsInput | string
    tweets?: TweetUncheckedUpdateManyWithoutAuthorNestedInput
    profession?: ProfessionUncheckedUpdateManyWithoutAuthorsNestedInput
  }

  export type AuthorCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    yearOfBirth: number
    yearOfDeath: number
    nationality: string
  }

  export type AuthorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    yearOfBirth?: IntFieldUpdateOperationsInput | number
    yearOfDeath?: IntFieldUpdateOperationsInput | number
    nationality?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    yearOfBirth?: IntFieldUpdateOperationsInput | number
    yearOfDeath?: IntFieldUpdateOperationsInput | number
    nationality?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessionCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: AuthorCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authors?: AuthorUncheckedCreateNestedManyWithoutProfessionInput
  }

  export type ProfessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: AuthorUpdateManyWithoutProfessionNestedInput
  }

  export type ProfessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authors?: AuthorUncheckedUpdateManyWithoutProfessionNestedInput
  }

  export type ProfessionCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: AuthorCreateNestedOneWithoutTweetsInput
    submittor: UserCreateNestedOneWithoutSubmittedTweetsInput
    likes?: LikeCreateNestedManyWithoutTweetInput
    User?: UserCreateNestedManyWithoutLikedTweetsInput
  }

  export type TweetUncheckedCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    submittorId: string
    likes?: LikeUncheckedCreateNestedManyWithoutTweetInput
    User?: UserUncheckedCreateNestedManyWithoutLikedTweetsInput
  }

  export type TweetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorUpdateOneRequiredWithoutTweetsNestedInput
    submittor?: UserUpdateOneRequiredWithoutSubmittedTweetsNestedInput
    likes?: LikeUpdateManyWithoutTweetNestedInput
    User?: UserUpdateManyWithoutLikedTweetsNestedInput
  }

  export type TweetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    submittorId?: StringFieldUpdateOperationsInput | string
    likes?: LikeUncheckedUpdateManyWithoutTweetNestedInput
    User?: UserUncheckedUpdateManyWithoutLikedTweetsNestedInput
  }

  export type TweetCreateManyInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    submittorId: string
  }

  export type TweetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TweetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    submittorId?: StringFieldUpdateOperationsInput | string
  }

  export type LikeCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLikeInput
    tweet: TweetCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    tweetId: string
  }

  export type LikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikeNestedInput
    tweet?: TweetUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
  }

  export type LikeCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    tweetId: string
  }

  export type LikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    tweetId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TweetListRelationFilter = {
    every?: TweetWhereInput
    some?: TweetWhereInput
    none?: TweetWhereInput
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type TweetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProfessionListRelationFilter = {
    every?: ProfessionWhereInput
    some?: ProfessionWhereInput
    none?: ProfessionWhereInput
  }

  export type ProfessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    yearOfBirth?: SortOrder
    yearOfDeath?: SortOrder
    nationality?: SortOrder
  }

  export type AuthorAvgOrderByAggregateInput = {
    yearOfBirth?: SortOrder
    yearOfDeath?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    yearOfBirth?: SortOrder
    yearOfDeath?: SortOrder
    nationality?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    yearOfBirth?: SortOrder
    yearOfDeath?: SortOrder
    nationality?: SortOrder
  }

  export type AuthorSumOrderByAggregateInput = {
    yearOfBirth?: SortOrder
    yearOfDeath?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AuthorListRelationFilter = {
    every?: AuthorWhereInput
    some?: AuthorWhereInput
    none?: AuthorWhereInput
  }

  export type AuthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthorRelationFilter = {
    is?: AuthorWhereInput
    isNot?: AuthorWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TweetCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    submittorId?: SortOrder
  }

  export type TweetMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    submittorId?: SortOrder
  }

  export type TweetMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    submittorId?: SortOrder
  }

  export type TweetRelationFilter = {
    is?: TweetWhereInput
    isNot?: TweetWhereInput
  }

  export type LikeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    tweetId?: SortOrder
  }

  export type TweetCreateNestedManyWithoutSubmittorInput = {
    create?: XOR<TweetCreateWithoutSubmittorInput, TweetUncheckedCreateWithoutSubmittorInput> | TweetCreateWithoutSubmittorInput[] | TweetUncheckedCreateWithoutSubmittorInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutSubmittorInput | TweetCreateOrConnectWithoutSubmittorInput[]
    createMany?: TweetCreateManySubmittorInputEnvelope
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
  }

  export type TweetCreateNestedManyWithoutUserInput = {
    create?: XOR<TweetCreateWithoutUserInput, TweetUncheckedCreateWithoutUserInput> | TweetCreateWithoutUserInput[] | TweetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutUserInput | TweetCreateOrConnectWithoutUserInput[]
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type TweetUncheckedCreateNestedManyWithoutSubmittorInput = {
    create?: XOR<TweetCreateWithoutSubmittorInput, TweetUncheckedCreateWithoutSubmittorInput> | TweetCreateWithoutSubmittorInput[] | TweetUncheckedCreateWithoutSubmittorInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutSubmittorInput | TweetCreateOrConnectWithoutSubmittorInput[]
    createMany?: TweetCreateManySubmittorInputEnvelope
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
  }

  export type TweetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TweetCreateWithoutUserInput, TweetUncheckedCreateWithoutUserInput> | TweetCreateWithoutUserInput[] | TweetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutUserInput | TweetCreateOrConnectWithoutUserInput[]
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TweetUpdateManyWithoutSubmittorNestedInput = {
    create?: XOR<TweetCreateWithoutSubmittorInput, TweetUncheckedCreateWithoutSubmittorInput> | TweetCreateWithoutSubmittorInput[] | TweetUncheckedCreateWithoutSubmittorInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutSubmittorInput | TweetCreateOrConnectWithoutSubmittorInput[]
    upsert?: TweetUpsertWithWhereUniqueWithoutSubmittorInput | TweetUpsertWithWhereUniqueWithoutSubmittorInput[]
    createMany?: TweetCreateManySubmittorInputEnvelope
    set?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    disconnect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    delete?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    update?: TweetUpdateWithWhereUniqueWithoutSubmittorInput | TweetUpdateWithWhereUniqueWithoutSubmittorInput[]
    updateMany?: TweetUpdateManyWithWhereWithoutSubmittorInput | TweetUpdateManyWithWhereWithoutSubmittorInput[]
    deleteMany?: TweetScalarWhereInput | TweetScalarWhereInput[]
  }

  export type TweetUpdateManyWithoutUserNestedInput = {
    create?: XOR<TweetCreateWithoutUserInput, TweetUncheckedCreateWithoutUserInput> | TweetCreateWithoutUserInput[] | TweetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutUserInput | TweetCreateOrConnectWithoutUserInput[]
    upsert?: TweetUpsertWithWhereUniqueWithoutUserInput | TweetUpsertWithWhereUniqueWithoutUserInput[]
    set?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    disconnect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    delete?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    update?: TweetUpdateWithWhereUniqueWithoutUserInput | TweetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TweetUpdateManyWithWhereWithoutUserInput | TweetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TweetScalarWhereInput | TweetScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type TweetUncheckedUpdateManyWithoutSubmittorNestedInput = {
    create?: XOR<TweetCreateWithoutSubmittorInput, TweetUncheckedCreateWithoutSubmittorInput> | TweetCreateWithoutSubmittorInput[] | TweetUncheckedCreateWithoutSubmittorInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutSubmittorInput | TweetCreateOrConnectWithoutSubmittorInput[]
    upsert?: TweetUpsertWithWhereUniqueWithoutSubmittorInput | TweetUpsertWithWhereUniqueWithoutSubmittorInput[]
    createMany?: TweetCreateManySubmittorInputEnvelope
    set?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    disconnect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    delete?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    update?: TweetUpdateWithWhereUniqueWithoutSubmittorInput | TweetUpdateWithWhereUniqueWithoutSubmittorInput[]
    updateMany?: TweetUpdateManyWithWhereWithoutSubmittorInput | TweetUpdateManyWithWhereWithoutSubmittorInput[]
    deleteMany?: TweetScalarWhereInput | TweetScalarWhereInput[]
  }

  export type TweetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TweetCreateWithoutUserInput, TweetUncheckedCreateWithoutUserInput> | TweetCreateWithoutUserInput[] | TweetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutUserInput | TweetCreateOrConnectWithoutUserInput[]
    upsert?: TweetUpsertWithWhereUniqueWithoutUserInput | TweetUpsertWithWhereUniqueWithoutUserInput[]
    set?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    disconnect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    delete?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    update?: TweetUpdateWithWhereUniqueWithoutUserInput | TweetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TweetUpdateManyWithWhereWithoutUserInput | TweetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TweetScalarWhereInput | TweetScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type TweetCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TweetCreateWithoutAuthorInput, TweetUncheckedCreateWithoutAuthorInput> | TweetCreateWithoutAuthorInput[] | TweetUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutAuthorInput | TweetCreateOrConnectWithoutAuthorInput[]
    createMany?: TweetCreateManyAuthorInputEnvelope
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
  }

  export type ProfessionCreateNestedManyWithoutAuthorsInput = {
    create?: XOR<ProfessionCreateWithoutAuthorsInput, ProfessionUncheckedCreateWithoutAuthorsInput> | ProfessionCreateWithoutAuthorsInput[] | ProfessionUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: ProfessionCreateOrConnectWithoutAuthorsInput | ProfessionCreateOrConnectWithoutAuthorsInput[]
    connect?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
  }

  export type TweetUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<TweetCreateWithoutAuthorInput, TweetUncheckedCreateWithoutAuthorInput> | TweetCreateWithoutAuthorInput[] | TweetUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutAuthorInput | TweetCreateOrConnectWithoutAuthorInput[]
    createMany?: TweetCreateManyAuthorInputEnvelope
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
  }

  export type ProfessionUncheckedCreateNestedManyWithoutAuthorsInput = {
    create?: XOR<ProfessionCreateWithoutAuthorsInput, ProfessionUncheckedCreateWithoutAuthorsInput> | ProfessionCreateWithoutAuthorsInput[] | ProfessionUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: ProfessionCreateOrConnectWithoutAuthorsInput | ProfessionCreateOrConnectWithoutAuthorsInput[]
    connect?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TweetUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TweetCreateWithoutAuthorInput, TweetUncheckedCreateWithoutAuthorInput> | TweetCreateWithoutAuthorInput[] | TweetUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutAuthorInput | TweetCreateOrConnectWithoutAuthorInput[]
    upsert?: TweetUpsertWithWhereUniqueWithoutAuthorInput | TweetUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TweetCreateManyAuthorInputEnvelope
    set?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    disconnect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    delete?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    update?: TweetUpdateWithWhereUniqueWithoutAuthorInput | TweetUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TweetUpdateManyWithWhereWithoutAuthorInput | TweetUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TweetScalarWhereInput | TweetScalarWhereInput[]
  }

  export type ProfessionUpdateManyWithoutAuthorsNestedInput = {
    create?: XOR<ProfessionCreateWithoutAuthorsInput, ProfessionUncheckedCreateWithoutAuthorsInput> | ProfessionCreateWithoutAuthorsInput[] | ProfessionUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: ProfessionCreateOrConnectWithoutAuthorsInput | ProfessionCreateOrConnectWithoutAuthorsInput[]
    upsert?: ProfessionUpsertWithWhereUniqueWithoutAuthorsInput | ProfessionUpsertWithWhereUniqueWithoutAuthorsInput[]
    set?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    disconnect?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    delete?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    connect?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    update?: ProfessionUpdateWithWhereUniqueWithoutAuthorsInput | ProfessionUpdateWithWhereUniqueWithoutAuthorsInput[]
    updateMany?: ProfessionUpdateManyWithWhereWithoutAuthorsInput | ProfessionUpdateManyWithWhereWithoutAuthorsInput[]
    deleteMany?: ProfessionScalarWhereInput | ProfessionScalarWhereInput[]
  }

  export type TweetUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<TweetCreateWithoutAuthorInput, TweetUncheckedCreateWithoutAuthorInput> | TweetCreateWithoutAuthorInput[] | TweetUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: TweetCreateOrConnectWithoutAuthorInput | TweetCreateOrConnectWithoutAuthorInput[]
    upsert?: TweetUpsertWithWhereUniqueWithoutAuthorInput | TweetUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: TweetCreateManyAuthorInputEnvelope
    set?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    disconnect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    delete?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    connect?: TweetWhereUniqueInput | TweetWhereUniqueInput[]
    update?: TweetUpdateWithWhereUniqueWithoutAuthorInput | TweetUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: TweetUpdateManyWithWhereWithoutAuthorInput | TweetUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: TweetScalarWhereInput | TweetScalarWhereInput[]
  }

  export type ProfessionUncheckedUpdateManyWithoutAuthorsNestedInput = {
    create?: XOR<ProfessionCreateWithoutAuthorsInput, ProfessionUncheckedCreateWithoutAuthorsInput> | ProfessionCreateWithoutAuthorsInput[] | ProfessionUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: ProfessionCreateOrConnectWithoutAuthorsInput | ProfessionCreateOrConnectWithoutAuthorsInput[]
    upsert?: ProfessionUpsertWithWhereUniqueWithoutAuthorsInput | ProfessionUpsertWithWhereUniqueWithoutAuthorsInput[]
    set?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    disconnect?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    delete?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    connect?: ProfessionWhereUniqueInput | ProfessionWhereUniqueInput[]
    update?: ProfessionUpdateWithWhereUniqueWithoutAuthorsInput | ProfessionUpdateWithWhereUniqueWithoutAuthorsInput[]
    updateMany?: ProfessionUpdateManyWithWhereWithoutAuthorsInput | ProfessionUpdateManyWithWhereWithoutAuthorsInput[]
    deleteMany?: ProfessionScalarWhereInput | ProfessionScalarWhereInput[]
  }

  export type AuthorCreateNestedManyWithoutProfessionInput = {
    create?: XOR<AuthorCreateWithoutProfessionInput, AuthorUncheckedCreateWithoutProfessionInput> | AuthorCreateWithoutProfessionInput[] | AuthorUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: AuthorCreateOrConnectWithoutProfessionInput | AuthorCreateOrConnectWithoutProfessionInput[]
    connect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
  }

  export type AuthorUncheckedCreateNestedManyWithoutProfessionInput = {
    create?: XOR<AuthorCreateWithoutProfessionInput, AuthorUncheckedCreateWithoutProfessionInput> | AuthorCreateWithoutProfessionInput[] | AuthorUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: AuthorCreateOrConnectWithoutProfessionInput | AuthorCreateOrConnectWithoutProfessionInput[]
    connect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
  }

  export type AuthorUpdateManyWithoutProfessionNestedInput = {
    create?: XOR<AuthorCreateWithoutProfessionInput, AuthorUncheckedCreateWithoutProfessionInput> | AuthorCreateWithoutProfessionInput[] | AuthorUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: AuthorCreateOrConnectWithoutProfessionInput | AuthorCreateOrConnectWithoutProfessionInput[]
    upsert?: AuthorUpsertWithWhereUniqueWithoutProfessionInput | AuthorUpsertWithWhereUniqueWithoutProfessionInput[]
    set?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    disconnect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    delete?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    connect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    update?: AuthorUpdateWithWhereUniqueWithoutProfessionInput | AuthorUpdateWithWhereUniqueWithoutProfessionInput[]
    updateMany?: AuthorUpdateManyWithWhereWithoutProfessionInput | AuthorUpdateManyWithWhereWithoutProfessionInput[]
    deleteMany?: AuthorScalarWhereInput | AuthorScalarWhereInput[]
  }

  export type AuthorUncheckedUpdateManyWithoutProfessionNestedInput = {
    create?: XOR<AuthorCreateWithoutProfessionInput, AuthorUncheckedCreateWithoutProfessionInput> | AuthorCreateWithoutProfessionInput[] | AuthorUncheckedCreateWithoutProfessionInput[]
    connectOrCreate?: AuthorCreateOrConnectWithoutProfessionInput | AuthorCreateOrConnectWithoutProfessionInput[]
    upsert?: AuthorUpsertWithWhereUniqueWithoutProfessionInput | AuthorUpsertWithWhereUniqueWithoutProfessionInput[]
    set?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    disconnect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    delete?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    connect?: AuthorWhereUniqueInput | AuthorWhereUniqueInput[]
    update?: AuthorUpdateWithWhereUniqueWithoutProfessionInput | AuthorUpdateWithWhereUniqueWithoutProfessionInput[]
    updateMany?: AuthorUpdateManyWithWhereWithoutProfessionInput | AuthorUpdateManyWithWhereWithoutProfessionInput[]
    deleteMany?: AuthorScalarWhereInput | AuthorScalarWhereInput[]
  }

  export type AuthorCreateNestedOneWithoutTweetsInput = {
    create?: XOR<AuthorCreateWithoutTweetsInput, AuthorUncheckedCreateWithoutTweetsInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutTweetsInput
    connect?: AuthorWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubmittedTweetsInput = {
    create?: XOR<UserCreateWithoutSubmittedTweetsInput, UserUncheckedCreateWithoutSubmittedTweetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmittedTweetsInput
    connect?: UserWhereUniqueInput
  }

  export type LikeCreateNestedManyWithoutTweetInput = {
    create?: XOR<LikeCreateWithoutTweetInput, LikeUncheckedCreateWithoutTweetInput> | LikeCreateWithoutTweetInput[] | LikeUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutTweetInput | LikeCreateOrConnectWithoutTweetInput[]
    createMany?: LikeCreateManyTweetInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutLikedTweetsInput = {
    create?: XOR<UserCreateWithoutLikedTweetsInput, UserUncheckedCreateWithoutLikedTweetsInput> | UserCreateWithoutLikedTweetsInput[] | UserUncheckedCreateWithoutLikedTweetsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedTweetsInput | UserCreateOrConnectWithoutLikedTweetsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutTweetInput = {
    create?: XOR<LikeCreateWithoutTweetInput, LikeUncheckedCreateWithoutTweetInput> | LikeCreateWithoutTweetInput[] | LikeUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutTweetInput | LikeCreateOrConnectWithoutTweetInput[]
    createMany?: LikeCreateManyTweetInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutLikedTweetsInput = {
    create?: XOR<UserCreateWithoutLikedTweetsInput, UserUncheckedCreateWithoutLikedTweetsInput> | UserCreateWithoutLikedTweetsInput[] | UserUncheckedCreateWithoutLikedTweetsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedTweetsInput | UserCreateOrConnectWithoutLikedTweetsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AuthorUpdateOneRequiredWithoutTweetsNestedInput = {
    create?: XOR<AuthorCreateWithoutTweetsInput, AuthorUncheckedCreateWithoutTweetsInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutTweetsInput
    upsert?: AuthorUpsertWithoutTweetsInput
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutTweetsInput, AuthorUpdateWithoutTweetsInput>, AuthorUncheckedUpdateWithoutTweetsInput>
  }

  export type UserUpdateOneRequiredWithoutSubmittedTweetsNestedInput = {
    create?: XOR<UserCreateWithoutSubmittedTweetsInput, UserUncheckedCreateWithoutSubmittedTweetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmittedTweetsInput
    upsert?: UserUpsertWithoutSubmittedTweetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmittedTweetsInput, UserUpdateWithoutSubmittedTweetsInput>, UserUncheckedUpdateWithoutSubmittedTweetsInput>
  }

  export type LikeUpdateManyWithoutTweetNestedInput = {
    create?: XOR<LikeCreateWithoutTweetInput, LikeUncheckedCreateWithoutTweetInput> | LikeCreateWithoutTweetInput[] | LikeUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutTweetInput | LikeCreateOrConnectWithoutTweetInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutTweetInput | LikeUpsertWithWhereUniqueWithoutTweetInput[]
    createMany?: LikeCreateManyTweetInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutTweetInput | LikeUpdateWithWhereUniqueWithoutTweetInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutTweetInput | LikeUpdateManyWithWhereWithoutTweetInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type UserUpdateManyWithoutLikedTweetsNestedInput = {
    create?: XOR<UserCreateWithoutLikedTweetsInput, UserUncheckedCreateWithoutLikedTweetsInput> | UserCreateWithoutLikedTweetsInput[] | UserUncheckedCreateWithoutLikedTweetsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedTweetsInput | UserCreateOrConnectWithoutLikedTweetsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLikedTweetsInput | UserUpsertWithWhereUniqueWithoutLikedTweetsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLikedTweetsInput | UserUpdateWithWhereUniqueWithoutLikedTweetsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLikedTweetsInput | UserUpdateManyWithWhereWithoutLikedTweetsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutTweetNestedInput = {
    create?: XOR<LikeCreateWithoutTweetInput, LikeUncheckedCreateWithoutTweetInput> | LikeCreateWithoutTweetInput[] | LikeUncheckedCreateWithoutTweetInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutTweetInput | LikeCreateOrConnectWithoutTweetInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutTweetInput | LikeUpsertWithWhereUniqueWithoutTweetInput[]
    createMany?: LikeCreateManyTweetInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutTweetInput | LikeUpdateWithWhereUniqueWithoutTweetInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutTweetInput | LikeUpdateManyWithWhereWithoutTweetInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutLikedTweetsNestedInput = {
    create?: XOR<UserCreateWithoutLikedTweetsInput, UserUncheckedCreateWithoutLikedTweetsInput> | UserCreateWithoutLikedTweetsInput[] | UserUncheckedCreateWithoutLikedTweetsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutLikedTweetsInput | UserCreateOrConnectWithoutLikedTweetsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutLikedTweetsInput | UserUpsertWithWhereUniqueWithoutLikedTweetsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutLikedTweetsInput | UserUpdateWithWhereUniqueWithoutLikedTweetsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutLikedTweetsInput | UserUpdateManyWithWhereWithoutLikedTweetsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLikeInput = {
    create?: XOR<UserCreateWithoutLikeInput, UserUncheckedCreateWithoutLikeInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikeInput
    connect?: UserWhereUniqueInput
  }

  export type TweetCreateNestedOneWithoutLikesInput = {
    create?: XOR<TweetCreateWithoutLikesInput, TweetUncheckedCreateWithoutLikesInput>
    connectOrCreate?: TweetCreateOrConnectWithoutLikesInput
    connect?: TweetWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikeNestedInput = {
    create?: XOR<UserCreateWithoutLikeInput, UserUncheckedCreateWithoutLikeInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikeInput
    upsert?: UserUpsertWithoutLikeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikeInput, UserUpdateWithoutLikeInput>, UserUncheckedUpdateWithoutLikeInput>
  }

  export type TweetUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<TweetCreateWithoutLikesInput, TweetUncheckedCreateWithoutLikesInput>
    connectOrCreate?: TweetCreateOrConnectWithoutLikesInput
    upsert?: TweetUpsertWithoutLikesInput
    connect?: TweetWhereUniqueInput
    update?: XOR<XOR<TweetUpdateToOneWithWhereWithoutLikesInput, TweetUpdateWithoutLikesInput>, TweetUncheckedUpdateWithoutLikesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TweetCreateWithoutSubmittorInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: AuthorCreateNestedOneWithoutTweetsInput
    likes?: LikeCreateNestedManyWithoutTweetInput
    User?: UserCreateNestedManyWithoutLikedTweetsInput
  }

  export type TweetUncheckedCreateWithoutSubmittorInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    likes?: LikeUncheckedCreateNestedManyWithoutTweetInput
    User?: UserUncheckedCreateNestedManyWithoutLikedTweetsInput
  }

  export type TweetCreateOrConnectWithoutSubmittorInput = {
    where: TweetWhereUniqueInput
    create: XOR<TweetCreateWithoutSubmittorInput, TweetUncheckedCreateWithoutSubmittorInput>
  }

  export type TweetCreateManySubmittorInputEnvelope = {
    data: TweetCreateManySubmittorInput | TweetCreateManySubmittorInput[]
    skipDuplicates?: boolean
  }

  export type TweetCreateWithoutUserInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: AuthorCreateNestedOneWithoutTweetsInput
    submittor: UserCreateNestedOneWithoutSubmittedTweetsInput
    likes?: LikeCreateNestedManyWithoutTweetInput
  }

  export type TweetUncheckedCreateWithoutUserInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    submittorId: string
    likes?: LikeUncheckedCreateNestedManyWithoutTweetInput
  }

  export type TweetCreateOrConnectWithoutUserInput = {
    where: TweetWhereUniqueInput
    create: XOR<TweetCreateWithoutUserInput, TweetUncheckedCreateWithoutUserInput>
  }

  export type LikeCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tweet: TweetCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tweetId: string
  }

  export type LikeCreateOrConnectWithoutUserInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeCreateManyUserInputEnvelope = {
    data: LikeCreateManyUserInput | LikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TweetUpsertWithWhereUniqueWithoutSubmittorInput = {
    where: TweetWhereUniqueInput
    update: XOR<TweetUpdateWithoutSubmittorInput, TweetUncheckedUpdateWithoutSubmittorInput>
    create: XOR<TweetCreateWithoutSubmittorInput, TweetUncheckedCreateWithoutSubmittorInput>
  }

  export type TweetUpdateWithWhereUniqueWithoutSubmittorInput = {
    where: TweetWhereUniqueInput
    data: XOR<TweetUpdateWithoutSubmittorInput, TweetUncheckedUpdateWithoutSubmittorInput>
  }

  export type TweetUpdateManyWithWhereWithoutSubmittorInput = {
    where: TweetScalarWhereInput
    data: XOR<TweetUpdateManyMutationInput, TweetUncheckedUpdateManyWithoutSubmittorInput>
  }

  export type TweetScalarWhereInput = {
    AND?: TweetScalarWhereInput | TweetScalarWhereInput[]
    OR?: TweetScalarWhereInput[]
    NOT?: TweetScalarWhereInput | TweetScalarWhereInput[]
    id?: StringFilter<"Tweet"> | string
    text?: StringFilter<"Tweet"> | string
    createdAt?: DateTimeFilter<"Tweet"> | Date | string
    updatedAt?: DateTimeFilter<"Tweet"> | Date | string
    authorId?: StringFilter<"Tweet"> | string
    submittorId?: StringFilter<"Tweet"> | string
  }

  export type TweetUpsertWithWhereUniqueWithoutUserInput = {
    where: TweetWhereUniqueInput
    update: XOR<TweetUpdateWithoutUserInput, TweetUncheckedUpdateWithoutUserInput>
    create: XOR<TweetCreateWithoutUserInput, TweetUncheckedCreateWithoutUserInput>
  }

  export type TweetUpdateWithWhereUniqueWithoutUserInput = {
    where: TweetWhereUniqueInput
    data: XOR<TweetUpdateWithoutUserInput, TweetUncheckedUpdateWithoutUserInput>
  }

  export type TweetUpdateManyWithWhereWithoutUserInput = {
    where: TweetScalarWhereInput
    data: XOR<TweetUpdateManyMutationInput, TweetUncheckedUpdateManyWithoutUserInput>
  }

  export type LikeUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
  }

  export type LikeUpdateManyWithWhereWithoutUserInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutUserInput>
  }

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[]
    OR?: LikeScalarWhereInput[]
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[]
    id?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    updatedAt?: DateTimeFilter<"Like"> | Date | string
    userId?: StringFilter<"Like"> | string
    tweetId?: StringFilter<"Like"> | string
  }

  export type TweetCreateWithoutAuthorInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submittor: UserCreateNestedOneWithoutSubmittedTweetsInput
    likes?: LikeCreateNestedManyWithoutTweetInput
    User?: UserCreateNestedManyWithoutLikedTweetsInput
  }

  export type TweetUncheckedCreateWithoutAuthorInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submittorId: string
    likes?: LikeUncheckedCreateNestedManyWithoutTweetInput
    User?: UserUncheckedCreateNestedManyWithoutLikedTweetsInput
  }

  export type TweetCreateOrConnectWithoutAuthorInput = {
    where: TweetWhereUniqueInput
    create: XOR<TweetCreateWithoutAuthorInput, TweetUncheckedCreateWithoutAuthorInput>
  }

  export type TweetCreateManyAuthorInputEnvelope = {
    data: TweetCreateManyAuthorInput | TweetCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ProfessionCreateWithoutAuthorsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionUncheckedCreateWithoutAuthorsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionCreateOrConnectWithoutAuthorsInput = {
    where: ProfessionWhereUniqueInput
    create: XOR<ProfessionCreateWithoutAuthorsInput, ProfessionUncheckedCreateWithoutAuthorsInput>
  }

  export type TweetUpsertWithWhereUniqueWithoutAuthorInput = {
    where: TweetWhereUniqueInput
    update: XOR<TweetUpdateWithoutAuthorInput, TweetUncheckedUpdateWithoutAuthorInput>
    create: XOR<TweetCreateWithoutAuthorInput, TweetUncheckedCreateWithoutAuthorInput>
  }

  export type TweetUpdateWithWhereUniqueWithoutAuthorInput = {
    where: TweetWhereUniqueInput
    data: XOR<TweetUpdateWithoutAuthorInput, TweetUncheckedUpdateWithoutAuthorInput>
  }

  export type TweetUpdateManyWithWhereWithoutAuthorInput = {
    where: TweetScalarWhereInput
    data: XOR<TweetUpdateManyMutationInput, TweetUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ProfessionUpsertWithWhereUniqueWithoutAuthorsInput = {
    where: ProfessionWhereUniqueInput
    update: XOR<ProfessionUpdateWithoutAuthorsInput, ProfessionUncheckedUpdateWithoutAuthorsInput>
    create: XOR<ProfessionCreateWithoutAuthorsInput, ProfessionUncheckedCreateWithoutAuthorsInput>
  }

  export type ProfessionUpdateWithWhereUniqueWithoutAuthorsInput = {
    where: ProfessionWhereUniqueInput
    data: XOR<ProfessionUpdateWithoutAuthorsInput, ProfessionUncheckedUpdateWithoutAuthorsInput>
  }

  export type ProfessionUpdateManyWithWhereWithoutAuthorsInput = {
    where: ProfessionScalarWhereInput
    data: XOR<ProfessionUpdateManyMutationInput, ProfessionUncheckedUpdateManyWithoutAuthorsInput>
  }

  export type ProfessionScalarWhereInput = {
    AND?: ProfessionScalarWhereInput | ProfessionScalarWhereInput[]
    OR?: ProfessionScalarWhereInput[]
    NOT?: ProfessionScalarWhereInput | ProfessionScalarWhereInput[]
    id?: StringFilter<"Profession"> | string
    name?: StringFilter<"Profession"> | string
    createdAt?: DateTimeFilter<"Profession"> | Date | string
    updatedAt?: DateTimeFilter<"Profession"> | Date | string
  }

  export type AuthorCreateWithoutProfessionInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    yearOfBirth: number
    yearOfDeath: number
    nationality: string
    tweets?: TweetCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateWithoutProfessionInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    yearOfBirth: number
    yearOfDeath: number
    nationality: string
    tweets?: TweetUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorCreateOrConnectWithoutProfessionInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutProfessionInput, AuthorUncheckedCreateWithoutProfessionInput>
  }

  export type AuthorUpsertWithWhereUniqueWithoutProfessionInput = {
    where: AuthorWhereUniqueInput
    update: XOR<AuthorUpdateWithoutProfessionInput, AuthorUncheckedUpdateWithoutProfessionInput>
    create: XOR<AuthorCreateWithoutProfessionInput, AuthorUncheckedCreateWithoutProfessionInput>
  }

  export type AuthorUpdateWithWhereUniqueWithoutProfessionInput = {
    where: AuthorWhereUniqueInput
    data: XOR<AuthorUpdateWithoutProfessionInput, AuthorUncheckedUpdateWithoutProfessionInput>
  }

  export type AuthorUpdateManyWithWhereWithoutProfessionInput = {
    where: AuthorScalarWhereInput
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyWithoutProfessionInput>
  }

  export type AuthorScalarWhereInput = {
    AND?: AuthorScalarWhereInput | AuthorScalarWhereInput[]
    OR?: AuthorScalarWhereInput[]
    NOT?: AuthorScalarWhereInput | AuthorScalarWhereInput[]
    id?: StringFilter<"Author"> | string
    name?: StringFilter<"Author"> | string
    createdAt?: DateTimeFilter<"Author"> | Date | string
    updatedAt?: DateTimeFilter<"Author"> | Date | string
    yearOfBirth?: IntFilter<"Author"> | number
    yearOfDeath?: IntFilter<"Author"> | number
    nationality?: StringFilter<"Author"> | string
  }

  export type AuthorCreateWithoutTweetsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    yearOfBirth: number
    yearOfDeath: number
    nationality: string
    profession?: ProfessionCreateNestedManyWithoutAuthorsInput
  }

  export type AuthorUncheckedCreateWithoutTweetsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    yearOfBirth: number
    yearOfDeath: number
    nationality: string
    profession?: ProfessionUncheckedCreateNestedManyWithoutAuthorsInput
  }

  export type AuthorCreateOrConnectWithoutTweetsInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutTweetsInput, AuthorUncheckedCreateWithoutTweetsInput>
  }

  export type UserCreateWithoutSubmittedTweetsInput = {
    id?: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likedTweets?: TweetCreateNestedManyWithoutUserInput
    Like?: LikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubmittedTweetsInput = {
    id?: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likedTweets?: TweetUncheckedCreateNestedManyWithoutUserInput
    Like?: LikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubmittedTweetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmittedTweetsInput, UserUncheckedCreateWithoutSubmittedTweetsInput>
  }

  export type LikeCreateWithoutTweetInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLikeInput
  }

  export type LikeUncheckedCreateWithoutTweetInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type LikeCreateOrConnectWithoutTweetInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutTweetInput, LikeUncheckedCreateWithoutTweetInput>
  }

  export type LikeCreateManyTweetInputEnvelope = {
    data: LikeCreateManyTweetInput | LikeCreateManyTweetInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutLikedTweetsInput = {
    id?: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submittedTweets?: TweetCreateNestedManyWithoutSubmittorInput
    Like?: LikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedTweetsInput = {
    id?: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submittedTweets?: TweetUncheckedCreateNestedManyWithoutSubmittorInput
    Like?: LikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedTweetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedTweetsInput, UserUncheckedCreateWithoutLikedTweetsInput>
  }

  export type AuthorUpsertWithoutTweetsInput = {
    update: XOR<AuthorUpdateWithoutTweetsInput, AuthorUncheckedUpdateWithoutTweetsInput>
    create: XOR<AuthorCreateWithoutTweetsInput, AuthorUncheckedCreateWithoutTweetsInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutTweetsInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutTweetsInput, AuthorUncheckedUpdateWithoutTweetsInput>
  }

  export type AuthorUpdateWithoutTweetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    yearOfBirth?: IntFieldUpdateOperationsInput | number
    yearOfDeath?: IntFieldUpdateOperationsInput | number
    nationality?: StringFieldUpdateOperationsInput | string
    profession?: ProfessionUpdateManyWithoutAuthorsNestedInput
  }

  export type AuthorUncheckedUpdateWithoutTweetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    yearOfBirth?: IntFieldUpdateOperationsInput | number
    yearOfDeath?: IntFieldUpdateOperationsInput | number
    nationality?: StringFieldUpdateOperationsInput | string
    profession?: ProfessionUncheckedUpdateManyWithoutAuthorsNestedInput
  }

  export type UserUpsertWithoutSubmittedTweetsInput = {
    update: XOR<UserUpdateWithoutSubmittedTweetsInput, UserUncheckedUpdateWithoutSubmittedTweetsInput>
    create: XOR<UserCreateWithoutSubmittedTweetsInput, UserUncheckedCreateWithoutSubmittedTweetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmittedTweetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmittedTweetsInput, UserUncheckedUpdateWithoutSubmittedTweetsInput>
  }

  export type UserUpdateWithoutSubmittedTweetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedTweets?: TweetUpdateManyWithoutUserNestedInput
    Like?: LikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmittedTweetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedTweets?: TweetUncheckedUpdateManyWithoutUserNestedInput
    Like?: LikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LikeUpsertWithWhereUniqueWithoutTweetInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutTweetInput, LikeUncheckedUpdateWithoutTweetInput>
    create: XOR<LikeCreateWithoutTweetInput, LikeUncheckedCreateWithoutTweetInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutTweetInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutTweetInput, LikeUncheckedUpdateWithoutTweetInput>
  }

  export type LikeUpdateManyWithWhereWithoutTweetInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutTweetInput>
  }

  export type UserUpsertWithWhereUniqueWithoutLikedTweetsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutLikedTweetsInput, UserUncheckedUpdateWithoutLikedTweetsInput>
    create: XOR<UserCreateWithoutLikedTweetsInput, UserUncheckedCreateWithoutLikedTweetsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutLikedTweetsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutLikedTweetsInput, UserUncheckedUpdateWithoutLikedTweetsInput>
  }

  export type UserUpdateManyWithWhereWithoutLikedTweetsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutLikedTweetsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserCreateWithoutLikeInput = {
    id?: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submittedTweets?: TweetCreateNestedManyWithoutSubmittorInput
    likedTweets?: TweetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikeInput = {
    id?: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submittedTweets?: TweetUncheckedCreateNestedManyWithoutSubmittorInput
    likedTweets?: TweetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikeInput, UserUncheckedCreateWithoutLikeInput>
  }

  export type TweetCreateWithoutLikesInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: AuthorCreateNestedOneWithoutTweetsInput
    submittor: UserCreateNestedOneWithoutSubmittedTweetsInput
    User?: UserCreateNestedManyWithoutLikedTweetsInput
  }

  export type TweetUncheckedCreateWithoutLikesInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    submittorId: string
    User?: UserUncheckedCreateNestedManyWithoutLikedTweetsInput
  }

  export type TweetCreateOrConnectWithoutLikesInput = {
    where: TweetWhereUniqueInput
    create: XOR<TweetCreateWithoutLikesInput, TweetUncheckedCreateWithoutLikesInput>
  }

  export type UserUpsertWithoutLikeInput = {
    update: XOR<UserUpdateWithoutLikeInput, UserUncheckedUpdateWithoutLikeInput>
    create: XOR<UserCreateWithoutLikeInput, UserUncheckedCreateWithoutLikeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikeInput, UserUncheckedUpdateWithoutLikeInput>
  }

  export type UserUpdateWithoutLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedTweets?: TweetUpdateManyWithoutSubmittorNestedInput
    likedTweets?: TweetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedTweets?: TweetUncheckedUpdateManyWithoutSubmittorNestedInput
    likedTweets?: TweetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TweetUpsertWithoutLikesInput = {
    update: XOR<TweetUpdateWithoutLikesInput, TweetUncheckedUpdateWithoutLikesInput>
    create: XOR<TweetCreateWithoutLikesInput, TweetUncheckedCreateWithoutLikesInput>
    where?: TweetWhereInput
  }

  export type TweetUpdateToOneWithWhereWithoutLikesInput = {
    where?: TweetWhereInput
    data: XOR<TweetUpdateWithoutLikesInput, TweetUncheckedUpdateWithoutLikesInput>
  }

  export type TweetUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorUpdateOneRequiredWithoutTweetsNestedInput
    submittor?: UserUpdateOneRequiredWithoutSubmittedTweetsNestedInput
    User?: UserUpdateManyWithoutLikedTweetsNestedInput
  }

  export type TweetUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    submittorId?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateManyWithoutLikedTweetsNestedInput
  }

  export type TweetCreateManySubmittorInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
  }

  export type LikeCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tweetId: string
  }

  export type TweetUpdateWithoutSubmittorInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorUpdateOneRequiredWithoutTweetsNestedInput
    likes?: LikeUpdateManyWithoutTweetNestedInput
    User?: UserUpdateManyWithoutLikedTweetsNestedInput
  }

  export type TweetUncheckedUpdateWithoutSubmittorInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    likes?: LikeUncheckedUpdateManyWithoutTweetNestedInput
    User?: UserUncheckedUpdateManyWithoutLikedTweetsNestedInput
  }

  export type TweetUncheckedUpdateManyWithoutSubmittorInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type TweetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AuthorUpdateOneRequiredWithoutTweetsNestedInput
    submittor?: UserUpdateOneRequiredWithoutSubmittedTweetsNestedInput
    likes?: LikeUpdateManyWithoutTweetNestedInput
  }

  export type TweetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    submittorId?: StringFieldUpdateOperationsInput | string
    likes?: LikeUncheckedUpdateManyWithoutTweetNestedInput
  }

  export type TweetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    submittorId?: StringFieldUpdateOperationsInput | string
  }

  export type LikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweet?: TweetUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweetId?: StringFieldUpdateOperationsInput | string
  }

  export type LikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tweetId?: StringFieldUpdateOperationsInput | string
  }

  export type TweetCreateManyAuthorInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submittorId: string
  }

  export type TweetUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittor?: UserUpdateOneRequiredWithoutSubmittedTweetsNestedInput
    likes?: LikeUpdateManyWithoutTweetNestedInput
    User?: UserUpdateManyWithoutLikedTweetsNestedInput
  }

  export type TweetUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittorId?: StringFieldUpdateOperationsInput | string
    likes?: LikeUncheckedUpdateManyWithoutTweetNestedInput
    User?: UserUncheckedUpdateManyWithoutLikedTweetsNestedInput
  }

  export type TweetUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittorId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessionUpdateWithoutAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionUncheckedUpdateWithoutAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionUncheckedUpdateManyWithoutAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorUpdateWithoutProfessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    yearOfBirth?: IntFieldUpdateOperationsInput | number
    yearOfDeath?: IntFieldUpdateOperationsInput | number
    nationality?: StringFieldUpdateOperationsInput | string
    tweets?: TweetUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateWithoutProfessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    yearOfBirth?: IntFieldUpdateOperationsInput | number
    yearOfDeath?: IntFieldUpdateOperationsInput | number
    nationality?: StringFieldUpdateOperationsInput | string
    tweets?: TweetUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateManyWithoutProfessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    yearOfBirth?: IntFieldUpdateOperationsInput | number
    yearOfDeath?: IntFieldUpdateOperationsInput | number
    nationality?: StringFieldUpdateOperationsInput | string
  }

  export type LikeCreateManyTweetInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type LikeUpdateWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikeNestedInput
  }

  export type LikeUncheckedUpdateWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LikeUncheckedUpdateManyWithoutTweetInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutLikedTweetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedTweets?: TweetUpdateManyWithoutSubmittorNestedInput
    Like?: LikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedTweetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedTweets?: TweetUncheckedUpdateManyWithoutSubmittorNestedInput
    Like?: LikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutLikedTweetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuthorCountOutputTypeDefaultArgs instead
     */
    export type AuthorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfessionCountOutputTypeDefaultArgs instead
     */
    export type ProfessionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfessionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TweetCountOutputTypeDefaultArgs instead
     */
    export type TweetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TweetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuthorDefaultArgs instead
     */
    export type AuthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfessionDefaultArgs instead
     */
    export type ProfessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TweetDefaultArgs instead
     */
    export type TweetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TweetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LikeDefaultArgs instead
     */
    export type LikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LikeDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}