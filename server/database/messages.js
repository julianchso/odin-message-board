import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.MESSAGEBOARD_SUPABASE_URL;
const supabaseKey = process.env.MESSAGEBOARD_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchMessagesDB() {
  try {
    const { data, error } = await supabase.from('messageBoard').select('*');

    if (error) {
      throw error;
    }

    return data;
  } catch (err) {
    console.log(err);
  }
}

async function postMessagesDB(id, created_at, author, message) {
  try {
    console.log('postMessagesDB');
    const { data, error } = await supabase
      .from('messageBoard')
      .insert({ id: id, created_at: created_at, author: author, message: message })
      .select('*');

    return data;
  } catch (err) {
    console.log(err);
  }
}

export { fetchMessagesDB, postMessagesDB };
