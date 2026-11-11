import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, Layers, Sun, Moon, RotateCcw, Play, Pause, ZoomIn, ZoomOut, Info } from 'lucide-react';

type ViewMode = 'finished' | 'structural' | 'floors' | 'night';

export const ThreeDVisualizer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('finished');
  const [isRotating, setIsRotating] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<string | null>('entrance');

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const villaGroupRef = useRef<THREE.Group | null>(null);
  const structuralGroupRef = useRef<THREE.Group | null>(null);
  const nightLightsRef = useRef<THREE.Group | null>(null);
  const dayLightsRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x060b18);
    scene.fog = new THREE.FogExp2(0x060b18, 0.025);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(18, 12, 22);
    camera.lookAt(0, 3, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Ambient and Directional Lights (Day)
    const dayLights = new THREE.Group();
    dayLightsRef.current = dayLights;
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    dayLights.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff4e0, 2.4);
    sunLight.position.set(20, 35, 15);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    dayLights.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0x7fb5ff, 0.8);
    fillLight.position.set(-20, 15, -15);
    dayLights.add(fillLight);
    scene.add(dayLights);

    // Night Lights Group
    const nightLights = new THREE.Group();
    nightLightsRef.current = nightLights;
    const nightAmbient = new THREE.AmbientLight(0x1c2b50, 0.6);
    nightLights.add(nightAmbient);

    // Warm golden architectural spot/point lights
    const warmGoldLight1 = new THREE.PointLight(0xffaa33, 4, 15);
    warmGoldLight1.position.set(0, 4, 3);
    nightLights.add(warmGoldLight1);

    const warmGoldLight2 = new THREE.PointLight(0xffb84d, 3.5, 12);
    warmGoldLight2.position.set(4, 7, 2);
    nightLights.add(warmGoldLight2);

    const warmGoldLight3 = new THREE.PointLight(0xff9900, 3, 10);
    warmGoldLight3.position.set(-4, 3, 0);
    nightLights.add(warmGoldLight3);
    nightLights.visible = false;
    scene.add(nightLights);

    // Ground Grid & Foundation Platform
    const gridHelper = new THREE.GridHelper(40, 40, 0xd4af37, 0x1e293b);
    gridHelper.position.y = -0.01;
    scene.add(gridHelper);

    // Plinth Platform (Landscape & Terrace)
    const plinthGeo = new THREE.BoxGeometry(22, 0.6, 18);
    const plinthMat = new THREE.MeshStandardMaterial({
      color: 0x1a2436,
      roughness: 0.8,
      metalness: 0.1,
    });
    const plinth = new THREE.Mesh(plinthGeo, plinthMat);
    plinth.position.y = 0.3;
    plinth.receiveShadow = true;
    scene.add(plinth);

    // Pool water feature
    const poolGeo = new THREE.BoxGeometry(6, 0.2, 10);
    const poolMat = new THREE.MeshStandardMaterial({
      color: 0x0ea5e9,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.85
    });
    const pool = new THREE.Mesh(poolGeo, poolMat);
    pool.position.set(7, 0.5, 2);
    scene.add(pool);

    // VILLA FINISHED GROUP
    const villaGroup = new THREE.Group();
    villaGroupRef.current = villaGroup;

    // Materials
    const whiteFacadeMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.4,
    });
    const darkLouverMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.7,
    });
    const teakWoodMat = new THREE.MeshStandardMaterial({
      color: 0xb45309,
      roughness: 0.5,
      metalness: 0.05
    });
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.45,
      roughness: 0.05,
      transmission: 0.9,
      ior: 1.5,
    });
    const goldTrimMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.8,
      roughness: 0.2
    });

    // Ground Floor Main Living Box
    const gfMainGeo = new THREE.BoxGeometry(10, 3.4, 8);
    const gfMain = new THREE.Mesh(gfMainGeo, whiteFacadeMat);
    gfMain.position.set(-1, 2.3, 0);
    gfMain.castShadow = true;
    gfMain.receiveShadow = true;
    villaGroup.add(gfMain);

    // Teak Wood Entry Portal
    const entryGeo = new THREE.BoxGeometry(3, 3.4, 0.4);
    const entry = new THREE.Mesh(entryGeo, teakWoodMat);
    entry.position.set(0, 2.3, 4.1);
    villaGroup.add(entry);

    // Big Glass Curtain Windows (GF)
    const gfGlassGeo = new THREE.BoxGeometry(5, 2.6, 0.2);
    const gfGlass = new THREE.Mesh(gfGlassGeo, glassMat);
    gfGlass.position.set(-3.2, 2.3, 4.05);
    villaGroup.add(gfGlass);

    // First Floor Cantilevered Master Suite (Offset forward & sideways)
    const ffMainGeo = new THREE.BoxGeometry(11, 3.2, 8.5);
    const ffMain = new THREE.Mesh(ffMainGeo, whiteFacadeMat);
    ffMain.position.set(-0.5, 5.7, 0.8);
    ffMain.castShadow = true;
    ffMain.receiveShadow = true;
    villaGroup.add(ffMain);

    // Architectural Cantilevered Roof Slab with Gold Edge
    const roofSlabGeo = new THREE.BoxGeometry(13, 0.4, 10.5);
    const roofSlab = new THREE.Mesh(roofSlabGeo, darkLouverMat);
    roofSlab.position.set(-0.5, 7.5, 0.8);
    roofSlab.castShadow = true;
    villaGroup.add(roofSlab);

    // Gold Fascia Accent on Roof
    const roofTrimGeo = new THREE.BoxGeometry(13.1, 0.15, 10.6);
    const roofTrim = new THREE.Mesh(roofTrimGeo, goldTrimMat);
    roofTrim.position.set(-0.5, 7.6, 0.8);
    villaGroup.add(roofTrim);

    // First Floor Large Glass Balcony & Bedroom Fenestration
    const ffGlassGeo = new THREE.BoxGeometry(7, 2.5, 0.2);
    const ffGlass = new THREE.Mesh(ffGlassGeo, glassMat);
    ffGlass.position.set(-1, 5.7, 5.1);
    villaGroup.add(ffGlass);

    // Balcony Glass Railing
    const railGeo = new THREE.BoxGeometry(8, 1, 0.1);
    const rail = new THREE.Mesh(railGeo, glassMat);
    rail.position.set(-1, 4.6, 5.5);
    villaGroup.add(rail);

    // Vertical Teak Louvers (Modern Shading System)
    for (let i = 0; i < 6; i++) {
      const louverGeo = new THREE.BoxGeometry(0.12, 3.2, 0.6);
      const louver = new THREE.Mesh(louverGeo, teakWoodMat);
      louver.position.set(3.2 + i * 0.35, 5.7, 5.1);
      villaGroup.add(louver);
    }

    // Rooftop Pergola with Architectural Slats
    for (let j = 0; j < 7; j++) {
      const slatGeo = new THREE.BoxGeometry(4, 0.15, 0.15);
      const slat = new THREE.Mesh(slatGeo, darkLouverMat);
      slat.position.set(-2, 8.4, -1.5 + j * 0.7);
      villaGroup.add(slat);
    }

    scene.add(villaGroup);

    // STRUCTURAL REINFORCEMENT & CONCRETE BEAM X-RAY GROUP
    const structuralGroup = new THREE.Group();
    structuralGroupRef.current = structuralGroup;

    const columnMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      roughness: 0.2
    });
    const rebarMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      wireframe: true
    });

    // 12 Structural Concrete Columns from Foundation to Roof
    const colCoords = [
      [-5, -3], [-1, -3], [3, -3],
      [-5, 0],  [-1, 0],  [3, 0],
      [-5, 3],  [-1, 3],  [3, 3],
      [-3, 5],  [1, 5],   [4, 5],
    ];

    colCoords.forEach(([x, z]) => {
      // Column Wireframe
      const colGeo = new THREE.BoxGeometry(0.6, 7.5, 0.6);
      const col = new THREE.Mesh(colGeo, columnMat);
      col.position.set(x, 3.8, z);
      structuralGroup.add(col);

      // Inner TMT Fe550D Steel Rebar Cage
      const rebarGeo = new THREE.CylinderGeometry(0.2, 0.2, 7.8, 8);
      const rebar = new THREE.Mesh(rebarGeo, rebarMat);
      rebar.position.set(x, 3.8, z);
      structuralGroup.add(rebar);
    });

    // Structural Slab Tie Beams
    const tieBeamGeoX = new THREE.BoxGeometry(10, 0.4, 0.4);
    const tieBeamX1 = new THREE.Mesh(tieBeamGeoX, columnMat);
    tieBeamX1.position.set(-1, 4.0, 0);
    structuralGroup.add(tieBeamX1);

    const tieBeamX2 = new THREE.Mesh(tieBeamGeoX, columnMat);
    tieBeamX2.position.set(-1, 7.4, 0);
    structuralGroup.add(tieBeamX2);

    structuralGroup.visible = false;
    scene.add(structuralGroup);

    // Animation Loop
    let animationFrameId: number;
    let angle = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (isRotating && cameraRef.current) {
        angle += 0.003;
        const radius = 26;
        cameraRef.current.position.x = Math.sin(angle) * radius;
        cameraRef.current.position.z = Math.cos(angle) * radius;
        cameraRef.current.lookAt(0, 3.5, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Mouse drag interaction for manual orbit
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !cameraRef.current) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      angle -= deltaX * 0.008;
      const radius = 26;
      cameraRef.current.position.x = Math.sin(angle) * radius;
      cameraRef.current.position.z = Math.cos(angle) * radius;
      cameraRef.current.position.y = Math.max(3, Math.min(22, cameraRef.current.position.y + deltaY * 0.05));
      cameraRef.current.lookAt(0, 3.5, 0);
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      renderer.dispose();
    };
  }, [isRotating]);

  // Handle View Mode Toggles
  useEffect(() => {
    if (!villaGroupRef.current || !structuralGroupRef.current) return;

    if (viewMode === 'finished') {
      villaGroupRef.current.visible = true;
      structuralGroupRef.current.visible = false;
      if (nightLightsRef.current) nightLightsRef.current.visible = false;
      if (dayLightsRef.current) dayLightsRef.current.visible = true;
      if (sceneRef.current) sceneRef.current.background = new THREE.Color(0x060b18);
    } else if (viewMode === 'structural') {
      villaGroupRef.current.visible = false;
      structuralGroupRef.current.visible = true;
      if (nightLightsRef.current) nightLightsRef.current.visible = false;
      if (dayLightsRef.current) dayLightsRef.current.visible = true;
      if (sceneRef.current) sceneRef.current.background = new THREE.Color(0x040814);
    } else if (viewMode === 'floors') {
      villaGroupRef.current.visible = true;
      structuralGroupRef.current.visible = true;
      if (nightLightsRef.current) nightLightsRef.current.visible = false;
      if (dayLightsRef.current) dayLightsRef.current.visible = true;
    } else if (viewMode === 'night') {
      villaGroupRef.current.visible = true;
      structuralGroupRef.current.visible = false;
      if (nightLightsRef.current) nightLightsRef.current.visible = true;
      if (dayLightsRef.current) dayLightsRef.current.visible = false;
      if (sceneRef.current) sceneRef.current.background = new THREE.Color(0x020409);
    }
  }, [viewMode]);

  const resetCamera = (preset: 'iso' | 'front' | 'top') => {
    if (!cameraRef.current) return;
    setIsRotating(false);
    if (preset === 'iso') {
      cameraRef.current.position.set(18, 12, 22);
    } else if (preset === 'front') {
      cameraRef.current.position.set(0, 5, 25);
    } else if (preset === 'top') {
      cameraRef.current.position.set(0, 30, 4);
    }
    cameraRef.current.lookAt(0, 3.5, 0);
  };

  const hotspots = [
    {
      id: 'foundation',
      title: 'Foundation & Soil Load Bearing',
      desc: 'Engineered isolated RCC footings designed per local Chennur soil stratum with M25 concrete & Fe550D primary steel.'
    },
    {
      id: 'cantilever',
      title: 'Cantilevered First Floor Suite',
      desc: 'Architectural overhang with post-tensioned beam depth providing unobstructed 4ft shaded ground porch and expansive upper balcony.'
    },
    {
      id: 'entrance',
      title: '100% Vaastu Compliant North-East Entry',
      desc: 'Main doorway aligned according to traditional Vaastu Shastra with carved seasoned Teakwood portal frame.'
    },
    {
      id: 'terrace',
      title: 'Waterproofed Terrace & Solar Pergola',
      desc: '5-layer elastomeric membrane waterproofing with heat-reflective white tiles and structural MS pergola.'
    }
  ];

  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Interactive 3D Architectural Visualizer</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white mt-2">
              Explore Our <span className="text-gold-gradient">Engineering Precision</span> in 3D
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Rotate, zoom, and inspect the structural anatomy of our luxury villa projects from foundation plinth to the finished cantilevered roofline.
            </p>
          </div>

          {/* Quick presets */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setIsRotating(!isRotating)}
              className={`p-2.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                isRotating
                  ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                  : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
              }`}
            >
              {isRotating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isRotating ? 'Pause Orbit' : 'Auto Orbit'}</span>
            </button>

            <button
              onClick={() => resetCamera('iso')}
              className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-400/50 text-xs font-medium text-slate-300"
            >
              Isometric
            </button>
            <button
              onClick={() => resetCamera('front')}
              className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-400/50 text-xs font-medium text-slate-300"
            >
              Front Facade
            </button>
            <button
              onClick={() => resetCamera('top')}
              className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-400/50 text-xs font-medium text-slate-300"
            >
              Roof Plan
            </button>
          </div>
        </div>

        {/* 3D Canvas Box */}
        <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-[#060B18]">
          
          {/* Top Control Bar inside Canvas */}
          <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-auto">
            {/* View Mode Tabs */}
            <div className="flex items-center gap-1 p-1 bg-slate-950/80 backdrop-blur-md rounded-xl border border-slate-800">
              <button
                onClick={() => setViewMode('finished')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  viewMode === 'finished'
                    ? 'bg-gold-gradient text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Finished Villa</span>
              </button>

              <button
                onClick={() => setViewMode('structural')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  viewMode === 'structural'
                    ? 'bg-gold-gradient text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>RCC Frame (X-Ray)</span>
              </button>

              <button
                onClick={() => setViewMode('floors')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  viewMode === 'floors'
                    ? 'bg-gold-gradient text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>Hybrid Overlay</span>
              </button>

              <button
                onClick={() => setViewMode('night')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  viewMode === 'night'
                    ? 'bg-gold-gradient text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Night Illumination</span>
              </button>
            </div>

            {/* Instruction Badge */}
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-400 px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-800">
              <Info className="w-3.5 h-3.5 text-amber-400" />
              <span>Click & Drag to Rotate 360°</span>
            </div>
          </div>

          {/* WebGL Canvas Container */}
          <div
            ref={mountRef}
            className="w-full h-[450px] sm:h-[550px] cursor-grab active:cursor-grabbing"
          />

          {/* Bottom Interactive Engineering Hotspots */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2 pointer-events-auto">
            {hotspots.map((h) => (
              <button
                key={h.id}
                onClick={() => setActiveHotspot(activeHotspot === h.id ? null : h.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all backdrop-blur-md border ${
                  activeHotspot === h.id
                    ? 'bg-amber-500/30 text-amber-300 border-amber-400 shadow-lg'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                {h.title.split('&')[0]}
              </button>
            ))}
          </div>

        </div>

        {/* Active Hotspot Inspector Card */}
        {activeHotspot && (
          <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">
                {hotspots.find(h => h.id === activeHotspot)?.title}
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                {hotspots.find(h => h.id === activeHotspot)?.desc}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
