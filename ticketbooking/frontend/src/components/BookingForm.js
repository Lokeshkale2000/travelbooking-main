import React, { useState } from "react";
import "./styles/BookingForm.css"; // Ensure this path is correct
import { gql, useMutation } from "@apollo/client";
import img1 from '../components/image/img1.jpg'


const ADD_BOOKING = gql`
  mutation AddBooking(
    $title: String!
    $firstName: String!
    $lastName: String!
    $birthDate: String
    $email: String!
    $phone: String!
    $departure: String!
    $destination: String!
    $departureDate: String!
    $departureTime: String!
    $classOfService: String!
    $preferredAirlines: String
  ) {
    addBooking(
      title: $title
      firstName: $firstName
      lastName: $lastName
      birthDate: $birthDate
      email: $email
      phone: $phone
      departure: $departure
      destination: $destination
      departureDate: $departureDate
      departureTime: $departureTime
      classOfService: $classOfService
      preferredAirlines: $preferredAirlines
    ) {
      id
    }
  }
`;

function BookingForm() {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    phone: "",
    departure: "",
    destination: "",
    departureDate: "",
    departureTime: "",
    classOfService: "economy",
    preferredAirlines: "",
  });

  const [addBooking, { loading, error }] = useMutation(ADD_BOOKING, {
    onCompleted: () => {
      alert("Booking added successfully");
      resetForm();
    },
    onError: (error) => {
      console.error("Error adding booking:", error);
      alert("There was an error adding your booking. Please try again.");
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking({ variables: formData });
  };

  const resetForm = () => {
    setFormData({
      title: "",
      firstName: "",
      lastName: "",
      birthDate: "",
      email: "",
      phone: "",
      departure: "",
      destination: "",
      departureDate: "",
      departureTime: "",
      classOfService: "economy",
      preferredAirlines: "",
    });
  };

  return (
    <div className="booking-card">
    <img src={img1} alt="Travel" className="booking-image" style={{marginTop:"80px"}}/>

      <form className="booking-form" onSubmit={handleSubmit}>
        <h2 style={{marginLeft:'-200px',fontSize:"28px"}}>Travel Booking Form</h2>
        <div className="form-group">
          <label style={{marginTop:'-10px'}}>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Birth Date</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Departure place</label>
          <input
            type="text"
            name="departure"
            value={formData.departure}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Destination place</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Departure Date</label>
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Departure Time</label>
          <input
            type="time"
            name="departureTime"
            value={formData.departureTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Class of Service</label>
          <select
            name="classOfService"
            value={formData.classOfService}
            onChange={handleChange}
            required
          >
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first class">First Class</option>
          </select>
        </div>
        <div className="form-group">
          <label>Preferred Airlines</label>
          <input
            type="text"
            name="preferredAirlines"
            value={formData.preferredAirlines}
            onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Booking"}
        </button>
        {error && <p className="error-message">Error: {error.message}</p>}
      </form>
    </div>
  );
}

export default BookingForm;
