import Intro from "../components/intro";
import Connection from "./connection";
import type { ConnectionProps } from "../components/connection";

export default function Hero({
  connections,
  description,
  name,
}: {
  connections: ConnectionProps["connection"][];
  description: string;
  name: string;
}) {
  return (
    <div className="space-y-5">
      <Intro description={description} title={`Hi, I'm ${name}.`} />
      <div className="flex gap-4 items-center">
        {connections.map((connection) => (
          <Connection connection={connection} />
        ))}
      </div>
    </div>
  );
}
