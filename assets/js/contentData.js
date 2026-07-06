/* ============================================================================
   CISM  ::  contentData.js
   Exam facts, per-domain metadata + objectives, PBQ format definitions,
   curated external resources, the Exam-Mechanics and Career-Guidance readers,
   and the target objects the textbook-dense domain reading modules populate
   (CISM.reading[1..4], appended from the lazy-loaded content modules).

   This file loads first and establishes the global CISM namespace consumed
   by quizEngine.js, flashEngine.js, and app.js.

   Authored by Professor Rizwan Virani.
   ========================================================================== */
window.CISM = window.CISM || {};

/* SINGLE SOURCE OF TRUTH for every exam figure. The dashboard cards, mock-exam
   engine, scoring, analytics, readiness projection, and history readouts all
   READ from this object — no exam figure is duplicated as a literal elsewhere.

   Like the CISA, the CISM is a FIXED-FORM, linear exam (not adaptive): 150
   multiple-choice questions in a single 4-hour appointment, scored on ISACA's
   200–800 scale with 450 to pass. `itemsMin`/`itemsMax` are therefore equal,
   and `maxQuestions` (the full-length mock) matches the real exam length. */
CISM.exam = {
  code: "CISM",
  name: "CISM",
  fullName: "Certified Information Security Manager",
  vendor: "ISACA",
  format: "Fixed form",          // 150 linear multiple-choice items (not adaptive)
  minutes: 240,                  // 4 hours
  itemsMin: 150, itemsMax: 150,
  itemsLabel: "150",
  maxQuestions: 150,             // full-length mock length = the real fixed length
  scaleLow: 200, scaleHigh: 800, passing: 450,
  domains: 4,
  launched: "2002",
  body: "ISACA"
};

/* Per-domain metadata. `objectives` mirror the official ISACA CISM Exam Content
   Outline at the subtopic level. `weight` is the official domain weight;
   `sectionCount` is the number of dense reading sections this platform authors
   for the domain (one per subtopic). */
CISM.domainMeta = [
  { id: 1, weight: 17, color: "d1", icon: "🏛", title: "Information Security Governance", sectionCount: 9,
    short: "Establishing security governance: organizational culture, legal and regulatory requirements, roles and accountability, frameworks, and a security strategy aligned to the business.",
    objectives: [
      { id: "1A1", t: "Organizational Culture" },
      { id: "1A2", t: "Legal, Regulatory & Contractual Requirements" },
      { id: "1A3", t: "Organizational Structures, Roles & Responsibilities" },
      { id: "1A4", t: "Governance vs. Management & Board Oversight" },
      { id: "1A5", t: "Governance Frameworks & Standards" },
      { id: "1B1", t: "Information Security Strategy Development" },
      { id: "1B2", t: "Aligning Strategy with Business Objectives" },
      { id: "1B3", t: "Strategic Planning: Business Case, Budget & Resources" },
      { id: "1B4", t: "Security Governance Metrics & Reporting" }
    ] },
  { id: 2, weight: 20, color: "d2", icon: "⚖", title: "Information Security Risk Management", sectionCount: 11,
    short: "Identifying and managing information security risk: the threat landscape, risk assessment and analysis, treatment options, ownership, and monitoring within the enterprise's risk appetite.",
    objectives: [
      { id: "2A1", t: "Emerging Risk & the Threat Landscape" },
      { id: "2A2", t: "Vulnerability & Control Deficiency Analysis" },
      { id: "2A3", t: "Risk Identification & the Risk Register" },
      { id: "2A4", t: "Qualitative Risk Assessment & Analysis" },
      { id: "2A5", t: "Quantitative Risk Assessment (SLE, ALE, ROSI)" },
      { id: "2B1", t: "Risk Treatment & Response Options" },
      { id: "2B2", t: "Risk & Control Ownership" },
      { id: "2B3", t: "Risk Appetite, Tolerance & Acceptance" },
      { id: "2B4", t: "Third-Party & Supply-Chain Risk" },
      { id: "2B5", t: "Risk Monitoring, KRIs & Reporting" },
      { id: "2B6", t: "Integrating Risk into Enterprise Risk Management" }
    ] },
  { id: 3, weight: 33, color: "d3", icon: "🧭", title: "Information Security Program", sectionCount: 19,
    short: "Building and running the security program: resources, asset classification, frameworks and policies, control design and testing, awareness, third-party management, and metrics.",
    objectives: [
      { id: "3A1", t: "Information Security Program Resources" },
      { id: "3A2", t: "Information Asset Identification & Classification" },
      { id: "3A3", t: "Industry Standards & Frameworks for Security" },
      { id: "3A4", t: "Policies, Standards, Procedures & Guidelines" },
      { id: "3A5", t: "Information Security Program Metrics" },
      { id: "3A6", t: "Program Road Map & Charter" },
      { id: "3A7", t: "Security Architecture & Design" },
      { id: "3B1", t: "Security Control Categories & Types" },
      { id: "3B2", t: "Security Control Design & Selection" },
      { id: "3B3", t: "Control Implementation & Integration" },
      { id: "3B4", t: "Control Testing & Evaluation" },
      { id: "3B5", t: "Identity & Access Management" },
      { id: "3B6", t: "Cryptography & Data Protection" },
      { id: "3B7", t: "Security Awareness & Training" },
      { id: "3B8", t: "Management of External Services (Third Parties)" },
      { id: "3B9", t: "Program Communications & Reporting" },
      { id: "3B10", t: "Program Budgeting & Resourcing" },
      { id: "3B11", t: "Program Maturity & Continuous Improvement" },
      { id: "3B12", t: "Integrating Governance, Risk & Program" }
    ] },
  { id: 4, weight: 30, color: "d4", icon: "🚨", title: "Incident Management", sectionCount: 17,
    short: "Preparing for and responding to incidents: the response plan and team, classification, BIA/BCP/DRP and recovery objectives, containment, eradication, recovery, and post-incident review.",
    objectives: [
      { id: "4A1", t: "Incident Management Concepts & the IR Lifecycle" },
      { id: "4A2", t: "Incident Response Plan (IRP)" },
      { id: "4A3", t: "Incident Response Team (CSIRT) Structure" },
      { id: "4A4", t: "Incident Classification & Categorization" },
      { id: "4A5", t: "Business Impact Analysis (BIA)" },
      { id: "4A6", t: "Business Continuity Plan (BCP)" },
      { id: "4A7", t: "Disaster Recovery & Recovery Objectives (RTO/RPO/MTD)" },
      { id: "4A8", t: "IM Training, Testing & Tabletop Exercises" },
      { id: "4A9", t: "Resilience Strategies & Recovery Sites" },
      { id: "4B1", t: "Incident Detection & Escalation" },
      { id: "4B2", t: "Incident Management Tools (SIEM/SOAR)" },
      { id: "4B3", t: "Incident Investigation & Triage" },
      { id: "4B4", t: "Containment Methods & Strategies" },
      { id: "4B5", t: "Incident Communications & Notification" },
      { id: "4B6", t: "Eradication & Recovery" },
      { id: "4B7", t: "Evidence Preservation & Forensics" },
      { id: "4B8", t: "Post-Incident Review & Lessons Learned" }
    ] }
];

/* The four PBQ formats — one per domain. CISM has no simulations, so these are
   management-decision scenarios (authentic to the exam's scenario items): each
   poses a described situation and asks for the BEST governance, risk, program,
   or incident-management action, field by field. `domainColor` drives the badge
   tint. */
CISM.pbqFormats = [
  { id: 1, icon: "🏛", domainColor: 1, obj: "1A3 / 1A4 / 1B2", badge: "GOVERNANCE", title: "Direct the Security Governance Program",
    desc: "Work a governance scenario field by field — place accountability in the org structure, choose the correct governance artifact, align the strategy to business objectives, and select the metric leadership needs.",
    long: "You are the information security manager establishing governance. For each item, assign <b>accountability</b> in the organizational structure (board, executive management, steering committee, security manager, asset owner vs. custodian), choose the correct <b>governance artifact</b> (policy vs. standard vs. procedure vs. guideline), make the <b>strategy-alignment</b> decision that ties security to business objectives and value delivery, and select the right <b>governance metric or KPI</b> to report the program's state to the board." },
  { id: 2, icon: "⚖", domainColor: 2, obj: "2A4 / 2A5 / 2B1", badge: "RISK MANAGEMENT", title: "Assess & Treat Information Security Risk",
    desc: "Run a risk scenario: analyze the risk, choose qualitative vs. quantitative treatment of it, select the correct risk-response option, and place risk and control ownership.",
    long: "You own the information security risk process. For each field, perform the correct <b>risk assessment/analysis</b> step (identify, analyze, evaluate), decide between <b>qualitative and quantitative</b> methods and compute where needed (SLE = AV × EF, ALE = SLE × ARO, ROSI), select the <b>risk-response option</b> the situation demands (mitigate, transfer, avoid, accept) against the stated <b>risk appetite/tolerance</b>, and assign <b>risk and control ownership</b> correctly." },
  { id: 3, icon: "🧭", domainColor: 3, obj: "3A4 / 3B1 / 3B2 / 3B4", badge: "SECURITY PROGRAM", title: "Build & Manage the Security Program",
    desc: "Manage a program scenario: classify the control, choose the design/selection or implementation action, apply the right framework or policy artifact, and select the program metric or awareness action.",
    long: "You lead the information security program. For each item, classify the <b>control category and type</b> (managerial/technical/physical/operational; preventive/detective/corrective/deterrent/compensating), make the correct <b>control design, selection, or implementation</b> decision, apply the right <b>standard, framework, or policy artifact</b> (ISO 27001, NIST CSF, COBIT; policy vs. standard vs. procedure), and choose the correct <b>program metric, awareness, or third-party-management</b> action to keep the program effective." },
  { id: 4, icon: "🚨", domainColor: 4, obj: "4A4 / 4A5 / 4A7 / 4B4", badge: "INCIDENT MGMT", title: "Lead Incident Response & Recovery",
    desc: "Direct an incident scenario: classify the incident, choose the correct lifecycle step, select the containment or eradication action, and apply the BIA/RTO/RPO recovery decision the requirement demands.",
    long: "You direct incident management and recovery. For each field, correctly <b>classify and categorize</b> the incident by severity and type, choose the right <b>incident-response lifecycle</b> step (preparation, detection/analysis, containment, eradication, recovery, post-incident), select the correct <b>containment or eradication</b> action, and apply the <b>business-resilience metric</b> — Recovery Time Objective (RTO), Recovery Point Objective (RPO), MTD, or BIA finding — that satisfies the stated recovery requirement." }
];

/* Curated free study resources. */
CISM.resources = [
  { icon: "📄", title: "Official ISACA CISM Exam Content Outline", host: "isaca.org",
    url: "https://www.isaca.org/credentialing/cism",
    desc: "The authoritative blueprint — every domain, sub-area, and subtopic ISACA can test, with the official domain weightings (Governance 17%, Risk 20%, Program 33%, Incident 30%). Use it as your master checklist." },
  { icon: "📘", title: "CISM Review Manual (RM) & QAE Database", host: "isaca.org",
    url: "https://www.isaca.org/credentialing/cism/cism-exam-preparation",
    desc: "The ISACA CISM Review Manual is the canonical text, and the official Questions, Answers & Explanations (QAE) database is the standard practice-question companion, both mapped to the four domains." },
  { icon: "📗", title: "COBIT 2019 & Governance/Management Frameworks", host: "isaca.org",
    url: "https://www.isaca.org/resources/cobit",
    desc: "COBIT 2019 is ISACA's governance-and-management framework — the separation of governance from management, the roles, and the objectives that underpin Domain 1 (Governance) and Domain 3 (Program)." },
  { icon: "📚", title: "NIST, ISO/IEC 27001 & Relevant Standards", host: "csrc.nist.gov",
    url: "https://csrc.nist.gov/publications/sp",
    desc: "When a control or framework definition must be exact, go to the source: the NIST SP 800 series and NIST CSF, ISO/IEC 27001/27002 (ISMS and controls), ISO 27005 (risk), and ISO 22301 (business continuity) inform the risk, program, and incident-management domains." },
  { icon: "🎥", title: "CISM Domain Walkthrough Videos (Hemang Doshi, Kelly Handerhan, others)", host: "youtube.com",
    url: "https://www.youtube.com/results?search_query=CISM+exam+domain+review",
    desc: "Free domain overviews and concept walkthroughs. Widely used community channels reinforce the security-manager perspective — governance, risk, and program judgment — the exam rewards." },
  { icon: "👥", title: "r/CISM — Community Study Plans & “I Passed” Threads", host: "reddit.com/r/CISM",
    url: "https://www.reddit.com/r/CISM/",
    desc: "Crowd-sourced study plans, exam-experience intel, and pass write-ups. Read recent posts for where candidates get stuck and how the CISM's manager mindset differs from hands-on technical exams." }
];

/* ---- Reader: Exam Mechanics card ---- */
CISM.examMechanics = [
  { heading: "Format: a fixed-form, 150-question exam", body:
    "<p>The <strong>ISACA CISM</strong> exam is a <strong>fixed-form, linear</strong> examination: <strong>150 multiple-choice questions</strong> delivered in a single <strong>4-hour (240-minute)</strong> appointment. Like the CISA and unlike the adaptive ISC2 exams, the CISM is <em>not</em> computer-adaptive — every candidate answers the same number of items, and you may <strong>move freely: skip, flag, and return</strong> to any question before you submit. A number of the 150 items are <strong>unscored pretest questions</strong> ISACA is trialing for future forms; you cannot tell them apart from scored items, so treat every question as if it counts.</p>" +
    "<p>Because you can navigate the whole form, budget your time and <strong>answer every question</strong> — there is <strong>no penalty for a wrong answer</strong>, so a blank is strictly worse than a guess. With 150 items in 240 minutes you have roughly <strong>1.6 minutes per question</strong>, plus time for a review pass over your flagged items.</p>" +
    "<div class='callout exam'><div class='lbl'>Exam tip</div>Make a first pass answering everything you know, <strong>flagging</strong> the hard ones, then return. Never leave an item blank — an educated guess on a narrowed-down item is free expected value.</div>" },
  { heading: "Scoring: the 200–800 scale and the 450 line", body:
    "<p>CISM is reported as a <strong>scaled score from 200 to 800</strong>, and the passing standard is <strong>450</strong>. A scaled score is a conversion of your raw score (number of scored items correct) onto a common scale so that different exam forms are comparable and fair — it is <em>not</em> a percentage. A <strong>800</strong> is a perfect score; <strong>200</strong> is the lowest possible; <strong>450</strong> is the minimum standard of knowledge required to pass.</p>" +
    "<p>Your score is based on the <strong>total number of scored items answered correctly, regardless of domain</strong>. ISACA reports <strong>domain-level results for information only</strong> — the domain percentages tell you how much of the exam draws on each domain, but they are not scored separately, and you do not need to “pass” each domain individually. You receive a preliminary pass/fail on screen, with the official scaled score by email within about 10 working days.</p>" +
    "<blockquote>This platform's mock exam reports a scaled score using a transparent linear approximation of the 200–800 band against the 450 line. Use it as a <em>relative</em> readiness signal — “am I consistently clearing 450 on full-length practice?” — not as a literal prediction of your official result.</blockquote>" },
  { heading: "Question style and the CISM mindset", body:
    "<p>CISM items are <strong>“best answer”</strong> questions written from the perspective of an <strong>information security manager</strong> — a program leader who governs, directs, and decides, not a hands-on administrator and not an independent auditor. Frequently more than one option is technically defensible — your job is to choose the answer a security <em>manager</em> would consider <em>best</em> given the business context. Watch the qualifiers: <strong>MOST</strong>, <strong>BEST</strong>, <strong>FIRST</strong>, and <strong>GREATEST</strong> change the correct answer entirely.</p>" +
    "<ul><li><strong>Think like a manager, not an engineer.</strong> The exam rewards governing, deciding, and prioritizing — business alignment and program judgment over configuration detail. When an option says “configure the firewall” and another says “update the policy and assign ownership,” the manager's role usually favors the governance action.</li><li><strong>Business objectives win.</strong> The <em>best</em> answer supports the organization's objectives and risk appetite. Security exists to enable the business, not the reverse.</li><li><strong>Follow the correct order.</strong> Governance precedes strategy; risk assessment precedes control selection; a BIA precedes a recovery plan; classification precedes protection.</li><li><strong>Root cause over symptom.</strong> Prefer the answer that addresses the underlying governance, risk, or process gap rather than the immediate technical symptom.</li></ul>" +
    "<div class='callout'><div class='lbl'>Strategy</div>For every scenario, ask: <em>“What would a security manager — accountable to the business for the whole program — do or decide FIRST here?”</em> That framing resolves most “two answers look right” situations.</div>" },
  { heading: "Eligibility, experience, and maintenance", body:
    "<p>To become certified you need <strong>five (5) years of professional experience</strong> in information security management, with a minimum of <strong>three (3) years across at least three of the four CISM domains</strong>. <strong>Experience waivers of up to two (2) years</strong> are available for defined credentials and education. You may <strong>take the exam first</strong> and then submit your experience — you have <strong>five years from passing</strong> to apply for certification, and the experience must have been earned within the ten years preceding the application.</p>" +
    "<p>The exam registration fee is <strong>US$575 for ISACA members</strong> and <strong>US$760 for non-members</strong>; certification then requires a <strong>US$50 application processing fee</strong>. Registration opens a <strong>twelve-month eligibility window</strong>, and you have <strong>four attempts within a rolling 12-month period</strong> to pass. Once certified, you maintain CISM with <strong>Continuing Professional Education (CPE)</strong> — a minimum of 20 hours annually and 120 over each three-year cycle — plus the annual maintenance fee and adherence to ISACA's <strong>Code of Professional Ethics</strong>.</p>" +
    "<div class='callout scenario'><div class='lbl'>Note</div>CISM is <strong>ANSI/ISO-IEC 17024:2012 accredited</strong> and an approved DoD 8140 baseline for IAM Level II and III roles. It may be funded through your program — connect with the Program Director or your professor about voucher opportunities before you register.</div>" },
  { heading: "Exam-day logistics", body:
    "<p>The CISM is delivered at <strong>PSI test centers</strong> or as an <strong>online remotely proctored</strong> exam. For an in-person sitting, arrive at least <strong>30 minutes early</strong> with a current, valid, government-issued photo ID whose name matches your registration. For a remote sitting, complete the system compatibility check in advance and be ready for a <strong>360° room scan and desk/mirror check</strong> at check-in.</p>" +
    "<p>The exam is <strong>closed-book</strong>: no notes, phones, smartwatches, calculators, or reference materials, and your workspace must be clear. Two short breaks are permitted with proctor approval, but the <strong>timer does not stop</strong> during a break. You cannot take screenshots or photos of any part of the exam, including the results screen.</p>" +
    "<div class='callout exam'><div class='lbl'>Mindset</div>The CISM rewards <strong>management judgment across the whole security program</strong> — governance, risk, program build-and-run, and incident response — not deep trivia in any one tool. You are being certified as a security <em>leader</em>; answer every question from that altitude.</div>" }
];

/* ---- Reader: Career Guidance card ---- */
CISM.careerGuidance = [
  { heading: "Where CISM sits on the ladder", body:
    "<p><strong>CISM (Certified Information Security Manager) is the leading, globally recognized credential for information security management and leadership.</strong> Administered by <strong>ISACA</strong> since 2002, it certifies that you can govern an information security program; manage information risk; build, run, and improve the security program; and lead incident response — all from the perspective of a <em>manager accountable to the business</em>. It is an <em>advanced, experience-based</em> credential — not entry level — sitting alongside CISSP, CRISC, and CGEIT at the security-leadership tier.</p>" +
    "<p>For hiring managers, CISM on a résumé is shorthand for “this person can own an information security program and speak the language of both executives and technical teams.” It is one of the most frequently <em>required</em> certifications in security-management and CISO-track postings, and it is an approved baseline for <strong>IAM Level II and III</strong> roles under the U.S. DoD <strong>8140</strong> framework.</p>" },
  { heading: "Why a management credential matters", body:
    "<p>Organizations are accountable to regulators, boards, and customers for how they protect information — and they need professionals who can <em>manage</em> that protection as a program aligned to the business, not just operate individual controls. That judgment is durable and transferable: tools and platforms change, but the discipline of setting strategy, governing risk, selecting and running controls, and leading a response does not. CISM certifies exactly that layer, which is why it travels across industries, frameworks, and technologies.</p>" +
    "<p>The exam's deliberate <strong>manager's perspective</strong> is the point: employers want someone who can align security with business objectives, make risk-based decisions a board will accept, and lead the program and its people — not simply someone who can configure a system.</p>" +
    "<div class='callout exam'><div class='lbl'>Why it matters</div>CISM names the exact skill set security-leadership roles hire for: <strong>governing and managing an information security program</strong> in business terms that hold up to boards, executives, and regulators.</div>" },
  { heading: "Roles CISM opens", body:
    "<p>CISM aligns with a cluster of security-management and leadership roles. Combined with experience it credibly qualifies you for:</p>" +
    "<ul>" +
    "<li><strong>Information Security Manager</strong> — owning the security program, its strategy, controls, and people. The whole exam maps to this job.</li>" +
    "<li><strong>Information Security Officer / CISO track</strong> — accountable to executives and the board for the enterprise security posture (Domains 1, 3).</li>" +
    "<li><strong>Security Risk & Compliance Lead</strong> — managing information risk, treatment, and reporting across the enterprise (Domain 2).</li>" +
    "<li><strong>Security Program / Governance Manager</strong> — running the program's frameworks, policies, metrics, and third-party management (Domain 3).</li>" +
    "<li><strong>Incident Response / Security Operations Manager</strong> — leading readiness, response, and recovery (Domain 4).</li>" +
    "</ul>" },
  { heading: "Building the path around CISM", body:
    "<p>CISM pairs naturally with a broader governance, risk, and leadership career. A common trajectory: <em>a foundational security cert (Security+) → CISSP or CISA (breadth/audit depth) → CISM (security management) → CISO or security-leadership roles</em>. Because CISM proves program-management skill, many professionals add <strong>CRISC</strong> for enterprise risk, <strong>CGEIT</strong> for enterprise IT governance, or <strong>CISSP</strong> for technical breadth — CISM shares vocabulary and the CPE ecosystem with the other ISACA credentials. COBIT 2019 fluency strengthens the whole cluster.</p>" +
    "<div class='callout scenario'><div class='lbl'>Practical advice</div>CISM is as much a <strong>management-and-leadership mindset</strong> credential as a knowledge one. Pair it with demonstrable experience — owning a policy, leading a risk assessment, running an incident, presenting to executives — because the experience requirement and most management interviews probe for real program decisions you have made, not just facts you have memorized.</div>" }
];

/* Reading content is NOT bundled here. Each domain's dense reading sections live
   in their own module under assets/js/content/domainN.js and are fetched on
   demand by app.js the first time a Domain Study card is opened. This object is
   the shared target those modules populate: CISM.reading[N] = [ ...sections ]. */
CISM.reading = CISM.reading || {};

/* Flashcard decks are likewise lazy-loaded from assets/js/content/flashN.js
   (100 cards per domain) and populate this object: CISM.flash[N] = [ ...cards ]. */
CISM.flash = CISM.flash || {};
