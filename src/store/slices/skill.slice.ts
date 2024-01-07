/* eslint-disable @typescript-eslint/no-for-in-array */
/* eslint-disable array-callback-return */
import { createSlice } from '@reduxjs/toolkit';
import config from '../../assets/gitprofile.config';
import { parse, intervalToDuration } from 'date-fns';
import {
  type SkillConfig,
  type WorkExperienceConfig,
} from '../../shared/interfaces/config.interface';
import { from } from 'linq-to-typescript';

const generator = (): boolean[] => {
  const months = [];
  for (let i = 1; i <= 12; i++) {
    months.push(false);
  }

  return months;
};

type SkillMap = SkillConfig & { relaions: WorkExperienceConfig[] };
const getSkills = (workProj: WorkExperienceConfig[]): SkillConfig[] => {
  const skillMap: SkillMap[] = [];
  from(workProj)
    .orderBy((w) => w.startTime)
    .toArray()
    .map((w) => {
      w.skills.map((s) => {
        let _skillMap: SkillMap = from(skillMap).firstOrDefault(
          (_s) => _s.name === s.name,
        );
        if (!_skillMap) {
          _skillMap = { ...s, relaions: [] };
          _skillMap.usageTime = _skillMap.usageTime ?? { year: 0, month: 0 };
          skillMap.push(_skillMap);
        }
        _skillMap.relaions.push({
          ...w,
        });
      });
    });

  skillMap.map((skillSet) => {
    const usage: Record<number, boolean[]> = {};

    skillSet.relaions.map((relation) => {
      const start = parse(relation.startTime, 'yyyy-MM', new Date());
      const end = relation.endTime
        ? parse(relation.endTime, 'yyyy-MM', new Date())
        : new Date();

      for (let i = start.getFullYear(); i <= end.getFullYear(); i++) {
        usage[i] = usage[i] ?? generator();
        const endMonth = i === end.getFullYear() ? end.getMonth() : 12;
        for (let j = start.getMonth() - 1; j < endMonth; j++) {
          usage[i][j] = true;
        }
      }
    });
    const monthCount = from(Object.values(usage))
      .selectMany((x) => x)
      .where((z) => z)
      .count();
    skillSet.usageTime.year = Math.floor(monthCount / 12);
    skillSet.usageTime.month = monthCount % 12;
  });

  return skillMap;
};
const initialState: SkillConfig[] = getSkills(config.workProjects);
export const skillSlice = createSlice({
  name: 'gitprofile/skill',
  initialState,
  reducers: {},
});

export default skillSlice.reducer;
