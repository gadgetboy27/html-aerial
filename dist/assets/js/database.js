/**
 * LVV Certifier Training Platform - COMPREHENSIVE Document Database
 * Complete catalog of ALL LVVTA documents for training and reference
 *
 * Source: https://lvvta.org.nz/documents.html
 * Last Updated: Based on official LVVTA documents page
 *
 * IMPORTANT: This database aims to be 100% comprehensive for LVV Certifier training
 */

const LVVDatabase = {
    baseUrl: 'https://lvvta.org.nz/documents/',

    categories: {
        STANDARDS: {
            name: 'LVV Standards',
            description: 'Technical standards for vehicle modifications - legally binding',
            color: '#059669'
        },
        MOTO_STANDARDS: {
            name: 'LVV Motorcycle Standards',
            description: 'Standards specific to motorcycles and trikes (145 series)',
            color: '#10b981'
        },
        NZCCM: {
            name: 'NZ Car Construction Manual',
            description: 'Comprehensive manual for scratch-built vehicles',
            color: '#d97706'
        },
        NZMCM: {
            name: 'NZ Motorcycle Construction Manual',
            description: 'Construction manual for scratch-built motorcycles',
            color: '#f59e0b'
        },
        ORS: {
            name: 'Operating Requirements Schedule',
            description: 'Day-to-day operational rules for LVV certification system',
            color: '#2563eb'
        },
        CODE: {
            name: 'LVV Code',
            description: 'The legal framework for LVV certification',
            color: '#7c3aed'
        },
        THRESHOLD: {
            name: 'Certification Thresholds',
            description: 'Defines when LVV certification is required',
            color: '#dc2626'
        },
        INFO_TECH: {
            name: 'Information Sheets - Technical',
            description: 'Technical guidance and updates for certifiers',
            color: '#0891b2'
        },
        INFO_NONTECH: {
            name: 'Information Sheets - Non-technical',
            description: 'General information and safety alerts',
            color: '#06b6d4'
        },
        SUPPLEMENTARY: {
            name: 'Supplementary Information',
            description: 'Tech bulletins, component approvals, certifier lists',
            color: '#8b5cf6'
        },
        FORMS: {
            name: 'Forms & Processes',
            description: 'Official certification forms and procedures',
            color: '#ec4899'
        },
        EXTERNAL: {
            name: 'External Resources',
            description: 'VIRM, Land Transport Rules, and external links',
            color: '#6366f1'
        },
        QUICKREF: {
            name: 'Quick Reference',
            description: 'Exam day quick lookup - key facts',
            color: '#f43f5e'
        }
    },

    documents: [
        // ==================== LVV STANDARDS (Official Numbers) ====================
        {
            id: 'std-35-00',
            title: 'LVV Standard 35-00(02) - Braking Systems',
            description: 'Requirements for braking system modifications and installations. Covers hydraulic systems, components, and performance requirements.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-35-00-braking-systems.pdf',
            keywords: ['brakes', 'braking', 'hydraulic', 'master cylinder', 'disc', 'drum', '35-00'],
            difficulty: 'essential',
            priority: 1,
            year: 2016,
            summary: 'Core braking standard - covers all brake modifications. Essential for any brake-related certification work.'
        },
        {
            id: 'std-40-00',
            title: 'LVV Standard 40-00(00) - Chassis Modification & Construction',
            description: 'Requirements for chassis modifications including structural changes, material specifications, and construction methods.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-40-00-chassis-modification-construction.pdf',
            keywords: ['chassis', 'frame', 'structure', 'welding', 'construction', '40-00'],
            difficulty: 'essential',
            priority: 2,
            year: 2021,
            summary: 'Critical structural standard - covers all chassis work. Updated 2021 with new requirements.'
        },
        {
            id: 'std-45-30',
            title: 'LVV Standard 45-30(05) - Disability Adaptive Control Systems',
            description: 'Requirements for hand controls, pedal modifications, and other adaptive driving controls for people with disabilities.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-45-30-disability-adaptive-control-systems.pdf',
            keywords: ['disability', 'adaptive', 'hand controls', 'pedal', 'accessible', '45-30'],
            difficulty: 'specialist',
            priority: 3,
            year: 2016,
            summary: 'Specialist standard for disability vehicle modifications - hand controls, pedal extensions, etc.'
        },
        {
            id: 'std-45-60',
            title: 'LVV Standard 45-60(02) - Disability Transportation Systems',
            description: 'Requirements for wheelchair accessible vehicles, restraint systems, and passenger transportation for people with disabilities.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-45-60-disability-transportation-systems.pdf',
            keywords: ['disability', 'wheelchair', 'transportation', 'restraint', 'accessible', '45-60'],
            difficulty: 'specialist',
            priority: 4,
            year: 2016,
            summary: 'Wheelchair vehicle conversions, ramps, lifts, and restraint systems.'
        },
        {
            id: 'std-75-00',
            title: 'LVV Standard 75-00(01) - Electric & Hybrid Vehicles',
            description: 'Requirements for electric vehicle conversions and hybrid vehicle modifications including battery systems, motors, and safety.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-75-00-electric-hybrid-vehicles.pdf',
            keywords: ['electric', 'EV', 'hybrid', 'battery', 'motor', 'conversion', '75-00'],
            difficulty: 'specialist',
            priority: 5,
            year: 2013,
            summary: 'EV conversion requirements - batteries, motors, charging, safety isolation. Growing importance.'
        },
        {
            id: 'std-85-40',
            title: 'LVV Standard 85-40(04) - Engine & Drive-train Conversions',
            description: 'Requirements for engine swaps, transmission changes, and drivetrain modifications.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-85-40-engine-drivetrain-conversions.pdf',
            keywords: ['engine', 'swap', 'conversion', 'drivetrain', 'transmission', 'gearbox', '85-40'],
            difficulty: 'essential',
            priority: 6,
            year: 2021,
            summary: 'Core standard for engine swaps - covers mounting, cooling, exhaust, drivetrain integration. Updated 2021.'
        },
        {
            id: 'std-90-10',
            title: 'LVV Standard 90-10(03) - Exhaust Gas Emissions',
            description: 'Requirements for exhaust gas emissions compliance on modified vehicles.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-90-10-exhaust-gas-emissions.pdf',
            keywords: ['emissions', 'exhaust', 'gas', 'pollution', 'catalyst', '90-10'],
            difficulty: 'intermediate',
            priority: 7,
            year: 2016,
            summary: 'Emission requirements for modified vehicles - particularly engine conversions.'
        },
        {
            id: 'std-90-20',
            title: 'LVV Standard 90-20(06) - Exhaust Noise Emissions',
            description: 'Requirements for exhaust noise levels including testing procedures and limits.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-90-20-exhaust-noise-emissions.pdf',
            keywords: ['noise', 'exhaust', 'decibels', 'sound', 'muffler', '90-20'],
            difficulty: 'intermediate',
            priority: 8,
            year: 2025,
            summary: 'Exhaust noise limits and testing procedures. Updated 2025 with new testing requirements.'
        },
        {
            id: 'std-100-30',
            title: 'LVV Standard 100-30(02) - External Projections',
            description: 'Requirements for external projections, body modifications, and pedestrian safety.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-100-30-external-projections.pdf',
            keywords: ['external', 'projections', 'body', 'pedestrian', 'safety', '100-30'],
            difficulty: 'intermediate',
            priority: 9,
            year: 2016,
            summary: 'Body modifications affecting external projections - bonnets, guards, accessories.'
        },
        {
            id: 'std-105-00',
            title: 'LVV Standard 105-00(00) - Fuel Systems',
            description: 'Requirements for fuel system modifications including tanks, lines, and safety.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-105-00-fuel-systems.pdf',
            keywords: ['fuel', 'tank', 'fuel cell', 'lines', 'petrol', 'diesel', '105-00'],
            difficulty: 'essential',
            priority: 10,
            year: 2021,
            summary: 'Fuel system safety requirements - tank location, fuel lines, venting, fire prevention. Updated 2021.'
        },
        {
            id: 'std-125-00',
            title: 'LVV Standard 125-00(01) - Lighting Equipment',
            description: 'Requirements for lighting modifications including headlights, indicators, and auxiliary lighting.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-125-00-lighting-equipment.pdf',
            keywords: ['lighting', 'headlights', 'indicators', 'tail lights', 'LED', '125-00'],
            difficulty: 'intermediate',
            priority: 11,
            year: 2020,
            summary: 'Lighting requirements - placement, specifications, modifications. Updated 2020.'
        },
        {
            id: 'std-155-20',
            title: 'LVV Standard 155-20(03) - Door Retention Systems',
            description: 'Requirements for door hinges, latches, and retention systems.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-155-20-door-retention-systems.pdf',
            keywords: ['door', 'retention', 'hinges', 'latches', 'safety', '155-20'],
            difficulty: 'intermediate',
            priority: 12,
            year: 2016,
            summary: 'Door security requirements - hinges, latches, secondary catches.'
        },
        {
            id: 'std-155-30',
            title: 'LVV Standard 155-30(02) - Frontal Impact',
            description: 'Requirements for frontal impact protection and occupant safety in collisions.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-155-30-frontal-impact.pdf',
            keywords: ['frontal', 'impact', 'crash', 'collision', 'safety', '155-30'],
            difficulty: 'advanced',
            priority: 13,
            year: 2016,
            summary: 'Frontal crash protection requirements for modified vehicles.'
        },
        {
            id: 'std-155-40',
            title: 'LVV Standard 155-40(02) - Interior Impact',
            description: 'Requirements for interior impact protection including padding and energy absorption.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-155-40-interior-impact.pdf',
            keywords: ['interior', 'impact', 'padding', 'dashboard', 'safety', '155-40'],
            difficulty: 'advanced',
            priority: 14,
            year: 2016,
            summary: 'Interior safety requirements - dashboard, steering wheel, padding.'
        },
        {
            id: 'std-175-00',
            title: 'LVV Standard 175-00(03) - Seatbelt Anchorages',
            description: 'Requirements for seatbelt mounting points, strength, and positioning.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-175-00-seatbelt-anchorages.pdf',
            keywords: ['seatbelt', 'anchorage', 'mounting', 'harness', 'restraint', '175-00'],
            difficulty: 'essential',
            priority: 15,
            year: 2016,
            summary: 'Critical safety standard - seatbelt mounting requirements, load paths, materials.'
        },
        {
            id: 'std-185-00',
            title: 'LVV Standard 185-00(03) - Seats & Seat Anchorages',
            description: 'Requirements for seats and their mounting including strength and adjustment.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-185-00-seats-seat-anchorages.pdf',
            keywords: ['seats', 'anchorage', 'mounting', 'racing seat', 'adjustment', '185-00'],
            difficulty: 'essential',
            priority: 16,
            year: 2016,
            summary: 'Seat installation requirements - mounting strength, adjustment, racing seats.'
        },
        {
            id: 'std-185-40',
            title: 'LVV Standard 185-40(02) - Head Restraints',
            description: 'Requirements for head restraints including dimensions and positioning.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-185-40-head-restraints.pdf',
            keywords: ['head restraint', 'headrest', 'whiplash', 'safety', '185-40'],
            difficulty: 'intermediate',
            priority: 17,
            year: 2016,
            summary: 'Head restraint requirements for occupant protection.'
        },
        {
            id: 'std-190-70',
            title: 'LVV Standard 190-70(03) - Right-Hand Drive Conversions',
            description: 'Requirements for converting left-hand drive vehicles to right-hand drive.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-190-70-rhd-conversions.pdf',
            keywords: ['RHD', 'right hand drive', 'conversion', 'steering', 'import', '190-70'],
            difficulty: 'specialist',
            priority: 18,
            year: 2016,
            summary: 'RHD conversion requirements - steering, pedals, instruments, compliance.'
        },
        {
            id: 'std-195-00',
            title: 'LVV Standard 195-00(02) - Suspension Systems',
            description: 'Requirements for suspension modifications including lowering, lifting, and component changes.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-195-00-suspension-systems.pdf',
            keywords: ['suspension', 'lowering', 'lifting', 'coilover', 'airbag', 'springs', '195-00'],
            difficulty: 'essential',
            priority: 19,
            year: 2016,
            summary: 'Core suspension standard - lowering, lifting, component changes. Most common certification area.'
        },
        {
            id: 'std-200-30',
            title: 'LVV Standard 200-30(01) - Rear View Mirrors',
            description: 'Requirements for rear view mirror positioning and specifications.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-200-30-rear-view-mirrors.pdf',
            keywords: ['mirrors', 'rear view', 'vision', 'visibility', '200-30'],
            difficulty: 'beginner',
            priority: 20,
            year: 2018,
            summary: 'Mirror requirements - positioning, field of view, specifications.'
        },
        {
            id: 'std-205-00',
            title: 'LVV Standard 205-00(03) - Wheels & Tyres',
            description: 'Requirements for non-standard wheels and tyres including fitment and specifications.',
            category: 'STANDARDS',
            url: 'standards/lvv-standard-205-00-wheels-tyres.pdf',
            keywords: ['wheels', 'tyres', 'offset', 'PCD', 'load rating', 'fitment', '205-00'],
            difficulty: 'essential',
            priority: 21,
            year: 2021,
            summary: 'Wheel and tyre requirements - fitment, offset, load ratings. Updated 2021.'
        },
        {
            id: 'std-trike-formset',
            title: 'Trikes with Motorcycle Controls - Formsets Guide',
            description: 'Guidance document for trikes and motorcycles until specific LVV Standards are developed.',
            category: 'STANDARDS',
            url: 'standards/trikes-motorcycle-controls-formsets.pdf',
            keywords: ['trike', 'motorcycle', 'three wheel', 'formset'],
            difficulty: 'specialist',
            priority: 22,
            summary: 'Interim guide for trike certification until full standards developed.'
        },
        {
            id: 'std-index-vol2',
            title: 'LVV Standards Index - Volume 2',
            description: 'Index of LVV Standards Volume 2.',
            category: 'STANDARDS',
            url: 'standards/lvv-standards-index-vol2.pdf',
            keywords: ['index', 'standards', 'reference'],
            difficulty: 'reference',
            priority: 98,
            summary: 'Quick reference index to find the right standard.'
        },
        {
            id: 'std-index-vol3',
            title: 'LVV Standards Index - Volume 3',
            description: 'Index of LVV Standards Volume 3.',
            category: 'STANDARDS',
            url: 'standards/lvv-standards-index-vol3.pdf',
            keywords: ['index', 'standards', 'reference'],
            difficulty: 'reference',
            priority: 99,
            summary: 'Quick reference index to find the right standard.'
        },

        // ==================== MOTORCYCLE STANDARDS (145 Series) ====================
        {
            id: 'moto-145-15',
            title: 'LVV Standard 145-15(00) - Frame Modification & Construction - Motorcycles',
            description: 'Requirements for motorcycle frame modifications and scratch-built motorcycle frames.',
            category: 'MOTO_STANDARDS',
            url: 'standards/lvv-standard-145-15-frame-modification-construction-motorcycles.pdf',
            keywords: ['motorcycle', 'frame', 'chassis', 'construction', '145-15'],
            difficulty: 'specialist',
            priority: 1,
            year: 2026,
            summary: 'NEW 2026 - Motorcycle frame modification and construction requirements.'
        },
        {
            id: 'moto-145-35',
            title: 'LVV Standard 145-35(00) - Engine & Drive-train - Motorcycles',
            description: 'Requirements for motorcycle engine swaps and drivetrain modifications.',
            category: 'MOTO_STANDARDS',
            url: 'standards/lvv-standard-145-35-engine-drivetrain-motorcycles.pdf',
            keywords: ['motorcycle', 'engine', 'drivetrain', 'swap', '145-35'],
            difficulty: 'specialist',
            priority: 2,
            year: 2026,
            summary: 'NEW 2026 - Motorcycle engine and drivetrain conversion requirements.'
        },
        {
            id: 'moto-145-40',
            title: 'LVV Standard 145-40(00) - Fuel Systems - Motorcycles',
            description: 'Requirements for motorcycle fuel system modifications.',
            category: 'MOTO_STANDARDS',
            url: 'standards/lvv-standard-145-40-fuel-systems-motorcycles.pdf',
            keywords: ['motorcycle', 'fuel', 'tank', 'system', '145-40'],
            difficulty: 'specialist',
            priority: 3,
            year: 2026,
            summary: 'NEW 2026 - Motorcycle fuel system requirements.'
        },
        {
            id: 'moto-145-45',
            title: 'LVV Standard 145-45(00) - Exhaust Noise Emissions - Motorcycles',
            description: 'Requirements for motorcycle exhaust noise levels and testing.',
            category: 'MOTO_STANDARDS',
            url: 'standards/lvv-standard-145-45-exhaust-noise-motorcycles.pdf',
            keywords: ['motorcycle', 'exhaust', 'noise', 'emissions', '145-45'],
            difficulty: 'specialist',
            priority: 4,
            year: 2025,
            summary: 'NEW 2025 - Motorcycle exhaust noise requirements and testing.'
        },
        {
            id: 'moto-145-55',
            title: 'LVV Standard 145-55(00) - Body Modification & Construction - Motorcycles',
            description: 'Requirements for motorcycle body and bodywork modifications.',
            category: 'MOTO_STANDARDS',
            url: 'standards/lvv-standard-145-55-body-modification-motorcycles.pdf',
            keywords: ['motorcycle', 'body', 'bodywork', 'fairing', '145-55'],
            difficulty: 'specialist',
            priority: 5,
            year: 2026,
            summary: 'NEW 2026 - Motorcycle body modification requirements.'
        },
        {
            id: 'moto-145-60',
            title: 'LVV Standard 145-60(00) - Seating - Motorcycles',
            description: 'Requirements for motorcycle seating modifications.',
            category: 'MOTO_STANDARDS',
            url: 'standards/lvv-standard-145-60-seating-motorcycles.pdf',
            keywords: ['motorcycle', 'seat', 'seating', 'pillion', '145-60'],
            difficulty: 'specialist',
            priority: 6,
            year: 2026,
            summary: 'NEW 2026 - Motorcycle seating requirements.'
        },
        {
            id: 'moto-145-65',
            title: 'LVV Standard 145-65(00) - Glazing & Vision - Motorcycles',
            description: 'Requirements for motorcycle windscreens and visibility.',
            category: 'MOTO_STANDARDS',
            url: 'standards/lvv-standard-145-65-glazing-vision-motorcycles.pdf',
            keywords: ['motorcycle', 'glazing', 'windscreen', 'vision', '145-65'],
            difficulty: 'specialist',
            priority: 7,
            year: 2026,
            summary: 'NEW 2026 - Motorcycle glazing and vision requirements.'
        },

        // ==================== CERTIFICATION THRESHOLDS ====================
        {
            id: 'threshold-guide',
            title: 'LVV Certification Threshold Guide',
            description: 'Defines WHEN LVV certification is required. Three groups: Always required, Sometimes required (threshold-dependent), Never required.',
            category: 'THRESHOLD',
            url: 'certification-threshold/lvvta-certification-threshold-guide.pdf',
            keywords: ['threshold', 'when required', 'modification level', 'groups', 'required'],
            difficulty: 'essential',
            priority: 1,
            summary: 'CRITICAL: Tells you when certification IS and IS NOT required. Group 1=Always, Group 2=If exceeds threshold, Group 3=Never.'
        },
        {
            id: 'threshold-index',
            title: 'Certification Threshold Index',
            description: 'Index to quickly find threshold requirements for specific modifications.',
            category: 'THRESHOLD',
            url: 'certification-threshold/certification-threshold-index.pdf',
            keywords: ['threshold', 'index', 'quick reference'],
            difficulty: 'essential',
            priority: 2,
            summary: 'Quick lookup for modification thresholds.'
        },

        // ==================== NZ CAR CONSTRUCTION MANUAL (Complete) ====================
        {
            id: 'nzccm-full',
            title: 'NZ Car Construction Manual (Complete Download)',
            description: 'The complete NZ Car Construction Manual - FREE electronic download. Comprehensive guide for scratch-built vehicles.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/nz-car-construction-manual-complete.pdf',
            keywords: ['NZCCM', 'complete', 'full', 'construction', 'scratch-built'],
            difficulty: 'essential',
            priority: 1,
            summary: 'The complete manual - download the whole thing for comprehensive reference.'
        },
        {
            id: 'nzccm-ch1',
            title: 'NZCCM Chapter 1 - Low Volume Vehicle System',
            description: 'Introduction to the LVV system and how it applies to scratch-built vehicles.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/chapter-1-low-volume-vehicle-system.pdf',
            keywords: ['LVV system', 'introduction', 'overview'],
            difficulty: 'beginner',
            priority: 2,
            summary: 'Overview of the LVV system for builders.'
        },
        {
            id: 'nzccm-ch2',
            title: 'NZCCM Chapter 2 - About This Manual',
            description: 'How to use the NZ Car Construction Manual effectively.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/chapter-2-about-this-manual.pdf',
            keywords: ['manual', 'how to use', 'guide'],
            difficulty: 'beginner',
            priority: 3,
            summary: 'Start here - explains how to navigate and use the manual.'
        },
        {
            id: 'nzccm-ch3',
            title: 'NZCCM Chapter 3 - Authority Card Process',
            description: 'The authority card approval process for scratch-built vehicles.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/chapter-3-authority-card-process.pdf',
            keywords: ['authority card', 'approval', 'process', 'administration'],
            difficulty: 'intermediate',
            priority: 4,
            summary: 'How to get authority card approval for a scratch-built vehicle.'
        },
        {
            id: 'nzccm-ch4',
            title: 'NZCCM Chapter 4 - Build Approval Process',
            description: 'The build approval process and requirements for scratch-built vehicles.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/chapter-4-build-approval-process.pdf',
            keywords: ['build approval', 'process', 'requirements'],
            difficulty: 'intermediate',
            priority: 5,
            summary: 'Getting your build approved - the step-by-step process.'
        },
        {
            id: 'nzccm-ch5',
            title: 'NZCCM Chapter 5 - Chassis Modification & Construction',
            description: 'Comprehensive chassis design, modification, and construction requirements.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/chapter-5-chassis-modification-construction.pdf',
            keywords: ['chassis', 'frame', 'construction', 'welding', 'structure', 'materials'],
            difficulty: 'advanced',
            priority: 6,
            summary: 'CRITICAL chapter - chassis types, materials, welding, structural calculations.'
        },
        {
            id: 'nzccm-ch6',
            title: 'NZCCM Chapter 6 - Suspension Systems',
            description: 'Suspension design and construction for scratch-built vehicles.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/chapter-6-suspension-systems.pdf',
            keywords: ['suspension', 'springs', 'dampers', 'geometry', 'IFS', 'IRS'],
            difficulty: 'advanced',
            priority: 7,
            summary: 'Suspension design principles, geometry, and component requirements.'
        },
        {
            id: 'nzccm-ch7',
            title: 'NZCCM Chapter 7 - Steering Systems',
            description: 'Steering system design and requirements for scratch-built vehicles.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/chapter-7-steering-systems.pdf',
            keywords: ['steering', 'rack', 'geometry', 'ackerman', 'column'],
            difficulty: 'advanced',
            priority: 8,
            summary: 'Steering geometry, component selection, and safety requirements.'
        },
        {
            id: 'nzccm-ch8',
            title: 'NZCCM Chapter 8 - Braking Systems',
            description: 'Brake system design and requirements for scratch-built vehicles.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/chapter-8-braking-systems.pdf',
            keywords: ['brakes', 'hydraulic', 'master cylinder', 'disc', 'drum', 'pedal ratio'],
            difficulty: 'advanced',
            priority: 9,
            summary: 'CRITICAL safety chapter - brake design, calculations, components.'
        },
        {
            id: 'nzccm-ch9',
            title: 'NZCCM Chapter 9 - Engine & Drive-train',
            description: 'Engine installation and drivetrain requirements.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/chapter-9-engine-drivetrain.pdf',
            keywords: ['engine', 'drivetrain', 'transmission', 'driveshaft', 'cooling', 'mounting'],
            difficulty: 'advanced',
            priority: 10,
            summary: 'Engine mounting, drivetrain layout, cooling systems, driveshaft requirements.'
        },
        {
            id: 'nzccm-ch10',
            title: 'NZCCM Chapter 10 - Fuel Systems',
            description: 'Fuel system design and safety requirements.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/chapter-10-fuel-systems.pdf',
            keywords: ['fuel', 'tank', 'lines', 'safety', 'venting', 'fire'],
            difficulty: 'advanced',
            priority: 11,
            summary: 'Fuel system safety - tank location, lines, venting, fire prevention.'
        },
        {
            id: 'nzccm-ch11',
            title: 'NZCCM Chapter 11 - Emission Systems Part 1 - Exhaust Noise',
            description: 'Exhaust noise requirements and compliance.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/chapter-11-emission-systems-exhaust-noise.pdf',
            keywords: ['exhaust', 'noise', 'emissions', 'muffler', 'decibels'],
            difficulty: 'intermediate',
            priority: 12,
            summary: 'Exhaust noise limits and compliance methods.'
        },
        {
            id: 'nzccm-ch12',
            title: 'NZCCM Chapter 12 - Wheels and Tyres',
            description: 'Wheel and tyre requirements for scratch-built vehicles.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/chapter-12-wheels-tyres.pdf',
            keywords: ['wheels', 'tyres', 'hubs', 'PCD', 'offset', 'load rating'],
            difficulty: 'intermediate',
            priority: 13,
            summary: 'Wheel and tyre specifications, hub requirements.'
        },
        {
            id: 'nzccm-ch13',
            title: 'NZCCM Chapter 13 - Body Modification & Construction',
            description: 'Body construction requirements for scratch-built vehicles.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/chapter-13-body-modification-construction.pdf',
            keywords: ['body', 'bodywork', 'panels', 'fibreglass', 'guards'],
            difficulty: 'intermediate',
            priority: 14,
            summary: 'Body construction, materials, mounting requirements.'
        },
        {
            id: 'nzccm-ch14',
            title: 'NZCCM Chapter 14 - Seats, Seatbelts & Anchorages',
            description: 'Seating and restraint system requirements.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/chapter-14-seats-seatbelts-anchorages.pdf',
            keywords: ['seats', 'seatbelts', 'anchorage', 'harness', 'restraint'],
            difficulty: 'essential',
            priority: 15,
            summary: 'CRITICAL safety - seating and seatbelt mounting requirements.'
        },
        {
            id: 'nzccm-ch15',
            title: 'NZCCM Chapter 15 - Glazing & Vision',
            description: 'Windscreen and glazing requirements.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/chapter-15-glazing-vision.pdf',
            keywords: ['glazing', 'windscreen', 'glass', 'visibility', 'mirrors'],
            difficulty: 'intermediate',
            priority: 16,
            summary: 'Windscreen, glazing, mirror, and visibility requirements.'
        },
        {
            id: 'nzccm-ch16',
            title: 'NZCCM Chapter 16 - Interior Equipment',
            description: 'Interior equipment and safety requirements.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/chapter-16-interior-equipment.pdf',
            keywords: ['interior', 'dashboard', 'controls', 'padding', 'safety'],
            difficulty: 'intermediate',
            priority: 17,
            summary: 'Interior safety, padding, control placement.'
        },
        {
            id: 'nzccm-ch17',
            title: 'NZCCM Chapter 17 - Lighting Equipment',
            description: 'Lighting system requirements for scratch-built vehicles.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/chapter-17-lighting-equipment.pdf',
            keywords: ['lighting', 'headlights', 'indicators', 'tail lights'],
            difficulty: 'intermediate',
            priority: 18,
            summary: 'Lighting placement, specifications, legal requirements.'
        },
        {
            id: 'nzccm-ch18',
            title: 'NZCCM Chapter 18 - Attachment Systems',
            description: 'Attachment and fastening system requirements.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/chapter-18-attachment-systems.pdf',
            keywords: ['attachment', 'fasteners', 'bolts', 'mounting'],
            difficulty: 'intermediate',
            priority: 19,
            summary: 'Fastener specifications and attachment requirements.'
        },
        {
            id: 'nzccm-ch19',
            title: 'NZCCM Chapter 19 - Vehicle Operation',
            description: 'Operational requirements and final vehicle checks.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/chapter-19-vehicle-operation.pdf',
            keywords: ['operation', 'testing', 'final checks', 'commissioning'],
            difficulty: 'intermediate',
            priority: 20,
            summary: 'Final operational checks and commissioning procedures.'
        },
        {
            id: 'nzccm-intro',
            title: 'NZCCM Introduction',
            description: 'Introduction section of the NZ Car Construction Manual.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/introduction.pdf',
            keywords: ['introduction', 'overview'],
            difficulty: 'beginner',
            priority: 21,
            summary: 'Introduction to the manual.'
        },
        {
            id: 'nzccm-terms',
            title: 'NZCCM Terms and Definitions',
            description: 'Technical terminology and definitions used throughout the manual.',
            category: 'NZCCM',
            url: 'nz-car-construction-manual/terms-and-definitions.pdf',
            keywords: ['terms', 'definitions', 'glossary', 'terminology'],
            difficulty: 'beginner',
            priority: 22,
            summary: 'Essential glossary - understand the technical language.'
        },

        // ==================== NZ MOTORCYCLE CONSTRUCTION MANUAL ====================
        {
            id: 'nzmcm-ch5',
            title: 'NZMCM Chapter 5 - Frame Modification & Construction - Motorcycles',
            description: 'Frame construction requirements for scratch-built motorcycles.',
            category: 'NZMCM',
            url: 'nz-motorcycle-construction-manual/chapter-5-frame-modification-construction-motorcycles.pdf',
            keywords: ['motorcycle', 'frame', 'construction', 'chassis'],
            difficulty: 'specialist',
            priority: 1,
            summary: 'Motorcycle frame construction requirements.'
        },
        {
            id: 'nzmcm-ch9',
            title: 'NZMCM Chapter 9 - Engine & Drive-train - Motorcycles',
            description: 'Engine and drivetrain requirements for motorcycles.',
            category: 'NZMCM',
            url: 'nz-motorcycle-construction-manual/chapter-9-engine-drivetrain-motorcycles.pdf',
            keywords: ['motorcycle', 'engine', 'drivetrain', 'chain', 'belt'],
            difficulty: 'specialist',
            priority: 2,
            summary: 'Motorcycle engine and drivetrain requirements.'
        },
        {
            id: 'nzmcm-ch10',
            title: 'NZMCM Chapter 10 - Fuel Systems - Motorcycles',
            description: 'Fuel system requirements for motorcycles.',
            category: 'NZMCM',
            url: 'nz-motorcycle-construction-manual/chapter-10-fuel-systems-motorcycles.pdf',
            keywords: ['motorcycle', 'fuel', 'tank', 'system'],
            difficulty: 'specialist',
            priority: 3,
            summary: 'Motorcycle fuel system requirements.'
        },
        {
            id: 'nzmcm-ch11',
            title: 'NZMCM Chapter 11 - Emission Systems Part 1 - Noise - Motorcycles',
            description: 'Exhaust noise requirements for motorcycles.',
            category: 'NZMCM',
            url: 'nz-motorcycle-construction-manual/chapter-11-emission-systems-noise-motorcycles.pdf',
            keywords: ['motorcycle', 'exhaust', 'noise', 'emissions'],
            difficulty: 'specialist',
            priority: 4,
            summary: 'Motorcycle exhaust noise requirements.'
        },
        {
            id: 'nzmcm-ch13',
            title: 'NZMCM Chapter 13 - Body Modification & Construction - Motorcycles',
            description: 'Body and fairing requirements for motorcycles.',
            category: 'NZMCM',
            url: 'nz-motorcycle-construction-manual/chapter-13-body-modification-construction-motorcycles.pdf',
            keywords: ['motorcycle', 'body', 'fairing', 'bodywork'],
            difficulty: 'specialist',
            priority: 5,
            summary: 'Motorcycle body and fairing requirements.'
        },
        {
            id: 'nzmcm-ch14',
            title: 'NZMCM Chapter 14 - Seating - Motorcycles',
            description: 'Seating requirements for motorcycles.',
            category: 'NZMCM',
            url: 'nz-motorcycle-construction-manual/chapter-14-seating-motorcycles.pdf',
            keywords: ['motorcycle', 'seat', 'seating', 'pillion'],
            difficulty: 'specialist',
            priority: 6,
            summary: 'Motorcycle seating requirements.'
        },
        {
            id: 'nzmcm-ch15',
            title: 'NZMCM Chapter 15 - Glazing & Vision - Motorcycles',
            description: 'Windscreen and vision requirements for motorcycles.',
            category: 'NZMCM',
            url: 'nz-motorcycle-construction-manual/chapter-15-glazing-vision-motorcycles.pdf',
            keywords: ['motorcycle', 'windscreen', 'glazing', 'vision'],
            difficulty: 'specialist',
            priority: 7,
            summary: 'Motorcycle glazing and vision requirements.'
        },

        // ==================== OPERATING REQUIREMENTS SCHEDULE ====================
        {
            id: 'ors-main',
            title: 'Operating Requirements Schedule (Main Document)',
            description: 'The main ORS document - operational and procedural rules for LVV certification. NOTE: Being updated in chapters.',
            category: 'ORS',
            url: 'operating-requirements-schedule/operating-requirements-schedule.pdf',
            keywords: ['ORS', 'operations', 'procedures', 'rules'],
            difficulty: 'essential',
            priority: 1,
            summary: 'Main ORS document - refer to individual chapters for latest versions.'
        },
        {
            id: 'ors-ch1',
            title: 'ORS Chapter 1 - Background to LVV Certification System',
            description: 'Background and history of the LVV certification system.',
            category: 'ORS',
            url: 'operating-requirements-schedule/chapter-1-background-lvv-certification-system.pdf',
            keywords: ['background', 'history', 'introduction'],
            difficulty: 'beginner',
            priority: 2,
            summary: 'History and background of the LVV system.'
        },
        {
            id: 'ors-ch2',
            title: 'ORS Chapter 2 - Vehicle Classifications',
            description: 'Definitions and classifications of low volume vehicles.',
            category: 'ORS',
            url: 'operating-requirements-schedule/chapter-2-vehicle-classifications.pdf',
            keywords: ['classifications', 'modified', 'scratch-built', 'replica', 'reproduction'],
            difficulty: 'essential',
            priority: 3,
            summary: 'CRITICAL: Defines Modified, Scratch-built, Historic Replica, Reproduction.'
        },
        {
            id: 'ors-ch3',
            title: 'ORS Chapter 3 - Certification Categories',
            description: 'LVV Certifier appointment categories - GMV, Heavy, ONT, Specialist.',
            category: 'ORS',
            url: 'operating-requirements-schedule/chapter-3-certification-categories.pdf',
            keywords: ['categories', 'GMV', 'heavy', 'ONT', 'specialist', 'appointment'],
            difficulty: 'essential',
            priority: 4,
            summary: 'Certifier categories - what each category can certify.'
        },
        {
            id: 'ors-ch4',
            title: 'ORS Chapter 4 - Certifier Background Criteria',
            description: 'Requirements to become an LVV Certifier - qualifications, experience, attributes.',
            category: 'ORS',
            url: 'operating-requirements-schedule/chapter-4-certifier-background-criteria.pdf',
            keywords: ['qualifications', 'experience', 'criteria', 'requirements', 'attributes'],
            difficulty: 'essential',
            priority: 5,
            summary: 'ESSENTIAL: What you need to become a certifier - quals, experience, integrity.'
        },
        {
            id: 'ors-ch5',
            title: 'ORS Chapter 5 - Certifier Application & Appointment',
            description: 'The application and appointment process for LVV Certifiers.',
            category: 'ORS',
            url: 'operating-requirements-schedule/chapter-5-certifier-application-appointment.pdf',
            keywords: ['application', 'appointment', 'process', 'training'],
            difficulty: 'essential',
            priority: 6,
            summary: 'How to apply and get appointed as an LVV Certifier.'
        },
        {
            id: 'ors-ch6',
            title: 'ORS Chapter 6 - Documents, Equipment & Premises',
            description: 'Requirements for certifier documentation, equipment, and premises.',
            category: 'ORS',
            url: 'operating-requirements-schedule/chapter-6-documents-equipment-premises.pdf',
            keywords: ['documents', 'equipment', 'premises', 'tools'],
            difficulty: 'intermediate',
            priority: 7,
            summary: 'What documents, equipment, and facilities a certifier needs.'
        },
        {
            id: 'ors-ch9',
            title: 'ORS Chapter 9 - Submission of Certification Files',
            description: 'How to submit certification files to LVVTA.',
            category: 'ORS',
            url: 'operating-requirements-schedule/chapter-9-submission-certification-files.pdf',
            keywords: ['submission', 'files', 'documentation', 'process'],
            difficulty: 'intermediate',
            priority: 8,
            summary: 'File submission procedures and requirements.'
        },
        {
            id: 'ors-ch10',
            title: 'ORS Chapter 10 - File Review System',
            description: 'How LVVTA reviews certification files.',
            category: 'ORS',
            url: 'operating-requirements-schedule/chapter-10-file-review-system.pdf',
            keywords: ['review', 'audit', 'quality', 'checking'],
            difficulty: 'intermediate',
            priority: 9,
            summary: 'The file review and quality assurance process.'
        },
        {
            id: 'ors-ch11',
            title: 'ORS Chapter 11 - Certifier Error Recording & Reporting',
            description: 'How errors are recorded and reported.',
            category: 'ORS',
            url: 'operating-requirements-schedule/chapter-11-certifier-error-recording-reporting.pdf',
            keywords: ['errors', 'recording', 'reporting', 'mistakes'],
            difficulty: 'intermediate',
            priority: 10,
            summary: 'Error handling and reporting procedures.'
        },
        {
            id: 'ors-ch12',
            title: 'ORS Chapter 12 - Certification Plates & Labels',
            description: 'Requirements for LVV certification plates and labels.',
            category: 'ORS',
            url: 'operating-requirements-schedule/chapter-12-certification-plates-labels.pdf',
            keywords: ['plates', 'labels', 'identification', 'EDP'],
            difficulty: 'intermediate',
            priority: 11,
            summary: 'Certification plate types, attachment, and requirements.'
        },
        {
            id: 'ors-ch14',
            title: 'ORS Chapter 14 - LVVTA Services & Support',
            description: 'Support services available from LVVTA.',
            category: 'ORS',
            url: 'operating-requirements-schedule/chapter-14-lvvta-services-support.pdf',
            keywords: ['services', 'support', 'help', 'technical'],
            difficulty: 'beginner',
            priority: 12,
            summary: 'What support is available from LVVTA.'
        },
        {
            id: 'ors-ch16',
            title: 'ORS Chapter 16 - LVVTA-NZTA Co-regulatory Relationship',
            description: 'The relationship between LVVTA and NZTA/Waka Kotahi.',
            category: 'ORS',
            url: 'operating-requirements-schedule/chapter-16-lvvta-nzta-relationship.pdf',
            keywords: ['NZTA', 'Waka Kotahi', 'regulatory', 'relationship'],
            difficulty: 'intermediate',
            priority: 13,
            summary: 'How LVVTA and NZTA work together.'
        },
        {
            id: 'ors-index',
            title: 'Operating Requirements Schedule Index',
            description: 'Index to the ORS document.',
            category: 'ORS',
            url: 'operating-requirements-schedule/operating-requirements-schedule-index.pdf',
            keywords: ['index', 'reference'],
            difficulty: 'reference',
            priority: 99,
            summary: 'Quick reference index for ORS.'
        },

        // ==================== LVV CODE ====================
        {
            id: 'lvv-code',
            title: 'The Low Volume Vehicle Code',
            description: 'The legal framework for the LVV certification system. Empowered by Land Transport Rule 35001/1.',
            category: 'CODE',
            url: 'lvv-code/the-low-volume-vehicle-code.pdf',
            keywords: ['code', 'legal', 'legislation', 'framework', 'authority'],
            difficulty: 'essential',
            priority: 1,
            summary: 'THE foundational legal document - gives LVV certification its authority.'
        },
        {
            id: 'lvv-code-index',
            title: 'LVV Code Index',
            description: 'Index to the LVV Code.',
            category: 'CODE',
            url: 'lvv-code/lvv-code-index.pdf',
            keywords: ['index', 'reference'],
            difficulty: 'reference',
            priority: 2,
            summary: 'Quick reference index for the Code.'
        },

        // ==================== LATEST INFORMATION SHEETS ====================
        {
            id: 'info-03-2025',
            title: 'Info 03-2025 - Changes to Objective Exhaust Noise Testing',
            description: 'NEW! Latest changes to exhaust noise testing procedures.',
            category: 'INFO_TECH',
            url: 'information-sheets/info-03-2025-changes-objective-exhaust-noise-testing.pdf',
            keywords: ['exhaust', 'noise', 'testing', '2025', 'new'],
            difficulty: 'intermediate',
            priority: 1,
            year: 2025,
            summary: 'NEW 2025 - Updated exhaust noise testing requirements.'
        },
        {
            id: 'info-02-2025',
            title: 'Info 02-2025 - Positioning of Wheelchairs, Restraints, and Seats',
            description: 'NEW! Requirements for wheelchair positioning in vehicles not subject to PSV Rule.',
            category: 'INFO_NONTECH',
            url: 'information-sheets/info-02-2025-wheelchair-positioning-restraints-seats.pdf',
            keywords: ['wheelchair', 'positioning', 'restraints', 'disability', '2025'],
            difficulty: 'specialist',
            priority: 2,
            year: 2025,
            summary: 'NEW 2025 - Wheelchair and restraint positioning guidance.'
        },
        {
            id: 'info-01-2025',
            title: 'Info 01-2025 - High-sided Race Seats and Three-point Seatbelts',
            description: 'NEW! Requirements for race seats with three-point seatbelts.',
            category: 'INFO_NONTECH',
            url: 'information-sheets/info-01-2025-high-sided-race-seats-three-point-seatbelts.pdf',
            keywords: ['race seats', 'seatbelts', 'harness', 'safety', '2025'],
            difficulty: 'intermediate',
            priority: 3,
            year: 2025,
            summary: 'NEW 2025 - Race seat and seatbelt combination requirements.'
        },
        {
            id: 'info-01-2024',
            title: 'Info 01-2024 - Steering Column Test',
            description: 'Steering column testing requirements and procedures.',
            category: 'INFO_TECH',
            url: 'information-sheets/info-01-2024-steering-column-test.pdf',
            keywords: ['steering', 'column', 'test', 'cyclic'],
            difficulty: 'intermediate',
            priority: 4,
            year: 2024,
            summary: 'Steering column testing for aftermarket and modified columns.'
        },
        {
            id: 'info-03-2023',
            title: 'Info 03-2023 - LVVTA Classic Car Retro-fit Seatbelt Structure',
            description: 'Retro-fit seatbelt structure for classic cars.',
            category: 'INFO_TECH',
            url: 'information-sheets/info-03-2023-classic-car-retrofit-seatbelt-structure.pdf',
            keywords: ['classic', 'seatbelt', 'retrofit', 'structure'],
            difficulty: 'intermediate',
            priority: 5,
            year: 2023,
            summary: 'How to install seatbelts in classic cars without proper anchorages.'
        },
        {
            id: 'info-02-2023',
            title: 'Info 02-2023 - Aftermarket Tubular Suspension Arms with Cantilever Ball Joints',
            description: 'Safety alert and requirements for cantilever-style ball joints.',
            category: 'INFO_TECH',
            url: 'information-sheets/info-02-2023-aftermarket-tubular-suspension-arms-cantilever-ball-joints.pdf',
            keywords: ['suspension', 'arms', 'cantilever', 'ball joint', 'safety'],
            difficulty: 'intermediate',
            priority: 6,
            year: 2023,
            summary: 'WARNING: Cantilever ball joint issues and requirements.'
        },
        {
            id: 'info-01-2023',
            title: 'Info 01-2023 - Copies of Astro Supreme-brand Wheels',
            description: 'Safety alert regarding counterfeit Supreme-brand wheels.',
            category: 'INFO_TECH',
            url: 'information-sheets/info-01-2023-copies-astro-supreme-brand-wheels.pdf',
            keywords: ['wheels', 'supreme', 'counterfeit', 'safety', 'alert'],
            difficulty: 'essential',
            priority: 7,
            year: 2023,
            summary: 'WARNING: Counterfeit wheel identification and rejection.'
        },
        {
            id: 'info-01-2022',
            title: 'Info 01-2022 - Wheel Adaptor Minimum Specifications',
            description: 'Minimum specifications for wheel adaptors/spacers.',
            category: 'INFO_TECH',
            url: 'information-sheets/info-01-2022-wheel-adaptor-minimum-specifications.pdf',
            keywords: ['wheel', 'adaptor', 'spacer', 'specifications'],
            difficulty: 'intermediate',
            priority: 8,
            year: 2022,
            summary: 'Wheel adaptor thickness, material, and design requirements.'
        },
        {
            id: 'info-02-2022',
            title: 'Info 02-2022 - LVV Certification of GVM Upgrades',
            description: 'Requirements for Gross Vehicle Mass upgrade certifications.',
            category: 'INFO_NONTECH',
            url: 'information-sheets/info-02-2022-lvv-certification-gvm-upgrades.pdf',
            keywords: ['GVM', 'gross vehicle mass', 'upgrade', 'weight'],
            difficulty: 'specialist',
            priority: 9,
            year: 2022,
            summary: 'GVM upgrade certification process and requirements.'
        },

        // ==================== KEY TECHNICAL INFORMATION SHEETS ====================
        {
            id: 'info-09-2021',
            title: 'Info 09-2021 - Raised Vehicle Stability Calculation',
            description: 'Stability calculation requirements for raised/lifted vehicles.',
            category: 'INFO_TECH',
            url: 'information-sheets/info-09-2021-raised-vehicle-stability-calculation.pdf',
            keywords: ['raised', 'lifted', 'stability', 'calculation', '4WD'],
            difficulty: 'advanced',
            priority: 10,
            year: 2021,
            summary: 'IMPORTANT: Stability calculations for lifted 4WD vehicles.'
        },
        {
            id: 'info-07-2021',
            title: 'Info 07-2021 - Power to Manual Steering Conversion',
            description: 'Converting power steering to manual steering.',
            category: 'INFO_TECH',
            url: 'information-sheets/info-07-2021-power-to-manual-steering-conversion.pdf',
            keywords: ['steering', 'power', 'manual', 'conversion'],
            difficulty: 'intermediate',
            priority: 11,
            year: 2021,
            summary: 'Requirements for removing power steering.'
        },
        {
            id: 'info-05-2020',
            title: 'Info 05-2020 - Tyre Track and Protrusion Beyond Mudguards',
            description: 'Requirements for tyres protruding beyond guards.',
            category: 'INFO_TECH',
            url: 'information-sheets/info-05-2020-tyre-track-protrusion-mudguards.pdf',
            keywords: ['tyres', 'track', 'protrusion', 'mudguards', 'guards'],
            difficulty: 'intermediate',
            priority: 12,
            year: 2020,
            summary: 'How much tyre can stick out beyond the guards.'
        },
        {
            id: 'info-04-2020',
            title: 'Info 04-2020 - Spherical Bearing Rod End Conversion',
            description: 'Requirements for rose joint/spherical bearing conversions in steering and suspension.',
            category: 'INFO_TECH',
            url: 'information-sheets/info-04-2020-spherical-bearing-rod-end-conversion.pdf',
            keywords: ['spherical', 'bearing', 'rod end', 'rose joint', 'heim'],
            difficulty: 'intermediate',
            priority: 13,
            year: 2020,
            summary: 'Rose joint/heim joint requirements for tie-rods and suspension.'
        },
        {
            id: 'info-02-2020',
            title: 'Info 02-2020 - Wheelchair Restraint & Docking Station Rating Guide',
            description: 'Rating guide for wheelchair restraint systems.',
            category: 'INFO_TECH',
            url: 'information-sheets/info-02-2020-wheelchair-restraint-docking-station-rating-guide.pdf',
            keywords: ['wheelchair', 'restraint', 'docking', 'rating', 'disability'],
            difficulty: 'specialist',
            priority: 14,
            year: 2020,
            summary: 'Rating requirements for wheelchair restraint systems.'
        },
        {
            id: 'info-01-2020',
            title: 'Info 01-2020 - Removal of Seats Fitted with Side-impact Airbags',
            description: 'Requirements for removing seats with integrated airbags.',
            category: 'INFO_TECH',
            url: 'information-sheets/info-01-2020-removal-seats-side-impact-airbags.pdf',
            keywords: ['seats', 'airbags', 'side impact', 'removal', 'SRS'],
            difficulty: 'intermediate',
            priority: 15,
            year: 2020,
            summary: 'IMPORTANT: When and how airbag-equipped seats can be removed.'
        },
        {
            id: 'info-01-2018',
            title: 'Info 01-2018 - Welding Process for Cast or Forged Components',
            description: 'Welding requirements for cast and forged parts.',
            category: 'INFO_TECH',
            url: 'information-sheets/info-01-2018-welding-process-cast-forged-components.pdf',
            keywords: ['welding', 'cast', 'forged', 'components', 'repair'],
            difficulty: 'advanced',
            priority: 16,
            year: 2018,
            summary: 'Critical welding requirements for cast/forged suspension and steering components.'
        },
        {
            id: 'info-01-2016',
            title: 'Info 01-2016 - Custom IFS/IRS Approval Application Guide',
            description: 'Guide for getting custom independent suspension approved.',
            category: 'INFO_TECH',
            url: 'information-sheets/info-01-2016-custom-ifs-irs-approval-application-guide.pdf',
            keywords: ['IFS', 'IRS', 'suspension', 'custom', 'approval'],
            difficulty: 'advanced',
            priority: 17,
            year: 2016,
            summary: 'How to get custom suspension systems approved.'
        },
        {
            id: 'info-01-2009',
            title: 'Info 01-2009 - Tyre Size to Rim Size Compatibility Guide',
            description: 'Guide for determining tyre and rim compatibility.',
            category: 'INFO_TECH',
            url: 'information-sheets/info-01-2009-tyre-size-rim-size-compatibility-guide.pdf',
            keywords: ['tyre', 'rim', 'compatibility', 'size', 'stretch'],
            difficulty: 'essential',
            priority: 18,
            year: 2009,
            summary: 'ESSENTIAL: What tyre sizes fit what rim widths. V5 released June 2021.'
        },

        // ==================== SUPPLEMENTARY INFORMATION ====================
        {
            id: 'tech-bulletin-1',
            title: 'NZHRA Tech Bulletin 1 - Electroplating of High Tensile Fasteners',
            description: 'Guidance on electroplating high-tensile bolts.',
            category: 'SUPPLEMENTARY',
            url: 'supplementary-information/nzhra-tech-bulletin-1-electroplating-high-tensile-fasteners.pdf',
            keywords: ['electroplating', 'fasteners', 'bolts', 'hydrogen embrittlement'],
            difficulty: 'advanced',
            priority: 1,
            summary: 'WARNING: Electroplating can cause hydrogen embrittlement in high-tensile bolts.'
        },
        {
            id: 'tech-bulletin-2',
            title: 'NZHRA Tech Bulletin 2 - Use of Stainless Steel Fasteners',
            description: 'Guidance on using stainless steel fasteners.',
            category: 'SUPPLEMENTARY',
            url: 'supplementary-information/nzhra-tech-bulletin-2-stainless-steel-fasteners.pdf',
            keywords: ['stainless', 'steel', 'fasteners', 'bolts'],
            difficulty: 'intermediate',
            priority: 2,
            summary: 'When stainless fasteners are and are not appropriate.'
        },
        {
            id: 'tech-bulletin-4',
            title: 'NZHRA Tech Bulletin 4 - Certifiers A-arm IFS Guide',
            description: 'Guide for certifying A-arm independent front suspension.',
            category: 'SUPPLEMENTARY',
            url: 'supplementary-information/nzhra-tech-bulletin-4-certifiers-a-arm-ifs-guide.pdf',
            keywords: ['A-arm', 'IFS', 'suspension', 'guide'],
            difficulty: 'advanced',
            priority: 3,
            summary: 'A-arm IFS certification guidance.'
        },
        {
            id: 'tech-bulletin-5',
            title: 'NZHRA Tech Bulletin 5 - Builders Welding Guide',
            description: 'Welding guide for vehicle builders.',
            category: 'SUPPLEMENTARY',
            url: 'supplementary-information/nzhra-tech-bulletin-5-builders-welding-guide.pdf',
            keywords: ['welding', 'guide', 'MIG', 'TIG', 'builders'],
            difficulty: 'advanced',
            priority: 4,
            summary: 'Welding requirements and techniques for vehicle construction.'
        },
        {
            id: 'chart-r1',
            title: 'Chart R1 - Activation Dates for LVV Vehicle Certification',
            description: 'Chart showing when various LVV requirements came into effect.',
            category: 'SUPPLEMENTARY',
            url: 'supplementary-information/chart-r1-activation-dates-lvv-certification.pdf',
            keywords: ['dates', 'activation', 'requirements', 'history'],
            difficulty: 'reference',
            priority: 5,
            summary: 'Reference chart for when requirements became effective.'
        },
        {
            id: 'certifier-list',
            title: 'LVV Certifier List, Contact Details & Categories',
            description: 'List of all appointed LVV Certifiers with contact details and categories.',
            category: 'SUPPLEMENTARY',
            url: 'supplementary-information/lvv-certifier-list-contact-details-categories.pdf',
            keywords: ['certifiers', 'list', 'contact', 'categories'],
            difficulty: 'reference',
            priority: 6,
            summary: 'Find an LVV Certifier - contact details and specialisations.'
        },
        {
            id: 'obj-noise-certifiers',
            title: 'Objective Noise Test-capable LVV Certifiers',
            description: 'List of certifiers who can perform objective noise testing.',
            category: 'SUPPLEMENTARY',
            url: 'supplementary-information/objective-noise-test-capable-lvv-certifiers.pdf',
            keywords: ['noise', 'testing', 'objective', 'certifiers'],
            difficulty: 'reference',
            priority: 7,
            summary: 'Find a certifier who can do noise testing.'
        },
        {
            id: 'supp-index',
            title: 'Supplementary Information Index',
            description: 'Index of all supplementary information documents.',
            category: 'SUPPLEMENTARY',
            url: 'supplementary-information/supplementary-information-index.pdf',
            keywords: ['index', 'supplementary', 'reference'],
            difficulty: 'reference',
            priority: 99,
            summary: 'Index to find supplementary documents.'
        },

        // ==================== EXTERNAL RESOURCES ====================
        {
            id: 'virm-link',
            title: 'WoF VIRM - Vehicle Inspection Requirements Manual',
            description: 'External link to NZTA VIRM - the WoF/CoF inspection requirements. Essential reference.',
            category: 'EXTERNAL',
            url: 'https://vehicleinspection.nzta.govt.nz/virm',
            keywords: ['VIRM', 'WoF', 'CoF', 'inspection', 'warrant'],
            difficulty: 'essential',
            priority: 1,
            summary: 'ESSENTIAL: WoF inspection requirements - what passes and fails.'
        },
        {
            id: 'land-transport-rules',
            title: 'Land Transport Rules',
            description: 'External link to NZTA Land Transport Rules - the legal requirements.',
            category: 'EXTERNAL',
            url: 'https://www.nzta.govt.nz/resources/rules/',
            keywords: ['rules', 'legal', 'legislation', 'transport'],
            difficulty: 'essential',
            priority: 2,
            summary: 'The underlying legal requirements that govern everything.'
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
            summary: '1949 = Historic replica cutoff | 4500kg = Heavy vehicle threshold | 1/3 suspension travel = lowering threshold | Rule 35001/1 = Vehicle Standards Compliance 2002'
        },
        {
            id: 'qr-standards-numbers',
            title: 'Quick Ref: Standards Numbering System',
            description: 'How to decode LVV Standard numbers.',
            category: 'QUICKREF',
            url: null,
            keywords: ['standards', 'numbering', 'decode'],
            difficulty: 'essential',
            priority: 2,
            summary: '35=Brakes | 40=Chassis | 45=Disability | 75=EV | 85=Engine | 90=Emissions | 100=External | 105=Fuel | 125=Lighting | 145=Motorcycles | 155=Impact/Doors | 175=Seatbelts | 185=Seats | 190=RHD | 195=Suspension | 200=Mirrors | 205=Wheels'
        },
        {
            id: 'qr-vehicle-classes',
            title: 'Quick Ref: Vehicle Classifications',
            description: 'Quick reference for LVV vehicle classifications.',
            category: 'QUICKREF',
            url: null,
            keywords: ['classifications', 'modified', 'scratch-built', 'replica', 'reproduction'],
            difficulty: 'essential',
            priority: 3,
            summary: 'MODIFIED = Production vehicle base, keeps original VIN | SCRATCH-BUILT = New construction, gets LVVTA VIN | HISTORIC REPLICA = Pre-1949 copy, fewer requirements | REPRODUCTION = Post-1949 copy, full modern requirements'
        },
        {
            id: 'qr-certifier-categories',
            title: 'Quick Ref: Certifier Categories',
            description: 'LVV Certifier appointment categories explained.',
            category: 'QUICKREF',
            url: null,
            keywords: ['categories', 'GMV', 'heavy', 'ONT', 'certifier types'],
            difficulty: 'essential',
            priority: 4,
            summary: 'GMV = General Motor Vehicles (<4500kg) | HV = Heavy Vehicles (>4500kg) | ONT = Off-road & Non-transport | Specialist = Specific areas like disability, RHD'
        },
        {
            id: 'qr-threshold-groups',
            title: 'Quick Ref: Certification Threshold Groups',
            description: 'The three groups of modifications.',
            category: 'QUICKREF',
            url: null,
            keywords: ['groups', 'threshold', 'always', 'sometimes', 'never'],
            difficulty: 'essential',
            priority: 5,
            summary: 'GROUP 1 = ALWAYS needs cert (engine swaps, structural, scratch-built) | GROUP 2 = Needs cert IF exceeds threshold (lowering >1/3, power increase) | GROUP 3 = NEVER needs cert (but must still pass WoF)'
        },
        {
            id: 'qr-certifier-attributes',
            title: 'Quick Ref: Certifier Attributes',
            description: 'The essential attributes of an LVV Certifier.',
            category: 'QUICKREF',
            url: null,
            keywords: ['attributes', 'qualities', 'integrity', 'independence'],
            difficulty: 'essential',
            priority: 6,
            summary: 'Technically skilled | Vastly experienced | Conscientious | Independent | Reliable | Good people skills | High integrity - ALL required, technical skill alone NOT sufficient'
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
            summary: '1. Land Transport Act 1998 | 2. Land Transport Rule 35001/1 | 3. LVV Code | 4. ORS | 5. LVV Standards | 6. NZCCM/Info Sheets'
        },
        {
            id: 'qr-must-should-may',
            title: 'Quick Ref: Must vs Should vs May',
            description: 'Understanding mandatory vs optional requirements.',
            category: 'QUICKREF',
            url: null,
            keywords: ['must', 'shall', 'should', 'may', 'mandatory'],
            difficulty: 'essential',
            priority: 8,
            summary: 'MUST/SHALL = Mandatory, no flexibility | SHOULD = Recommended, not mandatory | MAY = Optional, permitted'
        },
        {
            id: 'qr-common-mods',
            title: 'Quick Ref: Common Modifications',
            description: 'Quick guide to common modification certification requirements.',
            category: 'QUICKREF',
            url: null,
            keywords: ['common', 'modifications', 'engine swap', 'lowering'],
            difficulty: 'essential',
            priority: 9,
            summary: 'Engine swap = Always (85-40) | Lowering >1/3 = Yes (195-00) | Turbo = Usually (85-40) | Wheels beyond spec = Check (205-00) | Roll cage = Always (40-00) | Brakes = Check threshold (35-00)'
        },
        {
            id: 'qr-nzccm-chapters',
            title: 'Quick Ref: NZCCM Chapter Guide',
            description: 'Quick reference to NZCCM chapter contents.',
            category: 'QUICKREF',
            url: null,
            keywords: ['NZCCM', 'chapters', 'construction'],
            difficulty: 'reference',
            priority: 10,
            summary: 'Ch1=LVV System | Ch2=About | Ch3=Authority Card | Ch4=Build Approval | Ch5=Chassis | Ch6=Suspension | Ch7=Steering | Ch8=Brakes | Ch9=Engine | Ch10=Fuel | Ch11=Noise | Ch12=Wheels | Ch13=Body | Ch14=Seats | Ch15=Glazing | Ch16=Interior | Ch17=Lighting | Ch18=Attachment | Ch19=Operation'
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

            // Search in title, description, keywords, summary
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
        if (!doc.url) return null;
        if (doc.url.startsWith('http')) {
            return doc.url;
        }
        return this.baseUrl + doc.url;
    },

    // Get essential documents
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
    },

    // Get documents by year
    getByYear(year) {
        return this.documents
            .filter(doc => doc.year === year)
            .sort((a, b) => a.priority - b.priority);
    },

    // Get latest documents
    getLatest(limit = 10) {
        return this.documents
            .filter(doc => doc.year)
            .sort((a, b) => (b.year || 0) - (a.year || 0))
            .slice(0, limit);
    },

    // Statistics
    getStats() {
        const stats = {
            total: this.documents.length,
            byCategory: {},
            byDifficulty: {}
        };

        this.documents.forEach(doc => {
            stats.byCategory[doc.category] = (stats.byCategory[doc.category] || 0) + 1;
            stats.byDifficulty[doc.difficulty] = (stats.byDifficulty[doc.difficulty] || 0) + 1;
        });

        return stats;
    }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LVVDatabase;
}
