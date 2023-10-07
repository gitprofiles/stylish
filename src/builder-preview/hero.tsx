import Intro from "~/components/intro";
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
    <div class="space-y-5">
      <Intro description={description} title={`Hi, I'm ${name}.`} />
      <div class="flex gap-5 items-center">
        {connections.map((connection) => (
          <Connection connection={connection} />
        ))}
      </div>
    </div>
  );
}
