import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addCountry } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    name: '',
    currency: '',
    population: '',
    GDP: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddCountry = () => {
    const [country, setCountry] = useState(initialValue);
    const { name, currency, population , GDP  } = country;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setCountry({...country, [e.target.name]: e.target.value})
    }

    const addCountryDetails = async() => {
        await addCountry(country);
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Country</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Currency</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='currency' value={currency} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Population</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='population' value={population} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">GDP</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='GDP' value={GDP} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addCountryDetails()}>Add Country</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddCountry;