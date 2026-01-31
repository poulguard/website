import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface WaitlistSubmission {
  name: string;
  email: string;
  role: string;
  phone?: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  role: string;
  message: string;
}

export const submitToWaitlist = async (data: WaitlistSubmission) => {
  const { data: result, error } = await supabase
    .from('waitlist_submissions')
    .insert([data])
    .select()
    .maybeSingle();

  if (error) throw error;
  return result;
};

export const submitContact = async (data: ContactSubmission) => {
  const { data: result, error } = await supabase
    .from('contact_submissions')
    .insert([data])
    .select()
    .maybeSingle();

  if (error) throw error;
  return result;
};
