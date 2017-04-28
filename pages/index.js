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
          ? <div className="link-container">
              <Link href="/portfolio">
                <a>PORTFOLIO</a>
              </Link>
              <Link href="/articles">
                <a>ARTICLES</a>
              </Link>
              <a href="mailto:quimperemanuel@gmail.com">EMAIL</a>
            </div>
          : <h3>Welcome to my blog!</h3>}

        <style jsx>{`
          .link-container {
            display: flex;
            width: 40%;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
          }

          h3 {
            color: ${colors.secondary};
          }

          a {
            color: ${colors.secondary};
            font-size: 20px;
          }

          a:hover {
            color: ${colors.accent};
            text-decoration: underline;
          }

          @media (max-width: 1000px) {
            .link-container {
              width: 95%;
            }
          }
        `}</style>
      </Page>
    );
  }
}
