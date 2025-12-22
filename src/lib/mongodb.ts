import mongoose from 'mongoose';

// Don't read or throw on env var at module import time. Next.js may import
// this file during the build where env vars like MONGODB_URI may be unset.
const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (!MONGODB_URI) {
    // Environment doesn't provide a MongoDB URI (likely during static builds).
    // Return null rather than throwing so build-time code that imports this
    // module won't crash. Callers should handle a null return (skip DB ops).
    console.warn('MONGODB_URI not defined — skipping DB connection');
    return null as any;
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI);
  }

  cached.conn = await cached.promise;
  (global as any).mongoose = cached;
  return cached.conn;
}
    