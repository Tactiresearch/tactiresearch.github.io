// Si quieres animaciones o efectos de scroll, los pones aquí
console.log("Landing cargada correctamente");

// Esperar a que el DOM esté listo antes de cargar partículas
document.addEventListener("DOMContentLoaded", () => {
  tsParticles.load("tsparticles", {
    background: {
      color: {
        value: "transparent" // Deja ver el fondo animado
      }
    },
    fullScreen: {
      enable: false // Porque el div ya ocupa todo el fondo
    },
    particles: {
      number: {
        value: 60
      },
      color: {
        value: "#ffffff"
      },
      opacity: {
        value: 0.2
      },
      size: {
        value: 2
      },
      move: {
        enable: true,
        speed: 0.8
      },
      links: {
        enable: false
      }
    }
  });
const ctxBar = document.getElementById("barChart").getContext("2d");

new Chart(ctxBar, {
  type: "bar",
  data: {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Clientes Nuevos",
        data: [15, 20, 35, 40, 50, 65],
        backgroundColor: "#38bdf8",
        borderRadius: 6,
      },
      {
        label: "Clientes Recurrentes",
        data: [10, 14, 25, 30, 40, 50],
        backgroundColor: "#9333ea",
        borderRadius: 6,
      }
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#fff",
        },
      },
      tooltip: {
        backgroundColor: "#1f2937",
        titleColor: "#fff",
        bodyColor: "#fff"
      }
    },
    scales: {
      x: {
        ticks: {
          color: "#ccc",
        },
        grid: {
          color: "#333"
        }
      },
      y: {
        ticks: {
          color: "#ccc",
        },
        grid: {
          color: "#333"
        }
      },
    },
  },
});



});
// Animación de entrada al hacer scroll (fade-in)
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
// Cargar partículas en la sección "Cómo lo logramos"
tsParticles.load("particles-how", {
  background: {
    color: { value: "transparent" }
  },
  fullScreen: { enable: false },
  particles: {
    number: { value: 40 },
    color: { value: "#ffffff" },
    opacity: { value: 0.1 },
    size: { value: 2 },
    move: { enable: true, speed: 0.6 },
    links: { enable: false }
  }
});


