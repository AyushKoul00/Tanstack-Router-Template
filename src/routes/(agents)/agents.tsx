import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(agents)/agents")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(agents)/agents"!</div>;
}
