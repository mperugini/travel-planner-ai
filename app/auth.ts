import { auth } from "@clerk/nextjs/server";

export async function getAuthToken(): Promise<string | undefined> {
  const authInstance = await auth(); // Espera que auth() se resuelva
  // Usar el operador ?? para garantizar que el valor nulo se convierta en undefined
  return (await authInstance.getToken({ template: "convex" })) ?? undefined;
}