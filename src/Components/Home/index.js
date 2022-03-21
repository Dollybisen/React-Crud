import React from "react";
import List from "../Student/List";
import axios from "axios";
import { useState } from "react";
import { Typography, Box, makeStyles, Grid, TextField, Button } from "@material-ui/core";
import { deepPurple, green } from "@material-ui/core/colors";


const useStyles = makeStyles({
    headingColor: {
        backgroundColor: deepPurple[400],
        color: "white"
    },
    addStuColor: {
        background: green[400],
        color: "white"
    },
});
const Home = () => {
    const classes = useStyles();
    const [student, setStudent] = useState({ stuname: "", email: "" });
    const [status, setStatus] = useState();

    const onTextFieldChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }
    async function onFormSubmit(e) {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:3001/students`, student)
            setStatus(true);
        } catch (error) {
            console.log("something is wrong");
        }
    }
    if (status) {
        return <Home />
    }
    return (
        <div>
            <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
                <Typography variant="h3">React Crud with API Call</Typography>
            </Box>
            <Grid container justify="center" spacing={2} >
                <Grid item md={6} xs={12}>
                    <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
                        <Typography variant="h4">Add Student</Typography>
                    </Box>
                    <form noValidate >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField autoComplete="stuname" name="stuname" variant="outlined" required fullWidth id="stuname" label="Name" onChange={e => onTextFieldChange(e)} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField autoComplete="email" name="email" variant="outlined" required fullWidth id="email" label="Email Address" onChange={e => onTextFieldChange(e)} />
                            </Grid>
                        </Grid>
                        <Box m={3}>
                            <Button type="submit" variant="contained" color="primary" fullWidth onClick={e => onFormSubmit(e)} >Add</Button>
                        </Box>
                    </form>
                </Grid>

                <Grid item md={6} xs={12}>
                    <List />
                </Grid>
            </Grid>
        </div>
    )
};
export default Home;