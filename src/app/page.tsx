import LogoutButton from "../ui/LogoutButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Home Page logged in User </h2>
      <LogoutButton label={"Logout"} />
    </main>
  );
}
