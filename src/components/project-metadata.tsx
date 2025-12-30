import { Typography } from "@/components/ui/typography";
import type { ProjectMetadata } from "@/types/portfolio";

interface ProjectMetadataProps {
  metadata: ProjectMetadata;
}

/**
 * Displays project metadata in a grid layout.
 * Shows timeline, role, team, and status information.
 */
export function ProjectMetadata({ metadata }: ProjectMetadataProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-border">
      {metadata.timeline && (
        <div>
          <Typography
            variant="bodySm"
            className="text-muted-foreground mb-1"
          >
            Timeline
          </Typography>
          <Typography variant="body" className="font-medium">
            {metadata.timeline}
          </Typography>
        </div>
      )}
      {metadata.role && (
        <div>
          <Typography
            variant="bodySm"
            className="text-muted-foreground mb-1"
          >
            Role
          </Typography>
          <Typography variant="body" className="font-medium">
            {metadata.role}
          </Typography>
        </div>
      )}
      {metadata.team && (
        <div>
          <Typography
            variant="bodySm"
            className="text-muted-foreground mb-1"
          >
            Team
          </Typography>
          <Typography variant="body" className="font-medium">
            {metadata.team}
          </Typography>
        </div>
      )}
      {metadata.status && (
        <div>
          <Typography
            variant="bodySm"
            className="text-muted-foreground mb-1"
          >
            Status
          </Typography>
          <Typography variant="body" className="font-medium">
            {metadata.status}
          </Typography>
        </div>
      )}
    </div>
  );
}

