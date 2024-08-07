import Chart from "../components/dashboard/Chart";
import FeedbackCard from "../components/dashboard/FeedbackCard";
import KpiCards from "../components/dashboard/KpiCards";
import MenuCard from "../components/dashboard/MenuCard";
import NetProfitCard from "../components/dashboard/NetProfitCard";
import RecentOrders from "../components/dashboard/RecentOrders";

const Dashboard = () => {
  return (
    <>
      <div className="w-full bg-black">
          <div>Dashboard</div>
        <div className="grid w-full min-h-screen">
          <div className="flex w-full gap-10">
            <div className="w-3/4">
              <div className="grid grid-cols-4 gap-5">
               <KpiCards />
              </div>
           
               <Chart />
              
              <RecentOrders />
              {/* <Profit /> */}
            </div>

            <div className="w-1/4">
              <NetProfitCard />
              <MenuCard />
              <FeedbackCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
