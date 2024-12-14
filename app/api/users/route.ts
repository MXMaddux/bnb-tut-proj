import { fetchUsers, saveUser } from "@/utils/actions";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  console.log(req);
  const users = await fetchUsers();
  return Response.json({ users });
};

export const POST = async (req: Request) => {
  const user = await req.json();
  const newUser = { ...user, id: Date.now().toString() };
  await saveUser(newUser);

  return Response.json({ msg: "user created" });
};