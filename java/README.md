docker build -t asl-java ./java
docker run -d --name java-box asl-java
docker exec -it java-box /bin/bash
javac CurrentDateApp.java
java CurrentDateApp
