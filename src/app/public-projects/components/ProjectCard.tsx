import { PublicProjectInterface } from "../page";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectCard({
  project,
}: {
  project: PublicProjectInterface;
}) {
  return (
    <Card className="w-64">
      <CardHeader>
        <CardTitle className="text-center">{project.nome}</CardTitle>
        <CardDescription>{project.descricao}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{project.descricao}</p>
      </CardContent>
      <CardFooter>
        <p>{project.prazo}</p>
      </CardFooter>
    </Card>
  );
}
