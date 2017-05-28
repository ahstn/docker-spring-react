FROM openjdk:8-jre-alpine

WORKDIR /app
COPY dsr_api.jar /app

EXPOSE 8080
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "dsr_api.jar"]
