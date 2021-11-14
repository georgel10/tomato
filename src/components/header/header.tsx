import React from 'react';
import {
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderName,
} from 'carbon-components-react';
import { Search20 } from '@carbon/icons-react';

const NavHeader = () => {
  return (
    <Header>
      <HeaderName href="/" prefix="">
        <img src="/assets/logo.png" className="logo" alt="Logo" />
      </HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search" onClick={() => undefined}>
          <Search20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
};

export default NavHeader;
