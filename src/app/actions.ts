import { revalidatePath } from "next/cache";
import { RedirectType, redirect } from "next/navigation";

export const getUsers = async () => {
  "use server";
  const data = await fetch(`http://localhost:3000/api`, {
    method: "GET",
  });
  const { users } = await data.json();

  revalidatePath("/");
  return users;
};

export async function createUser(data: FormData) {
  "use server";

  const sendData = await fetch(`http://localhost:3000/api`, {
    method: "POST",
    body: data,
  });
  if (sendData.status == 404) {
    throw { message: "not found" };
  }

  revalidatePath("/");
  redirect("/", RedirectType.push);
}
