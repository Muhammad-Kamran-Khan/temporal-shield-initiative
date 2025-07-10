import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Float, Environment, PresentationControls } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Zap, RefreshCw, X, Info, Dna, Atom } from "lucide-react";

// 3D Capsule Component
const Capsule3D = ({ position, color, isSelected, onClick, phase }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      if (hovered) {
        meshRef.current.scale.setScalar(1.1);
      } else {
        meshRef.current.scale.setScalar(isSelected ? 1.05 : 1);
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <mesh
          ref={meshRef}
          onClick={onClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          style={{ cursor: 'pointer' }}
        >
          {/* Capsule Body */}
          <capsuleGeometry args={[0.5, 1.5, 4, 8]} />
          <meshStandardMaterial 
            color={color}
            metalness={0.3}
            roughness={0.2}
            emissive={isSelected ? color : '#000000'}
            emissiveIntensity={isSelected ? 0.2 : 0}
          />
        </mesh>
        
        {/* Floating Text */}
        <Text
          position={[0, 2, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
        >
          {phase}
        </Text>
        
        {/* Glow Effect */}
        {isSelected && (
          <mesh>
            <capsuleGeometry args={[0.6, 1.6, 4, 8]} />
            <meshStandardMaterial 
              color={color}
              transparent
              opacity={0.3}
              emissive={color}
              emissiveIntensity={0.5}
            />
          </mesh>
        )}
      </group>
    </Float>
  );
};

// 3D Scene Component
const CapsuleScene = ({ selectedCapsule, onCapsuleClick }) => {
  const pills = [
    { id: 0, position: [-3, 0, 0], color: "#3b82f6", phase: "Pre-Exposure" },
    { id: 1, position: [0, 0, 0], color: "#10b981", phase: "During Exposure" },
    { id: 2, position: [3, 0, 0], color: "#8b5cf6", phase: "Post-Exposure" }
  ];

  return (
    <>
      <Environment preset="studio" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
      
      {pills.map((pill) => (
        <Capsule3D
          key={pill.id}
          position={pill.position}
          color={pill.color}
          phase={pill.phase}
          isSelected={selectedCapsule === pill.id}
          onClick={() => onCapsuleClick(pill.id)}
        />
      ))}
      
      <OrbitControls 
        enablePan={false}
        enableZoom={true}
        maxPolarAngle={Math.PI / 2}
        minDistance={5}
        maxDistance={15}
      />
    </>
  );
};

const Interactive3DSolution = () => {
  const [selectedCapsule, setSelectedCapsule] = useState(null);

  const pills = [
    {
      id: 0,
      phase: "Pre-Exposure",
      name: "Sentinel Pill",
      icon: Shield,
      color: "blue",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      description: "Preconditions biological systems by enhancing endogenous radioprotective pathways",
      keyFeatures: [
        "Nano-encapsulated antioxidants (amifostine derivatives, glutathione mimetics)",
        "Epigenetic primers using CRISPRa technology",
        "Targeted delivery to bone marrow, GI tract, and neuronal tissue",
        "Upregulation of DNA repair genes (TP53, ATM, BRCA1)"
      ],
      mechanism: "Creates transient cellular resilience through antioxidant saturation and DNA repair pathway activation",
      visualElements: "Molecular shields protecting DNA structures"
    },
    {
      id: 1,
      phase: "During Exposure",
      name: "Aegis Pill", 
      icon: Zap,
      color: "green",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      description: "Provides real-time radiomitigation during exposure with immediate protective deployment",
      keyFeatures: [
        "Synthetic DNA repair enzymes (photolyases, glycosylases)",
        "Quantum dot-mediated ROS sensors with responsive release",
        "Self-assembling peptide hydrogels for isotope binding",
        "Real-time biomarker detection and payload activation"
      ],
      mechanism: "Triggered release upon radiation exposure, deploying enzymes and radical scavengers in real-time",
      visualElements: "Real-time cellular repair and ROS neutralization"
    },
    {
      id: 2,
      phase: "Post-Exposure",
      name: "Purge Pill",
      icon: RefreshCw,
      color: "purple",
      bgColor: "bg-purple-500/10", 
      borderColor: "border-purple-500/20",
      description: "Facilitates systemic chelation and promotes intracellular repair and immunomodulation",
      keyFeatures: [
        "Chelating nanopolymers for isotope binding (Cs-137, Sr-90, I-131)",
        "Microbiota-responsive release mechanisms",
        "Postbiotic repair factors (butyrate, NAD+ boosters)",
        "Mitochondrial recovery and anti-inflammatory response"
      ],
      mechanism: "Systemic and local detoxification with tissue regeneration through metabolic enhancement",
      visualElements: "Cellular detoxification and regeneration processes"
    }
  ];

  const innovations = [
    {
      icon: Dna,
      title: "Nanotechnology Integration",
      description: "Advanced nanocarriers for targeted delivery and controlled release",
      detail: "Utilizing PLGA nanoparticles, PEGylated liposomes, and quantum dots for precision targeting"
    },
    {
      icon: Atom,
      title: "Synthetic Biology",
      description: "Engineered biological systems for enhanced radioprotection",
      detail: "CRISPRa systems, synthetic enzymes, and bioengineered repair mechanisms"
    },
    {
      icon: Zap,
      title: "Temporal Coordination",
      description: "Time-phased approach matching biological response patterns",
      detail: "Synchronized delivery systems responding to radiation exposure stages"
    }
  ];

  const selectedPill = pills.find(p => p.id === selectedCapsule);

  return (
    <section id="solution" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
              Interactive 3D Solution
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Revolutionary</span> Three-Phase Protection
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Experience our breakthrough pharmaceutical system in 3D. Click on each capsule to explore 
              how nanotechnology and synthetic biology create unprecedented radiation protection.
            </p>
          </motion.div>

          {/* 3D Canvas */}
          <motion.div 
            className="bg-gradient-card rounded-3xl p-8 mb-16 border border-border/20 shadow-strong"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="h-96 md:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-background to-muted/20">
              <Suspense fallback={
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading 3D Capsules...</p>
                  </div>
                </div>
              }>
                <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
                  <CapsuleScene 
                    selectedCapsule={selectedCapsule}
                    onCapsuleClick={setSelectedCapsule}
                  />
                </Canvas>
              </Suspense>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                🖱️ Click and drag to rotate • 🔍 Scroll to zoom • 💊 Click capsules to learn more
              </p>
              {selectedCapsule === null && (
                <p className="text-lg text-primary font-medium">
                  Click on any capsule above to explore its unique properties and mechanisms
                </p>
              )}
            </div>
          </motion.div>

          {/* Selected Capsule Details */}
          <AnimatePresence>
            {selectedPill && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <Card className={`bg-gradient-card ${selectedPill.borderColor} border-2 shadow-strong`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className={`p-4 ${selectedPill.bgColor} rounded-xl`}
                          whileHover={{ rotate: 5, scale: 1.05 }}
                        >
                          <selectedPill.icon className={`h-8 w-8 text-${selectedPill.color}-500`} />
                        </motion.div>
                        <div>
                          <Badge variant="outline" className="mb-2">
                            Phase {selectedPill.id + 1}: {selectedPill.phase}
                          </Badge>
                          <CardTitle className="text-3xl">{selectedPill.name}</CardTitle>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedCapsule(null)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">{selectedPill.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-xl flex items-center">
                          <Info className="h-5 w-5 mr-2 text-primary" />
                          Key Components
                        </h4>
                        <ul className="space-y-3">
                          {selectedPill.keyFeatures.map((feature, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start space-x-3"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground leading-relaxed">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-4 text-xl flex items-center">
                          <Atom className="h-5 w-5 mr-2 text-primary" />
                          Visual Elements
                        </h4>
                        <div className={`p-6 ${selectedPill.bgColor} rounded-lg border ${selectedPill.borderColor}`}>
                          <p className="text-sm leading-relaxed mb-4">{selectedPill.visualElements}</p>
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <div className="w-3 h-3 bg-primary/60 rounded-full animate-pulse"></div>
                            <span>Active molecular processes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <motion.div 
                      className={`p-6 ${selectedPill.bgColor} rounded-xl border ${selectedPill.borderColor}`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h4 className="font-semibold mb-3 text-lg">Mechanism of Action</h4>
                      <p className="text-sm leading-relaxed">{selectedPill.mechanism}</p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Innovation Highlights */}
          <motion.div 
            className="bg-card rounded-3xl p-8 border border-border shadow-medium"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">Breakthrough Innovations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {innovations.map((innovation, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="flex justify-center mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <innovation.icon className="h-8 w-8 text-primary" />
                    </div>
                  </motion.div>
                  <h4 className="text-xl font-semibold mb-3">{innovation.title}</h4>
                  <p className="text-muted-foreground mb-4">{innovation.description}</p>
                  <p className="text-sm text-muted-foreground/80 italic">{innovation.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Interactive3DSolution;