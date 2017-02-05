#!/bin/sh
echo ""
cd /var/www/html
git pull origin master
sudo service nginx restart
