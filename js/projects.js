window.projectsData = [
  {
    id: "tms-deployment",
    title: "TMS Deployment in Veolia",
    category: "Professional",
    tags: ["TMS", "STRATEGIC PROJECT", "DATA ANALYSIS"],
    image: "assets/images/tms-deployment.png",
    imageAlt: "Image of TMS Deployment Report",
    shortDescription: "analyzing 360K+ delivery lines and processes with 135 variations to define the best deployment strategy",
    featured: true,
    longDescription: `
      <h3 class="text-on-surface font-display text-body-lg font-bold">Project Overview</h3>
      <p class="text-on-surface-variant font-body-md">This project focused on suporting logistics to find the most effective way to deploy a TMS in Veolia WTS</p>
      
      <h3 class="text-on-surface font-display text-body-lg font-bold mt-6">Key Accomplishments & Results</h3>
      <ul class="list-disc pl-5 mt-2 space-y-2 text-on-surface-variant font-body-md text-sm">
        <li>Supported the Global Transportation Management System (TMS) on implementation by performing quantitative and qualitative data analysis on our 90+ plants and warehouse, 360K+ global deliveries/year in SAP, with appropriate reports to SC VP & Continuous Improvement Director</li>
      </ul>
    `
  },
  {
    id: "anti-sway-system",
    title: "Modelisation of anti-sway system in gantry cranes",
    category: "Personal",
    tags: ["C++","PID Control", "Arduino", "I2C", "ESP32"],
    image: "assets/images/Anti-Sway_System.png",
    imageAlt: "Modelisation of anti-sway system in gantry cranes",
    shortDescription: "I was curious about container unloading efficiency under Marseille's strong 'mistral' winds.",
    featured: true,
    longDescription: `
      <h3 class="text-on-surface font-display text-body-lg font-bold">Project Overview</h3>
      <p class="text-on-surface-variant font-body-md">Curious about container unloading efficiency under the strong Marseille "mistral" wind (south of france is very windy),</p>
      
      <h3 class="text-on-surface font-display text-body-lg font-bold mt-6">Key Accomplishments & Results</h3>
      <ul class="list-disc pl-5 mt-2 space-y-2 text-on-surface-variant font-body-md text-sm">
        <li>I modeled crane dynamics with SCILAB PID control and tested my hypotheses using an Arduino and Lego anti-sway prototype.</li>
        <li>Using official PACECO Documentation and my own research, I developed a mathematical model of the crane's sway dynamics and implemented a PID control algorithm to stabilize the load during sway/wind gusts.</li>
        <li>To validate my findings, I conducted an on-site visit to a CMA CGM ship at the port of Marseille.</li>
        <li>Ultimately, I determined that motor sizing alone is insufficient for stabilization, requiring a powerful coupled motor and piston damper system instead.</li>
      </ul>
    `
  },
  {
    id: "Start-Up-Dev",
    title: "Digital Twin",
    category: "Professional",
    tags: ["Digital Twin", "C#","Vertex optimization","VR"],
    image: "assets/images/VR_Sim.png",
    imageAlt: "Digital Twin of 20.000 Tons aluminum stamping process for Airbus A320 landing gear",
    shortDescription: "3D Simulation of 20.000 Tons aluminum stamping process for Airbus A320 landing gear",
    featured: true,
    longDescription: `
      <h3 class="text-on-surface font-display text-body-lg font-bold">Project Overview</h3>
      <p class="text-on-surface-variant font-body-md">Designed VR simulation solution to modernize Aubert & Duval's 20,000-ton aluminum stamping press and improve process repeatability.</p>
      
      <h3 class="text-on-surface font-display text-body-lg font-bold mt-6">Key Accomplishments & Results</h3>
      <ul class="list-disc pl-5 mt-2 space-y-2 text-on-surface-variant font-body-md text-sm">
        <li>Earned National Entrepreneur Status (SNEE) recognition for Digital Twin in Industrial application and received initial funding for start-up development.</li>
        <li>Without prior knowledge, I followed up on a project between my engineering school and Aubert & Duval, worldwide leader in aluminium to improve the repeatability and reproducibility of their aluminium stamping press and lower total costs.</li>
        <li>Integrated Nvidia PhysX models and ABB RobotStudio to simulate realistic mathematical equations, positions, and liaisons for manipulators and lubricating robots.</li>
        <li>77% 3D model optimization: Reduced triangles and vertex count by 77% using Pixyz.</li>
        <li>Multiplied frame rate by 13.5 in worst-case scenarios, successfully preventing motion sickness in VR.</li>
      </ul>
    `
  },
  {
    id: "cnc-jig-design",
    title: "Washington DC Bus Reliability Dashboard",
    category: "Dashboard",
    tags: ["Dashboard", "API", "Monitoring", "Data Visualization"],
    image: "assets/images/C53_Dashboard.png",
    imageAlt: "Washington DC Bus Reliability Dashboard",
    shortDescription: "Using WMATA Public API, I track automatically the headway of C53 buses at the stop that interest me the most, and I display it in a simple dashboard to monitor bus reliability.",
    featured: false,
    longDescription: `
      <h3 class="text-on-surface font-display text-body-lg font-bold">Project Overview</h3>
      <p class="text-on-surface-variant font-body-md">Always waiting for the Bus C53, how reliable is it ? let's find out !</p>
      <a href="https://datastudio.google.com/reporting/fd856d2e-6a10-4764-85ac-2c144ad51690" class="text-primary hover:underline">Click here to check it out.</a>
      
      <h3 class="text-on-surface font-display text-body-lg font-bold mt-6">Key Accomplishments & Results</h3>
      <ul class="list-disc pl-5 mt-2 space-y-2 text-on-surface-variant font-body-md text-sm">
        <li>Played around with the API and google data studio, using research paper to determine which quality metric we should use.</li>
        <li>Turns out performance is dropping during peak commute hours.</li>
        <li>The bunching (bus next to one another) is very frequent.</li>
        <li>Average headway is slightly below 12 minutes during the day which is on target, congrats WMATA.</li>
      </ul>
    `
  },
  {
    id: "lora-mesh-network",
    title: "TBD",
    category: "Personal-Arduino",
    tags: ["TBD", "TBD", "TBD", "TBD"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
    imageAlt: "LoRaWAN nodes connected in mesh network topology on electrical table workstation with instruments",
    shortDescription: "TBD",
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
    id: "LSS-Black-Belt-Project",
    title: "Lean Six Sigma Black Belt project",
    category: "Professional-Manufacturing",
  tags: ["TBD", "TBD", "TBD", "TBD"],
    image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=600",
    imageAlt: "Clean optimized floor layout mapped on blueprint for ergonomic production flow according to Lean 5S principles",
    shortDescription: "TBD",
    featured: false,
    longDescription: `
      <h3 class="text-on-surface font-display text-body-lg font-bold">Project Overview</h3>
      <p class="text-on-surface-variant font-body-md">Got to be trained by ASQ PPast president in Lean Six Sigma methodologies, at a Black Belt Level !</p>
      
      <h3 class="text-on-surface font-display text-body-lg font-bold mt-6">Key Accomplishments & Results</h3>
      <ul class="list-disc pl-5 mt-2 space-y-2 text-on-surface-variant font-body-md text-sm">
        <li>TBD.</li>
        <li>TBD.</li>
        <li>TBD.</li>
        <li>Have my black belt :).</li>
      </ul>
    `
  }
];
