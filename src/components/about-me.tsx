export default function AboutMe({ children }: { children: React.ReactNode }) {
  return (
    <div class="flex justify-between h-full items-center lg:items-start gap-16 flex-col lg:flex-row">
      <div class="space-y-4">
        <h3>About me</h3>

        <div class="text-lg dark:text-white text-justify space-y-6">
          {children}
        </div>
      </div>

      <div className="flex-shrink-0 flex-grow h-full lg:w-[38%] md:w-3/4 w-full">
        <img
          src="https://picsum.photos/600/600"
          alt="Profile picture"
          className="rounded-lg object-cover h-full w-full max-h-[300px]"
        />
      </div>
    </div>
  );
}
