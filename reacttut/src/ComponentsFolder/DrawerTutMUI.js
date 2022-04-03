import { Button, makeStyles } from "@material-ui/core"
import { Link, Route, Routes } from "react-router-dom"
import { MyAppointment } from "./MyAppointments"
import { MyProfile } from "./MyProfile"
import './DashBoard.css'
import SendIcon from '@mui/icons-material/Send';
import { AppBar, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useState } from "react"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import BookOnlineIcon from '@mui/icons-material/BookOnline';

const useStyles = makeStyles({
    DashBoardAppointmentButton : {
        backgroundColor: 'Blue',
        color: 'white',
        position:'relative',
        padding: '100px',
        margin: '50px',
        fontSize: '1.3em',
        '&:hover':{
            color: 'blue'
        }
    },
    DashboardProfileButton : {
        backgroundColor: 'red',
        color: 'white',
        position:'relative',
        padding: '100px',
        margin: '50px',
        fontSize: '1.3em',
        '&:hover':{
            color: 'red'
        }
    }
})

/*
    [`& .MuiDrawer-paper`]: { width: '350px', boxSizing: 'border-box' },
    [`& .MuiPaper-root`]: {position: 'relative', padding: '20px'}

    these are inline css so it not affects any other drawer
    suppose if we insert a new drawer despite we have applied css props to drawer by class name it doesnot affect
    it as it is applied using inline css
*/

export const DashBoard = () => {
    const [open, setOpen] = useState(true);
    const classes = useStyles();
    return(
        <div className="DashBoardContainer">
            <div style={{width: '100%', display:'flex'}}>
                {/*<AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}><Button>Clocked</Button><Button>Click</Button><Button>Click2</Button></AppBar>*/}
                <Drawer variant="permanent"
                    sx={{
                        position: 'relative',
                        width: '350px',
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: '350px', boxSizing: 'border-box' },
                        [`& .MuiPaper-root`]: {position: 'relative', padding: '20px'}
                    }}
                >   
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? 'ok' : 'done'}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
                <Button variant="contained" className={classes.DashBoardAppointmentButton} startIcon={<BookOnlineIcon/>}>My Appointments</Button>
                <Button variant="contained" className={classes.DashboardProfileButton} startIcon={<AssignmentIndIcon/>}>My Profile</Button>
                
            </div>
        </div>
    )
}