import React, { Component } from 'react';
import Routes from './Route';
import TopNavigation from './Elements/NavigationTop';
import SideNavigation from './Elements/NavigationSide';
import Footer from './Elements/Footer';
import '../index.css';

class Home extends Component {
  
  render() {
    return (
        <div className="flexible-content">
          <TopNavigation />
          <SideNavigation />
          <main id="content" className="p-5">
            <Routes />
          </main>
          <Footer />
        </div>
    );
  }
}

export default Home;