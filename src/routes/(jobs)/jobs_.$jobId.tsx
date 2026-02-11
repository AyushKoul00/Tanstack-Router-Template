import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(jobs)/jobs_/$jobId")({
	component: RouteComponent,
});

function RouteComponent() {
	const { jobId } = Route.useParams();
	return <div>Hello "/(jobs)/jobs_/$jobId"! jobId = {jobId}</div>;
}
