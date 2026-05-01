import Sidebar from "../Sidebar/Sidebar";

const CompanyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex">
      <Sidebar />

      <div className="ml-64 w-full p-6 bg-gray-100 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default CompanyLayout;