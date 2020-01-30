import React from 'react';
import { Dropdown, Menu, Icon } from 'semantic-ui-react';
// import { NavLink } from 'react-router-dom';

const options = [
  { key: 1, text: "Tableau ", value: 1 },
  { key: 2, text: "dfdzfdf", value: 2 },
  { key: 3, text: "lkdjlzd", value: 3 },
  { key: 4, text: "lkuf", value: 4 },
  { key: 5, text: "klopckipoeepoc", value: 5 },
  { key: 6, text: "xqoiydzo", value: 6 }
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
      direction="right"
    />
  </Menu>
);

export default MenuTopNav;