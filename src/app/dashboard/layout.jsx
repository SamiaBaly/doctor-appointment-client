export default function DashboardLayout({ children }) {
  return (
    <div className="container mx-auto">
     
      

      {/* Main content */}
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
