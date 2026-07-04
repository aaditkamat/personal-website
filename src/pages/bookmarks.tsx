import {FC, memo} from 'react';
import { Tree } from 'react-arborist';

import Page from '../components/Layout/Page';
import {bookmarks} from '../data/data';

const Bookmarks: FC = memo(() => {
  return (
    <Page description="Bookmarks to reference important sites" title="Bookmarks">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 font-[Raleway]">Bookmarks</h1>
        <Tree
          initialData={bookmarks}
          openByDefault={false}
          width={2000}
          height={1000}
          indent={24}
          rowHeight={36}
          overscanCount={1}
          paddingTop={30}
          paddingBottom={10}
          padding={25}
        />
        <span className="py-10 text-black font-bold">
          Rendered with{' '}
          <a className="text-blue-500 hover:text-blue-700" href="https://github.com/jameskerr/react-arborist" target="_blank" rel="noopener noreferrer">
            react-arborist
          </a>
        </span>
      </div>
    </Page>
  );
});

export default Bookmarks;
