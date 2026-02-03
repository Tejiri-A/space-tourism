type Props = {
  number: "01" | "02" | "03";
  title: string;
};

function PageTitle({ number, title }: Props) {
  return (
    <div
      className={
        "flex w-full items-center justify-center gap-x-300 md:justify-start"
      }
    >
      <span
        className={
          "font-family-condensed text-base font-bold tracking-[0.15] text-white/25 md:text-xl lg:text-[1.75rem]"
        }
      >
        {number}
      </span>
      <span className={"subheading-1 md:heading-5 text-white"}>{title}</span>
    </div>
  );
}

export default PageTitle;
