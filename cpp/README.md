docker build -t asl-cpp ./cpp
docker run -d --name cpp-box asl-cpp
docker exec -it cpp-box /bin/bash
ls
g++ -o main main.cpp
./main
