FROM anapsix/alpine-java:8
WORKDIR /
ADD app.jar app.jar
RUN sh -c 'touch /app.jar'
EXPOSE 80
ENTRYPOINT ["java","-jar","/app.jar"]