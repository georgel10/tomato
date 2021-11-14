import React from 'react';
import { Column, Content, Grid, Row } from 'carbon-components-react';

const Footer = () => {
  return (
    <footer className="footer">
      <Content>
        <Grid>
          <Row>
            <img src="/assets/logo.png" alt="Logo" />
          </Row>
          <Row condensed>
            <Column lg={{ span: 1 }}>
              <a href="#" className="footer__link">
                Home
              </a>
            </Column>
            <Column lg={{ span: 1 }}>
              <a href="#" className="footer__link">
                Terms of Use
              </a>
            </Column>
            <Column lg={{ span: 1 }}>
              <a href="#" className="footer__link">
                Legal Notices
              </a>
            </Column>
            <Column lg={{ span: 1 }}>
              <a href="#" className="footer__link">
                Help
              </a>
            </Column>
            <Column lg={{ span: 1 }}>
              <a href="#" className="footer__link">
                Manager Account
              </a>
            </Column>
          </Row>
          <Row>
            <Column lg={{ span: 2 }}>
              <img
                src="/assets/app-store.png"
                className="image"
                alt="App Stone"
              />
            </Column>
            <Column lg={{ span: 2 }}>
              <img
                src="/assets/google-play.png"
                className="image"
                alt="Google play"
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <span className="footer__copyright">
                Copyright © 2020 Dreadful Tomato Streming. All Rights Reserved.
              </span>
            </Column>
          </Row>
        </Grid>
      </Content>
    </footer>
  );
};

export default Footer;
