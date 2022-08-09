import React from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Spinner from "./Spinner";
// import "../images/";

const PhoneDetails = () => {
  const [singlePhone, setSinglePhone] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const params = useParams();

  const SpecificPhone = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://enter-test-be.herokuapp.com/phones/phones/${params.id}`
    );

    console.log(response.data);

    setSinglePhone(response.data);
    setLoading(false);
  };

  React.useEffect(() => {
    SpecificPhone();
  }, []);

  return (
    <div className="phone-details">
      {loading && <Spinner />}
      {/* <Spinner /> */}
      <Link className="arrow" to="/">
        &#8592;
      </Link>
      <div className="left-col">
        <div className="image-details">
          {singlePhone.imageFileName && (
            <img src={require(`../images/${singlePhone.imageFileName}`)} />
          )}
        </div>
        <h4>Name</h4>
        <p>{singlePhone.name}</p>
        <h4>Color</h4>
        <p>{singlePhone.color}</p>
        <h4>Price</h4>
        <p>${singlePhone.price}</p>
        <h4>Manufacturer</h4>
        <p>{singlePhone.manufacturer}</p>
        <h4>Specs</h4>
        <div className="specs">
          <p>
            <b>Processor: </b>
            {singlePhone.processor}
          </p>
          <p>
            <b>Ram: </b>
            {singlePhone.ram}
          </p>
          <p>
            <b>Screen Size: </b>
            {singlePhone.screen}
          </p>
        </div>
      </div>
      <div className="right-col">
        <h4>Description</h4>
        <p>{singlePhone.description}</p>
      </div>
    </div>
  );
};

export default PhoneDetails;
