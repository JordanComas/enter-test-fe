import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Phones = () => {
  const [allPhones, setAllPhones] = React.useState([]);

  const getPhones = async () => {
    const response = await axios.get(
      "https://enter-test-be.herokuapp.com/phones/all"
    );
    console.log(response.data);

    setAllPhones(response.data.elements);
  };

  React.useEffect(() => {
    getPhones();
  }, []);

  return (
    <div className="all-phones">
      <h1>Search Our Selection of Phones</h1>
      {allPhones.map((phone) => {
        return (
          <div className="phone-section">
            <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
          </div>
        );
      })}
      <p>Jordan Comas</p>
    </div>
  );
};

export default Phones;
