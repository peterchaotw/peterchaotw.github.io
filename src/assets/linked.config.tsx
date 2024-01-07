/* eslint-disable @typescript-eslint/no-explicit-any */
import type ILinked from '../shared/interfaces/linked.interface';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMediumSquare,
} from 'react-icons/ai';
import { FaBuilding, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { RiMailFill } from 'react-icons/ri';
import { SiTwitter } from 'react-icons/si';

const Linked: Record<any, ILinked> = {
  location: {
    icon: <MdLocationOn />,
    title: 'Based in:',
  },
  company: {
    icon: <FaBuilding />,
    title: 'Company:',
    link: (value: string) =>
      value.startsWith('@') && !value.includes(' ')
        ? `https://github.com/${value.trim().substring(1)}`
        : null,
  },
  github: {
    icon: <AiFillGithub />,
    title: 'GitHub:',
    link: (value: string) => `https://github.com/${value}`,
  },
  linkedin: {
    icon: <FaLinkedin />,
    title: 'LinkedIn:',
    link: (value: string) => `https://www.linkedin.com/in/${value}`,
  },
  twitter: {
    icon: <SiTwitter />,
    title: 'Twitter:',
    link: (value: string) => `https://twitter.com/${value}`,
  },
  facebook: {
    icon: <FaFacebook />,
    title: 'Facebook:',
    link: (value: string) => `https://www.facebook.com/${value}`,
  },
  instagram: {
    icon: <AiFillInstagram />,
    title: 'Instagram:',
    link: (value: string) => `https://www.instagram.com/${value}`,
  },
  youtube: {
    icon: <FaYoutube />,
    title: 'YouTube:',
    link: (value: string) => `https://www.youtube.com/@${value}`,
  },
  medium: {
    icon: <AiFillMediumSquare />,
    title: 'Medium:',
    link: (value: string) => `https://medium.com/@${value}`,
  },
  email: {
    icon: <RiMailFill />,
    title: 'Email:',
    link: (value: string) => `mailto:${value}`,
  },
};
export default Linked;
