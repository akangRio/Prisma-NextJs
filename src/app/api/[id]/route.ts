import { prisma } from "@/app/db";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const updatePost = await prisma.post.update({
      where: { id: Number(id) },
      data: { published: true },
    });
    return Response.json(
      {
        message: "published",
        post: updatePost,
      },
      {
        status: 201,
      }
    );
  } catch (err: any) {
    return Response.json(
      {
        message: "not found",
      },
      {
        status: 404,
      }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const delUser = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });

    return Response.json({
      message: "deleted",
    });
  } catch (err) {
    console.log(err);

    return Response.json(
      {
        message: "not found",
      },
      {
        status: 404,
      }
    );
  }
}
