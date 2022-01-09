import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getCountrys, editCountry } from '../Service/api';

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

const EditCountry = () => {
    const [country, setCountry] = useState(initialValue);
    const { name, currency, population, GDP } = country;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadCountryDetails();
    }, []);

    const loadCountryDetails = async() => {
        const response = await getCountrys(id);
        setCountry(response.data);
    }

    const editCountryDetails = async() => {
        const response = await editCountry(id, country);
        history.push('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setCountry({...country, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Currency</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='currency' value={currency} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Population</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='population' value={population} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">GDP</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='GDP' value={GDP} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editCountryDetails()}>Edit Country</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditCountry;