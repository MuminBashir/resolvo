"use client";

import { WidgetAuthScreen } from "../screens/widget-auth-screen";

// import { WidgetFooter } from "../components/widget-footer";
// import { WidgetHeader } from "../components/widget-header";

interface Props {
  organizationId: string;
}

export const WidgetView = ({ organizationId }: Props) => {
  return (
    <main className="min-h-screen min-w-screen w-full h-full flex flex-col overflow-hidden border rounded-xl bg-muted">
      <WidgetAuthScreen />
    </main>
  );
};
