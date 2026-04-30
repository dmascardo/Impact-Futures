import type { FrameworkNode } from '../types';

interface DetailPanelProps {
  category: FrameworkNode;
  onClose: () => void;
}

const preventionProgramGroups = [
  {
    title: 'Early prevention',
    points: ['ACEs prevention', 'Mental Health 1st Aid', 'Digital literacy programs'],
  },
  {
    title: 'Substance Use',
    points: [
      'SPF Rx - provide resources to help prevent and address prescription drug misuse',
      'SBIRT (Screening, Brief Intervention, and Referral to Treatment) - early intervention tool designed to identify and support individuals at risk for substance use problems',
      'Alcohol misuse prevention programs',
      'Nicotine use prevention',
      'Medical Cannabis Health Education',
      'School-Based Prevention and Intervention Counseling Department',
    ],
  },
  {
    title: 'Suicide prevention',
    points: ['QPR (Question, Persuade, Refer)', 'Zero Suicide'],
  },
  {
    title: 'Injury and Violence prevention programs',
    points: ['Gun violence', 'Domestic violence', 'Sexual assault'],
  },
];

function DottedPanel({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border-2 border-neutral-500/70 bg-white/65 shadow-[0_1px_0_rgba(0,0,0,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}

function SupportItem({
  title,
  children,
  className = '',
  titleClassName = '',
}: {
  title: string;
  children?: React.ReactNode;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <DottedPanel className={`px-4 py-3 text-left ${className}`}>
      <h5 className={`font-semibold leading-tight ${titleClassName}`}>{title}</h5>
      {children ? <div className="mt-2 text-[13px] leading-snug">{children}</div> : null}
    </DottedPanel>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function SupportSection({
  title,
  children,
  className = '',
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`pt-5 ${className}`}>
      <h3 className="text-center text-5xl font-black leading-none tracking-wide sm:text-7xl">
        {title}
      </h3>
      <div className="mt-7">{children}</div>
    </section>
  );
}

function AccessNavigationLayout({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <DottedPanel className="p-4 sm:p-6">
        <h4 className="text-center text-2xl font-black leading-none sm:text-3xl">Navigation</h4>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <SupportItem title="Workforce Culture" className={compact ? 'min-h-[128px]' : 'min-h-[210px]'}>
            <p>
              Friendly and skilled staff that are ready to help people feel comfortable and get
              the care they need.
            </p>
            <BulletList
              items={[
                'Quality improvement policies, practices and procedures',
                'Cultural humility policies and practices',
              ]}
            />
          </SupportItem>
          <SupportItem title="Easy Centralized Entry Points" className={compact ? 'min-h-[128px]' : 'min-h-[210px]'}>
            <p>
              Clear and simple ways for people to find and enter the system and get help quickly
              (i.e. resource centers).
            </p>
            <BulletList items={['COA first responder receiving area']} />
          </SupportItem>
          <SupportItem title="Communication" className={compact ? 'min-h-[128px]' : 'min-h-[210px]'}>
            <p>Facilitating reliability between workforce and clients</p>
          </SupportItem>
          <SupportItem title="Transportation" className={compact ? 'min-h-[128px]' : 'min-h-[210px]'}>
            <p>
              Helping people get to and from their appointments or services, especially if they
              don't have their own way to travel.
            </p>
            <BulletList
              items={[
                'Non-medical transportation: Takes you to and from local community services, activities, and resources.',
              ]}
            />
          </SupportItem>
        </div>
      </DottedPanel>

      <DottedPanel className="p-4 sm:p-6">
        <h4 className="text-center text-2xl font-black leading-none sm:text-3xl">Access</h4>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <SupportItem title="Insurance and Affordability" className={compact ? 'min-h-[128px]' : 'min-h-[210px]'}>
            <p>Helping people understand and access insurance for behavioral health services.</p>
            <BulletList
              items={[
                'Insurance companies',
                'Network adequacy',
                'Functional referral systems',
                'Uninsured pathways',
              ]}
            />
          </SupportItem>
          <SupportItem title="Emergency Response Services" className={compact ? 'min-h-[128px]' : 'min-h-[210px]'}>
            <p>An electronic device that helps you get assistance in an emergency.</p>
          </SupportItem>
          <SupportItem title="App-Based and Telehealth" className={compact ? 'min-h-[128px]' : 'min-h-[210px]'}>
            <p>
              Remote support (phone/video) to make it easier to get care without leaving home
              (i.e. peer recovery groups, sobriety tracking, primary care, behavioral health care)
            </p>
          </SupportItem>
          <SupportItem title="Provider and Pharmacy availability" className={compact ? 'min-h-[128px]' : 'min-h-[210px]'} />
        </div>
      </DottedPanel>
    </div>
  );
}

function SupportRolesLayout({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <DottedPanel className="p-4 sm:p-6">
        <h4 className="text-center text-2xl font-black leading-none sm:text-3xl">
          Case &amp; System Management
        </h4>
        <SupportItem title="" className={`mt-6 ${compact ? 'min-h-[150px]' : 'min-h-[320px]'}`}>
          <BulletList
            items={[
              'Case Managers: General Case Management - Connects to services and systems. Intensive Case Management - Hands-on support for complex needs.',
              'CHWs / Community Health Reps / Promotoras - Support accessing services and staying connected.',
              'Community Health Reps - tribal-based CHWs',
              'Promotoras - culturally rooted outreach in specific communities.',
              'Community Support Workers (CSWs) - Assist with service connection and engagement, often for those in behavioral health or justice system.',
              'Additional titles: Care Coordinators, Ambassadors, Navigators, Certified Wraparound Facilitator (CWF)',
            ]}
          />
        </SupportItem>
        <div className="mt-5 grid gap-5 sm:grid-cols-[1.6fr_1fr]">
          <SupportItem title="Navigation Teams" className={compact ? 'min-h-[92px]' : 'min-h-[130px]'} titleClassName="text-2xl font-normal">
            <BulletList
              items={[
                'Connect to services across health, housing, and justice (i.e. High Fidelity Wrap Around)',
              ]}
            />
          </SupportItem>
          <SupportItem title="Drivers" className={compact ? 'min-h-[92px]' : 'min-h-[130px]'} titleClassName="text-2xl font-normal">
            <BulletList items={['to provide transportation for behavioral health and other social services.']} />
          </SupportItem>
        </div>
      </DottedPanel>

      <DottedPanel className="p-4 sm:p-6">
        <h4 className="text-center text-2xl font-black leading-none sm:text-3xl">Care &amp; Hope</h4>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <SupportItem title="Peer Support" className={compact ? 'min-h-[130px]' : 'min-h-[215px]'}>
            <BulletList
              items={[
                'Support from lived experience offering hope, guidance, and connection at all recovery stages.',
                'Certified Peer (CPSW); Family Peer (CFPSW); Youth Peer Support Specialist (CYPSS)',
                'CCBHC Peer Family Support',
              ]}
            />
          </SupportItem>
          <SupportItem title="Personal Care Assistants / Therapeutic behavioral aide services" className={compact ? 'min-h-[130px]' : 'min-h-[215px]'}>
            <p>
              Helps with daily living tasks (bathing, dressing, cooking, cleaning, shopping) so
              individuals can remain safe and independent at home; hands-on, practical assistance
              with everyday activities.
            </p>
          </SupportItem>
          <SupportItem title="Support Groups" className={compact ? 'min-h-[130px]' : 'min-h-[215px]'}>
            <p>Peer-led groups like AA, NA, Al-Anon offering mutual aid and community.</p>
          </SupportItem>
          <SupportItem title="Behavior Support Consultation" className={compact ? 'min-h-[130px]' : 'min-h-[215px]'}>
            <p>Training/support for those caring for those with behavioral health needs.</p>
          </SupportItem>
        </div>
      </DottedPanel>
    </div>
  );
}

function CommunityHomeLayout({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <DottedPanel className="p-4 sm:p-6">
        <h4 className="text-center text-2xl font-black leading-none">Community</h4>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <SupportItem title="Mutual Aid" className={compact ? 'min-h-[130px]' : 'min-h-[230px]'}>
            <p>
              A community organized, voluntary, resource/skill sharing and support network to meet
              immediate needs and build community (e.g. emotional support/check-ins; peer-led
              crisis support; rent, utilities, or medications sharing)
            </p>
          </SupportItem>
          <SupportItem title="Street Outreach" className={compact ? 'min-h-[130px]' : 'min-h-[230px]'}>
            <p>
              Engagement and relationship-building with unhoused to build trust, assess needs, and
              connect to services and resources (e.g. shelter, food, identification documents,
              benefits enrollment, healthcare).
            </p>
          </SupportItem>
          <SupportItem title="Skills-Based / Educational Day Programs" className={compact ? 'min-h-[150px]' : 'min-h-[245px]'}>
            <div className="grid gap-3 sm:grid-cols-2">
              <p>Adult Day Health - Open day programs with activities such as making art, exercising, cognitive stimulation, or visiting with others.</p>
              <p>Day Habilitation - Skill driven supports in ADL and community participation for people with disabilities; long-term/flexible support.</p>
              <p>Education Supports - Applications, GED, enrollment, tutoring, study skills</p>
              <p>Employment Supports - Assistance with job training or finding employment.</p>
            </div>
          </SupportItem>
          <SupportItem title="Healing-Based" className={compact ? 'min-h-[150px]' : 'min-h-[245px]'}>
            <div className="grid gap-3 sm:grid-cols-2">
              <p>DV Supports - Domestic, Dating and Sexual Violence Supports (i.e. SANE nurses).</p>
              <p>Nutritional Counseling - Eating plans/support for specific health conditions.</p>
              <p>Specialized Therapies - Acupuncture, Biofeedback, Chiropractic, Cognitive Rehab Therapy, Hypnotherapy, Massage Therapy, and Naturopathy.</p>
              <p>Skilled Maintenance Therapies - Occupational therapy, physical therapy, speech and language therapy.</p>
            </div>
            <p className="mt-3">Harm Reduction - supporting active SUD; overdose and syringe re-use prevention, mobile hygiene units, overdose prevention centers, medical supervision, and linkage to treatment.</p>
          </SupportItem>
        </div>
      </DottedPanel>

      <DottedPanel className="p-4 sm:p-6">
        <h4 className="text-center text-2xl font-black leading-none">Home</h4>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <DottedPanel className="p-4">
            <h5 className="text-center text-xl font-black">In-Home Help</h5>
            <div className="mt-5 grid gap-5">
              {[
                'Home Delivered Meals',
                'Personal Care: Helps with activities of daily living (bathing, dressing, cooking, and shopping). A family member may be able to provide this service.',
                'Private-Duty Nursing for Adults: Health care provided by an RN or LPN.',
                'Respite/Nursing Respite: Gives the main caregiver a break to reduce stress or provide coverage in case of illness or family emergency.',
                'Home-Based Behavioral Health (Home Health Model): Behavioral health services delivered in a person’s home to improve access, continuity, and stabilization for individuals who face barriers to clinic-based care.',
              ].map((item) => (
                <SupportItem key={item} title={item} className={compact ? 'min-h-[58px]' : 'min-h-[92px]'} titleClassName="text-base font-normal" />
              ))}
            </div>
          </DottedPanel>
          <DottedPanel className="p-4">
            <h5 className="text-center text-xl font-black">Environmental</h5>
            <div className="mt-5 grid gap-6">
              <SupportItem title="Assisted Living" titleClassName="text-2xl font-normal">
                <BulletList items={['Residential service offering individualized services.']} />
              </SupportItem>
              <SupportItem title="Transition Services" titleClassName="text-2xl font-normal">
                <BulletList items={['One-time set-up expenses to move from a nursing/behavioral health facility to an independent living arrangement.']} />
              </SupportItem>
              <SupportItem title="Home Modifications" titleClassName="text-2xl font-normal">
                <BulletList items={['Home changes to increase safety and independence.']} />
              </SupportItem>
            </div>
          </DottedPanel>
        </div>
      </DottedPanel>
    </div>
  );
}

function HousingLayout({ compact = false }: { compact?: boolean }) {
  const permanent = [
    ['Affordable Housing', 'Subsidized housing for low-income individuals with behavioral health needs.'],
    ['Sober Living', 'Substance-free housing providing a safe environment for recovery, focusing on sobriety.'],
    ['Disability Group Homes', 'Permanent housing for individuals with long-term disabilities, including behavioral health needs.'],
    ['Recovery Housing', 'Long-term housing with comprehensive support services for individuals in recovery from substance use and mental health conditions.'],
    ['Supportive Housing', 'Long-term housing with some support services for individuals maintaining independence.'],
    ['Licensed adult and senior care settings', 'Provide housing, supervision, care and meals to individuals who are aging, disabled or seriously mentally ill.'],
    ['Permanent Supportive Housing (PSH)', 'Permanent housing with intensive support for individuals with severe behavioral health needs.'],
  ];
  const shortTerm = [
    ['Emergency Housing / Temporary Housing', 'Short-term shelter or hotel vouchers for individuals in immediate need.'],
    ['Transitional Housing', 'Housing (6-18 months) helping individuals transition to permanent housing with supportive services.'],
    ['Group Homes', 'Short-term housing for individuals transitioning from institutional care.'],
    ['Short-Term Post Hospitalization Housing', 'Temporary housing for individuals leaving inpatient care with ongoing support.'],
    ['Recuperative Care / Medical Respite', 'Short-term care for individuals recovering from medical issues who no longer need hospitalization.'],
  ];
  const other = [
    ['Navigation Services', 'Help identifying and overcoming barriers to housing and finding appropriate options.'],
    ['Cost-Sharing Assistance', 'Financial support for one-time housing expenses like deposits and rent.'],
    ['Tenant Rights Support', 'Education and dispute resolution to help tenants maintain stable housing.'],
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {[
        ['Permanent', permanent],
        ['Short-Term', shortTerm],
        ['Other Housing Supports', other],
      ].map(([title, items]) => (
        <DottedPanel key={title as string} className="p-4 sm:p-6">
          <h4 className="text-center text-2xl font-black leading-none sm:text-3xl">{title as string}</h4>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {(items as string[][]).map(([itemTitle, body]) => (
              <SupportItem
                key={itemTitle}
                title={itemTitle}
                className={`${compact ? 'min-h-[88px]' : 'min-h-[102px]'} ${
                  title === 'Other Housing Supports' ? 'sm:col-span-2' : ''
                }`}
                titleClassName={itemTitle.includes('Supportive') ? 'text-green-700' : ''}
              >
                <BulletList items={[body]} />
              </SupportItem>
            ))}
          </div>
        </DottedPanel>
      ))}
    </div>
  );
}

function SupportPanel({ onClose }: DetailPanelProps) {
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/55 p-3 backdrop-blur-sm sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="support-detail-title"
    >
      <section
        className="relative max-h-[92vh] w-full max-w-[96rem] animate-zoomIn overflow-y-auto rounded-xl border-2 border-sky-500/60 px-4 pb-8 pt-5 text-black shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:px-8"
        style={{
          backgroundColor: '#e0f2fe',
          backgroundImage:
            'radial-gradient(circle, rgba(14, 116, 144, 0.24) 1.25px, transparent 1.25px), linear-gradient(135deg, rgba(240, 249, 255, 0.95), rgba(207, 250, 254, 0.92))',
          backgroundSize: '16px 16px, auto',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full border-2 border-sky-700 bg-white/80 px-3 py-1 text-xs font-black uppercase tracking-wide transition hover:bg-sky-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-950"
        >
          Close
        </button>

        <header className="mx-auto max-w-2xl text-center">
          <h2
            id="support-detail-title"
            className="text-4xl font-black leading-none tracking-wide sm:text-5xl"
          >
            SUPPORT
          </h2>
          <p className="mt-4 text-2xl font-medium leading-none">Description:</p>
        </header>

        <div className="mt-8 grid gap-7 lg:grid-cols-2">
          <DottedPanel className="bg-cyan-50/55 p-4">
            <h3 className="text-center text-2xl font-black">ACCESS &amp; NAVIGATION</h3>
            <div className="mt-4 scale-[0.92] origin-top">
              <AccessNavigationLayout compact />
            </div>
          </DottedPanel>
          <DottedPanel className="bg-cyan-50/55 p-4">
            <h3 className="text-center text-2xl font-black">SUPPORT ROLES</h3>
            <div className="mt-4 scale-[0.92] origin-top">
              <SupportRolesLayout compact />
            </div>
          </DottedPanel>
          <DottedPanel className="bg-cyan-50/55 p-4">
            <h3 className="text-center text-2xl font-black">COMMUNITY &amp; IN-HOME</h3>
            <div className="mt-4 scale-[0.9] origin-top">
              <CommunityHomeLayout compact />
            </div>
          </DottedPanel>
          <DottedPanel className="bg-cyan-50/55 p-4">
            <h3 className="text-center text-2xl font-black">HOUSING</h3>
            <div className="mt-4 scale-[0.92] origin-top">
              <HousingLayout compact />
            </div>
          </DottedPanel>
        </div>

        <div className="mt-12 grid gap-14">
          <SupportSection title="ACCESS & NAVIGATION">
            <AccessNavigationLayout />
          </SupportSection>
          <SupportSection title="SUPPORT ROLES">
            <SupportRolesLayout />
          </SupportSection>
          <SupportSection title="COMMUNITY & IN-HOME">
            <CommunityHomeLayout />
          </SupportSection>
          <SupportSection title="HOUSING">
            <HousingLayout />
          </SupportSection>
        </div>
      </section>
    </div>
  );
}

const treatmentScreeningCards = [
  {
    title: 'System-Level Considerations:',
    points: [
      'Essential to treatment access across Outpatient, IOP, Residential and Inpatient',
      'Frequency: initial, annual, triggered',
      'Standardize required screenings/assessments and what must be included in treatment plans for agencies to adopt system-wide',
      'Trauma-Informed Portability: reduce repetitive stigmatization, collect info once and let it follow the person through the system, reduce burden/re-traumatization, maintain quality',
    ],
  },
  {
    title: 'Screenings - Brief, standardized identification of potential behavioral health concerns',
    points: [
      'Purpose: Determine if further assessment is needed',
      'Who: Various providers with training (primary care, schools, CHWs, etc.)',
      'Examples: PHQ-9, GAD-7, AUDIT, CRAFFT, ACEs screening, SBIRT',
    ],
  },
  {
    title:
      "Assessments and Treatment Planning - Comprehensive gathering of information to understand the person's needs and determine appropriate treatment",
    points: [
      'Purpose: Diagnostic clarity, treatment planning, level of care determination',
      'Who: Licensed behavioral health clinicians',
      'Examples: Biopsychosocial assessment, psychiatric evaluation, substance use disorder assessment (ASAM), CANS, clinical interviews',
    ],
  },
  {
    title: 'Evaluations - Specialized, in-depth testing and analysis requiring specific expertise',
    points: [
      'Purpose: Complex diagnostic questions, cognitive/developmental functioning, forensic determinations, disability assessment',
      'Who: Specialized providers (psychologists, neuropsychologists, developmental specialists) covered by specialty contractors',
      'Examples: Neuropsychological evaluation, psychological testing batteries, psychoeducational evaluation, forensic evaluation',
    ],
  },
];

function TreatmentScreeningsLayout({ compact = false }: { compact?: boolean }) {
  return (
    <DottedPanel className="p-4 sm:p-6">
      <h3
        className={`text-center font-black leading-tight tracking-wide ${
          compact ? 'text-2xl' : 'text-5xl sm:text-7xl'
        }`}
      >
        SCREENINGS, ASSESSMENTS, EVALUATIONS
      </h3>

      <div className={`mt-6 grid gap-6 md:grid-cols-2 ${compact ? 'text-[11px]' : ''}`}>
        {treatmentScreeningCards.map((card) => (
          <DottedPanel
            key={card.title}
            className={`${compact ? 'min-h-[116px] px-3 py-2' : 'min-h-[210px] px-6 py-5'}`}
          >
            <h4
              className={`text-center font-black leading-tight ${
                compact ? 'text-[10px]' : 'text-base'
              }`}
            >
              {card.title}
            </h4>
            <ul
              className={`mt-4 list-disc text-left leading-snug ${
                compact ? 'pl-4 text-[10px]' : 'pl-6 text-base'
              }`}
            >
              {card.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </DottedPanel>
        ))}
      </div>
    </DottedPanel>
  );
}

function TreatmentPanel({ onClose }: DetailPanelProps) {
  const emptyAreas = [
    'OUTPATIENT',
    'INTENSIVE COMMUNITY-BASED',
    'INTENSIVE OUTPATIENT TREATMENT',
    'RESIDENTIAL',
    'INPATIENT',
  ];

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/55 p-3 backdrop-blur-sm sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="treatment-detail-title"
    >
      <section
        className="relative max-h-[92vh] w-full max-w-[96rem] animate-zoomIn overflow-y-auto rounded-xl border-2 border-orange-500/60 px-4 pb-8 pt-5 text-black shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:px-8"
        style={{
          backgroundColor: '#ffedd5',
          backgroundImage:
            'radial-gradient(circle, rgba(194, 65, 12, 0.22) 1.25px, transparent 1.25px), linear-gradient(135deg, rgba(255, 251, 235, 0.96), rgba(254, 215, 170, 0.9))',
          backgroundSize: '16px 16px, auto',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full border-2 border-orange-700 bg-white/80 px-3 py-1 text-xs font-black uppercase tracking-wide transition hover:bg-orange-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-950"
        >
          Close
        </button>

        <header className="mx-auto max-w-2xl text-center">
          <h2
            id="treatment-detail-title"
            className="text-4xl font-black leading-none tracking-wide sm:text-5xl"
          >
            TREATMENT
          </h2>
          <p className="mt-4 text-2xl font-medium leading-none">Description:</p>
        </header>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <TreatmentScreeningsLayout compact />

          {emptyAreas.map((area) => (
            <DottedPanel
              key={area}
              className="flex min-h-[350px] items-start justify-center px-4 py-5 text-center"
            >
              <h3 className="max-w-sm text-3xl font-black leading-tight tracking-wide">
                {area}
              </h3>
            </DottedPanel>
          ))}
        </div>
      </section>
    </div>
  );
}

function CriticalPanel({ category, onClose }: DetailPanelProps) {
  const detox = category.children?.find((child) => child.id === 'critical-detox');
  const crisis = category.children?.find((child) => child.id === 'critical-crisis');
  const justice = category.children?.find((child) => child.id === 'critical-justice');

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/55 p-3 backdrop-blur-sm sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="critical-detail-title"
    >
      <section
        className="relative max-h-[92vh] w-full max-w-7xl animate-zoomIn overflow-y-auto rounded-xl border-2 border-rose-500/60 px-4 pb-6 pt-5 text-black shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:px-9 sm:pb-9"
        style={{
          backgroundColor: '#ffe4e6',
          backgroundImage:
            'radial-gradient(circle, rgba(190, 18, 60, 0.22) 1.25px, transparent 1.25px), linear-gradient(135deg, rgba(255, 241, 242, 0.96), rgba(254, 205, 211, 0.88))',
          backgroundSize: '16px 16px, auto',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full border-2 border-neutral-600 bg-white px-3 py-1 text-xs font-black uppercase tracking-wide transition hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Close
        </button>

        <header className="mx-auto max-w-2xl text-center">
          <h2
            id="critical-detail-title"
            className="text-4xl font-black leading-none tracking-wide sm:text-5xl"
          >
            CRITICAL
          </h2>
          <p className="mt-4 text-2xl font-medium leading-none">Description:</p>
        </header>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr_1fr]">
          <DottedPanel className="p-4 sm:p-5">
            <h3 className="text-center text-3xl font-black leading-none">DETOX</h3>
            <div className="mt-8 grid gap-5">
              {(detox?.points ?? []).map((point) => (
                <DottedPanel
                  key={point}
                  className="flex min-h-[70px] items-center justify-center px-4 py-3 text-center text-base leading-tight"
                >
                  {point}
                </DottedPanel>
              ))}
            </div>
          </DottedPanel>

          <DottedPanel className="p-4 sm:p-5">
            <h3 className="text-center text-3xl font-black leading-none">CRISIS</h3>
            <div className="mt-4 grid gap-7">
              {(crisis?.points ?? []).map((point) => (
                <DottedPanel
                  key={point}
                  className="flex min-h-[125px] items-start justify-center px-4 py-4 text-center text-base leading-tight"
                >
                  {point}
                </DottedPanel>
              ))}
            </div>
          </DottedPanel>

          <DottedPanel className="p-4 sm:p-5">
            <h3 className="text-center text-3xl font-black leading-none">
              JUSTICE-INVOLVED
            </h3>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              {(justice?.points ?? []).map((point) => (
                <DottedPanel
                  key={point}
                  className="flex min-h-[180px] items-start justify-center px-4 py-4 text-center text-base leading-tight sm:min-h-[205px]"
                >
                  {point}
                </DottedPanel>
              ))}
            </div>
          </DottedPanel>
        </div>
      </section>
    </div>
  );
}

function QualityCard({
  title,
  children,
  className = '',
}: {
  title: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <DottedPanel className={`px-3 py-2 text-left ${className}`}>
      <h5 className="text-center text-sm font-black leading-tight">{title}</h5>
      {children ? <div className="mt-3 text-[11px] leading-tight">{children}</div> : null}
    </DottedPanel>
  );
}

function QualityPanel({ onClose }: DetailPanelProps) {
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/55 p-3 backdrop-blur-sm sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quality-detail-title"
    >
      <section
        className="relative max-h-[92vh] w-full max-w-[96rem] animate-zoomIn overflow-y-auto rounded-xl border-2 border-violet-500/60 px-4 pb-6 pt-5 text-black shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:px-8 sm:pb-8"
        style={{
          backgroundColor: '#ede9fe',
          backgroundImage:
            'radial-gradient(circle, rgba(109, 40, 217, 0.22) 1.25px, transparent 1.25px), linear-gradient(135deg, rgba(245, 243, 255, 0.96), rgba(245, 208, 254, 0.82))',
          backgroundSize: '16px 16px, auto',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full border-2 border-neutral-600 bg-white px-3 py-1 text-xs font-black uppercase tracking-wide transition hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Close
        </button>

        <header className="mx-auto max-w-2xl text-center">
          <h2
            id="quality-detail-title"
            className="text-4xl font-black leading-none tracking-wide sm:text-5xl"
          >
            QUALITY
          </h2>
          <p className="mt-4 text-2xl font-medium leading-none">Description:</p>
        </header>

        <div className="mt-9 grid gap-8 xl:grid-cols-2">
          <DottedPanel className="p-4 sm:p-5">
            <h3 className="text-center text-3xl font-black leading-none">ADMINISTRATION</h3>
            <div className="mt-5 grid gap-5 md:grid-cols-3">
              <DottedPanel className="p-3">
                <h4 className="text-center text-base font-black">Public Administration</h4>
                <div className="mt-4 grid gap-3">
                  <QualityCard title="">
                    <BulletList
                      items={[
                        'System-wide, interagency planning and collaboration structure including of Tribes, Nations and Pueblos',
                      ]}
                    />
                  </QualityCard>
                  <QualityCard title="">
                    <BulletList items={['Resource allocation and service expansion (uninsured pathways)']} />
                  </QualityCard>
                  <QualityCard title="Tools">
                    <BulletList
                      items={[
                        'Data systems (compliant data sharing, dashboards)',
                        'Universal, tiered access Release of Information, demographic information, assessments, treatment and recovery plan, progress toward goals in the plan, case management and peer support notes, and, for frequent customers, they should be enrolled in the VIP program as described below',
                        'Client referral and tracking system',
                        'Technical assistance to providers',
                      ]}
                    />
                  </QualityCard>
                </div>
              </DottedPanel>

              <DottedPanel className="p-3">
                <h4 className="text-center text-base font-black">Payers and Managed Care</h4>
                <div className="mt-4 grid gap-5">
                  <QualityCard title="">
                    <BulletList items={['Payment administration and coverage decisions (prior authorization, benefit determinations)']} />
                  </QualityCard>
                  <QualityCard title="">
                    <BulletList items={['Provider management (credentialing, network management, contracting)']} />
                  </QualityCard>
                  <QualityCard title="">
                    <BulletList items={['Quality oversight (utilization review, reporting, data systems, quality metrics)']} />
                  </QualityCard>
                </div>
              </DottedPanel>

              <DottedPanel className="min-h-[270px] p-3">
                <h4 className="text-center text-base font-black">
                  Regulations &amp; Accreditation
                </h4>
              </DottedPanel>
            </div>
          </DottedPanel>

          <DottedPanel className="p-4 sm:p-5">
            <h3 className="text-center text-3xl font-black leading-none">WORKFORCE</h3>
            <div className="mt-6 grid gap-5 md:grid-cols-[1fr_1fr]">
              <div className="grid gap-5">
                <QualityCard title="Recruitment" className="min-h-[38px]" />
                <DottedPanel className="p-4">
                  <h4 className="text-center text-base font-black">Training</h4>
                  <div className="mt-4 grid gap-3">
                    {['CEUs', 'Certification', 'Higher education / Universities', 'Internships', 'Supervision'].map(
                      (item) => (
                        <QualityCard key={item} title={item} className="min-h-[30px]" />
                      ),
                    )}
                  </div>
                </DottedPanel>
              </div>
              <DottedPanel className="p-4">
                <h4 className="text-center text-base font-black">
                  Licensing &amp; Credentialing Boards
                </h4>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    'Counseling and Therapy Practice Board',
                    'Credentialing Board for Behavioral Health Professionals',
                    'Board of Social Work Examiners',
                    'Board of Nursing',
                    'Medical board',
                    'State Board of Psychologist Examiners',
                  ].map((item) => (
                    <QualityCard key={item} title={item} className="min-h-[48px]" />
                  ))}
                </div>
              </DottedPanel>
            </div>
            <QualityCard title="Retention" className="mt-5 min-h-[38px]" />
          </DottedPanel>

          <DottedPanel className="p-4 sm:p-5">
            <h3 className="text-center text-3xl font-black leading-none">
              ASSURANCE &amp; ACCOUNTABILITY
            </h3>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <DottedPanel className="p-3">
                <h4 className="text-center text-base font-black">Systematic</h4>
                <div className="mt-4 grid gap-3">
                  <QualityCard title="Legislature / Executive Branch" />
                  <QualityCard title="System Evaluation" />
                  <QualityCard title="">
                    <p>
                      Institution-Based Advisory-Boards and Accountability Groups (Government;
                      Health insurance companies; Hospitals (e.g. Carrie Tingley Hospital Advisory
                      Board); Service providers and nonprofits; Law enforcement; Universities)
                    </p>
                  </QualityCard>
                  <QualityCard title="">
                    <p>
                      Behavioral Health Membership Associations (e.g. National Association of
                      Social Workers, National Awareness of Mental Illness, NM Beh. Health Provider
                      Association, Southwest Independent Practice Association)
                    </p>
                  </QualityCard>
                </div>
              </DottedPanel>

              <DottedPanel className="p-3">
                <h4 className="text-center text-base font-black">Programmatic</h4>
                <div className="mt-4 grid gap-3">
                  <QualityCard title="Program Evaluation" />
                  <QualityCard title="Ombudsman / Liaison" />
                  <QualityCard title="">
                    <p>
                      Quality Service Review - QSR review of practice, results, and working
                      conditions used to look at individuals who are currently receiving agency
                      services and identify both strengths and areas for improvement in the agency's
                      practice.
                    </p>
                  </QualityCard>
                  <QualityCard title="">
                    <p>
                      Local Quality Assurance Teams - The Quality Management Bureau (QMB) works in
                      close coordination with other divisions of the Healthcare Authority and with
                      other state agencies to ensure accountability and compliance of community based
                      waiver providers with state and federal regulations, contractual or program
                      requirements, and quality standards.
                    </p>
                  </QualityCard>
                </div>
              </DottedPanel>

              <DottedPanel className="p-3">
                <h4 className="text-center text-base font-black">Both</h4>
                <div className="mt-4 grid gap-3">
                  <QualityCard title="System-wide measures" />
                  <QualityCard title="Epidemiology" />
                </div>
              </DottedPanel>
            </div>
          </DottedPanel>

          <DottedPanel className="p-4 sm:p-5">
            <h3 className="text-center text-3xl font-black leading-none">FUNDING MECHANISM</h3>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <DottedPanel className="p-3">
                <h4 className="text-center text-base font-black">Public Funding</h4>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <QualityCard title="Federal">
                    <BulletList
                      items={[
                        'Medicaid (federal/state matching funds); Medicare',
                        'Federal block grants (Substance Abuse Prevention and Treatment, Community Mental Health Services); competitive grants',
                        'Waivers (Federal funding mechanisms that unlock enhanced federal match): Developmental Disability, Medically Fragile, Mi Via (self-directed services)',
                      ]}
                    />
                  </QualityCard>
                  <QualityCard title="State/Local">
                    <BulletList
                      items={[
                        'State general fund appropriations; State-specific coverage programs (e.g. Senate Bill 3)',
                        'County appropriations; Municipality appropriations; Local behavioral health collaboratives funding',
                      ]}
                    />
                  </QualityCard>
                </div>
              </DottedPanel>

              <DottedPanel className="p-3">
                <h4 className="text-center text-base font-black">Grants</h4>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <QualityCard title="Foundation grants" />
                  <QualityCard title="">
                    <BulletList
                      items={[
                        'Opioid settlement funds (multi-year settlement payments; restricted for opioid-related services)',
                      ]}
                    />
                  </QualityCard>
                  <QualityCard title="">
                    <BulletList
                      items={[
                        'Philanthropic contributions; Private donations; Community fundraising',
                      ]}
                    />
                  </QualityCard>
                </div>
              </DottedPanel>

              <DottedPanel className="p-3">
                <h4 className="text-center text-base font-black">
                  Individual Payment Mechanisms
                </h4>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <QualityCard title="Commercial insurance">
                    <p>(employer-sponsored, individual marketplace)</p>
                  </QualityCard>
                  <QualityCard title="Uninsured">
                    <BulletList
                      items={[
                        'Employee Assistance Programs (EAP) - Short-term help for employees needing counseling and support for behavioral health issues.',
                        'Private payout-of-pocket',
                      ]}
                    />
                  </QualityCard>
                </div>
              </DottedPanel>

              <DottedPanel className="p-3">
                <h4 className="text-center text-base font-black">
                  Safety Net &amp; Coverage Gap Programs
                </h4>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    'Public payer / Charity care programs (e.g. UNM Care Charity Care Fund, SB3, State General Funds from CYFD and BHSD)',
                    'State insurance pools for uninsured populations (NM Insurance Pool)',
                    'Hospital-based financial assistance programs',
                    'Sliding scale fee programs',
                  ].map((item) => (
                    <QualityCard key={item} title={item} className="min-h-[42px]" />
                  ))}
                </div>
              </DottedPanel>
            </div>
          </DottedPanel>
        </div>
      </section>
    </div>
  );
}

function WellnessPanel({ category, onClose }: DetailPanelProps) {
  const promotion = category.children?.find((child) => child.id === 'wellness-promotion');
  const belonging = category.children?.find((child) => child.id === 'wellness-belonging');

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/55 p-3 backdrop-blur-sm sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wellness-detail-title"
    >
      <section
        className="relative max-h-[92vh] w-full max-w-7xl animate-zoomIn overflow-y-auto rounded-xl border-2 border-emerald-500/60 px-4 pb-6 pt-5 text-black shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:px-9 sm:pb-9"
        style={{
          backgroundColor: '#d1fae5',
          backgroundImage:
            'radial-gradient(circle, rgba(4, 120, 87, 0.22) 1.25px, transparent 1.25px), linear-gradient(135deg, rgba(236, 253, 245, 0.96), rgba(217, 249, 157, 0.82))',
          backgroundSize: '16px 16px, auto',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full border-2 border-neutral-600 bg-white px-3 py-1 text-xs font-black uppercase tracking-wide transition hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Close
        </button>

        <header className="mx-auto max-w-2xl text-center">
          <h2
            id="wellness-detail-title"
            className="text-4xl font-black leading-none tracking-wide sm:text-5xl"
          >
            WELLNESS
          </h2>
          <p className="mt-4 text-2xl font-medium leading-none">Description:</p>
        </header>

        <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_1fr_1fr]">
          <DottedPanel className="p-4 sm:p-5">
            <h3 className="text-center text-3xl font-black leading-none">PROMOTION</h3>
            <div className="mt-8 grid gap-4">
              {(promotion?.points ?? []).map((point) => (
                <DottedPanel
                  key={point}
                  className="flex min-h-[68px] items-center justify-center px-4 py-3 text-center text-base leading-tight"
                >
                  {point}
                </DottedPanel>
              ))}
            </div>
          </DottedPanel>

          <DottedPanel className="p-4 sm:p-5">
            <h3 className="text-center text-3xl font-black leading-none">PREVENTION</h3>

            <DottedPanel className="mt-7 p-3">
              <h4 className="text-center text-base font-black leading-none">Programs</h4>
              <div className="mt-3 grid gap-2 md:grid-cols-2">
                {preventionProgramGroups.map((group) => (
                  <DottedPanel key={group.title} className="min-h-[88px] px-4 py-3">
                    <h5 className="text-center text-sm font-black leading-none">
                      {group.title}
                    </h5>
                    <ul className="mt-3 list-disc pl-4 text-[12px] leading-tight">
                      {group.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </DottedPanel>
                ))}
              </div>
            </DottedPanel>

            <DottedPanel className="mt-7 min-h-[132px] px-4 py-3">
              <h4 className="text-center text-base font-black leading-none">Services</h4>
            </DottedPanel>

            <DottedPanel className="mt-7 min-h-[132px] px-4 py-3">
              <h4 className="text-center text-base font-black leading-none">
                School-Based Programs and Services
              </h4>
            </DottedPanel>
          </DottedPanel>

          <DottedPanel className="p-4 sm:p-5">
            <h3 className="text-center text-3xl font-black leading-none">BELONGING</h3>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {(belonging?.points ?? []).map((point) => (
                <DottedPanel
                  key={point}
                  className="flex min-h-[185px] items-start justify-center px-4 py-4 text-center text-base leading-tight sm:min-h-[218px]"
                >
                  {point}
                </DottedPanel>
              ))}
            </div>
          </DottedPanel>
        </div>
      </section>
    </div>
  );
}

export function DetailPanel({ category, onClose }: DetailPanelProps) {
  if (category.id === 'wellness') {
    return <WellnessPanel category={category} onClose={onClose} />;
  }

  if (category.id === 'support') {
    return <SupportPanel category={category} onClose={onClose} />;
  }

  if (category.id === 'treatment') {
    return <TreatmentPanel category={category} onClose={onClose} />;
  }

  if (category.id === 'critical') {
    return <CriticalPanel category={category} onClose={onClose} />;
  }

  if (category.id === 'quality') {
    return <QualityPanel category={category} onClose={onClose} />;
  }

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="section-detail-title"
    >
      <section className="max-h-[88vh] w-full max-w-5xl animate-zoomIn overflow-y-auto rounded-2xl border border-amber-200 bg-gradient-to-br from-white via-amber-50 to-rose-50 p-6 text-slate-950 shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:p-8">
        <div className="flex items-start justify-between gap-5 border-b border-amber-300 pb-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-rose-700">
              Section Details
            </p>
            <h2 id="section-detail-title" className="mt-2 text-4xl font-black leading-tight">
              {category.title}
            </h2>
            <p className="mt-2 text-xl text-slate-700">{category.description}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full border border-slate-950 bg-white/80 px-4 py-2 text-sm font-black uppercase transition hover:bg-slate-950 hover:text-white"
          >
            Close
          </button>
        </div>

        <div className="mt-7 grid gap-5">
          {(category.children ?? []).map((child) => (
            <details
              key={child.id}
              className="group rounded-xl border border-white/80 bg-white/75 shadow-[0_12px_35px_rgba(120,53,15,0.08)] open:bg-white/95"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5">
                <div>
                  <h3 className="text-xl font-black leading-tight">{child.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-slate-600">
                    {child.points?.length ?? 0} items
                  </p>
                </div>
                <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-black uppercase text-slate-700 transition group-open:bg-slate-950 group-open:text-white">
                  View
                </span>
              </summary>

              <div className="border-t border-amber-200 px-5 pb-5 pt-4">
                {child.description ? (
                  <p className="text-base leading-7 text-slate-700">
                    {child.description}
                  </p>
                ) : null}
                {child.points && child.points.length > 0 ? (
                  <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-800 sm:grid-cols-2">
                    {child.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-md bg-amber-50/70 px-3 py-2 ring-1 ring-amber-100"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-600">
                    No readable details were provided in the screenshot for this area.
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
