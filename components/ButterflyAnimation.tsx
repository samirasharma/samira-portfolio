'use client';

import { useEffect, useRef } from 'react';

const ButterflyAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      time += 0.02;
      
      // Vertical floating motion
      const verticalFloat = Math.sin(time) * 15;
      
      // Wing flap animation
      const flap = Math.sin(time * 3) * 0.3;
      
      ctx.save();
      ctx.translate(centerX, centerY + verticalFloat);
      
      // Scale up the butterfly (1.5x bigger)
      ctx.scale(1.5, 1.5);
      
      // Left wing
      ctx.save();
      ctx.rotate(flap);
      ctx.beginPath();
      ctx.moveTo(-5, 0);
      ctx.bezierCurveTo(-40, -30, -50, -20, -45, 5);
      ctx.bezierCurveTo(-50, 20, -35, 25, -5, 10);
      ctx.closePath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.fillStyle = 'rgba(100, 255, 218, 0.1)';
      ctx.fill();
      ctx.restore();
      
      // Right wing
      ctx.save();
      ctx.rotate(-flap);
      ctx.beginPath();
      ctx.moveTo(5, 0);
      ctx.bezierCurveTo(40, -30, 50, -20, 45, 5);
      ctx.bezierCurveTo(50, 20, 35, 25, 5, 10);
      ctx.closePath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.fillStyle = 'rgba(100, 255, 218, 0.1)';
      ctx.fill();
      ctx.restore();
      
      // Body
      ctx.beginPath();
      ctx.ellipse(0, 5, 4, 18, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fill();
      
      // Antennae
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, -10);
      ctx.lineTo(-3, -18);
      ctx.moveTo(0, -10);
      ctx.lineTo(3, -18);
      ctx.stroke();
      
      // Dots on antennae
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.beginPath();
      ctx.arc(-3, -18, 2, 0, Math.PI * 2);
      ctx.arc(3, -18, 2, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={200}
      style={{ display: 'block' }}
    />
  );
};

export default ButterflyAnimation;
