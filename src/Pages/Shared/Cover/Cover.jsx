import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -40, max: 30 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={200}
    >
      <div
        className="hero h-[700px]"
        
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl bg-opacity-40 bg-black p-16">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolor tempora cum! Odio, asperiores veniam?</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
