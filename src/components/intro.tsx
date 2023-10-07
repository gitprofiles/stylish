interface Props {
  title?: string;
  description?: string;
  imageUrl?: string;
}

export default function Intro({ title, description, imageUrl }: Props) {
  return (
    <div>
      <img
        alt="Icon"
        src={imageUrl}
        height={72}
        width={72}
        className="rounded-full mb-10 dark:border-0 border flex justify-center items-center text-sm"
      />

      {title && <h2>{title}</h2>}

      {description && (
        <p className="text-lg mt-6 leading-8 max-w-2xl opacity-75">
          {description}
        </p>
      )}
    </div>
  );
}
