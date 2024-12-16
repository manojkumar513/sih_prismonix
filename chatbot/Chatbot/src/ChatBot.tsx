import React, { useState } from 'react';
import axios from 'axios';

function ChatBot() {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<any[]>([]); // Store the full chat history
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!userMessage.trim()) return;

    setIsLoading(true);
    setError(null);

    // Update chat history with the user's message before sending
    const updatedHistory = [...chatHistory, { user: userMessage }];

    try {
      const response = await axios.post('http://localhost:8000/chat', {
        user_message: userMessage,
        // Add the entire chat history to provide context (optional)
        chat_history: chatHistory, 
      });

      if (response.data && response.data.response) {
        setChatHistory([...updatedHistory, { bot: response.data.response }]);
      } else {
        setChatHistory([...updatedHistory, { bot: "Sorry, I couldn't understand that!" }]);
      }

      setUserMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      const backendError = (error as any).response?.data?.error || 'Sorry, something went wrong. Please try again.';
      setError(backendError);
      setChatHistory([...updatedHistory, { bot: backendError }]);
    }

    setIsLoading(false);
  };

  // Function to convert text wrapped in '*' to bold text
  const formatText = (text: string) => {
    return text.split('*').map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index}>{part}</strong>;
      }
      return part;
    });
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Roboto, sans-serif' }}>
      {/* Sidebar */}
      <div
        style={{
          width: isSidebarOpen ? '250px' : '50px',
          backgroundColor: '#034051',
          color: '#ffffff',
          transition: 'width 0.3s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isSidebarOpen ? 'flex-start' : 'center',
          padding: '10px',
          height: '100vh',
        }}
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{
            marginBottom: '20px',
            backgroundColor: '#ffffff',
            color: '#034051',
            border: 'none',
            borderRadius: '5px',
            padding: '5px 10px',
            cursor: 'pointer',
          }}
        >
          {isSidebarOpen ? 'Close' : 'Open'}
        </button>

        {isSidebarOpen && <h2 style={{ marginBottom: '20px' }}>Menu</h2>}

        <ul style={{ listStyleType: 'none', padding: 0, width: '100%' }}>
          {['Home', 'Profile', 'Community', 'Messaging', 'Logout'].map((item) => (
            <li key={item} style={{ marginBottom: '10px', textAlign: isSidebarOpen ? 'left' : 'center', width: '100%' }}>
              <button
                style={{
                  width: isSidebarOpen ? '90%' : '100%',
                  padding: '10px',
                  border: 'none',
                  borderRadius: '5px',
                  backgroundColor: '#ffffff',
                  color: '#034051',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                {isSidebarOpen ? item : ''}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Section */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#03513',
          color: '#ffffff',
          padding: '20px',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        {/* Header with INNOMATE */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ margin: 0, color: '#03513', fontFamily: 'Poppins, sans-serif' }}>INNOMATE</h1>
        </div>

        <div
          style={{
            height: 'calc(100vh - 160px)',  // Adjusted height to leave space for the input
            overflowY: 'auto',
            marginBottom: '20px',
            padding: '10px',
            border: '1px solid #ffffff',
            borderRadius: '5px',
            backgroundColor: '#043d4a',
          }}
        >
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: '10px',
              }}
            >
              {/* User Message */}
              {chat.user && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    marginRight: '20px',
                  }}
                >
                  <strong>User:</strong>
                  <p
                    style={{
                      backgroundColor: '#052d37',
                      padding: '12px 18px',
                      borderRadius: '20px',
                      margin: 0,
                      maxWidth: '70%',
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: '16px',
                    }}
                  >
                    {formatText(chat.user)}
                  </p>
                </div>
              )}

              {/* Bot Response */}
              {chat.bot && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <strong>Bot:</strong>
                  <pre
                    style={{
                      backgroundColor: '#052d37',
                      padding: '12px 18px',
                      borderRadius: '20px',
                      margin: 0,
                      whiteSpace: 'pre-wrap',
                      maxWidth: '70%',
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: '16px',
                    }}
                  >
                    {formatText(chat.bot)}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={userMessage}
            onChange={handleMessageChange}
            placeholder="Type your message..."
            style={{
              flex: 1,
              border: '1px solid #ffffff',
              color: '#03513',
              padding: '12px',
              borderRadius: '20px',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '16px',
            }}
          />
          <button
            type="submit"
            disabled={isLoading}
            style={{
              backgroundColor: '#ffffff',
              color: '#03513',
              border: 'none',
              padding: '12px 20px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatBot;
