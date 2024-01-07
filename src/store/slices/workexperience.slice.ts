import { createSlice } from '@reduxjs/toolkit';
import config from '../../assets/gitprofile.config';
import SkillType from '../../shared/enums/skill-type';
import { type WorkExperienceConfig } from '../../shared/interfaces/config.interface';

const initialState: WorkExperienceConfig[] = config.workProjects.map(
  (workProj, idx) => {
    return {
      ...workProj,
      skills: workProj.skills.map((skill, idx) => {
        return {
          name: skill.name,
          type: SkillType[skill.type],
        };
      }),
    };
  },
);
export const workexperienceSlice = createSlice({
  name: 'gitprofile/workexperience',
  initialState,
  reducers: {},
});

export default workexperienceSlice.reducer;
