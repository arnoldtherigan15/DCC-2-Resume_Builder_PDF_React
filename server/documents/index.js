module.exports = ({ firstName, lastName, email, bio, occupation, url , dateBirth, address, phone, expOrg, expPos, expDur, expDesc}) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"> 
        <style>
            * {
                margin: 0;
                padding: 0;
            }
            body {
                font-family: 'Roboto', sans-serif;
                overflow-x: hidden;
            }
    
            .left img {
                width: 100pt;
                object-fit: contain;
            }
    
            .left {
                width: 150pt;
                text-align: center;
            }
    
            .right {
                width: 600pt;
            }
            
    
            .card-detail-body {
                display: flex;
                display:-webkit-box;
            }
            .card-detail-left {
                width:50pt;
                margin: 10px 0;
            }
            .card-detail-right {
                width:200pt;
                margin: 10px 0;
            }
        </style>
        <title>${firstName} Resume</title>
    </head>
    <body>
        <div class="container" style="display:-webkit-box;display: flex;padding: 30px;-webkit-box-pack: center;justify-content: center;width: 100%;height: 300px;align-items: center;">
            <div class="left">
                <img src="${url}" alt="avatar">
            </div>
            <div class="right">
                <div class="card-title">
                    <h1><span style="font-weight: lighter;">I'm </span> ${firstName} ${lastName}</h1>
                    <h3 style="margin:10px 0;">${occupation}</h3>
                </div>
                <div style="width: 900pt; background-color: gray; height: 10pt;"></div>
                <div class="card-detail">
                    <div class="card-detail-body">
                        <div class="card-detail-left"><p>Birth Date</p></div>
                        <div class="card-detail-right"><p>${dateBirth}</p></div>
                    </div>
                    
                    <div class="card-detail-body">
                        <div class="card-detail-left"><p>Address</p></div>
                        <div class="card-detail-right"><p>${address}</p></div>
                    </div>
                    <br>
                    <div class="card-detail-body">
                        <div class="card-detail-left"><p>Email</p></div>
                        <div class="card-detail-right"><p>${email}</p></div>
                    </div>
                    <br>
                    <div class="card-detail-body">
                        <div class="card-detail-left"><p>Phone</p></div>
                        <div class="card-detail-right"><p>${phone}</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 90%; background-color: #07cb79; padding:10px 40px; margin:auto; color:white;">
            <h1 style="font-weight: bold;">About Me</h1>
        </div>
        <div style="width: 90%; padding:10px 40px; margin:auto;">
            <p>${bio}</p>
        </div>
        <!-- experience -->
        <div style="width: 90%; background-color: #07cb79; padding:10px 40px; margin:auto; color:white;">
            <h1 style="font-weight: bold;">Experience</h1>
        </div>
        <div style="width: 90%; padding:10px 40px; margin:auto;display:-webkit-box; display: flex; align-items: center;">
            <div style="margin-right:20px">
                ${expDur}
            </div>
            <div>
                <h3>${expOrg}</h3>
                <h5>${expPos}</h5>
                <p>${expDesc}</p>
            </div>
        </div>
    </body>
    </html>
    `
}