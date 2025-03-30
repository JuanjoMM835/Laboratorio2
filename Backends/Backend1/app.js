const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ message: "Respuesta desde Backend 1", port: PORT, timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`Backend 1 corriendo en http://localhost:${PORT}`);
});
