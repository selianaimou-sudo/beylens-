
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const amount = Math.round(Number(body.amount) * 100);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "eur",

            product_data: {
              name: `Beylens Fee - ${body.title}`,

              images: body.image ? [body.image] : [],

              description:
                "Secure access to official seller with Beylens.",
            },

            unit_amount: amount,
          },

          quantity: 1,
        },
      ],

      success_url: `${process.env.NEXT_PUBLIC_URL}/success?url=${encodeURIComponent(
        body.sellerUrl
      )}`,

      cancel_url: `${process.env.NEXT_PUBLIC_URL}`,
    });

    return NextResponse.json({
      id: session.id,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Stripe Checkout Error" },
      { status: 500 }
    );
  }
}
