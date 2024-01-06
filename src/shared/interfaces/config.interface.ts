import type DevelopmentMethodology from '../enums/development-methodology-type';
import type CompetencyLevel from '../enums/competency-level';
import type SkillType from '../enums/skill-type';
import type IError from './error.interface';
import type LanguageType from '../enums/language-type';

export interface GithubUserInfo {
  username: string;
  limit?: number;
  exclude: {
    forks: boolean;
    projects: string[];
  };
  avatar?: string;
  name?: string;
  bio?: string;
  location?: string;
  company?: string;
}

export interface WorkExperienceConfig {
  project: string;
  startTime: string;
  endTime: string;
  teamSize: number;
  skills: SkillConfig[];
  utilies: string[];
  developmentMethodologies: string[];
  role: string;
  description: React.ReactNode | string;
  company: string;
  developmentMethodology: DevelopmentMethodology;
}

export type SocialConfig = Record<string, string>;

export interface EducationConfig {
  institution: string;
  degree: string;
  from: string;
  to: string;
}

export interface CertificationConfig {
  name: string;
  description?: string;
  date: string;
  link?: string;
}

export interface LanguageConfig {
  name: string;
  proficiency: LanguageType;
}

export interface SkillConfig {
  name: string;
  usageTime: {
    year: number;
    month: number;
  };
  competencyLevel: CompetencyLevel;
  relations: WorkExperienceConfig[];
  type: SkillType;
  versions: string[];
}

export interface GithubProfileStatus {
  loading: boolean;
  Error?: IError;
}

export default interface GithubProfileConfig {
  github: GithubUserInfo;
  social?: SocialConfig;
  resume?: string;
  googleAnalytics?: string;
  hotjar?: {
    id?: string;
    snippetVersion?: number;
  };
  workExperiences?: WorkExperienceConfig[];
  language?: LanguageConfig[];
  status: GithubProfileStatus;
  certifications: CertificationConfig[];
  educations: EducationConfig[];
}
