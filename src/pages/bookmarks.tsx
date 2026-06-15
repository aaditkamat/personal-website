import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';

import { bookmarks } from '../data/data';

const Bookmarks = memo(() => {
  const categories = bookmarks.map((category) => category.name);
  return (
    <Page className="bg-white" description="Bookmarks to reference important sites" title="Bookmarks">
      <div className="container mx-auto py-8">
         <h1 className="text-3xl font-bold mb-4 font-[Raleway]">Bookmarks</h1>
         {
            bookmarks.map((category) => ( 
              <div key={category.name} className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 font-[Raleway]">{category.name}</h2>
                <ul className="list-disc list-inside">
                  {category.bookmarks.map((bookmark) => (
                    <li key={bookmark.href} className="mb-1">
                      <a href={bookmark.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {bookmark.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))
         }
      </div>
    </Page>
  );
});

export default Bookmarks;