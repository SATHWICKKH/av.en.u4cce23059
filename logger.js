const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhdi5lbi51NGNjZTIzMDU5QGF2LnN0dWRlbnRzLmFtcml0YS5lZHUiLCJleHAiOjE3NzgwNjE4MDksImlhdCI6MTc3ODA2MDkwOSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImRkZjJhMGI4LTAwMjktNDk4MC1hZTMzLTg1MjM2YjQwN2RmMSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im51dGFsYXBhdGkgc2FpIHNhdGh3aWNra2giLCJzdWIiOiI5MzcwNDM3NC1mNjk2LTRiYWEtYmY0OS0yYmNhZTNlMzYxMGQifSwiZW1haWwiOiJhdi5lbi51NGNjZTIzMDU5QGF2LnN0dWRlbnRzLmFtcml0YS5lZHUiLCJuYW1lIjoibnV0YWxhcGF0aSBzYWkgc2F0aHdpY2traCIsInJvbGxObyI6ImF2LmVuLnU0Y2NlMjMwNTkiLCJhY2Nlc3NDb2RlIjoiUFRCTW1RIiwiY2xpZW50SUQiOiI5MzcwNDM3NC1mNjk2LTRiYWEtYmY0OS0yYmNhZTNlMzYxMGQiLCJjbGllbnRTZWNyZXQiOiJhVndxY0pTREJ5cE5RSlROIn0.SCyuZVaSSsGcXSlhDJFtA6RY69hNgaI1l8l5wdH51A8";

async function Log(stack, level, packageName, message) {
    try {
        const response = await axios.post(
            "http://20.207.122.201/evaluation-service/logs",
            {
                stack: stack,
                level: level,
                package: packageName,
                message: message
            },
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("Log created:", response.data);
    } catch (error) {
        console.log("Logging failed");
    }
}

module.exports = Log;