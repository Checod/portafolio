
import Profile from "./(components)/profile/profile";
import Terminal from "./(components)/Terminal/terminal";


export default function Home() {
  const skills = [
    'Abstract Analysis',
    'Enthusiastic Developer',
    'Proactive Developer',
    'Cloud Developer',
    'FullStack Developer',
    'Software Developer',
    'Back-End Developer',
    'Front-End Developer',
    'Marketing Developer',
    'more ...'
  ];

  const tech = [
    'JavaScript',
    'NodeJS',
    'NextJS',
    'Angular',
    'NestJS',
    'ExpressJS',
    'Java',
    'Spring Boot',
    'Hibernate',
    'Mongo DB',
    'MySQL',
    'PostgreSQL',
    'Grafana',
    'Visual Studio',
    'IntelliJ',
    'Python',
    'Databricks',
    'DataFactory',
    'Amazon Web Services (AWS)',
    'Microsoft Azure',
    'Google Analytics',
    'E-Commerce',
    'TailwindCSS',
    'CSS',
    'HTML',
    'more...'
  ];

  return (
    <div className="pt-20 md:pt-0 hero h-full md:h-screen bg-base-200">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse w-full max-w-6xl justify-between gap-4">
        <Terminal skills={skills} tech={tech} />
        <Profile />
      </div>
    </div>
  );
}
