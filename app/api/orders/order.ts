import prisma from '@/lib/prisma';

export async function getAllOrders() {
  const orders = await prisma.order.findMany({
    include: {
      user: true,          // 주문 생성자 정보를 포함
      participants: true,  // 참가자 정보 포함
      chats: true          // 채팅 정보 포함
    }
  });
  return orders;
}

export async function getOrderById(orderId: string) {
  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
    include: {
      user: true,          // 주문 생성자 정보를 포함
      participants: true,  // 참가자 정보 포함
      chats: true          // 채팅 정보 포함
    }
  });
  return order;
}

export async function createOrder(data: {
  orderGroupCreaterId: string;
  orderGroupName: string;
  diningTime: Date;
  diningLocation: string;
  diningDescription: string;
  status: string;
}) {
  const newOrder = await prisma.order.create({
    data: {
      orderGroupCreaterId: data.orderGroupCreaterId,
      orderGroupName: data.orderGroupName,
      diningTime: data.diningTime,
      diningLocation: data.diningLocation,
      diningDescription: data.diningDescription,
      status: data.status,
    },
  });
  return newOrder;
}

export async function deleteOrder(orderId: string) {
  const deletedOrder = await prisma.order.delete({
    where: {
      id: orderId,
    },
  });
  return deletedOrder;
}
