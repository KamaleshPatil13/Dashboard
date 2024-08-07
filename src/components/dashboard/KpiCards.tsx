import KpiComponent from "./KpiComponent";

const KpiCards = () => {
  const KPIsData = [
    {
      mId: 1,
      metricTittle: "Total Orders",
      metricValue: 75,
      change: 3,
      icon: (
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="100%"
          width="25%"
          color="blue"
        >
          <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
        </svg>
      ),
      changeType: "increase",
    },
    {
      mId: 2,
      metricTittle: "Total Delivered",
      metricValue: 75,
      change: 3,
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          height="100%"
          width="25%"
          color="green"
        >
          <path d="M16 16l2 2 4-4" />
          <path d="M21 10V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l2-1.14M16.5 9.4L7.55 4.24" />
          <path d="M3.29 7L12 12l8.71-5M12 22V12" />
        </svg>
      ),
      changeType: "increase",
    },
    {
      mId: 3,
      metricTittle: "Total Cancelled",
      metricValue: 75,
      change: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" height="100%" width="25%"  color="orange">
          <path d="M14.5 11c.28 0 .5.22.5.5V13H9v-1.5c0-.28.22-.5.5-.5h5m4 1c.5 0 1 .07 1.5.18V10h-2v2.03c.17-.03.33-.03.5-.03M6 19v-9H4v11h8.5c-.26-.62-.41-1.3-.47-2H6M21 9H3V3h18v6m-2-4H5v2h14V5m4 13.5c0 2.5-2 4.5-4.5 4.5S14 21 14 18.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5m-3 2.58L15.92 17c-.27.42-.42.94-.42 1.5 0 1.66 1.34 3 3 3 .56 0 1.08-.15 1.5-.42m1.5-2.58c0-1.66-1.34-3-3-3-.56 0-1.08.15-1.5.42L21.08 20c.27-.42.42-.94.42-1.5z" />
        </svg>
      ),
      changeType: "increase",
    },
    {
      mId: 4,
      metricTittle: "Total Revenue",
      metricValue: 75,
      change: 3,
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          height="100%"
          width="25%"
          color="pink"
        >
          <path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12 z" />
          <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8M12 18V6" />
        </svg>
      ),
      changeType: "increase",
    },
  ];

  return (
    <>
      {KPIsData.map((KPI) => (
        <KpiComponent KPIprop={KPI} />
      ))}
      <div></div>
    </>
  );
};

export default KpiCards;
