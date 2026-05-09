import {FC, memo} from 'react';
import {linkedInPosts, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const LinkedInPosts: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.LinkedInPosts}>
      <div className="flex flex-col gap-y-8">
        <h1 className="self-center text-3xl font-bold text-white">Featured LinkedIn posts</h1>
        <div className="w-full columns-2 md:columns-3 lg:columns-4">
          {linkedInPosts.map(post => {
            const {url, title} = post;

            return (
              <div
                key={url}
                className="mb-4 overflow-hidden rounded-lg bg-black/20"
              >
                <div className="relative w-full aspect-[504/1114]">
                  <iframe
                    src={url}
                    title={title}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

export default LinkedInPosts;
