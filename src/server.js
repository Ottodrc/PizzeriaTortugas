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
app.use(cors({ origin: "http://localhost:5174" }));

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

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
