export default function ProjectList(props){
  
  const projects = Object.values(props);

  const listItems = projects[0].map((item, index) =>
      <div className="project-list__item" key={index} data-category={item.category}>
        <img className="project-list__img" src={item.img}  alt={item.img}/>
      </div>
  );

  return (
    <div className="project-list">
      {listItems}
    </div>
  );
}