import React from "react";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import "./style.css";

import {
  data,
  Establishment,
  Reason,
  Infra,
  BusinessLocality,
  MarketResearch,
  PrimaryMarket,
  Seasonality,
  Competition,
  MarketingAvenue,
  ScaleUp,
} from "./Datas";

const Form = () => {
  const [form, setForm] = React.useState({
    section: "",
    age_of_establishment: "",
    primary_product: "",
    offered_to: "",
    secondary_product: "",
    processed_product: "",
    relevant_experience: "",
    skill: "",
    unique_selling_proposition: "",
    establishment_type: "",
    business_area: "",
    business_locality: "",
    infra_ownership: "",
    establishment_area: "",
    market_research: "",
    primary_market: "",
    customer: "",
    seasonality: "",
    supplier: "",
    competition: "",
  });

  const [name, setName] = React.useState("Tushar");
  const [val, setVal] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [marketingAvenue, setMarketingAvenue] = React.useState("");
  const [scaleUp, setScaleUp] = React.useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name || e.target.label]: e.target.value });
  };

  const handleOnChange = (val) => {
    setVal(val);
  };

  const handleOnLChange = (val) => {
    setLocation(val);
  };

  const handleMarketingAvenue = (val) => {
    setMarketingAvenue(val);
  };

  const handleScaleUp = (val) => {
    setScaleUp(val);
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-header">
          <h1
          
          >Form </h1>
        </div>

        <div className="form-body">
          <form>
            <h3 
            className="response-header"
            style={{ 
              height:"50px", 
              justifyContent: "center",
              lineHeight:1.38,
            }}
            >Introduction</h3>
            <div className="form-group">
              <label>
                Business Stage :
                <input
                  list="section"
                  name="section"
                  onChange={handleChange}
                  value={form.section}
                />
              </label>
              <datalist
                id="section"
                name="section"
                onChange={handleChange}
                value={form.section}
              >
                <option value="Start up" />
                <option value="Scale up" />
              </datalist>
            </div>
            <div className="form-group">
              <label>
                Age of establishment:
                <input
                  type="number"
                  name="age_of_establishment"
                  id="age_of_establishment"
                  onChange={handleChange}
                  value={form.age_of_establishment}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Primary Product :
                <input
                  type="text"
                  name="primary_product"
                  id="primary_product"
                  onChange={handleChange}
                  value={form.primary_product}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                offered to:
                <input
                  list="offer"
                  name="offered_to"
                  value={form.offered_to}
                  onChange={handleChange}
                />
              </label>
              <datalist id="offer" name="offered_to" onChange={handleChange}>
                <option value="End customers" />
                <option value="Retailers" />
                <option value="Wholesalers" />
                <option value="Distributors" />
              </datalist>
            </div>
            <div className="form-group">
              <label>
                Secondary Product :
                <input
                  type="text"
                  name="secondary_product"
                  id="secondary_product"
                  onChange={handleChange}
                  value={form.secondary_product}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Precessed Product :
                <input
                  type="text"
                  name="processed_product"
                  id="processed_product"
                  onChange={handleChange}
                  value={form.processed_product}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Relevant Experience
                <input
                  type="number"
                  name="relevant_experience"
                  id="relevant_experience"
                  onChange={handleChange}
                  value={form.relevant_experience}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Skill Training
                <input
                  list="skill"
                  name="skill"
                  onChange={handleChange}
                  value={form.skill}
                />
              </label>
              <datalist
                id="skill"
                name="skill"
                onChange={handleChange}
                value={form.skill}
              >
                <option value="Presentation" />
                <option value="Project Management" />
                <option value="Team Work" />
                <option value="Communication" />
              </datalist>
            </div>
            <div className="form-group">
              <label>
                Unique selling proposition :
                <MultiSelect
                  options={data}
                  name="unique_selling_proposition"
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <h3
            className="response-header"
            style={{ 
              height:"50px", 
              justifyContent: "center",
              lineHeight:1.38,
            }}
            >Location</h3>
            <div className="form-group">
              <label>Establishment type :</label>
              <select
                name="establishment_type"
                onChange={handleChange}
                value={form.establishment_type}
              >
                {Establishment.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            {/* <div className="form-group">
              <label>
                business Area :
                <input
                  type="text"
                  name="business_area"
                  value={form.business_area}
                  className="form-control"
                  id="business_area"
                />
              </label>
            </div> */}
            <div className="form-group">
              <label>
                Reason for location :
                <MultiSelect
                  options={Reason}
                  id="reason_for_location"
                  onChange={handleOnLChange}
                  value={location}
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Business Area :
                <input
                  type="text"
                  className="form-control"
                  value={form.business_area}
                  name="business_area"
                  id="business_area"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="form-group">
              <label>Business Locality :</label>
              <select
                id="business_locality"
                name="business_locality"
                value={form.business_locality}
                onChange={handleChange}
              >
                {BusinessLocality.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Infra ownerShip :</label>
              <select
                id="infra_ownership"
                name="infra_ownership"
                value={form.infra_ownership}
                onChange={handleChange}
              >
                {Infra.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>
                Establishment Area :
                <input
                  type="number"
                  className="form-control"
                  id="establishment_area"
                  onChange={handleChange}
                  name="establishment_area"
                  placeholder="Establishment Area"
                  value={form.establishment_area}
                />
              </label>
            </div>
            <h3
            className="response-header"
            style={{
              height:"50px",
              justifyContent: "center",
              lineHeight:1.38,
            }}
            >
              Target Market
            </h3>
            <div className="form-group">
              <label>Market Research :</label>
              <select
                id="market_research"
                name="market_research"
                value={form.market_research}
                onChange={handleChange}
              >
                {MarketResearch.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Primary market</label>
              <select
                id="primary_market"
                name="primary_market"
                value={form.primary_market}
                onChange={handleChange}
              >
                {PrimaryMarket.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>
                Customers :
                <input type="text" name="customers" className="form-control" onChange={handleChange} />
              </label>
            </div>
            <div className="form-group">
              <label>Seasonality :</label>
              <select
                id="seasonality"
                name="seasonality"
                value={form.seasonality}
                onChange={handleChange}
              >
                {Seasonality.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Competition :</label>
              <select
                id="competition"
                name="competition"
                value={form.competition}
                onChange={handleChange}
              >
                {Competition.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>
                Suppliers :
                <input type="text" className="form-control" name="suppliers" onChange={handleChange} placeholder="suppliers"id="suppliers" />
              </label>
            </div>
            <div className="form-group">
              <label>
                Marketing Avenue :
                <MultiSelect
                  options={MarketingAvenue}
                  value={MarketingAvenue}
                  onChange={handleMarketingAvenue}
                />
              </label>
            </div>
            <h3
            className="response-header"
            style={{
              height:"50px",
              justifyContent: "center",
              lineHeight:1.38,
            }}
            >
            Scaling up potential
            </h3>
            <div className="form-group">
              <label>
                Scale up :
                <MultiSelect
                  options={ScaleUp}
                  value={ScaleUp}
                  onChange={handleScaleUp}
                />
              </label>
            </div>
          </form>
        </div>
      </div>

      {/* "----response---" */}
      <div className="response-container">
        <div className="form-group">
          <div className="response-header">
            <h1>Output</h1>
          </div>

          <div className="response-body">
            <h4>Business Stage :</h4>
            <p>
              {name} is looking to {form.section} their business of{" "}
              {form.primary_product}
            </p>
            <h4>Age of Establishment :</h4>
            <p>
              {form.age_of_establishment <= 100 ? 
            <p>This enterprise has been operational since ;
            {   form.age_of_establishment} years and has been serving its
            customers since then.</p> : "age should be less than 100"
            }
              
            </p>
            <h4>Primary Product :</h4>
            <p>
              This establishment offers products/services like-
              {form.primary_product} to {form.offered_to}
            </p>
            {/* <h4>offered to :</h4>
            <p>{form.offered_to}</p> */}
            <h4>Secondary Product :</h4>
            <p>
              In addition, the enterprise shall also be involved in-
              {form.secondary_product}
            </p>
            <h4>Precessed Product :</h4>
            <p>
              Other products of the enterprise shall include-
              {form.processed_product}
            </p>

            <h4>Relevant Experience :</h4>
            <p>
              {name} has relevant experience of {form.relevant_experience} years
              in this field.
            </p>
            <h4>Skill Training :</h4>
            <p>The entrepreneur {form.skill} in this field of work.</p>
            <h4>Unique selling proposition :</h4>
            <p>{val}</p>
            <h4>Establishment type :</h4>
            <p>
              The {form.establishment_type} is located in{" "}
              {form.business_locality} area of Delhi in a {form.infra_ownership} property.
            </p>
            {/* <h4>business Area :</h4>
            <p>{form.business_area}</p>
            <h4>Reason for location :</h4>
            <p>{form.reason_for_location}</p>
            <h4>Business Area :</h4>
            <p>{form.business_area}</p>
            <h4>Business Locality :</h4>
            <p>{form.business_locality}</p>
            <h4>Infra ownerShip :</h4>
            <p>{form.infra_ownership}</p> */}
            <h4>Establishment Area :</h4>
            <p>
              The size of the establishment is {form.establishment_area} sq.ft.
            </p>
            <h4>Reason for selecting this location</h4>
            <p>This locality is selected because of :{location}</p>
            <h4>Market Research :</h4>
            <p>
              {form.market_research} and the range of products and target market
              has been identified after that.
            </p>
            <h4>Primary market :</h4>
            <p>
              The enterprise shall focus on offering its products/services to :
              {form.primary_market}
            </p>
            <h4>Customers :</h4>
            <p>Our customers shall include- {form.customers}</p>
            <h4>Seasonality :</h4>
            <p>
              The nature of the business is such that we expect{" "}
              {form.seasonality}
            </p>
            <h4>Competition :</h4>
            <p>Regarding competition, {form.competition}</p>
            <h4>Suppliers :</h4>
            <p>
              The enterprise shall procure goods/raw materials from{" "}
              {form.suppliers}
            </p>
            <h4>Marketing Avenue :</h4>
            <p>
              Our marketing avenues to reach the targeted customers shall
              include- {marketingAvenue}
            </p>
            <h4>Scale up :</h4>
            <p>
              The various foreseeable avenues of scaling up and growing the
              business in the foreseeable future include- {scaleUp}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
