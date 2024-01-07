/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from '@reduxjs/toolkit';
import config from '../../assets/gitprofile.config';
import SkillType from '../../shared/enums/skill-type';

const initialState = config.workProjects.map((workProj) => {
  return {
    ...workProj,
    skills: workProj.skills.map((skill) => {
      return {
        name: skill.name,
        type: SkillType[skill.type as keyof typeof SkillType],
      };
    }),
  };
});
export const workexperienceSlice = createSlice({
  name: 'gitprofile/workexperience',
  initialState,
  reducers: {},
});

export default workexperienceSlice.reducer;
