import React from "react";
import { connect } from "react-redux";
import {
  setCurrentLocation,
  getWeatherData,
  setFetching,
} from "../redux/actions.js";

const Button = ({ setCurrentLocation, getWeatherData, setFetching }) => {
  const handleClick = () => {
    setFetching();
    getCurrentLocationData();
  };

  const getCurrentLocationData = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lattitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        setLocation({ position: { lattitude, longitude } });
        getWeatherData(lattitude, longitude);
      });
    }
  };
  return (
    <div>
      <div className="row">
        <div className="col-xs-4">
          <button onClick={() => handleClick()}>Current Location</button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFetching: () => dispatch(setFetchingTrue()),
    setLocation: (location) => dispatch(setCurrentLocation(location)),
    getWeatherData: (latitude, longitude) =>
      dispatch(getWeatherData(latitude, longitude)),
  };
};

export default connect(null, mapDispatchToProps)(Button);
