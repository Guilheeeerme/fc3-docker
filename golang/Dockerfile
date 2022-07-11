FROM golang:1.18 AS build

WORKDIR /usr/src/app

COPY go.mod ./
COPY main.go ./

RUN go build -o /go/bin/hello

FROM scratch

COPY --from=build /go/bin/hello /go/bin/hello

ENTRYPOINT [ "/go/bin/hello" ]