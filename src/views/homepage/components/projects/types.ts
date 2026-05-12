export type ProjectType = {
  title: string;
  description: {
    [key: string]: string;
  };
  technologies: string[];
  codeUrl?: string;
  image?: string;
  demoUrl?: string;
};
