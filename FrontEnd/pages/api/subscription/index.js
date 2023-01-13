import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") return res.status(400);
    const { name, email, paymentMethod } = req.body;

    //crear usuario

    const customer = await stripe.customers.create({
      email,
      name,
      payment_method: paymentMethod,
      invoice_settings: { default_payment_method: paymentMethod },
    });

    //crear producto
    const product = await stripe.products.create({
        name: "Subscripcion a bookturn"
    })  
    //crear subscripcion 
    const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{
            price_data: {
                currency: "USD",
                product: product.id,
                unit_amount: "2000",
                recurring: {
                    interval: "month"
                }
            }
        }],
        payment_settings: {
            payment_method_types: ["card"],
            save_default_payment_method: "on_subscription"
        },
        expand: ["latest_invoice.payment_intent"]
    })
    //devolver al cliente
    res.json({
        message: "Subscripcion exitosa",
        clientSecret: subscription.latest_invoice.payment_intent.client_secret,
        subscriptionId: subscription.id
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
}
