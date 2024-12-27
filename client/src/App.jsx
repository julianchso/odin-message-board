import FormComponent from './FormComponent';

import axios from 'axios';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

import './App.css';

// import { PORT } from '../../.env';
// const PORT = process.env.PORT;

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Messages />
    </QueryClientProvider>
  );
}

function Messages() {
  const fetchMessages = async () => {
    // TODO: make port 3000 a variable from process.env
    try {
      const response = await axios.get('http://localhost:3000/messages');
      console.log(response.data.messages);
      return response.data.messages;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const {
    data: messages,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['messages'],
    queryFn: fetchMessages,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <h1 className='text-4xl underline'>Mini Messaging App</h1>
      <div className='messagesCtn'>
        <FormComponent />
        <div>
          {messages.map((message) => (
            <div key={message.id}>
              <p>{message.username}</p>
              <p>{message.message}</p>
              <p>{message.added}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
