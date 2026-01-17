import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row text-red-50">
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline">
          Send
        </Button>
        <Button size="icon-sm" aria-label="Submit" variant="outline">
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
