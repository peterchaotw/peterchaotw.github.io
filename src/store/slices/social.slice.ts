import { createSlice } from '@reduxjs/toolkit';
import config from '../../assets/gitprofile.config';
import { type SocialConfig } from '../../shared/interfaces/config.interface';

const initialState: SocialConfig = config.social;
export const socialSlice = createSlice({
  name: 'gitprofile/social',
  initialState,
  reducers: {},
});

export default socialSlice.reducer;
