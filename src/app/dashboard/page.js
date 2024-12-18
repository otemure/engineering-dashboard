import Sidebar from "../components/SideBar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-black text-center">
          Welcome to Dashboard
        </h1>
        <p className="text-center">
          Select an option from the menu to get started.
        </p>
      </main>
    </div>
  );
}
