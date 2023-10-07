import { twMerge } from "tailwind-merge";
import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

interface Props {
  author: string;
  name: string;
  description?: string;
  buttons?: Array<
    | { href: string; name: string }
    | { href: string; icon: { pack: string; name: string } }
  >;
  usingWrapper?: boolean;
}

export default function DetailedProject({
  author,
  buttons = [],
  description,
  name,
  usingWrapper,
}: Props) {
  let iconButtons = useMemo(
    () =>
      buttons.filter((button) => "icon" in button) as Array<{
        href: string;
        icon: { pack: string; name: string };
      }>,
    [buttons]
  );

  let textButtons = useMemo(
    () =>
      buttons.filter((button) => !("icon" in button)) as Array<{
        href: string;
        name: string;
      }>,
    [buttons]
  );

  const Component = (
    <div className="rounded-[10px] py-3 px-4 bg-white/75 dark:bg-black/75">
      <div className="flex gap-2 items-center mb-1 opacity-70">
        <FontAwesomeIcon className="h-4" icon={"at"} />
        <p className="font-semibold">{author}</p>
      </div>
      <span className="font-semibold text-xl">{name}</span>
      {description && (
        <p className="text-lg pt-2 font-semibold opacity-60">{description}</p>
      )}

      {buttons.length > 0 && (
        <div className="flex justify-between mt-4">
          {textButtons.length > 0 && (
            <div className="flex gap-2">
              {textButtons.map((button, index) => (
                <a
                  className={twMerge(
                    [
                      "inline-flex items-center px-3 py-1.5 rounded-lg text-base font-medium dark:bg-white/10 dark:hover:bg-white/20 dark:text-white bg-black/10 hover:bg-black/20 text-black transition-colors",
                      index === 0 && "rounded-r",
                      index === textButtons.length - 1 && "rounded-l",
                      index !== 0 &&
                        index !== textButtons.length - 1 &&
                        "rounded",
                      textButtons.length === 1 && "rounded-lg",
                    ].join(" ")
                  )}
                  href={button.href}
                  target="_blank"
                >
                  {button.name}
                </a>
              ))}
            </div>
          )}

          <div className="flex gap-4 p-1">
            {iconButtons.map((button) => (
              <a
                className="inline-flex items-center rounded-lg text-base font-medium dark:text-white text-black transition-opacity opacity-90 hover:opacity-70"
                href={button.href}
                target="_blank"
              >
                <FontAwesomeIcon
                  className="h-6"
                  icon={[
                    button.icon.pack as IconPrefix,
                    button.icon.name as IconName,
                  ]}
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return usingWrapper ? (
    Component
  ) : (
    <div className="rounded-xl p-[2px] overflow-hidden bg-gradient-to-br from-primary-500 to-secondary-500">
      {Component}
    </div>
  );
}
