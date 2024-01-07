/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type GithubUserInfo } from '../../../shared/interfaces';
import type IError from '../../../shared/interfaces/error.interface';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 2000,
});

export async function loadGithub(
  username: string,
): Promise<Partial<GithubUserInfo> | IError | undefined> {
  try {
    if (!username) throw new Error();
    const { data } = await instance.get<any>(`/users/${username}`);

    return {
      avatar: data.avatar_url,
      name: data.name ?? '',
      bio: data.bio ?? '',
      location: data.location ?? '',
      company: data.company ?? '',
    };
  } catch (error) {
    throw error;
  }
}
