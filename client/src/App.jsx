import FormComponent from './FormComponent';

import axios from 'axios';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

import FormatMessageTime from '../utils/MessageTime';

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
      <main className='container mx-6 text-white'>
        <header className='fixed flex left-0 top-0 h-16 w-full flex items-center justify-center'>
          <div className='flex w-4/5 justify-center items-center'>
            <h1 className='text-3xl'>Mini Messaging App</h1>
          </div>
        </header>
        <div className='mt-24'></div>
        <div className='flex flex-col'>
          <FormComponent />
          <div className='m-2'>
            {messages.map((message) => (
              <div className='m-2' key={message.id}>
                <p className='text-base'>{message.username}</p>
                <p className='text-xs opacity-50'>
                  <FormatMessageTime dateTime={message.dateTime} />
                </p>
                <p className='text-base mt-4 mb-5'>{message.message}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
