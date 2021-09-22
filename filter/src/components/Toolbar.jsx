export default function Toolbar(props){

  const {filters, onSelectFilter, selected} = props;

  const toolbarLinks = filters.map((item, index) =>
  <button 
      className={selected === item ? 'toolbar__link toolbar__link_active' : 'toolbar__link'} 
      onClick={onSelectFilter} 
      data-filter={item} 
      key={index} >{item}
  </button>
);

  return (
    <div className="toolbar">
        {toolbarLinks}
    </div>
  )
}