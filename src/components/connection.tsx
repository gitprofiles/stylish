import { Button, type ButtonProps } from "~/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

interface GenericConnection {
  href?: string;
  variant?: ButtonProps["variant"];
}

interface TextConnection extends GenericConnection {
  name: string;
}

interface IconConnection extends GenericConnection {
  icon: {
    pack: IconPrefix | string;
    name: IconName | string;
  };
}

interface Props {
  connection: TextConnection | IconConnection;
}

export default function Connection({ connection }: Props) {
  const type = "name" in connection ? "button" : "icon";

  return type === "button" ? (
    <a href={connection.href} target="_blank">
      <Button size="default" variant={connection.variant}>
        {(connection as TextConnection).name}
      </Button>
    </a>
  ) : (
    <a
      className="inline-flex items-center rounded-lg text-base font-medium"
      href={connection.href}
      target="_blank"
    >
      <Button variant={connection.variant || "ghost"} size="icon">
        <FontAwesomeIcon
          className="h-6 w-6"
          icon={[
            (connection as IconConnection).icon.pack as IconPrefix,
            (connection as IconConnection).icon.name as IconName,
          ]}
        />
      </Button>
    </a>
  );
}
