
interface Order {
  customer: string;
  orderNo: string;
  amount: number;
  status: string;
}

const userSVG = (
  <svg viewBox="0 0 16 16" fill="currentColor" height="1.5em" width="1.5em" color="blue">
    <path
      fill="currentColor"
      d="M9 11.041v-.825c1.102-.621 2-2.168 2-3.716C11 4.015 11 2 8 2S5 4.015 5 6.5c0 1.548.898 3.095 2 3.716v.825c-3.392.277-6 1.944-6 3.959h14c0-2.015-2.608-3.682-6-3.959z"
    />
  </svg>
);

const orders: Order[] = [
  {
    customer: "Wade Warren",
    orderNo: "15478256",
    amount: 124.0,
    status: "Delivered",
  },
  {
    customer: "Jane Cooper",
    orderNo: "48965786",
    amount: 365.02,
    status: "Cancelled",
  },
  {
    customer: "Guy Hawkins",
    orderNo: "48965786",
    amount: 365.02,
    status: "Cancelled",
  },
  {
    customer: "Kristin Watson",
    orderNo: "48965786",
    amount: 365.02,
    status: "Cancelled",
  },
  {
    customer: "Cody Fisher",
    orderNo: "48965786",
    amount: 365.02,
    status: "Cancelled",
  },
];

const RecentOrders = () => {
  return (
    <div className="bg-gray-800 mt-10 p-4 rounded-lg">
      <h2 className="text-white text-lg font-bold mb-4">Recent Orders</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left text-white p-4 border-b">Customer</th>
            <th className="text-left text-white p-4 border-b">Order No.</th>
            <th className="text-left text-white p-4 border-b">Amount</th>
            <th className="text-left text-white p-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody className="space-y-2">
          {orders.map((order) => (
            <tr key={order.orderNo}>
              <td className="text-white p-4 border-b flex gap-2 items-center">
                <div>{userSVG}</div>
                <div>{order.customer}</div>
              </td>
              <td className="text-white p-4 border-b">{order.orderNo}</td>
              <td className="text-white p-4 border-b">
                ${order.amount.toFixed(2)}
              </td>
              <td className="p-4 border-b">
                <span
                  className={`rounded px-4 py-2 ${
                    order.status === "Delivered"
                      ? "text-green-500 bg-green-100"
                      : order.status === "Cancelled"
                      ? "text-red-500 bg-red-100"
                      : ""
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
