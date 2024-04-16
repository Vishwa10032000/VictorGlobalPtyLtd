import React from 'react';
import { contactUsPageData } from '../data/Data';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {  Send } from '@mui/icons-material';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function ContactUs() {

  const classes = useStyles();

  // const handleChange = () =>{
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth"
  // });
  // }
  return (
    <div className='container'>
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className='service-heading'>{contactUsPageData.title}</h2>
        </div>
        <div className="col-md-6">
          <img src={contactUsPageData.image} alt={contactUsPageData.title} width="100%" />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8 my-3 '>
          <h2 className='contactus-subtitle'>{contactUsPageData.subtitle}</h2>
          <p className='contactus-description'>{contactUsPageData.description}</p>
          <form>
            <div className={classes.root}>
              <Grid container spacing={3}>
                {contactUsPageData.inputFields.map((field) => (
                  <Grid item xs={12} sm={field.type === 'textarea' || field.type === 'checkbox' ? 12 : 6} key={field.id}>

                    {field.type === 'textarea' ? (
                      <TextField
                        label={field.label}
                        multiline
                        rows={field.rows}
                        required={field.required}
                        fullWidth
                      />
                    ) : field.type === 'checkbox' ? (
                      <FormControlLabel
                      className='mb-2'
                        control={<Checkbox id={field.id} />}
                        label={field.label}
                      />
                    ) : (
                      <TextField
                        label={field.label}
                        required={field.required}
                        fullWidth
                      />
                    )}
                  </Grid>
                ))}
              </Grid>
            </div>

            <button type="submit" className="primary-btn">  Send <Send /></button>
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
