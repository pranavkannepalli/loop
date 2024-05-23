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
                    header: "Turn off the water supply",
                    description: "Locate the main water shut-off valve, usually found in the garage, basement, or near the water meter, and turn it off."
                },
                {
                    header: "Drain the water lines",
                    description: "Open the faucets to drain any remaining water from the pipes to avoid spills during the installation."
                },
                {
                    header: "Remove the old fixture",
                    description: "Use appropriate tools and follow the manufacturer's instructions to carefully remove the old fixture."
                },
                {
                    header: "Prepare the installation area",
                    description: "Clean the area and make any necessary repairs or adjustments to ensure a proper fit for the new fixture."
                },
                {
                    header: "Install the new low-flow fixture",
                    description: "Consult the manufacturer's instructions and use the recommended tools to install the new low-flow fixture securely."
                },
                {
                    header: "Turn the water supply on",
                    description: "Slowly turn the main water valve back on and check for leaks around the new fixture."
                },
                {
                    header: "Test the new fixture",
                    description: "Run the water through the new low-flow fixture to ensure it is functioning correctly and efficiently."
                }
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
                    header: "Turn off the water supply",
                    description: "Locate the main water shut-off valve, usually found in the garage, basement, or near the water meter, and turn it off."
                },
                {
                    header: "Plan the greywater system layout",
                    description: "Determine the sources of greywater (sinks, showers, etc.) and plan the route to the greywater recycling system. Make sure to comply with local codes and regulations."
                },
                {
                    header: "Install the diverter valve",
                    description: "Install a diverter valve at each greywater source to direct water either to the recycling system or the sewer."
                },
                {
                    header: "Set up the greywater storage tank",
                    description: "Place the storage tank in an appropriate location, such as a basement or outdoor area, and ensure it is securely positioned and properly connected to the diverter valves."
                },
                {
                    header: "Connect the irrigation system",
                    description: "Install pipes or hoses from the greywater storage tank to the irrigation system in your garden or landscape area. Ensure proper filtration and distribution."
                },
                {
                    header: "Turn the water supply on",
                    description: "Slowly turn the main water valve back on and check for leaks around the diverter valves and storage tank connections."
                },
                {
                    header: "Test the greywater system",
                    description: "Run water through the system to ensure the greywater is being properly diverted, stored, and used for irrigation without any leaks or issues."
                }
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
                    header: "Choose a location for the storage tank",
                    description: "Select a suitable location for the rainwater storage tank, such as near a downspout, and ensure the ground is level and stable."
                },
                {
                    header: "Install gutters and downspouts",
                    description: "Ensure your roof has gutters installed, and attach downspouts that will direct rainwater into the storage tank."
                },
                {
                    header: "Set up the first flush diverter",
                    description: "Install a first flush diverter on the downspout to remove debris and contaminants from the initial flow of rainwater."
                },
                {
                    header: "Install the rainwater storage tank",
                    description: "Position the storage tank in the selected location and connect it to the downspout using pipes or hoses. Ensure all connections are secure and watertight."
                },
                {
                    header: "Add a filtration system",
                    description: "Install a filtration system to remove any remaining debris from the rainwater before it enters the storage tank."
                },
                {
                    header: "Connect the distribution system",
                    description: "Set up a distribution system to use the collected rainwater for irrigation, toilet flushing, or other non-potable uses. Ensure proper piping and valves are in place."
                },
                {
                    header: "Test the rainwater harvesting system",
                    description: "Check all connections and run water through the system to ensure it is functioning correctly, with no leaks or issues."
                }
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
                    header: "Assess the site and plan the layout",
                    description: "Evaluate the area to be xeriscaped, considering factors like soil type, sunlight, and existing vegetation. Plan the layout to incorporate native and drought-resistant plants."
                },
                {
                    header: "Remove existing turf and weeds",
                    description: "Clear the area of any existing grass, weeds, and other unwanted vegetation. Use appropriate tools and methods to ensure thorough removal."
                },
                {
                    header: "Amend the soil",
                    description: "Improve the soil with organic matter, compost, or other amendments to enhance its water retention and drainage properties."
                },
                {
                    header: "Install a drip irrigation system",
                    description: "Set up a drip irrigation system to provide efficient water delivery directly to the plant roots. Ensure the system is properly installed and covers all planned planting areas."
                },
                {
                    header: "Place landscape fabric",
                    description: "Lay down landscape fabric to help prevent weed growth while allowing water and air to reach the soil."
                },
                {
                    header: "Plant drought-resistant and native species",
                    description: "Plant a variety of drought-resistant and native plants according to your layout plan. Group plants with similar water needs together."
                },
                {
                    header: "Apply mulch",
                    description: "Cover the soil with a layer of mulch to retain moisture, regulate soil temperature, and reduce weed growth."
                },
                {
                    header: "Test the irrigation system",
                    description: "Run the drip irrigation system to ensure all plants are receiving adequate water and adjust as necessary."
                }
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
                    header: "Plan the layout",
                    description: "Determine the areas that need irrigation and plan the layout of the drip lines and emitters. Consider the water needs of different plants and group them accordingly."
                },
                {
                    header: "Gather materials and tools",
                    description: "Collect all necessary materials and tools, including drip tubing, emitters, connectors, a pressure regulator, a filter, and a timer (optional)."
                },
                {
                    header: "Install the main supply line",
                    description: "Connect the main supply line to the water source, such as an outdoor faucet. Install a backflow preventer, pressure regulator, and filter in line with the main supply."
                },
                {
                    header: "Lay out the drip tubing",
                    description: "Run the drip tubing from the main supply line to the planting areas according to your layout plan. Secure the tubing with stakes to keep it in place."
                },
                {
                    header: "Install emitters and connectors",
                    description: "Punch holes in the drip tubing and insert emitters or connectors at appropriate intervals to provide water to individual plants or rows. Use different types of emitters based on the water needs of the plants."
                },
                {
                    header: "Test the system",
                    description: "Turn on the water supply and run the system to check for leaks and ensure all emitters are working properly. Adjust the emitters as needed to ensure even water distribution."
                },
                {
                    header: "Cover the tubing with mulch",
                    description: "Cover the drip tubing with a layer of mulch to protect it from UV damage, help retain soil moisture, and improve the appearance of the garden."
                },
                {
                    header: "Set the timer (optional)",
                    description: "If using a timer, set it to water the plants at appropriate intervals, ensuring they receive adequate moisture without overwatering."
                }
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
                    header: "Assess current water usage",
                    description: "Evaluate your current water usage to identify areas where efficiency can be improved, such as in bathrooms, kitchens, and outdoor areas."
                },
                {
                    header: "Choose water-efficient fixtures and appliances",
                    description: "Select water-efficient fixtures and appliances, such as low-flow showerheads, faucets, toilets, and water-saving washing machines and dishwashers."
                },
                {
                    header: "Turn off the water supply",
                    description: "Locate the main water shut-off valve, usually found in the garage, basement, or near the water meter, and turn it off."
                },
                {
                    header: "Install water-efficient fixtures",
                    description: "Replace existing fixtures with water-efficient models. Follow the manufacturer's instructions for removing old fixtures and installing new ones."
                },
                {
                    header: "Install water-saving appliances",
                    description: "Replace old appliances with water-saving models. Follow the manufacturer's instructions for proper installation and connection to water lines."
                },
                {
                    header: "Set up a greywater recycling system (optional)",
                    description: "Install a greywater recycling system to reuse water from sinks, showers, and washing machines for irrigation or toilet flushing. Follow guidelines for local regulations and proper installation."
                },
                {
                    header: "Set up a rainwater harvesting system (optional)",
                    description: "Install a rainwater harvesting system to collect and use rainwater for irrigation or other non-potable uses. Ensure proper installation of gutters, downspouts, storage tanks, and filtration systems."
                },
                {
                    header: "Turn the water supply on",
                    description: "Slowly turn the main water valve back on and check all new fixtures and appliances for leaks."
                },
                {
                    header: "Test and adjust the system",
                    description: "Run water through all new fixtures and appliances to ensure they are functioning correctly. Make any necessary adjustments to improve efficiency."
                }
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
                    header: "Assess current water usage",
                    description: "Evaluate your household's current water usage to identify areas where habits can be adjusted to save water, such as during showers, dishwashing, and garden irrigation."
                },
                {
                    header: "Educate household members",
                    description: "Inform all household members about the importance of water conservation and provide tips on how they can contribute to saving water in their daily routines."
                },
                {
                    header: "Implement shorter shower times",
                    description: "Encourage everyone to take shorter showers. Aim for showers to be 5 minutes or less, and consider using a timer to track time."
                },
                {
                    header: "Turn off taps when not in use",
                    description: "Make it a habit to turn off the tap while brushing teeth, shaving, or washing hands. Only run the tap when necessary."
                },
                {
                    header: "Fix leaks promptly",
                    description: "Regularly check for and repair any leaks in faucets, toilets, and showerheads. A small drip can waste a significant amount of water over time."
                },
                {
                    header: "Use water-saving devices",
                    description: "Install aerators on faucets, low-flow showerheads, and dual-flush or low-flow toilets to reduce water usage without sacrificing performance."
                },
                {
                    header: "Run full loads in dishwashers and washing machines",
                    description: "Only run the dishwasher and washing machine with full loads to maximize water efficiency. Avoid running these appliances for small loads."
                },
                {
                    header: "Practice mindful watering in the garden",
                    description: "Water plants during the early morning or late evening to reduce evaporation. Use a watering can or a drip irrigation system instead of a hose to minimize water wastage."
                },
                {
                    header: "Collect and reuse water",
                    description: "Collect rainwater or use greywater for watering plants. Reuse water from cooking (e.g., water used to wash vegetables) for watering garden plants."
                },
                {
                    header: "Monitor water bills and usage",
                    description: "Regularly check your water bills and monitor water usage to identify trends and areas for improvement. Set goals for reducing water consumption and track your progress."
                }
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
                    header: "Assess your energy needs",
                    description: "Determine your household's energy consumption to decide the number and size of solar panels required. Review past electricity bills to get an average usage."
                },
                {
                    header: "Evaluate your roof's suitability",
                    description: "Inspect your roof to ensure it can support solar panels. Consider factors like roof orientation, angle, shading, and structural integrity."
                },
                {
                    header: "Choose the right solar panel system",
                    description: "Research and select a solar panel system that meets your energy needs and budget. Consider the type of panels, inverter, and mounting system."
                },
                {
                    header: "Obtain necessary permits and approvals",
                    description: "Check with your local government and utility company for required permits and approvals. Follow all regulations and guidelines for solar panel installation."
                },
                {
                    header: "Install the mounting system",
                    description: "Secure the racking or mounting system to your roof. Ensure it is properly aligned and securely attached to support the solar panels."
                },
                {
                    header: "Install the solar panels",
                    description: "Attach the solar panels to the mounting system. Follow the manufacturer's instructions for securing the panels and making electrical connections."
                },
                {
                    header: "Connect the solar inverter",
                    description: "Install the inverter and connect it to the solar panels. The inverter converts the direct current (DC) produced by the panels into alternating current (AC) used by your home."
                },
                {
                    header: "Complete electrical wiring",
                    description: "Connect the inverter to your home's electrical system. Ensure all wiring is done safely and complies with local electrical codes. This step is typically performed by a licensed electrician."
                },
                {
                    header: "Test the system",
                    description: "Turn on the solar panel system and test it to ensure everything is working correctly. Check the output and monitor the system to verify it meets expected performance levels."
                },
                {
                    header: "Monitor and maintain the system",
                    description: "Regularly monitor the solar panel system's performance through a monitoring app or system. Perform routine maintenance, such as cleaning the panels and checking for any issues, to ensure optimal efficiency."
                }
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
                    header: "Assess wind resource",
                    description: "Evaluate wind speeds and patterns at your location using a wind resource map or anemometer. Choose a site with consistent and sufficient wind for optimal turbine performance."
                },
                {
                    header: "Check local regulations",
                    description: "Research zoning laws, building codes, and permit requirements for installing a wind turbine in your area. Obtain necessary permits and approvals from local authorities."
                },
                {
                    header: "Select the right turbine",
                    description: "Choose a wind turbine that matches your energy needs and site conditions. Consider factors like turbine size, tower height, rotor diameter, and rated power."
                },
                {
                    header: "Prepare the site",
                    description: "Clear the installation site of any obstacles that could interfere with the turbine's operation, such as trees or buildings. Ensure the site is level and stable."
                },
                {
                    header: "Install the tower",
                    description: "Assemble the tower according to the manufacturer's instructions. Secure the tower base to a concrete foundation or anchor bolts embedded in the ground."
                },
                {
                    header: "Install the turbine",
                    description: "Mount the turbine on top of the tower. Follow the manufacturer's instructions for assembling and attaching the turbine components, including the rotor, blades, and nacelle."
                },
                {
                    header: "Connect electrical components",
                    description: "Install electrical wiring from the turbine to your home's electrical system. Connect the turbine to an inverter to convert the generated electricity from AC to DC for use in your home."
                },
                {
                    header: "Test the system",
                    description: "Turn on the wind turbine and test it to ensure everything is functioning correctly. Monitor the turbine's performance and output to verify it meets expected levels."
                },
                {
                    header: "Maintain the turbine",
                    description: "Regularly inspect and maintain the wind turbine to ensure optimal performance and longevity. Check for any signs of wear or damage and perform routine maintenance tasks as recommended by the manufacturer."
                },
                {
                    header: "Monitor wind conditions",
                    description: "Continuously monitor wind conditions to maximize turbine efficiency and output. Adjust turbine settings as needed to optimize performance in different wind speeds and directions."
                }
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
                    header: "Assess current appliances",
                    description: "Identify old or inefficient appliances in your home that need replacement. Consider factors such as age, energy consumption, and overall performance."
                },
                {
                    header: "Research energy-efficient models",
                    description: "Research energy-efficient appliances that meet your needs. Look for ENERGY STAR® certified products, which meet strict energy efficiency criteria set by the EPA."
                },
                {
                    header: "Calculate energy savings",
                    description: "Estimate potential energy savings by comparing the energy consumption of old appliances with new, energy-efficient models. Consider factors such as annual operating costs and payback period."
                },
                {
                    header: "Select the right appliances",
                    description: "Choose energy-efficient appliances that match your household's requirements and budget. Look for features such as EnergyGuide labels and energy-saving settings."
                },
                {
                    header: "Prepare for installation",
                    description: "Measure the available space for each appliance and ensure proper electrical and plumbing connections are in place. Clear the area and remove old appliances if necessary."
                },
                {
                    header: "Purchase and deliver appliances",
                    description: "Order the selected energy-efficient appliances from a reputable retailer. Arrange for delivery or pick-up and ensure appliances are handled with care during transportation."
                },
                {
                    header: "Install appliances",
                    description: "Follow the manufacturer's instructions or hire a professional to install the new appliances. Ensure proper electrical connections, plumbing hook-ups, and ventilation as required."
                },
                {
                    header: "Dispose of old appliances responsibly",
                    description: "Recycle or donate old appliances to prevent them from ending up in landfills. Check with local recycling centers or appliance retailers for disposal options."
                },
                {
                    header: "Test appliances",
                    description: "Turn on the new appliances and test their functionality. Verify that all features and settings are working correctly and check for any signs of damage or defects."
                },
                {
                    header: "Monitor energy usage",
                    description: "Monitor energy usage with the new appliances to track savings over time. Compare utility bills and energy consumption data to assess the impact of energy-efficient upgrades."
                }
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
                    header: "Evaluate current lighting",
                    description: "Assess your current lighting setup and identify areas where LED bulbs could replace traditional incandescent or CFL bulbs."
                },
                {
                    header: "Calculate potential savings",
                    description: "Estimate potential energy and cost savings by switching to LED bulbs. Consider factors such as wattage, lifespan, and electricity rates."
                },
                {
                    header: "Research LED bulbs",
                    description: "Research different types of LED bulbs available on the market. Consider factors such as brightness, color temperature, and compatibility with existing fixtures."
                },
                {
                    header: "Select the right bulbs",
                    description: "Choose LED bulbs that match your lighting needs and preferences. Look for Energy Star certified bulbs to ensure quality and energy efficiency."
                },
                {
                    header: "Purchase LED bulbs",
                    description: "Purchase the selected LED bulbs from a reputable retailer or online store. Buy bulbs in bulk to save money and ensure consistency in lighting."
                },
                {
                    header: "Prepare for installation",
                    description: "Turn off power to the lighting fixtures before replacing bulbs. Remove old bulbs carefully and ensure sockets are clean and free of debris."
                },
                {
                    header: "Install LED bulbs",
                    description: "Insert LED bulbs into the sockets and twist them securely into place. Ensure bulbs are compatible with existing fixtures and fit properly."
                },
                {
                    header: "Test LED bulbs",
                    description: "Turn on the power to the lighting fixtures and test the LED bulbs. Verify that they illuminate properly and provide the desired brightness and color."
                },
                {
                    header: "Dispose of old bulbs responsibly",
                    description: "Dispose of old incandescent or CFL bulbs responsibly. Recycle them at designated recycling centers or hazardous waste facilities."
                },
                {
                    header: "Monitor energy usage",
                    description: "Monitor energy usage with LED bulbs to track savings over time. Compare utility bills and energy consumption data to assess the impact of the switch to LED lighting."
                }
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
                    header: "Assess your needs",
                    description: "Identify areas in your home where smart technology could enhance convenience, comfort, and energy efficiency. Consider factors such as security, lighting, heating, and entertainment."
                },
                {
                    header: "Research smart devices",
                    description: "Research different types of smart devices available on the market, such as smart thermostats, lighting systems, security cameras, and voice assistants. Consider compatibility and integration options."
                },
                {
                    header: "Choose the right devices",
                    description: "Select smart devices that meet your specific needs and preferences. Look for devices with user-friendly interfaces, reliable connectivity, and compatibility with other smart systems."
                },
                {
                    header: "Plan your smart-home ecosystem",
                    description: "Create a plan for integrating smart devices into your home. Determine how devices will communicate with each other and whether you need a central hub or controller."
                },
                {
                    header: "Purchase smart devices",
                    description: "Purchase the selected smart devices from reputable retailers or online stores. Consider bundling devices or buying starter kits to save money and ensure compatibility."
                },
                {
                    header: "Install smart devices",
                    description: "Follow the manufacturer's instructions to install and set up each smart device. Connect devices to your home's Wi-Fi network and configure settings as needed."
                },
                {
                    header: "Test smart devices",
                    description: "Test each smart device to ensure it functions correctly and communicates with other devices as intended. Verify that you can control devices remotely via smartphone apps or voice commands."
                },
                {
                    header: "Integrate smart devices",
                    description: "Integrate smart devices into your daily routines and automation schedules. Set up scenes, routines, or schedules to automate tasks and optimize energy usage."
                },
                {
                    header: "Explore additional features",
                    description: "Explore additional features and capabilities of your smart devices, such as energy monitoring, security alerts, voice control, and third-party app integrations."
                },
                {
                    header: "Monitor and update",
                    description: "Regularly monitor your smart-home system for updates, security patches, and new features. Stay informed about advancements in smart technology and consider expanding your system as needed."
                }
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
                    header: "Assess your energy needs",
                    description: "Evaluate your household's energy usage and determine the size of the battery system needed to meet your requirements. Consider factors such as peak usage times, blackout protection, and renewable energy integration."
                },
                {
                    header: "Choose the right battery system",
                    description: "Research different types of home battery systems, such as lithium-ion, lead-acid, or flow batteries. Consider factors like capacity, efficiency, lifespan, and warranty."
                },
                {
                    header: "Select compatible components",
                    description: "Choose other components for your battery system, such as an inverter, charge controller, and monitoring system. Ensure compatibility with your chosen battery technology and electrical setup."
                },
                {
                    header: "Calculate system size and layout",
                    description: "Determine the optimal placement and configuration of your battery system. Consider factors such as available space, wiring requirements, and ventilation needs."
                },
                {
                    header: "Obtain necessary permits and approvals",
                    description: "Check with local authorities and utility companies for required permits and approvals. Ensure compliance with building codes, zoning regulations, and safety standards."
                },
                {
                    header: "Purchase battery system components",
                    description: "Order the selected battery system components from a reputable supplier or manufacturer. Arrange for delivery and ensure all necessary parts and equipment are available."
                },
                {
                    header: "Install the battery system",
                    description: "Follow the manufacturer's instructions or hire a professional installer to set up the battery system. Install batteries, inverters, and other components according to the planned layout."
                },
                {
                    header: "Connect to electrical system",
                    description: "Connect the battery system to your home's electrical system. Install wiring, breakers, and disconnect switches as needed. Ensure all connections are secure and properly insulated."
                },
                {
                    header: "Test the system",
                    description: "Turn on the battery system and test its functionality. Verify that it charges and discharges correctly, communicates with other components, and integrates with your renewable energy sources."
                },
                {
                    header: "Monitor performance",
                    description: "Regularly monitor your home battery system's performance and energy usage. Use monitoring software or apps to track battery status, energy production, and consumption patterns."
                }
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
                    header: "Select a composting method",
                    description: "Choose a composting method that fits your space, lifestyle, and composting goals. Options include traditional compost bins, tumblers, worm bins (vermicomposting), or open piles."
                },
                {
                    header: "Choose a location",
                    description: "Select a suitable location for your composting system. Choose an area with good drainage, airflow, and access to sunlight or shade, depending on the composting method."
                },
                {
                    header: "Gather composting materials",
                    description: "Collect organic materials for composting, including kitchen scraps (fruits, vegetables, coffee grounds), yard waste (grass clippings, leaves), and other organic matter (shredded paper, cardboard)."
                },
                {
                    header: "Set up the composting system",
                    description: "Assemble your compost bin or tumbler according to the manufacturer's instructions. For open piles or vermicomposting, designate an area and prepare the soil or bedding."
                },
                {
                    header: "Add compostable materials",
                    description: "Start adding organic materials to your composting system. Layer green (nitrogen-rich) and brown (carbon-rich) materials to maintain a balanced compost pile."
                },
                {
                    header: "Monitor and maintain the compost pile",
                    description: "Regularly monitor the compost pile's moisture level, temperature, and decomposition progress. Turn or aerate the pile periodically to promote decomposition and prevent odors."
                },
                {
                    header: "Adjust composting conditions",
                    description: "Adjust composting conditions as needed to maintain optimal decomposition. Add water to keep the pile moist, add more brown materials to balance the pile, or cover the pile during heavy rain."
                },
                {
                    header: "Harvest and use compost",
                    description: "Once the compost is fully decomposed and resembles dark, crumbly soil, it is ready to use. Harvest the compost and use it to enrich garden soil, amend potting mixes, or fertilize plants."
                },
                {
                    header: "Troubleshoot common issues",
                    description: "Address any issues that arise during composting, such as unpleasant odors, pests, or slow decomposition. Troubleshoot problems by adjusting composting conditions or adding corrective measures."
                },
                {
                    header: "Continue learning and improving",
                    description: "Keep learning about composting techniques, tips, and best practices to improve your composting skills over time. Share knowledge and experiences with other composters to foster a sense of community."
                }
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
                    header: "Research local recycling guidelines",
                    description: "Check with your local municipality or waste management authority to understand recycling regulations, accepted materials, and collection schedules in your area."
                },
                {
                    header: "Identify recyclable materials",
                    description: "Learn which materials are recyclable and commonly accepted in your area's recycling program. Common recyclables include paper, cardboard, glass, plastic bottles, and aluminum cans."
                },
                {
                    header: "Set up recycling bins",
                    description: "Designate a specific area in your home or garage for recycling bins. Use separate bins or containers to sort recyclables by material type (e.g., paper, plastic, metal). Label bins clearly for easy identification."
                },
                {
                    header: "Educate household members",
                    description: "Inform everyone in your household about the importance of recycling and how to properly sort recyclable materials. Provide guidance on which items can be recycled and where to place them."
                },
                {
                    header: "Establish a recycling routine",
                    description: "Create a regular schedule for collecting and disposing of recyclables. Set a specific day or days each week to empty recycling bins and take materials to the designated collection point or curbside pickup area."
                },
                {
                    header: "Rinse and prepare recyclables",
                    description: "Before placing recyclables in the bins, rinse containers, remove lids, and flatten cardboard boxes to save space. Check with local guidelines for any specific preparation requirements."
                },
                {
                    header: "Monitor and maintain recycling bins",
                    description: "Regularly check recycling bins for contamination or non-recyclable items. Remove any contaminants and educate household members about proper recycling practices to prevent future issues."
                },
                {
                    header: "Participate in community recycling events",
                    description: "Take advantage of community recycling events or drop-off locations for special items that may not be accepted in curbside recycling programs, such as electronics, batteries, or hazardous materials."
                },
                {
                    header: "Reduce and reuse",
                    description: "In addition to recycling, focus on reducing waste and reusing items whenever possible. Choose products with minimal packaging, opt for reusable items instead of single-use products, and repair or repurpose items when feasible."
                },
                {
                    header: "Track progress and celebrate success",
                    description: "Keep track of your recycling efforts by monitoring the amount and types of materials recycled over time. Celebrate milestones and achievements to motivate continued participation and commitment to recycling."
                }
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
                    header: "Research composting toilets",
                    description: "Learn about different types of composting toilets available on the market, including self-contained units, central systems, and DIY options. Consider factors such as capacity, ventilation, and maintenance requirements."
                },
                {
                    header: "Check local regulations",
                    description: "Check with your local building department or health authority to understand regulations and permitting requirements for installing a composting toilet in your area. Ensure compliance with applicable codes and guidelines."
                },
                {
                    header: "Select a suitable location",
                    description: "Choose a location for the composting toilet that provides adequate ventilation, privacy, and access to utilities (if required). Consider factors such as proximity to living areas and outdoor spaces."
                },
                {
                    header: "Prepare the installation site",
                    description: "Prepare the installation site by clearing the area and ensuring it is level and stable. Install any necessary ventilation ducting, plumbing connections, and electrical wiring as required."
                },
                {
                    header: "Install the composting toilet",
                    description: "Follow the manufacturer's instructions to install the composting toilet unit. Secure the toilet to the floor or platform and connect any plumbing or electrical components according to the provided guidelines."
                },
                {
                    header: "Set up ventilation",
                    description: "Ensure proper ventilation for the composting toilet system to remove odors and excess moisture. Install a vent pipe or fan system to exhaust air outdoors and maintain airflow within the unit."
                },
                {
                    header: "Add composting material",
                    description: "Add an appropriate composting medium, such as peat moss, coconut coir, or sawdust, to the composting chamber. Follow recommendations for the initial layer thickness and ongoing maintenance."
                },
                {
                    header: "Educate users",
                    description: "Provide instructions to household members or users on how to use the composting toilet correctly. Emphasize proper waste separation, composting material usage, and maintenance procedures."
                },
                {
                    header: "Monitor and maintain the system",
                    description: "Regularly monitor the composting toilet system for odors, moisture levels, and compost decomposition. Follow maintenance tasks outlined by the manufacturer, such as turning compost, adding material, and emptying the finished compost."
                },
                {
                    header: "Compost disposal",
                    description: "Dispose of finished compost according to local regulations and guidelines. Use compost as a soil amendment in gardens or landscaping projects, or arrange for proper disposal through municipal composting facilities."
                }
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
                    header: "Research electric vehicles (EVs)",
                    description: "Learn about different electric vehicle models available on the market, including sedans, SUVs, and trucks. Consider factors such as range, charging infrastructure, and incentives."
                },
                {
                    header: "Calculate cost savings",
                    description: "Estimate potential cost savings from switching to an electric vehicle, including fuel savings, maintenance costs, and available incentives such as tax credits or rebates."
                },
                {
                    header: "Assess charging infrastructure",
                    description: "Evaluate the availability of charging infrastructure in your area, including home charging options, public charging stations, and workplace charging facilities. Determine if additional charging equipment is needed."
                },
                {
                    header: "Select an electric vehicle",
                    description: "Choose an electric vehicle that meets your needs and preferences. Consider factors such as range, battery size, charging speed, and additional features like autopilot or regenerative braking."
                },
                {
                    header: "Arrange financing or leasing",
                    description: "Explore financing or leasing options for purchasing or leasing an electric vehicle. Compare interest rates, loan terms, and lease terms from different lenders or dealerships."
                },
                {
                    header: "Install home charging equipment",
                    description: "If necessary, install home charging equipment to facilitate convenient charging of your electric vehicle. Consider factors such as charging speed, connector type, and installation costs."
                },
                {
                    header: "Learn about EV maintenance",
                    description: "Educate yourself about electric vehicle maintenance requirements, which differ from traditional internal combustion engine vehicles. Learn about battery care, tire maintenance, and software updates."
                },
                {
                    header: "Take delivery of your EV",
                    description: "Take delivery of your electric vehicle from the dealership or manufacturer. Familiarize yourself with the vehicle's features, controls, and charging process."
                },
                {
                    header: "Plan charging routines",
                    description: "Develop a charging routine that suits your lifestyle and driving patterns. Take advantage of off-peak charging rates, schedule charging sessions to coincide with low electricity demand, and plan longer trips around charging stops."
                },
                {
                    header: "Monitor energy usage and savings",
                    description: "Track your electric vehicle's energy usage, charging habits, and cost savings over time. Use available tools and apps to monitor energy consumption, estimate charging costs, and track your environmental impact."
                }
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
                    data: 700,
                    description: "million annual riders",
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
                    header: "Research available options",
                    description: "Find out about the public transportation options in your area, such as buses, trains, or subways."
                },
                {
                    header: "Plan your journey",
                    description: "Use online resources or apps to plan your route, including stops, schedules, and fares."
                },
                {
                    header: "Purchase tickets or passes",
                    description: "Buy tickets or passes in advance or at the station, depending on the available options."
                },
                {
                    header: "Board the vehicle",
                    description: "Wait for your ride at the designated stop, then board the vehicle and enjoy your journey."
                }
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
                    header: "Set up your workstation",
                    description: "Designate a dedicated area in your home for telecommuting. Ensure it's equipped with a comfortable desk, ergonomic chair, and sufficient lighting."
                },
                {
                    header: "Prepare your computer",
                    description: "Ensure your computer or laptop is in good working condition and has the necessary software installed for telecommuting tasks."
                },
                {
                    header: "Install telecommuting software",
                    description: "Download and install essential telecommuting software such as video conferencing tools, project management platforms, and communication apps."
                },
                {
                    header: "Test your internet connection",
                    description: "Check the reliability and speed of your internet connection to ensure seamless communication and productivity during telecommuting."
                },
                {
                    header: "Set up a VPN (Virtual Private Network)",
                    description: "If required by your employer, set up a VPN connection to securely access company networks and resources from your telecommuting workstation."
                },
                {
                    header: "Organize your workspace",
                    description: "Arrange your workspace to minimize distractions and maximize productivity. Keep essential documents, supplies, and equipment within reach."
                },
                {
                    header: "Personalize your workspace",
                    description: "Add personal touches to your telecommuting workspace to make it feel comfortable and inviting. Consider adding plants, artwork, or photographs to enhance the ambiance."
                }
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
                    header: "Research alternative fuel options",
                    description: "Explore vehicles that run on alternative fuels such as hydrogen, biodiesel, ethanol, propane, or natural gas."
                },
                {
                    header: "Assess vehicle availability",
                    description: "Check the availability of vehicles that run on your chosen alternative fuel in your area or nearby markets."
                },
                {
                    header: "Evaluate vehicle features and performance",
                    description: "Compare the features, performance, range, and fuel efficiency of different alternative fuel vehicles to find the best fit for your needs."
                },
                {
                    header: "Find a reputable dealer or manufacturer",
                    description: "Locate a reputable dealer or manufacturer that offers alternative fuel vehicles and provides support for sales, service, and maintenance."
                }
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
                    header: "Research car-sharing options",
                    description: "Explore different car-sharing services available in your area. Consider factors such as coverage area, vehicle availability, pricing, and membership requirements."
                },
                {
                    header: "Sign up for a membership",
                    description: "Register for a membership with the car-sharing service of your choice. Provide required information such as your driver's license, payment details, and contact information."
                },
                {
                    header: "Download the mobile app",
                    description: "Download the car-sharing service's mobile app to your smartphone or mobile device. Use the app to find available vehicles, reserve cars, and manage your bookings."
                },
                {
                    header: "Find and reserve a vehicle",
                    description: "Use the mobile app or website to locate nearby vehicles and check their availability. Reserve a vehicle for your desired time and duration, making sure to consider factors like vehicle type and location."
                },
                {
                    header: "Unlock and access the vehicle",
                    description: "Use the car-sharing service's mobile app or membership card to unlock the reserved vehicle. Follow any instructions provided by the app or service for accessing the vehicle."
                },
                {
                    header: "Use the vehicle responsibly",
                    description: "Drive the car-sharing vehicle responsibly, adhering to traffic laws and safety guidelines. Return the vehicle on time and in the same condition as when you picked it up, refueling if necessary."
                },
                {
                    header: "End your trip",
                    description: "End your trip using the car-sharing service's mobile app or website. Follow any instructions provided for parking the vehicle and locking it securely."
                }
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
                    header: "Assess your heating and cooling needs",
                    description: "Evaluate your home's heating and cooling requirements based on factors such as size, insulation, climate, and existing HVAC system efficiency."
                },
                {
                    header: "Research energy-efficient HVAC options",
                    description: "Explore energy-efficient HVAC systems such as high-efficiency furnaces, heat pumps, ductless mini-split systems, and smart thermostats. Compare energy ratings, features, and performance."
                },
                {
                    header: "Calculate potential energy savings",
                    description: "Estimate potential energy savings by upgrading to an energy-efficient HVAC system. Consider factors such as energy efficiency ratings, annual fuel utilization efficiency (AFUE), seasonal energy efficiency ratio (SEER), and heating seasonal performance factor (HSPF)."
                },
                {
                    header: "Select the right HVAC system",
                    description: "Choose an HVAC system that meets your heating and cooling needs while maximizing energy efficiency. Consult with HVAC professionals to determine the best system size, type, and features for your home."
                },
                {
                    header: "Schedule professional installation",
                    description: "Hire licensed HVAC contractors to install the energy-efficient HVAC system. Ensure proper sizing, installation, and ductwork design to optimize performance and efficiency."
                },
                {
                    header: "Seal and insulate ductwork",
                    description: "Inspect and seal ductwork to prevent air leaks and improve energy efficiency. Properly insulate ducts in unconditioned spaces to reduce heat loss or gain during air distribution."
                },
                {
                    header: "Program and optimize thermostat settings",
                    description: "Install programmable or smart thermostats to control heating and cooling settings automatically based on your schedule and preferences. Set energy-saving temperature setbacks for times when you're away or asleep."
                }
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
                    header: "Assess solar potential",
                    description: "Evaluate your home's solar potential by analyzing factors such as orientation, roof angle, shading, and local climate conditions."
                },
                {
                    header: "Design passive solar features",
                    description: "Design passive solar features such as large south-facing windows, thermal mass materials (e.g., concrete floors, masonry walls), and shading elements (e.g., overhangs, deciduous trees)."
                },
                {
                    header: "Calculate glazing area and placement",
                    description: "Calculate the appropriate size and placement of south-facing windows to maximize solar gain while minimizing heat loss. Consider factors such as window orientation, glazing type, and overhang design."
                },
                {
                    header: "Install thermal mass materials",
                    description: "Incorporate thermal mass materials into your home's design to absorb and store solar heat during the day, releasing it gradually at night to maintain indoor comfort."
                },
                {
                    header: "Optimize natural ventilation",
                    description: "Design natural ventilation strategies to enhance indoor air quality and comfort. Use operable windows, vents, and fans to facilitate airflow and regulate temperature."
                },
                {
                    header: "Maximize insulation and air sealing",
                    description: "Ensure your home is well-insulated and air-sealed to minimize heat loss and maintain thermal comfort. Use high-performance insulation materials and seal gaps and cracks in the building envelope."
                },
                {
                    header: "Monitor and adjust",
                    description: "Monitor the performance of your passive solar heating system and make adjustments as needed to optimize efficiency and comfort. Consider factors such as solar exposure, temperature fluctuations, and occupant feedback."
                }
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
                    header: "Assess your energy needs",
                    description: "Determine your household's energy consumption to decide the number and size of solar panels required. Review past electricity bills to get an average usage."
                },
                {
                    header: "Evaluate your roof's suitability",
                    description: "Inspect your roof to ensure it can support solar panels. Consider factors like roof orientation, angle, shading, and structural integrity."
                },
                {
                    header: "Choose the right solar panel system",
                    description: "Research and select a solar panel system that meets your energy needs and budget. Consider the type of panels, inverter, and mounting system."
                },
                {
                    header: "Obtain necessary permits and approvals",
                    description: "Check with your local government and utility company for required permits and approvals. Follow all regulations and guidelines for solar panel installation."
                },
                {
                    header: "Install the mounting system",
                    description: "Secure the racking or mounting system to your roof. Ensure it is properly aligned and securely attached to support the solar panels."
                },
                {
                    header: "Install the solar panels",
                    description: "Attach the solar panels to the mounting system. Follow the manufacturer's instructions for securing the panels and making electrical connections."
                },
                {
                    header: "Connect the solar inverter",
                    description: "Install the inverter and connect it to the solar panels. The inverter converts the direct current (DC) produced by the panels into alternating current (AC) used by your home."
                },
                {
                    header: "Complete electrical wiring",
                    description: "Connect the inverter to your home's electrical system. Ensure all wiring is done safely and complies with local electrical codes. This step is typically performed by a licensed electrician."
                },
                {
                    header: "Test the system",
                    description: "Turn on the solar panel system and test it to ensure everything is working correctly. Check the output and monitor the system to verify it meets expected performance levels."
                },
                {
                    header: "Monitor and maintain the system",
                    description: "Regularly monitor the solar panel system's performance through a monitoring app or system. Perform routine maintenance, such as cleaning the panels and checking for any issues, to ensure optimal efficiency."
                }
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
                    header: "Assess your window needs",
                    description: "Evaluate your home's current windows and identify areas where energy efficiency can be improved. Consider factors such as window type, size, condition, and location."
                },
                {
                    header: "Research energy-efficient window options",
                    description: "Explore energy-efficient window options such as double or triple-pane glass, low-emissivity (low-e) coatings, gas fills (e.g., argon or krypton), and insulated frames."
                },
                {
                    header: "Choose the right window style and features",
                    description: "Select window styles and features that meet your aesthetic preferences and functional needs while maximizing energy efficiency. Consider factors such as frame material, glazing type, and operability."
                },
                {
                    header: "Measure and order windows",
                    description: "Measure the dimensions of your window openings accurately and order energy-efficient windows from a reputable manufacturer or supplier. Ensure proper sizing and fit for each window."
                },
                {
                    header: "Prepare for installation",
                    description: "Prepare your home for window installation by clearing the work area, removing window coverings and hardware, and protecting furniture and flooring from dust and debris."
                },
                {
                    header: "Install new windows",
                    description: "Hire professional window installers or follow manufacturer guidelines to install the new energy-efficient windows. Ensure proper sealing, insulation, and weatherproofing to prevent air leaks and moisture infiltration."
                },
                {
                    header: "Seal and insulate around windows",
                    description: "Seal gaps and cracks around window frames with weatherstripping, caulking, or foam insulation to minimize air leakage and improve energy efficiency. Insulate window cavities to reduce heat transfer."
                },
                {
                    header: "Test and evaluate",
                    description: "Test the performance of your new energy-efficient windows by monitoring indoor comfort, energy usage, and utility bills over time. Evaluate the impact of the windows on thermal comfort, noise reduction, and indoor air quality."
                }
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
                    header: "Site assessment",
                    description: "Inspect your property to determine the best location for the outdoor unit (condenser) and indoor unit (air handler). Ensure proper clearance, accessibility, and adequate airflow for efficient operation."
                },
                {
                    header: "Mount outdoor unit",
                    description: "Install the outdoor unit on a stable and level surface, such as a concrete pad or mounting brackets. Secure the unit to prevent vibration and noise during operation."
                },
                {
                    header: "Install refrigerant lines",
                    description: "Connect the refrigerant lines between the indoor and outdoor units. Ensure proper sizing, insulation, and sealing to prevent leaks and optimize system efficiency."
                },
                {
                    header: "Mount indoor unit",
                    description: "Mount the indoor unit in the desired location, typically on a wall or ceiling. Ensure proper spacing for airflow and access for maintenance. Connect the indoor unit to the refrigerant lines and electrical wiring."
                },
                {
                    header: "Connect electrical wiring",
                    description: "Connect the electrical wiring for both the indoor and outdoor units. Follow local electrical codes and manufacturer guidelines for proper wiring, grounding, and circuit protection."
                },
                {
                    header: "Test system",
                    description: "Test the operation of the heat pump system to ensure proper functionality and performance. Verify heating and cooling modes, thermostat operation, airflow, and refrigerant pressures."
                },
                {
                    header: "Commission system",
                    description: "Commission the heat pump system by adjusting settings and parameters for optimal performance. Verify proper refrigerant charge, airflow, and temperature differentials."
                },
                {
                    header: "Provide user instructions",
                    description: "Provide the homeowner with instructions on how to operate and maintain the heat pump system. Explain thermostat settings, filter maintenance, and troubleshooting procedures."
                }
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
                    header: "Evaluate current lighting",
                    description: "Assess your current lighting setup and identify areas where LED bulbs could replace traditional incandescent or CFL bulbs."
                },
                {
                    header: "Calculate potential savings",
                    description: "Estimate potential energy and cost savings by switching to LED bulbs. Consider factors such as wattage, lifespan, and electricity rates."
                },
                {
                    header: "Research LED bulbs",
                    description: "Research different types of LED bulbs available on the market. Consider factors such as brightness, color temperature, and compatibility with existing fixtures."
                },
                {
                    header: "Select the right bulbs",
                    description: "Choose LED bulbs that match your lighting needs and preferences. Look for Energy Star certified bulbs to ensure quality and energy efficiency."
                },
                {
                    header: "Purchase LED bulbs",
                    description: "Purchase the selected LED bulbs from a reputable retailer or online store. Buy bulbs in bulk to save money and ensure consistency in lighting."
                },
                {
                    header: "Prepare for installation",
                    description: "Turn off power to the lighting fixtures before replacing bulbs. Remove old bulbs carefully and ensure sockets are clean and free of debris."
                },
                {
                    header: "Install LED bulbs",
                    description: "Insert LED bulbs into the sockets and twist them securely into place. Ensure bulbs are compatible with existing fixtures and fit properly."
                },
                {
                    header: "Test LED bulbs",
                    description: "Turn on the power to the lighting fixtures and test the LED bulbs. Verify that they illuminate properly and provide the desired brightness and color."
                },
                {
                    header: "Dispose of old bulbs responsibly",
                    description: "Dispose of old incandescent or CFL bulbs responsibly. Recycle them at designated recycling centers or hazardous waste facilities."
                },
                {
                    header: "Monitor energy usage",
                    description: "Monitor energy usage with LED bulbs to track savings over time. Compare utility bills and energy consumption data to assess the impact of the switch to LED lighting."
                }
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
                    header: "Assess your energy needs",
                    description: "Evaluate your household's energy usage and determine the size of the battery system needed to meet your requirements. Consider factors such as peak usage times, blackout protection, and renewable energy integration."
                },
                {
                    header: "Choose the right battery system",
                    description: "Research different types of home battery systems, such as lithium-ion, lead-acid, or flow batteries. Consider factors like capacity, efficiency, lifespan, and warranty."
                },
                {
                    header: "Select compatible components",
                    description: "Choose other components for your battery system, such as an inverter, charge controller, and monitoring system. Ensure compatibility with your chosen battery technology and electrical setup."
                },
                {
                    header: "Calculate system size and layout",
                    description: "Determine the optimal placement and configuration of your battery system. Consider factors such as available space, wiring requirements, and ventilation needs."
                },
                {
                    header: "Obtain necessary permits and approvals",
                    description: "Check with local authorities and utility companies for required permits and approvals. Ensure compliance with building codes, zoning regulations, and safety standards."
                },
                {
                    header: "Purchase battery system components",
                    description: "Order the selected battery system components from a reputable supplier or manufacturer. Arrange for delivery and ensure all necessary parts and equipment are available."
                },
                {
                    header: "Install the battery system",
                    description: "Follow the manufacturer's instructions or hire a professional installer to set up the battery system. Install batteries, inverters, and other components according to the planned layout."
                },
                {
                    header: "Connect to electrical system",
                    description: "Connect the battery system to your home's electrical system. Install wiring, breakers, and disconnect switches as needed. Ensure all connections are secure and properly insulated."
                },
                {
                    header: "Test the system",
                    description: "Turn on the battery system and test its functionality. Verify that it charges and discharges correctly, communicates with other components, and integrates with your renewable energy sources."
                },
                {
                    header: "Monitor performance",
                    description: "Regularly monitor your home battery system's performance and energy usage. Use monitoring software or apps to track battery status, energy production, and consumption patterns."
                }
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
                    header: "Turn off the water supply",
                    description: "Locate the main water shut-off valve, usually found in the garage, basement, or near the water meter, and turn it off."
                },
                {
                    header: "Drain the water lines",
                    description: "Open the faucets to drain any remaining water from the pipes to avoid spills during the installation."
                },
                {
                    header: "Remove the old fixture",
                    description: "Use appropriate tools and follow the manufacturer's instructions to carefully remove the old fixture."
                },
                {
                    header: "Prepare the installation area",
                    description: "Clean the area and make any necessary repairs or adjustments to ensure a proper fit for the new fixture."
                },
                {
                    header: "Install the new low-flow fixture",
                    description: "Consult the manufacturer's instructions and use the recommended tools to install the new low-flow fixture securely."
                },
                {
                    header: "Turn the water supply on",
                    description: "Slowly turn the main water valve back on and check for leaks around the new fixture."
                },
                {
                    header: "Test the new fixture",
                    description: "Run the water through the new low-flow fixture to ensure it is functioning correctly and efficiently."
                }
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
                    header: "Choose a location for the storage tank",
                    description: "Select a suitable location for the rainwater storage tank, such as near a downspout, and ensure the ground is level and stable."
                },
                {
                    header: "Install gutters and downspouts",
                    description: "Ensure your roof has gutters installed, and attach downspouts that will direct rainwater into the storage tank."
                },
                {
                    header: "Set up the first flush diverter",
                    description: "Install a first flush diverter on the downspout to remove debris and contaminants from the initial flow of rainwater."
                },
                {
                    header: "Install the rainwater storage tank",
                    description: "Position the storage tank in the selected location and connect it to the downspout using pipes or hoses. Ensure all connections are secure and watertight."
                },
                {
                    header: "Add a filtration system",
                    description: "Install a filtration system to remove any remaining debris from the rainwater before it enters the storage tank."
                },
                {
                    header: "Connect the distribution system",
                    description: "Set up a distribution system to use the collected rainwater for irrigation, toilet flushing, or other non-potable uses. Ensure proper piping and valves are in place."
                },
                {
                    header: "Test the rainwater harvesting system",
                    description: "Check all connections and run water through the system to ensure it is functioning correctly, with no leaks or issues."
                }
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
                    header: "Assess the site and plan the layout",
                    description: "Evaluate the area to be xeriscaped, considering factors like soil type, sunlight, and existing vegetation. Plan the layout to incorporate native and drought-resistant plants."
                },
                {
                    header: "Remove existing turf and weeds",
                    description: "Clear the area of any existing grass, weeds, and other unwanted vegetation. Use appropriate tools and methods to ensure thorough removal."
                },
                {
                    header: "Amend the soil",
                    description: "Improve the soil with organic matter, compost, or other amendments to enhance its water retention and drainage properties."
                },
                {
                    header: "Install a drip irrigation system",
                    description: "Set up a drip irrigation system to provide efficient water delivery directly to the plant roots. Ensure the system is properly installed and covers all planned planting areas."
                },
                {
                    header: "Place landscape fabric",
                    description: "Lay down landscape fabric to help prevent weed growth while allowing water and air to reach the soil."
                },
                {
                    header: "Plant drought-resistant and native species",
                    description: "Plant a variety of drought-resistant and native plants according to your layout plan. Group plants with similar water needs together."
                },
                {
                    header: "Apply mulch",
                    description: "Cover the soil with a layer of mulch to retain moisture, regulate soil temperature, and reduce weed growth."
                },
                {
                    header: "Test the irrigation system",
                    description: "Run the drip irrigation system to ensure all plants are receiving adequate water and adjust as necessary."
                }
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
                    header: "Research electric vehicles (EVs)",
                    description: "Learn about different electric vehicle models available on the market, including sedans, SUVs, and trucks. Consider factors such as range, charging infrastructure, and incentives."
                },
                {
                    header: "Calculate cost savings",
                    description: "Estimate potential cost savings from switching to an electric vehicle, including fuel savings, maintenance costs, and available incentives such as tax credits or rebates."
                },
                {
                    header: "Assess charging infrastructure",
                    description: "Evaluate the availability of charging infrastructure in your area, including home charging options, public charging stations, and workplace charging facilities. Determine if additional charging equipment is needed."
                },
                {
                    header: "Select an electric vehicle",
                    description: "Choose an electric vehicle that meets your needs and preferences. Consider factors such as range, battery size, charging speed, and additional features like autopilot or regenerative braking."
                },
                {
                    header: "Arrange financing or leasing",
                    description: "Explore financing or leasing options for purchasing or leasing an electric vehicle. Compare interest rates, loan terms, and lease terms from different lenders or dealerships."
                },
                {
                    header: "Install home charging equipment",
                    description: "If necessary, install home charging equipment to facilitate convenient charging of your electric vehicle. Consider factors such as charging speed, connector type, and installation costs."
                },
                {
                    header: "Learn about EV maintenance",
                    description: "Educate yourself about electric vehicle maintenance requirements, which differ from traditional internal combustion engine vehicles. Learn about battery care, tire maintenance, and software updates."
                },
                {
                    header: "Take delivery of your EV",
                    description: "Take delivery of your electric vehicle from the dealership or manufacturer. Familiarize yourself with the vehicle's features, controls, and charging process."
                },
                {
                    header: "Plan charging routines",
                    description: "Develop a charging routine that suits your lifestyle and driving patterns. Take advantage of off-peak charging rates, schedule charging sessions to coincide with low electricity demand, and plan longer trips around charging stops."
                },
                {
                    header: "Monitor energy usage and savings",
                    description: "Track your electric vehicle's energy usage, charging habits, and cost savings over time. Use available tools and apps to monitor energy consumption, estimate charging costs, and track your environmental impact."
                }
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
                    header: "Research available options",
                    description: "Find out about the public transportation options in your area, such as buses, trains, or subways."
                },
                {
                    header: "Plan your journey",
                    description: "Use online resources or apps to plan your route, including stops, schedules, and fares."
                },
                {
                    header: "Purchase tickets or passes",
                    description: "Buy tickets or passes in advance or at the station, depending on the available options."
                },
                {
                    header: "Board the vehicle",
                    description: "Wait for your ride at the designated stop, then board the vehicle and enjoy your journey."
                }
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
                    header: "Research composting toilets",
                    description: "Learn about different types of composting toilets available on the market, including self-contained units, central systems, and DIY options. Consider factors such as capacity, ventilation, and maintenance requirements."
                },
                {
                    header: "Check local regulations",
                    description: "Check with your local building department or health authority to understand regulations and permitting requirements for installing a composting toilet in your area. Ensure compliance with applicable codes and guidelines."
                },
                {
                    header: "Select a suitable location",
                    description: "Choose a location for the composting toilet that provides adequate ventilation, privacy, and access to utilities (if required). Consider factors such as proximity to living areas and outdoor spaces."
                },
                {
                    header: "Prepare the installation site",
                    description: "Prepare the installation site by clearing the area and ensuring it is level and stable. Install any necessary ventilation ducting, plumbing connections, and electrical wiring as required."
                },
                {
                    header: "Install the composting toilet",
                    description: "Follow the manufacturer's instructions to install the composting toilet unit. Secure the toilet to the floor or platform and connect any plumbing or electrical components according to the provided guidelines."
                },
                {
                    header: "Set up ventilation",
                    description: "Ensure proper ventilation for the composting toilet system to remove odors and excess moisture. Install a vent pipe or fan system to exhaust air outdoors and maintain airflow within the unit."
                },
                {
                    header: "Add composting material",
                    description: "Add an appropriate composting medium, such as peat moss, coconut coir, or sawdust, to the composting chamber. Follow recommendations for the initial layer thickness and ongoing maintenance."
                },
                {
                    header: "Educate users",
                    description: "Provide instructions to household members or users on how to use the composting toilet correctly. Emphasize proper waste separation, composting material usage, and maintenance procedures."
                },
                {
                    header: "Monitor and maintain the system",
                    description: "Regularly monitor the composting toilet system for odors, moisture levels, and compost decomposition. Follow maintenance tasks outlined by the manufacturer, such as turning compost, adding material, and emptying the finished compost."
                },
                {
                    header: "Compost disposal",
                    description: "Dispose of finished compost according to local regulations and guidelines. Use compost as a soil amendment in gardens or landscaping projects, or arrange for proper disposal through municipal composting facilities."
                }
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
                    header: "Assess your heating and cooling needs",
                    description: "Evaluate your home's heating and cooling requirements based on factors such as size, insulation, climate, and existing HVAC system efficiency."
                },
                {
                    header: "Research energy-efficient HVAC options",
                    description: "Explore energy-efficient HVAC systems such as high-efficiency furnaces, heat pumps, ductless mini-split systems, and smart thermostats. Compare energy ratings, features, and performance."
                },
                {
                    header: "Calculate potential energy savings",
                    description: "Estimate potential energy savings by upgrading to an energy-efficient HVAC system. Consider factors such as energy efficiency ratings, annual fuel utilization efficiency (AFUE), seasonal energy efficiency ratio (SEER), and heating seasonal performance factor (HSPF)."
                },
                {
                    header: "Select the right HVAC system",
                    description: "Choose an HVAC system that meets your heating and cooling needs while maximizing energy efficiency. Consult with HVAC professionals to determine the best system size, type, and features for your home."
                },
                {
                    header: "Schedule professional installation",
                    description: "Hire licensed HVAC contractors to install the energy-efficient HVAC system. Ensure proper sizing, installation, and ductwork design to optimize performance and efficiency."
                },
                {
                    header: "Seal and insulate ductwork",
                    description: "Inspect and seal ductwork to prevent air leaks and improve energy efficiency. Properly insulate ducts in unconditioned spaces to reduce heat loss or gain during air distribution."
                },
                {
                    header: "Program and optimize thermostat settings",
                    description: "Install programmable or smart thermostats to control heating and cooling settings automatically based on your schedule and preferences. Set energy-saving temperature setbacks for times when you're away or asleep."
                }
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
                    header: "Assess insulation needs",
                    description: "Evaluate your home's insulation needs by inspecting walls, floors, ceilings, and attic spaces. Identify areas with inadequate or degraded insulation, as well as potential air leaks."
                },
                {
                    header: "Choose insulation materials",
                    description: "Select appropriate insulation materials based on factors such as R-value, moisture resistance, fire safety, and environmental impact. Common insulation types include fiberglass, cellulose, spray foam, and rigid foam boards."
                },
                {
                    header: "Prepare for installation",
                    description: "Prepare the installation area by clearing obstructions, sealing air leaks, and protecting surfaces from damage. Ensure proper ventilation and safety precautions are in place."
                },
                {
                    header: "Install insulation in walls and ceilings",
                    description: "Install insulation in wall cavities, attic spaces, and ceiling areas using appropriate techniques for each material type. Ensure proper coverage and density to achieve desired thermal performance."
                },
                {
                    header: "Seal air leaks",
                    description: "Seal air leaks and gaps around windows, doors, electrical outlets, and other penetrations using caulking, weatherstripping, or expanding foam insulation. This helps prevent heat loss and improve energy efficiency."
                },
                {
                    header: "Insulate floors and crawl spaces",
                    description: "Insulate floors above unheated spaces, such as crawl spaces or garages, using insulation materials appropriate for the application. Ensure proper ventilation and moisture control to prevent mold and rot."
                },
                {
                    header: "Install vapor barriers",
                    description: "Install vapor barriers or retarders as needed to control moisture infiltration and prevent condensation within insulated spaces. Ensure proper placement and sealing to avoid moisture-related issues."
                },
                {
                    header: "Test and evaluate",
                    description: "Test the effectiveness of the insulation installation by monitoring indoor comfort, energy usage, and utility bills over time. Evaluate the impact of insulation on thermal performance, indoor air quality, and overall home comfort."
                }
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
                    header: "Choose a location for the storage tank",
                    description: "Select a suitable location for the rainwater storage tank, such as near a downspout, and ensure the ground is level and stable."
                },
                {
                    header: "Install gutters and downspouts",
                    description: "Ensure your roof has gutters installed, and attach downspouts that will direct rainwater into the storage tank."
                },
                {
                    header: "Set up the first flush diverter",
                    description: "Install a first flush diverter on the downspout to remove debris and contaminants from the initial flow of rainwater."
                },
                {
                    header: "Install the rainwater storage tank",
                    description: "Position the storage tank in the selected location and connect it to the downspout using pipes or hoses. Ensure all connections are secure and watertight."
                },
                {
                    header: "Add a filtration system",
                    description: "Install a filtration system to remove any remaining debris from the rainwater before it enters the storage tank."
                },
                {
                    header: "Connect the distribution system",
                    description: "Set up a distribution system to use the collected rainwater for irrigation, toilet flushing, or other non-potable uses. Ensure proper piping and valves are in place."
                },
                {
                    header: "Test the rainwater harvesting system",
                    description: "Check all connections and run water through the system to ensure it is functioning correctly, with no leaks or issues."
                }
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
            price: 80,
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
                    header: "Turn off water supply",
                    description: "Locate the water shut-off valve for the shower and turn it off to prevent water flow during installation. If there's no dedicated valve, shut off the main water supply to the house."
                },
                {
                    header: "Remove existing showerhead",
                    description: "Use an adjustable wrench or pliers to loosen and remove the existing showerhead. Turn it counterclockwise until it's fully detached from the shower arm."
                },
                {
                    header: "Clean the shower arm threads",
                    description: "Inspect the threads of the shower arm for any debris or old plumber's tape. Use a rag or brush to clean the threads thoroughly and ensure a proper seal with the new showerhead."
                },
                {
                    header: "Apply plumber's tape (if needed)",
                    description: "Wrap plumber's tape clockwise around the threads of the shower arm to create a tight seal. This helps prevent leaks and ensures a secure connection with the new showerhead."
                },
                {
                    header: "Attach the new showerhead",
                    description: "Screw the new low-flow showerhead onto the shower arm by turning it clockwise. Use your hand to tighten the showerhead securely, ensuring a snug fit without over-tightening."
                },
                {
                    header: "Turn on water supply",
                    description: "Turn on the water supply to the shower by opening the shut-off valve or main water supply. Slowly turn on the shower faucet to check for leaks or drips from the new showerhead."
                },
                {
                    header: "Adjust flow rate (if applicable)",
                    description: "If the low-flow showerhead has adjustable settings for flow rate or spray pattern, adjust them to your preference. Follow the manufacturer's instructions for making adjustments."
                },
                {
                    header: "Test the showerhead",
                    description: "Step into the shower and test the new low-flow showerhead to ensure proper water flow and pressure. Make any necessary adjustments to the settings or installation if needed."
                }
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
                    header: "Plan the layout",
                    description: "Determine the areas that need irrigation and plan the layout of the drip lines and emitters. Consider the water needs of different plants and group them accordingly."
                },
                {
                    header: "Gather materials and tools",
                    description: "Collect all necessary materials and tools, including drip tubing, emitters, connectors, a pressure regulator, a filter, and a timer (optional)."
                },
                {
                    header: "Install the main supply line",
                    description: "Connect the main supply line to the water source, such as an outdoor faucet. Install a backflow preventer, pressure regulator, and filter in line with the main supply."
                },
                {
                    header: "Lay out the drip tubing",
                    description: "Run the drip tubing from the main supply line to the planting areas according to your layout plan. Secure the tubing with stakes to keep it in place."
                },
                {
                    header: "Install emitters and connectors",
                    description: "Punch holes in the drip tubing and insert emitters or connectors at appropriate intervals to provide water to individual plants or rows. Use different types of emitters based on the water needs of the plants."
                },
                {
                    header: "Test the system",
                    description: "Turn on the water supply and run the system to check for leaks and ensure all emitters are working properly. Adjust the emitters as needed to ensure even water distribution."
                },
                {
                    header: "Cover the tubing with mulch",
                    description: "Cover the drip tubing with a layer of mulch to protect it from UV damage, help retain soil moisture, and improve the appearance of the garden."
                },
                {
                    header: "Set the timer (optional)",
                    description: "If using a timer, set it to water the plants at appropriate intervals, ensuring they receive adequate moisture without overwatering."
                }
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
            steps: [
                {
                    header: "Turn off the water supply",
                    description: "Locate the main water shut-off valve, usually found in the garage, basement, or near the water meter, and turn it off."
                },
                {
                    header: "Plan the greywater system layout",
                    description: "Determine the sources of greywater (sinks, showers, etc.) and plan the route to the greywater recycling system. Make sure to comply with local codes and regulations."
                },
                {
                    header: "Install the diverter valve",
                    description: "Install a diverter valve at each greywater source to direct water either to the recycling system or the sewer."
                },
                {
                    header: "Set up the greywater storage tank",
                    description: "Place the storage tank in an appropriate location, such as a basement or outdoor area, and ensure it is securely positioned and properly connected to the diverter valves."
                },
                {
                    header: "Connect the irrigation system",
                    description: "Install pipes or hoses from the greywater storage tank to the irrigation system in your garden or landscape area. Ensure proper filtration and distribution."
                },
                {
                    header: "Turn the water supply on",
                    description: "Slowly turn the main water valve back on and check for leaks around the diverter valves and storage tank connections."
                },
                {
                    header: "Test the greywater system",
                    description: "Run water through the system to ensure the greywater is being properly diverted, stored, and used for irrigation without any leaks or issues."
                }
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
                    header: "Prepare the installation area",
                    description: "Clear the installation area and ensure it's level and stable to support the washing machine. Make sure there's proper ventilation and access to water and electrical connections."
                },
                {
                    header: "Inspect the washing machine",
                    description: "Inspect the washing machine for any damage or defects before installation. Check the manufacturer's packaging and documentation for any missing parts or accessories."
                },
                {
                    header: "Position the washing machine",
                    description: "Position the washing machine in the designated installation area, ensuring it's aligned properly and has sufficient clearance for opening the door and accessing controls."
                },
                {
                    header: "Level the washing machine",
                    description: "Use a level to ensure the washing machine is properly leveled from side to side and front to back. Adjust the leveling feet as needed to achieve a stable and balanced position."
                },
                {
                    header: "Connect water supply hoses",
                    description: "Connect the hot and cold water supply hoses to the corresponding water inlet valves on the back of the washing machine. Ensure the connections are tight to prevent leaks."
                },
                {
                    header: "Connect the drain hose",
                    description: "Connect the drain hose to the washing machine's drain outlet, ensuring it's securely fastened to prevent leaks or dislodging during operation. Properly route the drain hose to a suitable drain or standpipe."
                },
                {
                    header: "Plug in the power cord",
                    description: "Plug the washing machine's power cord into a grounded electrical outlet with the appropriate voltage and amperage rating. Avoid using extension cords or adapters."
                },
                {
                    header: "Test the washing machine",
                    description: "Run a test cycle on the washing machine to ensure proper operation and functionality. Check for any leaks, abnormal noises, or error codes during the test cycle."
                },
                {
                    header: "Read the user manual",
                    description: "Refer to the manufacturer's user manual for detailed instructions on operating and maintaining the high-efficiency washing machine. Follow any recommended maintenance procedures to ensure optimal performance and longevity."
                }
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
                    header: "Research composting toilets",
                    description: "Learn about different types of composting toilets available on the market, including self-contained units, central systems, and DIY options. Consider factors such as capacity, ventilation, and maintenance requirements."
                },
                {
                    header: "Check local regulations",
                    description: "Check with your local building department or health authority to understand regulations and permitting requirements for installing a composting toilet in your area. Ensure compliance with applicable codes and guidelines."
                },
                {
                    header: "Select a suitable location",
                    description: "Choose a location for the composting toilet that provides adequate ventilation, privacy, and access to utilities (if required). Consider factors such as proximity to living areas and outdoor spaces."
                },
                {
                    header: "Prepare the installation site",
                    description: "Prepare the installation site by clearing the area and ensuring it is level and stable. Install any necessary ventilation ducting, plumbing connections, and electrical wiring as required."
                },
                {
                    header: "Install the composting toilet",
                    description: "Follow the manufacturer's instructions to install the composting toilet unit. Secure the toilet to the floor or platform and connect any plumbing or electrical components according to the provided guidelines."
                },
                {
                    header: "Set up ventilation",
                    description: "Ensure proper ventilation for the composting toilet system to remove odors and excess moisture. Install a vent pipe or fan system to exhaust air outdoors and maintain airflow within the unit."
                },
                {
                    header: "Add composting material",
                    description: "Add an appropriate composting medium, such as peat moss, coconut coir, or sawdust, to the composting chamber. Follow recommendations for the initial layer thickness and ongoing maintenance."
                },
                {
                    header: "Educate users",
                    description: "Provide instructions to household members or users on how to use the composting toilet correctly. Emphasize proper waste separation, composting material usage, and maintenance procedures."
                },
                {
                    header: "Monitor and maintain the system",
                    description: "Regularly monitor the composting toilet system for odors, moisture levels, and compost decomposition. Follow maintenance tasks outlined by the manufacturer, such as turning compost, adding material, and emptying the finished compost."
                },
                {
                    header: "Compost disposal",
                    description: "Dispose of finished compost according to local regulations and guidelines. Use compost as a soil amendment in gardens or landscaping projects, or arrange for proper disposal through municipal composting facilities."
                }
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
                    header: "Assess your energy needs",
                    description: "Determine your household's energy consumption to decide the number and size of solar panels required. Review past electricity bills to get an average usage."
                },
                {
                    header: "Evaluate your roof's suitability",
                    description: "Inspect your roof to ensure it can support solar panels. Consider factors like roof orientation, angle, shading, and structural integrity."
                },
                {
                    header: "Choose the right solar panel system",
                    description: "Research and select a solar panel system that meets your energy needs and budget. Consider the type of panels, inverter, and mounting system."
                },
                {
                    header: "Obtain necessary permits and approvals",
                    description: "Check with your local government and utility company for required permits and approvals. Follow all regulations and guidelines for solar panel installation."
                },
                {
                    header: "Install the mounting system",
                    description: "Secure the racking or mounting system to your roof. Ensure it is properly aligned and securely attached to support the solar panels."
                },
                {
                    header: "Install the solar panels",
                    description: "Attach the solar panels to the mounting system. Follow the manufacturer's instructions for securing the panels and making electrical connections."
                },
                {
                    header: "Connect the solar inverter",
                    description: "Install the inverter and connect it to the solar panels. The inverter converts the direct current (DC) produced by the panels into alternating current (AC) used by your home."
                },
                {
                    header: "Complete electrical wiring",
                    description: "Connect the inverter to your home's electrical system. Ensure all wiring is done safely and complies with local electrical codes. This step is typically performed by a licensed electrician."
                },
                {
                    header: "Test the system",
                    description: "Turn on the solar panel system and test it to ensure everything is working correctly. Check the output and monitor the system to verify it meets expected performance levels."
                },
                {
                    header: "Monitor and maintain the system",
                    description: "Regularly monitor the solar panel system's performance through a monitoring app or system. Perform routine maintenance, such as cleaning the panels and checking for any issues, to ensure optimal efficiency."
                }
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
                    header: "Assess wind resource",
                    description: "Evaluate wind speeds and patterns at your location using a wind resource map or anemometer. Choose a site with consistent and sufficient wind for optimal turbine performance."
                },
                {
                    header: "Check local regulations",
                    description: "Research zoning laws, building codes, and permit requirements for installing a wind turbine in your area. Obtain necessary permits and approvals from local authorities."
                },
                {
                    header: "Select the right turbine",
                    description: "Choose a wind turbine that matches your energy needs and site conditions. Consider factors like turbine size, tower height, rotor diameter, and rated power."
                },
                {
                    header: "Prepare the site",
                    description: "Clear the installation site of any obstacles that could interfere with the turbine's operation, such as trees or buildings. Ensure the site is level and stable."
                },
                {
                    header: "Install the tower",
                    description: "Assemble the tower according to the manufacturer's instructions. Secure the tower base to a concrete foundation or anchor bolts embedded in the ground."
                },
                {
                    header: "Install the turbine",
                    description: "Mount the turbine on top of the tower. Follow the manufacturer's instructions for assembling and attaching the turbine components, including the rotor, blades, and nacelle."
                },
                {
                    header: "Connect electrical components",
                    description: "Install electrical wiring from the turbine to your home's electrical system. Connect the turbine to an inverter to convert the generated electricity from AC to DC for use in your home."
                },
                {
                    header: "Test the system",
                    description: "Turn on the wind turbine and test it to ensure everything is functioning correctly. Monitor the turbine's performance and output to verify it meets expected levels."
                },
                {
                    header: "Maintain the turbine",
                    description: "Regularly inspect and maintain the wind turbine to ensure optimal performance and longevity. Check for any signs of wear or damage and perform routine maintenance tasks as recommended by the manufacturer."
                },
                {
                    header: "Monitor wind conditions",
                    description: "Continuously monitor wind conditions to maximize turbine efficiency and output. Adjust turbine settings as needed to optimize performance in different wind speeds and directions."
                }
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
                    header: "Assess current appliances",
                    description: "Identify old or inefficient appliances in your home that need replacement. Consider factors such as age, energy consumption, and overall performance."
                },
                {
                    header: "Research energy-efficient models",
                    description: "Research energy-efficient appliances that meet your needs. Look for ENERGY STAR® certified products, which meet strict energy efficiency criteria set by the EPA."
                },
                {
                    header: "Calculate energy savings",
                    description: "Estimate potential energy savings by comparing the energy consumption of old appliances with new, energy-efficient models. Consider factors such as annual operating costs and payback period."
                },
                {
                    header: "Select the right appliances",
                    description: "Choose energy-efficient appliances that match your household's requirements and budget. Look for features such as EnergyGuide labels and energy-saving settings."
                },
                {
                    header: "Prepare for installation",
                    description: "Measure the available space for each appliance and ensure proper electrical and plumbing connections are in place. Clear the area and remove old appliances if necessary."
                },
                {
                    header: "Purchase and deliver appliances",
                    description: "Order the selected energy-efficient appliances from a reputable retailer. Arrange for delivery or pick-up and ensure appliances are handled with care during transportation."
                },
                {
                    header: "Install appliances",
                    description: "Follow the manufacturer's instructions or hire a professional to install the new appliances. Ensure proper electrical connections, plumbing hook-ups, and ventilation as required."
                },
                {
                    header: "Dispose of old appliances responsibly",
                    description: "Recycle or donate old appliances to prevent them from ending up in landfills. Check with local recycling centers or appliance retailers for disposal options."
                },
                {
                    header: "Test appliances",
                    description: "Turn on the new appliances and test their functionality. Verify that all features and settings are working correctly and check for any signs of damage or defects."
                },
                {
                    header: "Monitor energy usage",
                    description: "Monitor energy usage with the new appliances to track savings over time. Compare utility bills and energy consumption data to assess the impact of energy-efficient upgrades."
                }
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
                    header: "Evaluate current lighting",
                    description: "Assess your current lighting setup and identify areas where LED bulbs could replace traditional incandescent or CFL bulbs."
                },
                {
                    header: "Calculate potential savings",
                    description: "Estimate potential energy and cost savings by switching to LED bulbs. Consider factors such as wattage, lifespan, and electricity rates."
                },
                {
                    header: "Research LED bulbs",
                    description: "Research different types of LED bulbs available on the market. Consider factors such as brightness, color temperature, and compatibility with existing fixtures."
                },
                {
                    header: "Select the right bulbs",
                    description: "Choose LED bulbs that match your lighting needs and preferences. Look for Energy Star certified bulbs to ensure quality and energy efficiency."
                },
                {
                    header: "Purchase LED bulbs",
                    description: "Purchase the selected LED bulbs from a reputable retailer or online store. Buy bulbs in bulk to save money and ensure consistency in lighting."
                },
                {
                    header: "Prepare for installation",
                    description: "Turn off power to the lighting fixtures before replacing bulbs. Remove old bulbs carefully and ensure sockets are clean and free of debris."
                },
                {
                    header: "Install LED bulbs",
                    description: "Insert LED bulbs into the sockets and twist them securely into place. Ensure bulbs are compatible with existing fixtures and fit properly."
                },
                {
                    header: "Test LED bulbs",
                    description: "Turn on the power to the lighting fixtures and test the LED bulbs. Verify that they illuminate properly and provide the desired brightness and color."
                },
                {
                    header: "Dispose of old bulbs responsibly",
                    description: "Dispose of old incandescent or CFL bulbs responsibly. Recycle them at designated recycling centers or hazardous waste facilities."
                },
                {
                    header: "Monitor energy usage",
                    description: "Monitor energy usage with LED bulbs to track savings over time. Compare utility bills and energy consumption data to assess the impact of the switch to LED lighting."
                }
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
                    header: "Assess your window needs",
                    description: "Evaluate your home's current windows and identify areas where energy efficiency can be improved. Consider factors such as window type, size, condition, and location."
                },
                {
                    header: "Research energy-efficient window options",
                    description: "Explore energy-efficient window options such as double or triple-pane glass, low-emissivity (low-e) coatings, gas fills (e.g., argon or krypton), and insulated frames."
                },
                {
                    header: "Choose the right window style and features",
                    description: "Select window styles and features that meet your aesthetic preferences and functional needs while maximizing energy efficiency. Consider factors such as frame material, glazing type, and operability."
                },
                {
                    header: "Measure and order windows",
                    description: "Measure the dimensions of your window openings accurately and order energy-efficient windows from a reputable manufacturer or supplier. Ensure proper sizing and fit for each window."
                },
                {
                    header: "Prepare for installation",
                    description: "Prepare your home for window installation by clearing the work area, removing window coverings and hardware, and protecting furniture and flooring from dust and debris."
                },
                {
                    header: "Install new windows",
                    description: "Hire professional window installers or follow manufacturer guidelines to install the new energy-efficient windows. Ensure proper sealing, insulation, and weatherproofing to prevent air leaks and moisture infiltration."
                },
                {
                    header: "Seal and insulate around windows",
                    description: "Seal gaps and cracks around window frames with weatherstripping, caulking, or foam insulation to minimize air leakage and improve energy efficiency. Insulate window cavities to reduce heat transfer."
                },
                {
                    header: "Test and evaluate",
                    description: "Test the performance of your new energy-efficient windows by monitoring indoor comfort, energy usage, and utility bills over time. Evaluate the impact of the windows on thermal comfort, noise reduction, and indoor air quality."
                }
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
                    header: "Turn off power to the HVAC system",
                    description: "Turn off the power to your heating, ventilation, and air conditioning (HVAC) system at the circuit breaker or fuse box to prevent electrical shock during installation."
                },
                {
                    header: "Remove the old thermostat",
                    description: "Remove the cover of the old thermostat and unscrew it from the wall mounting plate. Carefully disconnect the wires from the terminals, noting their colors and connections for reference."
                },
                {
                    header: "Mount the new thermostat",
                    description: "Install the mounting plate for the new smart thermostat on the wall, ensuring it's level and securely attached. Route the wires through the center opening of the mounting plate."
                },
                {
                    header: "Connect the wires",
                    description: "Connect the wires from your HVAC system to the corresponding terminals on the smart thermostat. Follow the manufacturer's instructions and refer to the wire labels and color-coding."
                },
                {
                    header: "Attach the smart thermostat",
                    description: "Carefully attach the smart thermostat to the mounting plate, ensuring it's properly aligned and seated. Follow the manufacturer's instructions for securing the thermostat in place."
                },
                {
                    header: "Restore power and configure the thermostat",
                    description: "Turn the power back on at the circuit breaker or fuse box to restore power to the HVAC system. Follow the manufacturer's instructions to configure the smart thermostat settings, including Wi-Fi setup, temperature preferences, and scheduling."
                },
                {
                    header: "Download and set up the mobile app",
                    description: "Download the companion mobile app for your smart thermostat and follow the instructions to set up remote access and control. Connect the thermostat to your home Wi-Fi network and create an account if required."
                },
                {
                    header: "Test the smart thermostat",
                    description: "Test the functionality of the smart thermostat by adjusting the temperature settings and monitoring the HVAC system's response. Use the mobile app to remotely control the thermostat and verify connectivity."
                },
                {
                    header: "Enjoy energy savings and convenience",
                    description: "Take advantage of the energy-saving features and convenience offered by your new smart thermostat. Monitor your energy usage and adjust settings as needed to optimize comfort and efficiency."
                }
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
                    header: "Research electric vehicles (EVs)",
                    description: "Learn about different electric vehicle models available on the market, including sedans, SUVs, and trucks. Consider factors such as range, charging infrastructure, and incentives."
                },
                {
                    header: "Calculate cost savings",
                    description: "Estimate potential cost savings from switching to an electric vehicle, including fuel savings, maintenance costs, and available incentives such as tax credits or rebates."
                },
                {
                    header: "Assess charging infrastructure",
                    description: "Evaluate the availability of charging infrastructure in your area, including home charging options, public charging stations, and workplace charging facilities. Determine if additional charging equipment is needed."
                },
                {
                    header: "Select an electric vehicle",
                    description: "Choose an electric vehicle that meets your needs and preferences. Consider factors such as range, battery size, charging speed, and additional features like autopilot or regenerative braking."
                },
                {
                    header: "Arrange financing or leasing",
                    description: "Explore financing or leasing options for purchasing or leasing an electric vehicle. Compare interest rates, loan terms, and lease terms from different lenders or dealerships."
                },
                {
                    header: "Install home charging equipment",
                    description: "If necessary, install home charging equipment to facilitate convenient charging of your electric vehicle. Consider factors such as charging speed, connector type, and installation costs."
                },
                {
                    header: "Learn about EV maintenance",
                    description: "Educate yourself about electric vehicle maintenance requirements, which differ from traditional internal combustion engine vehicles. Learn about battery care, tire maintenance, and software updates."
                },
                {
                    header: "Take delivery of your EV",
                    description: "Take delivery of your electric vehicle from the dealership or manufacturer. Familiarize yourself with the vehicle's features, controls, and charging process."
                },
                {
                    header: "Plan charging routines",
                    description: "Develop a charging routine that suits your lifestyle and driving patterns. Take advantage of off-peak charging rates, schedule charging sessions to coincide with low electricity demand, and plan longer trips around charging stops."
                },
                {
                    header: "Monitor energy usage and savings",
                    description: "Track your electric vehicle's energy usage, charging habits, and cost savings over time. Use available tools and apps to monitor energy consumption, estimate charging costs, and track your environmental impact."
                }
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
                    units: "billion gallons of gasoline",
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
                    header: "Research available options",
                    description: "Find out about the public transportation options in your area, such as buses, trains, or subways."
                },
                {
                    header: "Plan your journey",
                    description: "Use online resources or apps to plan your route, including stops, schedules, and fares."
                },
                {
                    header: "Purchase tickets or passes",
                    description: "Buy tickets or passes in advance or at the station, depending on the available options."
                },
                {
                    header: "Board the vehicle",
                    description: "Wait for your ride at the designated stop, then board the vehicle and enjoy your journey."
                }
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
                    header: "Site assessment",
                    description: "Inspect your property to determine the best location for the outdoor unit (condenser) and indoor unit (air handler). Ensure proper clearance, accessibility, and adequate airflow for efficient operation."
                },
                {
                    header: "Mount outdoor unit",
                    description: "Install the outdoor unit on a stable and level surface, such as a concrete pad or mounting brackets. Secure the unit to prevent vibration and noise during operation."
                },
                {
                    header: "Install refrigerant lines",
                    description: "Connect the refrigerant lines between the indoor and outdoor units. Ensure proper sizing, insulation, and sealing to prevent leaks and optimize system efficiency."
                },
                {
                    header: "Mount indoor unit",
                    description: "Mount the indoor unit in the desired location, typically on a wall or ceiling. Ensure proper spacing for airflow and access for maintenance. Connect the indoor unit to the refrigerant lines and electrical wiring."
                },
                {
                    header: "Connect electrical wiring",
                    description: "Connect the electrical wiring for both the indoor and outdoor units. Follow local electrical codes and manufacturer guidelines for proper wiring, grounding, and circuit protection."
                },
                {
                    header: "Test system",
                    description: "Test the operation of the heat pump system to ensure proper functionality and performance. Verify heating and cooling modes, thermostat operation, airflow, and refrigerant pressures."
                },
                {
                    header: "Commission system",
                    description: "Commission the heat pump system by adjusting settings and parameters for optimal performance. Verify proper refrigerant charge, airflow, and temperature differentials."
                },
                {
                    header: "Provide user instructions",
                    description: "Provide the homeowner with instructions on how to operate and maintain the heat pump system. Explain thermostat settings, filter maintenance, and troubleshooting procedures."
                }
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
                    header: "Assess heating needs",
                    description: "Evaluate your home's heating requirements to determine the appropriate size and type of energy-efficient boiler needed. Consider factors such as square footage, insulation, and hot water demand."
                },
                {
                    header: "Choose the right boiler",
                    description: "Select an energy-efficient boiler with a high Annual Fuel Utilization Efficiency (AFUE) rating. Consider options such as condensing boilers, which recycle heat from exhaust gases for increased efficiency."
                },
                {
                    header: "Prepare for installation",
                    description: "Clear the installation area and ensure proper ventilation and access for the boiler. Consult local building codes and regulations, and obtain necessary permits for the installation."
                },
                {
                    header: "Disconnect and remove old boiler",
                    description: "Turn off the power and water supply to the old boiler. Disconnect and remove the old boiler from its mounting location. Drain the water from the system and disconnect plumbing and electrical connections."
                },
                {
                    header: "Install the new boiler",
                    description: "Position the new energy-efficient boiler in the designated installation area. Connect plumbing and electrical connections according to manufacturer instructions. Ensure proper clearances and access for maintenance."
                },
                {
                    header: "Vent the boiler",
                    description: "Install venting for the boiler, ensuring proper venting materials and clearances are met. Follow manufacturer guidelines and local building codes for safe and efficient venting."
                },
                {
                    header: "Fill and pressurize the system",
                    description: "Fill the boiler system with water and purge air from the system using bleed valves. Pressurize the system to the recommended pressure levels and check for leaks."
                },
                {
                    header: "Test the boiler",
                    description: "Test the operation of the energy-efficient boiler, including heating and hot water functions. Monitor performance and check for any leaks, unusual noises, or malfunctions."
                },
                {
                    header: "Commission the boiler",
                    description: "Commission the boiler by adjusting settings and parameters for optimal performance and efficiency. Test safety features and controls, and verify proper operation."
                }
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
                    header: "Assess insulation needs",
                    description: "Evaluate your home's insulation needs by inspecting walls, floors, ceilings, and attic spaces. Identify areas with inadequate or degraded insulation, as well as potential air leaks."
                },
                {
                    header: "Choose insulation materials",
                    description: "Select appropriate insulation materials based on factors such as R-value, moisture resistance, fire safety, and environmental impact. Common insulation types include fiberglass, cellulose, spray foam, and rigid foam boards."
                },
                {
                    header: "Prepare for installation",
                    description: "Prepare the installation area by clearing obstructions, sealing air leaks, and protecting surfaces from damage. Ensure proper ventilation and safety precautions are in place."
                },
                {
                    header: "Install insulation in walls and ceilings",
                    description: "Install insulation in wall cavities, attic spaces, and ceiling areas using appropriate techniques for each material type. Ensure proper coverage and density to achieve desired thermal performance."
                },
                {
                    header: "Seal air leaks",
                    description: "Seal air leaks and gaps around windows, doors, electrical outlets, and other penetrations using caulking, weatherstripping, or expanding foam insulation. This helps prevent heat loss and improve energy efficiency."
                },
                {
                    header: "Insulate floors and crawl spaces",
                    description: "Insulate floors above unheated spaces, such as crawl spaces or garages, using insulation materials appropriate for the application. Ensure proper ventilation and moisture control to prevent mold and rot."
                },
                {
                    header: "Install vapor barriers",
                    description: "Install vapor barriers or retarders as needed to control moisture infiltration and prevent condensation within insulated spaces. Ensure proper placement and sealing to avoid moisture-related issues."
                },
                {
                    header: "Test and evaluate",
                    description: "Test the effectiveness of the insulation installation by monitoring indoor comfort, energy usage, and utility bills over time. Evaluate the impact of insulation on thermal performance, indoor air quality, and overall home comfort."
                }
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
