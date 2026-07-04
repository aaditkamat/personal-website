import {FC, memo} from 'react';
import {Tree} from 'react-arborist';
import {FaFolder,FaTree} from 'react-icons/fa6';

import Page from '../components/Layout/Page';
import {bookmarks} from '../data/data';

const LinkNode: FC = ({node}) => (
  <div className="flex items-center space-x-4">
    <FaTree />
    <a className="text-blue-500 hover:text-blue-700" href={node.data.url} rel="noopener noreferrer" target="_blank">
      {node.data.name}
    </a>
  </div>
);

const FolderNode: FC = ({node}) => (
  <div className="flex items-center space-x-4">
    <FaFolder />
    <span>{node.data.name}</span>
  </div>
);

const Node: FC = ({node, style, dragHandle}) => (
  <div onClick={() => node.toggle()} ref={dragHandle} style={style}>
    {node.isLeaf ? <LinkNode node={node} /> : <FolderNode node={node} />}
  </div>
);

const Bookmarks: FC = memo(() => {
  return (
    <Page description="Bookmarks to reference important sites" title="Bookmarks">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 font-[Raleway]">Bookmarks</h1>
        <Tree
          height={1000}
          indent={24}
          initialData={bookmarks}
          openByDefault={false}
          overscanCount={1}
          padding={25}
          paddingBottom={10}
          paddingTop={30}
          rowHeight={36}
          width={2000}>
          {Node}
        </Tree>
        <span className="py-10 text-black font-bold">
          Rendered with{' '}
          <a
            className="text-blue-500 hover:text-blue-700"
            href="https://github.com/jameskerr/react-arborist"
            rel="noopener noreferrer"
            target="_blank">
            react-arborist
          </a>
        </span>
      </div>
    </Page>
  );
});

export default Bookmarks;
