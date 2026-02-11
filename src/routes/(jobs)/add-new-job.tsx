import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(jobs)/add-new-job")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(jobs)/add-job"!</div>;
}
