import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const FormComponent = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    username: '',
    message: '',
    dateTime: new Date(),
    id: uuidv4(),
  });

  const addMessageMutation = useMutation({
    mutationFn: (formData) => {
      return axios.post('http://localhost:3000/messages', formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['messages']);
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      addMessageMutation.mutate(formData);
      console.log('Form data submitted successfully');
      setFormData({ username: '', message: '', dateTime: new Date(), id: uuidv4() });
    } catch (error) {
      console.log('Error submitting form data', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex-col '>
        <div className='flex flex-row'>
          <label className='m-2 p-2 ' htmlFor='username'>
            Username:{' '}
          </label>
          <input
            minLength={2}
            className='m-2 p-2 text-gray-900 rounded'
            type='text'
            name='username'
            placeholder='username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div>
        <div className='flex flex-col'>
          <label className='mt-2 mr-2 ml-2 p-2' htmlFor='newMessage'>
            Message:{' '}
          </label>
          <textarea
            minLength={2}
            className='m-2 p-2 max-w-4xl rounded text-gray-900'
            type='text'
            name='message'
            placeholder="What's on your mind?"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type='submit'
          className='p-2 m-2 font-semibold rounded-md border-none text-gray-900 bg-white hover:bg-gray-400 duration-150 ease-in-out'
        >
          Post Message
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
