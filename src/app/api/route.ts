import { prisma } from "../db";
export async function GET(req: Request) {
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });

  return Response.json({
    message: "Here are all users +",
    users: allUsers,
  });
}

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const title = data.get("firstpost") as string;
    const bio = data.get("firstbio") as string;

    if (!data || !name || !email || !title || !bio) {
      throw { error: "field missing" };
    }

    await prisma.user.create({
      data: {
        name,
        email,
        posts: {
          create: { title },
        },
        profile: {
          create: { bio },
        },
      },
    });
    return Response.json({
      message: "Created",
    });
  } catch (err: any) {
    return Response.json({
      message: err.error,
    });
  }
}
