'use client'; // เพราะเราจะดึงข้อมูลที่ฝั่ง Client

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // สมมติว่า Go ของคุณรันอยู่ที่ http://localhost:8080
    fetch('http:///https://go-backend-vercel.vercel.app/ping')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">ข้อมูลจาก Go Backend:</h1>
      <p className="mt-4 text-blue-600">{message || 'กำลังโหลดข้อมูล...'}</p>
    </main>
  );
}