"use client";
import { IEvent } from "@/lib/database/models/event.model";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { loadStripe } from "@stripe/stripe-js";
import { checkoutOrder } from "@/lib/actions/order.actions";
import { CheckoutOrderParams } from "@/types";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
function Checkout({ event }: { event: IEvent }) {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  const onCheckout = async () => {
    const order: CheckoutOrderParams = {
      eventTitle: event.title,
      eventId: event._id, // Add the missing eventId property
      price: event.price?.toString() ?? "",
      isFree: event.isFree ?? false,
    };
    await checkoutOrder(order);
  };
  return (
    <form action={onCheckout} method="post">
      <Button
        className="button rounded-full "
        size="lg"
        type="submit"
        role="link"
      >
        {event.isFree ? "Get Ticket" : "Buy Ticket"}
      </Button>
    </form>
  );
}

export default Checkout;
