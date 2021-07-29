import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

const TableController = () => {


    return (
        <div style={{ width: '100%'}}>
            <Box display="flex" p={1}>
                <Button variant="contained">Edit</Button>
                <Button variant="contained" color="primary">Remove</Button>
                <label>Filter:</label>
                <input type='text'></input>
                <Button variant="contained" >Search</Button>
                <Button variant="contained">Reset</Button>
            </Box>
        </div>
    )
}

export default TableController