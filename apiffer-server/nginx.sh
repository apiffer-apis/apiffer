#!/bin/bash
# if [ "$1" != "" ]; then
    echo "Running Nginx Config"
    sudo mv default.conf /etc/nginx/sites-available
    cd /etc/nginx/sites-enabled/
    sudo rm -rf default.conf
    cd /etc/nginx/sites-available/
    sudo ln -s /etc/nginx/sites-available/default.conf /etc/nginx/sites-enabled/default.conf
    sudo nginx -t
    sudo systemctl restart nginx
    echo "Nginx Config Complete"
# else
    # echo "No Nginx Config Specified as Argument"
# fi
exit 0
