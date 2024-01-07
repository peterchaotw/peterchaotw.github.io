import { createSlice } from '@reduxjs/toolkit';
import config from '../../assets/gitprofile.config';
import LanguageType from '../../shared/enums/language-type';
import { type LanguageConfig } from '../../shared/interfaces/config.interface';

const initialState: LanguageConfig[] = config.language.map((lan) => {
  return {
    name: lan.name,
    proficiency: LanguageType[lan.proficiency as keyof typeof LanguageType],
  };
});
export const languageSlice = createSlice({
  name: 'gitprofile/language',
  initialState,
  reducers: {},
});

export default languageSlice.reducer;
