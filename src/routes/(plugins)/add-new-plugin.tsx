import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(plugins)/add-new-plugin")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(plugins)/add-new-plugin"!</div>;
}
