import Grid from "@mui/material/Grid"

import MyForm from "./components/MyForm"
import MyTable from "./components/MyTable"

import * as React from 'react';
import './App.css'
const App = () => {

    return (
        <>
            <Grid container spacing={{ xs: 2, md: 3 }} className="grid">
                <Grid item xs={12} md={4} lg={6} >
                    <MyForm />
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                    <MyTable />
                </Grid>
            </Grid>
 
        </>
    );
};
export default App;