#!/bin/bash

if [ -e certificates/*.key ]; then

echo "SSL用の鍵は作成済みです"

else

# create key
openssl req -x509 -out certificates/localhost.crt -keyout certificates/localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config ./scripts/openssl.conf

fi
