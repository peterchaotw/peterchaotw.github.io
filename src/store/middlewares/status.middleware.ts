import { createListenerMiddleware } from '@reduxjs/toolkit';
import { formatDistance } from 'date-fns';
import { isAxiosError } from 'axios';
import { githubThunk } from '../slices/gitprofile.slice';
import {
  genericError,
  notFoundError,
  tooManyRequestError,
} from '../../components/error-boundary';
import type IError from '../../shared/interfaces/error.interface';
import { update } from '../slices/status.slice';

const statusMiddleware = createListenerMiddleware();
statusMiddleware.startListening({
  actionCreator: githubThunk.rejected,
  effect: (action, { dispatch, unsubscribe }) => {
    let err: IError = genericError;
    try {
      const error = action.error;
      if (error && isAxiosError(error)) {
        const reset = formatDistance(
          new Date(error.response?.headers['x-ratelimit-reset'] * 1000),
          new Date(),
          {
            addSuffix: true,
          },
        );

        switch (error.response?.status) {
          case 403:
            err = tooManyRequestError(reset);
            break;
          case 404:
            err = notFoundError;
            break;
          default:
            break;
        }
      }
    } catch (_error) {
      // skip
    }
    dispatch(update({ Error: err, loading: false }));
    unsubscribe();
  },
});

export default statusMiddleware;
