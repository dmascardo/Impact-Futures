import type { FrameworkNode } from '../types';

// This is the single place to update framework wording for Phase 2.
// Add another category or subcategory by following the same object shape.
export const frameworkData: FrameworkNode[] = [
  {
    id: 'wellness',
    title: 'WELLNESS',
    description: 'Description:',
    children: [
      {
        id: 'wellness-promotion',
        title: 'PROMOTION',
        description:
          'Promotion includes community conditions and everyday settings that strengthen health before formal care is needed.',
        points: [
          'Primary Care',
          'Early Childhood - parenting classes; home visiting',
          'Programs (i.e. Social-Emotional Learning)',
          'Activities (Youth, Family and Adult)',
          'Awareness Campaigns',
        ],
      },
      {
        id: 'wellness-prevention',
        title: 'PREVENTION',
        description:
          'Prevention focuses on early programs, services, and school-based supports that reduce risk and connect people earlier.',
        points: [
          'Programs',
          'Early prevention',
          'Suicide prevention',
          'Easy centralized entry points',
          'Injury and violence prevention programs',
          'Services',
          'School-Based Programs and Services',
        ],
      },
      {
        id: 'wellness-belonging',
        title: 'BELONGING',
        description:
          'Belonging emphasizes places, relationships, advocacy, and coalitions that make people feel connected and supported.',
        points: [
          'Drop-In Centers',
          'Community Engagement, Building and Organizing',
          'Advocacy',
          'Collaboratives, Networks & Coalitions',
        ],
      },
    ],
  },
  {
    id: 'support',
    title: 'SUPPORT',
    description: 'Description:',
    children: [
      {
        id: 'support-access-navigation',
        title: 'ACCESS & NAVIGATION',
        description:
          'Access and navigation help people understand where to go, how to enter care, and how to move between resources.',
        points: ['Navigation', 'Access', 'Insurance and affordability', 'Emergency response services', 'App-based and telehealth'],
      },
      {
        id: 'support-roles',
        title: 'SUPPORT ROLES',
        description:
          'Support roles provide practical care coordination, lived-experience support, and system management around the person.',
        points: ['Case & System Management', 'Care & Hope', 'Support groups', 'Navigation teams', 'Intensive support coordination'],
      },
      {
        id: 'support-community-home',
        title: 'COMMUNITY & IN-HOME',
        description:
          'Community and in-home supports bring help into everyday settings, including homes, schools, and neighborhood spaces.',
        points: ['Community', 'Home', 'Residential', 'In-home respite', 'Family support', 'Community-based support'],
      },
      {
        id: 'support-housing',
        title: 'HOUSING',
        description:
          'Housing supports stabilize basic needs through permanent, short-term, and other housing assistance pathways.',
        points: ['Permanent', 'Short-Term', 'Other Housing Supports', 'Supported housing', 'Rental and transition support'],
      },
    ],
  },
  {
    id: 'treatment',
    title: 'TREATMENT',
    description: 'Description:',
    children: [
      {
        id: 'treatment-screenings',
        title: 'SCREENINGS, ASSESSMENTS, EVALUATIONS',
        description:
          'Screenings, assessments, and evaluations clarify needs, risks, strengths, diagnosis, and appropriate level of care.',
        points: ['Screening and assessment tools', 'Diagnostic evaluation', 'Referral recommendations', 'Level-of-care decisions'],
      },
      {
        id: 'treatment-outpatient',
        title: 'OUTPATIENT',
        description:
          'Outpatient care provides therapy, medication support, and treatment planning while people remain connected to daily life.',
        points: ['Therapy', 'Medication management', 'Family treatment', 'Care planning'],
      },
      {
        id: 'treatment-intensive-community',
        title: 'INTENSIVE COMMUNITY-BASED',
        description:
          'Intensive community-based services deliver higher-touch support while preserving family, school, work, and community ties.',
        points: ['Wraparound', 'Assertive community treatment', 'Multisystemic approaches', 'Frequent care coordination'],
      },
      {
        id: 'treatment-iop',
        title: 'INTENSIVE OUTPATIENT TREATMENT',
        description:
          'Intensive outpatient treatment adds structure, frequency, and clinical intensity without requiring residential placement.',
        points: ['Group treatment', 'Skills practice', 'Medication support', 'Step-up and step-down care'],
      },
      {
        id: 'treatment-residential',
        title: 'RESIDENTIAL',
        description:
          'Residential services provide structured treatment and supervision when home and community supports are not sufficient.',
        points: ['24-hour structure', 'Therapeutic milieu', 'Family engagement', 'Transition planning'],
      },
      {
        id: 'treatment-inpatient',
        title: 'INPATIENT',
        description:
          'Inpatient care supports acute stabilization, safety, and discharge planning during the highest levels of clinical need.',
        points: ['Acute stabilization', 'Safety planning', 'Medication evaluation', 'Discharge linkage'],
      },
    ],
  },
  {
    id: 'critical',
    title: 'CRITICAL',
    description: 'Description:',
    children: [
      {
        id: 'critical-detox',
        title: 'DETOX',
        description:
          'Detox supports safe withdrawal management and connects people to next-step substance use treatment and recovery supports.',
        points: ['Primary Care', 'Withdrawal management', 'Medical monitoring', 'Recovery linkage'],
      },
      {
        id: 'critical-crisis',
        title: 'CRISIS',
        description:
          'Crisis response includes someone to contact, someone to respond, and a safe place for help during urgent behavioral health needs.',
        points: ['Someone to Contact', 'Someone to Respond', 'A Safe Place for Help', 'Mobile response', 'Post-crisis follow-up'],
      },
      {
        id: 'critical-justice',
        title: 'JUSTICE-INVOLVED',
        description:
          'Justice-involved supports connect behavioral health care with diversion, re-entry, advocacy, and community safety efforts.',
        points: ['Drop-In Centers', 'Community Engagement, Building and Organizing', 'Advocacy', 'Collaboratives, Networks & Coalitions'],
      },
    ],
  },
  {
    id: 'quality',
    title: 'QUALITY',
    description: 'Description:',
    children: [
      {
        id: 'quality-administration',
        title: 'ADMINISTRATION',
        description:
          'Administration includes public administration, managed care, accreditation, and policy structures that shape the system.',
        points: ['Public Administration', 'Payers and Managed Care', 'Regulations & Accreditation'],
      },
      {
        id: 'quality-workforce',
        title: 'WORKFORCE',
        description:
          'Workforce includes recruitment, licensing, training, supervision, retention, and credentials needed to sustain care.',
        points: ['Recruitment', 'Training', 'Licensing & Credentialing Boards', 'Supervision', 'Retention'],
      },
      {
        id: 'quality-assurance',
        title: 'ASSURANCE & ACCOUNTABILITY',
        description:
          'Assurance and accountability use systematic, programmatic, and shared review to improve performance and outcomes.',
        points: ['Systematic', 'Programmatic', 'Both', 'System evaluation', 'Quality service review'],
      },
      {
        id: 'quality-funding',
        title: 'FUNDING MECHANISM',
        description:
          'Funding mechanisms include public funding, grants, individual payment mechanisms, and safety net coverage programs.',
        points: ['Public Funding', 'Grants', 'Individual Payment Mechanisms', 'Safety Net & Coverage Gap Programs'],
      },
    ],
  },
];
