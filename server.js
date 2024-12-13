const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Import cors
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors()); // Gunakan middleware CORS

// MySQL Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Ganti sesuai password database Anda
    database: 'praktikum_9'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Routes

// Get all students
app.get('/mahasiswa', (req, res) => {
    const sql = 'SELECT * FROM mahasiswa';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

// Get student by NIM
app.get('/mahasiswa/:nim', (req, res) => {
    const { nim } = req.params;
    const sql = 'SELECT * FROM mahasiswa WHERE nim = ?';
    db.query(sql, [nim], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.length === 0) {
            return res.status(404).send('Mahasiswa not found');
        }
        res.json(result[0]);
    });
});

// Create a new student
app.post('/mahasiswa', (req, res) => {
    const { nim, nama, prodi } = req.body;
    const sql = 'INSERT INTO mahasiswa (nim, nama, prodi) VALUES (?, ?, ?)';
    db.query(sql, [nim, nama, prodi], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json({ id: result.insertId, nim, nama, prodi });
    });
});

// Update a student
app.put('/mahasiswa/:nim', (req, res) => {
    const { nim } = req.params;
    const { nama, prodi } = req.body;
    const sql = 'UPDATE mahasiswa SET nama = ?, prodi = ? WHERE nim = ?';
    db.query(sql, [nama, prodi, nim], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Mahasiswa not found');
        }
        res.json({ nim, nama, prodi });
    });
});

// Delete a student
app.delete('/mahasiswa/:nim', (req, res) => {
    const { nim } = req.params;
    const sql = 'DELETE FROM mahasiswa WHERE nim = ?';
    db.query(sql, [nim], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.affectedRows === 0) {
            return res.status(404).send('Mahasiswa not found');
        }
        res.send('Mahasiswa deleted successfully');
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
