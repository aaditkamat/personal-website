import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useMemo} from 'react';
import {FaChevronDown} from 'react-icons/fa6';
import {TypeAnimation} from 'react-type-animation';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const typingAnimationSequences: (string | number)[][] = useMemo(
    () => [
      ['Hello,'],
      [750, 'World! '],
      [1500, 'This is '],
      [2250, 'Aadit.'],
      [3000, 'Welcome to my 🏠 on the internet.'],
    ],
    [],
  );
  const {imageSrc, name, description, actions} = heroData;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl">
              <TypeAnimation cursor={false} sequence={typingAnimationSequences[0]} />
              <TypeAnimation className="font-bold" cursor={false} sequence={typingAnimationSequences[1]} />
              <TypeAnimation cursor={false} sequence={typingAnimationSequences[2]} />
              <TypeAnimation className="font-bold" cursor={false} sequence={typingAnimationSequences[3]} />
            </h1>
            <h2 className="hidden sm:inline text-white font-bold text-4xl">
              <TypeAnimation cursor={false} sequence={typingAnimationSequences[4]} />
            </h2>
            {description}
            <div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <FaChevronDown className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
