import { Stripe } from '@stripe/stripe-js';

const stripe = new Stripe('my-publishable-key');

async function createSubscription(customerId, planId) {
  const response = await fetch('/create-subscription', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ customerId, planId }),
  });
  const data = await response.json();
  return data;
}

export { stripe, createSubscription };
