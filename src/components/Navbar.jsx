import React from "react";
import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'
import {logo} from '../utils/constants'
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
        <Stack direction="row" alignItems="center" p={2}
               sx={{position: 'sticky', background: "#000", top: 0, justifyContent: 'space-between'}}>
            <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
               <div style={{display:"flex",alignItems:"center",alignContent:"center"}}>  <img src={logo} alt="logo" height={45}/> <div style={{marginLeft:"5px",marginTop:"5px",color:"#FFF",fontSize:27,fontWeight:400,fontFamily: 'Fjalla One'}}>YouTube</div> </div>
            </Link>
            <SearchBar/>
        </Stack>
    )
}

export default Navbar;