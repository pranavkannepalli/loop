const solutions = {
    NY: [
        {
            alt: "A bathroom sink with a low-flow faucet and aerator.",
            gov: 60,
            utility: 30,
            price: 476,
            setup: 1,
            image: "/solutions/low-faucet.png",
            imageNoBg: "/solution_models/low_flow.png",
            title: "Low-Flow Fixtures",
            stats: [
                {
                    data: 40,
                    units: "%",
                    description: "Reduction in water consumption",
                },
                { data: 10000, units: "gal/yr", description: "Water savings" },
            ],
            localProviders: [
                "Home Depot",
                "Lowe's",
                "Ferguson",
                "Local plumbing supply stores",
            ],
            type: [
                "Low-Flow Faucets",
                "Low-Flow Showerheads",
                "Low-Flow Toilets",
            ],
            description:
                "Low-flow fixtures include faucets, showerheads, and toilets designed to use less water while maintaining performance. They can save water, reduce utility bills, and help preserve the environment.",
            hometypes: ["Apartment", "Multi-family home", "Individual home"],
            costGraph: [
                [1985, 300],
                [1990, 320],
                [1995, 340],
                [2000, 345],
                [2005, 360],
                [2010, 375],
                [2015, 390],
                [2020, 420],
                [2025, 490],
            ],
            roiGraph: [
                [1985, 16],
                [1990, 23],
                [1995, 26],
                [2000, 32],
                [2005, 39],
                [2010, 44],
                [2015, 54],
                [2020, 82],
                [2025, 120],
            ],
            steps: [
                {
                    header: "Turn off water supply.",
                    description: "You can find this in your garage",
                },
                {
                    header: "Remove the old fixture.",
                    description:
                        "Consult the manufacturer's instructions for specific removal steps",
                },
                {
                    header: "Install the new low-flow fixture.",
                    description:
                        "Consult the manufacturer's instructions for specific installation steps",
                },
                {
                    header: "Turn the water supply on",
                    description: "Test the fixture before certifying it works",
                },
            ],
            utilityRebates: [
                {
                    price: 100,
                    label: "New York State Energy Research and Development Authority (NYSERDA)",
                },
                {
                    price: 200,
                    label: "New York City Department of Environmental Protection (DEP)",
                },
            ],
            govtRebates: [{ price: 60, label: "Federal tax credit" }],
            type: "water",
        },
        {
            alt: "A diagram of a greywater recycling system, showing water flowing from a shower and sink into a storage tank and being filtered before being reused for toilet flushing and irrigation",
            gov: 1100,
            utility: 1000,
            price: 5610,
            setup: 2,
            image: "/solutions/greywater_recycling.png",
            imageNoBg: "/solution_models/grey_water.png",
            title: "Greywater Recycling",
            stats: [
                {
                    data: 35,
                    units: "%",
                    description: "household water usage reduction",
                },
            ],
            description:
                "Installed in areas with high sunlight exposure such as rooftops and balconies, these silicon-based panels harness sunlight to produce electricity. ",
            hometypes: ["Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 2500],
                [1990, 3000],
                [1995, 3350],
                [2000, 3900],
                [2005, 4250],
                [2010, 4600],
                [2015, 4900],
                [2020, 5250],
                [2025, 5700],
            ],
            roiGraph: [
                [1985, 150],
                [1990, 110],
                [1995, 140],
                [2000, 150],
                [2005, 160],
                [2010, 190],
                [2015, 190],
                [2020, 180],
                [2025, 160],
            ],
            steps: [
                {
                    header: "Consult with a plumber or greywater system specialist",
                    description: "to determine the best system for your home.",
                },
                {
                    header: "Obtain necessary permits and approvals",
                    description: "from local authorities.",
                },
                {
                    header: "Install the greywater collection and storage system",
                    description:
                        "typically involving plumbing modifications and the installation of a storage tank.",
                },
                {
                    header: "Install the filtration and treatment system",
                    description:
                        "which may include a pump, filters, and disinfection equipment.",
                },
                {
                    header: "Connect the treated greywater",
                    description:
                        "to the toilet or irrigation system as appropriate.",
                },
                {
                    header: "Test the system",
                    description: "and make any necessary adjustments.",
                },
            ],
            utilityRebates: [
                {
                    price: 1000,
                    label: "Up to $1,000 for residential greywater systems",
                },
            ],
            govtRebates: [
                {
                    price: 30,
                    label: "Federal tax credit",
                },
            ],
            localProviders: [
                "Water Management Systems, Inc.",
                "Eco Brooklyn",
                "Green Water Solutions",
            ],
            types: [
                "Basic gravity-fed systems",
                "Pump-based systems with advanced filtration and treatment",
                "Integrated greywater and rainwater harvesting systems",
            ],

            type: "water",
        },
        {
            alt: "A diagram of a rainwater harvesting system, showing a roof with a gutter and downspout connected to a storage tank.",
            gov: 1500,
            utility: 1000,
            price: 2870,
            setup: 2,
            image: "/solutions/rainwater_harvesting.jpg",
            imageNoBg: "/solution_models/rainwater.png",
            title: "Rainwater Harvesting",
            stats: [
                {
                    data: 40,
                    units: "%",
                    description: "reduction in water bill costs",
                },
                {
                    data: 47000,
                    units: "gal/yr",
                    description: "saved per household",
                },
            ],
            description:
                "Rainwater harvesting systems collect and store rainwater from roofs, which can then be used for non-potable purposes such as watering plants, flushing toilets, and washing clothes.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 2500],
                [1990, 2700],
                [1995, 2850],
                [2000, 3000],
                [2005, 3150],
                [2010, 3300],
                [2015, 3000],
                [2020, 2950],
                [2025, 2850],
            ],
            roiGraph: [
                [1985, 400],
                [1990, 450],
                [1995, 460],
                [2000, 590],
                [2005, 660],
                [2010, 740],
                [2015, 820],
                [2020, 900],
                [2025, 1020],
            ],
            steps: [
                {
                    header: "Consult with a plumber or rainwater harvesting specialist",
                    description:
                        "Discuss and determine the most suitable rainwater harvesting system tailored to your home's needs and location.",
                },
                {
                    header: "Obtain any necessary permits and approvals",
                    description:
                        "Ensure compliance with local regulations by obtaining required permits and approvals before proceeding with installation.",
                },
                {
                    header: "Install the collection system",
                    description:
                        "Set up gutters and downspouts to channel rainwater into a storage tank, establishing the primary infrastructure of the harvesting system.",
                },
                {
                    header: "Install the filtration and treatment system",
                    description:
                        "Integrate essential components such as pumps, filters, and disinfection equipment to ensure the collected rainwater meets quality standards for intended usage.",
                },
                {
                    header: "Connect the treated rainwater",
                    description:
                        "Establish connections from the treatment system to designated non-potable water systems within your property, optimizing the utilization of harvested rainwater.",
                },
                {
                    header: "Test the system and make any necessary adjustments",
                    description:
                        "Conduct thorough testing to verify functionality and performance, making adjustments as needed to guarantee optimal operation and efficiency.",
                },
            ],
            utilityRebates: [
                {
                    price: 1000,
                    label: "New York City Department of Environmental Protection: For residential rainwater harvesting systems",
                },
                {
                    price: 1000,
                    label: "New York State Energy Research and Development Authority: For residential rainwater harvesting systems",
                },
            ],
            govtRebates: [{ price: 30, label: "state tax credit" }],
            localProviders: [
                "Rainwater Management Solutions",
                "Green Roofs and Water Management LLC.",
                "BlueBarrel Systems",
            ],
            types: [
                "Basic gravity-fed systems",
                "Pump-based systems with advanced filtration and treatment",
                "Integrated rainwater and greywater harvesting systems",
            ],

            type: "water",
        },
        {
            alt: "A xeriscaped garden featuring native plants, rock mulch, and a drip irrigation system.",
            gov: 2800,
            utility: 2000,
            price: 2640,
            setup: 3,
            image: "/solutions/xeriscaping.jpg",
            imageNoBg: "/solution_models/xeriscaping.png",
            title: "Xeriscaping",
            stats: [
                {
                    data: 70,
                    units: "%",
                    description: "decrease in water usage",
                },
            ],
            description:
                "Xeriscaping involves selecting drought-tolerant plants, using efficient irrigation methods, and incorporating water-saving techniques such as mulching and proper soil preparation.",
            hometypes: ["Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 3900],
                [1990, 3500],
                [1995, 3300],
                [2000, 3150],
                [2005, 3100],
                [2010, 3000],
                [2015, 2950],
                [2020, 2800],
                [2025, 2600],
            ],
            roiGraph: [
                [1985, 450],
                [1990, 750],
                [1995, 800],
                [2000, 900],
                [2005, 1200],
                [2010, 1500],
                [2015, 1800],
                [2020, 2300],
                [2025, 2400],
            ],
            steps: [
                {
                    header: "Assess the site and determine plant selection and hardscape elements",
                    description:
                        "Evaluate the site conditions to determine suitable plants and hardscape features for landscaping.",
                },
                {
                    header: "Remove existing turf or plants",
                    description:
                        "If necessary, clear the area of any existing turf or plants to prepare for landscaping.",
                },
                {
                    header: "Install efficient irrigation systems",
                    description:
                        "Implement water-saving irrigation methods such as drip or micro-sprinklers to ensure efficient water distribution.",
                },
                {
                    header: "Prepare the soil and incorporate organic matter",
                    description:
                        "Enhance soil quality by incorporating organic matter to improve water retention and overall soil health.",
                },
                {
                    header: "Plant drought-tolerant trees, shrubs, and groundcovers",
                    description:
                        "Select and plant species that are resilient to drought conditions, reducing the need for excessive watering.",
                },
                {
                    header: "Apply a layer of mulch",
                    description:
                        "Spread mulch over planted areas to conserve moisture, suppress weed growth, and improve soil health.",
                },
                {
                    header: "Monitor and adjust the irrigation system",
                    description:
                        "Regularly monitor the irrigation system's performance and adjust settings as necessary to ensure optimal plant health and water efficiency.",
                },
            ],
            utilityRebates: [
                {
                    price: 2000,
                    label: "New York City Department of Environmental Protection rebate for residential xeriscaping projects",
                },
            ],
            govtRebates: [
                {
                    price: 1800,
                    label: "for Federal tax credit",
                },
            ],
            localProviders: [
                "The Plant Doctor NYC",
                "Brooklyn Botanic Gardens",
                "New York Botanical Garden",
            ],
            types: [
                "Basic xeriscaping with native plants and efficient irrigation",
                "Advanced xeriscaping with water-saving technologies and smart irrigation systems",
            ],

            type: "water",
        },
        {
            alt: "A garden with plants being watered by a drip irrigation system.",
            gov: 600,
            utility: 750,
            price: 2100,
            setup: 3,
            image: "/solutions/drip_irrigation.jpg",
            imageNoBg: "/solution_models/drip_irrigation.png",
            title: "Drip Irrigation",
            stats: [
                {
                    data: 85,
                    units: "%",
                    description:
                        "reduction in water usage over traditional irrigation methods",
                },
            ],
            description:
                "Drip irrigation systems deliver water directly to the plant roots through a network of tubes and emitters, reducing water waste and promoting healthier plant growth.",
            hometypes: ["Multi-Family Home"],
            costGraph: [
                [1985, 3750],
                [1990, 3600],
                [1995, 3450],
                [2000, 3300],
                [2005, 3150],
                [2010, 2850],
                [2015, 2600],
                [2020, 2300],
                [2025, 2050],
            ],
            roiGraph: [
                [1985, 205],
                [1990, 230],
                [1995, 260],
                [2000, 340],
                [2005, 420],
                [2010, 490],
                [2015, 600],
                [2020, 620],
                [2025, 660],
            ],
            steps: [
                {
                    header: "Design the system layout",
                    description:
                        "Plan the layout of the irrigation system considering the positioning of water sources and plants for optimal water distribution.",
                },
                {
                    header: "Install a backflow preventer and pressure regulator",
                    description:
                        "Ensure the protection of the water supply by installing backflow preventers and pressure regulators.",
                },
                {
                    header: "Lay out the main and sub-main lines",
                    description:
                        "Position the main and sub-main lines, connecting them to the water source to facilitate water distribution throughout the irrigation system.",
                },
                {
                    header: "Install the drip lines or soaker hoses",
                    description:
                        "Place drip lines or soaker hoses along plant rows or around plants to deliver water directly to the root zone.",
                },
                {
                    header: "Connect the drip lines to the sub-main lines",
                    description:
                        "Use appropriate fittings to connect the drip lines to the sub-main lines, ensuring seamless water flow.",
                },
                {
                    header: "Install the emitters or micro-sprinklers",
                    description:
                        "Position emitters or micro-sprinklers at plant locations to deliver water evenly to individual plants.",
                },
                {
                    header: "Test the system",
                    description:
                        "Check the irrigation system for leaks and assess water distribution to ensure proper functionality.",
                },
                {
                    header: "Adjust the system as needed",
                    description:
                        "Make necessary adjustments to the system to enhance efficiency and ensure uniform watering across the landscape.",
                },
            ],
            utilityRebates: [
                {
                    price: 1500,
                    label: "New York City Department of Environmental Protection for residential drip irrigation systems",
                },
            ],
            govtRebates: [{ price: 600, label: "from Federal Tax Credit" }],
            localProviders: [
                "NYC Drip Irrigation",
                "Brooklyn Garden Supply",
                "The Plant Doctor",
            ],
            types: [
                "Basic drip irrigation system with adjustable emitters",
                "Micro-sprinkler system for larger areas",
                "Smart drip irrigation system with programmable timers and remote control",
            ],

            type: "water",
        },
        {
            alt: "A kitchen with a water-efficient dishwasher and washing machine",
            gov: 0,
            utility: 300,
            price: 1012,
            setup: 1,
            image: "/solutions/energy_efficient_appliances.jpg",
            imageNoBg: "/solution_models/dishwasher.png",
            title: "Water-Efficient Appliances",
            stats: [
                {
                    data: 40,
                    units: "%",
                    description: "reduction in water usage",
                },
                {
                    data: 50,
                    units: "%",
                    description: "reduction in energy usage",
                },
            ],
            description:
                "Water-efficient appliances include dishwashers, washing machines, showerheads, and toilets that are designed to use less water and energy while maintaining performance.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 1800],
                [1990, 1760],
                [1995, 1720],
                [2000, 1660],
                [2005, 1540],
                [2010, 1380],
                [2015, 1200],
                [2020, 1140],
                [2025, 980],
            ],
            roiGraph: [
                [1985, 100],
                [1990, 150],
                [1995, 250],
                [2000, 400],
                [2005, 600],
                [2010, 550],
                [2015, 400],
                [2020, 350],
                [2025, 330],
            ],
            steps: [
                {
                    header: "Research and select water-efficient appliances",
                    description:
                        "Choose appliances that meet your needs and budget while prioritizing water efficiency.",
                },
                {
                    header: "Purchase the appliances",
                    description:
                        "Buy the selected appliances from a local retailer or online.",
                },
                {
                    header: "Arrange for professional installation or self-installation",
                    description:
                        "Either hire a professional for installation or follow the manufacturer's instructions for self-installation.",
                },
                {
                    header: "Connect the appliances to water and energy sources",
                    description:
                        "Ensure proper connection of the appliances to appropriate water and energy sources as per installation guidelines.",
                },
                {
                    header: "Test the appliances",
                    description:
                        "Verify the functionality of the installed appliances to ensure they are operating correctly.",
                },
            ],
            utilityRebates: [
                {
                    price: 100,
                    label: "for ENERGY STAR clothes washers from rebates by Con Edison",
                },
                {
                    price: 50,
                    label: "for ENERGY STAR dishwashers from rebates by Con Edison",
                },
            ],
            govtRebates: [{ price: 0, label: "None Available" }],

            type: "water",
        },
        {
            alt: "A person taking a shorter shower to save water",
            gov: 0,
            utility: 0,
            price: 0,
            setup: 1,
            image: "/solutions/shorter_shower.jpg",
            imageNoBg: "/solution_models/shower.png",
            title: "Water-Saving Habits",
            stats: [
                {
                    data: 400,
                    units: "gal/day",
                    description:
                        "reduction in water usage from water-saving habits",
                },
                {
                    data: 20,
                    units: "%",
                    description: "reduction in water and energy usage",
                },
            ],
            description:
                "Water-saving practices include simple behavioral changes and the installation of water-efficient products, such as low-flow showerheads, faucet aerators, and dual-flush toilets.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 0],
                [1990, 0],
                [1995, 0],
                [2000, 0],
                [2005, 0],
                [2010, 0],
                [2015, 0],
                [2020, 0],
                [2025, 0],
            ],
            roiGraph: [
                [1985, 600],
                [1990, 667],
                [1995, 312],
                [2000, 251],
                [2005, 572],
                [2010, 742],
                [2015, 531],
                [2020, 307],
                [2025, 322],
            ],
            steps: [
                {
                    header: "Fix leaks",
                    description:
                        "Regularly inspect and repair leaks in faucets, pipes, and irrigation systems to prevent water wastage.",
                },
                {
                    header: "Install water-efficient fixtures",
                    description:
                        "Replace old fixtures with low-flow faucets, showerheads, and toilets to reduce water consumption.",
                },
                {
                    header: "Collect and reuse rainwater",
                    description:
                        "Install rain barrels or cisterns to collect rainwater for irrigation or other non-potable uses.",
                },
                {
                    header: "Implement drought-resistant landscaping",
                    description:
                        "Choose native plants and xeriscaping techniques that require minimal watering to maintain landscaping.",
                },
                {
                    header: "Use mulch and compost",
                    description:
                        "Apply mulch to soil surfaces to reduce evaporation and incorporate compost to improve soil water retention.",
                },
                {
                    header: "Adjust irrigation schedules",
                    description:
                        "Program irrigation systems to water plants during early morning or late evening hours to minimize water loss due to evaporation.",
                },
                {
                    header: "Take shorter showers",
                    description:
                        "Encourage family members to take shorter showers to reduce water consumption.",
                },
                {
                    header: "Turn off taps when not in use",
                    description:
                        "Remind everyone to turn off taps tightly after use to prevent unnecessary water wastage.",
                },
            ],
            utilityRebates: [{ price: 0, label: "None Available" }],
            govtRebates: [{ price: 0, label: "None Available" }],

            type: "water",
        },
        {
            alt: "A rooftop with solar panels installed, soaking up the sun's rays.",
            gov: 11000,
            utility: 5000,
            price: 20400,
            setup: 2,
            image: "/solutions/solar_panel.jpg",
            imageNoBg: "/solution_models/solar_panel.png",
            title: "Solar Panels",
            stats: [
                {
                    data: 80,
                    units: "%",
                    description: "reduction in household carbon footprint",
                },
                {
                    data: 9000,
                    units: "gal/yr",
                    description:
                        "of water saved from reduced energy consumption",
                },
            ],
            description:
                "Installed in areas with high sunlight exposure such as rooftops and balconies, these silicon-based panels harness sunlight to produce electricity. ",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 12000],
                [1990, 13500],
                [1995, 16000],
                [2000, 13500],
                [2005, 13000],
                [2010, 19000],
                [2015, 23000],
                [2020, 22000],
                [2025, 20000],
            ],
            roiGraph: [
                [1985, 1100],
                [1990, 1250],
                [1995, 1300],
                [2000, 1500],
                [2005, 1550],
                [2010, 1600],
                [2015, 1700],
                [2020, 1900],
                [2025, 2600],
            ],
            steps: [
                {
                    header: "Consult with a solar panel installation expert",
                    description:
                        "Discuss your energy needs and site conditions with a professional to determine the best solar panel system for your home.",
                },
                {
                    header: "Choose the right solar panel system",
                    description:
                        "Select a solar panel system that meets your energy requirements, budget, and space availability.",
                },
                {
                    header: "Obtain necessary permits and approvals",
                    description:
                        "Secure permits and approvals from your local government or relevant authorities to comply with regulations before installation.",
                },
                {
                    header: "Install the solar panels",
                    description:
                        "Mount the solar panels onto your roof or other suitable location and connect them to your home's electrical system.",
                },
                {
                    header: "Start generating clean, renewable energy",
                    description:
                        "Once installed, your solar panels will begin generating electricity, allowing you to save on your electricity bills and reduce your carbon footprint.",
                },
            ],
            utilityRebates: [
                { price: 0.2, label: "Per Watt installed from Con Edison" },
                {
                    price: 0.2,
                    label: "Per Watt installed with a max incentive of $5000 from National Grid",
                },
            ],
            govtRebates: [
                { price: 6000, label: "Federal Tax Deductible" },
                { price: 5000, label: "State Tax Credit" },
            ],

            type: "electricity",
        },
        {
            alt: "A wind turbine farm with several large turbines spinning in the wind.",
            gov: 18500,
            utility: 5000,
            price: 45600,
            setup: 3,
            image: "/solutions/wind_turbine.jpg",
            imageNoBg: "/solution_models/wind_turbine.png",
            title: "Wind Turbine",
            stats: [
                {
                    data: 90,
                    units: "%",
                    description: "reduction in household carbon footprint",
                },
                {
                    data: 1000,
                    units: "gal/yr",
                    description:
                        "of water saved from reduced energy consumption",
                },
            ],
            description:
                "Wind turbines convert wind energy into electricity, which can be used to power your home or business.",
            hometypes: ["Multi-Family Home"],
            costGraph: [
                [1985, 140000],
                [1990, 120000],
                [1995, 90000],
                [2000, 85000],
                [2005, 60000],
                [2010, 55000],
                [2015, 50000],
                [2020, 48000],
                [2025, 45000],
            ],
            roiGraph: [
                [1985, 2250],
                [1990, 2650],
                [1995, 2800],
                [2000, 3200],
                [2005, 3400],
                [2010, 3600],
                [2015, 3650],
                [2020, 4000],
                [2025, 5500],
            ],
            steps: [
                {
                    header: "Consult with a wind turbine installation expert",
                    description:
                        "Discuss your property and energy needs with a professional to determine the best wind turbine solution for your home.",
                },
                {
                    header: "Choose the right wind turbine",
                    description:
                        "Select a wind turbine model that is suitable for your property size, wind conditions, and energy requirements.",
                },
                {
                    header: "Obtain necessary permits and approvals",
                    description:
                        "Acquire permits and approvals from your local government or relevant authorities to ensure compliance with regulations before installation.",
                },
                {
                    header: "Install the wind turbine",
                    description:
                        "Mount the wind turbine on your property and connect it to your home's electrical system.",
                },
                {
                    header: "Start generating clean, renewable energy",
                    description:
                        "Once installed, your wind turbine will begin generating electricity, allowing you to save on your electricity bills and reduce your carbon footprint.",
                },
            ],
            utilityRebates: [
                { price: 0.1, label: "Per Watt installed from Con Edison" },
                {
                    price: 0.15,
                    label: "Per Watt installed with a max incentive of $7500 from National Grid",
                },
            ],
            govtRebates: [
                { price: 13500, label: "Federal Tax Deductible" },
                { price: 2550, label: "State Tax Credit" },
            ],

            type: "electricity",
        },
        {
            alt: "A kitchen with a energy-efficient dishwasher and washing machine",
            gov: 0,
            utility: 300,
            price: 1012,
            setup: 1,
            image: "/solutions/energy_efficient_appliances.jpg",
            imageNoBg: "/solution_models/fridge.png",
            title: "Energy-Efficient Appliances",
            stats: [
                {
                    data: 50,
                    units: "%",
                    description: "reduction in energy usage",
                },
                {
                    data: 40,
                    units: "%",
                    description: "reduction in water usage",
                },
            ],
            description:
                "Energy-efficient appliances use advanced technologies and design features to minimize energy consumption and water usage while maintaining optimal performance.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 1800],
                [1990, 1760],
                [1995, 1720],
                [2000, 1660],
                [2005, 1540],
                [2010, 1380],
                [2015, 1200],
                [2020, 1140],
                [2025, 980],
            ],
            roiGraph: [
                [1985, 100],
                [1990, 150],
                [1995, 250],
                [2000, 400],
                [2005, 600],
                [2010, 550],
                [2015, 400],
                [2020, 350],
                [2025, 330],
            ],
            steps: [
                {
                    header: "Research and choose the right energy-efficient appliance",
                    description:
                        "Explore options that match your requirements and budget while prioritizing energy efficiency.",
                },
                {
                    header: "Remove the old appliance",
                    description:
                        "If necessary, uninstall and remove the old appliance to make room for the new one.",
                },
                {
                    header: "Install the new energy-efficient appliance",
                    description:
                        "Follow the manufacturer's instructions carefully to properly install the new appliance.",
                },
                {
                    header: "Connect the appliance to necessary utilities",
                    description:
                        "Ensure proper connections to water, gas, or electricity sources as required for the appliance to function.",
                },
                {
                    header: "Test the appliance",
                    description:
                        "Verify that the appliance operates correctly and efficiently after installation by conducting thorough testing.",
                },
            ],
            utilityRebates: [
                {
                    price: 50,
                    label: "for ENERGY STAR refrigerators from rebates by Con Edison",
                },
                {
                    price: 75,
                    label: "for ENERGY STAR dishwashers from rebates by Con Edison",
                },
                {
                    price: 100,
                    label: "for ENERGY STAR refrigerators from rebates by New York Grid",
                },
                {
                    price: 75,
                    label: "for ENERGY STAR dishwashers from rebates by New York Grid",
                },
            ],
            govtRebates: [
                { price: 250, label: "Federal Tax Credit" },
                {
                    price: 250,
                    label: "State Tax Credit from New York State Energy Research and Development Authority",
                },
            ],

            type: "electricity",
        },
        {
            alt: "An example of a house with LED Lighting installed",
            gov: 0,
            utility: 300,
            price: 21,
            setup: 1,
            image: "/solutions/leds.jpg",
            imageNoBg: "/solution_models/leds.png",
            title: "LED Lighting",
            stats: [
                {
                    data: 70,
                    units: "%",
                    description: "reduction in CO2 emissions",
                },
                {
                    data: 1000,
                    units: "gallons",
                    description: "savings in water per year",
                },
            ],
            description:
                "LED lighting is a highly efficient, long-lasting, and environmentally friendly lighting solution that uses light-emitting diodes to produce light.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 125],
                [1990, 107],
                [1995, 92],
                [2000, 66],
                [2005, 58],
                [2010, 45],
                [2015, 39],
                [2020, 34],
                [2025, 18],
            ],
            roiGraph: [
                [1985, 0.2],
                [1990, 0.2],
                [1995, 0.3],
                [2000, 0.4],
                [2005, 0.7],
                [2010, 1.6],
                [2015, 2.4],
                [2020, 4.5],
                [2025, 9],
            ],
            steps: [
                {
                    header: "Turn off the power",
                    description:
                        "Switch off the power to the fixture or lamp that you're replacing to ensure safety during the process.",
                },
                {
                    header: "Remove the old bulb",
                    description:
                        "Take out the old bulb and dispose of it properly, following any applicable recycling guidelines.",
                },
                {
                    header: "Screw in the new LED bulb",
                    description:
                        "Install the new LED bulb into the socket, ensuring it is securely screwed in place.",
                },
                {
                    header: "Turn the power back on",
                    description:
                        "Restore power to the fixture or lamp, then test the new LED bulb to ensure it is functioning correctly.",
                },
            ],
            utilityRebates: [
                {
                    price: 10,
                    label: "rebate for LED lighting upgrades by Con Edison",
                },
                {
                    price: 12,
                    label: "rebate for LED lighting upgrades by National Grid",
                },
                {
                    price: 15,
                    label: "rebate for LED lighting upgrades by NYSERDA",
                },
            ],
            govtRebates: [
                {
                    price: 15,
                    label: "tax credit for the purchase of LED lighting by the federal government, up to $200",
                },
                {
                    price: 10,
                    label: "tax credit for the purchase of LED lighting by New York State, up to $200",
                },
                {
                    price: 20,
                    label: "tax credit for the purchase of LED lighting by NYSERDA, up to $200",
                },
            ],

            type: "electricity",
        },
        {
            alt: "Smart Home Technology",
            gov: 300,
            utility: 350,
            price: 570,
            setup: 2,
            image: "/solutions/smart_thermostat.jpg",
            imageNoBg: "/solution_models/thermostat.png",
            title: "Smart Home Technology",
            stats: [
                {
                    data: 15,
                    units: "%",
                    description: "reduction in CO2 emissions",
                },
                {
                    data: 10000,
                    units: "gallons",
                    description: "savings in water per year",
                },
            ],
            description:
                "Smart home technology connects various devices and systems, such as lighting, heating, security, and entertainment, to a central hub or smartphone app, allowing users to control and monitor their homes remotely",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 3200],
                [1990, 2200],
                [1995, 1600],
                [2000, 1200],
                [2005, 800],
                [2010, 600],
                [2015, 500],
                [2020, 450],
                [2025, 600],
            ],
            roiGraph: [
                [1985, 35],
                [1990, 38],
                [1995, 42],
                [2000, 46],
                [2005, 55],
                [2010, 70],
                [2015, 90],
                [2020, 110],
                [2025, 150],
            ],
            steps: [
                {
                    header: "Research and choose smart home devices",
                    description:
                        "Select devices that suit your requirements and budget after thorough research.",
                },
                {
                    header: "Purchase and set up",
                    description:
                        "Buy the chosen devices and set up an account with the manufacturer or a smart home platform.",
                },
                {
                    header: "Install and connect to Wi-Fi",
                    description:
                        "Follow the manufacturer's instructions to install the devices and connect them to your home's Wi-Fi network.",
                },
                {
                    header: "Configure and create scenes",
                    description:
                        "Configure the devices and create scenes or automation using the app or platform.",
                },
                {
                    header: "Test and adjust",
                    description:
                        "Test the devices to ensure proper functionality and make any necessary adjustments.",
                },
            ],
            utilityRebates: [
                {
                    price: 85,
                    label: "rebate for smart thermostats by Con Edison",
                },
                {
                    price: 62.5,
                    label: "rebate for smart thermostats by National Grid",
                },
                {
                    price: 75,
                    label: "rebate for smart lighting systems by National Grid",
                },
                {
                    price: 70,
                    label: "rebate for smart thermostats by NYSERDA",
                },
                {
                    price: 50,
                    label: "rebate for smart lighting systems by NYSERDA",
                },
            ],
            govtRebates: [
                {
                    price: 175,
                    label: "tax credit for the purchase of smart home technology by the federal government, up to $500",
                },
                {
                    price: 150,
                    label: "tax credit for the purchase of smart home technology by New York State, up to $500",
                },
                {
                    price: 80,
                    label: "tax credit for the purchase of smart home technology by NYSERDA, up to $500",
                },
            ],

            type: "electricity",
        },
        {
            alt: "A picture of a home battery system",
            gov: 5000,
            utility: 3000,
            price: 5200,
            setup: 2,
            image: "/solutions/home-battery.png",
            imageNoBg: "/solution_models/battery.png",
            title: "Home Battery Systems",
            stats: [
                {
                    data: 7,
                    units: "ton",
                    description: "reduction in CO2 emissions per year",
                },
                {
                    data: 10000,
                    units: "gallons",
                    description: "savings in water per year",
                },
            ],
            description:
                " A home battery system stores energy from solar panels or the grid for use during peak demand or power outages. It can help you save money on electricity bills and reduce your carbon footprint.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 10000],
                [1990, 12000],
                [1995, 13000],
                [2000, 14000],
                [2005, 14500],
                [2010, 11000],
                [2015, 8000],
                [2020, 6000],
                [2025, 5000],
            ],
            roiGraph: [
                [1985, 35],
                [1990, 38],
                [1995, 42],
                [2000, 46],
                [2005, 55],
                [2010, 70],
                [2015, 90],
                [2020, 110],
                [2025, 150],
            ],
            steps: [
                {
                    header: "Research and select the right battery system",
                    description:
                        "Choose a battery system that suits your home and energy needs after thorough research.",
                },
                {
                    header: "Consult with a professional installer",
                    description:
                        "Discuss your home's compatibility and requirements with a professional installer.",
                },
                {
                    header: "Purchase and prepare necessary components",
                    description:
                        "Procure the required components for installation and prepare them accordingly.",
                },
                {
                    header: "Install the battery system",
                    description:
                        "Follow the manufacturer's instructions and local building codes to install the battery system.",
                },
                {
                    header: "Connect to home's electrical system",
                    description:
                        "Connect the battery system to your home's electrical system and solar panels if applicable.",
                },
                {
                    header: "Test the system",
                    description:
                        "Test the installed system to ensure proper functionality and make necessary adjustments.",
                },
            ],
            utilityRebates: [
                {
                    price: 750,
                    label: "rebate for home battery systems by Con Edison",
                },
                {
                    price: 1000,
                    label: "rebate for home battery systems by National Grid",
                },
                {
                    price: 1250,
                    label: "rebate for home battery systems by NYSERDA",
                },
            ],
            govtRebates: [
                {
                    price: 1750,
                    label: "tax credit for the purchase of a home battery system by the federal government",
                },
                {
                    price: 1200,
                    label: "tax credit for the purchase of a home battery system by New York State",
                },
                {
                    price: 2000,
                    label: "tax credit for the purchase of a home battery system by NYSERDA",
                },
            ],

            type: "electricity",
        },
        {
            alt: "A picture of a backyard compost bin with grass clippings and food scraps inside.",
            gov: 5000,
            utility: 3000,
            price: 189,
            setup: 1,
            image: "/solutions/composting.png",
            imageNoBg: "/solution_models/compost.png",
            title: "Composting",
            stats: [
                {
                    data: 30,
                    units: "%",
                    description: "reduction in household waste",
                },
                {
                    data: 25,
                    units: "%",
                    description:
                        "savings in garden water usage by improving soil moisture retention",
                },
            ],
            description:
                "Composting is the process of breaking down organic waste, such as food scraps and yard waste, into nutrient-rich soil that can be used to grow plants and improve soil health.",
            hometypes: ["Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 400],
                [1990, 350],
                [1995, 200],
                [2000, 150],
                [2005, 100],
                [2010, 50],
                [2015, 120],
                [2020, 145],
                [2025, 200],
            ],
            roiGraph: [
                [1985, 5],
                [1990, 5],
                [1995, 6],
                [2000, 7],
                [2005, 9],
                [2010, 10],
                [2015, 12],
                [2020, 11],
                [2025, 10],
            ],
            steps: [
                {
                    header: "Choose a composting system",
                    description:
                        "Select a composting system, such as a bin, tumbler, or pile, that suits your needs and available space.",
                },
                {
                    header: "Set up the composting system",
                    description:
                        "Place the composting system in a convenient location, such as a backyard or balcony, ensuring easy access.",
                },
                {
                    header: "Add materials to the compost bin",
                    description:
                        "Add a mix of 'brown' materials (e.g., dry leaves, straw, shredded paper) and 'green' materials (e.g., food scraps, grass clippings, coffee grounds) to the compost bin.",
                },
                {
                    header: "Maintain the compost",
                    description:
                        "Regularly turn the compost materials and maintain the right moisture level, similar to a damp sponge, to facilitate decomposition.",
                },
                {
                    header: "Monitor and adjust",
                    description:
                        "Monitor the compost's progress and adjust the materials as needed to ensure proper decomposition.",
                },
                {
                    header: "Use the compost",
                    description:
                        "Once the compost is ready (dark and crumbly), incorporate it into your garden or potted plants to enhance soil health and fertility.",
                },
            ],
            utilityRebates: [
                {
                    price: 75,
                    label: "rebate for purchasing a composting system by Con Edison",
                },
                {
                    price: 100,
                    label: "rebate for composting systems by National Grid",
                },
                {
                    price: 140,
                    label: "rebate for composting systems by NYSERDA",
                },
            ],
            govtRebates: [
                {
                    price: 120,
                    label: "tax credit for the purchase of a composting system by the federal government, up to $500",
                },
                {
                    price: 250,
                    label: "tax credit for the purchase of a composting system by New York State, up to $500",
                },
                {
                    price: 200,
                    label: "tax credit for the purchase of a composting system by NYSERDA, up to $500",
                },
            ],

            type: "waste",
        },
        {
            alt: "A picture of a recycling bin with paper, plastic, and glass materials inside.",
            gov: 0,
            utility: 0,
            price: 0,
            setup: 1,
            image: "/solutions/recycling.jpg",
            imageNoBg: "/solution_models/recycling.png",
            title: "Recycling",
            stats: [
                {
                    data: 17,
                    units: "trees",
                    description: "saved by recycling one ton of paper",
                },
                {
                    data: 7000,
                    units: "gallons",
                    description: "saved by recycling one ton of paper",
                },
                {
                    data: 3,
                    units: "cubic yards",
                    description: "saved by recycling one ton of paper",
                },
                {
                    data: 1500,
                    units: "gallons",
                    description:
                        "equivalent gasoline saved by recycling one ton of plastic",
                },
                {
                    data: 9,
                    units: "gallons",
                    description:
                        "equivalent oil saved by recycling one ton of glass",
                },
            ],
            description:
                " Recycling is the process of collecting and processing materials that would otherwise be thrown away as trash and turning them into new products.",
            hometypes: ["Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 0],
                [1990, 0],
                [1995, 0],
                [2000, 0],
                [2005, 0],
                [2010, 0],
                [2015, 0],
                [2020, 0],
                [2025, 0],
            ],
            roiGraph: [
                [1985, 0],
                [1990, 0],
                [1995, 0],
                [2000, 0],
                [2005, 0],
                [2010, 0],
                [2015, 0],
                [2020, 0],
                [2025, 0],
            ],
            steps: [
                {
                    header: "Contact local recycling program",
                    description:
                        "Obtain a recycling bin or inquire about curbside pickup options from your local recycling program.",
                },
                {
                    header: "Set up recycling bin",
                    description:
                        "Place the recycling bin in your home or apartment for convenient disposal of recyclable materials.",
                },
                {
                    header: "Sort recyclable materials",
                    description:
                        "Follow your local program's guidelines to properly sort recyclable materials before placing them in the bin.",
                },
                {
                    header: "Rinse and clean recyclables",
                    description:
                        "Ensure recyclables are rinsed and cleaned before placing them in the bin to avoid contamination.",
                },
                {
                    header: "Dispose of recyclables",
                    description:
                        "Place your recycling bin at the curb on pickup day or take recyclables to a local drop-off center as per your program's instructions.",
                },
                {
                    header: "Continue recycling",
                    description:
                        "Keep recycling and encourage neighbors to do the same to promote environmental sustainability.",
                },
            ],
            utilityRebates: [
                {
                    price: 0,
                    label: "None Available",
                },
            ],
            govtRebates: [
                {
                    price: 0,
                    label: "None available",
                },
            ],

            type: "waste",
        },
        {
            alt: "A picture of a composting toilet installed in a bathroom.",
            gov: 0,
            utility: 0,
            price: 4160,
            setup: 1,
            image: "/solutions/composting_toilet.jpg",
            imageNoBg: "/solution_models/toilet.png",
            title: "Composting Toilets",
            stats: [
                {
                    data: 6600,
                    units: "gallons",
                    description:
                        "savings in water per person per year compared to traditional flush toilets",
                },
                {
                    data: 90,
                    units: "%",
                    description:
                        "reduction in greenhouse gas emissions compared to conventional waste management methods",
                },
                {
                    data: 1.3,
                    units: "tons",
                    description: "savings in CO2 per person per year",
                },
            ],
            description:
                "Composting toilets are waterless or low-water systems that convert human waste into compost through natural decomposition processes. They can be self-contained or central systems, and they require little maintenance once installed.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 2100],
                [1990, 2200],
                [1995, 2400],
                [2000, 2700],
                [2005, 2800],
                [2010, 2800],
                [2015, 3200],
                [2020, 3600],
                [2025, 4300],
            ],
            roiGraph: [
                [1985, 200],
                [1990, 250],
                [1995, 350],
                [2000, 550],
                [2005, 950],
                [2010, 1750],
                [2015, 2150],
                [2020, 2350],
                [2025, 2450],
            ],
            steps: [
                {
                    header: "Choose the appropriate composting toilet",
                    description:
                        "Select a composting toilet that suits your home's needs and specifications.",
                },
                {
                    header: "Prepare the installation area",
                    description:
                        "Ensure the installation area is properly prepared and has adequate ventilation.",
                },
                {
                    header: "Install the toilet",
                    description:
                        "Follow the manufacturer's instructions to install the composting toilet securely.",
                },
                {
                    header: "Connect plumbing or electrical components",
                    description:
                        "If required, connect plumbing or electrical components according to the toilet's specifications.",
                },
                {
                    header: "Add composting medium and begin use",
                    description:
                        "Fill the composting toilet with the appropriate composting medium and start using it as intended.",
                },
            ],
            utilityRebates: [
                {
                    price: 0,
                    label: "None Available",
                },
            ],
            govtRebates: [
                {
                    price: 0,
                    label: "None available",
                },
            ],

            type: "waste",
        },
        {
            alt: "An electric vehicle being charged at a charging station.",
            gov: 1000,
            utility: 9200,
            price: 26200,
            setup: 2,
            image: "/solutions/electric_vehicles.jpeg",
            imageNoBg: "/solution_models/ev.png",
            title: "Electric Vehicles",
            stats: [
                {
                    data: 0,
                    units: "emissions",
                    description:
                        "EVs produce zero tailpipe emissions, significantly reducing CO2 emissions compared to gas-powered cars.",
                },
                {
                    data: 165,
                    units: "tons",
                    description:
                        "A single EV can save an average of 165 tons of CO2 per year, compared to a gas-powered car.",
                },
            ],
            description:
                "Electric vehicle charging stations provide a convenient and eco-friendly way to power your car, allowing you to charge at home or at public locations.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 140000],
                [1990, 120000],
                [1995, 118000],
                [2000, 112000],
                [2005, 98000],
                [2010, 76000],
                [2015, 46000],
                [2020, 39000],
                [2025, 23000],
            ],
            roiGraph: [
                [1985, 150],
                [1990, 300],
                [1995, 350],
                [2000, 400],
                [2005, 400],
                [2010, 1200],
                [2015, 2500],
                [2020, 5200],
                [2025, 7500],
            ],
            steps: [
                {
                    header: "Research and select an Electric Vehicle (EV)",
                    description:
                        "Research different EV models to find one that meets your needs and preferences. Consider factors such as range, charging infrastructure, and price.",
                },
                {
                    header: "Purchase an Electric Vehicle (EV)",
                    description:
                        "Once you have chosen the right EV for you, proceed with purchasing or leasing it from a reputable dealer.",
                },
                {
                    header: "Choose a suitable location for the charging station",
                    description:
                        "Select an appropriate location for the charging station, considering accessibility and electrical requirements.",
                },
                {
                    header: "Obtain permits and approvals",
                    description:
                        "Ensure compliance with local regulations by obtaining necessary permits and approvals from your local government.",
                },
                {
                    header: "Hire a licensed electrician",
                    description:
                        "Contract a licensed electrician to install a dedicated circuit for the charging station, ensuring safety and proper functionality.",
                },
                {
                    header: "Mount the charging station",
                    description:
                        "Install the charging station securely on a wall or other suitable surface, following manufacturer guidelines.",
                },
                {
                    header: "Connect to dedicated circuit",
                    description:
                        "Connect the charging station to the dedicated circuit installed by the electrician, ensuring proper wiring and connections.",
                },
                {
                    header: "Install software or apps",
                    description:
                        "If applicable, install any necessary software or apps to monitor and manage your charging sessions for convenience and control.",
                },
            ],
            utilityRebates: [
                {
                    price: 500,
                    label: "rebate for the installation of a Level 2 charging station by Con Edison",
                },
                {
                    price: 500,
                    label: "rebate for the installation of a Level 2 charging station by National Grid",
                },
            ],
            govtRebates: [
                {
                    price: 2000,
                    label: "Drive Clean Rebate by NYSERDA for the purchase or lease of a new EV",
                },
                {
                    price: 7500,
                    label: "tax credit by the federal government for the purchase of a new EV",
                },
            ],

            type: "transportation",
        },
        {
            alt: "A bus stopped with people boarding the bus.",
            gov: 0,
            utility: 0,
            price: 4.0,
            setup: 1,
            image: "/solutions/public_transportation.jpeg",
            imageNoBg: "/solution_models/bus.png",
            title: "Public Transportation",
            description:
                "The New York City Bus system complements the subway, offering service to areas not covered by the subway and providing connections to subway stations.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            stats: [
                {
                    data: 5600000,
                    description: "daily riders",
                },
                {
                    data: 1 / 7,
                    description: "billion annual riders",
                },
                {
                    data: 722,
                    description: "miles of track",
                },
                {
                    data: 472,
                    description: "stations",
                },
            ],
            costGraph: [
                [1985, 1.2],
                [1990, 1.8],
                [1995, 2.3],
                [2000, 2.4],
                [2005, 2.6],
                [2010, 2.7],
                [2015, 3.1],
                [2020, 3.5],
                [2025, 4.2],
            ],
            roiGraph: [
                [1985, 1],
                [1990, 1.1],
                [1995, 1.21],
                [2000, 1.33],
                [2005, 1.46],
                [2010, 1.61],
                [2015, 1.77],
                [2020, 1.94],
                [2025, 2.75],
            ],
            steps: [
                {
                    header: "Locate nearby public transportation options",
                    description:
                        "Identify the nearest bus stops, train stations, or other public transit hubs using online maps or transit apps.",
                },
                {
                    header: "Check schedules and routes",
                    description:
                        "Review the schedules and routes of available public transportation options to plan your journey effectively.",
                },
                {
                    header: "Purchase tickets or passes",
                    description:
                        "Obtain the necessary tickets or passes for your chosen mode of public transportation, which may include single ride tickets, day passes, or monthly passes.",
                },
                {
                    header: "Board the vehicle",
                    description:
                        "Arrive at the designated stop or station on time and board the appropriate vehicle according to your planned route.",
                },
                {
                    header: "Pay fares or validate passes",
                    description:
                        "Pay the fare using cash, a transit card, or mobile payment, or validate your pass upon boarding to ensure valid access.",
                },
                {
                    header: "Enjoy your ride",
                    description:
                        "Relax and enjoy the journey as you travel to your destination using public transportation.",
                },
            ],
            utilityRebates: [
                {
                    price: 0,
                    label: "None Available",
                },
            ],
            govtRebates: [
                {
                    price: 0,
                    label: "None Available",
                },
            ],

            type: "transportation",
        },
        {
            alt: "A home office setup with a computer, monitor, keyboard, mouse, and headset",
            gov: 0,
            utility: 0,
            price: 1452,
            setup: 2,
            image: "/solutions/telecommuting.jpeg",
            imageNoBg: "/solution_models/telecommuting.png",
            title: "Telecommuting",
            description:
                "A work-from-home setup typically includes a computer, monitor, keyboard, mouse, and headset. This hardware enables employees to perform their job duties effectively from home, reducing the need for commuting and promoting a better work-life balance.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            stats: [
                {
                    data: 20,
                    units: "%",
                    description:
                        "of New York City employees worked from home in 2023, according to a survey by the New York City Economic Development Corporation.",
                },
                {
                    data: 120,
                    units: "metric tons",
                    description:
                        "Telecommuting can reduce greenhouse gas emissions by up to 120 metric tons per year, according to a study by the American Council for an Energy-Efficient Economy.",
                },
            ],
            costGraph: [
                [1985, 1900],
                [1990, 1850],
                [1995, 1650],
                [2000, 1600],
                [2005, 1500],
                [2010, 1450],
                [2015, 1532],
                [2020, 1860],
                [2025, 1350],
            ],
            roiGraph: [
                [1985, 120],
                [1990, 132],
                [1995, 138],
                [2000, 145],
                [2005, 149],
                [2010, 152],
                [2015, 118],
                [2020, 194],
                [2025, 176],
            ],
            steps: [
                {
                    header: "Set up the computer",
                    description:
                        "Position the computer in a suitable location and connect it to a power source.",
                },
                {
                    header: "Connect the monitor",
                    description:
                        "Attach the monitor to the computer using the appropriate cable, such as HDMI or DisplayPort.",
                },
                {
                    header: "Connect the keyboard and mouse",
                    description:
                        "Connect the keyboard and mouse to the computer using USB cables or wireless connections, if supported.",
                },
                {
                    header: "Connect the headset",
                    description:
                        "Plug the headset into the computer using the appropriate cable or pair it wirelessly, if supported.",
                },
            ],
            utilityRebates: [
                {
                    price: 0,
                    label: "None Available",
                },
            ],
            govtRebates: [
                {
                    price: 0,
                    label: "None Available",
                },
            ],

            type: "transportation",
        },
        {
            alt: " A hydrogen fuel cell vehicle, a biofuel car, and an electric vehicle charging at a station",
            gov: 9500,
            utility: 1000,
            price: 55000,
            setup: 2,
            image: "/solutions/alternative_fuel.png",
            imageNoBg: "/solution_models/altcar.png",
            title: "Alt Fuel Vehicles",
            description:
                "Alternative fuel vehicles run on energy sources other than traditional gasoline or diesel. These include hydrogen fuel cells, biofuels, and electricity. Each type of AFV offers unique advantages in terms of environmental impact, cost savings, and performance.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            stats: [
                {
                    data: 80,
                    units: "%",
                    description:
                        "AFVs can reduce greenhouse gas emissions by up to 80% compared to traditional gasoline vehicles.",
                },
                {
                    data: 98,
                    units: "%",
                    description:
                        "Biofuels can reduce emissions by 20% to 98%, depending on the type of biofuel and production method.",
                },
            ],
            costGraph: [
                [1985, 850000],
                [1990, 760000],
                [1995, 560000],
                [2000, 250000],
                [2005, 125000],
                [2010, 112000],
                [2015, 90000],
                [2020, 75000],
                [2025, 50000],
            ],
            roiGraph: [
                [1985, 2500],
                [1990, 2800],
                [1995, 3105],
                [2000, 3150],
                [2005, 3300],
                [2010, 3600],
                [2015, 4000],
                [2020, 5200],
                [2025, 7500],
            ],
            steps: [
                {
                    header: "Research and choose AFV",
                    description:
                        "Research and select the most suitable alternative fuel vehicle (AFV) based on your needs and budget.",
                },
                {
                    header: "Purchase or lease AFV",
                    description:
                        "Acquire the chosen AFV by purchasing or leasing it from a local dealership.",
                },
                {
                    header: "Install charging or fueling station",
                    description:
                        "If required, set up a charging station or fueling station at your home or workplace to facilitate the use of the AFV.",
                },
            ],
            utilityRebates: [
                {
                    price: 1000,
                    label: "rebate for EV charging infrastructure offered by various utility companies in New York",
                },
            ],
            govtRebates: [
                {
                    price: 2000,
                    label: "rebate by NYSERDA for the purchase or lease of an EV",
                },
                {
                    price: 7500,
                    label: "tax credit by the federal government for eligible AFVs",
                },
            ],

            type: "transportation",
        },
        {
            alt: "A map of New York City with car-sharing locations marked and an illustration of a smartphone app displaying available cars",
            gov: 0,
            utility: 0,
            price: 26,
            setup: 1,
            image: "/solutions/car_sharing.jpeg",
            imageNoBg: "/solution_models/carsharing.png",
            title: "Car-Sharing",
            description:
                "Alternative fuel vehicles run on energy sources other than traditional gasoline or diesel. These include hydrogen fuel cells, biofuels, and electricity. Each type of AFV offers unique advantages in terms of environmental impact, cost savings, and performance.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            stats: [
                {
                    data: 30,
                    units: "%",
                    description:
                        "Car-sharing services can reduce greenhouse gas emissions by up to 30% compared to private car ownership.",
                },
                {
                    data: 6000,
                    units: "dollars",
                    description:
                        "Car-sharing services can save users an average of $6,000 per year compared to owning a car in New York City.",
                },
            ],
            costGraph: [
                [1985, 85],
                [1990, 76],
                [1995, 68],
                [2000, 63],
                [2005, 45],
                [2010, 38],
                [2015, 32],
                [2020, 28],
                [2025, 26],
            ],
            roiGraph: [
                [1985, 1.5],
                [1990, 1.9],
                [1995, 2.1],
                [2000, 2.3],
                [2005, 2.7],
                [2010, 4.2],
                [2015, 5.6],
                [2020, 6.3],
                [2025, 9.8],
            ],
            steps: [
                {
                    header: "Research car-sharing providers",
                    description:
                        "Explore and compare different car-sharing providers available in New York City to find one that suits your needs.",
                },
                {
                    header: "Sign up for membership",
                    description:
                        "Register for a membership with your chosen car-sharing provider to access their services.",
                },
                {
                    header: "Download app and create account",
                    description:
                        "Download the provider's mobile app and create an account to facilitate bookings and vehicle access.",
                },
                {
                    header: "Find available cars",
                    description:
                        "Use the app to locate available cars near your current location or desired pickup point.",
                },
                {
                    header: "Reserve and unlock car",
                    description:
                        "Book a car for your desired time slot through the app and unlock it using the app or membership card when you arrive at the vehicle.",
                },
            ],
            utilityRebates: [
                {
                    price: 0,
                    label: "Not available",
                },
            ],
            govtRebates: [
                {
                    price: 0,
                    label: "Not available",
                },
            ],

            type: "transportation",
        },
        {
            alt: "An illustration of a home with an energy-efficient HVAC system installed, including a high-efficiency furnace, air conditioner, and smart thermostat",
            gov: 500,
            utility: 1200,
            price: 13980,
            setup: 2,
            image: "/solutions/hvac.png",
            imageNoBg: "/solution_models/hvac.png",
            title: "Energy-Efficient HVAC",
            description:
                "Alternative fuel vehicles run on energy sources other than traditional gasoline or diesel. These include hydrogen fuel cells, biofuels, and electricity. Each type of AFV offers unique advantages in terms of environmental impact, cost savings, and performance.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            stats: [
                {
                    data: 20,
                    units: "%",
                    description:
                        "Energy-efficient HVAC systems can reduce energy consumption by up to 20% compared to traditional systems.",
                },
                {
                    data: 1000,
                    units: "USD",
                    description:
                        "These systems can save homeowners up to $1,000 per year on their energy bills.",
                },
            ],
            costGraph: [
                [1985, 13500],
                [1990, 14600],
                [1995, 16300],
                [2000, 16100],
                [2005, 15600],
                [2010, 15200],
                [2015, 14300],
                [2020, 13900],
                [2025, 14000],
            ],
            roiGraph: [
                [1985, 140],
                [1990, 230],
                [1995, 390],
                [2000, 550],
                [2005, 780],
                [2010, 920],
                [2015, 1100],
                [2020, 1200],
                [2025, 1250],
            ],
            steps: [
                {
                    header: "Research and compare HVAC systems",
                    description:
                        "Explore various energy-efficient HVAC systems available on the market and compare their features to choose the most suitable option for your home.",
                },
                {
                    header: "Hire professional contractor",
                    description:
                        "Engage a licensed HVAC contractor to install the selected energy-efficient system in your home. Professional installation ensures proper setup and optimal performance.",
                },
                {
                    header: "Schedule regular maintenance",
                    description:
                        "Arrange for periodic maintenance visits by HVAC professionals to inspect and tune up your energy-efficient system. Regular maintenance helps ensure the system operates efficiently and prolongs its lifespan.",
                },
            ],
            utilityRebates: [
                {
                    price: 1000,
                    label: "rebate for energy-efficient HVAC systems offered by Con Edison",
                },
            ],
            govtRebates: [
                {
                    price: 1500,
                    label: "tax credit for energy-efficient HVAC systems provided by the federal government",
                },
            ],
            type: "heating",
        },
        {
            alt: "An illustration of a home with a passive solar heating system, including south-facing windows, thermal mass, and proper insulation",
            gov: 1500,
            utility: 1000,
            price: 3560,
            setup: 2,
            image: "/solutions/passive_solar.jpg",
            imageNoBg: "/solution_models/passive_solar.png",
            title: "Passive Solar",
            description:
                "Alternative fuel vehicles run on energy sources other than traditional gasoline or diesel. These include hydrogen fuel cells, biofuels, and electricity. Each type of AFV offers unique advantages in terms of environmental impact, cost savings, and performance.",
            hometypes: ["Multi-Family Home", "Individual Home"],
            stats: [
                {
                    data: 25,
                    units: "%",
                    description:
                        "Passive solar heating can reduce heating costs by up to 25%.",
                },
                {
                    data: 80,
                    units: "%",
                    description:
                        "Passive solar homes can save up to 80% of the energy required for heating and cooling compared to conventional homes.",
                },
            ],
            costGraph: [
                [1985, 7800],
                [1990, 7200],
                [1995, 6500],
                [2000, 5800],
                [2005, 5200],
                [2010, 4500],
                [2015, 4300],
                [2020, 3800],
                [2025, 3500],
            ],
            roiGraph: [
                [1985, 140],
                [1990, 230],
                [1995, 390],
                [2000, 550],
                [2005, 780],
                [2010, 920],
                [2015, 1100],
                [2020, 1200],
                [2025, 1250],
            ],
            steps: [
                {
                    header: "Select south-facing location",
                    description:
                        "Choose a location for the building that faces south and receives maximum sunlight exposure, with minimal shading from surrounding structures or trees.",
                },
                {
                    header: "Install south-facing windows",
                    description:
                        "Install large windows on the south-facing side of the building to maximize solar gain and capture sunlight for passive heating.",
                },
                {
                    header: "Incorporate thermal mass materials",
                    description:
                        "Use materials with high thermal mass, such as concrete, brick, or stone, inside the building to absorb and store heat from sunlight during the day and release it slowly at night.",
                },
                {
                    header: "Insulate the building",
                    description:
                        "Apply insulation to the walls, roof, and floors of the building to minimize heat loss and improve energy efficiency.",
                },
            ],
            utilityRebates: [
                {
                    price: 1200,
                    label: "rebate for passive solar heating systems offered by NYSERDA Residential Solar Thermal Incentive Program",
                },
            ],
            govtRebates: [
                {
                    price: 500,
                    label: "tax credit for passive solar heating systems provided by the federal government",
                },
            ],

            type: "heating",
        },
    ],

    TX: [
        {
            alt: "Solar Panels on a Independent Home",
            gov: 1500,
            utility: 2500,
            price: 20400,
            setup: 2,
            image: "/solutions/solar-panel.png",
            imageNoBg: "/solution_models/solar_panel.png",
            title: "Solar Panels",
            stats: [
                {
                    data: 1500000,
                    units: "tons/year",
                    description:
                        "Reduced CO2 emissions by 1.5 million metric tons per year",
                },
                {
                    data: 30,
                    units: "%",
                    description: "Improvement on energy efficiency in homes",
                },
            ],
            description:
                "Installed in areas with high sunlight exposure such as rooftops and balconies, these silicon-based panels harness sunlight to produce electricity. ",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 12000],
                [1990, 13500],
                [1995, 16000],
                [2000, 13500],
                [2005, 13000],
                [2010, 19000],
                [2015, 23000],
                [2020, 22000],
                [2025, 20000],
            ],
            roiGraph: [
                [1985, 1100],
                [1990, 1250],
                [1995, 1300],
                [2000, 1500],
                [2005, 1550],
                [2010, 1600],
                [2015, 1700],
                [2020, 1900],
                [2025, 2600],
            ],
            steps: [
                {
                    header: "Find a Provider",
                    description:
                        "Look at warranties and installation costs. Good providers include Texas Solar Outfitters, Freedom Solar Power, Green Mountain Energy",
                },
                {
                    header: "Incentives and financing",
                    description:
                        "Explore financing options, take advantages of the rebates, to make installation more affordable.",
                },
                {
                    header: "Installation",
                    description:
                        "Schedule the installation from the provider. A local utility company and government representative will inspect it to ensure it meets requirements and it'll be ready to be connected.",
                },
            ],
            utilityRebates: [
                {
                    price: 2500,
                    label: "Dollars saved per solar panel system, offered by AEP Texas",
                },
                {
                    price: 2500,
                    label: "Dollars saved per solar panel system, offered by Austin Energy",
                },
                {
                    price: 0.97,
                    label: "Dollars saved per kilowatt-hour your panels generate, offered by Austin Energy",
                },
            ],
            govtRebates: [
                {
                    price: 1500,
                    label: " Average tax credit on the cost of the solar panel system",
                },
            ],

            type: "electricity",
        },
        {
            alt: "Environmentally focused windows for homes and apartments",
            gov: 600,
            utility: 150,
            price: 600,
            setup: 1,
            image: "/solutions/energy-efficient-window.png",
            imageNoBg: "/solution_models/windows.png",
            title: "Energy Efficient Windows",
            stats: [
                {
                    data: 15,
                    units: "%",
                    description: "Energy Consumption Reduction",
                },
                {
                    data: 425,
                    units: "$",
                    description: "Saved on energy bills in homes",
                },
                {
                    data: 30,
                    units: "%",
                    description: "Home heating energy lost through windows",
                },
                {
                    data: 50,
                    units: "%",
                    description: "Reduction in outside noise",
                },
            ],
            description:
                "Energy efficient windows help reduce heat transfer from outside to the inside of your house and vice versa. They feature triple pane glass, insulated frames, and low-emissivity coatings.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 20000],
                [1990, 18000],
                [1995, 17500],
                [2000, 17000],
                [2005, 16800],
                [2010, 12000],
                [2015, 9000],
                [2020, 2000],
                [2025, 250],
            ],
            roiGraph: [
                [1985, 3],
                [1990, 7],
                [1995, 11],
                [2000, 13],
                [2005, 15],
                [2010, 21],
                [2015, 28],
                [2020, 37],
                [2025, 54],
            ],
            steps: [
                {
                    header: "Find a Provider",
                    description:
                        "Look at warranties and installation costs. Good providers include Pella Windows & Doors and Renewal by Anderson",
                },
                {
                    header: "Replace Windows",
                    description: "Have the provider replace the windows. If you're installing yourself, be careful to not damage the frame.",
                },
                {
                    header: "Dispose of Old Windows",
                    description:
                        "Dispose of the old windows in a responsible manner. Some providers will do this for you.",
                },
            ],
            utilityRebates: [
                {
                    price: 3,
                    label: "Dollar per square foot rebate, offered by Texas Gas Service",
                },
                {
                    price: 1.2,
                    label: "Dollars per square foot rebate for customers, offered by City of Austin",
                },
                {
                    price: 2.5,
                    label: "Dollars per square foot rebate for customers, offered by City of San Antonio",
                },
            ],
            govtRebates: [
                {
                    price: 600,
                    label: "Tax Credit for Energy Efficient Windows, offered by the Inflation Reduction Act.",
                },
            ],

            type: "heating",
        },
        {
            alt: "Heat Pumps on a Independent Home",
            gov: 4000,
            utility: 1000,
            price: 18405,
            setup: 3,
            image: "/solutions/heat-pumps.png",
            imageNoBg: "/solution_models/heatpump.png",
            title: "Heat Pumps",
            stats: [
                {
                    data: 50,
                    units: "%",
                    description:
                        "Reduction in energy consumption compared to traditional heating and cooling systems",
                },
                {
                    data: 2000,
                    units: "$/year",
                    description: "in Energy Savings",
                },
            ],
            description:
                "Heat pumps are efficient heating and cooling systems that transfer heat from the air, ground, or water outside to inside the house.",
            hometypes: ["Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 1750],
                [1990, 3000],
                [1995, 3500],
                [2000, 4000],
                [2005, 5000],
                [2010, 6000],
                [2015, 7000],
                [2020, 16025],
                [2025, 19000],
            ],
            roiGraph: [
                [1985, 450],
                [1990, 550],
                [1995, 850],
                [2000, 950],
                [2005, 1050],
                [2010, 1100],
                [2015, 1150],
                [2020, 1200],
                [2025, 1250],
            ],
            steps: [
                {
                    header: "Fnd a Provider",
                    description:
                        "Pick a heat pump from a provider based of efficacy ratings and warranty. Good providers include Carrier, Trane, and Lennox.",
                },
                {
                    header: "Assess home heating needs",
                    description:
                        "Assess your home heating system (either yourself or the provider) to calculate heating and cooling needs.",
                },
                {
                    header: "Apply for rebates",
                    description:
                        "Apply for government and utility rebates to reduce the cost",
                },
            ],
            utilityRebates: [
                {
                    price: 500,
                    label: "Dollars rebate offered by Austin Energy",
                },
                { price: 1000, label: "Dollars rebate offered by CPS Energy" },
                { price: 1000, label: "Dollars rebate offered by CenterPoint" },
            ],
            govtRebates: [
                {
                    price: 2000,
                    label: "Dollars tax credit offered by inflation reduction act.",
                },
                {
                    price: 1000,
                    label: "Dollars rebate offered by City of Austin",
                },
                {
                    price: 2000,
                    label: "Dollars rebate offered by City of Houston",
                },
                {
                    price: 2000,
                    label: "Dollars rebate offered by City of San Antonio",
                },
            ],

            type: "heating",
        },
        {
            alt: "Bright, energy-efficient LED light bulbs for your homes.",
            gov: 2,
            utility: 4,
            price: 21,
            setup: 1,
            image: "/solutions/leds.jpg",
            imageNoBg: "/solution_models/leds.png",
            title: "LED Lighting",
            stats: [
                {
                    data: 80,
                    units: "%",
                    description:
                        "Reduction in CO2 emissions compared to traditional lightbulbs",
                },
                {
                    data: 200,
                    units: "lbs/kwh",
                    description: "CO2 prevented from emissions",
                },
            ],
            description:
                "A description of the solution: LED lighting is a highly energy-efficient and long-lasting solution for residential and commercial properties. These bulbs use up to 80% less energy and last 25 times longer than traditional incandescent bulbs. ",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 125],
                [1990, 107],
                [1995, 92],
                [2000, 66],
                [2005, 58],
                [2010, 45],
                [2015, 39],
                [2020, 34],
                [2025, 18],
            ],
            roiGraph: [
                [1985, 0.2],
                [1990, 0.2],
                [1995, 0.3],
                [2000, 0.4],
                [2005, 0.7],
                [2010, 1.6],
                [2015, 2.4],
                [2020, 4.5],
                [2025, 9],
            ],
            steps: [
                {
                    header: "Find a Provider",
                    description:
                        "Look for a provider. Look for a good warranty",
                },
                {
                    header: "Install the LED bulb",
                    description: "Make sure power is turned off.",
                },
                {
                    header: "Apply for rebates",
                    description:
                        "Apply for any rebates that come with the LED bulb purchased",
                },
            ],
            govtRebates: [
                { price: 6, label: "Dollar tax credit offered federally." },
            ],
            utilityRebates: [
                {
                    price: 3,
                    label: "Dollar rebate on Energy-Star certified light bulbs",
                },
                {
                    price: 50,
                    label: "Dollar rebate on large scale LED lightbulb install",
                },
            ],

            type: "electricity",
        },
        {
            alt: "A home battery system connected to solar panels.",
            gov: 1000,
            utility: 5000,
            price: 5200,
            setup: 3,
            image: "/solutions/home-battery.png",
            imageNoBg: "/solution_models/battery.png",
            title: "Home Battery System",
            stats: [
                {
                    data: 2.5,
                    units: "tons/decade",
                    description: "Reduction of CO2 emissions",
                },
                {
                    data: 5,
                    units: "tons",
                    description:
                        "Of CO2 saved by home battery system over its life time",
                },
            ],
            description:
                "Home battery systems store excess energy generated from solar panels or the grid during off-peak hours, allowing homeowners to use it during peak demand periods or power outages. ",
            hometypes: ["Individual Home"],
            costGraph: [
                [1985, 10000],
                [1990, 12000],
                [1995, 13000],
                [2000, 14000],
                [2005, 14500],
                [2010, 11000],
                [2015, 8000],
                [2020, 6000],
                [2025, 5000],
            ],
            roiGraph: [
                [1985, 35],
                [1990, 38],
                [1995, 42],
                [2000, 46],
                [2005, 55],
                [2010, 70],
                [2015, 90],
                [2020, 110],
                [2025, 150],
            ],
            steps: [
                {
                    header: "Find a Provider",
                    description:
                        "Using factors like efficiency, warranty, and costs to determine the best system for your home.",
                },
                {
                    header: "Prepare your home",
                    description:
                        "Ensure your home has the necessary electrical upgrades.",
                },
                {
                    header: "Find a Provider",
                    description: " and disposal of the old system.",
                },
            ],
            utilityRebates: [
                {
                    price: 1500,
                    label: "Offered by Texas Gas Service Energy Efficiency Rebate Program",
                },
            ],
            govtRebates: [
                {
                    price: 1560,
                    label: "Dollar reduction provided by Inflation Reduction Act",
                },
            ],

            type: "electricity",
        },
        {
            alt: "A bathroom sink with a low flow faucet",
            gov: 50,
            utility: 30,
            price: 476,
            setup: 1,
            image: "/solutions/low-faucet.png",
            imageNoBg: "/solution_models/low_flow.png",
            title: "Low Flow Faucets",
            stats: [
                {
                    data: 35,
                    units: "%",
                    description: "Reduction in water usage",
                },
                {
                    data: 10000,
                    units: "gal/year",
                    description: "of water saved",
                },
            ],
            description:
                "Low-flow fixtures include faucets, showerheads, and toilets designed to use less water while maintaining performance. They can save water, reduce utility bills, and help preserve the environment. ",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 300],
                [1990, 320],
                [1995, 340],
                [2000, 345],
                [2005, 360],
                [2010, 375],
                [2015, 390],
                [2020, 420],
                [2025, 490],
            ],
            roiGraph: [
                [1985, 16],
                [1990, 23],
                [1995, 26],
                [2000, 32],
                [2005, 39],
                [2010, 44],
                [2015, 54],
                [2020, 82],
                [2025, 120],
            ],
            steps: [
                {
                    header: "Turn off water supply.",
                    description: "You can find this in your garage",
                },
                {
                    header: "Remove the old fixture.",
                    description:
                        "Consult the manufacturer's instructions for specific removal steps",
                },
                {
                    header: "Install the new low-flow fixture.",
                    description:
                        "Consult the manufacturer's instructions for specific installation steps",
                },
                {
                    header: "Turn the water supply on",
                    description: "Test the fixture before certifying it works",
                },
            ],
            utilityRebates: [
                {
                    price: 30,
                    label: "Dollars rebate offered by City of Austin",
                },
                {
                    price: 30,
                    label: "Dollars rebate offered by City of San Antonio",
                },
                {
                    price: 30,
                    label: "Dollars rebate offered by City of Houston",
                },
            ],
            govtRebates: [
                {
                    price: 238,
                    label: "Tax credit offered by Inflation Reduction Act",
                },
            ],

            type: "water",
        },
        {
            alt: "Rainwater Harvesting System",
            gov: 1000,
            utility: 5600,
            price: 17400,
            setup: 1,
            image: "/solutions/rainwater_harvesting.jpg",
            imageNoBg: "/solution_models/rainwater.png",
            title: "Rainwater Harvesting",
            stats: [
                {
                    data: 600,
                    units: "gallons",
                    description:
                        "Gallons of water collected from 1 inch of rainfall on a 1000 square foot roof",
                },
            ],
            description:
                "A rainwater harvesting system is a solution for collecting and storing rainwater for later use. It typically involves a catchment area (such as a roof), a conveyance system (gutters and downspouts), storage tanks, and a distribution system.",
            hometypes: ["Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 12000],
                [1990, 14500],
                [1995, 19400],
                [2000, 24500],
                [2005, 32000],
                [2010, 29000],
                [2015, 23000],
                [2020, 19000],
                [2025, 17000],
            ],
            roiGraph: [
                [1985, 400],
                [1990, 450],
                [1995, 460],
                [2000, 590],
                [2005, 660],
                [2010, 740],
                [2015, 820],
                [2020, 900],
                [2025, 1020],
            ],
            steps: [
                {
                    header: "Install a Catchment Area",
                    description:
                        "Set up a catchment area, such as a roof, to collect rainwater.",
                },
                {
                    header: "Set Up Gutters and Downspouts",
                    description:
                        "Install gutters and downspouts to channel rainwater from the catchment area to storage tanks.",
                },
                {
                    header: "Install Storage Tanks",
                    description:
                        "Set up storage tanks to store the collected rainwater.",
                },
                {
                    header: "Connect the Distribution System",
                    description:
                        "Connect the distribution system to distribute the stored rainwater for various uses.",
                },
                {
                    header: "Install a Filtration System (Optional)",
                    description:
                        "Optionally, install a filtration system to filter the collected rainwater before use.",
                },
            ],
            utilityRebates: [
                {
                    price: 1000,
                    label: "City of Austin Rebates: Rainwater collection system rebates of up to $1,000",
                },
                {
                    price: 2000,
                    label: "San Antonio Water System (SAWS) Rebates: Rainwater harvesting system rebates of up to $2,000",
                },
                {
                    price: 50000,
                    label: "Texas Water Development Board (TWDB) Agricultural Rebates: Rainwater harvesting system rebates of up    $50,000 for agricultural producers",
                },
                {
                    price: 2500,
                    label: "Lower Colorado River Authority (LCRA) Rebates: Rainwater harvesting system rebates of up to $2,500",
                },
                {
                    price: 100,
                    label: "Lower Colorado River Authority (LCRA) Rebates: Rain barrel rebates of up to $100",
                },
            ],

            govtRebates: [
                {
                    price: 1000,
                    label: "Federal Tax Credit: The federal government offers a tax credit of up to 26% for installing renewable energy systems, including rainwater harvesting systems. This can help offset the initial cost of installing a system.",
                },
                {
                    price: 50,
                    label: "EPA WaterSense Program: The EPA offers rebates and incentives for WaterSense-labeled products, which are designed to be water-efficient. While there are no specific rebates for rainwater harvesting systems, you can still benefit from using WaterSense-labeled products in your home or business.",
                },
            ],
            localProviders: ["Rainwater Solutions", "Texas RainCatcher"],
            type: "water",
        },
        {
            alt: "Xeriscaping in a home garden.",
            gov: 1000,
            utility: 5000,
            price: 2640,
            setup: 2,
            image: "/solutions/xeriscaping.jpg",
            imageNoBg: "/solution_models/xeriscaping.png",
            title: "Xeriscaping",
            stats: [
                {
                    data: 200,
                    units: "lbs/kwh",
                    description: "CO2 prevented from emissions",
                },
                {
                    data: 200,
                    units: "lbs/kwh",
                    description: "CO2 prevented from emissions",
                },
            ],
            description:
                "Xeriscaping is a landscaping method that focusing on saving water using better irigation techniques and more resistant plants.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 3900],
                [1990, 3500],
                [1995, 3300],
                [2000, 3150],
                [2005, 3100],
                [2010, 3000],
                [2015, 2950],
                [2020, 2800],
                [2025, 2600],
            ],
            roiGraph: [
                [1985, 450],
                [1990, 550],
                [1995, 600],
                [2000, 625],
                [2005, 700],
                [2010, 820],
                [2015, 890],
                [2020, 1010],
                [2025, 1100],
            ],

            steps: [
                {
                    header: "Assess your yard's sun exposure and soil type.",
                    description:
                        "Evaluate how much sunlight your yard receives and determine the type of soil you have.",
                },
                {
                    header: "Choose appropriate native or drought-tolerant plants.",
                    description:
                        "Select plants that are well-suited to your local climate and require less water.",
                },
                {
                    header: "Plan the layout and design of your xeriscape.",
                    description:
                        "Create a plan for arranging the plants and other elements in your xeriscape.",
                },
                {
                    header: "Prepare the soil and install the plants.",
                    description:
                        "Prepare the soil by removing weeds and debris, then plant the chosen plants.",
                },
                {
                    header: "Install an efficient irrigation system.",
                    description:
                        "Set up an irrigation system that minimizes water usage and ensures proper watering.",
                },
                {
                    header: "Apply mulch to conserve moisture and prevent weed growth.",
                    description:
                        "Spread mulch around the plants to retain moisture and suppress weed growth.",
                },
            ],

            utilityRebates: [
                {
                    price: 2000,
                    label: "Dollars from the Texas Water Development Board",
                },
                {
                    price: 400,
                    label: "Offered by the San Antonio Water System",
                },
            ],
            govtRebates: [
                {
                    price: 10000,
                    label: "Offered by Texas Agricultural Finance Authority",
                },
                {
                    price: 1000,
                    label: "Offered by the Texas Department of Agriculture",
                },
            ],

            type: "water",
        },
        {
            alt: "Electric Vehicles",
            gov: 12500,
            utility: 1750,
            price: 26200,
            setup: 1,
            image: "/solutions/electric_vehicles.jpeg",
            imageNoBg: "/solution_models/ev.png",
            title: "Electric Vehicles",
            stats: [
                {
                    data: 200,
                    units: "lbs/kwh",
                    description: "CO2 prevented from emissions",
                },
            ],
            description:
                "Electric vehicles are an easy way to reduce carbon emissions because they don't pollute the air. They have a lower carbon footprint than gasoline vehicles.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 140000],
                [1990, 120000],
                [1995, 118000],
                [2000, 112000],
                [2005, 98000],
                [2010, 76000],
                [2015, 46000],
                [2020, 39000],
                [2025, 23000],
            ],
            roiGraph: [
                [1985, 150],
                [1990, 300],
                [1995, 350],
                [2000, 400],
                [2005, 400],
                [2010, 1200],
                [2015, 2500],
                [2020, 5200],
                [2025, 7500],
            ],

            steps: [
                {
                    header: "Research EV models",
                    description:
                        "Research and choose an EV model depending on your needs (seats, range, storing capacity), and budget. Good options include the Nissan Leaf and the Tesla Model 3.",
                },
                {
                    header: "Purchase the EV",
                    description:
                        "Purchase the EV from a local dealership or online. Buying used is also a valid option",
                },
                {
                    header: "Assess your method of charging",
                    description:
                        "Install a home charging station or find a public charging station near your home.",
                },
                {
                    header: "Register the EV to apply for incentives",
                    description:
                        "Register the EV with the Texas Department of Motor Vehicles to apply for any applicable rebates.",
                },
            ],

            utilityRebates: [
                {
                    price: 250,
                    label: "From Oncor Electric Delivery for installing a Level 2 Charging Station",
                },
                {
                    price: 1500,
                    label: "Offered by CPS energy for purchasing a Level 2 charging station and electric car. ",
                },
            ],
            govtRebates: [
                {
                    price: 5000,
                    label: "Provided by Texas Emissions Reduction Plan (TERP) for purchasing an electric vehicle",
                },
                {
                    price: 7500,
                    label: "Offered by Federal Government for purchasing a new EV",
                },
            ],

            type: "transportation",
        },
        {
            alt: "Public Transportation",
            gov: 0,
            utility: 0,
            price: 4,
            setup: 1,
            image: "/solutions/public_transportation.jpeg",
            imageNoBg: "/solution_models/bus.png",
            title: "Public Transportation",
            stats: [
                {
                    data: 10,
                    units: "",
                    description: "times safer than  a car.",
                },
                {
                    data: 4800,
                    units: "tons/year",
                    description:
                        "Reduction in CO2 emissions if 1 person switches completely to public transportation.",
                },
            ],
            description:
                "Taking public transportation is a cheap, easy way to reduce carbon emissions. It also helps decrease traffic congestion. ",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 1.2],
                [1990, 1.8],
                [1995, 2.3],
                [2000, 2.4],
                [2005, 2.6],
                [2010, 2.7],
                [2015, 3.1],
                [2020, 3.5],
                [2025, 4.2],
            ],
            roiGraph: [
                [1985, 1],
                [1990, 1.1],
                [1995, 1.21],
                [2000, 1.33],
                [2005, 1.46],
                [2010, 1.61],
                [2015, 1.77],
                [2020, 1.94],
                [2025, 2.75],
            ],

            steps: [
                {
                    header: "Research transportation options near you",
                    description:
                        "Research and choose a public transportation option depending on your needs (seats, range, storing capacity), and budget. Good options include the bus and the train.",
                },
                {
                    header: "Purchase a card or download an app",
                    description:
                        "Purchase a card or download an app to pay for public transportation.",
                },
                {
                    header: "Look at the schedule",
                    description:
                        "Look at the schedule to see when the public transportation is available.",
                },
            ],

            utilityRebates: [
                {
                    price: 0,
                    label: "None Available",
                }
            ],

            govtRebates: [
                {
                    price: 0,
                    label: "None Available",
                }
            ],

            type: "transportation",
        },
        {
            alt: "Composting Toilets in Texas",
            gov: 300,
            utility: 150,
            price: 4160,
            setup: 2,
            image: "/solutions/composting_toilet.jpg",
            imageNoBg: "/solution_models/toilet.png",
            title: "Composting Toilets",
            stats: [
                {
                    data: 6000,
                    units: "gallons/year",
                    description:
                        "Saved by a family of four switching to a composting toilet.",
                },
                {
                    data: 120,
                    units: "pounds",
                    description:
                        "Of compost produced by a composting toilet per year per person.",
                },
            ],
            description:
                "Composting Toilets are an effective way of managing human waste. The reduce water usage and can also provide nutrient rich compost for gardening. ",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 2100],
                [1990, 2200],
                [1995, 2400],
                [2000, 2700],
                [2005, 2800],
                [2010, 2800],
                [2015, 3200],
                [2020, 3600],
                [2025, 4300],
            ],
            roiGraph: [
                [1985, 200],
                [1990, 250],
                [1995, 350],
                [2000, 550],
                [2005, 950],
                [2010, 1750],
                [2015, 2150],
                [2020, 2350],
                [2025, 2450],
            ],

            steps: [
                {
                    header: "Research composting toilet options near you",
                    description:
                        "Research and choose a composting toilet depending on your needs, and budget.",
                },
                {
                    header: "Install the toilet",
                    description:
                        "Installing the toilet according to the manufacturer's instructions.",
                },
                {
                    header: "Connect the toilet to a composting system",
                    description:
                        "Set up a composting system to connect it to one, adding a carbon source and turning the compost regularly.",
                },
            ],

            utilityRebates: [
                {
                    price: 100,
                    label: "Offered by Texas Disposal Systems for installing a composting toilet",
                },
                {
                    price: 50,
                    label: "Offered by Austin Energy for installing a composting toilet",
                },
            ],

            govtRebates: [
                {
                    price: 200,
                    label: "Offered by the Texas Commission on Environmental Quality for installing a composting toilet",
                },
                {
                    price: 100,
                    label: "Offered by the City of Dallas for purchasing a composting toilet",
                },
            ],

            type: "waste",
        },
        {
            alt: "Energy Efficient HVAC Systems",
            gov: 800,
            utility: 1800,
            price: 13980,
            setup: 3,
            image: "/solutions/hvac.png",
            imageNoBg: "/solution_models/hvac.png",
            title: "Energy Efficient HVAC",
            stats: [
                {
                    data: 400,
                    units: "dollars",
                    description: "saved per year on heating and cooling.",
                },
                {
                    data: 2000,
                    units: "pounds/year",
                    description:
                        "Reduction in carbon footprint by switching to a high efficiency HVAC system.",
                },
            ],
            description:
                "Energy HVAC Systems help provide your home optimal heating and cooling while using less energy.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 13500],
                [1990, 14600],
                [1995, 16300],
                [2000, 16100],
                [2005, 15600],
                [2010, 15200],
                [2015, 14300],
                [2020, 13900],
                [2025, 14000],
            ],
            roiGraph: [
                [1985, 140],
                [1990, 230],
                [1995, 390],
                [2000, 550],
                [2005, 780],
                [2010, 920],
                [2015, 1100],
                [2020, 1200],
                [2025, 1250],
            ],

            steps: [
                {
                    header: "Choose a Provider and System",
                    description:
                        "Choose the right provider and system for your needs and budget. Look at good warranties and efficiency ratings.",
                },
                {
                    header: "Install the HVAC System",
                    description:
                        "We recommend hiring a profession to install the system. ",
                },
                {
                    header: "Test the system and ensure heat isn't escaping",
                    description:
                        "Thoroughly test the system while the installer is still present. Set up any thermostat or controls. Ensure heat isn't escaping in your house.",
                },
            ],

            utilityRebates: [
                {
                    price: 1000,
                    label: "Offered by CPS Energy for installing a high efficiency HVAC system",
                },
                {
                    price: 800,
                    label: "Offered by Oncor for installing a high efficiency HVAC system",
                },
            ],

            govtRebates: [
                {
                    price: 300,
                    label: "Offered by the Department of Energy for installing a high efficiency HVAC system",
                },
                {
                    price: 500,
                    label: "Offered by the EPA Energy Star Program for installing a high efficiency HVAC system",
                },
            ],

            type: "heating",
        },
        {
            alt: "Insulation in homes in Texas",
            gov: 1000,
            utility: 300,
            price: 1.2,
            setup: 1,
            image: "/solutions/insulation.jpeg",
            imageNoBg: "/solution_models/insulation.png",
            title: "Insulation",
            stats: [
                {
                    data: 1500000,
                    units: "tons/year",
                    description:
                        "Reduced CO2 emissions by 1.5 million metric tons per year",
                },
                {
                    data: 30,
                    units: "%",
                    description: "Improvement on energy efficiency in homes",
                },
            ],
            description:
                "Insulation helps maintain a comfortable temperature and reduce energy consumption",
            hometypes: ["Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 6],
                [1990, 5.7],
                [1995, 5.3],
                [2000, 4.8],
                [2005, 3.7],
                [2010, 2.5],
                [2015, 2.2],
                [2020, 1.8],
                [2025, 0.9]
            ],
            roiGraph: [
                [1985, 0.01],
                [1990, 0.02],
                [1995, 0.06],
                [2000, 0.13],
                [2005, 0.19],
                [2010, 0.26],
                [2015, 0.35],
                [2020, 0.36],
                [2025, 0.39]
            ],

            steps: [
                {
                    header: "Choose a Provider and System",
                    description:
                        "Choose the right provider and type of insulation (fiberglass, cellulose, spray foam)",
                },
                {
                    header: "Measure the area to be insulated.",
                    description:
                        "Measure how much area needs to be insulated and purchase the right amount of insulation",
                },
                {
                    header: "Install the system",
                    description:
                        "We recommend hiring a professional, but if you install it yourself, wear protective gear.",
                },
                {
                    header: "Check for leaks",
                    description:
                        "Check for leaks and ensure the insulation is properly installed.",
                },
            ],

            utilityRebates: [
                {
                    price: 0.1,
                    label: "Offered by Austin Energy per square foot of insulation",
                },
                {
                    price: 0.1,
                    label: "Offered by Texas Gas Service per square foot of insulation",
                },
            ],

            govtRebates: [
                {
                    price: 500,
                    label: "Offered by Department of Energy for installing insulation",
                },
                {
                    price: 500,
                    label: "Offered by the EPA Energy Star Program for installing a insulation system",
                },
            ],

            type: "heating",
        },
    ],
    WA: [
        {
            alt: "Rainwater Harvesting System",
            gov: 100,
            utility: 5300,
            price: 2870,
            setup: 2,
            image: "/solutions/rainwater_harvesting.jpg",
            imageNoBg: "/solution_models/rainwater.png",
            title: "Rainwater Harvesting",
            stats: [
                {
                    data: 50000,
                    units: "gallons",
                    description: "Water saved annually per household",
                },
                {
                    data: 60,
                    units: "%",
                    description: "Reduction in potable water usage",
                },
            ],
            description:
                "Collect rainwater from roofs and gutters to be stored and used for non-potable purposes such as irrigation and toilet flushing.",
            hometypes: ["Individual Home"],
            costGraph: [
                [1985, 2500],
                [1990, 2700],
                [1995, 2850],
                [2000, 3000],
                [2005, 3150],
                [2010, 3300],
                [2015, 3000],
                [2020, 2950],
                [2025, 2850],
            ],
            roiGraph: [
                [1985, 400],
                [1990, 450],
                [1995, 460],
                [2000, 590],
                [2005, 660],
                [2010, 740],
                [2015, 820],
                [2020, 900],
                [2025, 1020],
            ],
            steps: [
                {
                    header: "Consult with a plumber or rainwater harvesting specialist",
                    description:
                        "Discuss and determine the most suitable rainwater harvesting system tailored to your home's needs and location.",
                },
                {
                    header: "Obtain any necessary permits and approvals",
                    description:
                        "Ensure compliance with local regulations by obtaining required permits and approvals before proceeding with installation.",
                },
                {
                    header: "Install the collection system",
                    description:
                        "Set up gutters and downspouts to channel rainwater into a storage tank, establishing the primary infrastructure of the harvesting system.",
                },
                {
                    header: "Install the filtration and treatment system",
                    description:
                        "Integrate essential components such as pumps, filters, and disinfection equipment to ensure the collected rainwater meets quality standards for intended usage.",
                },
                {
                    header: "Connect the treated rainwater",
                    description:
                        "Establish connections from the treatment system to designated non-potable water systems within your property, optimizing the utilization of harvested rainwater.",
                },
                {
                    header: "Test the system and make any necessary adjustments",
                    description:
                        "Conduct thorough testing to verify functionality and performance, making adjustments as needed to guarantee optimal operation and efficiency.",
                },
            ],
            utilityRebates: [
                {
                    price: 4800,
                    label: "Offered by RainWise program offers rebates",
                },
                {
                    price: 500,
                    label: "Offered by King County Surface Water Management",
                },
            ],
            govtRebates: [
                {
                    price: 100,
                    label: "Offered by Washington state, along with a sales tax exemption",
                },
            ],
            type: "water",
            localProviders: [
                "Rainwater Harvesting Solutions LLC",
                "Washington Rain Barrels Inc.",
            ],
        },
        {
            alt: "Low-Flow Shower heads",
            gov: 30,
            utility: 25,
            price: 70,
            setup: 1,
            image: "/solutions/low-faucet.png",
            imageNoBg: "/solution_models/low_flow.png",
            title: "Low-Flow Showerheads",
            stats: [
                {
                    data: 8000,
                    units: "gallons",
                    description: "Water saved annually per household",
                },
                {
                    data: 30,
                    units: "%",
                    description: "Reduction in water usage for showers",
                },
            ],
            steps: [
                {
                    header: "Turn off water supply.",
                    description: "You can find this in your garage",
                },
                {
                    header: "Remove the old fixture.",
                    description:
                        "Consult the manufacturer's instructions for specific removal steps",
                },
                {
                    header: "Install the new low-flow fixture.",
                    description:
                        "Consult the manufacturer's instructions for specific installation steps",
                },
                {
                    header: "Turn the water supply on",
                    description: "Test the fixture before certifying it works",
                },
            ],
            description:
                "Install showerheads designed to reduce water flow without sacrificing water pressure or comfort.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 300],
                [1990, 250],
                [1995, 235],
                [2000, 185],
                [2005, 165],
                [2010, 130],
                [2015, 120],
                [2020, 100],
                [2025, 75],
            ],
            roiGraph: [
                [1985, 3],
                [1990, 4],
                [1995, 9],
                [2000, 15],
                [2005, 17],
                [2010, 18],
                [2015, 20],
                [2020, 21],
                [2025, 29],
            ],
            utilityRebates: [
                { price: 5, label: "Offered by Puget Sound Energy " },
                { price: 10, label: "Offered by Seattle City Light" },
                { price: 5, label: "Offered by Tacoma Public Utilities" },
                { price: 5, label: "Offered by Cascade Natural Gas" },
            ],
            govtRebates: [
                {
                    price: 100,
                    label: "Offered by Washington State Department in multifamily buildings",
                },
            ],
            type: "water",
            localProviders: ["EcoFlow Showers LLC", "Cascade Water Solutions"],
        },
        {
            alt: "Drip Irrigation System",
            gov: 250,
            utility: 200,
            price: 2640,
            setup: 2,
            image: "/solutions/drip_irrigation.jpg",
            imageNoBg: "/solution_models/drip_irrigation.png",
            title: "Drip Irrigation",
            stats: [
                {
                    data: 50,
                    units: "%",
                    description: "Reduction in water usage for irrigation",
                },
                {
                    data: 80,
                    units: "%",
                    description:
                        "Reduction in water lost to evaporation and runoff",
                },
            ],
            steps: [
                {
                    header: "Design the system layout",
                    description:
                        "Plan the layout of the irrigation system considering the positioning of water sources and plants for optimal water distribution.",
                },
                {
                    header: "Install a backflow preventer and pressure regulator",
                    description:
                        "Ensure the protection of the water supply by installing backflow preventers and pressure regulators.",
                },
                {
                    header: "Lay out the main and sub-main lines",
                    description:
                        "Position the main and sub-main lines, connecting them to the water source to facilitate water distribution throughout the irrigation system.",
                },
                {
                    header: "Install the drip lines or soaker hoses",
                    description:
                        "Place drip lines or soaker hoses along plant rows or around plants to deliver water directly to the root zone.",
                },
                {
                    header: "Connect the drip lines to the sub-main lines",
                    description:
                        "Use appropriate fittings to connect the drip lines to the sub-main lines, ensuring seamless water flow.",
                },
                {
                    header: "Install the emitters or micro-sprinklers",
                    description:
                        "Position emitters or micro-sprinklers at plant locations to deliver water evenly to individual plants.",
                },
                {
                    header: "Test the system",
                    description:
                        "Check the irrigation system for leaks and assess water distribution to ensure proper functionality.",
                },
                {
                    header: "Adjust the system as needed",
                    description:
                        "Make necessary adjustments to the system to enhance efficiency and ensure uniform watering across the landscape.",
                },
            ],
            description:
                "Efficiently water plants by delivering water directly to their roots, minimizing water waste.",
            hometypes: ["Individual Home"],
            costGraph: [
                [1985, 3750],
                [1990, 3600],
                [1995, 3450],
                [2000, 3300],
                [2005, 3150],
                [2010, 2850],
                [2015, 2600],
                [2020, 2300],
                [2025, 2050],
            ],
            roiGraph: [
                [1985, 205],
                [1990, 230],
                [1995, 260],
                [2000, 340],
                [2005, 420],
                [2010, 490],
                [2015, 600],
                [2020, 620],
                [2025, 660],
            ],
            utilityRebates: [
                { price: 50, label: "Offered by Puget Sound Energy (PSE)" },
                { price: 100, label: "Offered by Seattle City Light" },
                { price: 50, label: "Offered by Cascade Natural Gas" },
            ],

            govtRebates: [
                {
                    price: 100,
                    label: "Offered by Washington State Department of Commerce",
                },
                { price: 50, label: "Offered by City of Seattle" },
                { price: 100, label: "Offered by King County" },
                { price: 50, label: "Offered by City of Tacoma" },
                { price: 50, label: "Offered by City of Spokane" },
            ],

            type: "water",
            localProviders: [
                "GreenGrowth Irrigation Solutions",
                "Cascade Water Solutions",
            ],
        },
        {
            alt: "Greywater Recycling System",
            gov: 250,
            utility: 200,
            price: 5610,
            setup: 3,
            image: "/solutions/greywater_recycling.png",
            imageNoBg: "/solution_models/grey_water.png",
            title: "Greywater Recycling",
            stats: [
                {
                    data: 10000,
                    units: "gallons",
                    description: "Water saved annually per household",
                },
                {
                    data: 50,
                    units: "%",
                    description:
                        "Reduction in potable water usage for non-drinking purposes",
                },
            ],
            description:
                "Reuse water from sinks, showers, and washing machines for purposes such as landscape irrigation.",
            hometypes: ["Individual Home"],
            costGraph: [
                [1985, 2500],
                [1990, 3000],
                [1995, 3350],
                [2000, 3900],
                [2005, 4250],
                [2010, 4600],
                [2015, 4900],
                [2020, 5250],
                [2025, 5700],
            ],
            roiGraph: [
                [1985, 150],
                [1990, 110],
                [1995, 140],
                [2000, 150],
                [2005, 160],
                [2010, 190],
                [2015, 190],
                [2020, 180],
                [2025, 160],
            ],
            govtRebates: [
                {
                    price: 100,
                    label: "Offered by Washington State Department of Commerce",
                },
                { price: 50, label: "Offered by City of Seattle" },
                { price: 100, label: "Offered by King County" },
                { price: 50, label: "Offered by City of Tacoma" },
                { price: 50, label: "Offered by City of Spokane" },
            ],
            utilityRebates: [
                { price: 50, label: "Offered by Puget Sound Energy (PSE)" },
                { price: 100, label: "Offered by Seattle City Light" },
                { price: 50, label: "Offered by Tacoma Public Utilities" },
            ],
            type: "water",
            localProviders: [
                "EcoWater Recycle Solutions",
                "Cascade Greywater Systems",
            ],
        },
        {
            alt: "High-Efficiency Washing Machine",
            gov: 250,
            utility: 200,
            price: 800,
            setup: 1,
            image: "/solutions/high_efficiency_washing_machine.jpg",
            imageNoBg: "/solution_models/washingmachine.png",
            title: "High-Efficiency Washing Machine",
            stats: [
                {
                    data: 16000,
                    units: "gallons",
                    description: "Water saved annually per household",
                },
                {
                    data: 30,
                    units: "%",
                    description: "Reduction in water usage for laundry",
                },
            ],
            steps: [
                {
                    header: "Choose a Provider and System",
                    description:
                        "Choose the right provider and system for your needs and budget. Look at good warranties and efficiency ratings.",
                },
                {
                    header: "Install the High-Efficiency Washing Machine System",
                    description:
                        "We recommend hiring a profession to install the system. ",
                },
                {
                    header: "Test the system and ensure it's working.",
                    description:
                        "Thoroughly test the system while the installer is still present. Set up any thermostat or controls.",
                },
            ],
            description:
                "Use washing machines designed to use less water per load while maintaining cleaning performance.",
            hometypes: ["Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 4200],
                [1990, 3870],
                [1995, 3200],
                [2000, 2650],
                [2005, 2300],
                [2010, 1700],
                [2015, 1450],
                [2020, 1100],
                [2025, 800],
            ],
            roiGraph: [
                [1985, 48],
                [1990, 52],
                [1995, 63],
                [2000, 68],
                [2005, 72],
                [2010, 84],
                [2015, 120],
                [2020, 145],
                [2025, 182],
            ],
            utilityRebates: [
                { price: 50, label: "Offered by Puget Sound Energy (PSE)" },
                { price: 100, label: "Offered by Seattle City Light" },
                { price: 50, label: "Offered by Tacoma Public Utilities" },
            ],
            govtRebates: [
                {
                    price: 100,
                    label: "Offered by Washington State Department of Commerce",
                },
                { price: 50, label: "Offered by City of Seattle" },
                { price: 100, label: "Offered by King County" },
            ],
            type: "water",
            localProviders: [
                "EcoWash Appliances",
                "Sustainable Laundry Solutions",
            ],
            steps: [
                {
                    header: "Consult with a plumber or greywater system specialist",
                    description: "to determine the best system for your home.",
                },
                {
                    header: "Obtain necessary permits and approvals",
                    description: "from local authorities.",
                },
                {
                    header: "Install the greywater collection and storage system",
                    description:
                        "typically involving plumbing modifications and the installation of a storage tank.",
                },
                {
                    header: "Install the filtration and treatment system",
                    description:
                        "which may include a pump, filters, and disinfection equipment.",
                },
                {
                    header: "Connect the treated greywater",
                    description:
                        "to the toilet or irrigation system as appropriate.",
                },
                {
                    header: "Test the system",
                    description: "and make any necessary adjustments.",
                },
            ],
        },
        {
            alt: "Composting Toilet",
            gov: 250,
            utility: 200,
            price: 4160,
            setup: 3,
            image: "/solutions/composting_toilet.jpg",
            imageNoBg: "/solution_models/toilet.png",
            title: "Composting Toilet",
            stats: [
                {
                    data: 5000,
                    units: "gallons",
                    description: "Water saved annually per household",
                },
                {
                    data: 100,
                    units: "%",
                    description: "Reduction in water usage for flushing",
                },
            ],
            steps: [
                {
                    header: "Research composting toilet options near you",
                    description:
                        "Research and choose a composting toilet depending on your needs, and budget.",
                },
                {
                    header: "Install the toilet",
                    description:
                        "Installing the toilet according to the manufacturer's instructions.",
                },
                {
                    header: "Connect the toilet to a composting system",
                    description:
                        "Set up a composting system to connect it to one, adding a carbon source and turning the compost regularly.",
                },
            ],
            description:
                "Convert human waste into compost instead of using water-based sewage systems.",
            hometypes: ["Individual Home"],
            costGraph: [
                [1985, 2100],
                [1990, 2200],
                [1995, 2400],
                [2000, 2700],
                [2005, 2800],
                [2010, 2800],
                [2015, 3200],
                [2020, 3600],
                [2025, 4300],
            ],
            roiGraph: [
                [1985, 200],
                [1990, 250],
                [1995, 350],
                [2000, 550],
                [2005, 950],
                [2010, 1750],
                [2015, 2150],
                [2020, 2350],
                [2025, 2450],
            ],
            utilityRebates: [
                { price: 50, label: "Offered by Puget Sound Energy (PSE)" },
                { price: 100, label: "Offered by Seattle City Light" },
                { price: 50, label: "Offered by Tacoma Public Utilities" },
            ],
            govtRebates: [
                {
                    price: 100,
                    label: "Offered by Washington State Department of Commerce",
                },
                { price: 50, label: "Offered by City of Seattle" },
                { price: 100, label: "Offered by King County" },
            ],
            type: "waste",
            localProviders: ["EcoToilet Systems", "Cascade Composting Toilets"],
        },
        {
            alt: "Solar Panels",
            gov: 2500,
            utility: 2000,
            price: 20400,
            setup: 3,
            image: "/solutions/solar_panel.jpg",
            imageNoBg: "/solution_models/solar_panel.png",
            title: "Solar Panels",
            stats: [
                {
                    data: 200,
                    units: "lbs/kwh",
                    description: "CO2 prevented from emissions",
                },
                {
                    data: 200,
                    units: "lbs/kwh",
                    description: "CO2 prevented from emissions",
                },
            ],
            steps: [
                {
                    header: "Find a Provider",
                    description:
                        "Look at warranties and installation costs. Good providers include Texas Solar Outfitters, Freedom Solar Power, Green Mountain Energy",
                },
                {
                    header: "Incentives and financing",
                    description:
                        "Explore financing options, take advantages of the rebates, to make installation more affordable.",
                },
                {
                    header: "Installation",
                    description:
                        "Schedule the installation from the provider. A local utility company and government representative will inspect it to ensure it meets requirements and it'll be ready to be connected.",
                },
            ],
            description:
                "Installed in areas with high sunlight exposure such as rooftops and balconies, these silicon-based panels harness sunlight to produce electricity.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 12000],
                [1990, 13500],
                [1995, 16000],
                [2000, 13500],
                [2005, 13000],
                [2010, 19000],
                [2015, 23000],
                [2020, 22000],
                [2025, 20000],
            ],
            roiGraph: [
                [1985, 1100],
                [1990, 1250],
                [1995, 1300],
                [2000, 1500],
                [2005, 1550],
                [2010, 1600],
                [2015, 1700],
                [2020, 1900],
                [2025, 2600],
            ],
            utilityRebates: [
                { price: 500, label: "Offered by Puget Sound Energy (PSE)" },
                { price: 1000, label: "Offered by Seattle City Light" },
                { price: 500, label: "Offered by Tacoma Public Utilities" },
            ],
            govtRebates: [
                {
                    price: 1000,
                    label: "Offered by Washington State Department of Commerce",
                },
                { price: 500, label: "Offered by City of Seattle" },
                { price: 1000, label: "Offered by King County" },
            ],
            type: "electricity",
            localProviders: [
                "Solar Solutions LLC",
                "Washington Solar Panels Inc.",
            ],
        },
        {
            alt: "Wind Turbines",
            gov: 2500,
            utility: 2000,
            price: 45600,
            setup: 3,
            image: "/solutions/wind_turbine.jpg",
            imageNoBg: "/solution_models/wind_turbine.png",
            title: "Wind Turbines",
            stats: [
                {
                    data: 1500,
                    units: "lbs/kwh",
                    description: "CO2 prevented from emissions per year",
                },
                {
                    data: 50,
                    units: "%",
                    description: "Average wind turbine efficiency",
                },
            ],
            steps: [
                {
                    header: "Consult with a wind turbine installation expert",
                    description:
                        "Discuss your property and energy needs with a professional to determine the best wind turbine solution for your home.",
                },
                {
                    header: "Choose the right wind turbine",
                    description:
                        "Select a wind turbine model that is suitable for your property size, wind conditions, and energy requirements.",
                },
                {
                    header: "Obtain necessary permits and approvals",
                    description:
                        "Acquire permits and approvals from your local government or relevant authorities to ensure compliance with regulations before installation.",
                },
                {
                    header: "Install the wind turbine",
                    description:
                        "Mount the wind turbine on your property and connect it to your home's electrical system.",
                },
                {
                    header: "Start generating clean, renewable energy",
                    description:
                        "Once installed, your wind turbine will begin generating electricity, allowing you to save on your electricity bills and reduce your carbon footprint.",
                },
            ],
            description:
                "Large turbines installed in areas with consistent wind speeds to generate electricity from wind energy.",
            hometypes: ["Individual Home"],
            costGraph: [
                [1985, 140000],
                [1990, 120000],
                [1995, 90000],
                [2000, 85000],
                [2005, 60000],
                [2010, 55000],
                [2015, 50000],
                [2020, 48000],
                [2025, 45000],
            ],
            roiGraph: [
                [1985, 2250],
                [1990, 2650],
                [1995, 2800],
                [2000, 3200],
                [2005, 3400],
                [2010, 3600],
                [2015, 3650],
                [2020, 4000],
                [2025, 5500],
            ],
            utilityRebates: [
                { price: 500, label: "Offered by Puget Sound Energy (PSE)" },
                { price: 1000, label: "Offered by Seattle City Light" },
                { price: 500, label: "Offered by Tacoma Public Utilities" },
            ],
            govtRebates: [
                {
                    price: 1000,
                    label: "Offered by Washington State Department of Commerce",
                },
                { price: 500, label: "Offered by City of Seattle" },
                { price: 1000, label: "Offered by King County" },
            ],
            type: "electricity",
            localProviders: [
                "Wind Power Solutions Inc.",
                "Northwest Wind Energy",
            ],
        },
        {
            alt: "Energy-Efficient Appliances",
            gov: 250,
            utility: 200,
            price: 1012,
            setup: 1,
            image: "/solutions/energy_efficient_appliances.jpg",
            imageNoBg: "/solution_models/fridge.png",
            title: "Energy-Efficient Appliances",
            stats: [
                {
                    data: 20,
                    units: "%",
                    description:
                        "Reduction in electricity consumption compared to standard appliances",
                },
            ],
            description:
                "Replace old, inefficient appliances with energy-efficient models to reduce electricity usage.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 1800],
                [1990, 1760],
                [1995, 1720],
                [2000, 1660],
                [2005, 1540],
                [2010, 1380],
                [2015, 1200],
                [2020, 1140],
                [2025, 980],
            ],
            roiGraph: [
                [1985, 100],
                [1990, 150],
                [1995, 250],
                [2000, 400],
                [2005, 600],
                [2010, 550],
                [2015, 400],
                [2020, 350],
                [2025, 330],
            ],
            steps: [
                {
                    header: "Research and choose the right energy-efficient appliance",
                    description:
                        "Explore options that match your requirements and budget while prioritizing energy efficiency.",
                },
                {
                    header: "Remove the old appliance",
                    description:
                        "If necessary, uninstall and remove the old appliance to make room for the new one.",
                },
                {
                    header: "Install the new energy-efficient appliance",
                    description:
                        "Follow the manufacturer's instructions carefully to properly install the new appliance.",
                },
                {
                    header: "Connect the appliance to necessary utilities",
                    description:
                        "Ensure proper connections to water, gas, or electricity sources as required for the appliance to function.",
                },
                {
                    header: "Test the appliance",
                    description:
                        "Verify that the appliance operates correctly and efficiently after installation by conducting thorough testing.",
                },
            ],
            utilityRebates: [
                { price: 50, label: "Offered by Puget Sound Energy (PSE)" },
                { price: 100, label: "Offered by Seattle City Light" },
                { price: 50, label: "Offered by Tacoma Public Utilities" },
            ],
            govtRebates: [
                {
                    price: 100,
                    label: "Offered by Washington State Department of Commerce",
                },
                { price: 50, label: "Offered by City of Seattle" },
                { price: 100, label: "Offered by King County" },
            ],
            type: "electricity",
            localProviders: [
                "EcoAppliance Solutions",
                "GreenEnergy Appliances",
            ],
        },
        {
            alt: "LED Lighting",
            gov: 2,
            utility: 15,
            price: 10,
            setup: 1,
            image: "/solutions/leds.jpg",
            imageNoBg: "/solution_models/leds.png",
            title: "LED Lighting",
            stats: [
                {
                    data: 60,
                    units: "%",
                    description:
                        "Reduction in electricity usage compared to incandescent bulbs",
                },
                {
                    data: 2800,
                    units: "dollars",
                    description:
                        "Saved over 10 years in a household compared to incandescent bulbs",
                },
            ],
            steps: [
                {
                    header: "Find a Provider",
                    description:
                        "Look for a provider. Look for a good warranty",
                },
                {
                    header: "Install the LED bulb",
                    description: "Make sure power is turned off.",
                },
                {
                    header: "Apply for rebates",
                    description:
                        "Apply for any rebates that come with the LED bulb purchased",
                },
            ],
            description:
                "Switch to LED bulbs which consume less energy and last longer than traditional incandescent bulbs.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 125],
                [1990, 107],
                [1995, 92],
                [2000, 66],
                [2005, 58],
                [2010, 45],
                [2015, 39],
                [2020, 19],
                [2025, 8],
            ],
            roiGraph: [
                [1985, 0.2],
                [1990, 0.2],
                [1995, 0.3],
                [2000, 0.4],
                [2005, 0.7],
                [2010, 1.6],
                [2015, 2.4],
                [2020, 4.5],
                [2025, 9],
            ],
            utilityRebates: [
                { price: 5, label: "Offered by Seattle City Light per bulb" },
                {
                    price: 10,
                    label: "Offered by Snohomish County PUD per bulb",
                },
                {
                    price: 5,
                    label: "Offered by Tacoma Public Utilities per bulb",
                },
            ],
            govtRebates: [
                {
                    price: 2,
                    label: "Offered by Washington State Department of Commerce per bulb",
                },
            ],
            type: "electricity",
            localProviders: [
                "EcoLighting Solutions",
                "BrightBulb Technologies",
            ],
        },
        {
            alt: "Energy-Efficient Windows",
            gov: 1000,
            utility: 750,
            price: 600,
            setup: 2,
            image: "/solutions/energy-efficient-window.png",
            imageNoBg: "/solution_models/windows.png",
            title: "Energy-Efficient Windows",
            stats: [
                {
                    data: 30,
                    units: "%",
                    description: "Reduction in heating and cooling costs",
                },
                {
                    data: 20,
                    units: "%",
                    description: "Decrease in energy loss through windows",
                },
            ],
            description:
                "Install windows with multiple panes, low-emissivity coatings, and insulated frames to reduce heat transfer and energy loss.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 20000],
                [1990, 18000],
                [1995, 17500],
                [2000, 17000],
                [2005, 16800],
                [2010, 12000],
                [2015, 9000],
                [2020, 2000],
                [2025, 250],
            ],
            roiGraph: [
                [1985, 3],
                [1990, 7],
                [1995, 11],
                [2000, 13],
                [2005, 15],
                [2010, 21],
                [2015, 28],
                [2020, 37],
                [2025, 54],
            ],
            utilityRebates: [
                { price: 750, label: "Offered by Puget Sound Energy" },
            ],
            govtRebates: [
                {
                    price: 1000,
                    label: "Offered by Washington State Department of Commerce",
                },
            ],
            steps: [
                {
                    header: "Find a Provider",
                    description:
                        "Look at warranties and installation costs. Good providers include Pella Windows & Doors and Renewal by Anderson",
                },
                {
                    header: "Replace Windows",
                    description: "Have the provider replace the windows. ",
                },
                {
                    header: "Find a Provider",
                    description:
                        "Important factors when choosing an provider include: warranties, installation costs, and disposal of the old system.",
                },
            ],
            taxRebates: [],
            type: "electricity",
            localProviders: ["EcoWindows Solutions", "GreenGlass Innovations"],
        },
        {
            alt: "Smart Thermostat",
            gov: 0,
            utility: 0,
            price: 57,
            setup: 1,
            image: "/solutions/smart_thermostat.jpg",
            imageNoBg: "/solution_models/thermostat.png",
            title: "Smart Thermostat",
            stats: [
                {
                    data: 10,
                    units: "%",
                    description: "Reduction in heating and cooling costs",
                },
                {
                    data: 20,
                    units: "%",
                    description:
                        "Decrease in energy usage for heating and cooling",
                },
            ],
            description:
                "Programmable thermostats that adjust heating and cooling based on occupancy and user preferences to optimize energy usage.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 320],
                [1990, 220],
                [1995, 160],
                [2000, 120],
                [2005, 80],
                [2010, 60],
                [2015, 50],
                [2020, 45],
                [2025, 60],
            ],
            roiGraph: [
                [1985, 15],
                [1990, 28],
                [1995, 32],
                [2000, 36],
                [2005, 45],
                [2010, 60],
                [2015, 70],
                [2020, 90],
                [2025, 130],
            ],
            utilityRebates: [
                { price: 200, label: "Offered by Avista Utilities" },
                { price: 130, label: "Offered by Puget Sound Energy" },
            ],
            govtRebates: [
                { price: 50, label: "Offered by EPA Energy Star Program" },
            ],
            steps: [
                {
                    header: "Research and choose a thermostat",
                    description:
                        "Research and choose a thermostat based on your house size and needs.",
                },
                {
                    header: "Purchase and install the thermostat",
                    description:
                        "Purchase the thermostat and install it yourself or hire a professional.",
                },
            ],
            type: "heating",
            localProviders: ["SmartHeat Technologies", "GreenThermo Inc."],
        },
        {
            alt: "Electric Vehicles",
            gov: 3000,
            utility: 4000,
            price: 26200,
            setup: 1,
            image: "/solutions/electric_vehicles.jpeg",
            imageNoBg: "/solution_models/ev.png",
            title: "Electric Vehicles",
            stats: [
                {
                    data: 200,
                    units: "lbs/kwh",
                    description: "CO2 prevented from emissions",
                },
            ],
            description:
                "Replace traditional gasoline-powered vehicles with electric vehicles powered by electricity, significantly reducing greenhouse gas emissions.",
            hometypes: ["Individual"],
            costGraph: [
                [1985, 140000],
                [1990, 120000],
                [1995, 118000],
                [2000, 112000],
                [2005, 98000],
                [2010, 76000],
                [2015, 46000],
                [2020, 39000],
                [2025, 23000],
            ],
            roiGraph: [
                [1985, 150],
                [1990, 300],
                [1995, 350],
                [2000, 400],
                [2005, 400],
                [2010, 1200],
                [2015, 2500],
                [2020, 5200],
                [2025, 7500],
            ],
            utilityRebates: [
                { price: 1000, label: "Offered by Avista Utilities" },
                { price: 1000, label: "Offered by Puget Sound Energy" },
            ],
            govtRebates: [
                {
                    price: 1500,
                    label: "Offered by Washington State",
                },
            ],
            steps: [
                {
                    header: "Research EV models",
                    description:
                        "Research and choose an EV model depending on your needs (seats, range, storing capacity), and budget. Good options include the Nissan Leaf and the Tesla Model 3.",
                },
                {
                    header: "Purchase the EV",
                    description:
                        "Purchase the EV from a local dealership or online. Buying used is also a valid option",
                },
                {
                    header: "Assess your method of charging",
                    description:
                        "Install a home charging station or find a public charging station near your home.",
                },
                {
                    header: "Register the EV to apply for incentives",
                    description:
                        "Register the EV with the Washington State Department of Licensing to apply for any applicable rebates.",
                },
            ],
            type: "transportation",
            localProviders: ["EcoWheels", "CleanDrive Autos"],
        },
        {
            alt: "Bicycles",
            gov: 0,
            utility: 0,
            price: 476,
            setup: 1,
            image: "/solutions/bicycle.jpeg",
            imageNoBg: "/solution_models/bicycle.png",
            title: "Bicycles",
            stats: [
                {
                    data: 140,
                    units: "tons",
                    description:
                        "Saved CO2 emissions if 10% of car trips were replaced by bike trips",
                },
                {
                    data: 20,
                    units: "mph",
                    description: "Average speed for commuting",
                },
            ],
            description:
                "Utilize bicycles for short-distance commutes and errands, reducing reliance on motor vehicles and promoting physical activity.",
            hometypes: ["Individual"],
            costGraph: [
                [1985, 300],
                [1990, 320],
                [1995, 340],
                [2000, 345],
                [2005, 360],
                [2010, 375],
                [2015, 390],
                [2020, 420],
                [2025, 490],
            ],
            roiGraph: [
                [1985, 16],
                [1990, 23],
                [1995, 26],
                [2000, 32],
                [2005, 39],
                [2010, 44],
                [2015, 54],
                [2020, 82],
                [2025, 120],
            ],

            steps: [
                {
                    header: "Buy a bike",
                    description:
                        "Buy a bike that fits your needs (road vs off terrain) and budget. Pay attention the size",
                },
                {
                    header: "Get a helmet",
                    description: "Get a helmet to ensure safety while riding.",
                },
                {
                    header: "Plan your route",
                    description:
                        "Plan your route to avoid heavy traffic and dangerous roads.",
                },
            ],
            type: "transportation",
            localProviders: ["GreenCycles", "EcoPedal"],
        },
        {
            alt: "Public Transportation",
            gov: 0,
            utility: 0,
            price: 4,
            setup: 1,
            image: "/solutions/public_transportation.jpeg",
            imageNoBg: "/solution_models/bus.png",
            title: "Public Transportation",
            stats: [
                {
                    data: 1.5,
                    units: "million tons",
                    description:
                        "Saved CO2 emissions by public transportation last year",
                },
                {
                    data: 1.4,
                    units: "billions of gasoline",
                    description:
                        "Saved annually across the United States due to pubic transportation",
                },
            ],
            description:
                "Use buses, trains, and other forms of public transportation for commuting and travel, reducing the number of individual vehicles on the road.",
            hometypes: ["Individual"],
            costGraph: [
                [1985, 1.2],
                [1990, 1.8],
                [1995, 2.3],
                [2000, 2.4],
                [2005, 2.6],
                [2010, 2.7],
                [2015, 3.1],
                [2020, 3.5],
                [2025, 4.2],
            ],
            roiGraph: [
                [1985, 1],
                [1990, 1.1],
                [1995, 1.21],
                [2000, 1.33],
                [2005, 1.46],
                [2010, 1.61],
                [2015, 1.77],
                [2020, 1.94],
                [2025, 2.75],
            ],
            steps: [
                {
                    header: "Research transportation options near you",
                    description:
                        "Research and choose a public transportation option depending on your needs (seats, range, storing capacity), and budget. Good options include the bus and the train.",
                },
                {
                    header: "Purchase a card or download an app",
                    description:
                        "Purchase a card or download an app to pay for public transportation.",
                },
                {
                    header: "Look at the schedule",
                    description:
                        "Look at the schedule to see when the public transportation is available.",
                },
            ],
            type: "transportation",
            localProviders: ["EcoTransit", "GreenCommute"],
        },
        {
            alt: "Carpooling",
            gov: 0,
            utility: 0,
            price: 0,
            setup: 1,
            image: "/solutions/carpooling.jpg",
            imageNoBg: "/solution_models/ev.png",
            title: "Carpooling",
            stats: [
                {
                    data: 50,
                    units: "%",
                    description:
                        "Decrease in greenhouse gas emissions per participant",
                },
                {
                    data: 1.6,
                    units: "million tons",
                    description: "Saved per year by carpooling",
                },
            ],
            description:
                "Share rides with coworkers, friends, or neighbors to commute to work or travel, reducing the number of vehicles on the road and saving on fuel costs.",
            hometypes: ["Individual"],
            steps: [
                {
                    header: "Fnd a Friend or Associate",
                    description:
                        "Find a friend or coworker who lives nearby and has a similar schedule to carpool with.",
                },
                {
                    header: "Take advantage of carpool lanes",
                    description:
                        "Carpool lanes are less congested and can save time on your commute.",
                },
            ],
            costGraph: [
                [1985, 85],
                [1990, 76],
                [1995, 68],
                [2000, 63],
                [2005, 45],
                [2010, 38],
                [2015, 32],
                [2020, 28],
                [2025, 26],
            ],
            roiGraph: [
                [1985, 1.5],
                [1990, 1.9],
                [1995, 2.1],
                [2000, 2.3],
                [2005, 2.7],
                [2010, 4.2],
                [2015, 5.6],
                [2020, 6.3],
                [2025, 9.8],
            ],
            type: "transportation",
            localProviders: ["Carpool Connect", "GreenRide"],
        },
        {
            alt: "Heat Pumps",
            gov: 100,
            utility: 1600,
            price: 18405,
            setup: 2,
            image: "/solutions/heat-pumps.png",
            imageNoBg: "/solution_models/heatpump.png",
            title: "Heat Pumps",
            stats: [
                {
                    data: 50,
                    units: "%",
                    description:
                        "Reduction in energy consumption compared to traditional heating and cooling systems",
                },
                {
                    data: 2000,
                    units: "$/year",
                    description: "in Energy Savings",
                },
            ],
            description:
                "Utilize heat pumps for both heating and cooling, transferring heat between the indoors and outdoors to provide efficient temperature control.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            steps: [
                {
                    header: "Fnd a Provider",
                    description:
                        "Pick a heat pump from a provider based of efficacy ratings and warranty. Good providers include Carrier, Trane, and Lennox.",
                },
                {
                    header: "Assess home heating needs",
                    description:
                        "Assess your home heating system (either yourself or the provider) to calculate heating and cooling needs.",
                },
                {
                    header: "Apply for rebates",
                    description:
                        "Apply for government and utility rebates to reduce the cost",
                },
            ],
            costGraph: [
                [1985, 1750],
                [1990, 3000],
                [1995, 3500],
                [2000, 4000],
                [2005, 5000],
                [2010, 6000],
                [2015, 7000],
                [2020, 16025],
                [2025, 19000],
            ],
            roiGraph: [
                [1985, 450],
                [1990, 550],
                [1995, 850],
                [2000, 950],
                [2005, 1050],
                [2010, 1300],
                [2015, 1350],
                [2020, 1250],
                [2025, 1150],
            ],
            utilityRebates: [
                { price: 1000, label: "Offered by Puget Sound Energy (PSE)" },
                { price: 300, label: "Offered by Avista Utilities" },
                { price: 300, label: "Offered by Cascade Natural Gas" },
            ],
            govtRebates: [
                {
                    price: 100,
                    label: "Offered by Washington State Department of Commerce",
                },
            ],
            type: "heating",
            localProviders: ["EcoHeat Systems", "GreenHeat Solutions"],
        },
        {
            alt: "Energy-Efficient Boilers",
            gov: 1200,
            utility: 2400,
            price: 13980,
            setup: 2,
            image: "/solutions/energy_efficient_boilers.jpg",
            imageNoBg: "/solution_models/boiler.png",
            title: "Energy-Efficient Boilers",
            stats: [
                {
                    data: 90,
                    units: "%",
                    description:
                        "Efficiency improvement over older boiler systems",
                },
            ],
            description:
                "Upgrade to energy-efficient boilers that utilize advanced technology to maximize heat output while minimizing energy consumption.",
            steps: [
                {
                    header: "Fnd a Provider",
                    description:
                        "Look for a provider. You can also take advice from a professional if needed for your home.",
                },
                {
                    header: "Select an Energy-Efficient Boiler",
                    description:
                        "Choose the right boiler for your home. We recommend a condensing boiler. Look for the Energy Star certified boilers as well.",
                },
                {
                    header: "Install the boiler",
                    description:
                        "We recommend hiring a professional, but if you install it yourself, be careful and make sure what you're doing.",
                },
            ],
            hometypes: ["Individual Home"],
            costGraph: [
                [1985, 13500],
                [1990, 14600],
                [1995, 16300],
                [2000, 16100],
                [2005, 15600],
                [2010, 15200],
                [2015, 14300],
                [2020, 13900],
                [2025, 14000],
            ],
            roiGraph: [
                [1985, 140],
                [1990, 230],
                [1995, 390],
                [2000, 550],
                [2005, 780],
                [2010, 920],
                [2015, 1100],
                [2020, 1200],
                [2025, 1250],
            ],
            utilityRebates: [
                { price: 1000, label: "Offered by Puget Sound Energy (PSE)" },
                { price: 400, label: "Offered by Avista Utilities" },
                { price: 1000, label: "Offered by Cascade Natural Gas" },
            ],
            govtRebates: [
                {
                    price: 4000,
                    label: "Offered by the Home Efficiency Rebate Program",
                },
                {
                    price: 8000,
                    label: "Offered by Home Electrification and Appliance Rebate (HEAR) Program:",
                },
            ],
            type: "heating",
            localProviders: ["EcoBoiler Systems", "GreenHeat Solutions"],
        },
        {
            alt: "Insulation",
            gov: 1000,
            utility: 300,
            price: 1.2,
            setup: 1,
            image: "/solutions/insulation.jpeg",
            imageNoBg: "/solution_models/insulation.png",
            title: "Insulation",
            stats: [
                {
                    data: 40,
                    units: "%",
                    description: "Reduction in heating costs",
                },
                {
                    data: 780,
                    units: "million tons/year",
                    description:
                        "Saved if all homes in the US were properly insulated.",
                },
            ],
            description:
                "Improve home insulation to minimize heat transfer and maintain a comfortable indoor temperature with less reliance on heating systems.",
            hometypes: ["Multi-Family Home", "Individual Home"],
            steps: [
                {
                    header: "Choose a Provider and System",
                    description:
                        "Choose the right provider and type of insulation (fiberglass, cellulose, spray foam)",
                },
                {
                    header: "Measure the area to be insulated.",
                    description:
                        "Measure how much area needs to be insulated and purchase the right amount of insulation",
                },
                {
                    header: "Install the system",
                    description:
                        "We recommend hiring a professional, but if you install it yourself, wear protective gear.",
                },
                {
                    header: "Check for leaks",
                    description:
                        "Check for leaks and ensure the insulation is properly installed.",
                },
            ],
            costGraph: [
                [1985, 6],
                [1990, 5.7],
                [1995, 5.3],
                [2000, 4.8],
                [2005, 3.7],
                [2010, 2.5],
                [2015, 2.2],
                [2020, 1.8],
                [2025, 0.9]
            ],
            roiGraph: [
                [1985, 0.01],
                [1990, 0.02],
                [1995, 0.06],
                [2000, 0.13],
                [2005, 0.19],
                [2010, 0.26],
                [2015, 0.35],
                [2020, 0.36],
                [2025, 0.39]
            ],
            utilityRebates: [
                {
                    price: 0.3,
                    label: "Offered by Avista Utilities per square foot",
                },
                {
                    price: 0.3,
                    label: "Offered by Cascade Natural Gas per square foot",
                },
            ],
            govtRebates: [
                {
                    price: 500,
                    label: "Offered by Department of Energy for installing insulation",
                },
                {
                    price: 500,
                    label: "Offered by the EPA Energy Star Program for installing a insulation system",
                },
            ],
            type: "heating",
            localProviders: ["EcoInsulate Solutions", "GreenGuard Insulation"],
        },
    ],
};

export default solutions;
