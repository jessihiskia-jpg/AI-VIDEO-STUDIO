```react
import React, { useState, useEffect, useRef } from 'react';
import {
  Video,
  Sparkles,
  Bot,
  Layers,
  History,
  TrendingUp,
  Play,
  Pause,
  RotateCcw,
  Zap,
  Sliders,
  Film,
  Download,
  Share2,
  Search,
  CheckCircle,
  AlertCircle,
  ShieldCheck,
  Activity,
  Cpu,
  UserCheck,
  Flame,
  Volume2,
  Tv,
  RefreshCw,
  Eye,
  ThumbsUp,
  Globe,
  Settings,
  ChevronRight,
  Maximize2
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('studio');
  const [toastMessage, setToastMessage] = useState(null);

  // Character Agent State
  const [characterConfig, setCharacterConfig] = useState({
    style: 'True Human Skin (Photorealistic)',
    gender: 'Female',
    age: '24',
    outfit: 'Cyberpunk Techwear Trench Coat with glowing accents',
    hair: 'Silver shoulder-length wavy bob',
    traits: 'Confident, enigmatic, sharp gaze',
    motionPhysics: 'Fluid Rigging (Anti-stiff / Anti-clipping)',
    motionEngine: 'JJK-S2-Fluid-V2',
    backgroundStyle: 'Shibuya Neon Night - Dynamic Rain & Parallax'
  });
  const [isGeneratingChar, setIsGeneratingChar] = useState(false);
  const [charGenStep, setCharGenStep] = useState(0);
  const [generatedCharacter, setGeneratedCharacter] = useState(null);

  // Faceless Video Agent State
  const [facelessConfig, setFacelessConfig] = useState({
    genre: 'Horror/Thriller',
    topic: 'Unexplained mysteries of deep ocean standard oil rigs',
    voiceover: 'Deep Cinematic Narrator (Male)',
    subtitleStyle: 'Bold Viral Yellow/White Highlights',
    targetPlatform: 'TikTok / Shorts (9:16)',
    enableResearch: true
  });
  const [isResearching, setIsResearching] = useState(false);
  const [researchLogs, setResearchLogs] = useState([]);
  const [generatedScript, setGeneratedScript] = useState(null);

  // Studio Creation Panel State
  const [studioPrompt, setStudioPrompt] = useState(
    'A high-speed camera tracking shot following an anime exorcist sprinting down a narrow Tokyo alleyway, JJK Season 2 Episode 1 style dynamic parallax, intense speed lines, rain droplets frozen in air, fluid character movement without stiffness'
  );
  const [aspectRatio, setAspectRatio] = useState('9:16');
  const [fps, setFps] = useState('60fps');
  const [motionIntensity, setMotionIntensity] = useState(8);
  const [cameraMotion, setCameraMotion] = useState('Dynamic Tracker & Parallax Orbit');
  const [selectedStyleCategory, setSelectedStyleCategory] = useState('Anime (JJK Dynamic)');
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);
  const [genProgress, setGenProgress] = useState(0);
  const [genStepLabel, setGenStepLabel] = useState('');

  // History & Video Player State
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoHistory, setVideoHistory] = useState([
    {
      id: 'vid-1',
      title: 'JJK Style Shibuya Night Battle',
      prompt: 'Gojo-inspired sorcerer unleashing fluid cursed energy in rainy Shibuya alley, hyper dynamic camera pan, S2 Ep1 level background motion physics, zero stiffness.',
      category: 'Anime',
      aspectRatio: '9:16',
      duration: '0:12',
      date: '2 hours ago',
      views: '142.5K',
      likes: '38.2K',
      motionScore: '99.9%',
      antiClipping: 'VERIFIED',
      videoBg: 'from-purple-900 via-indigo-950 to-black',
      previewTag: 'JJK S2 Fluid Motion',
      metrics: { smoothness: '99.9%', stiffnessScore: '0.01%', backgroundParallax: 'Ultra high' }
    },
    {
      id: 'vid-2',
      title: 'True Horror: The Deep Rig Whispers',
      prompt: 'Faceless horror story about abandoned oil rig in the North Sea. Dark abyssal waves, volumetric fog, dynamic camera float, eerie atmospheric tension.',
      category: 'Faceless Horror',
      aspectRatio: '9:16',
      duration: '0:58',
      date: 'Yesterday',
      views: '890.1K',
      likes: '112.4K',
      motionScore: '99.5%',
      antiClipping: 'VERIFIED',
      videoBg: 'from-slate-900 via-cyan-950 to-black',
      previewTag: 'Viral Faceless Agent',
      metrics: { smoothness: '99.5%', stiffnessScore: '0.02%', backgroundParallax: 'High' }
    },
    {
      id: 'vid-3',
      title: 'Photorealistic Tokyo Rain Portrait',
      prompt: 'True Human Skin photorealistic portrait of an agent in Tokyo wet street. Water droplets flowing across skin with realistic collision, zero plastic texture.',
      category: 'True Human Skin',
      aspectRatio: '16:9',
      duration: '0:08',
      date: '3 days ago',
      views: '54.2K',
      likes: '12.8K',
      motionScore: '99.8%',
      antiClipping: 'VERIFIED',
      videoBg: 'from-blue-900 via-slate-950 to-black',
      previewTag: 'True Skin 8K',
      metrics: { smoothness: '99.8%', stiffnessScore: '0.00%', backgroundParallax: 'Dynamic' }
    }
  ]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Character Agent Handler
  const handleGenerateCharacter = () => {
    setIsGeneratingChar(true);
    setCharGenStep(1);

    setTimeout(() => setCharGenStep(2), 1200);
    setTimeout(() => setCharGenStep(3), 2400);
    setTimeout(() => {
      setCharGenStep(4);
      setGeneratedCharacter({
        id: 'char-' + Date.now(),
        name: `${characterConfig.style.split(' ')[0]} Specialist Agent`,
        style: characterConfig.style,
        traits: characterConfig.traits,
        motionPhysicsScore: '99.9% Fluid Rigging',
        antiClippingStatus: 'Mesh Collision Active (Zero Blend)',
        bgMotion: characterConfig.backgroundStyle,
        avatarGradient:
          characterConfig.style.includes('Anime')
            ? 'bg-gradient-to-tr from-fuchsia-600 to-indigo-600'
            : characterConfig.style.includes('Skin')
            ? 'bg-gradient-to-tr from-amber-600 to-rose-700'
            : characterConfig.style.includes('Cartoon')
            ? 'bg-gradient-to-tr from-cyan-500 to-emerald-500'
            : 'bg-gradient-to-tr from-yellow-500 to-red-600'
      });
      setIsGeneratingChar(false);
      showToast('Character Model Baked with High-Motion Anti-Clipping Mesh!');
    }, 3800);
  };

  // Faceless Video Agent Handler
  const handleRunFacelessAgent = () => {
    setIsResearching(true);
    setResearchLogs([]);
    setGeneratedScript(null);

    const logs = [
      '🔍 Accessing viral YouTube Shorts & TikTok benchmark index...',
      `📊 Analyzing top 50 viral videos in category: [${facelessConfig.genre}]`,
      '⚡ Extracting high-retention hooks & sound design cues...',
      '🌀 Simulating Jujutsu Kaisen S2 Ep1 background camera pan physics for visual retention...',
      '✨ Generating complete viral script with visual prompts & timestamps!'
    ];

    logs.forEach((log, index) => {
      setTimeout(() => {
        setResearchLogs((prev) => [...prev, log]);
        if (index === logs.length - 1) {
          setIsResearching(false);
          setGeneratedScript({
            hook: 'Deep beneath the Atlantic, Rig #4 stopped broadcasting sound at 3:14 AM...',
            retentionScore: '96.4% Projected Audience Retention',
            recommendedBroll: 'Dynamic low-angle underwater push + high-motion volumetric fog',
            scriptText:
              '[00:00-00:03] (Visual: Camera orbits hyper-realistic oil rig in high storm waves) "They told the crew the noise was just tectonic movement..."\n\n[00:03-00:08] (Visual: Fluid character turn, zero mesh blending) "But tectonic plates don\'t echo in rhythmic 3-second pulses..."'
          });
          showToast('Faceless Viral Script & Motion Directives Ready!');
        }
      }, (index + 1) * 900);
    });
  };

  // Main Video Generator Handler
  const handleGenerateVideo = () => {
    setIsGeneratingVideo(true);
    setGenProgress(0);

    const steps = [
      { p: 15, label: 'Splitting Prompt into Dynamic Keyframes...' },
      { p: 35, label: 'Applying Jujutsu Kaisen S2 Ep1 Background Parallax Engine...' },
      { p: 60, label: 'Checking Skeletal Mesh Collision (Anti-Stiffness Active)...' },
      { p: 85, label: 'Baking 60FPS Fluid Motion Blur & Audio Sync...' },
      { p: 100, label: 'Video Render Complete!' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setGenProgress(steps[currentStep].p);
        setGenStepLabel(steps[currentStep].label);
        currentStep++;
      } else {
        clearInterval(interval);
        setIsGeneratingVideo(false);

        const newVid = {
          id: 'vid-' + Date.now(),
          title: studioPrompt.substring(0, 32) + '...',
          prompt: studioPrompt,
          category: selectedStyleCategory,
          aspectRatio: aspectRatio,
          duration: '0:15',
          date: 'Just now',
          views: '1',
          likes: '0',
          motionScore: '99.9%',
          antiClipping: 'VERIFIED',
          videoBg: 'from-emerald-900 via-slate-950 to-black',
          previewTag: 'Newly Generated Studio Render',
          metrics: { smoothness: '99.9%', stiffnessScore: '0.00%', backgroundParallax: 'Max Dynamic' }
        };

        setVideoHistory([newVid, ...videoHistory]);
        setActiveVideoModal(newVid);
        showToast('High-Quality Motion Video Generated Successfully!');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-cyan-500 text-slate-950 px-5 py-3 rounded-xl font-bold shadow-2xl flex items-center gap-3 animate-bounce">
          <Sparkles className="w-5 h-5" />
          {toastMessage}
        </div>
      )}

      {/* Top Header Navigation */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-2xl shadow-lg shadow-cyan-500/20">
            <Video className="w-6 h-6 text-slate-950 font-bold" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent">
              FLUID MOTION AI STUDIO
            </h1>
            <p className="text-xs text-slate-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Anti-Stiffness Physics & JJK-S2 Motion Engine Active
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <nav className="flex items-center bg-slate-900 p-1.5 rounded-2xl border border-slate-800 text-sm overflow-x-auto">
          {[
            { id: 'studio', label: 'Studio Canvas', icon: Film },
            { id: 'character', label: 'Character Agent', icon: Bot },
            { id: 'faceless', label: 'Faceless Video Agent', icon: TrendingUp },
            { id: 'history', label: 'History & Library', icon: History }
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all font-medium whitespace-nowrap ${
                  active
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Engine Quality Badge */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>Anti-Blend Collision Guard 100%</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* ================= TAB 1: STUDIO CANVAS ================= */}
        {activeTab === 'studio' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold flex items-center gap-2 text-cyan-300">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    High-Motion Video Prompt Directives
                  </h2>
                  <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-full text-slate-400 border border-slate-700">
                    Engine: JJK-S2-Ep1 Parallax
                  </span>
                </div>

                <textarea
                  rows={4}
                  value={studioPrompt}
                  onChange={(e) => setStudioPrompt(e.target.value)}
                  placeholder="Describe your scene in detail. Note: High motion physics automatically handles fluid character turns, camera tracking, and background depth..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors resize-none placeholder-slate-600"
                />

                {/* Category Preset Badges */}
                <div className="mt-4">
                  <label className="text-xs text-slate-400 block mb-2 font-medium">
                    Rendering Visual Aesthetic:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      'True Human Skin (Photorealistic)',
                      'Anime (JJK Dynamic)',
                      'Cartoon (Fluid Toon)',
                      'Comic Book (Stylized Ink)'
                    ].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedStyleCategory(cat)}
                        className={`text-xs px-3 py-2 rounded-xl border text-left transition-all font-medium ${
                          selectedStyleCategory === cat
                            ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300 font-bold'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Motion & Camera Settings Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                      Aspect Ratio
                    </label>
                    <select
                      value={aspectRatio}
                      onChange={(e) => setAspectRatio(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:border-cyan-500"
                    >
                      <option value="9:16">9:16 (TikTok / Reels / Shorts)</option>
                      <option value="16:9">16:9 (Cinematic Widescreen)</option>
                      <option value="1:1">1:1 (Square Format)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-purple-400" />
                      Frame Rate Output
                    </label>
                    <select
                      value={fps}
                      onChange={(e) => setFps(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:border-cyan-500"
                    >
                      <option value="60fps">60 FPS (Ultra Fluid Motion)</option>
                      <option value="24fps">24 FPS (Cinematic Film Rate)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                      Camera Motion Dynamics
                    </label>
                    <select
                      value={cameraMotion}
                      onChange={(e) => setCameraMotion(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:border-cyan-500"
                    >
                      <option value="Dynamic Tracker & Parallax Orbit">Dynamic Tracker & Parallax Orbit</option>
                      <option value="Speed Zoom Push (JJK Episode 1 Style)">Speed Zoom Push (JJK Episode 1 Style)</option>
                      <option value="Low Angle Orbital Sweep">Low Angle Orbital Sweep</option>
                      <option value="Handheld Fluid Drone">Handheld Fluid Drone</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-300">Motion Intensity</span>
                      <span className="text-cyan-400 font-bold">{motionIntensity} / 10</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={motionIntensity}
                      onChange={(e) => setMotionIntensity(Number(e.target.value))}
                      className="w-full accent-cyan-400 bg-slate-950 rounded-lg cursor-pointer h-2"
                    />
                  </div>
                </div>

                {/* Physics Guarantee Info Banner */}
                <div className="mt-6 p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-800/40 flex items-start gap-3">
                  <Activity className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-cyan-200/90 leading-relaxed">
                    <strong>Zero-Stiffness Physics Engaged:</strong> Character meshes use auto-skeletal collision bounds. Background elements (clouds, rain, debris, street lighting) employ independent depth parallax layers modeled after high-octane anime sequence direction.
                  </p>
                </div>

                {/* Submit Generate Button */}
                <button
                  onClick={handleGenerateVideo}
                  disabled={isGeneratingVideo}
                  className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-slate-950 font-extrabold text-base tracking-wide hover:brightness-110 active:scale-[0.99] transition-all shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isGeneratingVideo ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin text-slate-950" />
                      <span>Rendering High-Motion Stream...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 fill-slate-950" />
                      <span>GENERATE FLUID MOTION VIDEO</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Preview / Realtime Status */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between min-h-[460px]">
                <div>
                  <h3 className="text-md font-bold text-slate-200 flex items-center gap-2 mb-4">
                    <Tv className="w-5 h-5 text-cyan-400" />
                    Live Render Preview Matrix
                  </h3>

                  {isGeneratingVideo ? (
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-5 min-h-[280px]">
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 animate-spin"></div>
                        <Film className="w-8 h-8 text-cyan-400 animate-pulse" />
                      </div>
                      <div className="w-full space-y-2">
                        <div className="flex justify-between text-xs font-semibold text-slate-300">
                          <span>{genStepLabel}</span>
                          <span className="text-cyan-400">{genProgress}%</span>
                        </div>
                        <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden border border-slate-800">
                          <div
                            className="bg-gradient-to-r from-cyan-400 to-purple-500 h-full transition-all duration-300"
                            style={{ width: `${genProgress}%` }}
                          ></div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 italic">
                        Checking for zero mesh clipping & background depth motion...
                      </p>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[280px] group relative overflow-hidden">
                      <div className="w-16 h-16 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-cyan-400 ml-1" />
                      </div>
                      <p className="text-sm font-semibold text-slate-300">Ready for Next Motion Generation</p>
                      <p className="text-xs text-slate-500 max-w-xs mt-1">
                        Select your prompt or character agent preset to build seamless, high-framerate clips.
                      </p>
                    </div>
                  )}
                </div>

                {/* Physics Verification Box */}
                <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 mt-4 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Character Stiffness Index:</span>
                    <span className="text-emerald-400 font-bold">0.00% (Zero Plastic Motion)</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Background Parallax Depth:</span>
                    <span className="text-cyan-400 font-bold">JJK Season 2 Ep 1 Level</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-400">
                    <span>Mesh Blend Collision:</span>
                    <span className="text-purple-400 font-bold">Passed (No Clipping)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: CHARACTER AGENT PANEL ================= */}
        {activeTab === 'character' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-2xl text-purple-400">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-100">Character Architect Agent</h2>
                    <p className="text-xs text-slate-400">
                      Designs fully-rigged characters optimized for non-stiff motion physics
                    </p>
                  </div>
                </div>

                {/* Style Category Selector */}
                <div className="space-y-2 mb-4">
                  <label className="text-xs font-semibold text-slate-300">
                    Character Style Category:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'True Human Skin (Photorealistic)',
                      'Anime (JJK / Shonen Dynamic)',
                      'Cartoon (3D Fluid Animated)',
                      'Comic Book (Inked Graphic Novel)'
                    ].map((styleOption) => (
                      <button
                        key={styleOption}
                        onClick={() =>
                          setCharacterConfig({ ...characterConfig, style: styleOption })
                        }
                        className={`p-3 rounded-2xl border text-left text-xs font-medium transition-all ${
                          characterConfig.style === styleOption
                            ? 'bg-purple-500/20 border-purple-500 text-purple-200 font-bold'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {styleOption}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Detailed Attributes Form */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="space-y-1">
                    <label className="text-xs text-slate-400">Gender Concept</label>
                    <input
                      type="text"
                      value={characterConfig.gender}
                      onChange={(e) =>
                        setCharacterConfig({ ...characterConfig, gender: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:border-purple-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-slate-400">Age Appearance</label>
                    <input
                      type="text"
                      value={characterConfig.age}
                      onChange={(e) =>
                        setCharacterConfig({ ...characterConfig, age: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="space-y-1 mb-4">
                  <label className="text-xs text-slate-400">Outfit & Clothing Texture</label>
                  <input
                    type="text"
                    value={characterConfig.outfit}
                    onChange={(e) =>
                      setCharacterConfig({ ...characterConfig, outfit: e.target.value })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:border-purple-500"
                  />
                </div>

                <div className="space-y-1 mb-4">
                  <label className="text-xs text-slate-400">Hairstyle & Motion Physics</label>
                  <input
                    type="text"
                    value={characterConfig.hair}
                    onChange={(e) =>
                      setCharacterConfig({ ...characterConfig, hair: e.target.value })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:border-purple-500"
                  />
                </div>

                <div className="space-y-1 mb-6">
                  <label className="text-xs text-slate-400">Background Scene Parallax Movement</label>
                  <input
                    type="text"
                    value={characterConfig.backgroundStyle}
                    onChange={(e) =>
                      setCharacterConfig({ ...characterConfig, backgroundStyle: e.target.value })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:border-purple-500"
                  />
                </div>

                <button
                  onClick={handleGenerateCharacter}
                  disabled={isGeneratingChar}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20 disabled:opacity-50"
                >
                  {isGeneratingChar ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Baking Rig & Mesh Collision...</span>
                    </>
                  ) : (
                    <>
                      <UserCheck className="w-4 h-4" />
                      <span>Generate Character with Agent</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Agent Render Progress & Character Output Card */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl min-h-[480px] flex flex-col justify-between">
                <div>
                  <h3 className="text-md font-bold text-slate-200 mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-purple-400" />
                    Agent Mesh Verification Panel
                  </h3>

                  {isGeneratingChar ? (
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
                      <div className="text-xs text-purple-300 font-mono">
                        [AGENT LOG STEP {charGenStep}/4]
                      </div>
                      <ul className="space-y-3 text-xs">
                        <li
                          className={`flex items-center gap-2 ${
                            charGenStep >= 1 ? 'text-emerald-400' : 'text-slate-600'
                          }`}
                        >
                          <CheckCircle className="w-4 h-4" /> Prompt engineering & skin texture maps generated
                        </li>
                        <li
                          className={`flex items-center gap-2 ${
                            charGenStep >= 2 ? 'text-emerald-400' : 'text-slate-600'
                          }`}
                        >
                          <CheckCircle className="w-4 h-4" /> Rigging anti-stiffness bone structure check
                        </li>
                        <li
                          className={`flex items-center gap-2 ${
                            charGenStep >= 3 ? 'text-emerald-400' : 'text-slate-600'
                          }`}
                        >
                          <CheckCircle className="w-4 h-4" /> Background dynamic parallax depth alignment (JJK style)
                        </li>
                        <li
                          className={`flex items-center gap-2 ${
                            charGenStep >= 4 ? 'text-emerald-400' : 'text-slate-600'
                          }`}
                        >
                          <CheckCircle className="w-4 h-4" /> Anti-clipping mesh collision verified
                        </li>
                      </ul>
                    </div>
                  ) : generatedCharacter ? (
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4 relative overflow-hidden">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-16 h-16 rounded-2xl ${generatedCharacter.avatarGradient} flex items-center justify-center shadow-lg text-white font-black text-xl`}
                        >
                          AI
                        </div>
                        <div>
                          <h4 className="text-base font-extrabold text-white">
                            {generatedCharacter.name}
                          </h4>
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800/50">
                            {generatedCharacter.style}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                        <div>
                          <span className="text-slate-500 block">Motion Smoothness:</span>
                          <span className="text-emerald-400 font-bold">
                            {generatedCharacter.motionPhysicsScore}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Mesh Collision:</span>
                          <span className="text-cyan-400 font-bold">
                            {generatedCharacter.antiClippingStatus}
                          </span>
                        </div>
                      </div>

                      <div className="text-xs text-slate-300 space-y-1">
                        <p>
                          <strong>Background Motion Directive:</strong> {generatedCharacter.bgMotion}
                        </p>
                        <p>
                          <strong>Personality Traits:</strong> {generatedCharacter.traits}
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setStudioPrompt(
                            `Dynamic shot of ${generatedCharacter.name} with ${generatedCharacter.style} visual aesthetic, ${generatedCharacter.traits}, featuring ${generatedCharacter.bgMotion}, dynamic camera sweep JJK Season 2 style.`
                          );
                          setActiveTab('studio');
                          showToast('Character loaded into Studio Canvas!');
                        }}
                        className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-bold rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <Film className="w-4 h-4" />
                        Send Character to Studio Canvas
                      </button>
                    </div>
                  ) : (
                    <div className="bg-slate-950/50 border border-slate-800/80 rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[260px]">
                      <Bot className="w-12 h-12 text-slate-700 mb-2" />
                      <p className="text-sm text-slate-400 font-medium">No Character Rendered Yet</p>
                      <p className="text-xs text-slate-600 max-w-xs mt-1">
                        Use the options on the left to configure age, aesthetic style, and non-stiff physics directives.
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-3 bg-purple-950/20 border border-purple-800/30 rounded-xl text-xs text-purple-300">
                  ⚡ <strong>Note:</strong> Generated character profiles lock into the studio timeline to preserve facial & attire consistency across multi-scene edits.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: FACELESS VIDEO AGENT ================= */}
        {activeTab === 'faceless' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-100">Faceless Viral Video Agent</h2>
                    <p className="text-xs text-slate-400">
                      Researches high-performing social video trends & writes motion-directed scripts
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">Genre / Theme:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Horror/Thriller', 'True Stories', 'Morals & Fables', 'Finance & Wealth', 'Sci-Fi Mysteries', 'Custom Prompt'].map(
                      (g) => (
                        <button
                          key={g}
                          onClick={() => setFacelessConfig({ ...facelessConfig, genre: g })}
                          className={`p-2.5 rounded-xl border text-center text-xs font-medium transition-all ${
                            facelessConfig.genre === g
                              ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                              : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          {g}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-400">Topic Idea / Seed Prompt</label>
                  <input
                    type="text"
                    value={facelessConfig.topic}
                    onChange={(e) =>
                      setFacelessConfig({ ...facelessConfig, topic: e.target.value })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:border-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-slate-400">AI Voice Engine</label>
                    <select
                      value={facelessConfig.voiceover}
                      onChange={(e) =>
                        setFacelessConfig({ ...facelessConfig, voiceover: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:border-emerald-500"
                    >
                      <option value="Deep Cinematic Narrator (Male)">Deep Cinematic Narrator (Male)</option>
                      <option value="Eerie Mystery Narrator (Female)">Eerie Mystery Narrator (Female)</option>
                      <option value="High-Energy Social Hype">High-Energy Social Hype</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-slate-400">Target Platform</label>
                    <select
                      value={facelessConfig.targetPlatform}
                      onChange={(e) =>
                        setFacelessConfig({ ...facelessConfig, targetPlatform: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:border-emerald-500"
                    >
                      <option value="TikTok / Shorts (9:16)">TikTok / Shorts (9:16)</option>
                      <option value="YouTube Longform (16:9)">YouTube Longform (16:9)</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleRunFacelessAgent}
                  disabled={isResearching}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-extrabold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 disabled:opacity-50"
                >
                  {isResearching ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Researching Viral Video Database...</span>
                    </>
                  ) : (
                    <>
                      <Globe className="w-4 h-4" />
                      <span>Run Research & Generate Faceless Script</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Research Live Feed & Output Panel */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl min-h-[480px] flex flex-col justify-between">
                <div>
                  <h3 className="text-md font-bold text-slate-200 mb-4 flex items-center gap-2">
                    <Search className="w-5 h-5 text-emerald-400" />
                    Viral Benchmark Research Engine
                  </h3>

                  {/* Research Console Feed */}
                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-emerald-400 space-y-2 mb-4 max-h-48 overflow-y-auto">
                    {researchLogs.length === 0 ? (
                      <p className="text-slate-600 italic">
                        Click "Run Research" to trigger real-time social metrics inspection...
                      </p>
                    ) : (
                      researchLogs.map((log, i) => (
                        <div key={i} className="flex items-center gap-2 animate-fadeIn">
                          <span>{log}</span>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Generated Faceless Script Box */}
                  {generatedScript && (
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-emerald-400 font-bold">
                          {generatedScript.retentionScore}
                        </span>
                        <span className="text-slate-500">Hook Rating: S-Tier</span>
                      </div>
                      <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 font-sans whitespace-pre-line">
                        {generatedScript.scriptText}
                      </div>

                      <button
                        onClick={() => {
                          setStudioPrompt(
                            `Faceless video clip: ${generatedScript.hook}. B-Roll directives: ${generatedScript.recommendedBroll}. JJK Season 2 Ep1 fluid motion style.`
                          );
                          setActiveTab('studio');
                          showToast('Faceless Script & B-Roll directives loaded to Studio!');
                        }}
                        className="w-full py-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-bold rounded-xl border border-emerald-500/40 transition-colors flex items-center justify-center gap-2"
                      >
                        <Film className="w-4 h-4" />
                        Send Directives to Studio Canvas
                      </button>
                    </div>
                  )}
                </div>

                <div className="p-3 bg-emerald-950/20 border border-emerald-800/30 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    Research Engine continuously cross-references high view count ratios to maximize retention hooks.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 4: HISTORY & LIBRARY ================= */}
        {activeTab === 'history' && (
          <div className="space-y-6">
            <div className="flex flex-wrap justify-between items-center gap-4 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
              <div>
                <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <History className="w-5 h-5 text-cyan-400" />
                  Generated Project Vault
                </h2>
                <p className="text-xs text-slate-400">
                  Inspect past motion metrics, re-render prompts, or download fluid video files
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400">Total Projects: {videoHistory.length}</span>
              </div>
            </div>

            {/* Video Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoHistory.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 rounded-3xl p-5 shadow-xl transition-all hover:scale-[1.01] flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Simulated Video Thumbnail Header */}
                    <div
                      className={`h-44 rounded-2xl bg-gradient-to-tr ${item.videoBg} border border-slate-800 p-4 flex flex-col justify-between relative overflow-hidden`}
                    >
                      <div className="flex justify-between items-center z-10">
                        <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-slate-950/80 text-cyan-300 border border-cyan-500/30">
                          {item.previewTag}
                        </span>
                        <span className="text-xs font-mono bg-slate-950/80 px-2 py-0.5 rounded text-slate-300">
                          {item.duration}
                        </span>
                      </div>

                      {/* Center Play Button Overlay */}
                      <button
                        onClick={() => {
                          setActiveVideoModal(item);
                          setIsPlaying(true);
                        }}
                        className="self-center p-3.5 rounded-full bg-cyan-500 text-slate-950 shadow-xl opacity-90 group-hover:scale-110 transition-transform"
                      >
                        <Play className="w-6 h-6 ml-0.5 fill-slate-950" />
                      </button>

                      <div className="flex justify-between items-center text-[11px] text-slate-300 z-10 bg-slate-950/60 backdrop-blur-sm p-2 rounded-xl border border-slate-800">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5 text-cyan-400" /> {item.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="w-3.5 h-3.5 text-emerald-400" /> {item.likes}
                        </span>
                        <span className="text-purple-300 font-bold">FPS: 60</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-100 line-clamp-1">{item.title}</h3>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                        {item.prompt}
                      </p>
                    </div>

                    {/* Physics Stats Pill */}
                    <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800/80 text-[11px] grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-slate-500 block">Smoothness:</span>
                        <span className="text-emerald-400 font-bold">{item.motionScore}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Collision Check:</span>
                        <span className="text-cyan-400 font-bold">{item.antiClipping}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => {
                        setStudioPrompt(item.prompt);
                        setActiveTab('studio');
                        showToast('Prompt loaded into Studio Canvas for iteration!');
                      }}
                      className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Re-Generate
                    </button>

                    <button
                      onClick={() => {
                        setActiveVideoModal(item);
                        setIsPlaying(true);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
                    >
                      Inspect Player
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* ================= INTERACTIVE VIDEO PLAYER MODAL ================= */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative space-y-5">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-base font-bold text-slate-100">{activeVideoModal.title}</h3>
                <p className="text-xs text-slate-400">High-Motion Physics Player View</p>
              </div>
              <button
                onClick={() => {
                  setActiveVideoModal(null);
                  setIsPlaying(false);
                }}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Simulated Animated Video Box */}
            <div
              className={`h-72 rounded-2xl bg-gradient-to-tr ${activeVideoModal.videoBg} border border-slate-800 flex flex-col justify-between p-6 relative overflow-hidden`}
            >
              <div className="flex justify-between text-xs z-10">
                <span className="px-3 py-1 rounded-full bg-slate-950/80 text-cyan-300 font-bold border border-cyan-500/30">
                  {activeVideoModal.category}
                </span>
                <span className="bg-slate-950/80 px-2.5 py-1 rounded text-emerald-400 font-mono font-bold">
                  FLUID 60FPS
                </span>
              </div>

              {/* Dynamic Animated Motion Representation */}
              <div className="self-center text-center space-y-3 z-10">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-5 rounded-full bg-cyan-400 text-slate-950 shadow-2xl hover:scale-105 transition-transform inline-block"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 fill-slate-950" />
                  ) : (
                    <Play className="w-8 h-8 ml-1 fill-slate-950" />
                  )}
                </button>
                <p className="text-xs text-cyan-200 font-medium">
                  {isPlaying ? '▶ Simulating JJK S2 Ep1 Fluid Motion Stream...' : 'Paused'}
                </p>
              </div>

              {/* Player Progress Scrub Bar */}
              <div className="w-full bg-slate-950/80 backdrop-blur-sm p-3 rounded-xl border border-slate-800 space-y-1.5 z-10">
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>0:04</span>
                  <span>{activeVideoModal.duration}</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`bg-cyan-400 h-full ${isPlaying ? 'w-2/3 animate-pulse' : 'w-1/3'}`}
                  ></div>
                </div>
              </div>
            </div>

            {/* Video Prompt & Metrics */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
              <span className="text-slate-400 block font-semibold">Generation Prompt Directive:</span>
              <p className="text-slate-200 leading-relaxed">{activeVideoModal.prompt}</p>
            </div>

            <div className="flex justify-between items-center gap-3 pt-2">
              <button
                onClick={() => showToast('Video File Exported (1080p 60FPS Fluid MP4)!')}
                className="flex-1 py-3 rounded-2xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" /> Download 60FPS MP4
              </button>

              <button
                onClick={() => showToast('Shareable Link Copied to Clipboard!')}
                className="px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
```
