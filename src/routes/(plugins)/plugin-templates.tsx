import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(plugins)/plugin-templates")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(plugins)/plugin-templates"!</div>;
}
