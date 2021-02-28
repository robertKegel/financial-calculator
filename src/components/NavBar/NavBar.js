import { useState, useRef } from 'react';
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
    
    
    return (
      <div>
        <AppBar>
          <Toolbar>
            <IconButton>
              <MenuIcon ref={anchorRef} onClick={handleMenuClick}/>
            </IconButton>
            <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
              {({ TransitionProps }) => (
                <Grow {...TransitionProps} style={{ transformOrigin: 'bottom-start'}}>
                  <Paper>
                    <ClickAwayListener onClickAway={handleMenuClose}>
                      <MenuList autoFocusItem={open} id="menu-list-grow">
                        <MenuItem onClick={handleMenuClose}>Simple Loan</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Mortgage Payment</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Home Affordability</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <Typography>
              Financial Calculators
            </Typography>
            <hr></hr>
            <Typography>
              <Button color='inheret' variant='contained' href="https://iamrobertkegel.com">
                iamRobertKegel.com
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default NavBar;