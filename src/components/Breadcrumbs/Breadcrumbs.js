import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const Breadcrumbs = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Breadcrumbs.Crumb = ({ href, children, delegated }) => {
  return (
    <CrumbWrapper>
      <CrumbLink href={href} {...delegated}>
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
};

const CrumbWrapper = styled.div`
  &:not(:first-of-type) {
    margin-left: 8px;

    &::before {
      content: '/';
      margin-right: 8px;
      color: var(--colors-gray-300);
    }
  }
`;

const CrumbLink = styled.a`
  color: var(--colors-gray-700);
  text-decoration: none;

  &:hover {
    color: var(--colors-gray-900);
  }
`;

const Wrapper = styled.nav`
  display: flex;
  font-size: 0.875rem;
  position: absolute;
  top: 7.5rem;

  @media ${QUERIES.tabletAndUp} {
    position: static;
  }
`;
export default Breadcrumbs;
