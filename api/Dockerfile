FROM maven:3.5-jdk-8 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:8-jdk-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
