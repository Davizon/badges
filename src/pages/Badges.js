import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import api from '../api';
import PageLoading from '../components/PageLoading';
class Badges extends React.Component {
  


  constructor(props){
      super(props);
      this.state = {
        loading: true,
        error: null,
        data: undefined,
      };
  }
  componentDidMount(){
     this.fetchData()
  }
  fetchData = async () => {
      this.setState({loading: true, error: null})

      try {
          const data = await api.badges.list()
          this.setState({loading: false, data:data})
      } catch (error) {
          this.setState({loading: false, error:error})
      }
  }
  componentDidUpdate(prevProps, prevState) {
          console.log({prevProps:prevProps, prevState:prevState});
          console.log({
              props: this.props,
              state: this.state
          });
    }
    componentWillUnmount() {
        console.log('Hola unmout');
        clearTimeout(this.timeoutId);
    }
    
  render() {
      if (this.state.loading === true) {
          return(
              <PageLoading />
          )
      }
    return (
      <div>

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <BadgesList badges={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Badges;