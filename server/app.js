const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const pdf = require('html-pdf')
const pdfTemplate = require('./documents')
const cors = require('cors')
const multer  = require('multer')
const upload = multer({})
const imgur = require('imgur')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/create-pdf', upload.single('url') , (req,res) => {
    const encoded = req.file.buffer.toString('base64')
    let urlConvertLink = null
    const { firstName, lastName, email, bio, occupation, dateBirth, address, phone, expOrg, expPos, expDur, expDesc } = req.body
    let data = {}
    imgur.uploadBase64(encoded)
            .then( json => {
                console.log('masuk');
                
                urlConvertLink = json.data.link
                console.log(urlConvertLink);
                
                return data = {
                    firstName,
                    lastName,
                    email,
                    bio,
                    occupation,
                    dateBirth,
                    address,
                    phone,
                    expPos,
                    expDur,
                    expDesc,
                    expOrg,
                    url: urlConvertLink
                }
            })
            .then(_ => {
                pdf.create(pdfTemplate(data), {}).toFile('resume.pdf', (err) => {
                    if (err) {
                        console.log(err,'error');
                        
                        res.send(Promise.reject())
                    } 
                    res.send(Promise.resolve())
                    // res.json('berhasil')
                })
            })
            .catch(err => {
                console.error(err.message);
            })

})

app.get('/fetch-pdf', (req,res) => {
    res.sendFile(`${__dirname}/resume.pdf`)
})

app.listen(PORT, _=> console.log(`listening on port ${PORT}`))
