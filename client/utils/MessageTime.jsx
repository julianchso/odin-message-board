import { format, formatDistance, subDays, toDate } from 'date-fns';

export default function formatMessageTime(time) {
  let newDate = new Date();
  const dateDistance = formatDistance(
    subDays(toDate(newDate), Date.parse(time), { addSuffix: true, includeSeconds: true })
  );

  console.log(`added: ${typeof time}`);
  console.log(`current: ${typeof newDate}`);
}
