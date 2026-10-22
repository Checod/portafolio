"use client"

import { ReactNode, useEffect, useState } from "react";
import { VT323 } from "next/font/google";


interface TypingLineProps {
  children: ReactNode;
  delay?: number;       // El signo '?' lo hace opcional
  className?: string;
  prefix?: string
}

const terminalFont = VT323({
  weight: "400",
  style: "normal"
});

function TypingLine({ children, delay = 0, className = "", prefix }: TypingLineProps) {
  const [started, setStarted] = useState<boolean>(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  if (!started) return null;

  return (
    <pre data-prefix={prefix} className={`text-[16px] ${className} ${terminalFont.className}`}>
      <code className={` ${terminalFont.className}`}>
        {children}
      </code>
    </pre>
    
  );
}

export default function Terminal(props: {
    tech: string[]; skills: string[]; 
}) {
    return (
        <div className={`mockup-code w-full w-1/6 min-w-0 h-[620px] md:h-[550]`} >
            <TypingLine delay={0} prefix="$">install dev --person sergio</TypingLine>
            
            <TypingLine delay={1000} prefix=">" className="text-warning">loading person...</TypingLine>
            
            <TypingLine delay={2000} prefix=">" className="text-success">Done!</TypingLine>
            
            <TypingLine delay={3000} prefix="$">load sergio --skills</TypingLine>
            
            <TypingLine delay={4000} prefix=">" className="text-warning">loading skills...</TypingLine>
            
            <TypingLine delay={5000} prefix=">" className="text-warning w-full text-wrap">
                {props.skills.map((skill, i) => {
                if (i % 3 === 0 && i !== 0)
                    return <span key={i}><br />       {skill} </span>;
                return `${skill} `;
                })}
            </TypingLine>
            
            <TypingLine delay={6000} prefix=">" className="text-success">Done skills!</TypingLine>
                
            <TypingLine delay={7000} prefix="$">load sergio --techstacks</TypingLine>

            <TypingLine delay={8000} prefix=">" className="text-warning">loading technologies...</TypingLine>
            
            <TypingLine delay={9000} prefix=">" className="text-warning w-full text-wrap">
                {props.tech.map((t, i) => {
                if (i % 5 === 0 && i !== 0)
                    return <span key={i}><br />       {t} </span>;
                return `${t} `;
                })}
            </TypingLine>
            
            <TypingLine delay={10000} prefix=">" className="text-success">Done technologies!</TypingLine>

            <TypingLine delay={11000} prefix=">" className="text-success">READY for development!</TypingLine>
        </div> 
    )
}