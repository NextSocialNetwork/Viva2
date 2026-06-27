import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Loader2, Globe } from 'lucide-react';
import { Language, ChatMessage } from '../types';
import { TRANSLATIONS, LANGUAGE_NAMES } from '../data/translations';

interface AiSupportChatProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const AiSupportChat: React.FC<AiSupportChatProps> = ({ language, isOpen, onClose }) => {
  const t = TRANSLATIONS[language];
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: t.chat_welcome,
      timestamp: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Update welcome message if language changes
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [{ ...prev[0], text: t.chat_welcome }];
      }
      return prev;
    });
  }, [language]);

  if (!isOpen) return null;

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    const query = inputText.trim();
    setInputText('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          language: language
        })
      });

      const data = await res.json();
      const replyText = data.reply || "I am currently syncing with the VIVA 5G Ultra satellite network. Please check out www.MyVivaMobile.Com!";

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: "Connection reset. Please visit our main store at www.MyVivaMobile.Com or select an eSIM kit!",
        timestamp: 'Now'
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[420px] h-[600px] max-h-[85vh] bg-slate-950 border border-cyan-500/50 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.3)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
      
      {/* Chat Top Bar */}
      <div className="p-4 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-fuchsia-500 p-[1.5px] flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950" />
          </div>
          <div>
            <h3 className="font-sans font-black text-white text-sm tracking-wide flex items-center gap-1.5">
              <span>{t.chat_header_title}</span>
            </h3>
            <span className="text-[10px] text-cyan-400 font-mono block">
              {t.chat_header_status} • www.MyVivaMobile.Com
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs bg-slate-900 px-2 py-1 rounded-lg border border-slate-800 text-slate-300 font-mono">
            {LANGUAGE_NAMES[language].flag}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Conversation Messages Body */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-950/90 bg-[radial-gradient(#1e293b20_1px,transparent_1px)] [background-size:16px_16px] custom-scrollbar">
        {messages.map((msg) => {
          const isAi = msg.sender === 'ai';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isAi ? 'justify-start' : 'justify-end'}`}
            >
              {isAi && (
                <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-1 text-cyan-300 shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`max-w-[80%] rounded-2xl p-4 text-xs leading-relaxed space-y-1 shadow-md ${
                isAi 
                  ? 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none' 
                  : 'bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white rounded-tr-none font-medium'
              }`}>
                <p className="whitespace-pre-wrap">{msg.text}</p>
                <span className={`text-[9px] block text-right font-mono ${isAi ? 'text-slate-500' : 'text-fuchsia-200'}`}>
                  {msg.timestamp}
                </span>
              </div>

              {!isAi && (
                <div className="w-8 h-8 rounded-xl bg-fuchsia-500/20 border border-fuchsia-500/40 flex items-center justify-center shrink-0 mt-1 text-fuchsia-300">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 text-cyan-300">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-slate-900 border border-slate-800 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-2">
              <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
              <span className="text-xs font-mono text-slate-400">VIVA AI generating {language.toUpperCase()} response...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Submit Bar */}
      <form onSubmit={handleSend} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
        <input
          type="text"
          placeholder={t.chat_placeholder}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          disabled={isLoading}
          className="flex-1 bg-slate-950 border border-slate-700 rounded-2xl px-4 py-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isLoading}
          className="p-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 disabled:opacity-50 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all shrink-0 cursor-pointer"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
};
