import { NextRequest, NextResponse } from 'next/server';
import { getAllOrders, createOrder } from './order';

export async function GET(req: NextRequest) {
  try {
    const orders = await getAllOrders();
    return NextResponse.json(orders);
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { orderGroupCreaterId, orderGroupName, diningTime, diningLocation, diningDescription, status } = body;

  try {
    const newOrder = await createOrder({
      orderGroupCreaterId,
      orderGroupName,
      diningTime: new Date(diningTime), // Date로 변환
      diningLocation,
      diningDescription,
      status,
    });
    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
