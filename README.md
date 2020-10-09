# Desarrollo de aplicaciones para IoT

- [x] ESP32
- [x] Broker mosquito
- [x] Node-red
- [x] Base de datos SQlite
- [ ] Back-end Nodejs
- [ ] Front-end Ionic

# ESP32

Se utilizo una version propia de código arduino en el cual se lee un MPU9250. La biblioteca permite leer las 3 componentes del campo magnético, las 3 componentes del giroscopio y las 3 componentes del acelerometro. Lamentablemente la temperatura no esta implementada, aunque el MPU9250 lo soporta, para una versión preliminar se simula la temperatura como un rand entre 25 y 30.

![ESP32](esp.PNG)

Se envía el dato por MQTT al puerto 192.168.0.239, el puerto de la Raspberry Pi donde se tiene el broker y la base de datos.

# Broker

# Node-red

## Conexión de bloques en Node-red

Se tomaron los datos de 2 topicos: temperatura y la componente y del campo magnético provistos por el MPU9250. Ambos datos van a sus respectivos gauges y son combinados en un vector que es ingresado a la función insert que realiza un insert a la base de datos con la hora actual. Luego se dispara un trigger de 1 segundo para realizar un select a la base de datos para visualizarla en una tabla.

![node_red](iot_2.PNG)

En node-red:1880/ui se puede ver una versión preliminar donde cada minuto aparece un nuevo dato que se agrega a la base de datos y se visualiza en los gauges.

![node_red_ui](iot_1.PNG)


# Base de datos SQlite

![sqlite](sqlite.PNG)

Se crearon dos tablas, una para listar los dispositivos y otra para sus mediciones.

## Dispositivos

| dispositivoID | nombre | ubicacion |
| :-: | :-: | :-: |
| 1 | 'ESP32_1'  | 'Habitacion' |
| 2 | 'ESP32_2'  | 'Living' |
| 3 | 'ESP32_3'  | 'Balcon' |

| ID | dispID | tiempo | temperatura | mag_x | mag_y | mag_z |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 1 | 1 | 11:14:12 | 25 | 60 | 30 | 20 |
| 2 | 1 | 11:14:14 | 27 | 64 | 34 | 23 |
| 3 | 2 | 11:14:54 | 24 | 57 | 50 | 18 |
| 4 | 1 | 11:15:04 | 23 | 50 | 32 | 21 |

# Back-end NodeJS

# Front-end Ionic
