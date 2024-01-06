import { createSlice } from '@reduxjs/toolkit';
import config from '../../assets/gitprofile.config';
import { type CertificationConfig } from '../../shared/interfaces/config.interface';

const initialState: CertificationConfig[] = config.certifications;
export const certificationSlice = createSlice({
  name: 'gitprofile/certification',
  initialState,
  reducers: {},
});

export default certificationSlice.reducer;
