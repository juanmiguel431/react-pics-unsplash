const ImageList = props => {

  const images = props.images.map(({id, description, urls}) => {
    return <img key={id} src={urls.regular} alt={description}/>;
  });

  return (
    <div className="image-list">
      <ul>
        <img key={2} src="" alt={"JMPC test"}/>
        {images}
      </ul>
    </div>
  );
};

export default ImageList;
