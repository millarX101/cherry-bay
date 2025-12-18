-- Email Signups Table for Coming Soon / Lead Capture
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS email_signups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  source VARCHAR(50) DEFAULT 'coming_soon',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_email_signups_email ON email_signups(email);
CREATE INDEX IF NOT EXISTS idx_email_signups_created ON email_signups(created_at DESC);

-- Enable Row Level Security
ALTER TABLE email_signups ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the signup form)
CREATE POLICY "Allow anonymous inserts" ON email_signups
  FOR INSERT WITH CHECK (true);

-- Allow reading for authenticated users (admin)
CREATE POLICY "Allow authenticated reads" ON email_signups
  FOR SELECT USING (auth.role() = 'authenticated');
