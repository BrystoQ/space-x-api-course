import React from 'react';
import './Header.scss';
// @ts-ignore
import { ReactComponent as SpaceXLogo } from '../../../assets/SpaceX-Logo.svg';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  // @ts-ignore
  const handleNavigate = (target) => {
    navigate(target);
  };

  const pages = [
    {
      key: 'launches',
      label: 'Launches',
      link: '/launches',
    },
    {
      key: 'capsules',
      label: 'Capsules',
      link: '/capsules',
    },
  ];

  console.log(pages);
  return (
    <div className="header">
      <div className="logo" onClick={() => handleNavigate('/')}>
        <SpaceXLogo />
      </div>
      <div className="link-list">
        {pages.map((page) => (
          <div
            key={page.key}
            className="item"
            onClick={() => handleNavigate(page.link)}
          >
            {page.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
