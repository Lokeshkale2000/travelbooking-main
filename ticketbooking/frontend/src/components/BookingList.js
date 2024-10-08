import React from 'react';
import { useQuery, gql } from '@apollo/client';
import './styles/BookingList.css';

const GET_BOOKINGS = gql`
  query GetBookings {
    bookings {
      id
      title
      firstName
      lastName
      birthDate
     
      email
      phone
      departure
      destination
      departureDate
      departureTime
      classOfService
  
      preferredAirlines
  
    }
  }
`;

function BookingList() {
  const { loading, error, data } = useQuery(GET_BOOKINGS);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  return (
    <div className="booking-list">
      <h2>View Bookings</h2>
      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Birth Date</th>
             
              <th>Email</th>
              <th>Phone</th>
              <th>Departure</th>
              <th>Destination</th>
              <th>Departure Date</th>
              <th>Departure Time</th>
              <th>Class</th>
              <th>Airlines</th>
            
            </tr>
          </thead>
          <tbody>
            {data.bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.title}</td>
                <td>{booking.firstName}</td>
                <td>{booking.lastName}</td>
                <td>{booking.birthDate}</td>
                <td>{booking.email}</td>
                <td>{booking.phone}</td>
                <td>{booking.departure}</td>
                <td>{booking.destination}</td>
                <td>{booking.departureDate}</td>
                <td>{booking.departureTime}</td>
                <td>{booking.classOfService}</td>
                <td>{booking.preferredAirlines}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingList;
