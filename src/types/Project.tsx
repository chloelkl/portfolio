export type ProjectData = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  skills: string[];

  link?: string;
  layout: {
    left: string;
    top: string;
    width: string;
    height: string;
    borderRadius?: string;
  };
  gridSize: {
    md: number;
    lg: number;
  }
};

export type ProjectProps = {
  project: ProjectData;

  frameSrc: string;
  thumbnailSrc: string;

  onClick?: () => void;
};