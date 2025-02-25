import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Nueva ruta para la raíz "/"
app.get("/", (req, res) => {
  res.send("🚀 Servidor funcionando correctamente!");
});


// Endpoint para obtener todos los sabores de pizza
app.get("/sabores", async (req, res) => {
  try {
    const sabores = await prisma.sabor.findMany();
    res.json(sabores);
  } catch (error) {
    console.error("Error al obtener los sabores:", error);
    res.status(500).json({ error: "Error al obtener los sabores" });
  }
});


// Puerto del servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
