import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await connectDB();

    // If connectDB returned null (no MONGODB_URI set), skip DB write.
    // This allows builds/deploys to succeed in environments where the
    // database isn't available. In production you should ensure the
    // MONGODB_URI is set and remove this fallback if you want strict failures.
    if (process.env.MONGODB_URI) {
      await Contact.create(data);
    } else {
      console.warn('MONGODB_URI not set — skipping Contact.create');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
    