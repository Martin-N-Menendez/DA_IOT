#!/bin/bash

IMAGE_NAME=phpmyadmin/phpmyadmin

NETWORK_NAME=mysql-net

CONTAINER_NAME=phpadmin
CONTAINER_PORT=80

MACHINE_PORT=80

MYSQL_HOST=mysql-server

printf "=====================================================================\n"
printf "imagen: $IMAGE_NAME\n"
printf "nombre del contenedor: $CONTAINER_NAME\n"
printf "puerto expuesto: $MACHINE_PORT\n"
printf "=====================================================================\n"

docker run \
--rm \
--detach \
--name $CONTAINER_NAME \
--network $NETWORK_NAME \
--env PMA_HOST=$MYSQL_HOST \
--publish $MACHINE_PORT:$CONTAINER_PORT \
$IMAGE_NAME