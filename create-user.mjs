import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase URL or Service Key');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function createUser(npi, password) {
  const syntheticEmail = `${npi}@npi.dotobase.local`;
  console.log(`Attempting to create user with email: ${syntheticEmail}`);

  const { data, error } = await supabase.auth.admin.createUser({
    email: syntheticEmail,
    password: password,
    email_confirm: true,
  });

  if (error) {
    console.error('Error creating user:', error.message);
  } else {
    console.log('User created successfully:', data.user.id);
  }
}

// Default test user
const npi = process.argv[2] || '1234567890';
const password = process.argv[3] || 'Dotobase2026!';

createUser(npi, password);
