import { DocSearch } from '@docsearch/react';
import { createPortal } from 'preact/compat';

export default () => {
    return (
        createPortal(
            <DocSearch
                apiKey="c0b0c0a0c0a0c0a0c0a0c0a0c0a0c0a0"
                indexName="preactjs_com"
                placeholder="Search the docs"
                appId="BH4D9OD16A"
            />
        )
    )
}