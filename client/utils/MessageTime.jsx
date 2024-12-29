import { useState, useEffect } from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';

const FormatMessageTime = (dateTime) => {
  const date = parseISO(Object.values(dateTime).toString());

  const [Key, setKey] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const dateToNow = formatDistanceToNow(date, {
    addSuffix: true,
    includeSeconds: true,
  });

  const dateDistance = `Sent ${dateToNow}`;

  return <>{dateDistance}</>;
};

export default FormatMessageTime;
