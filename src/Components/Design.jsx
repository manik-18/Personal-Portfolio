import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Design = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
                // mode: "grab",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              // grab:{
              //   distance:300,
              //   link_linked:{
              //     opacity: 0.5,
              //   }
              // },
            },
          },
          particles: {
            color: {
              value: ["#ffffff", "#ff0000", "#00ff00", "#0000ff"], // Add multiple particle colors here
            },
            links: {
              enable: false, // Disable the links (lines)
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 6 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Design;
