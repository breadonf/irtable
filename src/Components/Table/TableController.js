import React from 'react';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";

const TableController = () => {
    return (
        <Grid container direction={'row'} spacing={5} justifyContent={'center'}>
            <Grid item xs={1}><Button variant="contained">Edit</Button></Grid>
            <Grid item xs={2}><Button variant="contained" color="primary">Remove</Button></Grid>
            <Grid item xs={4}><label>Filter:</label>
                <input type='text'></input></Grid>
            <Grid item xs={1}><Button variant="contained" >Search</Button></Grid>
            <Grid item xs={1}><Button variant="contained">Reset</Button></Grid>
        </Grid>
    )
}

export default TableController