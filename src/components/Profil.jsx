import React, { useState } from 'react';
import axios from 'axios';

const Profil = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://chatbot-backend-uu0i.onrender.com/chatbot",
        { messages: [{ role: "user", content: input }] },
        { headers: { "Content-Type": "application/json" } }
      );

      const botMessage = { 
        text: response.data.answer, 
        sender: "bot" 
      };
      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      setMessages(prev => [...prev, { 
        text: "Sorry, an error occurred.", 
        sender: "bot" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto",marginTop:"10vh" }}>
      <div style={{ 
        height: "400px", 
        overflowY: "auto", 
        border: "1px solid #ddd", 
        padding: "10px",
        marginBottom: "10px" 
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ 
            textAlign: msg.sender === 'user' ? 'right' : 'left',
            margin: "5px 0",
            padding: "5px",
            backgroundColor: msg.sender === 'user' ? "#e3f2fd" : "#f5f5f5",
            borderRadius: "5px"
          }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
        {isLoading && <div style={{ textAlign: "left" }}>...</div>}
      </div>

      <div style={{ display: "flex" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          style={{ 
            flexGrow: 1, 
            padding: "10px", 
            border: "1px solid #ccc",
            borderRadius: "4px 0 0 4px" 
          }}
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading}
          style={{ 
            padding: "10px 15px",
            background: "#1976d2",
            color: "white",
            border: "none",
            borderRadius: "0 4px 4px 0",
            cursor: "pointer"
          }}
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default Profil;