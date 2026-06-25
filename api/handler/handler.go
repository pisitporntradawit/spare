package handler

import (
	"encoding/json"
	"net/http"
	"zendola/api/middle"

)

// Response struct สำหรับส่งข้อมูลกลับเป็น JSON
type Response struct {
	Message string `json:"message"`
	Status  int    `json:"status"`
}

// Handler คือฟังก์ชันหลักที่ Vercel จะเรียกใช้
func Handler(w http.ResponseWriter, r *http.Request) {

	if middle.EnableCORS(w, r) {
		return
	}
	// 1. กำหนด Content-Type ให้เป็น JSON
	w.Header().Set("Content-Type", "application/json")

	// 2. เช็ค Method (เช่น ถ้าเป็น GET ก็ทำอย่างนึง, POST ก็ทำอีกอย่าง)
	if r.Method == http.MethodGet {
		res := Response{
			Message: "สวัสดี! นี่คือการตอบกลับจาก net/http บน Vercel",
			Status:  200,
		}
		
		// 3. แปลง struct เป็น JSON แล้วส่งกลับไป
		json.NewEncoder(w).Encode(res)
		return
	}

	// กรณี Method อื่นๆ ที่ไม่ได้รองรับ
	http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
}

