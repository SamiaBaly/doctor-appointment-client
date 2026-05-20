import { redirect } from 'next/navigation';
export const metadata = {
  title: 'Dashboard',
};

const Dashboard = () => {
  redirect('/dashboard/booking');
};

export default Dashboard;
