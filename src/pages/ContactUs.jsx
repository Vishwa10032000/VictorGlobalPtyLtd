import React, { useState } from 'react';
import { contactUsPageData } from '../data/Data';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {  Send } from '@mui/icons-material';
import emailjs from '@emailjs/browser'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const userId = process.env.REACT_APP_EMAILJS_USER_ID;


function ContactUs() {

  const classes = useStyles();

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const messageTemplate = (formData) => {
    return `
    First Name: ${formData.firstName}
    Last Name: ${formData.lastName}
    Company Name: ${formData.companyName || 'Not provided'}
    Role/Position in the Company: ${formData.role || 'Not provided'}
    Phone: ${formData.phone}
    Email: ${formData.email}
    How can we help?
    ${formData.help || 'No specific request provided'}
  
    ${
      formData.agree
        ? 'The visitor has agreed to the Victor Global Pty Ltd Privacy Policy and Terms and Conditions.'
        : 'The visitor has not agreed to the privacy policy and terms and conditions.'
    }`;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, 
      {
        from_name:formData.firstName,
        to_name: 'Victor Global team',
        from_email:formData.email,
        to_email:'victorglobalptyltd@gmail.com',
        message: messageTemplate(formData),
      }, userId)
      .then(()=>{
        alert('Thank you. We will get back to you as soon as possible.')
        setFormData({})
      },(error) =>{
  
        console.log(error);
  
        alert('Something went wrong.')
      }
      
      )
  };

  // const handleChange = () =>{
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  // });
  // }

  return (
    <div className='container mt-5'>
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className='service-heading'>{contactUsPageData.title}</h2>
        </div>
        <div className="col-md-6">
          <img className="image-shadow" src={contactUsPageData.image} alt={contactUsPageData.title} width="100%" />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8 my-3 '>
          <h2 className='contactus-subtitle'>{contactUsPageData.subtitle}</h2>
          <p className='contactus-description'>{contactUsPageData.description}</p>
          <form onSubmit={handleSubmit}>
        <div className={classes.root}>
          <Grid container spacing={3}>
            {contactUsPageData.inputFields.map((field) => (
              <Grid item xs={12} sm={field.type === 'textarea' || field.type === 'checkbox' ? 12 : 6} key={field.id}>
                {field.type === 'textarea' ? (
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
        <div className='col-md-4'>
          <div className='row'>
          {/* <div className='col-md-12 my-3'>
              <h2 className='contactus-subtitle'>{contactUsPageData.quote.title}</h2>
              <p className='contactus-description' >{contactUsPageData.quote.description}</p>
              <Link onClick={handleChange} className='text-decoration-none' to="/requestquote"><button className='primary-btn d-flex align-items-center'>Request Quote <ArrowOutward/></button></Link>
            </div> */}
            <div className='col-md-12 my-3'>
              <h2 className='contactus-subtitle'>{contactUsPageData.address.title}</h2>
              {contactUsPageData.address.items.map((item, index) => (
                <>
                  <div className='contactus-description d-flex gap-2' key={index}>
                  <item.icon /> 
                    <p >{item.value}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
