export type Success<S> = {
  success: S;
  failure?: never;
};

export type Failure<E> = {
  success?: never;
  failure: E;
};

export type Try<S, E> = NonNullable<Success<S> | Failure<E>>;

export const makeSuccess = <S>(value: S): Success<S> => ({ success: value });

export const makeFailure = <E>(value: E): Failure<E> => ({ failure: value });
