interface Props {
  title?: string;
  description?: string;
}

export default function Intro({ title, description }: Props) {
  return (
    <div>
      <img
        alt="Icon"
        height={72}
        className="rounded-full mb-10 dark:border-0 border"
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
