'use client';
import { useState, useRef, useEffect } from 'react';
import {
  ChatBubbleLeftIcon,
  XMarkIcon,
  ArrowPathIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! 👋 I'm here to help you find the perfect course and university. Let's start by getting to know you better!",
      sender: 'bot',
    },
  ]);
  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
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
    {
      question:
        'Great! What field are you interested in? (e.g., Engineering, Business, Arts, Science, etc.)',
      field: 'interest',
    },
    {
      question:
        "What level of study are you looking for? (e.g., Bachelor's, Master's, PhD)",
      field: 'studyLevel',
    },
    {
      question: "What's your preferred location or country for studying?",
      field: 'location',
    },
    {
      question:
        'Perfect! Please provide your email address so we can send you personalized recommendations.',
      field: 'email',
    },
    { question: "Last step! What's your phone number?", field: 'phone' },
  ];

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, sender: 'user' | 'bot'): void => {
    const newMessage: Message = { id: Date.now(), text, sender };
    setMessages((prev) => [...prev, newMessage]);
  };

  const simulateTyping = (callback: () => void): void => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, 1000);
  };

  const handleSend = (): void => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    addMessage(userMessage, 'user');
    setInput('');

    if (currentStep < conversationFlow.length) {
      const currentField = conversationFlow[currentStep].field;
      setUserData((prev) => ({ ...prev, [currentField]: userMessage }));

      simulateTyping(() => {
        if (currentStep < conversationFlow.length - 1) {
          addMessage(conversationFlow[currentStep + 1].question, 'bot');
          setCurrentStep((prev) => prev + 1);
        } else {
          handleFormComplete(userMessage);
        }
      });
    }
  };

  const handleFormComplete = (lastAnswer: string): void => {
    const finalData: UserData = { ...userData, phone: lastAnswer };

    simulateTyping(() => {
      addMessage(
        `Thank you, ${finalData.name}! 🎉 Based on your interest in ${finalData.interest} at the ${finalData.studyLevel} level in ${finalData.location}, we'll send personalized course and university recommendations to ${finalData.email}. Our team will contact you at ${finalData.phone} within 24 hours!`,
        'bot'
      );

      setTimeout(() => {
        addMessage(
          'Would you like to explore more options or have any questions? Feel free to ask!',
          'bot'
        );
      }, 2000);
    });

    console.log('Form Data:', finalData);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 shadow-lg rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          <ChatBubbleLeftIcon className="h-7 w-7" />
        </button>
      ) : (
        <div className=" shadow-2xl w-96 h-[500px] flex flex-col overflow-hidden border-2 border-indigo-100">
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
              className="hover:bg-white/20 p-2 transition-colors"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] rounded-sm px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-indigo-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none shadow-md border border-gray-100'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-sm rounded-bl-none px-4 py-3 shadow-md border border-gray-100 flex items-center gap-2">
                  <ArrowPathIcon className="animate-spin text-indigo-600 h-5 w-5" />
                  <span className="text-sm text-gray-500">Typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border-2 border-gray-200 focus:border-indigo-600 focus:outline-none text-sm transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white cursor-pointer p-3 transition-colors focus:outline-none focus:ring-4 focus:ring-indigo-300"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}