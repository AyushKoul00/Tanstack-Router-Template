import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(workspaces)/add-new-workspace")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(workspaces)/add-workspace"!</div>;
}
