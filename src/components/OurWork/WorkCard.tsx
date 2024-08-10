interface WorkCardTsxProps {
  image: string;
  title: string;
  url: string;
}
export default function WorkCard({ image, title, url }: WorkCardTsxProps) {
  const goToProject = () => {
    window.open(url, "_blank");
  };
  return (
    <div onClick={() => goToProject()} className="back">
      <img style={{ objectFit: "contain" }} src={image} alt="work imag" />
      <div style={{ background: "transparent" }} className="absult">
        <h1>{title}</h1>
        <p>We&apos;re all about taking your business to the next level. </p>
      </div>
    </div>
  );
}
