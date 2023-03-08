import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
 'https://mcydkezauhsjlxilfsch.supabase.co',
 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jeWRrZXphdWhzamx4aWxmc2NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxMTk2NzAsImV4cCI6MTk5MzY5NTY3MH0.0ZdfcM6itoN27Bx9D4m_4bHL_8wrmirlcBhivds21pM'
);
