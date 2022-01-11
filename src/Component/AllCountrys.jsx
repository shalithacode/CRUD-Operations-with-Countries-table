import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
// import { getCountrys, deleteCountry } from '../Service/api';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllCountrys = () => {
    const [countrys, setCountrys] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllCountrys();
    }, []);

    const deleteCountryData = (id) => {

        fetch(`http://localhost:3002/countrys/${id}`, {
            method:'DELETE',
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          })
            .then(function (response) {
              console.log(response);
              return response.json();
            })
            .then(function (myJson) {
              //console.log(myJson);
              
            });
        
        getAllCountrys();
    }

    const getAllCountrys =  () => {

        fetch("http://localhost:3002/countrys", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        //console.log(myJson);
        setCountrys(myJson);
      });
        
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Currency</TableCell>
                    <TableCell>Population(million)</TableCell>
                    <TableCell>GDP(billion USD)</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {countrys.map((country) => (
                    <TableRow className={classes.row} key={country.id}>
                        <TableCell>{country.id}</TableCell>
                        <TableCell>{country.name}</TableCell>
                        <TableCell>{country.currency}</TableCell>
                        <TableCell>{country.population}</TableCell>
                        <TableCell>{country.GDP}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${country.id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteCountryData(country.id)}>Delete</Button> 
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default AllCountrys;