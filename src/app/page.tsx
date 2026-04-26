import { redirect } from "next/navigation";

export default function Home() {
  const isLoggedIn = false; // mock 

  if (isLoggedIn) {
    redirect("/analyze");
  }

  redirect("/auth");
}
