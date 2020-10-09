#include <Arduino.h>
#include <WiFi.h>

#include <MPU9250_asukiaaa.h>
#include <MQTTClient.h>

#define WIFI_SSID "pruebaTBA"
#define WIFI_PASSWORD "pruebaTBA"

#define SDA_PIN 21
#define SCL_PIN 22

MQTTClient client;

#define TERMINAL 1
#define MQTT_ 1

MPU9250_asukiaaa mySensor;

float aX, aY, aZ, aSqrt;
float gX, gY, gZ;
float mDirection;
float mX, mY, mZ;
int T;

WiFiClient wifiClient;

uint64_t sendEntry = 0;
uint32_t times = 1;
uint32_t ack = 0;

String path = "/Embebidos/prueba";
String jsonStr = "";

void inline handler (void);


void setup() {
  Wire.begin(SDA_PIN, SCL_PIN); /* join i2c bus with SDA=D1 and SCL=D2 of NodeMCU */

  mySensor.setWire(&Wire);
  mySensor.beginAccel();
  mySensor.beginGyro();
  mySensor.beginMag();

  initSerial();
  //initWiFi();

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  delay(2 * 1000);

  Serial.println("MQTT > Conectando a broker");
  //client.begin("broker.shiftr.io", wifiClient);
  client.begin("192.168.0.239", wifiClient);
  connect();

  randomSeed(analogRead(0));

  delay(10);
}

void connect() {
  while (!client.connect("GICSAFE", "fb033abd", "e2ebc570ab73e0b5")) {
    Serial.print(".");
  }

  Serial.println("MQTT > Conectado!");
  client.subscribe("CDP");
}

void MQTT_send(void) {

  uint32_t id;

  id = random(1, 6);

  String ubicacion[] = {"Cuarto","Cocina","Living","Comedor","Balcon","Hall"};
  
  client.publish("DispID", String(id));

  client.publish("Ubicacion", String(ubicacion[id]));
  client.publish("Nombre", "ESP_"+String(id));
  
  client.publish("Temperatura", String(T));


  float m_abs = sqrt(mX*mX+mY*mY+mZ*mZ);
  float g_abs = sqrt(gX*gX+gY*gY+gZ*gZ);
  float a_abs = sqrt(aX*aX+aY*aY+aZ*aZ);
  
  client.publish("Magnetometro/m_x", String(mX));
  client.publish("Magnetometro/m_y", String(mY));
  client.publish("Magnetometro/m_z", String(mZ));
  
  client.publish("Magnetometro", String(m_abs));
  
  client.publish("Giroscopio/g_x", String(gX));
  client.publish("Giroscopio/g_y", String(gY));
  client.publish("Giroscopio/g_z", String(gZ));

  client.publish("Giroscopio", String(g_abs));
  
  client.publish("Aceleracion/a_x", String(aX));
  client.publish("Aceleracion/a_y", String(aY));
  client.publish("Aceleracion/a_z", String(aZ));

  client.publish("Aceleracion", String(a_abs));
  
  Serial.print("MQTT > Publicado!");
}

void imprimir_aceleracion(void) {
  Serial.println("a_x: " + String(aX));
  Serial.println("a_y: " + String(aY));
  Serial.println("a_z: " + String(aZ));
  Serial.println();
}

void crear_dato(void) {

  if (mySensor.accelUpdate() == 0) {
    aX = mySensor.accelX();
    aY = mySensor.accelY();
    aZ = mySensor.accelZ();
    aSqrt = mySensor.accelSqrt();
  }
  if (mySensor.gyroUpdate() == 0) {
    gX = mySensor.gyroX();
    gY = mySensor.gyroY();
    gZ = mySensor.gyroZ();
  }
  if (mySensor.magUpdate() == 0) {
    mX = mySensor.magX();
    mY = mySensor.magY();
    mZ = mySensor.magZ();
    mDirection = mySensor.magHorizDirection();
  }

  T = random(25, 30);

  Serial.printf("%.2f|%.2f|%.2f|%.2f|%.2f|%.2f|%.2f|%.2f|%.2f|", gX, gY, gZ, aX, aY, aZ, mX, mY);
  Serial.println(T);
}

void leer_aceleracion(void) {

  if (mySensor.accelUpdate() == 0) {
    aX = mySensor.accelX();
    aY = mySensor.accelY();
    aZ = mySensor.accelZ();
    aSqrt = mySensor.accelSqrt();
  } else {
    Serial.println("No se pudo leer el acelerometro");
  }
}

void imprimir_giroscopio(void) {
  Serial.println("g_x: " + String(gX));
  Serial.println("g_y: " + String(gY));
  Serial.println("g_z: " + String(gZ));
  Serial.println();
}

void leer_giroscopio(void) {

  if (mySensor.gyroUpdate() == 0) {
    gX = mySensor.gyroX();
    gY = mySensor.gyroY();
    gZ = mySensor.gyroZ();
  } else {
    Serial.println("No se pudo leer el giroscopio");
  }
}

void imprimir_magnetometro(void) {
  Serial.println("m_x: " + String(mX));
  Serial.println("m_y: " + String(mY));
  Serial.println("m_z: " + String(mZ));
  Serial.println("Direccion horizontal: " + String(mDirection));
  Serial.println();
}

void leer_magnetometro(void) {

  if (mySensor.magUpdate() == 0) {
    mX = mySensor.magX();
    mY = mySensor.magY();
    mZ = mySensor.magZ();
    mDirection = mySensor.magHorizDirection();
  } else {
    Serial.println("No se pudo leer el magnetometro");
  }
}

void loop() {

  client.loop();
  if (!client.connected()) {
    connect();
  };


  if (millis() - sendEntry > 60 * 1000) {
    sendEntry = millis();
  
    leer_aceleracion();
    leer_giroscopio();
    leer_magnetometro();

    crear_dato();
    
    imprimir_aceleracion();
    imprimir_giroscopio();
    imprimir_magnetometro();

    MQTT_send();




  }


}


void initSerial() {
  Serial.begin(115200);
}

uint32_t getUptimeSecs() {
  static uint32_t uptime = 0;
  static uint32_t previousMillis = 0;
  uint32_t now = millis();

  uptime += (now - previousMillis) / 1000UL;
  previousMillis = now;
  return uptime;
}

String prettyBytes(uint32_t bytes) {

  const char *suffixes[7] = {"B", "KB", "MB", "GB", "TB", "PB", "EB"};
  uint8_t s = 0;
  double count = bytes;

  while (count >= 1024 && s < 7) {
    s++;
    count /= 1024;
  }
  if (count - floor(count) == 0.0) {
    return String((int) count) + suffixes[s];
  } else {
    return String(round(count * 10.0) / 10.0, 1) + suffixes[s];
  };
}
