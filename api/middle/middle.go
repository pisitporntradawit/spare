package middle

import (
	"net/http"
)

func EnableCORS(w http.ResponseWriter, r *http.Request) bool {
    w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
    w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

    if r.Method == "OPTIONS" {
        w.WriteHeader(http.StatusOK)
        return true // บอกให้ฟังก์ชันหลักไม่ต้องทำงานต่อ
    }
    return false // บอกให้ฟังก์ชันหลักทำงานต่อได้
}
