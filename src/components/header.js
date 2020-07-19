import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Twemoji from 'react-twemoji';

const Wrap = styled.header`
  background: #333;
  margin-bottom: 20px;
  padding: 15px 30px;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  h1 {
    font-size: 28px;
    margin: 0;
    a {
      align-items: center;
      color: #fff;
      display: table;
      text-decoration: none;
      img {
        margin-right: 20px;
        width: 28px;
      }
    }
  }
`;

const Header = ({ siteTitle }) => (
  <Wrap>
    <Container>
      <h1>
        <Link to="/">
          <Twemoji tag="span">🐣</Twemoji>
          <span>{siteTitle}</span>
        </Link>
      </h1>
    </Container>
  </Wrap>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
