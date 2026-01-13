/**
 * LVV Certifier Training Platform - Learning Modules
 * Structured learning content with quizzes and progress tracking
 */

const LVVModules = {
    modules: [
        // ==================== MODULE 1 ====================
        {
            id: 'mod-1',
            number: 1,
            title: 'Introduction to LVV Certification',
            description: 'Understanding the LVV certification system, LVVTA role, and legal framework.',
            difficulty: 'beginner',
            estimatedTime: '30 min',
            prerequisites: [],
            relatedDocs: ['lvv-code', 'ors-main', 'info-sheet-1'],

            sections: [
                {
                    id: 'mod-1-s1',
                    title: 'What is LVV Certification?',
                    content: `
                        <h3>Low Volume Vehicle Certification</h3>
                        <p>Low Volume Vehicle (LVV) certification is New Zealand's system for ensuring modified and custom-built vehicles meet safety standards for road use.</p>

                        <h4>Key Points:</h4>
                        <ul>
                            <li><strong>Purpose:</strong> Ensure modified vehicles are safe for road use</li>
                            <li><strong>Scope:</strong> Covers modifications beyond manufacturer specifications</li>
                            <li><strong>Legal basis:</strong> Land Transport Rule: Vehicle Standards Compliance 2002</li>
                            <li><strong>Administration:</strong> Managed by LVVTA (Low Volume Vehicle Technical Association)</li>
                        </ul>

                        <h4>What Gets Certified?</h4>
                        <ul>
                            <li>Modified production vehicles (engine swaps, suspension changes, etc.)</li>
                            <li>Scratch-built vehicles (kit cars, custom builds)</li>
                            <li>Historic replicas and reproductions</li>
                            <li>Imported vehicles with modifications</li>
                        </ul>

                        <div class="key-concept">
                            <h4>Remember:</h4>
                            <p>Not every modification requires LVV certification - the Certification Threshold Schedule defines what level of modification triggers the requirement.</p>
                        </div>
                    `,
                    keyPoints: [
                        'LVV certification ensures modified vehicles are roadworthy',
                        'LVVTA administers the certification system',
                        'Legal authority comes from Land Transport Rules',
                        'Both modified and scratch-built vehicles can require certification'
                    ]
                },
                {
                    id: 'mod-1-s2',
                    title: 'The Role of LVVTA',
                    content: `
                        <h3>Low Volume Vehicle Technical Association</h3>
                        <p>LVVTA is the appointed organisation responsible for administering the LVV certification system in New Zealand.</p>

                        <h4>LVVTA Responsibilities:</h4>
                        <ul>
                            <li><strong>Standards Development:</strong> Creating and maintaining LVV Standards</li>
                            <li><strong>Certifier Management:</strong> Appointing, training, and monitoring LVV Certifiers</li>
                            <li><strong>System Administration:</strong> Managing certification records, plates, and processes</li>
                            <li><strong>Technical Guidance:</strong> Providing interpretation and technical bulletins</li>
                            <li><strong>Quality Assurance:</strong> Auditing certifications and investigating complaints</li>
                        </ul>

                        <h4>Key Documents Published by LVVTA:</h4>
                        <ul>
                            <li>LVV Code</li>
                            <li>Operating Requirements Schedule (ORS)</li>
                            <li>LVV Standards</li>
                            <li>NZ Car Construction Manual</li>
                            <li>Technical Bulletins</li>
                        </ul>
                    `,
                    keyPoints: [
                        'LVVTA administers the LVV certification system',
                        'They appoint and monitor LVV Certifiers',
                        'They develop and maintain all LVV Standards',
                        'They provide technical guidance and interpretations'
                    ]
                },
                {
                    id: 'mod-1-s3',
                    title: 'Legal Framework',
                    content: `
                        <h3>The Legal Basis for LVV Certification</h3>
                        <p>LVV certification is legally empowered by New Zealand land transport legislation.</p>

                        <h4>Hierarchy of Documents:</h4>
                        <ol>
                            <li><strong>Land Transport Act 1998</strong> - Primary legislation</li>
                            <li><strong>Land Transport Rule: Vehicle Standards Compliance 2002</strong> - Empowers the LVV Code</li>
                            <li><strong>LVV Code</strong> - Top-level requirements for LVV certification</li>
                            <li><strong>Operating Requirements Schedule (ORS)</strong> - Day-to-day operational rules</li>
                            <li><strong>LVV Standards</strong> - Technical requirements for specific areas</li>
                        </ol>

                        <div class="key-concept">
                            <h4>Important:</h4>
                            <p>Failure to follow LVV Standards constitutes an offence under Land Transport Rules. LVV Certifiers are legally obligated to apply these requirements correctly.</p>
                        </div>

                        <h4>Enforcement:</h4>
                        <ul>
                            <li>Waka Kotahi (NZ Transport Agency) has oversight</li>
                            <li>Non-compliant vehicles can be prohibited from road use</li>
                            <li>Certifiers can face disciplinary action or loss of appointment</li>
                        </ul>
                    `,
                    keyPoints: [
                        'LVV Code is empowered by Land Transport Rule 35001/1',
                        'There is a clear hierarchy: Act > Rules > Code > ORS > Standards',
                        'Non-compliance has legal consequences',
                        'Waka Kotahi provides regulatory oversight'
                    ]
                }
            ],

            quiz: {
                passingScore: 70,
                questions: [
                    {
                        id: 'q1-1',
                        question: 'What is the primary purpose of LVV certification?',
                        options: [
                            'To generate revenue for the government',
                            'To ensure modified vehicles are safe for road use',
                            'To prevent people from modifying vehicles',
                            'To register new vehicles'
                        ],
                        correctAnswer: 1,
                        explanation: 'LVV certification exists to ensure that modified and custom-built vehicles meet safety standards for road use in New Zealand.'
                    },
                    {
                        id: 'q1-2',
                        question: 'Which organisation administers the LVV certification system?',
                        options: [
                            'Waka Kotahi NZ Transport Agency',
                            'Ministry of Transport',
                            'LVVTA (Low Volume Vehicle Technical Association)',
                            'New Zealand Police'
                        ],
                        correctAnswer: 2,
                        explanation: 'LVVTA (Low Volume Vehicle Technical Association) is the appointed organisation responsible for administering the LVV certification system.'
                    },
                    {
                        id: 'q1-3',
                        question: 'Which document legally empowers the LVV Code?',
                        options: [
                            'Land Transport Act 1998',
                            'Land Transport Rule: Vehicle Standards Compliance 2002',
                            'Operating Requirements Schedule',
                            'LVV Standard 185-20'
                        ],
                        correctAnswer: 1,
                        explanation: 'The LVV Code is legally empowered by Land Transport Rule: Vehicle Standards Compliance 2002 (Rule 35001/1).'
                    },
                    {
                        id: 'q1-4',
                        question: 'Does every vehicle modification require LVV certification?',
                        options: [
                            'Yes, all modifications require certification',
                            'No, only modifications above certain thresholds require certification',
                            'Only engine modifications require certification',
                            'Only suspension modifications require certification'
                        ],
                        correctAnswer: 1,
                        explanation: 'Not every modification requires LVV certification. The Certification Threshold Schedule defines three groups: modifications that always require certification, sometimes require certification, and never require certification.'
                    },
                    {
                        id: 'q1-5',
                        question: 'What types of vehicles can be LVV certified?',
                        options: [
                            'Only modified production vehicles',
                            'Only scratch-built vehicles',
                            'Both modified production vehicles and scratch-built vehicles',
                            'Only imported vehicles'
                        ],
                        correctAnswer: 2,
                        explanation: 'LVV certification covers both modified production vehicles and scratch-built vehicles (including kit cars, historic replicas, and reproductions).'
                    }
                ]
            }
        },

        // ==================== MODULE 2 ====================
        {
            id: 'mod-2',
            number: 2,
            title: 'Low Volume Vehicle Classifications',
            description: 'Understanding the different types and classifications of low volume vehicles.',
            difficulty: 'essential',
            estimatedTime: '45 min',
            prerequisites: ['mod-1'],
            relatedDocs: ['ors-ch2', 'info-sheet-2', 'info-sheet-3'],

            sections: [
                {
                    id: 'mod-2-s1',
                    title: 'Modified vs Scratch-built Vehicles',
                    content: `
                        <h3>Two Main Categories</h3>
                        <p>Low volume vehicles fall into two fundamental categories, each with different requirements.</p>

                        <h4>Modified Vehicles</h4>
                        <ul>
                            <li>Based on a production vehicle platform</li>
                            <li>Retain original VIN/chassis number</li>
                            <li>Modifications change vehicle from original specification</li>
                            <li>Common examples: engine swaps, suspension modifications, turbo installations</li>
                        </ul>

                        <h4>Scratch-built Vehicles</h4>
                        <ul>
                            <li>Not based on a complete production vehicle</li>
                            <li>Assigned a new VIN by LVVTA</li>
                            <li>Built from components and/or new construction</li>
                            <li>Include kit cars, custom builds, replicas</li>
                        </ul>

                        <div class="key-concept">
                            <h4>Key Difference:</h4>
                            <p>Modified vehicles start with an existing certified base and have some changes. Scratch-built vehicles must meet ALL requirements from scratch.</p>
                        </div>
                    `,
                    keyPoints: [
                        'Modified vehicles are based on production vehicles',
                        'Scratch-built vehicles are constructed from components',
                        'Scratch-built vehicles get a new VIN assigned by LVVTA',
                        'Scratch-built vehicles have more comprehensive requirements'
                    ]
                },
                {
                    id: 'mod-2-s2',
                    title: 'Scratch-built Sub-classifications',
                    content: `
                        <h3>Types of Scratch-built Vehicles</h3>
                        <p>Scratch-built vehicles are further classified based on their design intent.</p>

                        <h4>Historic Replica</h4>
                        <ul>
                            <li>Replicates a vehicle type manufactured before 1 January 1949</li>
                            <li>Built to closely match the original era design</li>
                            <li>Has the least technical requirements</li>
                            <li>Can use period-appropriate technology</li>
                        </ul>

                        <h4>Reproduction</h4>
                        <ul>
                            <li>Replicates a vehicle type manufactured on or after 1 January 1949</li>
                            <li>Typically kit cars based on modern platforms</li>
                            <li>Must meet current safety standards</li>
                            <li>Has the most comprehensive requirements</li>
                        </ul>

                        <h4>Other Scratch-built</h4>
                        <ul>
                            <li>Original designs not replicating existing vehicles</li>
                            <li>Custom specials and one-offs</li>
                            <li>Requirements depend on intended use</li>
                        </ul>

                        <div class="key-concept">
                            <h4>Compliance Difference:</h4>
                            <p>A scratch-built reproduction requires significantly more technical compliance than a historic replica, because replicas of pre-1949 vehicles can use period technology.</p>
                        </div>
                    `,
                    keyPoints: [
                        'Historic replicas copy pre-1949 vehicles with fewer requirements',
                        'Reproductions copy post-1949 vehicles with full modern requirements',
                        'The 1949 date is the key dividing line',
                        'Reproductions must meet current safety standards'
                    ]
                },
                {
                    id: 'mod-2-s3',
                    title: 'Vehicle Categories by Use',
                    content: `
                        <h3>Categories Based on Intended Use</h3>
                        <p>Vehicles are also categorised by their intended use, affecting which certifier can sign them off.</p>

                        <h4>General Motor Vehicles (GMV)</h4>
                        <ul>
                            <li>Passenger cars and derivatives</li>
                            <li>Light commercial vehicles</li>
                            <li>Most common certification category</li>
                            <li>Under 4500kg GVM</li>
                        </ul>

                        <h4>Heavy Vehicles</h4>
                        <ul>
                            <li>Vehicles over 4500kg GVM</li>
                            <li>Trucks, buses, heavy trailers</li>
                            <li>Requires specialist Heavy Vehicle certifier</li>
                        </ul>

                        <h4>Off-road & Non-transport (ONT)</h4>
                        <ul>
                            <li>Vehicles primarily for off-road use</li>
                            <li>Agricultural vehicles</li>
                            <li>Special purpose vehicles</li>
                            <li>May have limited road access</li>
                        </ul>

                        <h4>Motorcycles</h4>
                        <ul>
                            <li>Two and three-wheeled vehicles</li>
                            <li>Specific standards apply</li>
                            <li>May require specialist certifier</li>
                        </ul>
                    `,
                    keyPoints: [
                        'GMV covers most passenger cars under 4500kg',
                        'Heavy vehicles are over 4500kg GVM',
                        'ONT covers off-road and agricultural vehicles',
                        'Different certifier categories for different vehicle types'
                    ]
                }
            ],

            quiz: {
                passingScore: 70,
                questions: [
                    {
                        id: 'q2-1',
                        question: 'What is the main difference between a modified vehicle and a scratch-built vehicle?',
                        options: [
                            'Modified vehicles are newer than scratch-built',
                            'Modified vehicles are based on production vehicles while scratch-built are constructed from components',
                            'Scratch-built vehicles are always faster',
                            'There is no difference'
                        ],
                        correctAnswer: 1,
                        explanation: 'Modified vehicles start from an existing production vehicle platform and retain their original VIN. Scratch-built vehicles are constructed from components and receive a new VIN.'
                    },
                    {
                        id: 'q2-2',
                        question: 'What date separates historic replicas from reproductions?',
                        options: [
                            '1 January 1960',
                            '1 January 1949',
                            '1 January 1970',
                            '1 January 1940'
                        ],
                        correctAnswer: 1,
                        explanation: 'Historic replicas are copies of vehicles manufactured before 1 January 1949. Reproductions copy vehicles manufactured on or after this date.'
                    },
                    {
                        id: 'q2-3',
                        question: 'Which type of scratch-built vehicle has the MOST comprehensive technical requirements?',
                        options: [
                            'Historic replica',
                            'Reproduction',
                            'They have identical requirements',
                            'Agricultural vehicle'
                        ],
                        correctAnswer: 1,
                        explanation: 'Reproductions must meet current safety standards as they copy post-1949 vehicles. Historic replicas can use period-appropriate technology and have fewer requirements.'
                    },
                    {
                        id: 'q2-4',
                        question: 'At what GVM does a vehicle become classified as a Heavy Vehicle?',
                        options: [
                            '3500kg',
                            '4000kg',
                            '4500kg',
                            '5000kg'
                        ],
                        correctAnswer: 2,
                        explanation: 'Heavy vehicles are those with a Gross Vehicle Mass (GVM) over 4500kg. Below this, they are classified as light vehicles.'
                    },
                    {
                        id: 'q2-5',
                        question: 'Who assigns a VIN to a scratch-built vehicle?',
                        options: [
                            'The vehicle owner',
                            'The manufacturer',
                            'LVVTA',
                            'Waka Kotahi'
                        ],
                        correctAnswer: 2,
                        explanation: 'LVVTA assigns new VINs to scratch-built vehicles as part of the certification process.'
                    }
                ]
            }
        },

        // ==================== MODULE 3 ====================
        {
            id: 'mod-3',
            number: 3,
            title: 'LVV Certifier Requirements',
            description: 'What it takes to become an LVV Certifier - qualifications, experience, and personal attributes.',
            difficulty: 'essential',
            estimatedTime: '40 min',
            prerequisites: ['mod-1'],
            relatedDocs: ['ors-ch4', 'ors-ch5', 'ors-ch3'],

            sections: [
                {
                    id: 'mod-3-s1',
                    title: 'Background Criteria',
                    content: `
                        <h3>What LVVTA Looks For</h3>
                        <blockquote>
                            "To become an LVV Certifier you will need to be technically skilled, vastly experienced, conscientious, independent, reliable, have good people skills, and a high level of integrity."
                        </blockquote>

                        <h4>Technical Qualifications</h4>
                        <ul>
                            <li>Relevant trade qualification (automotive, engineering)</li>
                            <li>Demonstrated technical competence</li>
                            <li>Understanding of vehicle systems</li>
                            <li>Ability to interpret technical documents</li>
                        </ul>

                        <h4>Experience Requirements</h4>
                        <ul>
                            <li>Substantial industry experience (typically 10+ years)</li>
                            <li>Experience with modified vehicles</li>
                            <li>Hands-on mechanical/engineering background</li>
                            <li>Knowledge of vehicle construction and safety</li>
                        </ul>

                        <div class="key-concept">
                            <h4>Not Just Technical:</h4>
                            <p>LVVTA emphasises that technical skills alone are not sufficient. Personal attributes and integrity are equally important for certifier appointment.</p>
                        </div>
                    `,
                    keyPoints: [
                        'Trade qualifications typically required',
                        'Substantial industry experience needed (often 10+ years)',
                        'Technical competence must be demonstrated',
                        'Personal attributes are equally important'
                    ]
                },
                {
                    id: 'mod-3-s2',
                    title: 'Personal Attributes',
                    content: `
                        <h3>Essential Personal Qualities</h3>
                        <p>Being technically competent is only part of the picture. LVVTA requires certifiers to demonstrate key personal attributes.</p>

                        <h4>Conscientiousness</h4>
                        <ul>
                            <li>Thorough attention to detail</li>
                            <li>Following procedures correctly</li>
                            <li>Proper documentation</li>
                            <li>Never cutting corners</li>
                        </ul>

                        <h4>Independence</h4>
                        <ul>
                            <li>Making unbiased decisions</li>
                            <li>Not influenced by customer pressure</li>
                            <li>Maintaining objectivity</li>
                            <li>Declaring conflicts of interest</li>
                        </ul>

                        <h4>Integrity</h4>
                        <ul>
                            <li>Honest in all dealings</li>
                            <li>Refusing to certify non-compliant work</li>
                            <li>Reporting issues appropriately</li>
                            <li>Upholding professional standards</li>
                        </ul>

                        <h4>People Skills</h4>
                        <ul>
                            <li>Clear communication with vehicle owners</li>
                            <li>Explaining requirements professionally</li>
                            <li>Managing difficult conversations</li>
                            <li>Working with industry stakeholders</li>
                        </ul>
                    `,
                    keyPoints: [
                        'Conscientiousness means thorough attention to detail',
                        'Independence means unbiased decision making',
                        'Integrity means honest dealings and refusing non-compliant work',
                        'Good communication skills are essential'
                    ]
                },
                {
                    id: 'mod-3-s3',
                    title: 'The Application Process',
                    content: `
                        <h3>Becoming an LVV Certifier</h3>
                        <p>The path to becoming an LVV Certifier involves several stages.</p>

                        <h4>Stage 1: Initial Application</h4>
                        <ul>
                            <li>Submit application to LVVTA</li>
                            <li>Provide evidence of qualifications</li>
                            <li>Document relevant experience</li>
                            <li>Supply references</li>
                        </ul>

                        <h4>Stage 2: Assessment</h4>
                        <ul>
                            <li>Technical assessment/interview</li>
                            <li>Knowledge testing</li>
                            <li>Review of background</li>
                            <li>Reference checks</li>
                        </ul>

                        <h4>Stage 3: Training</h4>
                        <ul>
                            <li>LVVTA training programme</li>
                            <li>Understanding of standards and procedures</li>
                            <li>Supervised certifications</li>
                            <li>Practical assessment</li>
                        </ul>

                        <h4>Stage 4: Appointment</h4>
                        <ul>
                            <li>Formal appointment by LVVTA</li>
                            <li>Issued certifier ID and equipment</li>
                            <li>Access to certification system</li>
                            <li>Ongoing obligations commence</li>
                        </ul>

                        <div class="key-concept">
                            <h4>Ongoing Requirements:</h4>
                            <p>Appointment is not the end. Certifiers must maintain their competency through ongoing training, audits, and compliance with ORS requirements.</p>
                        </div>
                    `,
                    keyPoints: [
                        'Application requires evidence of qualifications and experience',
                        'Technical assessment and knowledge testing required',
                        'Training programme must be completed',
                        'Ongoing obligations apply after appointment'
                    ]
                }
            ],

            quiz: {
                passingScore: 70,
                questions: [
                    {
                        id: 'q3-1',
                        question: 'According to LVVTA, what personal attribute involves refusing to certify non-compliant work?',
                        options: [
                            'Conscientiousness',
                            'Independence',
                            'Integrity',
                            'Reliability'
                        ],
                        correctAnswer: 2,
                        explanation: 'Integrity involves being honest in all dealings, refusing to certify non-compliant work, and upholding professional standards.'
                    },
                    {
                        id: 'q3-2',
                        question: 'What does "independence" mean for an LVV Certifier?',
                        options: [
                            'Working alone without supervision',
                            'Making unbiased decisions not influenced by customer pressure',
                            'Being self-employed',
                            'Not needing training'
                        ],
                        correctAnswer: 1,
                        explanation: 'Independence means making objective, unbiased decisions that are not influenced by customer pressure or conflicts of interest.'
                    },
                    {
                        id: 'q3-3',
                        question: 'How much industry experience is typically expected for LVV Certifier applicants?',
                        options: [
                            '2-3 years',
                            '5-7 years',
                            '10+ years',
                            'No experience required'
                        ],
                        correctAnswer: 2,
                        explanation: 'LVV Certifier applicants typically need substantial industry experience, often 10 or more years, along with hands-on experience with modified vehicles.'
                    },
                    {
                        id: 'q3-4',
                        question: 'What happens after formal appointment as an LVV Certifier?',
                        options: [
                            'No further requirements apply',
                            'Ongoing obligations including training and audits commence',
                            'You must retire within 5 years',
                            'You become a LVVTA employee'
                        ],
                        correctAnswer: 1,
                        explanation: 'After appointment, certifiers have ongoing obligations including maintaining competency through training, submitting to audits, and complying with ORS requirements.'
                    },
                    {
                        id: 'q3-5',
                        question: 'Which is NOT listed as an essential attribute for LVV Certifiers?',
                        options: [
                            'Technical skill',
                            'Integrity',
                            'Sales ability',
                            'Good people skills'
                        ],
                        correctAnswer: 2,
                        explanation: 'LVVTA requires certifiers to be technically skilled, experienced, conscientious, independent, reliable, have good people skills, and high integrity. Sales ability is not a required attribute.'
                    }
                ]
            }
        },

        // ==================== MODULE 4 ====================
        {
            id: 'mod-4',
            number: 4,
            title: 'Certification Thresholds',
            description: 'Understanding when LVV certification is required based on modification levels.',
            difficulty: 'essential',
            estimatedTime: '35 min',
            prerequisites: ['mod-1', 'mod-2'],
            relatedDocs: ['cert-threshold', 'ors-ch7'],

            sections: [
                {
                    id: 'mod-4-s1',
                    title: 'The Three Groups',
                    content: `
                        <h3>When is LVV Certification Required?</h3>
                        <p>Not every modification requires LVV certification. The Certification Threshold Schedule divides modifications into three groups.</p>

                        <h4>Group 1: Always Required</h4>
                        <p>Higher-level modifications that ALWAYS require LVV certification:</p>
                        <ul>
                            <li>Engine conversions (different engine model/type)</li>
                            <li>Extensive structural modifications</li>
                            <li>Scratch-built vehicles</li>
                            <li>Roll cage installations</li>
                            <li>Significant brake system changes</li>
                        </ul>

                        <h4>Group 2: Threshold-dependent</h4>
                        <p>Modifications that require certification IF they exceed a certain level:</p>
                        <ul>
                            <li>Suspension height changes beyond threshold</li>
                            <li>Wheel/tyre size changes beyond threshold</li>
                            <li>Power increases beyond threshold</li>
                            <li>Weight changes beyond threshold</li>
                        </ul>

                        <h4>Group 3: Never Required</h4>
                        <p>Lower-level modifications that don't need LVV certification:</p>
                        <ul>
                            <li>Standard replacement parts</li>
                            <li>Minor cosmetic changes</li>
                            <li>Audio equipment</li>
                            <li>Small suspension adjustments within limits</li>
                        </ul>

                        <div class="key-concept">
                            <h4>Important:</h4>
                            <p>Even Group 3 modifications must still meet WoF/CoF requirements. No certification needed doesn't mean "anything goes".</p>
                        </div>
                    `,
                    keyPoints: [
                        'Group 1 modifications ALWAYS require certification',
                        'Group 2 modifications require certification if exceeding thresholds',
                        'Group 3 modifications never require LVV certification',
                        'All modifications must still meet WoF/CoF requirements'
                    ]
                },
                {
                    id: 'mod-4-s2',
                    title: 'Common Threshold Examples',
                    content: `
                        <h3>Understanding the Thresholds</h3>
                        <p>Here are some common modification areas and their threshold requirements.</p>

                        <h4>Suspension Height</h4>
                        <ul>
                            <li>Lowered: More than 1/3 of original suspension travel</li>
                            <li>Raised: Vehicle-specific limits apply</li>
                            <li>Beyond thresholds = certification required</li>
                        </ul>

                        <h4>Wheels & Tyres</h4>
                        <ul>
                            <li>Track width changes beyond limits</li>
                            <li>Significant offset changes</li>
                            <li>Tyre size changes affecting speedometer accuracy</li>
                        </ul>

                        <h4>Engine Power</h4>
                        <ul>
                            <li>Power increases beyond threshold percentage</li>
                            <li>Forced induction additions</li>
                            <li>Engine management changes affecting emissions</li>
                        </ul>

                        <h4>Structural Changes</h4>
                        <ul>
                            <li>Chassis modifications</li>
                            <li>Body conversions</li>
                            <li>Seating position changes</li>
                        </ul>

                        <div class="key-concept">
                            <h4>Always Check:</h4>
                            <p>The Certification Threshold Schedule is regularly updated. Always refer to the current version for accurate thresholds.</p>
                        </div>
                    `,
                    keyPoints: [
                        'Suspension lowering beyond 1/3 travel requires certification',
                        'Wheel/tyre changes affecting track or speedometer need assessment',
                        'Significant power increases require certification',
                        'Always check the current Threshold Schedule'
                    ]
                },
                {
                    id: 'mod-4-s3',
                    title: 'Making the Decision',
                    content: `
                        <h3>Determining if Certification is Required</h3>
                        <p>As a certifier, you'll need to assess vehicles to determine if certification is required.</p>

                        <h4>Assessment Process:</h4>
                        <ol>
                            <li><strong>Identify modifications</strong> - What has been changed from original?</li>
                            <li><strong>Categorise each modification</strong> - Which group does it fall into?</li>
                            <li><strong>Check thresholds</strong> - For Group 2 items, are thresholds exceeded?</li>
                            <li><strong>Consider cumulative effect</strong> - Multiple minor changes may combine</li>
                            <li><strong>Document decision</strong> - Record reasoning</li>
                        </ol>

                        <h4>Grey Areas:</h4>
                        <ul>
                            <li>When uncertain, err on side of requiring certification</li>
                            <li>Consult LVVTA for complex cases</li>
                            <li>Technical bulletins may provide guidance</li>
                            <li>Document your reasoning</li>
                        </ul>

                        <h4>Owner Communication:</h4>
                        <ul>
                            <li>Explain why certification is/isn't required</li>
                            <li>Refer to specific threshold criteria</li>
                            <li>Advise on WoF requirements even if no LVV cert needed</li>
                        </ul>
                    `,
                    keyPoints: [
                        'Systematically assess each modification',
                        'Consider cumulative effects of multiple modifications',
                        'When uncertain, consult LVVTA or require certification',
                        'Always document your reasoning'
                    ]
                }
            ],

            quiz: {
                passingScore: 70,
                questions: [
                    {
                        id: 'q4-1',
                        question: 'Which group of modifications ALWAYS requires LVV certification?',
                        options: [
                            'Group 1',
                            'Group 2',
                            'Group 3',
                            'All groups require certification'
                        ],
                        correctAnswer: 0,
                        explanation: 'Group 1 modifications always require LVV certification. These include engine conversions, extensive structural modifications, and scratch-built vehicles.'
                    },
                    {
                        id: 'q4-2',
                        question: 'A vehicle has been lowered. When does this require LVV certification?',
                        options: [
                            'Any amount of lowering requires certification',
                            'Only if lowered more than 1/3 of original suspension travel',
                            'Never requires certification',
                            'Only if using aftermarket parts'
                        ],
                        correctAnswer: 1,
                        explanation: 'Suspension lowering requires LVV certification when it exceeds the threshold, which is typically more than 1/3 of original suspension travel.'
                    },
                    {
                        id: 'q4-3',
                        question: 'What should you do when uncertain if a modification requires certification?',
                        options: [
                            'Tell the owner it doesn\'t need certification',
                            'Ignore the modification',
                            'Err on the side of requiring certification or consult LVVTA',
                            'Let the owner decide'
                        ],
                        correctAnswer: 2,
                        explanation: 'When uncertain, you should err on the side of requiring certification, consult LVVTA for guidance, and document your reasoning.'
                    },
                    {
                        id: 'q4-4',
                        question: 'If a modification falls into Group 3, what does this mean?',
                        options: [
                            'It always requires LVV certification',
                            'It never requires LVV certification, but must still meet WoF/CoF requirements',
                            'It can be ignored completely',
                            'It requires partial certification'
                        ],
                        correctAnswer: 1,
                        explanation: 'Group 3 modifications never require LVV certification, but the vehicle must still meet WoF/CoF requirements. No certification needed doesn\'t mean anything goes.'
                    },
                    {
                        id: 'q4-5',
                        question: 'Why should you consider the cumulative effect of multiple modifications?',
                        options: [
                            'It makes the paperwork easier',
                            'Multiple minor changes may combine to exceed thresholds',
                            'It\'s not actually necessary',
                            'To charge higher fees'
                        ],
                        correctAnswer: 1,
                        explanation: 'Multiple minor modifications that individually don\'t require certification may combine to exceed thresholds or create safety concerns that require assessment.'
                    }
                ]
            }
        },

        // ==================== MODULE 5 ====================
        {
            id: 'mod-5',
            number: 5,
            title: 'LVV Standards Overview',
            description: 'Understanding the structure and application of LVV Standards.',
            difficulty: 'intermediate',
            estimatedTime: '50 min',
            prerequisites: ['mod-1', 'mod-2', 'mod-4'],
            relatedDocs: ['std-155-01', 'std-185-20'],

            sections: [
                {
                    id: 'mod-5-s1',
                    title: 'Standards Structure',
                    content: `
                        <h3>How LVV Standards are Organised</h3>
                        <p>LVV Standards follow a consistent numbering and structure system.</p>

                        <h4>Numbering System:</h4>
                        <ul>
                            <li><strong>35-xx:</strong> Brakes</li>
                            <li><strong>40-xx:</strong> Steering</li>
                            <li><strong>45-xx:</strong> Suspension</li>
                            <li><strong>50-xx:</strong> Structure</li>
                            <li><strong>55-xx:</strong> Wheels & Tyres</li>
                            <li><strong>60-xx:</strong> Engine</li>
                            <li><strong>65-xx:</strong> Drivetrain</li>
                            <li><strong>70-xx:</strong> Fuel Systems</li>
                            <li><strong>75-xx:</strong> LPG/CNG</li>
                            <li><strong>80-xx:</strong> Electrical</li>
                            <li><strong>85-xx:</strong> Electric Vehicles</li>
                            <li><strong>90-xx:</strong> Lighting</li>
                        </ul>

                        <h4>Second Digit Meaning:</h4>
                        <ul>
                            <li><strong>-00:</strong> Introduction to that area</li>
                            <li><strong>-10:</strong> Modified light vehicles</li>
                            <li><strong>-20:</strong> Scratch-built light vehicles</li>
                            <li><strong>-40:</strong> Heavy vehicles</li>
                        </ul>
                    `,
                    keyPoints: [
                        'First two digits indicate the system area (35=brakes, etc.)',
                        'Second pair indicates vehicle type and modification type',
                        '-00 standards are introductions to each area',
                        '-10 for modified, -20 for scratch-built, -40 for heavy'
                    ]
                },
                {
                    id: 'mod-5-s2',
                    title: 'Reading a Standard',
                    content: `
                        <h3>How to Interpret LVV Standards</h3>
                        <p>Each standard follows a consistent format to help you find and apply requirements.</p>

                        <h4>Typical Standard Structure:</h4>
                        <ol>
                            <li><strong>Scope:</strong> What the standard covers</li>
                            <li><strong>Application:</strong> When to use this standard</li>
                            <li><strong>Definitions:</strong> Technical terms explained</li>
                            <li><strong>Requirements:</strong> What must be achieved</li>
                            <li><strong>Test Methods:</strong> How to verify compliance</li>
                            <li><strong>Documentation:</strong> What records are needed</li>
                        </ol>

                        <h4>Key Words:</h4>
                        <ul>
                            <li><strong>"Must" / "Shall":</strong> Mandatory requirement</li>
                            <li><strong>"Should":</strong> Recommended but not mandatory</li>
                            <li><strong>"May":</strong> Optional / permitted</li>
                        </ul>

                        <div class="key-concept">
                            <h4>Compliance:</h4>
                            <p>When a standard says "must" or "shall", there is no flexibility. The requirement must be met for certification to be issued.</p>
                        </div>
                    `,
                    keyPoints: [
                        'Standards follow a consistent structure',
                        'Scope defines what the standard covers',
                        '"Must" and "Shall" indicate mandatory requirements',
                        '"Should" is recommended, "May" is optional'
                    ]
                },
                {
                    id: 'mod-5-s3',
                    title: 'Applying Standards',
                    content: `
                        <h3>Practical Application</h3>
                        <p>Knowing how to correctly apply standards is the core skill of an LVV Certifier.</p>

                        <h4>Step-by-Step Process:</h4>
                        <ol>
                            <li><strong>Identify what's modified:</strong> What systems are affected?</li>
                            <li><strong>Find applicable standards:</strong> Use the index (155-01)</li>
                            <li><strong>Read the introduction (-00):</strong> Understand the context</li>
                            <li><strong>Apply specific standard:</strong> Work through requirements</li>
                            <li><strong>Document compliance:</strong> Record how each requirement is met</li>
                        </ol>

                        <h4>Multiple Standards:</h4>
                        <p>Complex modifications may trigger multiple standards:</p>
                        <ul>
                            <li>Engine swap might need: 60-10, 65-10, 70-10, 80-10</li>
                            <li>Scratch-built needs: Multiple -20 standards</li>
                            <li>Address ALL applicable standards</li>
                        </ul>

                        <h4>When Standards Conflict:</h4>
                        <ul>
                            <li>Later versions supersede earlier</li>
                            <li>Specific standards override general</li>
                            <li>Consult LVVTA if genuinely unclear</li>
                        </ul>
                    `,
                    keyPoints: [
                        'Start with identifying modified systems',
                        'Use the Standards Index (155-01) to find applicable standards',
                        'Complex modifications may require multiple standards',
                        'Document how each requirement is met'
                    ]
                }
            ],

            quiz: {
                passingScore: 70,
                questions: [
                    {
                        id: 'q5-1',
                        question: 'What does the standard number 45-10 indicate?',
                        options: [
                            'Brakes for modified light vehicles',
                            'Suspension for modified light vehicles',
                            'Steering for scratch-built vehicles',
                            'Structure for heavy vehicles'
                        ],
                        correctAnswer: 1,
                        explanation: '45 indicates Suspension standards, and -10 indicates Modified Light Vehicles. So 45-10 is the standard for Modified Light Vehicle Suspension.'
                    },
                    {
                        id: 'q5-2',
                        question: 'What does the word "shall" mean in an LVV Standard?',
                        options: [
                            'Optional recommendation',
                            'Mandatory requirement',
                            'Suggested best practice',
                            'Future requirement'
                        ],
                        correctAnswer: 1,
                        explanation: '"Shall" (and "must") indicate mandatory requirements that must be met for certification to be issued.'
                    },
                    {
                        id: 'q5-3',
                        question: 'Which standard should you consult first when investigating any area?',
                        options: [
                            'The -10 standard',
                            'The -20 standard',
                            'The -00 introduction standard',
                            'The -40 standard'
                        ],
                        correctAnswer: 2,
                        explanation: 'The -00 introduction standards provide context and overview for each area. You should read these first to understand how to apply the specific standards.'
                    },
                    {
                        id: 'q5-4',
                        question: 'Where would you find a complete list of all LVV Standards?',
                        options: [
                            'ORS Chapter 1',
                            'LVV Standard 155-01 (Standards Index)',
                            'LVV Code',
                            'Technical Bulletin Index'
                        ],
                        correctAnswer: 1,
                        explanation: 'LVV Standard 155-01 is the Low Volume Vehicle Standards Index, which contains a complete list of all LVV Standards.'
                    },
                    {
                        id: 'q5-5',
                        question: 'An engine swap vehicle needs assessment. Which standards might apply?',
                        options: [
                            'Only the engine standard (60-10)',
                            'Only the drivetrain standard (65-10)',
                            'Multiple standards: engine, drivetrain, fuel, electrical',
                            'No standards apply to engine swaps'
                        ],
                        correctAnswer: 2,
                        explanation: 'Engine swaps typically affect multiple systems and may require assessment against several standards including engine (60-10), drivetrain (65-10), fuel (70-10), and electrical (80-10).'
                    }
                ]
            }
        }
    ],

    // Get module by ID
    getById(id) {
        return this.modules.find(m => m.id === id);
    },

    // Get module by number
    getByNumber(num) {
        return this.modules.find(m => m.number === num);
    },

    // Get all modules
    getAll() {
        return this.modules.sort((a, b) => a.number - b.number);
    },

    // Check if prerequisites are met
    checkPrerequisites(moduleId, completedModules) {
        const module = this.getById(moduleId);
        if (!module) return false;
        return module.prerequisites.every(prereq => completedModules.includes(prereq));
    },

    // Get next recommended module
    getNextModule(completedModules) {
        return this.modules.find(m =>
            !completedModules.includes(m.id) &&
            this.checkPrerequisites(m.id, completedModules)
        );
    }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LVVModules;
}
