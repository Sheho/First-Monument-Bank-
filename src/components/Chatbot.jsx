import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Bot, Minus } from "lucide-react";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! Welcome to First Monument Bank. How can we help you today?", sender: "bot", timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newUserMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate admin/bot response
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Thanks for reaching out! An admin is reviewing your request and will connect with you shortly. Please hold on.",
          sender: "bot",
          timestamp: new Date()
        }
      ]);
    }, 1500 + Math.random() * 1000); // 1.5 to 2.5 seconds delay
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-50 border border-[var(--color-bank-border)] shadow-2xl rounded-2xl w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] mb-4 flex flex-col overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 flex items-center justify-between shadow-md relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-sm">First Monument Bank Support</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-slate-600 text-xs">We typically reply in minutes</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded transition-colors" aria-label="Minimize chat">
                  <Minus className="w-5 h-5" />
                </button>
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded transition-colors" aria-label="Close chat">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-grow p-4 overflow-y-auto bg-[var(--color-bank-bg)] flex flex-col gap-4 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-blue-800/5 pointer-events-none"></div>
              
              <div className="text-center text-xs text-[var(--color-bank-text-muted)] my-2">
                Today at {formatTime(new Date())}
              </div>

              {messages.map((msg) => (
                <div key={msg.id} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end gap-2`}>
                    
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      {msg.sender === 'bot' ? (
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center border border-blue-500/30">
                          <Bot className="w-4 h-4 text-blue-600" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center border border-purple-500/30">
                          <User className="w-4 h-4 text-blue-600" />
                        </div>
                      )}
                    </div>

                    {/* Bubble */}
                    <div className="flex flex-col">
                      <div className={`p-3 rounded-2xl text-sm shadow-sm ${
                        msg.sender === 'user' 
                          ? 'bg-purple-600 text-slate-900 rounded-br-sm' 
                          : 'bg-[#1a1b26] border border-[var(--color-bank-border)] text-slate-600 rounded-bl-sm'
                      }`}>
                        {msg.text}
                      </div>
                      <span className={`text-[10px] text-[var(--color-bank-text-muted)] mt-1 px-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                        {formatTime(msg.timestamp)}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex w-full justify-start">
                  <div className="flex max-w-[80%] flex-row items-end gap-2">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center border border-blue-500/30">
                        <Bot className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl rounded-bl-sm bg-[#1a1b26] border border-[var(--color-bank-border)] flex gap-1 items-center h-10">
                      <motion.div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                      <motion.div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                      <motion.div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-slate-50 border-t border-[var(--color-bank-border)] z-10">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow bg-white border border-[var(--color-bank-border)] rounded-full px-4 py-2 text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 bg-indigo-600 disabled:bg-blue-100 hover:bg-indigo-500 text-slate-900 rounded-full flex items-center justify-center transition-colors flex-shrink-0 shadow-[0_0_10px_rgba(79,70,229,0.3)] disabled:shadow-none"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="text-center mt-2">
                <span className="text-[10px] text-[var(--color-bank-text-muted)]">Protected by AES-256 Encryption</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] transition-all z-50 text-slate-900"
        aria-label="Toggle Support Chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
