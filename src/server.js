import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:5173" })); //Cambiar a 5174 si la otra no funciona

// Ruta para enviar correos
app.post("/send", async (req, res) => {
    const { email, name, message } = req.body;

    if (!email || !name || !message) {
        return res.status(400).send({ error: "Todos los campos son obligatorios." });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD, // Contraseña de aplicación
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL,
            subject: `Nuevo mensaje de ${name}`,
            text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).send({ success: "Mensaje enviado con éxito." });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error al enviar el mensaje. Inténtalo nuevamente." });
    }
});

app.post("/orders", async (req, res) => {
    const { customer, items, total } = req.body;

    if (!customer || !items || !total) {
        return res.status(400).send({ error: "Información de orden incompleta." });
    }

    try {
        // ENVIAR MAIL CONFIRMACION-CAMBIAR POR WSP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        const customerMailOptions = {
            from: process.env.EMAIL,
            to: customer.email,
            subject: "Confirmación de Orden - Pizzeria de las tortugsa ninja",
            html: `
                <h2>¡Gracias por tu orden!</h2>
                <p>Hola ${customer.nombre},</p>
                <p>Hemos recibido tu orden correctamente.</p>
                <h3>Detalles de la orden:</h3>
                <p>Total: $${total.toFixed(2)}</p>
                <p>Dirección de entrega: ${customer.direccion}, ${customer.ciudad}</p>
                <p>Te contactaremos pronto para coordinar la entrega.</p>
            `,
        };

        // Email to business
        const pizzeriaMailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "Nueva Orden Recibida",
            html: `
                <h2>Nueva Orden</h2>
                <h3>Cliente:</h3>
                <p>Nombre: ${customer.nombre} ${customer.apellido}</p>
                <p>Email: ${customer.email}</p>
                <p>Teléfono: ${customer.telefono}</p>
                <p>Dirección: ${customer.direccion}, ${customer.ciudad}</p>
                <h3>Orden:</h3>
                ${items.map(item => `
                    <div>
                        <p>Pizza Custom x${item.cantidad}</p>
                        ${item.cuartos.map((cuarto, idx) => 
                            cuarto.saborNombre ? 
                            `<p>Cuarto ${idx + 1}: ${cuarto.saborNombre}</p>` : 
                            ''
                        ).join('')}
                        <p>Subtotal: $${(item.precioTotal * item.cantidad).toFixed(2)}</p>
                    </div>
                `).join('')}
                <h3>Total: $${total.toFixed(2)}</h3>
            `,
        };

        await Promise.all([
            transporter.sendMail(customerMailOptions),
            transporter.sendMail(pizzeriaMailOptions)
        ]);

        res.status(200).send({ 
            success: true, 
            message: "Orden procesada con éxito" 
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ 
            success: false, 
            error: "Error al procesar la orden. Por favor intente nuevamente." 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
