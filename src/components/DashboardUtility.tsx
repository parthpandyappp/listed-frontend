const DASHBOARD_OPTIONS = [
  {
    id: "1",
    option: "Dashboard",
    icon: "/assets/dashboard_icon.png",
  },
  {
    id: "2",
    option: "Transactions",
    icon: "/assets/transaction_icon.png",
  },
  {
    id: "3",
    option: "Schedules",
    icon: "/assets/schedule_icon.png",
  },
  {
    id: "4",
    option: "Users",
    icon: "/assets/user_icon.png",
  },
  {
    id: "5",
    option: "Settings",
    icon: "/assets/setting_icon.png",
  },
];

const DashboardUtility = () => {
  return (
    <article className="w-1/5 h-full bg-black h-full w-full rounded-2xl text-white flex justify-between flex-col px-[60px] py-[50px]">
      <section className="">
        <h1 className="font-bold text-3xl">Board.</h1>
        <div className="mt-[60px] flex flex-col gap-6">
          {DASHBOARD_OPTIONS.map((d) => {
            return (
              <span className="flex gap-5">
                <img src={d.icon} alt={d.option} className="object-cover" />
                <p className="font-bold">{d.option}</p>
              </span>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <p className="text-sm">Help</p>
        <p className="text-sm">Contact us</p>
      </section>
    </article>
  );
};

export { DashboardUtility };
