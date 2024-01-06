import { GithubProfileStatus } from '../../shared/interfaces';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
const initialState: GithubProfileStatus = {
  loading: true,
};
export const statusSlice = createSlice({
  name: 'gitprofile/status',
  initialState,
  reducers: {
    update: (
      state: GithubProfileStatus | any,
      action: PayloadAction<GithubProfileStatus>,
    ) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { update } = statusSlice.actions;
export default statusSlice.reducer;
