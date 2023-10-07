import Intro from "../components/intro";
import Connection from "./connection";
import type { ConnectionProps } from "../components/connection";

export default function Hero({
  connections,
  description,
  title,
  imageUrl,
}: {
  connections: ConnectionProps["connection"][];
  description: string;
  title: string;
  imageUrl: string;
}) {
  return (
    <div className="space-y-5">
      <Intro imageUrl={imageUrl} description={description} title={title} />
      <div className="flex gap-4 items-center">
        {connections.map((connection) => (
          <Connection connection={connection} />
        ))}
      </div>
    </div>
  );
}
