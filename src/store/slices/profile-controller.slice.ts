import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type ProfileConfig } from '../../shared/interfaces/config.interface';

const initialState: ProfileConfig = {
  theme: 'dark',
};
export const profileConfigSlice = createSlice({
  name: 'gitprofile/profileConfig',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<string>) => {
      return { ...state, ...{ theme: action.payload } };
    },
  },
});
export const { setMode } = profileConfigSlice.actions;
export default profileConfigSlice.reducer;
