import { cn } from "~/lib/utils";

export default function AboutMe(
  { children, image }: {
    children: React.ReactNode;
    image?: { url?: string; object?: "contain" | "cover"; width?: number };
  },
) {
  return (
    <div className="flex justify-between h-full w-full gap-16 flex-col lg:flex-row">
      <div className="space-y-4 flex-shrink">
        <h3>About me</h3>

        <div className="text-lg dark:text-white text-justify space-y-6 opacity-75">
          {children}
        </div>
      </div>

      {image && (
        <div
          style={{
            maxWidth: image.width,
          }}
          className="flex-grow flex-shrink-0"
        >
          <img
            src={image.url}
            alt="Profile picture"
            className={cn(
              "rounded-lg",
              image.object === "contain"
                ? "m-auto max-w-full min-h-0 lg:mt-10"
                : "object-cover w-full h-full",
            )}
          />
        </div>
      )}
    </div>
  );
}
