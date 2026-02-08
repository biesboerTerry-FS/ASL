FROM rust:1.75
WORKDIR /app

RUN cargo new --bin asl-app
WORKDIR /app/asl-app
RUN cargo add chrono
COPY main.rs ./src/main.rs

CMD [ "sleep", "infinity" ]