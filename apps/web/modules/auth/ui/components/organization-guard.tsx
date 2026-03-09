"use client";

import { OrgSelectionView } from "../views/org-selection-view";
import { AuthGuard } from "./auth-guard";
import { useOrganization } from "@clerk/nextjs";

export const OrganizationGuard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { organization } = useOrganization();

  if (!organization) {
    return (
      <AuthGuard>
        <OrgSelectionView />
      </AuthGuard>
    );
  }

  return <>{children}</>;
};
