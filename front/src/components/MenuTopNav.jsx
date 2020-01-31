import React from 'react';
import { Dropdown, Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const options = [
  { key: 1, text: <NavLink to="/">Accueil</NavLink>, value: 1 },
  { key: 2, text: <NavLink to="/formation">Formation</NavLink>, value: 2 },
  { key: 3, text: <NavLink to="/inscription">Inscription</NavLink>, value: 3 },
  { key: 4, text: <NavLink to="/etudiant">Etudiant</NavLink>, value: 4 },
];

const MenuTopNav = () => (
  <Menu compact>
    <Dropdown
      trigger={(
        <Icon
          name="bars"
          size="big"
          color="blue"
          alt="user"
        />
      )}
      options={options}
      simple
      item
      direction="left"
    />
  </Menu>
);

export default MenuTopNav;