// app/api/chat/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const message = body?.message?.trim();

        if (!message) {
            return NextResponse.json({ error: 'Thiếu nội dung tin nhắn.' }, { status: 400 });
        }
console.log("Thông báo=>",message);
        const openaiRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                'HTTP-Referer': 'http://localhost:4000', // hoặc domain thật nếu production
                'X-Title': 'Blog Chat Assistant',
            },
            body: JSON.stringify({
                model: 'openai/gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'Bạn là trợ lý blog cá nhân, hãy giúp người đọc.' },
                    { role: 'user', content: message }
                ],
                max_tokens: 100,
                temperature: 0.7
            }),
        });

        const data = await openaiRes.json();

        if (!data.choices || !data.choices[0]?.message?.content) {
            console.error('OpenRouter response error:', data);
            return NextResponse.json({ error: 'Lỗi từ phía OpenRouter API' }, { status: 500 });
        }

        const reply = data.choices[0].message.content;
        return NextResponse.json({ reply });
    } catch (error) {
        console.error('Server Error:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

