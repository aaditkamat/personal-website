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
            return <iframe src={url} height="1114" width="504" frameBorder="0" allowFullScreen={true} title={title} />;
          })}
        </div>
      </div>
    </Section>
  );
});

export default LinkedInPosts;
