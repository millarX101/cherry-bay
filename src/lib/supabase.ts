import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return Boolean(supabaseUrl && supabaseAnonKey)
}

/**
 * Get public URL for a file in Supabase storage
 * Tries both .jpg and .png extensions if no extension provided
 * Falls back to local /images/ path if Supabase isn't configured
 * @param path - File path within the bucket (e.g., 'Hero 1' or 'Hero 1.jpg')
 * @param bucket - Storage bucket name (default: 'images')
 */
export const getStorageUrl = (path: string, bucket: string = 'images') => {
  // Encode spaces and special characters but preserve the path structure
  const encodedPath = path.split('/').map(segment => encodeURIComponent(segment)).join('/')

  if (!isSupabaseConfigured()) {
    // Fallback to local images for development
    return `/images/${path}`
  }
  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${encodedPath}`
}
