import React from 'react';
import { Button } from '../components';

function Settings(props) {
  const { email, paymentMethod, subscription } = props;

  return (
    <div className="settings">
      <h1>Settings</h1>
      <div className="email">
        <h2>Email</h2>
        <p>{email}</p>
        <Button label="Edit" onClick={() => console.log('Clicked!')} />
      </div>
      <div className="payment-method">
        <h2>Payment method</h2>
        <p>{paymentMethod
