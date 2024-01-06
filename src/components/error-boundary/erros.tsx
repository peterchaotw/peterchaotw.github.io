import type IError from '@/shared/interfaces/error.interface';

export const genericError: IError = {
  status: 500,
  title: 'Ops!!',
  subTitle: 'Something went wrong.',
};

export const notFoundError: IError = {
  status: 404,
  title: 'The Github Username is Incorrect.',
  subTitle: (
    <p>
      Please provide correct github username in{' '}
      <code>gitprofile.config.js</code>.
    </p>
  ),
};

export const tooManyRequestError = (reset: string): IError => {
  return {
    status: 429,
    title: 'Too Many Requests.',
    subTitle: (
      <p>
        Oh no, you hit the{' '}
        <a
          href="https://developer.github.com/v3/rate_limit/"
          target="_blank"
          rel="noopener noreferrer"
        >
          rate limit
        </a>
        ! Try again later{` ${reset}`}.
      </p>
    ),
  };
};

export const noConfigError: IError = {
  status: 500,
  title: 'No Config is provided.',
  subTitle: 'Pass the required config as prop.',
};
