import { NextRequest, NextResponse } from 'next/server';
import { getAllUsers, createUser } from './users';

export async function GET() {
  try {
    const users = await getAllUsers();
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();
    const newUser = await createUser(name, email);
    return NextResponse.json(newUser);
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
