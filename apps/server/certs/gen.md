1. Creating Keys and Cerificate (linux terminal) -
    
    `openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365`

2. Get Decrypted Keys
    
    `openssl rsa -in keytmp.pem -out key.pem`
