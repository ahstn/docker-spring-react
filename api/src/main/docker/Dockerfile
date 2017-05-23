FROM openjdk:8-jre-alpine

COPY *.jar /

EXPOSE 5555
ENTRYPOINT [ "sh", "-c", "java -Djava.security.egd=file:/dev/./urandom -jar /api.jar" ]