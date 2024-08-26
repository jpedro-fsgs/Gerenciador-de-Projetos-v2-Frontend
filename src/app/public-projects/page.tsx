import ProjectCard from "./components/ProjectCard";

export interface PublicProjectInterface {
  id: number;
  nome: string;
  descricao: string;
  link: string;
  criacao: string;
  prazo: string;
  is_concluido: boolean;
  usuario: string;
  usuario_id: number;
}

export default async function PublicProjects() {
  let data = await fetch("http://localhost:2930/api/projetos/");
  let projects = await data.json();
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center">
      {projects.map((project: PublicProjectInterface) => (
        <ProjectCard key={project.id} project={project}/>
      ))}
    </div>
  );
}
