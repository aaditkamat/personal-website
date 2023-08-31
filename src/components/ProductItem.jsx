
export default ({ hit, components }) => (
    <a href={hit.path} className="aa-ItemLink">
      <div className="aa-ItemTitle">
          <components.Highlight hit={hit} attribute="title" />
      </div>
      <div className="aa-ItemContent">
         <components.Highlight hit={hit} attribute="text" />
      </div>
    </a>
);
