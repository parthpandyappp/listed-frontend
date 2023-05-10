const TopProducts = (props: any) => {
  return (
    <article>
      <span className="flex gap-2 items-center">
        <p className={`w-3 h-3 ${props.p.color} rounded-full`}></p>
        <p className="font-bold">{props.p.title}</p>
      </span>
      <p className="text-sm ml-5 text-[#858585] font-lato">{props.p.value}%</p>
    </article>
  );
};

export { TopProducts };
