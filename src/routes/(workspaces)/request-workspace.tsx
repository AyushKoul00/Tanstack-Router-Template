import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(workspaces)/request-workspace")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(workspaces)/request-workspace"!</div>;
}
