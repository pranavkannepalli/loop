const solutions = {
    NY: [
        {
            alt: "A bathroom sink with a low-flow faucet and aerator.",
            gov: 60,
            utility: 30,
            price: 200,
            setup: 1,
            image: "/solutions/low-faucet.png",
            imageNoBg: "",
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
            price: 3500,
            setup: 2,
            image: "/solutions/greywater_recycling.png",
            imageNoBg: "",
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
                    label: "Federal tax credit: Up to 30% of the cost of the system",
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
            price: 4000,
            setup: 2,
            image: "/solutions/rainwater_harvesting.jpg",
            imageNoBg: "",
            title: "Rainwater Harvesting",
            stats: [
                {
                    data: 40,
                    units: "%",
                    description: "reduction in water bill costs",
                },
                {
                    data: 10500,
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
                    label: "New York City Department of Environemntal Protection: For residential rainwater harvesting systems",
                },
                {
                    price: 1000,
                    label: "New York State Energy Research and Development Authority: For residential rainwater harvesting systems",
                },
            ],
            govtRebates: [
                { price: 30, label: "% of the cost of the system back" },
            ],
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
            price: 6000,
            setup: 3,
            image: "/solutions/xeriscaping.jpg",
            imageNoBg: "",
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
                { price: 1000, label: "For solar panels installed in a home" },
            ],
            localProviders: [
              "The Plant Doctor NYC",
              "Brooklyn Botanic Gardens",
              "New York Botanical Garden"
            ],
            types: [
              "Basic xeriscaping with native plants and efficient irrigation",
              "Advanced xeriscaping with water-saving technologies and smart irrigiation systems",
            ],

            type: "water",
        },
        {
            alt: "A garden with plants being watered by a drip irrigation system.",
            gov: 600,
            utility: 750,
            price: 2000,
            setup: 3,
            image: "/solutions/drip_irrigation.jpg",
            imageNoBg: "",
            title: "Drip Irrigation",
            stats: [
                {
                    data: 85,
                    units: "%",
                    description: "reduction in water usage over traditional irrigation methods",
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
                  description: "Plan the layout of the irrigation system considering the positioning of water sources and plants for optimal water distribution."
              },
              {
                  header: "Install a backflow preventer and pressure regulator",
                  description: "Ensure the protection of the water supply by installing backflow preventers and pressure regulators."
              },
              {
                  header: "Lay out the main and sub-main lines",
                  description: "Position the main and sub-main lines, connecting them to the water source to facilitate water distribution throughout the irrigation system."
              },
              {
                  header: "Install the drip lines or soaker hoses",
                  description: "Place drip lines or soaker hoses along plant rows or around plants to deliver water directly to the root zone."
              },
              {
                  header: "Connect the drip lines to the sub-main lines",
                  description: "Use appropriate fittings to connect the drip lines to the sub-main lines, ensuring seamless water flow."
              },
              {
                  header: "Install the emitters or micro-sprinklers",
                  description: "Position emitters or micro-sprinklers at plant locations to deliver water evenly to individual plants."
              },
              {
                  header: "Test the system",
                  description: "Check the irrigation system for leaks and assess water distribution to ensure proper functionality."
              },
              {
                  header: "Adjust the system as needed",
                  description: "Make necessary adjustments to the system to enhance efficiency and ensure uniform watering across the landscape."
              }
          ],
          utilityRebates: [
            { price: 1500, label: "New York City Department of Environmental Protection for residential drip irrigation systems" },
          ],
          govtRebates: [
            { price: 600, label: "from Federal Tax Credit" },
          ],
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
            price: 1000,
            setup: 1,
            image: "/solutions/energy_efficient_appliances.jpg",
            imageNoBg: "",
            title: "Water-Efficent Appliances",
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
                  description: "Choose appliances that meet your needs and budget while prioritizing water efficiency."
              },
              {
                  header: "Purchase the appliances",
                  description: "Buy the selected appliances from a local retailer or online."
              },
              {
                  header: "Arrange for professional installation or self-installation",
                  description: "Either hire a professional for installation or follow the manufacturer's instructions for self-installation."
              },
              {
                  header: "Connect the appliances to water and energy sources",
                  description: "Ensure proper connection of the appliances to appropriate water and energy sources as per installation guidelines."
              },
              {
                  header: "Test the appliances",
                  description: "Verify the functionality of the installed appliances to ensure they are operating correctly."
              }
            ],
            utilityRebates: [
                { price: 100, label: "for ENERGY STAR clothes washers from rebates by Con Edison" },
                { price: 50, label: "for ENERGY STAR dishwashers from rebates by Con Edison" },
            ],
            govtRebates: [
                { price: 0, label: "None Available" },
            ],

            type: "water",
        },
        {
            alt: "A person taking a shorter shower to save water",
            gov: 0,
            utility: 0,
            price: 0,
            setup: 1,
            image: "/solutions/shorter_shower.jpg",
            imageNoBg: "",
            title: "Water-Saving Habits",
            stats: [
                {
                    data: 400,
                    units: "gal/day",
                    description: "reduction in water usage from water-saving habits",
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
                  description: "Regularly inspect and repair leaks in faucets, pipes, and irrigation systems to prevent water wastage."
              },
              {
                  header: "Install water-efficient fixtures",
                  description: "Replace old fixtures with low-flow faucets, showerheads, and toilets to reduce water consumption."
              },
              {
                  header: "Collect and reuse rainwater",
                  description: "Install rain barrels or cisterns to collect rainwater for irrigation or other non-potable uses."
              },
              {
                  header: "Implement drought-resistant landscaping",
                  description: "Choose native plants and xeriscaping techniques that require minimal watering to maintain landscaping."
              },
              {
                  header: "Use mulch and compost",
                  description: "Apply mulch to soil surfaces to reduce evaporation and incorporate compost to improve soil water retention."
              },
              {
                  header: "Adjust irrigation schedules",
                  description: "Program irrigation systems to water plants during early morning or late evening hours to minimize water loss due to evaporation."
              },
              {
                  header: "Take shorter showers",
                  description: "Encourage family members to take shorter showers to reduce water consumption."
              },
              {
                  header: "Turn off taps when not in use",
                  description: "Remind everyone to turn off taps tightly after use to prevent unnecessary water wastage."
              }
            ],
            utilityRebates: [
                { price: 0, label: "None Available" },
            ],
            govtRebates: [
              { price: 0, label: "None Available" },
            ],

            type: "water",
        },
        {
            alt: "A rooftop with solar panels installed, soaking up the sun's rays.",
            gov: 11000,
            utility: 5000,
            price: 20000,
            setup: 2,
            image: "/solutions/solar_panel.jpg",
            imageNoBg: "",
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
                    description: "of water saved from reduced energy consumption",
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
                    description: "Discuss your energy needs and site conditions with a professional to determine the best solar panel system for your home."
                },
                {
                    header: "Choose the right solar panel system",
                    description: "Select a solar panel system that meets your energy requirements, budget, and space availability."
                },
                {
                    header: "Obtain necessary permits and approvals",
                    description: "Secure permits and approvals from your local government or relevant authorities to comply with regulations before installation."
                },
                {
                    header: "Install the solar panels",
                    description: "Mount the solar panels onto your roof or other suitable location and connect them to your home's electrical system."
                },
                {
                    header: "Start generating clean, renewable energy",
                    description: "Once installed, your solar panels will begin generating electricity, allowing you to save on your electricity bills and reduce your carbon footprint."
                }
            ],
            utilityRebates: [
                { price: 0.20, label: "Per Watt installed from Con Edison" },
                { price: 0.20, label: "Per Watt installed with a max incentive of $5000 from National Grid" },
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
            price: 45000,
            setup: 3,
            image: "/solutions/wind_turbine.jpg",
            imageNoBg: "",
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
                    description: "of water saved from reduced energy consumption",
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
                    description: "Discuss your property and energy needs with a professional to determine the best wind turbine solution for your home."
                },
                {
                    header: "Choose the right wind turbine",
                    description: "Select a wind turbine model that is suitable for your property size, wind conditions, and energy requirements."
                },
                {
                    header: "Obtain necessary permits and approvals",
                    description: "Acquire permits and approvals from your local government or relevant authorities to ensure compliance with regulations before installation."
                },
                {
                    header: "Install the wind turbine",
                    description: "Mount the wind turbine on your property and connect it to your home's electrical system."
                },
                {
                    header: "Start generating clean, renewable energy",
                    description: "Once installed, your wind turbine will begin generating electricity, allowing you to save on your electricity bills and reduce your carbon footprint."
                }
            ],
            utilityRebates: [
                { price: 0.10, label: "Per Watt installed from Con Edison" },
                { price: 0.15, label: "Per Watt installed with a max incentive of $7500 from National Grid" },
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
            price: 1000,
            setup: 1,
            image: "/solutions/energy_efficient_appliances.jpg",
            imageNoBg: "",
            title: "Energy-Efficent Appliances",
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
                    description: "Explore options that match your requirements and budget while prioritizing energy efficiency."
                },
                {
                    header: "Remove the old appliance",
                    description: "If necessary, uninstall and remove the old appliance to make room for the new one."
                },
                {
                    header: "Install the new energy-efficient appliance",
                    description: "Follow the manufacturer's instructions carefully to properly install the new appliance."
                },
                {
                    header: "Connect the appliance to necessary utilities",
                    description: "Ensure proper connections to water, gas, or electricity sources as required for the appliance to function."
                },
                {
                    header: "Test the appliance",
                    description: "Verify that the appliance operates correctly and efficiently after installation by conducting thorough testing."
                }
            ],
            utilityRebates: [
                { price: 50, label: "for ENERGY STAR refrigerators from rebates by Con Edison" },
                { price: 75, label: "for ENERGY STAR dishwashers from rebates by Con Edison" },
                { price: 100, label: "for ENERGY STAR refrigerators from rebates by New York Grid" },
                { price: 75, label: "for ENERGY STAR dishwashwers from rebates by New York Grid" },
            ],
            govtRebates: [
                { price: 250, label: "Federal Tax Credit" },
                { price: 250, label: "State Tax Credit from New York State Energy Research and Development Authority" },
            ],

            type: "electricity",
        },
        {
            alt: "An example of a house with LED Lighting installed",
            gov: 0,
            utility: 300,
            price: 2,
            setup: 1,
            image: "/solutions/leds.jpg",
            imageNoBg: "",
            title: "LED Lighting",
            stats: [
                {
                    data: 70,
                    units: "%",
                    description: "reduction in CO2 emissions"
                },
                {
                    data: 1000,
                    units: "gallons",
                    description: "savings in water per year"
                }
            ],
            description:
                "LED lighting is a highly efficient, long-lasting, and environmentally friendly lighting solution that uses light-emitting diodes to produce light.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 20],
                [1990, 19],
                [1995, 16],
                [2000, 13],
                [2005, 12],
                [2010, 11],
                [2015, 7],
                [2020, 3],
                [2025, 1]
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
                [2025, 9]
            ],
            steps: [
                {
                    header: "Turn off the power",
                    description: "Switch off the power to the fixture or lamp that you're replacing to ensure safety during the process."
                },
                {
                    header: "Remove the old bulb",
                    description: "Take out the old bulb and dispose of it properly, following any applicable recycling guidelines."
                },
                {
                    header: "Screw in the new LED bulb",
                    description: "Install the new LED bulb into the socket, ensuring it is securely screwed in place."
                },
                {
                    header: "Turn the power back on",
                    description: "Restore power to the fixture or lamp, then test the new LED bulb to ensure it is functioning correctly."
                }
            ],
            utilityRebates: [
                {
                    price: 10,
                    label: "rebate for LED lighting upgrades by Con Edison"
                },
                {
                    price: 12,
                    label: "rebate for LED lighting upgrades by National Grid"
                },
                {
                    price: 15,
                    label: "rebate for LED lighting upgrades by NYSERDA"
                }
            ],
            govtRebates: [
                {
                    price: 15,
                    label: "tax credit for the purchase of LED lighting by the federal government, up to $200"
                },
                {
                    price: 10,
                    label: "tax credit for the purchase of LED lighting by New York State, up to $200"
                },
                {
                    price: 20,
                    label: "tax credit for the purchase of LED lighting by NYSERDA, up to $200"
                }
            ],

            type: "electricity",
        },
        {
            alt: "Smart Home Technology",
            gov: 300,
            utility: 350,
            price: 700,
            setup: 2,
            image: "/solutions/smart_thermostat.jpg",
            imageNoBg: "",
            title: "Smart Home Technology",
            stats: [
                {
                    data: 15,
                    units: "%",
                    description: "reduction in CO2 emissions"
                },
                {
                    data: 10000,
                    units: "gallons",
                    description: "savings in water per year"
                }
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
                [2025, 600]
            ],
            roiGraph: [
                [1985, 35],
                [1990, 38],
                [1995, 42],
                [2000, 46],
                [2005, 55],
                [2010, 70700],
                [2015, 90],
                [2020, 110],
                [2025, 150]
            ],
            steps: [
                {
                    header: "Research and choose smart home devices",
                    description: "Select devices that suit your requirements and budget after thorough research."
                },
                {
                    header: "Purchase and set up",
                    description: "Buy the chosen devices and set up an account with the manufacturer or a smart home platform."
                },
                {
                    header: "Install and connect to Wi-Fi",
                    description: "Follow the manufacturer's instructions to install the devices and connect them to your home's Wi-Fi network."
                },
                {
                    header: "Configure and create scenes",
                    description: "Configure the devices and create scenes or automation using the app or platform."
                },
                {
                    header: "Test and adjust",
                    description: "Test the devices to ensure proper functionality and make any necessary adjustments."
                }
            ],
            utilityRebates: [
                {
                    price: 85,
                    label: "rebate for smart thermostats by Con Edison"
                },
                {
                    price: 62.5,
                    label: "rebate for smart thermostats by National Grid"
                },
                {
                    price: 75,
                    label: "rebate for smart lighting systems by National Grid"
                },
                {
                    price: 70,
                    label: "rebate for smart thermostats by NYSERDA"
                },
                {
                    price: 50,
                    label: "rebate for smart lighting systems by NYSERDA"
                }
            ],
            governmentRebates: [
                {
                    price: 175,
                    label: "tax credit for the purchase of smart home technology by the federal government, up to $500"
                },
                {
                    price: 150,
                    label: "tax credit for the purchase of smart home technology by New York State, up to $500"
                },
                {
                    price: 80,
                    label: "tax credit for the purchase of smart home technology by NYSERDA, up to $500"
                }
            ],

            type: "electricity",
        },
        {
            alt: "A picture of a home battery system",
            gov: 5000,
            utility: 3000,
            price: 9000,
            setup: 2,
            image: "/solutions/home-battery.png",
            imageNoBg: "",
            title: "Home Battery Systems",
            stats: [
                {
                    data: 7,
                    units: "ton",
                    description: "reduction in CO2 emissions per year"
                },
                {
                    data: 10000,
                    units: "gallons",
                    description: "savings in water per year"
                }
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
                [2025, 5000]
            ],
            roiGraph: [
                [1985, 35],
                [1990, 38],
                [1995, 42],
                [2000, 46],
                [2005, 55],
                [2010, 70700],
                [2015, 90],
                [2020, 110],
                [2025, 150]
            ],
            steps: [
                {
                    header: "Research and select the right battery system",
                    description: "Choose a battery system that suits your home and energy needs after thorough research."
                },
                {
                    header: "Consult with a professional installer",
                    description: "Discuss your home's compatibility and requirements with a professional installer."
                },
                {
                    header: "Purchase and prepare necessary components",
                    description: "Procure the required components for installation and prepare them accordingly."
                },
                {
                    header: "Install the battery system",
                    description: "Follow the manufacturer's instructions and local building codes to install the battery system."
                },
                {
                    header: "Connect to home's electrical system",
                    description: "Connect the battery system to your home's electrical system and solar panels if applicable."
                },
                {
                    header: "Test the system",
                    description: "Test the installed system to ensure proper functionality and make necessary adjustments."
                }
            ],
            utilityRebates: [
                {
                    price: 750,
                    label: "rebate for home battery systems by Con Edison"
                },
                {
                    price: 1000,
                    label: "rebate for home battery systems by National Grid"
                },
                {
                    price: 1250,
                    label: "rebate for home battery systems by NYSERDA"
                }
            ],
            governmentRebates: [
                {
                    price: 1750,
                    label: "tax credit for the purchase of a home battery system by the federal government"
                },
                {
                    price: 1200,
                    label: "tax credit for the purchase of a home battery system by New York State"
                },
                {
                    price: 2000,
                    label: "tax credit for the purchase of a home battery system by NYSERDA"
                }
            ],

            type: "electricity",
        },
        {
            alt: "A picture of a backyard compost bin with grass clippings and food scraps inside.",
            gov: 5000,
            utility: 3000,
            price: 175,
            setup: 1,
            image: "/solutions/composting.png",
            imageNoBg: "",
            title: "Composting",
            stats: [
                {
                    "data": 30,
                    "units": "%",
                    "description": "reduction in household waste"
                },
                {
                    "data": 25,
                    "units": "%",
                    "description": "savings in garden water usage by improving soil moisture retention"
                }
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
                [2025, 200]
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
                [2025, 10]
            ],
            steps: [
                {
                    header: "Choose a composting system",
                    description: "Select a composting system, such as a bin, tumbler, or pile, that suits your needs and available space."
                },
                {
                    header: "Set up the composting system",
                    description: "Place the composting system in a convenient location, such as a backyard or balcony, ensuring easy access."
                },
                {
                    header: "Add materials to the compost bin",
                    description: "Add a mix of 'brown' materials (e.g., dry leaves, straw, shredded paper) and 'green' materials (e.g., food scraps, grass clippings, coffee grounds) to the compost bin."
                },
                {
                    header: "Maintain the compost",
                    description: "Regularly turn the compost materials and maintain the right moisture level, similar to a damp sponge, to facilitate decomposition."
                },
                {
                    header: "Monitor and adjust",
                    description: "Monitor the compost's progress and adjust the materials as needed to ensure proper decomposition."
                },
                {
                    header: "Use the compost",
                    description: "Once the compost is ready (dark and crumbly), incorporate it into your garden or potted plants to enhance soil health and fertility."
                }
            ],
            utilityRebates: [
                {
                    price: 75,
                    label: "rebate for purchasing a composting system by Con Edison"
                },
                {
                    price: 100,
                    label: "rebate for composting systems by National Grid"
                },
                {
                    price: 140,
                    label: "rebate for composting systems by NYSERDA"
                }
            ],
            govtRebates: [
                {
                    price: 120,
                    label: "tax credit for the purchase of a composting system by the federal government, up to $500"
                },
                {
                    price: 250,
                    label: "tax credit for the purchase of a composting system by New York State, up to $500"
                },
                {
                    price: 200,
                    label: "tax credit for the purchase of a composting system by NYSERDA, up to $500"
                }
            ],

            type: "waste",
        },
        {
            alt: "A picture of a recycling bin with paper, plastic, and glass materials inside.",
            gov: 5000,
            utility: 3000,
            price: 0,
            setup: 1,
            image: "/solutions/recycling.png",
            imageNoBg: "",
            title: "Recycling",
            stats: [
                {
                    data: 17,
                    units: "trees",
                    description: "saved by recycling one ton of paper"
                },
                {
                    data: 7000,
                    units: "gallons",
                    description: "saved by recycling one ton of paper"
                },
                {
                    data: 3,
                    units: "cubic yards",
                    description: "saved by recycling one ton of paper"
                },
                {
                    data: 1500,
                    units: "gallons",
                    description: "equivalent gasoline saved by recycling one ton of plastic"
                },
                {
                    data: 9,
                    units: "gallons",
                    description: "equivalent oil saved by recycling one ton of glass"
                }
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
                [2025, 0]
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
                [2025, 0]
            ],
            steps: [
                {
                    header: "Contact local recycling program",
                    description: "Obtain a recycling bin or inquire about curbside pickup options from your local recycling program."
                },
                {
                    header: "Set up recycling bin",
                    description: "Place the recycling bin in your home or apartment for convenient disposal of recyclable materials."
                },
                {
                    header: "Sort recyclable materials",
                    description: "Follow your local program's guidelines to properly sort recyclable materials before placing them in the bin."
                },
                {
                    header: "Rinse and clean recyclables",
                    description: "Ensure recyclables are rinsed and cleaned before placing them in the bin to avoid contamination."
                },
                {
                    header: "Dispose of recyclables",
                    description: "Place your recycling bin at the curb on pickup day or take recyclables to a local drop-off center as per your program's instructions."
                },
                {
                    header: "Continue recycling",
                    description: "Keep recycling and encourage neighbors to do the same to promote environmental sustainability."
                }
            ],
            utilityRebates: [
                {
                    price: 75,
                    label: "rebate for purchasing a recycling bin by Con Edison"
                },
                {
                    price: 125,
                    label: "rebate for recycling bins by National Grid"
                },
                {
                    price: 100,
                    label: "rebate for recycling bins by NYSERDA"
                }
            ],
            govtRebates: [
                {
                    price: 120,
                    label: "tax credit for the purchase of a composting system by the federal government, up to $500"
                },
                {
                    price: 250,
                    label: "tax credit for the purchase of a composting system by New York State, up to $500"
                },
                {
                    price: 200,
                    label: "tax credit for the purchase of a composting system by NYSERDA, up to $500"
                }
            ],

            type: "waste",
        },
    ],

    TX: [
        {
            alt: "Solar Panels on a Independent Home",
            gov: 1500,
            utility: 2500,
            price: 22000,
            setup: 2,
            image: "/solutions/solar-panel.png",
            imageNoBg: "",
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
                [1985, 100000],
                [1990, 90000],
                [1995, 80000],
                [2000, 70000],
                [2005, 60000],
                [2010, 37500],
                [2015, 35000],
                [2020, 28500],
                [2025, 21000],
            ],
            roiGraph: [
                [1985, 100000],
                [1990, 90000],
                [1995, 80000],
                [2000, 70000],
                [2005, 60000],
                [2010, 37500],
                [2015, 35000],
                [2020, 28500],
                [2025, 28500],    
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
            price: 650,
            setup: 1,
            image: "/solutions/energy-efficient-window.png",
            imageNoBg: "",
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
                [1985, 30000],
                [1990, 18000],
                [1995, 16000],
                [2000, 13500],
                [2005, 13000],
                [2010, 11500],
                [2015, 10500],
                [2020, 10000],
                [2025, 5000],
            ],
            roiGraph: [
                [1985, 30000],
                [1990, 18000],
                [1995, 16000],
                [2000, 13500],
                [2005, 13000],
                [2010, 11500],
                [2015, 10500],
                [2020, 10000],
                [2025, 5000],
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
            price: 7500,
            setup: 3,
            image: "/solutions/heat-pumps.png",
            imageNoBg: "",
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
                [1985, 30000],
                [1990, 18000],
                [1995, 16000],
                [2000, 13500],
                [2005, 13000],
                [2010, 11500],
                [2015, 10500],
                [2020, 10000],
                [2025, 5000],
            ],
            roiGraph: [
                [1985, 30000],
                [1990, 18000],
                [1995, 16000],
                [2000, 13500],
                [2005, 13000],
                [2010, 11500],
                [2015, 10500],
                [2020, 10000],
                [2025, 5000],
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
                { price: 1000, label: "Dollars rebate ofered by CenterPoint" },
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
            price: 10,
            setup: 1,
            image: "/solutions/leds.jpg",
            imageNoBg: "",
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
            roiGraph: [
                [1985, 24],
                [1990, 22],
                [1995, 20],
                [2000, 18],
                [2005, 16],
                [2010, 14],
                [2015, 12],
                [2020, 10],
                [2025, 8],
            ],
            costGraph: [
                [2065, 30000],
                [2060, 18000],
                [2055, 16000],
                [2050, 13500],
                [2045, 13000],
                [2040, 11500],
                [2035, 10500],
                [2030, 10000],
                [2025, 5000],
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
                { price: 30, label: "Percent tax credit offered federally." },
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
            price: 10000,
            setup: 3,
            image: "/solutions/home-battery.png",
            imageNoBg: "",
            title: "Home Battery System",
            stats: [
                {
                    data: 0.25,
                    units: "tons/year",
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
                [1985, 40000],
                [1990, 38000],
                [1995, 30000],
                [2000, 27000],
                [2005, 24000],
                [2010, 20000],
                [2015, 16000],
                [2020, 13000],
                [2025, 10000],
            ],
            roiGraph: [
                [2025, 5],
                [2030, 10],
                [2035, 20],
                [2040, 26],
                [2045, 31],
                [2050, 42],
                [2055, 49],
                [2060, 56],
                [2065, 61],
                [2070, 67],
                [2075, 73],
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
                    price: 30,
                    label: "Percent reduction provided by Inflation Reduction Act",
                },
            ],

            type: "electricity",
        },
        {
            alt: "A bathroom sink with a low flow faucet",
            gov: 50,
            utility: 30,
            price: 250,
            setup: 1,
            image: "/solutions/low-faucet.png",
            imageNoBg: "",
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
                [1985, 30000],
                [1990, 18000],
                [1995, 16000],
                [2000, 13500],
                [2005, 13000],
                [2010, 11500],
                [2015, 10500],
                [2020, 10000],
                [2025, 5000],
            ],
            roiGraph: [
                [1985, 30000],
                [1990, 18000],
                [1995, 16000],
                [2000, 13500],
                [2005, 13000],
                [2010, 11500],
                [2015, 10500],
                [2020, 10000],
                [2025, 5000],
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
                    price: 50,
                    label: "Percent tax credit offered by Inflation Reduction Act",
                },
            ],

            type: "water",
        },
        {
            alt: "Rainwater Harvesting System",
            gov: 1000,
            utility: 5600,
            price: 18000,
            setup: 1,
            image: "/solutions/rainwater_harvesting.jpg",
            imageNoBg: "",
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
                [1985, 1500],
                [1990, 1800],
                [1995, 2000],
                [2000, 2200],
                [2005, 2400],
                [2010, 2600],
                [2015, 2800],
                [2020, 3000],
                [2025, 3200],
            ],
            roiGraph: [
                [2025, 10],
                [2030, 12],
                [2035, 14],
                [2040, 16],
                [2045, 18],
                [2050, 20],
                [2055, 22],
                [2060, 24],
                [2065, 26],
                [2070, 0],
                [2075, 0],
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
                    price: 0,
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
            price: 1000,
            setup: 2,
            image: "/solutions/xeriscaping.jpg",
            imageNoBg: "",
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
                [1985, 30000],
                [1990, 18000],
                [1995, 16000],
                [2000, 13500],
                [2005, 13000],
                [2010, 11500],
                [2015, 10500],
                [2020, 10000],
                [2025, 5000],
            ],
            roiGraph: [
                [1985, 30000],
                [1990, 18000],
                [1995, 16000],
                [2000, 13500],
                [2005, 13000],
                [2010, 11500],
                [2015, 10500],
                [2020, 10000],
                [2025, 5000],
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
                { price: 2000, label: "Dollars from the Texas Water Development Board" },
                { price: 400, label: "Offered by the San Antonio Water System" },
            ],
            govtRebates: [
                { price: 10000, label: "Offered by Texas Agricultural Finance Authority" },
                { price: 1000, label: "Offered by the Texas Department of Agriculture" },
            ],

            type: "water",
        },
        {
          alt: "Electric Vehicles",
          gov: 12500,
          utility: 1750,
          price: 25000,
          setup: 1,
          image: "/solutions/electric_vehicles.jpg",
          imageNoBg: "",
          title: "Electric Vehicles",
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
              "Electric vehicles are an easy way to reduce carbon emissions because they don't pollute the air. They have a lower carbon footprint than gasoline vehicles.",
          hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
          costGraph: [
              [1985, 30000],
              [1990, 18000],
              [1995, 16000],
              [2000, 13500],
              [2005, 13000],
              [2010, 11500],
              [2015, 10500],
              [2020, 10000],
              [2025, 5000],
          ],
          roiGraph: [
              [1985, 30000],
              [1990, 18000],
              [1995, 16000],
              [2000, 13500],
              [2005, 13000],
              [2010, 11500],
              [2015, 10500],
              [2020, 10000],
              [2025, 5000],
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
              { price: 250, label: "From Oncor Electric Delivery for installing a Level 2 Charging Station" },
              { price: 1500, label: "Offered by CPS energy for purchasing a Level 2 charging station and electric car. " },
          ],
          govtRebates: [
              { price: 5000, label: "Provided by Texas Emissions Reduction Plan (TERP) for purchasing an electric vehicle" },
              { price: 7500, label: "Offered by Federal Government for purchasing a new EV"},
          ],

          type: "transportation",
        },
        {
          alt: "Public Transportation",
          gov: 0,
          utility: 0,
          price: 2,
          setup: 1,
          image: "/solutions/electric_vehicles.jpg",
          imageNoBg: "",
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
                  description: "Reduction in CO2 emissions if 1 person switches completely to public transportation.",
              },
          ],
          description:
              "Taking public tranportation is a cheap, easy way to reduce carbon emissions. It also helps decrease traffic congestion. ",
          hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
          costGraph: [
              [1985, 30000],
              [1990, 18000],
              [1995, 16000],
              [2000, 13500],
              [2005, 13000],
              [2010, 11500],
              [2015, 10500],
              [2020, 10000],
              [2025, 5000],
          ],
          roiGraph: [
              [1985, 30000],
              [1990, 18000],
              [1995, 16000],
              [2000, 13500],
              [2005, 13000],
              [2010, 11500],
              [2015, 10500],
              [2020, 10000],
              [2025, 5000],
          ],

          steps: [
              {
                  header: "Research transportation options near you",
                  description:
                      "Research and choose a public transportation option depending on your needs (seats, range, storing capacity), and budget. Good options include the bus and the train.",
              },
              {
                  header: "Purcahse a card or download an app",
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
        },
        {
          alt: "Composting Toilets in Texas",
          gov: 300,
          utility: 150,
          price: 1500,
          setup: 2,
          image: "/solutions/composting_toilet.jpg",
          imageNoBg: "",
          title: "Composting Toilets",
          stats: [
              {
                  data: 6000,
                  units: "gallons/year",
                  description: "Saved by a family of four switching to a composting toilet.",
              },
              {
                  data: 120,
                  units: "pounds",
                  description: "Of compost produced by a composting toilet per year per person.",
              },
          ],
          description:
              "Composting Toilets are an effective way of managing human waste. The reduce water usage and can also provide nutrient rich compost for gardening. ",
          hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
          costGraph: [
              [1985, 30000],
              [1990, 18000],
              [1995, 16000],
              [2000, 13500],
              [2005, 13000],
              [2010, 11500],
              [2015, 10500],
              [2020, 10000],
              [2025, 5000],
          ],
          roiGraph: [
              [1985, 30000],
              [1990, 18000],
              [1995, 16000],
              [2000, 13500],
              [2005, 13000],
              [2010, 11500],
              [2015, 10500],
              [2020, 10000],
              [2025, 5000],
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
          price: 10000,
          setup: 3,
          image: "/solutions/hvac.png",
          imageNoBg: "",
          title: "Composting Toilets",
          stats: [
              {
                  data: 400,
                  units: "dollars",
                  description: "saved per year on heating and cooling.",
              },
              {
                  data: 2000,
                  units: "pounds/year",
                  description: "Reduction in carbon footprint by switching to a high efficiency HVAC system.",
              },
          ],
          description:
              "Energy HVAC Systems help provide your home optimal heating and cooling while using less energy.",
          hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
          costGraph: [
              [1985, 30000],
              [1990, 18000],
              [1995, 16000],
              [2000, 13500],
              [2005, 13000],
              [2010, 11500],
              [2015, 10500],
              [2020, 10000],
              [2025, 5000],
          ],
          roiGraph: [
              [1985, 30000],
              [1990, 18000],
              [1995, 16000],
              [2000, 13500],
              [2005, 13000],
              [2010, 11500],
              [2015, 10500],
              [2020, 10000],
              [2025, 5000],
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
          imageNoBg: "",
          title: "Insulation",
          stats: [
              {
                  data: 40,
                  units: "%",
                  description: "heat loss reduction in the winter.",
              },
              {
                  data: 780,
                  units: "million tons/year",
                  description: "Saved if all homes in the US were properly insulated.",
              },
          ],
          description:
              "Insulation helps maintain a comfortable temperature and reduce energy consumption",
          hometypes: ["Multi-Family Home", "Individual Home"],
          costGraph: [
              [1985, 30000],
              [1990, 18000],
              [1995, 16000],
              [2000, 13500],
              [2005, 13000],
              [2010, 11500],
              [2015, 10500],
              [2020, 10000],
              [2025, 5000],
          ],
          roiGraph: [
              [1985, 30000],
              [1990, 18000],
              [1995, 16000],
              [2000, 13500],
              [2005, 13000],
              [2010, 11500],
              [2015, 10500],
              [2020, 10000],
              [2025, 5000],
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
              }
          ],

          utilityRebates: [
            {
                price: 0.10,
                label: "Offered by Austin Energy per square foot of insulation",
            },
            {
                price: 0.10,
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
            price: 6000,
            setup: 2,
            image: "/solutions/rainwater_harvesting.jpg",
            imageNoBg: "",
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
                [1985, 6000],
                [1990, 5000],
                [1995, 4500],
                [2000, 4000],
                [2005, 3500],
                [2010, 3200],
                [2015, 3100],
                [2020, 3050],
                [2025, 3000],
            ],
            roiGraph: [
                [2025, 5],
                [2030, 10],
                [2035, 15],
                [2040, 20],
                [2045, 25],
                [2050, 30],
            ],
            utilityRebates: [
              { price: 4800, label: "Offered by RainWise program offers rebates" },
              { price: 500, label: "Offered by King County Surface Water Management"},
            ],
            govtRebates: [
                { price: 100, label: "Offered by Washington state, along with a sales tax exemption"},
            ],
            type: "water",
            localProviders: [
                "Rainwater Harvesting Solutions LLC",
                "Washington Rain Barrels Inc.",
            ],
        },
        {
            alt: "Low-Flow Showerheads",
            gov: 30,
            utility: 25,
            price: 70,
            setup: 1,
            image: "/solutions/low-faucet.png",
            imageNoBg: "",
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
            description:
                "Install showerheads designed to reduce water flow without sacrificing water pressure or comfort.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 80],
                [1990, 60],
                [1995, 50],
                [2000, 45],
                [2005, 42],
                [2010, 40],
                [2015, 40],
                [2020, 40],
                [2025, 40],
            ],
            roiGraph: [
                [2025, 1],
                [2030, 2],
                [2035, 3],
                [2040, 4],
                [2045, 5],
                [2050, 6],
            ],
            utilityRebates: [
              { price: 5, label: "Offered by Puget Sound Energy "}, 
              { price: 10, label: "Offered by Seattle City Light"}, 
              { price: 5, label: "Offered by Tacoma Public Utilities"}, 
              { price: 5, label: "Offered by Cascade Natural Gas"},
            ],
            govtRebates: [
              { price: 100, label: "Offered by Washington State Department in multifamily buildings"},
            ],
            type: "water",
            localProviders: ["EcoFlow Showers LLC", "Cascade Water Solutions"],
        },
        {
            alt: "Drip Irrigation System",
            gov: 250,
            utility: 200,
            price: 600,
            setup: 2,
            image: "/solutions/drip_irrigation.jpg",
            imageNoBg: "",
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
            description:
                "Efficiently water plants by delivering water directly to their roots, minimizing water waste.",
            hometypes: ["Individual Home"],
            costGraph: [
                [1985, 1000],
                [1990, 800],
                [1995, 700],
                [2000, 600],
                [2005, 550],
                [2010, 525],
                [2015, 510],
                [2020, 505],
                [2025, 500],
            ],
            roiGraph: [
                [2025, 3],
                [2030, 5],
                [2035, 7],
                [2040, 9],
                [2045, 11],
                [2050, 13],
            ],
            utilityRebates: [
              { price: 50, label: "Offered by Puget Sound Energy (PSE)" },
              { price: 100, label: "Offered by Seattle City Light" },
              { price: 50, label: "Offered by Cascade Natural Gas" },
            ],

            govtRebates: [
              { price: 100, label: "Offered by Washington State Department of Commerce" },
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
            price: 4000,
            setup: 3,
            image: "/solutions/greywater_recycling.png",
            imageNoBg: "",
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
                [1985, 8000],
                [1990, 6000],
                [1995, 5500],
                [2000, 5000],
                [2005, 4500],
                [2010, 4200],
                [2015, 4100],
                [2020, 4050],
                [2025, 4000],
            ],
            roiGraph: [
                [2025, 10],
                [2030, 15],
                [2035, 20],
                [2040, 25],
                [2045, 30],
                [2050, 35],
            ],
            utilityRebates: [],
            govtRebates: [
              { price: 100, label: "Offered by Washington State Department of Commerce" },
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
            imageNoBg: "",
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
                [1985, 1200],
                [1990, 1000],
                [1995, 900],
                [2000, 850],
                [2005, 825],
                [2010, 810],
                [2015, 805],
                [2020, 802],
                [2025, 800],
            ],
            roiGraph: [
                [2025, 2],
                [2030, 4],
                [2035, 6],
                [2040, 8],
                [2045, 10],
                [2050, 12],
            ],
            utilityRebates: [
              { price: 50, label: "Offered by Puget Sound Energy (PSE)" },
              { price: 100, label: "Offered by Seattle City Light" },
              { price: 50, label: "Offered by Tacoma Public Utilities" },
            ],
            govtRebates: [
              { price: 100, label: "Offered by Washington State Department of Commerce" },
              { price: 50, label: "Offered by City of Seattle" },
              { price: 100, label: "Offered by King County" },
            ],
            type: "water",
            localProviders: [
                "EcoWash Appliances",
                "Sustainable Laundry Solutions",
            ],
        },    
        {
            alt: "Composting Toilet",
            gov: 250,
            utility: 200,
            price: 2000,
            setup: 3,
            image: "/solutions/composting_toilet.jpg",
            imageNoBg: "",
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
            description:
                "Convert human waste into compost instead of using water-based sewage systems.",
            hometypes: ["Individual Home"],
            costGraph: [
                [1985, 8000],
                [1990, 6000],
                [1995, 5500],
                [2000, 5000],
                [2005, 4500],
                [2010, 4200],
                [2015, 4100],
                [2020, 4050],
                [2025, 4000],
            ],
            roiGraph: [
                [2025, 10],
                [2030, 15],
                [2035, 20],
                [2040, 25],
                [2045, 30],
                [2050, 35],
            ],
            utilityRebates: [],
            govtRebates: [{ price: 500, label: "Composting toilet rebate" }],
            taxRebates: [],
            type: "water",
            localProviders: ["EcoToilet Systems", "Cascade Composting Toilets"],
        },
        {
            alt: "Solar Panels",
            gov: 1000,
            utility: 5000,
            price: 18000,
            setup: 3,
            image: "/solutions/solar_panel.jpg",
            imageNoBg: "",
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
            description:
                "Installed in areas with high sunlight exposure such as rooftops and balconies, these silicon-based panels harness sunlight to produce electricity.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 30000],
                [1990, 18000],
                [1995, 16000],
                [2000, 13500],
                [2005, 13000],
                [2010, 11500],
                [2015, 10500],
                [2020, 10000],
                [2025, 5000],
            ],
            roiGraph: [
                [2025, 30000],
                [2030, 18000],
                [2035, 16000],
                [2040, 13500],
                [2045, 13000],
                [2050, 11500],
                [2055, 10500],
                [2060, 10000],
                [2065, 5000],
            ],
            utilityRebates: [
                { price: 500, label: "For solar panels installed in a home" },
                { price: 500, label: "For solar panels installed in a home" },
                { price: 500, label: "For solar panels installed in a home" },
                { price: 500, label: "For solar panels installed in a home" },
            ],
            govtRebates: [
                { price: 500, label: "For solar panels installed in a home" },
                { price: 500, label: "For solar panels installed in a home" },
                { price: 500, label: "For solar panels installed in a home" },
            ],
            taxRebates: [
                { price: 500, label: "For solar panels installed in a home" },
                { price: 500, label: "For solar panels installed in a home" },
                { price: 500, label: "For solar panels installed in a home" },
            ],
            type: "electricity",
            localProviders: [
                "Solar Solutions LLC",
                "Washington Solar Panels Inc.",
            ],
        },
        {
            alt: "Wind Turbines",
            gov: 1500,
            utility: 0,
            price: 20000,
            setup: 4,
            image: "/solutions/wind_turbine.jpg",
            imageNoBg: "",
            title: "Wind Turbines",
            stats: [
                {
                    data: 150,
                    units: "lbs/kwh",
                    description: "CO2 prevented from emissions",
                },
                {
                    data: 50,
                    units: "%",
                    description: "Average wind turbine efficiency",
                },
            ],
            description:
                "Large turbines installed in areas with consistent wind speeds to generate electricity from wind energy.",
            hometypes: ["Individual Home"],
            costGraph: [
                [1985, 40000],
                [1990, 30000],
                [1995, 28000],
                [2000, 25000],
                [2005, 23000],
                [2010, 22000],
                [2015, 21000],
                [2020, 20500],
                [2025, 20000],
            ],
            roiGraph: [
                [2025, 25000],
                [2030, 22000],
                [2035, 20000],
                [2040, 18000],
                [2045, 17000],
                [2050, 16000],
                [2055, 15000],
                [2060, 14000],
                [2065, 13000],
            ],
            utilityRebates: [],
            govtRebates: [
                { price: 1000, label: "Wind turbine installation grant" },
            ],
            taxRebates: [],
            type: "electricity",
            localProviders: [
                "Wind Power Solutions Inc.",
                "Northwest Wind Energy",
            ],
        },
        {
            alt: "Hydroelectric Generator",
            gov: 2000,
            utility: 0,
            price: 25000,
            setup: 4,
            image: "/solutions/hydroelectric_generator.jpg",
            imageNoBg: "",
            title: "Hydroelectric Generator",
            stats: [
                {
                    data: 300,
                    units: "lbs/kwh",
                    description: "CO2 prevented from emissions",
                },
                {
                    data: 80,
                    units: "%",
                    description: "Average efficiency of hydroelectric systems",
                },
            ],
            description:
                "Use the power of flowing water to generate electricity, typically by diverting a portion of a river through a turbine.",
            hometypes: ["Individual Home"],
            costGraph: [
                [1985, 40000],
                [1990, 35000],
                [1995, 32000],
                [2000, 30000],
                [2005, 28000],
                [2010, 27000],
                [2015, 26000],
                [2020, 25500],
                [2025, 25000],
            ],
            roiGraph: [
                [2025, 35000],
                [2030, 32000],
                [2035, 30000],
                [2040, 28000],
                [2045, 27000],
                [2050, 26000],
                [2055, 25500],
                [2060, 25000],
                [2065, 24000],
            ],
            utilityRebates: [],
            govtRebates: [
                { price: 1500, label: "Hydroelectric generator grant" },
            ],
            taxRebates: [],
            type: "electricity",
            localProviders: [
                "RiverPower Systems Inc.",
                "Washington Hydro Solutions",
            ],
        },
        {
            alt: "Energy-Efficient Appliances",
            gov: 0,
            utility: 0,
            price: 1500,
            setup: 1,
            image: "/solutions/energy_efficient_appliances.jpg",
            imageNoBg: "",
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
                [1985, 2000],
                [1990, 1800],
                [1995, 1600],
                [2000, 1550],
                [2005, 1525],
                [2010, 1510],
                [2015, 1505],
                [2020, 1502],
                [2025, 1500],
            ],
            roiGraph: [
                [2025, 500],
                [2030, 400],
                [2035, 300],
                [2040, 200],
                [2045, 150],
                [2050, 100],
            ],
            utilityRebates: [],
            govtRebates: [],
            taxRebates: [],
            type: "electricity",
            localProviders: [
                "EcoAppliance Solutions",
                "GreenEnergy Appliances",
            ],
        },
        {
            alt: "LED Lighting",
            gov: 0,
            utility: 0,
            price: 10,
            setup: 1,
            image: "/solutions/leds.jpg",
            imageNoBg: "",
            title: "LED Lighting",
            stats: [
                {
                    data: 80,
                    units: "%",
                    description:
                        "Reduction in electricity usage compared to incandescent bulbs",
                },
            ],
            description:
                "Switch to LED bulbs which consume less energy and last longer than traditional incandescent bulbs.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 50],
                [1990, 30],
                [1995, 20],
                [2000, 15],
                [2005, 12],
                [2010, 11],
                [2015, 10],
                [2020, 10],
                [2025, 10],
            ],
            roiGraph: [
                [2025, 2],
                [2030, 4],
                [2035, 6],
                [2040, 8],
                [2045, 10],
                [2050, 12],
            ],
            utilityRebates: [],
            govtRebates: [],
            taxRebates: [],
            type: "electricity",
            localProviders: [
                "EcoLighting Solutions",
                "BrightBulb Technologies",
            ],
        },
        {
            alt: "Energy-Efficient Windows",
            gov: 0,
            utility: 0,
            price: 3000,
            setup: 2,
            image: "/solutions/energy-efficient-window.png",
            imageNoBg: "",
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
                [1985, 5000],
                [1990, 4500],
                [1995, 4000],
                [2000, 3500],
                [2005, 3300],
                [2010, 3200],
                [2015, 3100],
                [2020, 3050],
                [2025, 3000],
            ],
            roiGraph: [
                [2025, 5000],
                [2030, 4500],
                [2035, 4000],
                [2040, 3500],
                [2045, 3300],
                [2050, 3200],
                [2055, 3100],
                [2060, 3050],
                [2065, 3000],
            ],
            utilityRebates: [],
            govtRebates: [],
            taxRebates: [],
            type: "electricity",
            localProviders: ["EcoWindows Solutions", "GreenGlass Innovations"],
        },
        {
            alt: "Smart Thermostat",
            gov: 0,
            utility: 0,
            price: 200,
            setup: 1,
            image: "/solutions/smart_thermostat.jpg",
            imageNoBg: "",
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
                [1985, 400],
                [1990, 300],
                [1995, 280],
                [2000, 250],
                [2005, 230],
                [2010, 220],
                [2015, 210],
                [2020, 205],
                [2025, 200],
            ],
            roiGraph: [
                [2025, 100],
                [2030, 90],
                [2035, 80],
                [2040, 70],
                [2045, 60],
                [2050, 50],
                [2055, 40],
                [2060, 30],
                [2065, 20],
            ],
            utilityRebates: [],
            govtRebates: [],
            taxRebates: [],
            type: "electricity",
            localProviders: ["SmartHeat Technologies", "GreenThermo Inc."],
        },
        {
            alt: "Energy Monitoring System",
            gov: 0,
            utility: 0,
            price: 300,
            setup: 1,
            image: "/solutions/energy_monitoring_system.jpeg",
            imageNoBg: "",
            title: "Energy Monitoring System",
            stats: [
                {
                    data: 15,
                    units: "%",
                    description:
                        "Reduction in electricity usage after implementation",
                },
                {
                    data: 20,
                    units: "%",
                    description: "Increase in awareness of energy consumption",
                },
            ],
            description:
                "Monitor energy usage in real-time to identify areas for improvement and optimize electricity consumption.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 500],
                [1990, 400],
                [1995, 380],
                [2000, 350],
                [2005, 330],
                [2010, 320],
                [2015, 310],
                [2020, 305],
                [2025, 300],
            ],
            roiGraph: [
                [2025, 200],
                [2030, 180],
                [2035, 160],
                [2040, 150],
                [2045, 140],
                [2050, 130],
                [2055, 120],
                [2060, 110],
                [2065, 100],
            ],
            utilityRebates: [],
            govtRebates: [],
            taxRebates: [],
            type: "electricity",
            localProviders: ["EcoMonitor Solutions", "PowerWatch Technologies"],
        },
        {
            alt: "Electric Vehicles",
            gov: 0,
            utility: 0,
            price: 35000,
            setup: 1,
            image: "/solutions/electric_vehicles.jpeg",
            imageNoBg: "",
            title: "Electric Vehicles",
            stats: [
                {
                    data: 0,
                    units: "g/mi",
                    description: "Zero tailpipe emissions",
                },
                {
                    data: 100,
                    units: "mpg equivalent",
                    description: "Fuel efficiency",
                },
            ],
            description:
                "Replace traditional gasoline-powered vehicles with electric vehicles powered by electricity, significantly reducing greenhouse gas emissions.",
            hometypes: ["Individual"],
            costGraph: [
                [1985, 60000],
                [1990, 50000],
                [1995, 40000],
                [2000, 30000],
                [2005, 25000],
                [2010, 20000],
                [2015, 18000],
                [2020, 15000],
                [2025, 12000],
            ],
            roiGraph: [
                [2025, 30000],
                [2030, 25000],
                [2035, 20000],
                [2040, 15000],
                [2045, 12000],
                [2050, 10000],
                [2055, 8000],
                [2060, 6000],
                [2065, 4000],
            ],
            utilityRebates: [],
            govtRebates: [],
            taxRebates: [],
            type: "transportation",
            localProviders: ["EcoWheels", "CleanDrive Autos"],
        },
        {
            alt: "Bicycles",
            gov: 0,
            utility: 0,
            price: 1000,
            setup: 1,
            image: "/solutions/bicycle.jpeg",
            imageNoBg: "",
            title: "Bicycles",
            stats: [
                {
                    data: 0,
                    units: "g/mi",
                    description: "Zero tailpipe emissions",
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
                [1985, 2000],
                [1990, 1800],
                [1995, 1500],
                [2000, 1200],
                [2005, 1100],
                [2010, 1000],
                [2015, 950],
                [2020, 900],
                [2025, 800],
            ],
            roiGraph: [
                [2025, 1500],
                [2030, 1300],
                [2035, 1200],
                [2040, 1100],
                [2045, 1000],
                [2050, 900],
                [2055, 850],
                [2060, 800],
                [2065, 750],
            ],
            utilityRebates: [],
            govtRebates: [],
            taxRebates: [],
            type: "transportation",
            localProviders: ["GreenCycles", "EcoPedal"],
        },
        {
            alt: "Public Transportation",
            gov: 0,
            utility: 0,
            price: 150,
            setup: 1,
            image: "/solutions/public_transportation.jpeg",
            imageNoBg: "",
            title: "Public Transportation",
            stats: [
                {
                    data: 0,
                    units: "g/mi",
                    description:
                        "Reduced emissions per passenger compared to individual vehicles",
                },
                {
                    data: 80,
                    units: "%",
                    description: "Average decrease in commuting stress",
                },
            ],
            description:
                "Use buses, trains, and other forms of public transportation for commuting and travel, reducing the number of individual vehicles on the road.",
            hometypes: ["Individual"],
            costGraph: [
                [1985, 300],
                [1990, 250],
                [1995, 200],
                [2000, 180],
                [2005, 170],
                [2010, 160],
                [2015, 155],
                [2020, 153],
                [2025, 150],
            ],
            roiGraph: [
                [2025, 200],
                [2030, 180],
                [2035, 170],
                [2040, 165],
                [2045, 160],
                [2050, 155],
                [2055, 153],
                [2060, 151],
                [2065, 150],
            ],
            utilityRebates: [],
            govtRebates: [],
            taxRebates: [],
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
            imageNoBg: "",
            title: "Carpooling",
            stats: [
                {
                    data: 0,
                    units: "g/mi",
                    description:
                        "Reduced emissions per passenger compared to individual vehicles",
                },
                {
                    data: 50,
                    units: "%",
                    description:
                        "Average decrease in commuting costs for participants",
                },
            ],
            description:
                "Share rides with coworkers, friends, or neighbors to commute to work or travel, reducing the number of vehicles on the road and saving on fuel costs.",
            hometypes: ["Individual"],
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
                [2025, 100],
                [2030, 150],
                [2035, 200],
                [2040, 250],
                [2045, 300],
                [2050, 350],
                [2055, 400],
                [2060, 450],
                [2065, 500],
            ],
            utilityRebates: [],
            govtRebates: [],
            taxRebates: [],
            type: "transportation",
            localProviders: ["Carpool Connect", "GreenRide"],
        },
        {
            alt: "E-Scooters",
            gov: 0,
            utility: 0,
            price: 500,
            setup: 1,
            image: "/solutions/e_scooters.jpeg",
            imageNoBg: "",
            title: "E-Scooters",
            stats: [
                {
                    data: 0,
                    units: "g/mi",
                    description:
                        "Reduced emissions compared to individual vehicles",
                },
                { data: 15, units: "mph", description: "Average speed" },
            ],
            description:
                "Use electric scooters for short-distance trips, providing a convenient and eco-friendly alternative to cars for urban commuting.",
            hometypes: ["Individual"],
            costGraph: [
                [1985, 1500],
                [1990, 1200],
                [1995, 1000],
                [2000, 800],
                [2005, 700],
                [2010, 600],
                [2015, 550],
                [2020, 525],
                [2025, 500],
            ],
            roiGraph: [
                [2025, 750],
                [2030, 600],
                [2035, 550],
                [2040, 525],
                [2045, 500],
                [2050, 475],
                [2055, 450],
                [2060, 425],
                [2065, 400],
            ],
            utilityRebates: [],
            govtRebates: [],
            taxRebates: [],
            type: "transportation",
            localProviders: ["EcoScoot", "GreenRide"],
        },
        {
            alt: "Heat Pumps",
            gov: 1000,
            utility: 5000,
            price: 8000,
            setup: 2,
            image: "/solutions/heat-pumps.png",
            imageNoBg: "",
            title: "Heat Pumps",
            stats: [
                {
                    data: 300,
                    units: "%",
                    description:
                        "Efficiency improvement over traditional heating systems",
                },
            ],
            description:
                "Utilize heat pumps for both heating and cooling, transferring heat between the indoors and outdoors to provide efficient temperature control.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 12000],
                [1990, 10000],
                [1995, 9000],
                [2000, 8500],
                [2005, 8200],
                [2010, 8000],
                [2015, 7800],
                [2020, 7500],
                [2025, 8000],
            ],
            roiGraph: [
                [2025, 10000],
                [2030, 9000],
                [2035, 8500],
                [2040, 8200],
                [2045, 8000],
                [2050, 7800],
                [2055, 7500],
                [2060, 7200],
                [2065, 7000],
            ],
            utilityRebates: [],
            govtRebates: [],
            taxRebates: [],
            type: "heating",
            localProviders: ["EcoHeat Systems", "GreenHeat Solutions"],
        },
      
        {
            alt: "Geothermal Heat Pumps",
            gov: 0,
            utility: 0,
            price: 10000,
            setup: 3,
            image: "/solutions/geothermal_heat_pump.jpg",
            imageNoBg: "",
            title: "Geothermal Heat Pumps",
            stats: [
                {
                    data: 400,
                    units: "%",
                    description:
                        "Efficiency improvement over traditional heating systems",
                },
            ],
            description:
                "Utilize the constant temperature of the earth below the surface to heat homes with minimal electricity consumption.",
            hometypes: ["Individual Home"],
            costGraph: [
                [1985, 20000],
                [1990, 18000],
                [1995, 16000],
                [2000, 14000],
                [2005, 13000],
                [2010, 12000],
                [2015, 11000],
                [2020, 10500],
                [2025, 10000],
            ],
            roiGraph: [
                [2025, 15000],
                [2030, 14000],
                [2035, 13000],
                [2040, 12500],
                [2045, 12000],
                [2050, 11500],
                [2055, 11000],
                [2060, 10500],
                [2065, 10000],
            ],
            utilityRebates: [],
            govtRebates: [
                { price: 1500, label: "Geothermal heat pump tax credit" },
            ],
            taxRebates: [],
            type: "heating",
            localProviders: ["EcoGeo Heating", "GreenHeat Pumps"],
        },
        {
            alt: "Energy-Efficient Boilers",
            gov: 0,
            utility: 0,
            price: 7000,
            setup: 2,
            image: "/solutions/energy_efficient_boilers.jpg",
            imageNoBg: "",
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
            hometypes: ["Individual Home"],
            costGraph: [
                [1985, 12000],
                [1990, 10000],
                [1995, 9000],
                [2000, 8000],
                [2005, 7500],
                [2010, 7200],
                [2015, 7100],
                [2020, 7050],
                [2025, 7000],
            ],
            roiGraph: [
                [2025, 9000],
                [2030, 8500],
                [2035, 8000],
                [2040, 7750],
                [2045, 7600],
                [2050, 7500],
                [2055, 7450],
                [2060, 7400],
                [2065, 7300],
            ],
            utilityRebates: [],
            govtRebates: [],
            taxRebates: [],
            type: "heating",
            localProviders: ["EcoBoiler Systems", "GreenHeat Solutions"],
        },
        {
            alt: "Radiant Floor Heating",
            gov: 0,
            utility: 0,
            price: 5000,
            setup: 3,
            image: "/solutions/radiant_floor_heating.jpeg",
            imageNoBg: "",
            title: "Radiant Floor Heating",
            stats: [
                {
                    data: 25,
                    units: "%",
                    description:
                        "Reduction in energy costs compared to forced-air heating systems",
                },
            ],
            description:
                "Install radiant floor heating systems that use warm water circulated through pipes beneath the floor to heat the space efficiently and evenly.",
            hometypes: ["Individual Home"],
            costGraph: [
                [1985, 10000],
                [1990, 9000],
                [1995, 8000],
                [2000, 7000],
                [2005, 6500],
                [2010, 6000],
                [2015, 5750],
                [2020, 5500],
                [2025, 5000],
            ],
            roiGraph: [
                [2025, 7500],
                [2030, 7000],
                [2035, 6750],
                [2040, 6500],
                [2045, 6250],
                [2050, 6000],
                [2055, 5750],
                [2060, 5500],
                [2065, 5250],
            ],
            utilityRebates: [],
            govtRebates: [],
            taxRebates: [],
            type: "heating",
            localProviders: ["EcoHeat Flooring", "WarmFloor Solutions"],
        },
        {
            alt: "Insulation",
            gov: 0,
            utility: 0,
            price: 2000,
            setup: 1,
            image: "/solutions/insulation.jpeg",
            imageNoBg: "",
            title: "Insulation",
            stats: [
                {
                    data: 30,
                    units: "%",
                    description: "Reduction in heating costs",
                },
                {
                    data: 50,
                    units: "%",
                    description:
                        "Decrease in heat loss through walls and ceilings",
                },
            ],
            description:
                "Improve home insulation to minimize heat transfer and maintain a comfortable indoor temperature with less reliance on heating systems.",
            hometypes: ["Apartment", "Multi-Family Home", "Individual Home"],
            costGraph: [
                [1985, 4000],
                [1990, 3500],
                [1995, 3000],
                [2000, 2500],
                [2005, 2300],
                [2010, 2200],
                [2015, 2100],
                [2020, 2050],
                [2025, 2000],
            ],
            roiGraph: [
                [2025, 3000],
                [2030, 2800],
                [2035, 2600],
                [2040, 2400],
                [2045, 2300],
                [2050, 2200],
                [2055, 2150],
                [2060, 2100],
                [2065, 2050],
            ],
            utilityRebates: [],
            govtRebates: [],
            taxRebates: [],
            type: "heating",
            localProviders: ["EcoInsulate Solutions", "GreenGuard Insulation"],
        },
    ],
};

export default solutions;
