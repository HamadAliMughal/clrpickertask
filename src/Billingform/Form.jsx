import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';

const Form = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [formColor, setFormColor] = useState('#ffffff'); // Default color is white
  const [submittedColor, setSubmittedColor] = useState('');

  const handleColorChange = (e) => {
    setFormColor(e.target.value);
  };

  const handleChangeColor = () => {
    setSubmittedColor(formColor);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone Number:', phone);
    console.log('Address:', address);
  };

  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCol md="8">
          <MDBCard style={ { backgroundColor: submittedColor, padding: '20px' }}>
            <MDBCardBody>
              <h3 style={{ textAlign: 'center' }}>Billing Form</h3>
              <form onSubmit={handleFormSubmit}>
                <MDBRow>
                  <MDBCol size="6">
                    <MDBInput
                      label="First Name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </MDBCol>
                  <MDBCol size="6">
                    <MDBInput
                      label="Last Name"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <MDBInput
                  label="Phone Number"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <MDBInput
                  label="Address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <label>
                  Form Color:
                  <input
                    type="color"
                    value={formColor}
                    onChange={handleColorChange}
                    style={{ width: '100%' }}
                  />
                </label>
                <br />
                <MDBBtn
                  color="primary"
                  onClick={handleChangeColor}
                  style={{ width: '100%' }}
                >
                  Change Color
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Form;
