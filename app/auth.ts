import { auth } from "@clerk/nextjs/server";

export async function getAuthToken() {
  const authInstance = await auth(); // Esperar que auth() se resuelva
  return authInstance.getToken({ template: "convex" }) ?? undefined;

}
