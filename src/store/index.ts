import { combineReducers, configureStore } from '@reduxjs/toolkit';
import githubprofileReducer from './slices/gitprofile.slice';
import statusReducer from './slices/status.slice';
import socialReducer from './slices/social.slice';
import errorMiddleware from './middlewares/status.middleware';
import certificationReducer from './slices/certification.slice';
import educationReducer from './slices/education.slice';
import languageReducer from './slices/language.slice';
import workexperienceReducer from './slices/workexperience.slice';
import skillReducer from './slices/skill.slice';

const reducers = combineReducers({
  github: githubprofileReducer,
  status: statusReducer,
  social: socialReducer,
  certification: certificationReducer,
  education: educationReducer,
  language: languageReducer,
  workexperience: workexperienceReducer,
  skill: skillReducer,
});
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(errorMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
export default store;
