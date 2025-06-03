import {StaticImageData} from 'next/image';
import {ForwardRefExoticComponent, SVGProps, Element} from 'react';
import {IconType} from 'react-icons';

export interface HomepageMeta {
  title: string;
  description: string;
  ogImageUrl?: string;
  twitterCardType?: 'summary' | 'summary_large';
  twitterTitle?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterDomain?: string;
  twitterUrl?: string;
  twitterDescription?: string;
  twitterImageUrl?: string;
}

/**
 * Hero section
 */
export interface Hero {
  imageSrc: string;
  name: string;
  description: Element;
  actions: HeroActionItem[];
}

interface HeroActionItem {
  href: string;
  text: string;
  primary?: boolean;
  Icon?: IconType | undefined;
}

/**
 * About section
 */
export interface About {
  profileImageSrc?: string;
  description: string;
  aboutItems: AboutItem[];
}

export interface AboutItem {
  label: string;
  text: string;
  Icon: IconType;
}

/**
 * Stat section
 */
export interface Stat {
  title: string;
  value: number;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
}

/**
 * Skills section
 */

export interface Skill {
  name: string;
  level: number;
  max?: number;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

/**
 * Portfolio section
 */
export interface PortfolioItem {
  title: string;
  description: string;
  url: string;
  image: string | StaticImageData;
}

/**
 * Resume section
 */
export interface TimelineItem {
  date: string;
  location: string;
  title: string;
  content: Element;
}

/**
 * Testimonial section
 */
export interface TestimonialSection {
  imageSrc?: string | StaticImageData;
  testimonials: Testimonial[];
}

export interface Testimonial {
  image?: string;
  name: string;
  text: string;
}

/**
 * Contact section
 */
export interface ContactSection {
  headerText?: string;
  description: string;
  items: ContactItem[];
}

export const ContactType = {
  Email: 'Email',
  Phone: 'Phone',
  Location: 'Location',
  Github: 'Github',
  LinkedIn: 'LinkedIn',
  X: 'X',
} as const;

export type ContactType = (typeof ContactType)[keyof typeof ContactType];

export interface ContactItem {
  type: ContactType;
  text: string;
  href?: string;
}

export interface ContactValue {
  Icon: IconType;
  srLabel: string;
}

/**
 * Social items
 */
export interface Social {
  label: string;
  Icon: IconType;
  href: string;
}
