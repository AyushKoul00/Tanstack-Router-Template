import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(workspaces)/workspace-requests")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(workspaces)/workspace-requests"!</div>;
}
