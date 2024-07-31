import { NextRequest, NextResponse } from 'next/server';
import { getUserById } from '../users';

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
  const { userId } = params;
  try {
    const user = await getUserById(userId);
    if (!user) {
      return new NextResponse('User not found', { status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
