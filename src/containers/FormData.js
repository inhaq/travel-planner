import React, {Component} from 'react';
import {connect}          from 'react-redux';
import {getFormData} from '../actions/index'

import Script from 'react-load-script';

const mapDispatchToProps = dispatch => {
  return {
    getFormData: (form) => {
      dispatch(getFormData(form))
    }
  };
};

class FormData extends Component {

  state = {start: '', destination: '', date:'', passengersCount:''};

  handleChange = (type,val) => {
    this.setState({
      [type]: val
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {start, destination, date, passengersCount} = this.state;
    this.props.getFormData({id: Math.random(),start,destination,date,passengersCount});

    this.setState(() => ({
      start: '', destination: '', date:'', passengersCount:''
    }));

  };

  handleScriptLoad = () => {

    var options = { types: ['(cities)'] };

    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'), options);

    this.autocomplete.addListener('place_changed',
    this.handlePlaceSelect);
  };

  handlePlaceSelect = (type) => {

    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;

    if (address) {
      this.setState(
        {
          city: address[0].long_name,
          [type]: addressObject.formatted_address,
        }
      );
    }
  };


  render() {
    return (
      <form className="form-data">
        <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyB8B04MTIk7abJDVESr6SUF6f3Hgt1DPAY&libraries=places"
                onLoad={this.handleScriptLoad}
        />
        <label>
          Start:
          <input id="autocomplete" placeholder="" onChange={e => this.handleChange('start',e.target.value)} value={this.state.start}
          />
        </label>
        <label>
          Destination:
          <input id="autocomplete" placeholder="" onChange={e => this.handleChange('destination',e.target.value)} value={this.state.destination} />
        </label>
        <label>
          Date:
          <input type='date' onChange={e => this.handleChange('date',e.target.value)} value={this.state.date} />
        </label>
        <label>
          Number of Passengers:
          <input type='number' onChange={e => this.handleChange('passengersCount',e.target.value)} value={this.state.passengersCount} />
        </label>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(FormData);