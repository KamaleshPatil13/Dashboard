interface NetProfitProps {
  netProfit: number;
  goalPercentage: number;
  goalCompleted: boolean;
  increasePercentage: number;
}

const NetProfit = ({ netProfit, goalPercentage, goalCompleted, increasePercentage }: NetProfitProps) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-white text-lg font-bold mb-2">Net Profit</h2>
          <div className="grid items-center">
            <span className="text-white text-3xl font-bold">$ {netProfit.toFixed(2)}</span>
            <span className={`text-green-500 ml-2 ${increasePercentage > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {increasePercentage > 0 ? '+' : ''} {increasePercentage}%
            </span>
          </div>
        </div>
        <div className="relative grid">
          <div className="w-24 h-24 rounded-full bg-gray-700">
            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
              <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center text-white font-bold">
                {goalPercentage}%
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm text-gray-400">
            Goal Completed
          </div>
        </div>
      </div>
      <div className="container">
  {/* Other elements within the grid */}
  <div className="col-end-4">
    <p className="text-gray-400 text-sm mt-2">* The values here has been rounded off</p>
  </div>
</div>
    </div>
  );
};

export default NetProfit;