import docSearch  from '@docsearch/react';
const { DocSearch } = docSearch;
 
import '@docsearch/css';

const SearchBar = () => {
  return (
    <DocSearch
      appId="O4EM35CRG4"
      indexName="netlify_3c36968e-e94f-44df-8738-07d71850ba64_main_all"
      apiKey="c173b146b3d74fa5869b9e5f2b7cd5b0"
    />
  );
};

export default SearchBar;
