#!/bin/bash

IMAGE_NAME=mysql:5.7

NETWORK_NAME=mysql-net

CONTAINER_NAME=mysql-server
CONTAINER_DIRECTORY=/var/lib/mysql
CONTAINER_PORT=3306

MACHINE_DIRECTORY=$PWD/DB
MACHINE_PORT=3306

PASSWORD=userpass

printf "=====================================================================\n"
printf "imagen: $IMAGE_NAME\n"
printf "nombre del contenedor: $CONTAINER_NAME\n"
printf "directorio db: $MACHINE_DIRECTORY\n"
printf "puerto expuesto: $MACHINE_PORT\n"
printf "contraseña: $PASSWORD\n"
printf "Base de datos: $DATABASE\n"
printf "=====================================================================\n"

docker run \
--rm \
--detach \
--name $CONTAINER_NAME \
--network $NETWORK_NAME \
--env MYSQL_ROOT_PASSWORD=$PASSWORD \
--volume $MACHINE_DIRECTORY:$CONTAINER_DIRECTORY \
-p $MACHINE_PORT:$CONTAINER_PORT \
$IMAGE_NAME