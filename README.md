# Avalon Website

## Inertia SSR Systemd Service
```shell
sanskar@Dickson-new-server:~$ cat /etc/systemd/system/avalon-ssr.service
[Unit]
Description=Inertia SSR for Avalon
After=network.target

[Service]
User=www-data
ExecStart=/usr/bin/php /home/sanskar/avalon/artisan inertia:start-ssr
Environment=PATH=/home/sanskar/.nvm/versions/node/v20.15.1/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
Environment=NODE_VERSION=20.15.1
WorkingDirectory=/home/sanskar/avalon

RestartSec=3
Restart=on-failure
Type=simple

[Install]
WantedBy=multi-user.target
```