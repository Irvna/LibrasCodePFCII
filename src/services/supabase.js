import { createClient } from '@supabase/supabase-js';

const supabaseUrl = '*****omitido por segurança*****';
const supabaseKey = '*****omitido por segurança*****';

export const supabase = createClient(supabaseUrl, supabaseKey); 