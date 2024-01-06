import { type PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as statusSlice from './status.slice';
import { type GithubUserInfo } from '../../shared/interfaces/config.interface';
import { cast } from '../../shared/helpers/utilties';
import config from '../../assets/gitprofile.config';
import { loadGithub } from '../../functions/features/github-loader';

const initialState: GithubUserInfo = cast<GithubUserInfo>(config.github);

export const githubThunk = createAsyncThunk(
  'gitprofile/asyncThunk',
  async (payload: GithubUserInfo) => {
    return await loadGithub(payload.username);
  },
);

const gitprofileSlice = createSlice({
  name: 'gitprofile/github',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<GithubUserInfo>) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(githubThunk.pending, (state) => {
        statusSlice.update({ loading: true });
      })
      .addCase(githubThunk.rejected, (state, { payload }) => {
        statusSlice.update({ loading: false });
      })
      .addCase(githubThunk.fulfilled, (state, { payload }) => {
        statusSlice.update({ loading: false });

        return { ...state, ...payload };
      });
  },
});

export const { update } = gitprofileSlice.actions;
export default gitprofileSlice.reducer;
