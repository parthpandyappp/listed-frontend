const DashBoardBar = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-5">
      <h1 className="text-2xl font-bold mb-3 md:m-0">Dashboard</h1>
      <div className="flex gap-6 items-center">
        <span className="flex justify-between gap-2 bg-white items-center px-6 py-1 w-full rounded-xl">
          <input
            type="search"
            name="searchfordashboard"
            className="outline-none z-0 w-32"
            placeholder="Search..."
          />
          <img
            src="/assets/search_icon.png"
            alt=""
            className="w-4 h-4 cursor-pointer"
          />
        </span>
        <img src="/assets/notification_icon.png" alt="" className="w-5 h-5" />
        <img
          src="/assets/profile_icon.png"
          alt=""
          className="w-8 h-8 cursor-pointer"
        />
      </div>
    </section>
  );
};

export { DashBoardBar };
