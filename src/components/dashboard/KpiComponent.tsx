

type KPIprops = {
  mId: number;
  metricTittle: string;
  metricValue: number;
  change: number;
  changeType: string;
  icon: any;
};

type KpiComponentprops = {
  KPIprop: KPIprops;
};
const KpiComponent = ({ KPIprop }: KpiComponentprops) => {
  return (
    <>
      <div className="bg-gray-600 flex-col gap-5 text-white p-3 w-full rounded-lg shadow-lg">
        <div className="">{KPIprop.icon}</div>
        <div className="text-[16px] mb-3">{KPIprop.metricTittle}</div>
        <div className="flex space-x-8 text-[30px] font-bold place-content-between">
          <div>{KPIprop.metricValue}</div>
          <div
            className={`text-sm flex items-center ${
              KPIprop.changeType === "increase"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {KPIprop.changeType === "increase" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            )}
            <div className="text-[20px] font-bold"> {KPIprop.change}</div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default KpiComponent;
