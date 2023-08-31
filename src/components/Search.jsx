import { getAlgoliaResults } from '@algolia/autocomplete-js';
import algoliasearch from 'algoliasearch';
import Autocomplete from './Autocomplete';
import ProductItem from './ProductItem';

import '@algolia/autocomplete-theme-classic';


const Search = () => {
  const appId = 'TKMPKBI12P';
  const apiKey = '9754e445b3cab527d15d058ec721533c';
  const searchClient = algoliasearch(appId, apiKey);

  const getSources = ({ query }) => {
    return [
      {
        sourceId: 'products',
        getItems() {
          return getAlgoliaResults({
            searchClient,
            queries: [
              {
                indexName: 'website',
                query,
              },
            ],
          });
        },
        templates: {
          item({ item, components }) {
            return <ProductItem hit={item} components={components} />;
          },
        },
      },
    ];
  };
  return <Autocomplete openOnFocus={true} getSources={getSources} />;
};

export default Search;
