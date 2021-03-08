import React, { useState, useRef } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Grow, Popper, Paper, MenuItem, MenuList, ClickAwayListener } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"


function NavBar(props) {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleMenuClick = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleMenuClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)){
            return
        }

        setOpen(false);
    };

    const handleMenuItemClick = (event) => {
      props.setMainComponent(event.target.id);
      handleMenuClose(event);
    }
    
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }

      prevOpen.current = open;
    }, [open]);

    
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton ref={anchorRef} onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Popper open={open} anchorEl={anchorRef.current} transition>
              {({ TransitionProps }) => (
                <Grow {...TransitionProps} style={{ transformOrigin: 'bottom-left'}}>
                  <Paper aria-modal='true'>
                    <ClickAwayListener onClickAway={handleMenuClose}>
                      <MenuList autoFocusItem={open} id="menu-list-grow">
                        <MenuItem onClick={handleMenuItemClick} id='SimpleLoan'>Simple Loan</MenuItem>
                        <MenuItem onClick={handleMenuItemClick} id='FutureValue'>Future Value</MenuItem>
                        {/*<MenuItem onClick={handleMenuItemClick} key=''></MenuItem>*/}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <Typography>
              Financial Calculators
            </Typography>
            <hr />
            <Typography>
              <Button color='inherit' variant='contained' href="https://iamrobertkegel.com">
                iamRobertKegel
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default NavBar;