import "dotenv/config";
import https from "https";

const data = JSON.stringify({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: "Say hello" }],
});

const options = {
  hostname: 'api.openai.com',
  path: '/v1/chat/completions',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
  }
};

const req = https.request(options, res => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => {
    console.log("Status:", res.statusCode);
    console.log("Body:", body);
  });
});

req.on('error', error => console.error(error));
req.write(data);
req.end();
