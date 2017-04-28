import React, { Component } from 'react';
import Link from 'next/link';

import Page from '../layout/Page';
import Logo from '../components/Logo';
import colors from '../constants/colors';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      showLinks: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showLinks: true,
      });
    }, 1000);
  }

  render() {
    return (
      <Page>
        <Logo />
        {this.state.showLinks
          ? <div>
              <h1>EQuimper</h1>
              <div className="link-container">
                <Link href="/articles">
                  <a>ARTICLES</a>
                </Link>
                <a href="mailto:quimperemanuel@gmail.com">EMAIL</a>
              </div>
            </div>
          : <h3>Welcome to my blog!</h3>}

        <style jsx>{`
          .link-container {
            flex: none;
            text-align: center;
            margin-top: 20px;
          }

          h3 {
            color: ${colors.secondary};
          }

          h1 {
            font-size: 20px;
            font-weight: normal;
            color: ${colors.accent};
            text-align: center;
          }


          a {
            color: ${colors.secondary};
            font-size: 20px;
            display: inline-block;
            margin: 0 15px;
            text-decoration: none;
          }

          a:hover {
            color: ${colors.accent};
            text-decoration: underline;
          }
        `}</style>
      </Page>
    );
  }
}
