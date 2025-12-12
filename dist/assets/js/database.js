/**
 * LVV Certifier Training Platform - Document Database
 * Complete catalog of LVVTA documents for training and reference
 *
 * Source: https://lvvta.org.nz/documents.html
 */

const LVVDatabase = {
    baseUrl: 'https://lvvta.org.nz/documents/',

    categories: {
        ORS: {
            name: 'Operating Requirements Schedule',
            description: 'The day-to-day rules of the LVV certification system',
            color: '#2563eb'
        },
        CODE: {
            name: 'LVV Code',
            description: 'The legal framework for LVV certification',
            color: '#7c3aed'
        },
        STANDARDS: {
            name: 'LVV Standards',
            description: 'Technical standards for vehicle modifications',
            color: '#059669'
        },
        NZCCM: {
            name: 'NZ Car Construction Manual',
            description: 'Guidelines for scratch-built vehicles',
            color: '#d97706'
        },
        FORMS: {
            name: 'Certification Forms',
            description: 'Official forms for LVV certification',
            color: '#dc2626'
        },
        SUPPLEMENTARY: {
            name: 'Supplementary Information',
            description: 'Additional guidance and reference materials',
            color: '#0891b2'
        },
        TECHNICAL: {
            name: 'Technical Bulletins',
            description: 'Updates and clarifications on technical matters',
            color: '#be185d'
        },
        QUICKREF: {
            name: 'Quick Reference',
            description: 'Exam day quick lookup - key facts and common questions',
            color: '#7c3aed'
        }
    },

    documents: [
        // ==================== ORS CHAPTERS ====================
        {
            id: 'ors-main',
            title: 'Operating Requirements Schedule (Complete)',
            description: 'The complete ORS document - the day-to-day rules of the game for the LVV certification system. Governs all operational and procedural requirements.',
            category: 'ORS',
            url: 'operating_requirements_schedule/LVVTA_Operating_Requirements_Schedule.pdf',
            keywords: ['ORS', 'requirements', 'operations', 'procedures', 'rules', 'governance'],
            difficulty: 'essential',
            priority: 1,
            summary: 'The ORS is the central document governing all LVV certification operations. It details procedural requirements, certifier obligations, and system rules.'
        },
        {
            id: 'ors-ch1',
            title: 'ORS Chapter 1 - Introduction & Definitions',
            description: 'Introduction to the Operating Requirements Schedule and key definitions used throughout the LVV certification system.',
            category: 'ORS',
            url: 'operating_requirements_schedule/LVVTA_Operating_Requirements_Schedule_Chapter_1_Introduction_and_Definitions.pdf',
            keywords: ['introduction', 'definitions', 'terminology', 'glossary'],
            difficulty: 'beginner',
            priority: 2,
            summary: 'Defines all terminology used in LVV certification. Essential reading before other chapters.'
        },
        {
            id: 'ors-ch2',
            title: 'ORS Chapter 2 - Low Volume Vehicle Classifications',
            description: 'Defines vehicle classifications including modified vehicles, scratch-built vehicles, historic replicas, and reproductions.',
            category: 'ORS',
            url: 'operating_requirements_schedule/LVVTA_Operating_Requirements_Schedule_Chapter_2_Low_Volume_Vehicle_Classifications.pdf',
            keywords: ['classifications', 'modified', 'scratch-built', 'replica', 'reproduction', 'vehicle types'],
            difficulty: 'essential',
            priority: 3,
            summary: 'Critical chapter defining what constitutes different types of low volume vehicles. A scratch-built reproduction requires more compliance than a historic replica.'
        },
        {
            id: 'ors-ch3',
            title: 'ORS Chapter 3 - LVV Certification Categories',
            description: 'Details the different categories of LVV Certifier appointments: General Motor Vehicles, Heavy Vehicles, Off-road & Non-transport (ONT), and specialist categories.',
            category: 'ORS',
            url: 'operating_requirements_schedule/LVVTA_Operating_Requirements_Schedule_Chapter_3_LVV_Certification_Categories.pdf',
            keywords: ['categories', 'certifier types', 'GMV', 'heavy vehicles', 'ONT', 'specialist', 'appointment'],
            difficulty: 'essential',
            priority: 4,
            summary: 'Explains the different types of certifier appointments and what each category covers.'
        },
        {
            id: 'ors-ch4',
            title: 'ORS Chapter 4 - LVV Certifier Background Criteria',
            description: 'Requirements for becoming an LVV Certifier including qualifications, experience, personal attributes, and ongoing requirements.',
            category: 'ORS',
            url: 'operating_requirements_schedule/LVVTA_Operating_Requirements_Schedule_Chapter_4_LVV_Certifier_Background_Criteria.pdf',
            keywords: ['qualifications', 'experience', 'requirements', 'criteria', 'background', 'attributes', 'integrity'],
            difficulty: 'essential',
            priority: 5,
            summary: 'Defines what qualifications and experience you need to become an LVV Certifier. Includes personal attribute requirements.'
        },
        {
            id: 'ors-ch5',
            title: 'ORS Chapter 5 - LVV Certifier Application & Appointment',
            description: 'The application process for becoming an LVV Certifier, assessment procedures, and conditions of appointment.',
            category: 'ORS',
            url: 'operating_requirements_schedule/LVVTA_Operating_Requirements_Schedule_Chapter_5_LVV_Certifier_Application_and_Appointment.pdf',
            keywords: ['application', 'appointment', 'process', 'assessment', 'training'],
            difficulty: 'essential',
            priority: 6,
            summary: 'Step-by-step guide to applying for and obtaining LVV Certifier appointment.'
        },
        {
            id: 'ors-ch6',
            title: 'ORS Chapter 6 - LVV Certifier Obligations',
            description: 'Ongoing obligations of appointed LVV Certifiers including record keeping, reporting, conduct, and compliance requirements.',
            category: 'ORS',
            url: 'operating_requirements_schedule/LVVTA_Operating_Requirements_Schedule_Chapter_6_LVV_Certifier_Obligations.pdf',
            keywords: ['obligations', 'duties', 'responsibilities', 'record keeping', 'reporting', 'compliance'],
            difficulty: 'essential',
            priority: 7,
            summary: 'What you must do once appointed as an LVV Certifier. Critical for maintaining your appointment.'
        },
        {
            id: 'ors-ch7',
            title: 'ORS Chapter 7 - LVV Certification Procedures',
            description: 'Detailed procedures for conducting LVV certifications including inspections, documentation, and plate issuance.',
            category: 'ORS',
            url: 'operating_requirements_schedule/LVVTA_Operating_Requirements_Schedule_Chapter_7_LVV_Certification_Procedures.pdf',
            keywords: ['procedures', 'inspection', 'documentation', 'plates', 'certification process'],
            difficulty: 'essential',
            priority: 8,
            summary: 'How to actually conduct an LVV certification from start to finish.'
        },
        {
            id: 'ors-ch8',
            title: 'ORS Chapter 8 - LVV Certification Plates & Labels',
            description: 'Requirements for LVV certification plates and labels including types, application, and record keeping.',
            category: 'ORS',
            url: 'operating_requirements_schedule/LVVTA_Operating_Requirements_Schedule_Chapter_8_LVV_Certification_Plates_and_Labels.pdf',
            keywords: ['plates', 'labels', 'identification', 'records'],
            difficulty: 'intermediate',
            priority: 9,
            summary: 'All about the physical certification plates and labels - types, when to use them, and requirements.'
        },
        {
            id: 'ors-ch9',
            title: 'ORS Chapter 9 - Fees & Financial Requirements',
            description: 'Fee structures and financial requirements for LVV certification.',
            category: 'ORS',
            url: 'operating_requirements_schedule/LVVTA_Operating_Requirements_Schedule_Chapter_9_Fees_and_Financial_Requirements.pdf',
            keywords: ['fees', 'costs', 'financial', 'payments'],
            difficulty: 'intermediate',
            priority: 10,
            summary: 'Understanding the fee structure for LVV certification services.'
        },
        {
            id: 'ors-ch10',
            title: 'ORS Chapter 10 - Complaints & Disciplinary Procedures',
            description: 'Procedures for handling complaints against certifiers and disciplinary processes.',
            category: 'ORS',
            url: 'operating_requirements_schedule/LVVTA_Operating_Requirements_Schedule_Chapter_10_Complaints_and_Disciplinary_Procedures.pdf',
            keywords: ['complaints', 'disciplinary', 'conduct', 'appeals'],
            difficulty: 'intermediate',
            priority: 11,
            summary: 'What happens if something goes wrong - complaint handling and disciplinary procedures.'
        },

        // ==================== LVV CODE ====================
        {
            id: 'lvv-code',
            title: 'Low Volume Vehicle Code',
            description: 'The legally empowered code under Land Transport Rule: Vehicle Standards Compliance 2002. The top-level legislative framework for LVV certification.',
            category: 'CODE',
            url: 'lvv_code/LVV_code.pdf',
            keywords: ['code', 'legal', 'legislation', 'land transport rule', 'compliance'],
            difficulty: 'essential',
            priority: 1,
            summary: 'The foundational legal document that gives LVV certification its authority. Must-read for all certifiers.'
        },

        // ==================== LVV STANDARDS ====================
        // 100 Series - General
        {
            id: 'std-155-01',
            title: 'LVV Standard 155-01 - Low Volume Vehicle Standards Index',
            description: 'Complete index of all LVV Standards and their application.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_155-01_(Low_Volume_Vehicle_Standards_Index).pdf',
            keywords: ['index', 'standards list', 'reference'],
            difficulty: 'beginner',
            priority: 1,
            summary: 'Your guide to finding the right standard for any certification scenario.'
        },
        {
            id: 'std-185-20',
            title: 'LVV Standard 185-20 - General Safety Requirements',
            description: 'General safety requirements applicable to all low volume vehicles.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_185-20_(General_Safety_Requirements).pdf',
            keywords: ['safety', 'general requirements', 'baseline'],
            difficulty: 'essential',
            priority: 2,
            summary: 'Baseline safety requirements that apply to all LVV certifications.'
        },

        // 35 Series - Brakes
        {
            id: 'std-35-00',
            title: 'LVV Standard 35-00 - Brakes Introduction',
            description: 'Introduction to brake system requirements for low volume vehicles.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_35-00_(Brakes_Introduction).pdf',
            keywords: ['brakes', 'introduction', 'braking systems'],
            difficulty: 'beginner',
            priority: 3,
            summary: 'Overview of brake system requirements and how to apply the 35-series standards.'
        },
        {
            id: 'std-35-10',
            title: 'LVV Standard 35-10 - Modified Light Vehicle Brakes',
            description: 'Requirements for brake modifications on light vehicles under 4500kg GVM.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_35-10_(Modified_Light_Vehicle_Brakes).pdf',
            keywords: ['brakes', 'light vehicles', 'modifications', 'brake upgrades'],
            difficulty: 'intermediate',
            priority: 4,
            summary: 'How to certify brake modifications on cars, utes, and light trucks.'
        },
        {
            id: 'std-35-20',
            title: 'LVV Standard 35-20 - Scratch-built Light Vehicle Brakes',
            description: 'Brake system requirements for scratch-built light vehicles.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_35-20_(Scratch-built_Light_Vehicle_Brakes).pdf',
            keywords: ['brakes', 'scratch-built', 'kit cars', 'custom'],
            difficulty: 'advanced',
            priority: 5,
            summary: 'Complete brake system requirements when building a vehicle from scratch.'
        },
        {
            id: 'std-35-40',
            title: 'LVV Standard 35-40 - Modified Heavy Vehicle Brakes',
            description: 'Requirements for brake modifications on heavy vehicles over 4500kg GVM.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_35-40_(Modified_Heavy_Vehicle_Brakes).pdf',
            keywords: ['brakes', 'heavy vehicles', 'trucks', 'buses'],
            difficulty: 'advanced',
            priority: 6,
            summary: 'Brake certification requirements for trucks, buses, and heavy trailers.'
        },

        // 40 Series - Steering
        {
            id: 'std-40-00',
            title: 'LVV Standard 40-00 - Steering Introduction',
            description: 'Introduction to steering system requirements.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_40-00_(Steering_Introduction).pdf',
            keywords: ['steering', 'introduction'],
            difficulty: 'beginner',
            priority: 7,
            summary: 'Overview of steering certification requirements.'
        },
        {
            id: 'std-40-10',
            title: 'LVV Standard 40-10 - Modified Light Vehicle Steering',
            description: 'Steering modification requirements for light vehicles.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_40-10_(Modified_Light_Vehicle_Steering).pdf',
            keywords: ['steering', 'modifications', 'steering conversions', 'power steering'],
            difficulty: 'intermediate',
            priority: 8,
            summary: 'How to certify steering modifications including conversions and power steering additions.'
        },
        {
            id: 'std-40-20',
            title: 'LVV Standard 40-20 - Scratch-built Light Vehicle Steering',
            description: 'Steering system requirements for scratch-built vehicles.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_40-20_(Scratch-built_Light_Vehicle_Steering).pdf',
            keywords: ['steering', 'scratch-built', 'custom'],
            difficulty: 'advanced',
            priority: 9,
            summary: 'Complete steering system requirements for scratch-built vehicles.'
        },

        // 45 Series - Suspension
        {
            id: 'std-45-00',
            title: 'LVV Standard 45-00 - Suspension Introduction',
            description: 'Introduction to suspension system requirements.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_45-00_(Suspension_Introduction).pdf',
            keywords: ['suspension', 'introduction'],
            difficulty: 'beginner',
            priority: 10,
            summary: 'Overview of suspension certification requirements.'
        },
        {
            id: 'std-45-10',
            title: 'LVV Standard 45-10 - Modified Light Vehicle Suspension',
            description: 'Suspension modification requirements including lowering, lifting, and component changes.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_45-10_(Modified_Light_Vehicle_Suspension).pdf',
            keywords: ['suspension', 'lowering', 'lifting', 'coilovers', 'airbags'],
            difficulty: 'intermediate',
            priority: 11,
            summary: 'How to certify suspension modifications - the most common type of LVV certification.'
        },
        {
            id: 'std-45-20',
            title: 'LVV Standard 45-20 - Scratch-built Light Vehicle Suspension',
            description: 'Suspension system requirements for scratch-built vehicles.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_45-20_(Scratch-built_Light_Vehicle_Suspension).pdf',
            keywords: ['suspension', 'scratch-built', 'custom'],
            difficulty: 'advanced',
            priority: 12,
            summary: 'Complete suspension system requirements for scratch-built vehicles.'
        },

        // 50 Series - Structure
        {
            id: 'std-50-00',
            title: 'LVV Standard 50-00 - Structure Introduction',
            description: 'Introduction to vehicle structure and chassis requirements.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_50-00_(Structure_Introduction).pdf',
            keywords: ['structure', 'chassis', 'introduction'],
            difficulty: 'beginner',
            priority: 13,
            summary: 'Overview of structural modification requirements.'
        },
        {
            id: 'std-50-10',
            title: 'LVV Standard 50-10 - Modified Vehicle Structure',
            description: 'Requirements for structural modifications including chassis work, roll cages, and body changes.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_50-10_(Modified_Vehicle_Structure).pdf',
            keywords: ['structure', 'chassis', 'roll cage', 'body', 'modifications'],
            difficulty: 'intermediate',
            priority: 14,
            summary: 'How to certify structural modifications - critical safety area.'
        },
        {
            id: 'std-50-20',
            title: 'LVV Standard 50-20 - Scratch-built Vehicle Structure',
            description: 'Structural requirements for scratch-built vehicles.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_50-20_(Scratch-built_Vehicle_Structure).pdf',
            keywords: ['structure', 'scratch-built', 'chassis design'],
            difficulty: 'advanced',
            priority: 15,
            summary: 'Chassis and structure requirements for building vehicles from scratch.'
        },

        // 55 Series - Wheels & Tyres
        {
            id: 'std-55-00',
            title: 'LVV Standard 55-00 - Wheels & Tyres Introduction',
            description: 'Introduction to wheel and tyre requirements.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_55-00_(Wheels_and_Tyres_Introduction).pdf',
            keywords: ['wheels', 'tyres', 'introduction'],
            difficulty: 'beginner',
            priority: 16,
            summary: 'Overview of wheel and tyre certification requirements.'
        },
        {
            id: 'std-55-10',
            title: 'LVV Standard 55-10 - Modified Light Vehicle Wheels & Tyres',
            description: 'Requirements for wheel and tyre modifications on light vehicles.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_55-10_(Modified_Light_Vehicle_Wheels_and_Tyres).pdf',
            keywords: ['wheels', 'tyres', 'offset', 'wheel spacers', 'wider wheels'],
            difficulty: 'intermediate',
            priority: 17,
            summary: 'How to certify non-standard wheels and tyres.'
        },

        // 60 Series - Engine
        {
            id: 'std-60-00',
            title: 'LVV Standard 60-00 - Engine Introduction',
            description: 'Introduction to engine and drivetrain requirements.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_60-00_(Engine_Introduction).pdf',
            keywords: ['engine', 'drivetrain', 'introduction'],
            difficulty: 'beginner',
            priority: 18,
            summary: 'Overview of engine certification requirements.'
        },
        {
            id: 'std-60-10',
            title: 'LVV Standard 60-10 - Modified Light Vehicle Engine',
            description: 'Requirements for engine conversions, swaps, and modifications.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_60-10_(Modified_Light_Vehicle_Engine).pdf',
            keywords: ['engine', 'engine swap', 'conversion', 'turbo', 'supercharger'],
            difficulty: 'intermediate',
            priority: 19,
            summary: 'How to certify engine swaps and significant power modifications.'
        },
        {
            id: 'std-60-20',
            title: 'LVV Standard 60-20 - Scratch-built Light Vehicle Engine',
            description: 'Engine installation requirements for scratch-built vehicles.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_60-20_(Scratch-built_Light_Vehicle_Engine).pdf',
            keywords: ['engine', 'scratch-built', 'installation'],
            difficulty: 'advanced',
            priority: 20,
            summary: 'Engine installation requirements when building from scratch.'
        },

        // 65 Series - Drivetrain
        {
            id: 'std-65-00',
            title: 'LVV Standard 65-00 - Drivetrain Introduction',
            description: 'Introduction to drivetrain and transmission requirements.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_65-00_(Drivetrain_Introduction).pdf',
            keywords: ['drivetrain', 'transmission', 'introduction'],
            difficulty: 'beginner',
            priority: 21,
            summary: 'Overview of drivetrain modification requirements.'
        },
        {
            id: 'std-65-10',
            title: 'LVV Standard 65-10 - Modified Light Vehicle Drivetrain',
            description: 'Requirements for gearbox swaps, diff conversions, and drivetrain modifications.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_65-10_(Modified_Light_Vehicle_Drivetrain).pdf',
            keywords: ['drivetrain', 'gearbox', 'differential', 'driveshaft', 'transmission swap'],
            difficulty: 'intermediate',
            priority: 22,
            summary: 'How to certify transmission and drivetrain modifications.'
        },

        // 70 Series - Fuel
        {
            id: 'std-70-00',
            title: 'LVV Standard 70-00 - Fuel Systems Introduction',
            description: 'Introduction to fuel system requirements.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_70-00_(Fuel_Systems_Introduction).pdf',
            keywords: ['fuel', 'introduction'],
            difficulty: 'beginner',
            priority: 23,
            summary: 'Overview of fuel system certification requirements.'
        },
        {
            id: 'std-70-10',
            title: 'LVV Standard 70-10 - Modified Light Vehicle Fuel Systems',
            description: 'Requirements for fuel system modifications including tank relocations and fuel cell installations.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_70-10_(Modified_Light_Vehicle_Fuel_Systems).pdf',
            keywords: ['fuel', 'fuel tank', 'fuel cell', 'fuel system'],
            difficulty: 'intermediate',
            priority: 24,
            summary: 'How to certify fuel system modifications - important safety area.'
        },

        // 75 Series - LPG/CNG
        {
            id: 'std-75-10',
            title: 'LVV Standard 75-10 - LPG & CNG Fuel Systems',
            description: 'Requirements for LPG and CNG (gas) fuel system installations.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_75-10_(LPG_and_CNG_Fuel_Systems).pdf',
            keywords: ['LPG', 'CNG', 'gas', 'alternative fuel'],
            difficulty: 'specialist',
            priority: 25,
            summary: 'Specialist requirements for gas fuel system installations.'
        },

        // 80 Series - Electrical
        {
            id: 'std-80-00',
            title: 'LVV Standard 80-00 - Electrical Systems Introduction',
            description: 'Introduction to electrical system requirements.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_80-00_(Electrical_Systems_Introduction).pdf',
            keywords: ['electrical', 'introduction', 'wiring'],
            difficulty: 'beginner',
            priority: 26,
            summary: 'Overview of electrical certification requirements.'
        },
        {
            id: 'std-80-10',
            title: 'LVV Standard 80-10 - Modified Light Vehicle Electrical',
            description: 'Requirements for electrical modifications including rewiring and component changes.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_80-10_(Modified_Light_Vehicle_Electrical).pdf',
            keywords: ['electrical', 'wiring', 'battery relocation'],
            difficulty: 'intermediate',
            priority: 27,
            summary: 'How to certify electrical system modifications.'
        },

        // 85 Series - Electric Vehicles
        {
            id: 'std-85-10',
            title: 'LVV Standard 85-10 - Electric Vehicle Conversions',
            description: 'Requirements for converting vehicles to electric power.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_85-10_(Electric_Vehicle_Conversions).pdf',
            keywords: ['electric', 'EV', 'conversion', 'battery', 'motor'],
            difficulty: 'specialist',
            priority: 28,
            summary: 'Specialist requirements for converting vehicles to electric power.'
        },

        // 90 Series - Lighting
        {
            id: 'std-90-00',
            title: 'LVV Standard 90-00 - Lighting Introduction',
            description: 'Introduction to lighting system requirements.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_90-00_(Lighting_Introduction).pdf',
            keywords: ['lighting', 'lights', 'introduction'],
            difficulty: 'beginner',
            priority: 29,
            summary: 'Overview of lighting system certification requirements.'
        },
        {
            id: 'std-90-10',
            title: 'LVV Standard 90-10 - Modified Vehicle Lighting',
            description: 'Requirements for lighting modifications on vehicles.',
            category: 'STANDARDS',
            url: 'standards/lvv_standards/LVV_Standard_90-10_(Modified_Vehicle_Lighting).pdf',
            keywords: ['lighting', 'headlights', 'tail lights', 'indicators'],
            difficulty: 'intermediate',
            priority: 30,
            summary: 'How to certify lighting modifications.'
        },

        // ==================== NZCCM - COMPLETE ====================
        {
            id: 'nzccm-full',
            title: 'NZ Car Construction Manual (Complete)',
            description: 'The complete NZ Car Construction Manual - 529 pages covering all aspects of vehicle design, modification, and construction. FREE download since Feb 2021.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/NZ-Car-Construction-Manual-Full-Version.pdf',
            keywords: ['NZCCM', 'complete', 'full', 'scratch-built', 'kit car', 'construction', 'design'],
            difficulty: 'essential',
            priority: 1,
            summary: 'The bible for scratch-built vehicles. 529 pages covering chassis, brakes, steering, suspension, engine, fuel, electrical, and more. Essential reference.'
        },
        {
            id: 'nzccm-ch2',
            title: 'NZCCM Chapter 2 - About This Manual',
            description: 'Introduction to the Car Construction Manual - how to use it, scope, and helpful information.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/NZ-Car-Construction-Manual-CH2-About-This-Manual.pdf',
            keywords: ['introduction', 'how to use', 'scope'],
            difficulty: 'beginner',
            priority: 2,
            summary: 'Start here - explains how to navigate and use the manual effectively.'
        },
        {
            id: 'nzccm-ch3',
            title: 'NZCCM Chapter 3 - Authority Card Process',
            description: 'The authority card process for scratch-built vehicles - administrative requirements and procedures.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/NZ-Car-Construction-Manual-CH3-Authority-Card-Process.pdf',
            keywords: ['authority card', 'process', 'administration', 'approval'],
            difficulty: 'intermediate',
            priority: 3,
            summary: 'How the authority card system works for scratch-built vehicle certification.'
        },
        {
            id: 'nzccm-ch4',
            title: 'NZCCM Chapter 4 - Terms & Definitions',
            description: 'Technical terminology and definitions used throughout the NZ Car Construction Manual.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/NZ-Car-Construction-Manual-CH4-Terms-And-Definitions.pdf',
            keywords: ['terms', 'definitions', 'glossary', 'terminology'],
            difficulty: 'beginner',
            priority: 4,
            summary: 'Essential glossary - understand the technical language before diving into technical chapters.'
        },
        {
            id: 'nzccm-ch5',
            title: 'NZCCM Chapter 5 - Chassis Modification & Construction',
            description: 'Comprehensive guide to chassis design, modification, and construction including materials, welding, and structural integrity.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/NZ-Car-Construction-Manual-CH5-Chassis-Modification-And-Construction.pdf',
            keywords: ['chassis', 'frame', 'construction', 'welding', 'structure', 'materials', 'steel', 'tube'],
            difficulty: 'advanced',
            priority: 5,
            summary: 'Critical chapter - covers chassis types, materials, welding requirements, and structural calculations. Updated July 2021.'
        },
        {
            id: 'nzccm-ch6',
            title: 'NZCCM Chapter 6 - Roll Cages',
            description: 'Requirements for roll cage design, construction, and installation for vehicle safety.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/NZ-Car-Construction-Manual-CH6-Roll-Cages.pdf',
            keywords: ['roll cage', 'roll bar', 'safety', 'protection', 'motorsport'],
            difficulty: 'advanced',
            priority: 6,
            summary: 'Roll cage design requirements - tube specifications, mounting points, and construction standards.'
        },
        {
            id: 'nzccm-ch7',
            title: 'NZCCM Chapter 7 - Steering Systems',
            description: 'Steering system design and modification requirements including geometry, components, and safety.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/NZ-Car-Construction-Manual-CH7-Steering-Systems.pdf',
            keywords: ['steering', 'rack', 'geometry', 'ackerman', 'column', 'universal joint'],
            difficulty: 'advanced',
            priority: 7,
            summary: 'Steering geometry, component selection, and safety requirements for scratch-built vehicles.'
        },
        {
            id: 'nzccm-ch8',
            title: 'NZCCM Chapter 8 - Braking Systems',
            description: 'Comprehensive braking system requirements including hydraulics, components, and performance calculations.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/NZ-Car-Construction-Manual-CH8-Braking-Systems.pdf',
            keywords: ['brakes', 'braking', 'hydraulic', 'master cylinder', 'disc', 'drum', 'pedal ratio'],
            difficulty: 'advanced',
            priority: 8,
            summary: 'Critical safety chapter - brake system design, calculations, and component requirements.'
        },
        {
            id: 'nzccm-ch9',
            title: 'NZCCM Chapter 9 - Engine & Drivetrain',
            description: 'Engine installation and drivetrain requirements including mounting, cooling, and transmission.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/NZ-Car-Construction-Manual-CH9-Engine-And-Drivetrain.pdf',
            keywords: ['engine', 'drivetrain', 'transmission', 'gearbox', 'differential', 'driveshaft', 'cooling', 'mounting'],
            difficulty: 'advanced',
            priority: 9,
            summary: 'Engine mounting, drivetrain layout, cooling systems, and transmission requirements. Updated July 2021.'
        },
        {
            id: 'nzccm-ch10',
            title: 'NZCCM Chapter 10 - Fuel Systems',
            description: 'Fuel system design and safety requirements including tanks, lines, and fire prevention.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/NZ-Car-Construction-Manual-CH10-Fuel-Systems.pdf',
            keywords: ['fuel', 'tank', 'fuel cell', 'fuel lines', 'fire safety', 'petrol'],
            difficulty: 'advanced',
            priority: 10,
            summary: 'Fuel system safety - tank location, fuel lines, venting, and fire prevention. Updated July 2021.'
        },
        {
            id: 'nzccm-ch11',
            title: 'NZCCM Chapter 11 - Suspension Systems',
            description: 'Suspension design principles, component requirements, and geometry for scratch-built vehicles.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/NZ-Car-Construction-Manual-CH11-Suspension-Systems.pdf',
            keywords: ['suspension', 'springs', 'dampers', 'geometry', 'wishbone', 'macpherson', 'live axle'],
            difficulty: 'advanced',
            priority: 11,
            summary: 'Suspension types, geometry principles, and component selection for custom builds.'
        },
        {
            id: 'nzccm-ch12',
            title: 'NZCCM Chapter 12 - Wheels, Tyres & Hubs',
            description: 'Requirements for wheels, tyres, and hub assemblies on scratch-built vehicles.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/NZ-Car-Construction-Manual-CH12-Wheels-Tyres-And-Hubs.pdf',
            keywords: ['wheels', 'tyres', 'hubs', 'bearings', 'PCD', 'offset', 'load rating'],
            difficulty: 'intermediate',
            priority: 12,
            summary: 'Wheel and tyre specifications, hub requirements, and load ratings.'
        },
        {
            id: 'nzccm-ch13',
            title: 'NZCCM Chapter 13 - Bodywork',
            description: 'Body construction requirements including materials, mounting, and safety considerations.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/NZ-Car-Construction-Manual-CH13-Bodywork.pdf',
            keywords: ['body', 'bodywork', 'panels', 'fibreglass', 'mounting', 'guards'],
            difficulty: 'intermediate',
            priority: 13,
            summary: 'Body construction, materials, and mounting requirements.'
        },
        {
            id: 'nzccm-ch14',
            title: 'NZCCM Chapter 14 - Electrical Systems',
            description: 'Electrical system requirements including wiring, components, and safety.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/NZ-Car-Construction-Manual-CH14-Electrical-Systems.pdf',
            keywords: ['electrical', 'wiring', 'battery', 'alternator', 'fuses', 'circuits'],
            difficulty: 'intermediate',
            priority: 14,
            summary: 'Wiring standards, component requirements, and electrical safety.'
        },
        {
            id: 'nzccm-ch15',
            title: 'NZCCM Chapter 15 - Glazing & Vision',
            description: 'Windscreen and glazing requirements including materials, visibility, and safety standards.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/NZ-Car-Construction-Manual-CH15-Glazing-And-Vision.pdf',
            keywords: ['glazing', 'windscreen', 'glass', 'visibility', 'mirrors', 'vision'],
            difficulty: 'intermediate',
            priority: 15,
            summary: 'Windscreen requirements, visibility standards, and mirror placement.'
        },
        {
            id: 'nzccm-ch16',
            title: 'NZCCM Chapter 16 - Occupant Protection',
            description: 'Occupant safety requirements including seating, seatbelts, and protection systems.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/NZ-Car-Construction-Manual-CH16-Occupant-Protection.pdf',
            keywords: ['occupant', 'protection', 'seatbelts', 'seats', 'harness', 'safety'],
            difficulty: 'essential',
            priority: 16,
            summary: 'Critical safety - seating, seatbelt mounting, and occupant protection requirements.'
        },
        {
            id: 'nzccm-ch17',
            title: 'NZCCM Chapter 17 - Lighting',
            description: 'Lighting system requirements including headlights, indicators, and auxiliary lighting.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/NZ-Car-Construction-Manual-CH17-Lighting.pdf',
            keywords: ['lighting', 'headlights', 'indicators', 'tail lights', 'brake lights'],
            difficulty: 'intermediate',
            priority: 17,
            summary: 'Lighting placement, specifications, and legal requirements.'
        },
        {
            id: 'nzccm-ch18',
            title: 'NZCCM Chapter 18 - Instruments & Controls',
            description: 'Dashboard instruments and control requirements for scratch-built vehicles.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/NZ-Car-Construction-Manual-CH18-Instruments-And-Controls.pdf',
            keywords: ['instruments', 'gauges', 'controls', 'dashboard', 'speedometer'],
            difficulty: 'intermediate',
            priority: 18,
            summary: 'Required instruments, control placement, and ergonomics.'
        },
        {
            id: 'nzccm-ch19',
            title: 'NZCCM Chapter 19 - Vehicle Operation',
            description: 'Operational requirements and final checks for scratch-built vehicles.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/NZ-Car-Construction-Manual-CH19-Vehicle-Operation.pdf',
            keywords: ['operation', 'testing', 'final checks', 'commissioning'],
            difficulty: 'intermediate',
            priority: 19,
            summary: 'Final operational requirements and vehicle commissioning procedures.'
        },
        {
            id: 'nzccm-appendices',
            title: 'NZCCM Appendices & Reference Tables',
            description: 'Reference tables, calculations, and appendices for the NZ Car Construction Manual.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/NZ-Car-Construction-Manual-Appendices.pdf',
            keywords: ['appendix', 'tables', 'reference', 'calculations', 'data'],
            difficulty: 'reference',
            priority: 20,
            summary: 'Quick reference tables, calculations, and technical data.'
        },

        // ==================== SUPPLEMENTARY INFORMATION ====================
        {
            id: 'cert-threshold',
            title: 'LVV Certification Threshold Schedule',
            description: 'Defines when LVV certification is required based on modification level. Three groups: always required, sometimes required, never required.',
            category: 'SUPPLEMENTARY',
            url: 'suplementary_information/LVVTA_LVV_Cert_Threshold.pdf',
            keywords: ['threshold', 'when required', 'modification level', 'certification required'],
            difficulty: 'essential',
            priority: 1,
            summary: 'Critical document - tells you when a modification requires LVV certification.'
        },
        {
            id: 'info-sheet-1',
            title: 'Info Sheet 01 - What is LVV Certification?',
            description: 'General public information about LVV certification.',
            category: 'SUPPLEMENTARY',
            url: 'suplementary_information/info_sheets/LVVTA_Info_Sheet_01.pdf',
            keywords: ['information', 'public', 'overview'],
            difficulty: 'beginner',
            priority: 2,
            summary: 'Basic introduction to what LVV certification is for the public.'
        },
        {
            id: 'info-sheet-2',
            title: 'Info Sheet 02 - Modified Vehicles',
            description: 'Information about certification requirements for modified vehicles.',
            category: 'SUPPLEMENTARY',
            url: 'suplementary_information/info_sheets/LVVTA_Info_Sheet_02.pdf',
            keywords: ['modified', 'information', 'requirements'],
            difficulty: 'beginner',
            priority: 3,
            summary: 'Overview of certification requirements for modified vehicles.'
        },
        {
            id: 'info-sheet-3',
            title: 'Info Sheet 03 - Scratch-built Vehicles',
            description: 'Information about certification for scratch-built and kit vehicles.',
            category: 'SUPPLEMENTARY',
            url: 'suplementary_information/info_sheets/LVVTA_Info_Sheet_03.pdf',
            keywords: ['scratch-built', 'kit', 'custom', 'information'],
            difficulty: 'beginner',
            priority: 4,
            summary: 'Overview of what scratch-built certification involves.'
        },
        {
            id: 'certifier-list-gmv',
            title: 'LVV Certifier Contact List - General Motor Vehicles',
            description: 'List of appointed LVV Certifiers for general motor vehicles.',
            category: 'SUPPLEMENTARY',
            url: 'suplementary_information/certifier_lists/lvv_certifier_list_website_general_motor_vehicles.pdf',
            keywords: ['certifiers', 'contact', 'list', 'GMV'],
            difficulty: 'reference',
            priority: 5,
            summary: 'Find an LVV Certifier in your area for general vehicle modifications.'
        },
        {
            id: 'certifier-list-hv',
            title: 'LVV Certifier Contact List - Heavy Vehicles',
            description: 'List of appointed LVV Certifiers for heavy vehicles.',
            category: 'SUPPLEMENTARY',
            url: 'suplementary_information/certifier_lists/lvv_certifier_list_website_heavy_vehicles.pdf',
            keywords: ['certifiers', 'contact', 'list', 'heavy'],
            difficulty: 'reference',
            priority: 6,
            summary: 'Find an LVV Certifier for heavy vehicle modifications.'
        },
        {
            id: 'certifier-list-ont',
            title: 'LVV Certifier Contact List - Off-road & Non-transport',
            description: 'List of appointed LVV Certifiers for ONT vehicles.',
            category: 'SUPPLEMENTARY',
            url: 'suplementary_information/certifier_lists/lvv_certifier_list_website_ONT.pdf',
            keywords: ['certifiers', 'contact', 'list', 'ONT', 'off-road'],
            difficulty: 'reference',
            priority: 7,
            summary: 'Find an LVV Certifier for off-road and non-transport vehicles.'
        },

        // ==================== FORMS ====================
        {
            id: 'form-cert-record',
            title: 'LVV Certification Record Form',
            description: 'The main certification record form used for all LVV certifications.',
            category: 'FORMS',
            url: 'forms/LVV_Certification_Record.pdf',
            keywords: ['form', 'certification', 'record', 'paperwork'],
            difficulty: 'essential',
            priority: 1,
            summary: 'The primary documentation form for recording LVV certifications.'
        },
        {
            id: 'form-plate-order',
            title: 'LVV Plate Order Form',
            description: 'Form for ordering certification plates.',
            category: 'FORMS',
            url: 'forms/LVV_Plate_Order_Form.pdf',
            keywords: ['form', 'plate', 'order'],
            difficulty: 'intermediate',
            priority: 2,
            summary: 'How to order certification plates for completed certifications.'
        },

        // ==================== TECHNICAL BULLETINS ====================
        {
            id: 'tech-bulletin-index',
            title: 'Technical Bulletin Index',
            description: 'Index of all technical bulletins issued by LVVTA.',
            category: 'TECHNICAL',
            url: 'suplementary_information/technical_bulletins/Technical_Bulletin_Index.pdf',
            keywords: ['bulletins', 'index', 'updates'],
            difficulty: 'intermediate',
            priority: 1,
            summary: 'Find specific technical bulletins on various topics.'
        },

        // ==================== QUICK REFERENCE (EXAM DAY) ====================
        {
            id: 'qr-key-dates',
            title: 'Quick Ref: Key Dates & Numbers',
            description: 'Essential dates and numbers every certifier should know instantly.',
            category: 'QUICKREF',
            url: null,
            keywords: ['dates', 'numbers', 'quick', 'reference', '1949', '4500kg', 'thresholds'],
            difficulty: 'essential',
            priority: 1,
            summary: '1949 = Historic replica cutoff | 4500kg = Heavy vehicle threshold | 1/3 suspension travel = lowering threshold | Rule 35001/1 = Vehicle Standards Compliance'
        },
        {
            id: 'qr-vehicle-classes',
            title: 'Quick Ref: Vehicle Classifications',
            description: 'Quick reference for LVV vehicle classifications.',
            category: 'QUICKREF',
            url: null,
            keywords: ['classifications', 'modified', 'scratch-built', 'replica', 'reproduction'],
            difficulty: 'essential',
            priority: 2,
            summary: 'MODIFIED = Based on production vehicle, keeps original VIN | SCRATCH-BUILT = New construction, gets new VIN from LVVTA | HISTORIC REPLICA = Pre-1949 copy, fewer requirements | REPRODUCTION = Post-1949 copy, full modern requirements'
        },
        {
            id: 'qr-certifier-categories',
            title: 'Quick Ref: Certifier Categories',
            description: 'LVV Certifier appointment categories explained.',
            category: 'QUICKREF',
            url: null,
            keywords: ['categories', 'GMV', 'heavy', 'ONT', 'certifier types'],
            difficulty: 'essential',
            priority: 3,
            summary: 'GMV = General Motor Vehicles (under 4500kg) | HV = Heavy Vehicles (over 4500kg) | ONT = Off-road & Non-transport | Specialist categories for specific areas'
        },
        {
            id: 'qr-standards-numbering',
            title: 'Quick Ref: Standards Numbering System',
            description: 'How to decode LVV Standard numbers.',
            category: 'QUICKREF',
            url: null,
            keywords: ['standards', 'numbering', 'decode', '35', '40', '45', '50'],
            difficulty: 'essential',
            priority: 4,
            summary: '35=Brakes | 40=Steering | 45=Suspension | 50=Structure | 55=Wheels | 60=Engine | 65=Drivetrain | 70=Fuel | 80=Electrical | 90=Lighting || -00=Intro | -10=Modified Light | -20=Scratch-built | -40=Heavy'
        },
        {
            id: 'qr-certification-groups',
            title: 'Quick Ref: Certification Threshold Groups',
            description: 'The three groups of modifications.',
            category: 'QUICKREF',
            url: null,
            keywords: ['groups', 'threshold', 'always', 'sometimes', 'never'],
            difficulty: 'essential',
            priority: 5,
            summary: 'GROUP 1 = ALWAYS requires cert (engine swaps, major structural, scratch-built) | GROUP 2 = Requires cert IF exceeds threshold (suspension lowering >1/3, significant power increase) | GROUP 3 = NEVER requires cert (still must meet WoF)'
        },
        {
            id: 'qr-certifier-attributes',
            title: 'Quick Ref: Certifier Attributes',
            description: 'The essential attributes of an LVV Certifier.',
            category: 'QUICKREF',
            url: null,
            keywords: ['attributes', 'qualities', 'integrity', 'independence', 'conscientious'],
            difficulty: 'essential',
            priority: 6,
            summary: 'Technically skilled | Vastly experienced | Conscientious | Independent | Reliable | Good people skills | High integrity - ALL are required, technical skill alone is NOT sufficient'
        },
        {
            id: 'qr-document-hierarchy',
            title: 'Quick Ref: Document Hierarchy',
            description: 'The legal hierarchy of LVV documents.',
            category: 'QUICKREF',
            url: null,
            keywords: ['hierarchy', 'legal', 'authority', 'documents'],
            difficulty: 'essential',
            priority: 7,
            summary: '1. Land Transport Act 1998 | 2. Land Transport Rule 35001/1 (Vehicle Standards Compliance) | 3. LVV Code | 4. Operating Requirements Schedule (ORS) | 5. LVV Standards'
        },
        {
            id: 'qr-must-vs-should',
            title: 'Quick Ref: Must vs Should vs May',
            description: 'Understanding mandatory vs optional requirements.',
            category: 'QUICKREF',
            url: null,
            keywords: ['must', 'shall', 'should', 'may', 'mandatory', 'optional'],
            difficulty: 'essential',
            priority: 8,
            summary: 'MUST/SHALL = Mandatory, no flexibility, must comply | SHOULD = Recommended but not mandatory | MAY = Optional, permitted but not required'
        },
        {
            id: 'qr-common-mods',
            title: 'Quick Ref: Common Modifications',
            description: 'Quick guide to common modification certification requirements.',
            category: 'QUICKREF',
            url: null,
            keywords: ['common', 'modifications', 'engine swap', 'lowering', 'turbo'],
            difficulty: 'essential',
            priority: 9,
            summary: 'Engine swap = Always cert (60-10, 65-10, 70-10, 80-10) | Lowering >1/3 = Cert required (45-10) | Turbo/supercharger = Usually cert (60-10) | Wheels beyond spec = Check thresholds (55-10) | Roll cage = Always cert (50-10)'
        },
        {
            id: 'qr-nzccm-chapters',
            title: 'Quick Ref: NZCCM Chapter Guide',
            description: 'Quick reference to NZCCM chapter contents.',
            category: 'QUICKREF',
            url: null,
            keywords: ['NZCCM', 'chapters', 'car construction manual'],
            difficulty: 'reference',
            priority: 10,
            summary: 'Ch5=Chassis | Ch6=Roll Cages | Ch7=Steering | Ch8=Brakes | Ch9=Engine/Drivetrain | Ch10=Fuel | Ch11=Suspension | Ch12=Wheels | Ch13=Body | Ch14=Electrical | Ch15=Glazing | Ch16=Occupant Protection | Ch17=Lighting | Ch18=Instruments | Ch19=Operation'
        }
    ],

    // Search function
    search(query, categoryFilter = null) {
        const terms = query.toLowerCase().split(' ').filter(t => t.length > 0);

        return this.documents.filter(doc => {
            // Category filter
            if (categoryFilter && doc.category !== categoryFilter) {
                return false;
            }

            // Search in title, description, keywords
            const searchText = [
                doc.title,
                doc.description,
                doc.keywords.join(' '),
                doc.summary || ''
            ].join(' ').toLowerCase();

            return terms.every(term => searchText.includes(term));
        }).sort((a, b) => a.priority - b.priority);
    },

    // Get documents by category
    getByCategory(category) {
        return this.documents
            .filter(doc => doc.category === category)
            .sort((a, b) => a.priority - b.priority);
    },

    // Get document by ID
    getById(id) {
        return this.documents.find(doc => doc.id === id);
    },

    // Get full URL for a document
    getFullUrl(doc) {
        if (doc.url.startsWith('http')) {
            return doc.url;
        }
        return this.baseUrl + doc.url;
    },

    // Get essential documents for beginners
    getEssentials() {
        return this.documents
            .filter(doc => doc.difficulty === 'essential')
            .sort((a, b) => a.priority - b.priority);
    },

    // Get related documents
    getRelated(docId, limit = 5) {
        const doc = this.getById(docId);
        if (!doc) return [];

        return this.documents
            .filter(d => d.id !== docId && d.category === doc.category)
            .sort((a, b) => a.priority - b.priority)
            .slice(0, limit);
    }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LVVDatabase;
}
