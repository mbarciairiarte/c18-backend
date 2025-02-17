import app from "./app.js";
import { sequelize } from "./database/database.js";

import empleosRoutes from "./routes/empleosRoutes.js";

import "./models/RegistroEntrevistas.js";
import "./models/Usuarios.js";
import "./models/Notas.js";
import "./models/Metricas.js";
import "./models/Empleos.js";
import "./models/MetasSemanalesAplicaciones.js";

const PORT = process.env.PORT || 3000;

// Usa las rutas en la app
app.use(empleosRoutes);

(async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database connected");
    app.listen(PORT, () =>
      console.log(`Server running on port http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log("No se ha podido conectar al servidor", error);
  }
})();

app.get("/", (req, res) => {
  res.send("(*_*)");
});

// pg_ctl start -D "C:\Program Files\PostgreSQL\16\data"
