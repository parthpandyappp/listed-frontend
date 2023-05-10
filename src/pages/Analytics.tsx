import {
  ActivityChart,
  AnalyticalCard,
  DashBoardBar,
  DashboardUtility,
  ProductPieChart,
  TodaySchedule,
  TopProducts,
} from "../components";
import { BASIC_ANALYTICS, PIE_CHART_INFO, SCHEDULE_DATA } from "../db";

const Analytics = () => {
  return (
    <main className="flex md:flex-row flex-col p-3 md:p-10 h-full w-full ">
      <DashboardUtility />
      <article className="flex flex-col gap-10 w-full h-full md:px-14">
        <DashBoardBar />
        <section className="w-full flex flex-col md:flex-row gap-8">
          {BASIC_ANALYTICS.map((b) => (
            <AnalyticalCard key={b.id} b={b} />
          ))}
        </section>
        <section className="w-full h-3/5 bg-white mt-3 rounded-3xl px-3 md:px-10 pt-6">
          <h2 className="font-bold text-lg">Activities</h2>
          <div className="flex justify-between">
            <select className="text-sm text-gray-400 mb-2 bg-transparent text-xs">
              <option value="">May-June 2021</option>
              <option value="">July-August 2021</option>
            </select>
            <div className="flex gap-3 items-center">
              <span className="flex gap-1 items-center">
                <p className="w-2 h-2 bg-[#9BDD7C] rounded-full"></p>
                <p className="text-xs">Guest</p>
              </span>
              <span className="flex gap-1 items-center">
                <p className="w-2 h-2 bg-[#E9A0A0] rounded-full"></p>
                <p className="text-xs">User</p>
              </span>
            </div>
          </div>

          <ActivityChart />
        </section>
        <section className="flex md:flex-row flex-col gap-6 h-2/5 w-full">
          <section className="w-full md:w-1/2 bg-white mt-3 rounded-3xl">
            <span className="flex justify-between items-center px-7 py-10">
              <h2 className="font-bold text-lg">Top Products</h2>
              <select className="text-sm text-gray-400 bg-transparent">
                <option value="">May-June 2021</option>
                <option value="">July-August 2021</option>
              </select>
            </span>
            <span className="flex justify-center items-center">
              <ProductPieChart />
              <div className="flex flex-col gap-3 mx-auto">
                {PIE_CHART_INFO.map((p) => (
                  <TopProducts key={p.id} p={p} />
                ))}
              </div>
            </span>
          </section>
          <section className="w-full md:w-1/2 bg-white mt-3 rounded-3xl px-7 py-10">
            <span className="flex justify-between items-center">
              <h2 className="font-bold text-lg">Today's schedule</h2>
              <span className="flex gap-2 items-center">
                <p className="text-sm text-[#858585] cursor-pointer">See All</p>
                <img
                  src="/assets/seeall_icon.png"
                  alt="see_all_icon"
                  className="h-2 w-2"
                />
              </span>
            </span>
            <div className="flex flex-col justify-center h-full gap-3">
              {SCHEDULE_DATA.map((s) => (
                <TodaySchedule key={s.id} s={s} />
              ))}
            </div>
          </section>
        </section>
      </article>
    </main>
  );
};

export { Analytics };
