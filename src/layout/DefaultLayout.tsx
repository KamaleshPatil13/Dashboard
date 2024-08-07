import Dashboard from "./Dashboard";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DefaultLayout = () => {
  return (
    <>
      <div className="flex ">
      <div className="flex h-screen overflow-hidden w-16">
          <Sidebar />
        </div>

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* // navbar or Header */}
          <Header />
          {/* //main content */}
          <main className="mt-10 w-full">
            <div className="p-4 py-10 px-5">
              <Dashboard/>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
