'use client';
import { useState, useRef, useEffect } from 'react';
import {
  ChatBubbleLeftIcon,
  XMarkIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { programsPageData } from '@/src/data/pages/program.data';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  time: string;
}

interface UserData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  studyLevel: string;
  location: string;
}

interface ConversationStep {
  question: string;
  field: keyof UserData;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! 👋 I'm your Course Advisor. Let's find the best university program for you!",
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    phone: '',
    interest: '',
    studyLevel: '',
    location: '',
  });

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const conversationFlow: ConversationStep[] = [
    { question: "What's your name?", field: 'name' },
    { question: "Which field interests you? (Engineering, Business, Arts, etc.)", field: 'interest' },
    { question: "What study level are you looking for? (Bachelor's, Master's)", field: 'studyLevel' },
    { question: "Do you prefer Online, On-Campus, or Hybrid?", field: 'location' },
    { question: "Please share your email address.", field: 'email' },
    { question: "Finally, your phone number please.", field: 'phone' },
  ];

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(scrollToBottom, [messages]);

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { id: Date.now(), text, sender, time }]);
  };

  const simulateTyping = (callback: () => void, textLength?: number) => {
    setIsTyping(true);
    const delay = Math.min(2000, 400 + (textLength || 0) * 20);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const findMatchingPrograms = (interest: string, level: string) =>
    programsPageData.filter(p =>
      p.category.toLowerCase().includes(interest.toLowerCase()) &&
      p.title.toLowerCase().includes(level.toLowerCase())
    );

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    addMessage(userMessage, 'user');
    setInput('');

    if (currentStep < conversationFlow.length) {
      const field = conversationFlow[currentStep].field;
      setUserData(prev => ({ ...prev, [field]: userMessage }));

      simulateTyping(() => {
        if (currentStep < conversationFlow.length - 1) {
          addMessage(conversationFlow[currentStep + 1].question, 'bot');
          setCurrentStep(prev => prev + 1);
        } else handleFormComplete(userMessage);
      });
    } else {
      simulateTyping(() => addMessage(getBotResponse(userMessage), 'bot'));
    }
  };

  const getBotResponse = (msg: string): string => {
    const text = msg.toLowerCase();
    if (text.includes('hi') || text.includes('hello')) return "Hey there! 👋 How can I assist you today?";
    if (text.includes('thanks')) return "You're welcome! 😊";
    return "I’m not sure I got that 🤔 — you can ask me about available courses, universities, or fees.";
  };

  const handleFormComplete = (lastAnswer: string) => {
    const finalData = { ...userData, phone: lastAnswer };

    simulateTyping(() => {
      const matches = findMatchingPrograms(finalData.interest, finalData.studyLevel);

      if (matches.length) {
        addMessage(
          `Great, ${finalData.name}! 🎓 Based on your interest in ${finalData.interest} at ${finalData.studyLevel} level, here are some matches:`,
          'bot'
        );

        matches.slice(0, 3).forEach((p, i) => {
          setTimeout(() => {
            addMessage(
              `${p.icon} *${p.title}*\n🏛️ ${p.university.name}\n📚 ${p.duration} years | 💰 ₹${p.fees.toLocaleString()} | 📍 ${p.mode}`,
              'bot'
            );
          }, (i + 1) * 1500);
        });
      } else {
        addMessage(
          `Hmm 🤔 I couldn’t find a perfect match for your preferences, ${finalData.name}. Want to explore another category?`,
          'bot'
        );
      }

      setTimeout(() => {
        addMessage(
          `We'll also email your personalized recommendations to ${finalData.email} and contact you at ${finalData.phone}. ✅`,
          'bot'
        );
      }, 4000);
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none"
        >
          <ChatBubbleLeftIcon className="h-7 w-7" />
        </button>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-2xl w-96 h-[450px] flex flex-col overflow-hidden border border-gray-300"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2">
                  <ChatBubbleLeftIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Course Advisor</h3>
                  <p className="text-xs text-indigo-100">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-2"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] px-4 py-3 ${
                      msg.sender === 'user'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-800 border border-gray-200 shadow-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed">{msg.text}</p>
                    <p className="text-[10px] text-gray-400 mt-1 text-right">{msg.time}</p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start items-center bg-white p-3 border border-gray-200 shadow-sm w-fit">
                  <div className="flex space-x-1">
                    <span className="w-2 h-2 bg-gray-400 animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-gray-400 animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-gray-400 animate-bounce"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-300">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Type your message..."
                  onKeyDown={e => e.key === 'Enter' && handleSend()}
                  className="flex-1 px-4 py-3 border border-gray-300 focus:border-indigo-600 focus:outline-none text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 text-white p-3 transition-colors"
                >
                  <PaperAirplaneIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
