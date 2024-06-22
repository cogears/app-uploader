const express = require('express');
const multer = require('multer');
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.info(req.query, file)
        const path = req.query.path || ''
        const dir = `uploads/${path}`
        fs.mkdirSync(dir, { recursive: true })
        cb(null, dir) // 确保这个文件夹已经存在
    },
    filename: function (req, file, cb) {
        cb(null, uuidv4())
    }
})

const upload = multer({ storage: storage });
const app = express();
app.use(cors())
// 单文件上传
app.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    console.info(file)
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send({ path: file.path })
});

const PORT = 9527;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});