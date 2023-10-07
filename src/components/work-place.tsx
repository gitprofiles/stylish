import { useMemo } from "react";
import { cn } from "~/lib/utils";

interface Props {
  role: string;
  company: string;
  location: string;
  timePeriod: string;
  description: string;
  index?: number;
  total?: number;
  active?: boolean;
}

export default function WorkPlace(props: Props) {
  const {
    role,
    index = 0,
    active,
    total = 1,
    company,
    location,
    timePeriod,
    description,
  } = props;

  const hasMultiple = useMemo(() => total > 1, [total]);
  const isLast = useMemo(
    () => hasMultiple && index === total - 1,
    [index, total]
  );
  const isFirst = useMemo(() => hasMultiple && index === 0, [total, index]);
  const isMiddle = useMemo(
    () => hasMultiple && !isFirst && !isLast,
    [total, index]
  );

  return (
    <div className="flex gap-6 md:gap-12 relative">
      <div
        className={cn(
          "flex-grow min-w-[3px] max-w-[3px] flex justify-center items-start",
          !isLast &&
            (active
              ? "from-primary-300 to-neutral-100 dark:from-primary-900 dark:to-neutral-800 bg-gradient-to-b"
              : "dark:bg-neutral-800 bg-neutral-100")
        )}
      >
        <div
          className={cn(
            "h-6 w-6 absolute rounded-full grid place-content-center",
            active
              ? "bg-primary-300 dark:bg-primary-900"
              : "dark:bg-neutral-800 bg-neutral-200"
          )}
        >
          <div
            className={cn([
              "h-3 w-3 rounded-full",
              active
                ? "bg-primary-400 dark:bg-primary-500"
                : "dark:bg-neutral-700 bg-neutral-300",
            ])}
          />
        </div>
      </div>
      <div className={cn((isMiddle || isFirst) && "pb-20")}>
        <h5 className="font-mono font-normal text-sm sm:text-base md:text-lg mt-[.1rem] uppercase md:-mt-[.1rem] mb-3 opacity-80">
          {timePeriod} <span className="opacity-50 mx-3">•</span> {location}
        </h5>
        <div className="md:block hidden">
          <h3 className="font-normal">
            <span className="font-bold">{company} / </span> {role}
          </h3>
        </div>
        <div className="md:hidden">
          <h3 className="font-normal">
            <span className="font-bold">{company}</span>
          </h3>
          <h3 className="font-normal">{role}</h3>
        </div>
        <div className="space-y-2 max-w-2xl opacity-60 font-medium pt-6">
          {description.split("\n").map((desc) => (
            <p>{desc}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
