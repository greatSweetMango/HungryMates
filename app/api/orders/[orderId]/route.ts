import { NextRequest, NextResponse } from 'next/server';
import { getOrderById, deleteOrder } from '../order';

export async function GET(req: NextRequest, { params }: { params: { orderId: string } }) {
  const { orderId } = params;
  try {
    const order = await getOrderById(orderId);
    if (!order) {
      return new NextResponse('Order not found', { status: 404 });
    }
    return NextResponse.json(order);
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { orderId: string } }) {
  const { orderId } = params;
  try {
    const deletedOrder = await deleteOrder(orderId);
    return NextResponse.json(deletedOrder);
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
