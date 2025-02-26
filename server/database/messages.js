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

export default fetchMessagesDB;
