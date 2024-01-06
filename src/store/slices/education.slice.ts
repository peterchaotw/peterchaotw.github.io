import { createSlice } from '@reduxjs/toolkit';
import config from '../../assets/gitprofile.config';
import { type EducationConfig } from '../../shared/interfaces/config.interface';

const initialState: EducationConfig[] = config.education;
export const educationSlice = createSlice({
  name: 'gitprofile/education',
  initialState,
  reducers: {},
});

export default educationSlice.reducer;
