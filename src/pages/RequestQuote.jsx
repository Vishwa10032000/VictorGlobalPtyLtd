import React, { useState } from 'react';
import  { requestQuotePageData }  from '../data/Data';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Send } from '@mui/icons-material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

function RequestQuote() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        POI: '',
        POD: '',
        typeOfShipment: '',
        shipmentIncoterms: '',
        size: '',
        commodity: '',
        cargoType: '',
        deliveryRequirements: '',
        help: '',
        agree: false
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        setFormData({ ...formData, [id]: checked });
    };

    const classes = useStyles();

    return (
        <div className='container'>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h2 className='service-heading'>{requestQuotePageData.title}</h2>
                </div>
                <div className="col-md-6">
                    <img src={requestQuotePageData.image} alt={requestQuotePageData.title} width="100%" />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-8 my-3'>
                    <h2 className='contactus-subtitle'>{requestQuotePageData.subtitle}</h2>
                    <p className='contactus-description'>{requestQuotePageData.description}</p>
                    <form>
                        <div className={classes.root}>
                            <Grid container spacing={3}>
                                {requestQuotePageData.inputFields.map((field, index) => (
                                    <Grid item xs={12} sm={field.type === 'textarea' || field.type === 'checkbox' ? 12 : 6} key={field.id}>
                                        {field.type === 'select' ? (
                                            <FormControl fullWidth>
                                                <InputLabel id={field.id}>{field.label}</InputLabel>
                                                <Select
                                                    label={field.label}
                                                    labelId={field.id}
                                                    onChange={handleChange}
                                                    id={field.id}
                                                    fullWidth
                                                >
                                                    {field.options.map((option, optionIndex) => (
                                                        <MenuItem key={optionIndex} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        ) : field.type === 'textarea' ? (
                                            <TextField
                                                label={field.label}
                                                multiline
                                                onChange={handleChange}
                                                rows={field.rows}
                                                required={field.required}
                                                fullWidth
                                            />
                                        ) : field.type === 'checkbox' ? (
                                            <FormControlLabel
                                                className='mb-2'
                                                control={<Checkbox id={field.id} onChange={handleCheckboxChange} />}
                                                label={field.label}
                                            />
                                        ) : (
                                            <TextField
                                                onChange={handleChange}
                                                label={field.label}
                                                required={field.required}
                                                fullWidth
                                            />
                                        )}
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                        <button type="submit" className="primary-btn">Send <Send /></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RequestQuote;
