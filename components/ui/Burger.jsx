import * as React from 'react';
import Button from '@mui/material/Button';
import ListSubheader from '@mui/material/ListSubheader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function GroupedMenu({ open, handleClose, anchorEl }) {

    return (
        <div>
            <Menu
                id="grouped-menu"
                sx={{
                    width: "100vw", // Full viewport width
                    maxWidth: "200px",
                    height: "800px",
                    // display: "flex",
                    "& .MuiPaper-root": {
                        width: "100vw",
                        height: "400px",
                        // Makes the dropdown itself full width
                    },
                    // padding: "100px"
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem sx={{ display: "flex", justifyContent: "center", gap: "10px" }} onClick={handleClose}> <img src="/icons/furniture.svg" alt="" />
                Эмерек  <img src="/icons/arrowleft.svg" alt="" /> </MenuItem>
                <MenuItem sx={{ display: "flex", justifyContent: "center", gap: "10px" }} onClick={handleClose}><img src="/icons/furniture.svg" alt="" />Лампы
                     <img src="/icons/arrowleft.svg" alt="" /></MenuItem>
                <MenuItem sx={{ display: "flex", justifyContent: "center", gap: "10px" }} onClick={handleClose}> <img src="/icons/furniture.svg" alt="" />Керебет<img src="/icons/arrowleft.svg" alt="" /></MenuItem>
                <MenuItem sx={{ display: "flex", justifyContent: "center", gap: "10px" }} onClick={handleClose}><img src="/icons/furniture.svg" alt="" />Аксессуар<img src="/icons/arrowleft.svg" alt="" /></MenuItem>
            </Menu>
        </div>
    );
}