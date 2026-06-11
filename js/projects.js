window.projectsData = [
  {
    id: "scara-optimization",
    title: "SCARA Optimization",
    category: "Professional",
    tags: ["MATLAB", "AutoCAD", "Python"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600",
    imageAlt: "Kinematic CAD simulation model of a high capacity SCARA robotic automation arm",
    shortDescription: "Optimization of a robotic assembly line increasing throughput by 22% using kinematic simulation.",
    featured: true,
    longDescription: `
      <h3 class="text-on-surface font-display text-body-lg font-bold">Project Overview</h3>
      <p class="text-on-surface-variant font-body-md">This project focused on the throughput optimization of an electronic component assembly line featuring high-speed SCARA robotic arms. By using advanced kinematic and dynamic modeling, we analyzed joint velocity limits, path profiles, and gripper response cycles to extract maximum speed without over-stressing mechanical joints.</p>
      
      <h3 class="text-on-surface font-display text-body-lg font-bold mt-6">Key Accomplishments & Results</h3>
      <ul class="list-disc pl-5 mt-2 space-y-2 text-on-surface-variant font-body-md text-sm">
        <li>Re-engineered physical movement trajectories inside MATLAB using cubic spline profiles, which eliminated sudden dynamic torque transitions and minimized physical joint vibrations.</li>
        <li>Improved SCARA robotic pick-and-place cycle periods from 1.4 seconds down to 1.09 seconds.</li>
        <li>Deployed predictive dynamic models inside Python to proactively identify mechanical alignment errors and prevent scheduled downtime.</li>
        <li>Achieved a cumulative line throughput increase of 22% overall with zero additional factory floor capital expenditures.</li>
      </ul>
    `
  },
  {
    id: "smart-greenhouse",
    title: "Smart Greenhouse v2",
    category: "Personal",
    tags: ["C++", "Arduino", "I2C", "ESP32"],
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600",
    imageAlt: "Close-up of smart greenhouse automated climate system circuit sensors wired into an Arduino node",
    shortDescription: "Autonomous climate control system featuring soil moisture sensors and automated irrigation logic.",
    featured: true,
    longDescription: `
      <h3 class="text-on-surface font-display text-body-lg font-bold">Project Overview</h3>
      <p class="text-on-surface-variant font-body-md">For the Smart Greenhouse v2 project, I designed and fabricated a fully autonomous botanical environmental manager. It controls ambient lighting, fans, soil hydration level, and nutrient delivery systems using a network of low-cost, high-reliability microcontrollers.</p>
      
      <h3 class="text-on-surface font-display text-body-lg font-bold mt-6">Key Accomplishments & Results</h3>
      <ul class="list-disc pl-5 mt-2 space-y-2 text-on-surface-variant font-body-md text-sm">
        <li>Designed an Arduino/ESP32 firmware architecture with multiple non-blocking hardware loops (using millis-timers instead of long delays).</li>
        <li>Created custom I2C sensor bus connectors integrating high-accuracy temperature/humidity (SHT31) and capacitive soil moisture sensors.</li>
        <li>Engineered a custom solid-state relay distribution board to toggle water pumps (12V solenoid valves) safely away from human components.</li>
        <li>Reduced water consumption by 35% compared to timed irrigation cycles by utilizing live soil-dryness threshold telemetry.</li>
      </ul>
    `
  },
  {
    id: "supply-chain-kpi",
    title: "Supply Chain KPI Tool",
    category: "Dashboards",
    tags: ["Tableau", "SQL", "Excel VBA"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    imageAlt: "Supply chain management metrics visualized neatly on a large high fidelity Tableau tablet dashboard",
    shortDescription: "Real-time monitoring of logistics lead times and inventory turnover rates for regional distributors.",
    featured: true,
    longDescription: `
      <h3 class="text-on-surface font-display text-body-lg font-bold">Project Overview</h3>
      <p class="text-on-surface-variant font-body-md">This business intelligence initiative focused on unifying fragmented distribution data formats across 4 regional warehouses into a clean, operational Tableau and SQL pipeline.</p>
      
      <h3 class="text-on-surface font-display text-body-lg font-bold mt-6">Key Accomplishments & Results</h3>
      <ul class="list-disc pl-5 mt-2 space-y-2 text-on-surface-variant font-body-md text-sm">
        <li>Engineered an automated SQL server routine (ETL) to cleanse, merge, and deduplicate shipping rows nightly.</li>
        <li>Designed a custom, high-contrast operational layout utilizing Material Design principles to display real-time safety stock alerts.</li>
        <li>Created automated forecasting spreadsheets powered by legacy VBA scripts, translating legacy ERP CSV outputs into instant load forms.</li>
        <li>Enabled logistics teams to identify visual shipping bottlenecks, cutting transit dwell delays by an average of 1.2 days.</li>
      </ul>
    `
  },
  {
    id: "cnc-jig-design",
    title: "Custom CNC Jig Design",
    category: "Manufacturing",
    tags: ["SolidWorks", "GD&T", "Steel"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    imageAlt: "Detailed mechanical Universal modular steel fixture clamped assembly schematic in high resolution",
    shortDescription: "Iterative design of universal modular fixtures to reduce setup time by 45% in batch production.",
    featured: false,
    longDescription: `
      <h3 class="text-on-surface font-display text-body-lg font-bold">Project Overview</h3>
      <p class="text-on-surface-variant font-body-md">Faced with extensive calibration downtime during changeovers in a multi-product job shop, I designed a set of universal, modular CNC manufacturing jigs. These allow precise part lockups using standard toggle clamps and interchangeable locating pins.</p>
      
      <h3 class="text-on-surface font-display text-body-lg font-bold mt-6">Key Accomplishments & Results</h3>
      <ul class="list-disc pl-5 mt-2 space-y-2 text-on-surface-variant font-body-md text-sm">
        <li>Conducted formal stress & tolerance analysis (Finite Element Analysis) inside SolidWorks to guarantee structural stiffness under high 3-axis load milling.</li>
        <li>Applied strict Geometric Dimensioning and Tolerancing (GD&T) principles, achieving repeatable locates within ±0.015mm.</li>
        <li>Redesigned part clamping orientations to prevent operator errors (poke-yoke/mistake-proofing).</li>
        <li>Slashed milling fixture recalibration setup times from 34 minutes down to 8.5 minutes (a 75% setup speed improvement).</li>
      </ul>
    `
  },
  {
    id: "lora-mesh-network",
    title: "LoRa Mesh Network",
    category: "Personal-Arduino",
    tags: ["ESP32", "C++", "RadioLib", "Arduino"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
    imageAlt: "LoRaWAN nodes connected in mesh network topology on electrical table workstation with instruments",
    shortDescription: "Developing a low-power, long-range communication protocol for remote environmental monitoring.",
    featured: false,
    longDescription: `
      <h3 class="text-on-surface font-display text-body-lg font-bold">Project Overview</h3>
      <p class="text-on-surface-variant font-body-md">This wireless networking project explored field deployment of self-assembling mesh systems using low-power, sub-gigahertz LoRa (Long Range) modems coupled directly to low-footprint ESP32 boards.</p>
      
      <h3 class="text-on-surface font-display text-body-lg font-bold mt-6">Key Accomplishments & Results</h3>
      <ul class="list-disc pl-5 mt-2 space-y-2 text-on-surface-variant font-body-md text-sm">
        <li>Programmed a robust flood-routing communication framework in C++ incorporating CSMA/CA mesh packet retry timers.</li>
        <li>Implemented active deep-sleep management routines, allowing outdoor battery nodes to survive up to 14 months on standard 18650 lithium cells.</li>
        <li>Designed an offline buffer log storing messages securely in modular flash units if peer packet deliveries fail temporarily.</li>
        <li>Created high-gain directional antenna layouts, achieving proven node-to-node line-of-sight signal hops of over 4.2 kilometers.</li>
      </ul>
    `
  },
  {
    id: "lean-5s-implementation",
    title: "Lean 5S Implementation",
    category: "Professional-Manufacturing",
    tags: ["Lean Six Sigma", "Visio", "ERP", "Manufacturing"],
    image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=600",
    imageAlt: "Clean optimized floor layout mapped on blueprint for ergonomic production flow according to Lean 5S principles",
    shortDescription: "Leading a facility-wide 5S overhaul that reduced workplace waste by 15% and improved safety scores.",
    featured: false,
    longDescription: `
      <h3 class="text-on-surface font-display text-body-lg font-bold">Project Overview</h3>
      <p class="text-on-surface-variant font-body-md">To combat layout clutter and long walk-times in a mechanical assembly facility, I planned and executed a comprehensive 5S system (Sort, Set in order, Shine, Standardize, Sustain).</p>
      
      <h3 class="text-on-surface font-display text-body-lg font-bold mt-6">Key Accomplishments & Results</h3>
      <ul class="list-disc pl-5 mt-2 space-y-2 text-on-surface-variant font-body-md text-sm">
        <li>Mapped step-by-step workflow spaghetti diagrams using Visio to visualize and cut physical walking wastes (muda).</li>
        <li>Organized focus workshops with operators to trace, color-code, and label workbenches for specialized hand tools.</li>
        <li>Established formal, standardized cleaning checklists integrated directly into our digital ERP shifts scheduled dashboard.</li>
        <li>Measured a 15% improvement in overall order-prep dispatch cycles and achieved 100% safety audit compliance scores.</li>
      </ul>
    `
  }
];
