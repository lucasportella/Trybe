const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const multer = require('multer');
const fs = require('fs')

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000

app.use(express.static(`${__dirname}/uploads`))

const fileExists = (fileName) => {
    const files = fs.readdirSync(`${__dirname}/uploads`);
    return files.some(file => file.slice(14) === fileName);
  }

const fileFilter = (req, file, cb) => {
    const isPng = file.originalname.slice(-4)
    if (isPng !== '.png') {
        req.fileValidationError = true;
        return cb(null, false)}
        
        if(fileExists(file.originalname)) {
            req.fileDuplicated = true;
            return cb(null,false)
        }
        cb(null, true)
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads');
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage, fileFilter })

app.post('/upload', upload.single('arquivo'), (req, res) => {
    if (req.fileDuplicated) {
        return res.status(409).json({ error: { mesage: "File already exists" } })
    }
if (req.fileValidationError) {
    return res.status(403).json(  {
        "error": { "message": "Extension must be `png`" }
    })
}
        return res.status(200).json({file: req.file});

});



const defaultStorage = multer.diskStorage({
    destination: (req, file, callback) => { callback(null, 'uploads')}
})

const multiUpload = multer({storage: defaultStorage})


app.post('/multiple', multiUpload.array('files'), (req, res) => {
    return res.status(200).json(req.files)
})

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));