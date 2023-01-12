const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

//Create a server
http.createServer((req, res) => {
    if (req.url === '/upload' && req.method.toLowerCase() === 'post') {

        // parse a file upload
        const form = new Formidable();

        form.parse(req, (err, fields, files) => {

            // Find Cloudinary documentation using the link below
            // https://cloudinary.com/documentation/upload_images
            cloudinary.uploader.upload(files.upload.path, result => {

                // This will return the output after the code is exercuted both in the terminal and web browser
                // When successful, the output will consist of the metadata of the uploaded file one after the other. These include the name, type, size and many more.
                console.log(result)
                if (result.public_id) {

                    // The results in the web browser will be returned inform of plain text formart. We shall use the util that we required at the top of this code to do this.
                    res.writeHead(200, { 'content-type': 'text/plain' });
                    res.write('received uploads:\n\n');
                    res.end(util.inspect({ fields: fields, files: files }));
                }
            });
        });
        return;
    }
})