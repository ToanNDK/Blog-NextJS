'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const SimpleChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<string[]>(["🤖 Xin chào! Tôi có thể giúp gì cho bạn?"]);
    const [input, setInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 300);
        }
    }, [isOpen]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = input.trim();
        setMessages(prev => [...prev, `🧑 ${userMessage}`]);
        setInput('');

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: userMessage }) 

            });

            const data = await res.json();

            if (data.reply) {
                setMessages(prev => [...prev, `🤖 ${data.reply}`]);
            } else {
                setMessages(prev => [...prev, `❌ Lỗi phản hồi từ AI.`]);
            }
        } catch (error) {
            setMessages(prev => [...prev, `❌ Lỗi kết nối đến AI.`]);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'} w-80 bg-white shadow-2xl rounded-xl border border-gray-200 p-4 mb-3`}>
                <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-semibold text-gray-800">🔥 Trợ lý Blog</h4>
                    <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 transition">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <div className="h-40 overflow-y-auto text-sm text-gray-700 mb-2 border rounded p-2 bg-gray-50">
                    {messages.map((msg, index) => (
                        <p key={index} className="mb-1 whitespace-pre-wrap">{msg}</p>
                    ))}
                </div>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Nhập tin nhắn..."
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>

            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
                >
                    <MessageCircle className="w-5 h-5" />
                </button>
            )}
        </div>
    );
};

export default SimpleChatBot;