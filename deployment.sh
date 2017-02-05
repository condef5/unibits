#!/bin/sh  
cd /var/www/html/
pwd
git pull origin master
sudo service nginx restart
