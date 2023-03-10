import { Component } from "react";
import Business from "../Business/Business";
import "./BusinessList.css";

class BusinessList extends Component {
  render() {
    return (
      <div className="business-list">
        {this.props.businesses.map((business) => {
          return <Business key={business.id} business={business} />;
        })}
      </div>
    );
  }
}

export default BusinessList;
