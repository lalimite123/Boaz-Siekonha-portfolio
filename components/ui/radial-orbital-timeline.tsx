"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap, ListChecks, Settings, GitBranch, Rocket, Server, Globe, Database, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: string;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  className?: string;
  height?: number;
  backgroundClass?: string;
}

export default function RadialOrbitalTimeline({
  timelineData,
  className,
  height,
  backgroundClass,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const iconMap: Record<string, React.ElementType> = {
    listChecks: ListChecks,
    settings: Settings,
    gitBranch: GitBranch,
    rocket: Rocket,
    server: Server,
    globe: Globe,
    database: Database,
    shield: Shield,
  };

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp: number | null = null;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (autoRotate) {
        setRotationAngle((prev) => {
          const rotationSpeed = 0.018;
          const newAngle = (prev + rotationSpeed * deltaTime) % 360;
          return newAngle;
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    if (!nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 220;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.3, Math.min(1, 0.3 + 0.7 * ((1 + Math.sin(radian)) / 2)));
    const scale = Math.max(0.7, Math.min(1, 0.7 + 0.3 * ((1 + Math.sin(radian)) / 2)));

    return { x, y, angle, zIndex, opacity, scale };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-400/50";
      case "in-progress":
        return "bg-blue-500/20 text-blue-300 border-blue-400/50";
      case "pending":
        return "bg-slate-500/20 text-slate-300 border-slate-400/50";
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-400/50";
    }
  };

  return (
    <div
      className={`w-full flex flex-col items-center justify-center ${backgroundClass ?? "bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900"} overflow-hidden ${className ?? ""}`}
      style={height ? { height: `${height}px` } : { minHeight: "100vh" }}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative w-full max-w-5xl h-full flex items-center justify-center px-4 py-8">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1200px",
          }}
        >
          {/* Central core */}
          <div className="absolute flex items-center justify-center z-20">
            <div className="relative">
              {/* Outer glow rings */}
              <div className="absolute inset-0 w-24 h-24 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <div className="absolute inset-0 rounded-full border border-purple-400/30 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border border-blue-400/30 animate-ping" style={{ animationDelay: "0.5s", animationDuration: "2s" }}></div>
                <div className="absolute inset-0 rounded-full border border-teal-400/20 animate-ping" style={{ animationDelay: "1s", animationDuration: "2.5s" }}></div>
              </div>

              {/* Core sphere */}
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 shadow-2xl shadow-purple-500/50 animate-pulse">
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Orbit rings */}
          <div className="absolute w-[440px] h-[440px] rounded-full border border-white/5"></div>
          <div className="absolute w-[480px] h-[480px] rounded-full border border-white/3"></div>

          {/* Timeline nodes */}
          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = iconMap[item.icon] || Zap;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px) scale(${isExpanded ? 1 : position.scale})`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-opacity duration-700 cursor-pointer will-change-transform"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Energy aura */}
                <div
                  className={`absolute rounded-full -inset-2 ${
                    isPulsing ? "animate-pulse" : ""
                  } transition-all duration-500`}
                  style={{
                    background: isExpanded
                      ? `radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0) 70%)`
                      : isRelated
                      ? `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0) 70%)`
                      : `radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * 0.4 + 50}px`,
                    height: `${item.energy * 0.4 + 50}px`,
                    left: `-${(item.energy * 0.4 + 50 - 48) / 2}px`,
                    top: `-${(item.energy * 0.4 + 50 - 48) / 2}px`,
                  }}
                ></div>

                {/* Node circle */}
                <div
                  className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  backdrop-blur-md transition-all duration-500 transform
                  ${isExpanded ? "scale-125 shadow-2xl" : ""}
                  ${
                    isExpanded
                      ? "bg-gradient-to-br from-purple-500 to-blue-600 text-white shadow-purple-500/50"
                      : isRelated
                      ? "bg-gradient-to-br from-blue-400/80 to-purple-400/80 text-white animate-pulse"
                      : "bg-slate-900/80 text-slate-200 hover:bg-slate-800/90"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-white"
                      : isRelated
                      ? "border-blue-300"
                      : "border-white/20 hover:border-white/40"
                  }
                `}
                >
                  <Icon size={20} strokeWidth={2.5} />
                </div>

                {/* Node label */}
                <div
                  className={`
                  absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap
                  px-3 py-1 rounded-full backdrop-blur-md
                  text-xs font-bold tracking-wide uppercase
                  transition-all duration-500
                  ${
                    isExpanded
                      ? "bg-purple-500/30 text-white scale-110 shadow-lg"
                      : "bg-slate-900/50 text-slate-300"
                  }
                `}
                >
                  {item.title}
                </div>

                {/* Expanded card */}
                {isExpanded && (
                  <Card className="absolute top-24 left-1/2 -translate-x-1/2 w-80 bg-slate-900/95 backdrop-blur-xl border-purple-400/30 shadow-2xl shadow-purple-500/20 overflow-visible animate-in fade-in zoom-in duration-300">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-px h-4 bg-gradient-to-b from-purple-400 to-transparent"></div>
                    
                    <CardHeader className="pb-3 space-y-3">
                      <div className="flex justify-between items-center gap-2">
                        <Badge className={`px-3 py-1 text-xs font-bold uppercase ${getStatusStyles(item.status)}`}>
                          {item.status === "completed" ? "✓ Complete" : item.status === "in-progress" ? "◐ In Progress" : "○ Pending"}
                        </Badge>
                        <span className="text-xs font-mono text-slate-400 bg-slate-800/50 px-2 py-1 rounded">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-base text-white font-bold">
                        {item.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-slate-300 leading-relaxed">{item.content}</p>

                      {/* Energy level */}
                      <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                        <div className="flex justify-between items-center text-xs mb-2">
                          <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                            <Zap size={14} className="text-yellow-400" />
                            Energy Level
                          </span>
                          <span className="font-mono font-bold text-purple-400">{item.energy}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 rounded-full transition-all duration-1000 shadow-lg shadow-purple-500/50"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Related nodes */}
                      {item.relatedIds.length > 0 && (
                        <div className="p-3 rounded-lg bg-slate-800/30 border border-slate-700/30">
                          <div className="flex items-center gap-1.5 mb-3">
                            <Link size={14} className="text-blue-400" />
                            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-300">
                              Connected Nodes
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find((i) => i.id === relatedId);
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="h-7 px-3 text-xs font-medium bg-slate-800/50 border-slate-600/50 text-slate-300 hover:bg-slate-700/70 hover:text-white hover:border-purple-400/50 transition-all duration-300"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={12} className="ml-1.5" />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}