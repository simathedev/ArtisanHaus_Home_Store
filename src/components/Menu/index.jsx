'use client';
import React, { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { menuLinks } from './data';
import Link from 'next/link';

const Menu = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setOpenDrawer(open);
  };

  const menuList = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuLinks.map((link, index) => (
          <Link href={link.href} key={index}>
            <ListItem>
              <ListItemText primary={link.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        {openDrawer ? <FaTimes /> : <IoMenu />}
      </IconButton>
      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.

        }}
        PaperProps={{
            style: {
              width: '20vw', // Set the width as 40% of the viewport width
              minWidth: '250px', // Minimum width if needed
            },
          }}
      >
        {isMobile && (
          <IconButton onClick={toggleDrawer(false)}>
            <FaTimes />
          </IconButton>
        )}
        {menuList}
      </Drawer>
    </div>
  );
};

export default Menu;
