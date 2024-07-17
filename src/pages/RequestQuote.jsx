import React, { useState } from 'react';
import { requestQuotePageData } from '../data/Data';
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
import emailjs from '@emailjs/browser'


const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const userId = process.env.REACT_APP_EMAILJS_USER_ID;


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

function RequestQuote() {
 
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
 

    const classes = useStyles();

    const messageTemplate = (formData) => {
        return `
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Phone: ${formData.phone}
        Email: ${formData.email}
        Port of Loading (POI): ${formData.POI || 'Not provided'}
        Port of Discharge (POD): ${formData.POD || 'Not provided'}
        Type of Shipment: ${formData.typeOfShipment || 'Not provided'}
        Shipment Incoterms: ${formData.shipmentIncoterms || 'Not provided'}
        Size: ${formData.size || 'Not provided'}
        Commodity: ${formData.commodity || 'Not provided'}
        Cargo Type: ${formData.cargoType || 'Not provided'}
        Delivery Requirements: ${formData.deliveryRequirements || 'Not provided'}
        Any other delivery instructions:
        ${formData.help || 'No specific delivery instructions provided'}
        
        ${formData.agree ? 'The visitor has agreed to the Victor Global Pty Ltd Privacy Policy and Terms and Conditions.' : 'The visitor has not agreed to the privacy policy and terms and conditions.'}`;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email using EmailJS
        emailjs.send(serviceId, templateId,
            {
                from_name: formData.firstName,
                to_name: 'Victor Global team',
                from_email: formData.email,
                to_email: 'victorglobalptyltd@gmail.com',
                message: messageTemplate(formData),
            }, userId)
            .then(() => {
                alert('Thank you. We will get back to you as soon as possible.')
                setFormData({})
            }, (error) => {

                console.log(error);

                alert('Something went wrong.')
            }

            )
    };


    return (
        <div className='container mt-5'>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h2 className='service-heading'>{requestQuotePageData.title}</h2>
                </div>
                <div className="col-md-6">
                    <img className="image-shadow" src={requestQuotePageData.image} alt={requestQuotePageData.title} width="100%" />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-8 my-3'>
                    <h2 className='contactus-subtitle'>{requestQuotePageData.subtitle}</h2>
                    <p className='contactus-description'>{requestQuotePageData.description}</p>
                    <form onSubmit={handleSubmit}>
                        <div className={classes.root}>
                            <Grid container spacing={3}>
                                {requestQuotePageData.inputFields.map((field, index) => (
                                    <Grid item xs={12} sm={field.type === 'textarea' || field.type === 'checkbox' ? 12 : 6} key={field.id}>
                                    {field.type === 'select' ? (
                                      <FormControl fullWidth>
                                        <InputLabel id={`${field.id}-label`}>{field.label}</InputLabel>
                                        <Select
                                          label={field.label}
                                          labelId={`${field.id}-label`}
                                          onChange={handleChange}
                                          id={field.id}
                                        name={field.id}
                                          fullWidth
                                          value={formData[field.id] || ''}
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
                                        rows={field.rows}
                                        name={field.id}
                                        value={formData[field.id] || ''}
                                        onChange={handleChange}
                                        required={field.required}
                                        fullWidth
                                      />
                                    ) : field.type === 'checkbox' ? (
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            id={field.id}
                                            checked={formData[field.id] || false}
                                            onChange={handleChange}
                                            name={field.id}
                                          />
                                        }
                                        label={field.label}
                                      />
                                    ) : (
                                      <TextField
                                        label={field.label}
                                        name={field.id}
                                        value={formData[field.id] || ''}
                                        onChange={handleChange}
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
