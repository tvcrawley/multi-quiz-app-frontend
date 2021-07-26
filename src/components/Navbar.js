import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})

function Navbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const logout = () => {
    localStorage.clear()
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Signup', 'Login'].map(text => (
          <ListItem button key={text}>
            <Link to={`/${text.toLowerCase()}`}>{text}</Link>
          </ListItem>
        ))}
         <ListItem button onClick={() => logout()}>
            <ListItemText primary="Log Out" />
          </ListItem>
      </List>
      <Divider />
      <List>
        {['Quizzes'].map(text => (
          <ListItem button key={text}>
            <Link to={`/${text.toLowerCase()}`}>{text}</Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <span>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>Menu</Button> */}
          <ListItemIcon>
              <MenuIcon onClick={toggleDrawer(anchor, true)} />
          </ListItemIcon>

          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </span>
  );
}

  export default Navbar
