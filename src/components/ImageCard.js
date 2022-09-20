import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spans: 0};
    this.imageRef = React.createRef();
    this.setSpans = this.setSpans.bind(this);
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans(evt) {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({spans});
  }

  render() {
    const {urls, description} = this.props.image;
    return (
      <div className="image-card" style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} src={urls.regular} alt={description}/>;
      </div>
    );
  }
}

export default ImageCard;
