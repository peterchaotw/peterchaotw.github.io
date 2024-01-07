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
