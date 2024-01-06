import { createSlice } from '@reduxjs/toolkit';
import config from '../../assets/gitprofile.config';
import LanguageType from '../../shared/enums/language-type';
import { type LanguageConfig } from '../../shared/interfaces/config.interface';

const initialState: LanguageConfig[] = config.language.map((lan, idx) => {
  return {
    name: lan.name,
    proficiency: LanguageType[lan.proficiency],
  };
});
export const languageSlice = createSlice({
  name: 'gitprofile/language',
  initialState,
  reducers: {},
});

export default languageSlice.reducer;
