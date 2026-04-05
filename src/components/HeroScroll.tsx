"use client";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";

const FRAME_COUNT = 120; // Exact number of frames in public/sequence
const BG_COLOR = "#121212";

export default function HeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Use a spring to smooth out the discrete mouse wheel scroll jumps
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const currentIndexRef = useRef(0);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Ensure file names match: ezgif-frame-001.png to ezgif-frame-120.png
      const frameNumber = (i + 1).toString().padStart(3, '0');
      img.src = `/sequence/ezgif-frame-${frameNumber}.png`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          // Initial draw
          requestAnimationFrame(() => drawImage(loadedImages[0]));
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const drawImage = (img: HTMLImageElement) => {
    if (!canvasRef.current || !img) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Use actual dimensions for high DPI displays if needed, but for smooth 
    // performance and correct sizing, window dimensions are fine.
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Object-fit: cover logic
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    // Draw background color first
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw scaled image
    ctx.drawImage(
      img,
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  };

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      if (images.length === 0) return;
      const index = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(latest * FRAME_COUNT))
      );
      if (index !== currentIndexRef.current) {
        currentIndexRef.current = index;
        requestAnimationFrame(() => drawImage(images[index]));
      }
    });

    return () => unsubscribe();
  }, [images, smoothProgress]);

  useEffect(() => {
    const handleResize = () => {
      if (images[currentIndexRef.current]) {
        requestAnimationFrame(() => drawImage(images[currentIndexRef.current]));
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images]);

  // --- Scroll Overlay Texts Logic ---
  // We break scroll 0->1 into sections.
  
  // Section 1: "My Name. Creative Developer." (Center)
  const opacity1 = useTransform(smoothProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(smoothProgress, [0, 0.25], [0, -100]);
  const scale1 = useTransform(smoothProgress, [0, 0.25], [1, 0.95]);

  // Section 2: "I build digital experiences." (Left aligned)
  const opacity2 = useTransform(smoothProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(smoothProgress, [0.35, 0.55], [0, -50]);

  // Section 3: "Bridging design and engineering." (Right aligned)
  const opacity3 = useTransform(smoothProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(smoothProgress, [0.65, 0.85], [0, -50]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full" style={{ backgroundColor: BG_COLOR }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* The Frame Canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full block" 
        />
        
        {/* Dark overlay gradient to make text legible if images are bright */}
        <div className="absolute inset-0 bg-black/40 z-[5] mix-blend-multiply pointer-events-none" />
        
        {/* Parallax Overlay Texts */}
        <div className="absolute inset-0 max-w-[1400px] mx-auto px-6 md:px-12 pointer-events-none flex flex-col justify-center z-10">
          
          {/* Section 1 */}
          <motion.div style={{ opacity: opacity1, y: y1, scale: scale1 }} className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter text-white/90 drop-shadow-xl mb-4">
              Arjun Singh.<br/>
              <span className="text-zinc-400 font-medium text-3xl md:text-5xl">Full Stack Developer</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mt-2 tracking-wide">
              React / Next.js / Node.js<br/>
              Chandigarh, India
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute inset-0 flex flex-col items-start justify-center w-full md:w-2/3 lg:w-1/2">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white/90 leading-tight drop-shadow-xl mb-6">
              Summary
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl xl:text-2xl leading-relaxed max-w-2xl">
              Full Stack Developer with 4+ years of experience in React.js, Next.js, Node.js, TypeScript, MongoDB, Redis, and AWS. Skilled in scalable API development, microservices, caching, system design, and performance optimization.
            </p>
          </motion.div>

          {/* Section 3 */}
          <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute inset-0 flex flex-col items-end justify-center text-right w-full ml-auto md:w-2/3 lg:w-1/2 pointer-events-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white/90 leading-tight drop-shadow-xl mb-6">
              Contact
            </h2>
            <div className="text-zinc-400 text-lg md:text-xl xl:text-2xl space-y-2 mb-8">
              <p className="hover:text-white transition-colors cursor-pointer">+91-8146260465</p>
              <p className="hover:text-white transition-colors cursor-pointer">arjunsingh814260@gmail.com</p>
              <p className="hover:text-white transition-colors cursor-pointer text-sm md:text-base mt-2 text-purple-400/80">
                Remote | Gurgaon | Bangalore | Pune | Hyderabad
              </p>
            </div>
            
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full overflow-hidden hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <span className="text-white font-medium tracking-wide z-10">Download Resume</span>
              <Download className="w-5 h-5 text-white/80 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300 z-10" />
            </a>
          </motion.div>
        
        </div>
      </div>
    </div>
  );
}
