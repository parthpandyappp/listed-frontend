import { DASHBOARD_OPTIONS } from "../db";

const DashboardUtility = () => {
  return (
    <article className="w-full md:w-2/5 bg-black h-full w-full rounded-2xl text-white flex justify-between flex-col px-[60px] py-[50px]">
      <section className="">
        <h1 className="font-bold text-3xl">Board.</h1>
        <div className="mt-[60px] flex flex-col gap-10">
          {DASHBOARD_OPTIONS.map((d) => {
            return (
              <span className="flex gap-5 items-center">
                <img
                  src={d.icon}
                  alt={d.option}
                  className="object-cover w-4 h-4"
                />
                <p className="font-bold cursor-pointer text-lg">{d.option}</p>
              </span>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <p className="text-sm cursor-pointer">Help</p>
        <p className="text-sm cursor-pointer">Contact us</p>
      </section>
    </article>
  );
};

export { DashboardUtility };
