const researchJSON = {
    "Lazar Lab" : {
        "id": "comp-neuro",
        "Color": "#E38962",
        "Title": "Computational Neuroscience",
        "Tags": ['Computer science', 'Molecular bio'],
        "date": "In progress",
        "Pi": "Dr. Aurel Lazar",
        "Skills": ['More to come soon'],
        "Images": {},
        "Description": "More to come soon"       
    },
    "Agrawal Lab" : {
        "id": "rehab-robotics",
        "Color": "#5E239D",
        "Title": "Rehabilitation Robotics",
        "Tags": ['Robotics', 'Biomechanics', 'Computer science'],
        "date": "In progress",
        "Pi": "Dr. Sunil Agrawal",
        "Skills": ['Mechanical design, statics, and dynamics',
                'MATLAB simulations and C# scripting',
                'Experimental design and IRB protocols'],
        "Images": {'https://i.postimg.cc/8CkQ6WkF/robust-cable.jpg': "Knee pulley hardware and cable routing. Consists of a foldable post and pulleys that can vary in height according to patient dimensions", 
                'https://i.postimg.cc/2S7NyTYR/robust-full.png': "Full setup of RobUST with interactive game shown on monitor"},
        "Description": "The goal of the ROAR lab is to develop various tools, from cable-driven robots to VR games, to assist patients with motor impairments regain their skills. My work revolves around our system RobUST, which is a device intended to help spinal-cord injury patients regain their ability to stand without falling by applying controlled pertubations to their body, forcing them to practice regaining their balance. The purpose of RobUST is being expanded, and a part of this involves achieving assistance-free training - that is, nobody has to be present other than the patient and roboticst. Currently, we cannot achieve this as there is no assistance provided directly to the lower body to assist with keeping the patient upright. \n\n My project is to expand RobUST by adding the necessary hardware for cables routed to the knees for standing assistnace, and to validate whether this actually helps us achieve assistance-free training. To test this hypothesis, the experiment I designed is to determine changes in muscle activity and force symmetry when the knee cables are added. Along with this experiment is an interactive game I designed using C# and Unity that subjects can use to easily follow experimental tasks. These experiments are still underway, and I'm excited to see what the results show us!"        
    },
    "Nerurkar Lab" : {
        "id": "developmental-biomech",
        "Color": "#587921",
        "Title": "Developmental Biomechanics",
        "Tags": ['Biomechanics', 'Molecular bio', 'Computer science'],
        "date": "2020-2022",
        "Pi": "Dr. Nandan Nerurkar",
        "Skills": ['Embryology and developmental biology techniques',
                'Fluorescent and confocal microscopy',
                'Image segmentation with Python and OpenCV',
                'Experimental design'],
        "Images": {'https://i.postimg.cc/bN0B9JB1/FG-beads.png' : "Avian foregut visualized with dyed microbeads",
                    'https://i.postimg.cc/L6FWPfNH/Timelapse-FG.png': "Timelapse of avian foregut growth with cells dyed" },
        "Description": "Research in the Devlopmental Biomechanics lab is aimed at discovering both the molecular and mechanical basis of avian embryo development. My projcet specifically focused on understanding how the foregut elongates, something that has been studied for over half a century but is still poorly understood. \n\n My work entailed running experiments with various drug treatments to the embroys and employing confocal microscopy techniques to understand tissue mechanics on a 3D scale. I was also involved in developing image segmentation scripts to understand cell morphology under various conditions. By the end of my time at this lab, we discovered the stages at which foregut elongation is greatest. \n\n Check out some of the images I took of the chicken embryos below!"        
    },
    "Tabas Lab" : {
        "id": "immuno-and-athero",
        "Color": "#7FC5C2",
        "Title": "Immunology and Atherosclerosis",
        "Tags": ['Molecular bio'],
        "date": "2018, 2019",
        "Pi": "Dr. Ira Tabas",
        "Skills": ['Molecular biology assays (PCR, western and southern blot)', 
                'Cell culture and tissue harvesting',
                'Fluorescent microscopy',
                'ImageJ'],
        "Images": {},
        "Description": "I worked in this lab while I was in high school, making it my first exposure to medical research. In my first summer at the lab, I spent the majority of my time helping the post-docs with their projects and learning new skills. By my second summer, I had enough experience to be more involved in the work. I worked on two projects, one on epigenetic regulation of pro-resolving mediators in macrophages, and another on metabolism-regulated macrophage proliferation, both in the context of atherosclerosis. For both projects, I harvested and cultured cells, ran PCRs and western blots to test for gene and protein expression, imaged cells, and analyzed those images through ImageJ. At the end of my summer, we had discovered that methionine metabolism is necessary for the production of the pro-resolving mediators TGF-beta and IL-10, and that efferocytosis promotes macrophage proliferation."
    },
}

export default researchJSON 
