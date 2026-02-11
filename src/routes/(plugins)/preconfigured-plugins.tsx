import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(plugins)/preconfigured-plugins")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(plugins)/preconfigured-plugins"!</div>;
}
