docker build -t asl-golang ./golang
docker run -d --name go-box asl-golang
docker exec -it go-box /bin/sh
go build main.go
./main
