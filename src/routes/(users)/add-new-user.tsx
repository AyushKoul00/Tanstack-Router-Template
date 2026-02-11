import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(users)/add-new-user")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(users)/add-user"!</div>;
}
