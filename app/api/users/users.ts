import prisma from '@/lib/prisma';

export async function getAllUsers() {
  const users = await prisma.user.findMany();
  return users;
}

export async function createUser(name: string, email: string) {
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  return newUser;
}
export async function getUserById(userId: string) {
	const user = await prisma.user.findUnique({
	  where: {
		id: userId,
	  },
	});
	return user;
  }
