import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName:'',
      lastName:'',
      email:'',
      jobTitle:'',
      tritter:'',
    }
  };
  handleChange = e => {
    this.setState({
      
      form: {
        ...this.state.form,
      [e.target.name]: e.target.value,
      }
    });
  };
  render() {
    return (
      <div>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                avatarUrl="https://media.licdn.com/dms/image/C4D03AQF_3VGpsDuHrw/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=tWx5u38VKNpwjuc7yiXcB9jVt_0bE7anmvNod9_VCkM"
              />
            </div>

            <div className="col-6">
              <BadgeForm onChange={this.handleChange} Form={this.state.form} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;