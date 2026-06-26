package main

import (
	"fmt"
	"net/http"
	"zendola/api/handler" // สมมติชื่อ module ของคุณคือ api
)

func main() {
	http.HandleFunc("/api/hello", handler.Handler)
	fmt.Println("Server running on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
