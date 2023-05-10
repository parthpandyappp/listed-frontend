import { DashboardUtility } from "../components";

const Analytics = () => {
  const BASIC_ANALYTICS = [
    {
      id: 1,
      title: "Total Revenues",
      value: "$2,129,430",
      icon: "/assets/revenue_icon.png",
      bgcolor: "bg-[#DDEFE0]",
    },
    {
      id: 2,
      title: "Total Transactions",
      value: "1520",
      icon: "/assets/total_transaction_icon.png",
      bgcolor: "bg-[#F4ECDD]",
    },
    {
      id: 3,
      title: "Total Likes",
      value: "9721",
      icon: "/assets/like_icon.png",
      bgcolor: "bg-[#EFDADA]",
    },
    {
      id: 4,
      title: "Total Users",
      value: "892",
      icon: "/assets/users_icon.png",
      bgcolor: "bg-[#DEE0EF]",
    },
  ];
  return (
    <main className="flex md:flex-row flex-col p-10 h-full w-full bg-[#F5F5F5]">
      <DashboardUtility />
      <article className="flex flex-col w-full">
        <section className="flex flex-col md:flex-row justify-between items-center py-5 px-14">
          <h1 className="text-2xl font-bold mb-3 md:m-0">Dashboard</h1>
          <div className="flex gap-6 items-center">
            <span className="flex justify-between gap-2 bg-white items-center px-6 py-1 w-full rounded-xl">
              <input
                type="search"
                name="searchfordashboard"
                className="outline-none z-0 w-32"
                placeholder="Search..."
              />
              <img src="/assets/search_icon.png" alt="" className="w-4 h-4" />
            </span>
            <img
              src="/assets/notification_icon.png"
              alt=""
              className="w-5 h-5"
            />
            <img src="/assets/profile_icon.png" alt="" className="w-8 h-8" />
          </div>
        </section>
        <section className="px-14 w-full flex flex-col md:flex-row gap-8">
          {BASIC_ANALYTICS.map((b) => {
            return (
              <div
                key={b.id}
                className={`${b.bgcolor} w-full md:w-1/4  px-6 py-5 rounded-2xl grid flex-col gap-1`}
              >
                <img
                  src={b.icon}
                  className={`justify-self-end w-6 h-6 ${b.id === 4 && "w-8"}`}
                  alt=""
                />
                <p className="text-sm font-lato">{b.title}</p>
                <p className="text-2xl font-bold">{b.value}</p>
              </div>
            );
          })}
        </section>
      </article>
    </main>
  );
};

export { Analytics };
