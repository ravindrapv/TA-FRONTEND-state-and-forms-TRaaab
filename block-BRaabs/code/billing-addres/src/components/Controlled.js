import React, { Component } from "react";

export default class Controlled extends Component {
  state = {
    shipping: {
      address: "",
      zip: "",
      city: "",
      country: ""
    },
    billing: {
      address: "",
      zip: "",
      city: "",
      country: ""
    },
    isSame: false
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(state => ({
      shipping: { ...state.shipping, [name]: value }
    }));
  };
  handleCheckbox = () => {
    this.setState(({ isSame }) => ({ isSame: !isSame }));
  };
  render() {
    const { isSame, billing, shipping } = this.state;
    const billingData = isSame ? shipping : billing;
    return (
      <>
      <p className=' text-red-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga consequatur dolore culpa, consectetur voluptas quam alias officiis sint nihil ipsum incidunt quos itaque commodi molestiae tenetur magni accusamus pariatur mollitia!</p>
        <div className="columns is-mobile is-3 flex">
          <div className="column main-heading" style={{ marginTop: "3rem" }}>
            <h1 className="is-size-3 has-text-primary">Shipping Address</h1>
            <div className="field">
              <label className="label">Address</label>
              <div className="control">
                <input
                  name="address"
                  onChange={this.handleChange}
                  className="input"
                  type="text"
                  placeholder="e.g New Delhi Vasnat Vihar"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">ZIP/Postal Code</label>
              <div className="control">
                <input
                  name="zip"
                  onChange={this.handleChange}
                  className="input"
                  type="text"
                  placeholder="e.g. 176057"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">City</label>
              <div className="control">
                <input
                  name="city"
                  onChange={this.handleChange}
                  className="input"
                  type="text"
                  placeholder="e.g New Delhi"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Country</label>
              <div className="control">
                <input
                  className="input"
                  name="country"
                  onChange={this.handleChange}
                  type="text"
                  placeholder="e.g India"
                />
              </div>
            </div>
          </div>
          <div className="column main-heading" style={{ marginTop: "3rem" }}>
            <div className="field">
              <h1 className="is-size-3 has-text-primary">Billing Address</h1>
              <div className="control">
                <label className="checkbox">
                  <input onChange={this.handleCheckbox} type="checkbox" /> Same
                  as the Shipping Address?
                </label>
              </div>
            </div>
            <div className="field">
              <label className="label">Address</label>
              <div className="control">
                <input
                  value={billingData.address}
                  className="input"
                  type="text"
                  placeholder="e.g New Delhi Vasnat Vihar"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">ZIP/Postal Code</label>
              <div className="control">
                <input
                  value={billingData.zip}
                  className="input"
                  type="text"
                  placeholder="e.g. 176057"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">City</label>
              <div className="control">
                <input
                  value={billingData.city}
                  className="input"
                  type="text"
                  placeholder="e.g New Delhi"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Country</label>
              <div className="control">
                <input
                  className="input"
                  value={billingData.country}
                  type="text"
                  placeholder="e.g India"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}