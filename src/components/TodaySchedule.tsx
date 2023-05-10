const TodaySchedule = (props: any) => {
  const {
    s: { color, title, time, at },
  } = props;
  return (
    <span className={`border-l-4 ${color} px-3.5`}>
      <p className="text-[#666666] font-bold font-lato">{title}</p>
      <p className="text-sm text-[#999999] font-lato">{time}</p>
      <p className="text-sm text-[#999999] font-lato">{at}</p>
    </span>
  );
};

export { TodaySchedule };
