export default function AboutMe(
  { children, imageUrl }: { children: React.ReactNode; imageUrl?: string },
) {
  return (
    <div className="flex justify-between h-full gap-16 flex-col lg:flex-row">
      <div className="space-y-4">
        <h3>About me</h3>

        <div className="text-lg dark:text-white text-justify space-y-6 opacity-75">
          {children}
        </div>
      </div>

      {imageUrl && (
        <div className="flex-grow max-w-sm lg:w-[1200px]">
          <img
            src={imageUrl}
            alt="Profile picture"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      )}
    </div>
  );
}
