const AnalyticalCard = (props: any) => {
  const {
    b: { bgcolor, icon, value, title, id },
  } = props;
  return (
    <div
      className={`${bgcolor} w-full md:w-1/4  px-6 py-5 rounded-2xl grid flex-col gap-1`}
    >
      <img
        src={icon}
        className={`justify-self-end w-6 h-6 ${id === 4 && "w-8"}`}
        alt=""
      />
      <p className="text-sm font-lato">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export { AnalyticalCard };
