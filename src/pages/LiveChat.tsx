import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MessageSquare, Send, Bot, User, Clock, CheckCircle, HelpCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot' | 'agent';
  timestamp: Date;
  agentName?: string;
}

interface ChatSession {
  id: string;
  status: 'waiting' | 'connected' | 'ended';
  agentName?: string;
  startTime: Date;
}

const LiveChat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Welcome to USBank Live Chat! I\'m Sarah, your virtual assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
      agentName: 'Sarah (Bot)'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatSession, setChatSession] = useState<ChatSession>({
    id: 'chat-' + Date.now(),
    status: 'waiting',
    startTime: new Date()
  });
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = [
    "I understand your concern. Let me help you with that.",
    "That's a great question! Here's what I can tell you...",
    "I can definitely assist you with this. Could you provide more details?",
    "Thanks for reaching out! I'm connecting you with the right information.",
    "I see what you're looking for. Let me guide you through this.",
    "Based on what you've told me, I recommend the following steps...",
    "I'm here to help! Let me find the best solution for you.",
    "That's something we can definitely help you with."
  ];

  const quickActions = [
    { text: "Check account balance", action: "balance" },
    { text: "Report lost card", action: "lost-card" },
    { text: "Transfer money help", action: "transfer" },
    { text: "Security question", action: "security" },
    { text: "Loan information", action: "loan" },
    { text: "Mobile banking help", action: "mobile" }
  ];

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('balance') || lowerMessage.includes('account')) {
      return "You can check your account balance by logging into your dashboard or mobile app. Would you like me to guide you there?";
    } else if (lowerMessage.includes('lost') || lowerMessage.includes('stolen') || lowerMessage.includes('card')) {
      return "I'm sorry to hear about your lost card. Please immediately: 1) Log into your account 2) Go to Card Management 3) Report the card as lost/stolen 4) Order a replacement. Would you like me to connect you with a human agent for immediate assistance?";
    } else if (lowerMessage.includes('transfer') || lowerMessage.includes('send money')) {
      return "To transfer money: 1) Click Transfer Money 2) Select from/to accounts 3) Enter amount 4) Confirm. Transfers before 4 PM process same day. Need help with a specific transfer?";
    } else if (lowerMessage.includes('security') || lowerMessage.includes('password') || lowerMessage.includes('login')) {
      return "For security issues: Use strong passwords, enable 2FA, never share credentials. If you suspect fraud, contact us immediately at 1-800-BANK. What specific security concern do you have?";
    } else if (lowerMessage.includes('loan') || lowerMessage.includes('mortgage')) {
      return "We offer various loan options: personal, auto, home, and business loans. Interest rates start at 4.5% for qualified borrowers. Would you like to use our loan calculator or speak with a loan specialist?";
    } else if (lowerMessage.includes('mobile') || lowerMessage.includes('app')) {
      return "Our mobile app offers full banking features! Download from App Store or Google Play. Features include check deposit, transfers, bill pay, and more. Having trouble with the app?";
    } else if (lowerMessage.includes('human') || lowerMessage.includes('agent') || lowerMessage.includes('representative')) {
      return "I'd be happy to connect you with a human agent. Our current wait time is approximately 2-3 minutes. Would you like me to transfer you now?";
    } else {
      return botResponses[Math.floor(Math.random() * botResponses.length)];
    }
  };

  const sendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputMessage,
        sender: 'user',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, newMessage]);
      setInputMessage('');
      setIsTyping(true);

      // Simulate bot response
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: generateBotResponse(inputMessage),
          sender: 'bot',
          timestamp: new Date(),
          agentName: 'Sarah (Bot)'
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000 + Math.random() * 1000);
    }
  };

  const handleQuickAction = (action: string) => {
    const actionMessages: Record<string, string> = {
      'balance': "I need to check my account balance",
      'lost-card': "I've lost my debit card and need to report it",
      'transfer': "I need help with transferring money to another account",
      'security': "I have a security question about my account",
      'loan': "I'm interested in getting a loan",
      'mobile': "I'm having trouble with the mobile banking app"
    };

    setInputMessage(actionMessages[action]);
  };

  const connectToAgent = () => {
    setIsConnected(true);
    setChatSession(prev => ({
      ...prev,
      status: 'connected',
      agentName: 'John Smith'
    }));

    const agentMessage: Message = {
      id: Date.now().toString(),
      text: "Hi! I'm John, a human support agent. I'm here to help you with any complex issues. How can I assist you today?",
      sender: 'agent',
      timestamp: new Date(),
      agentName: 'John Smith'
    };

    setMessages(prev => [...prev, agentMessage]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <h1 className="text-3xl font-bold text-gray-900">Live Chat Support</h1>
          <p className="text-gray-600 mt-2">Get instant help from our virtual assistant or connect with a human agent</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="flex-shrink-0">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Live Chat
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={isConnected ? "default" : "secondary"}>
                      {isConnected ? "Connected to Agent" : "Chat with Bot"}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      Started {formatTime(chatSession.startTime)}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-lg p-3 ${
                          message.sender === 'user'
                            ? 'bg-blue-600 text-white'
                            : message.sender === 'agent'
                            ? 'bg-green-100 text-gray-900'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        {message.sender !== 'user' && (
                          <div className="flex items-center mb-1">
                            {message.sender === 'agent' ? (
                              <User className="h-3 w-3 mr-1" />
                            ) : (
                              <Bot className="h-3 w-3 mr-1" />
                            )}
                            <span className="text-xs font-medium">
                              {message.agentName}
                            </span>
                          </div>
                        )}
                        <p className="text-sm">{message.text}</p>
                        <div className="text-xs opacity-70 mt-1">
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Input
                      ref={inputRef}
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1"
                    />
                    <Button onClick={sendMessage} disabled={!inputMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="w-full justify-start text-left h-auto p-3"
                      onClick={() => handleQuickAction(action.action)}
                    >
                      {action.text}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Connect to Agent */}
            {!isConnected && (
              <Card>
                <CardHeader>
                  <CardTitle>Need More Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      Connect with a human agent for complex issues or personalized assistance.
                    </p>
                    <Button onClick={connectToAgent} className="w-full">
                      <User className="h-4 w-4 mr-2" />
                      Connect to Agent
                    </Button>
                    <div className="text-xs text-gray-500 text-center">
                      Average wait time: 2-3 minutes
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Chat Info */}
            <Card>
              <CardHeader>
                <CardTitle>Chat Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Session ID:</span>
                    <span className="font-mono text-xs">{chatSession.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <Badge variant="outline">
                      {chatSession.status === 'connected' ? 'Connected' : 'Active'}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span>{Math.floor((new Date().getTime() - chatSession.startTime.getTime()) / 60000)} min</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Support Options */}
            <Card>
              <CardHeader>
                <CardTitle>Other Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full" onClick={() => navigate('/help')}>
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Help Center
                  </Button>
                  <Button variant="outline" size="sm" className="w-full" onClick={() => window.open('tel:18002265')}>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Phone Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LiveChat;
