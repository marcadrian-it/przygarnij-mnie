import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    imgUrl: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { imgUrl } = this.props;

    return (
      <div className="carousel">
        <img src={imgUrl} alt="animal hero" />
      </div>
    );
  }
}
export default Carousel;
