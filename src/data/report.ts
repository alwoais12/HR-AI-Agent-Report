export const reportData = {
  title: "Sep & Oct Performance",
  categories: [
    {
      id: 'overview',
      name: 'Overview',
      title: 'AI HR Agent Personas',
      personas: [
        {
          name: 'Employee',
          icon: '🧑‍💼',
          needs: 'Easy access to personal info, career development, clarity on policies.',
          ai_support: [
            '24/7 chatbot for leave, payroll, attendance queries.',
            'Career coaching insights (skills to grow, internal job suggestions).',
            'Personalized learning recommendations.',
            'Feedback loops (sentiment check-ins, anonymous surveys).'
          ],
          features: [
            'Leave balance',
            'Payroll',
            'Attendance',
            'Profile info',
            'Request training',
            'Job shadowing',
            'Learning record',
            'Request flexible work',
            'Resignation submission',
            'Probation evaluation (self-assessment side)',
            'Access to complaints system (file a case)',
            'Access to grievance submission'
          ]
        },
        {
          name: 'HR Professional',
          icon: '📋',
          needs: 'Automate admin tasks, ensure compliance, provide better employee experience.',
          ai_support: [
            'Auto-generate reports (turnover, hiring pipelines, compliance).',
            'Intelligent case management for grievances/complaints.',
            'Workforce planning insights (attrition predictions, skill gaps).',
            'Smart workflows (AI drafts contracts, job descriptions).'
          ],
          features: [
            'Team attendance oversight',
            'Leave approvals for team',
            'Team payroll & overtime monitoring',
            'Goals & competencies setting for team',
            'Training requests approval',
            'Monitor job shadowing for team members',
            'Evaluate probation period',
            'Handle complaints raised by team',
            'Approve flexible work requests'
          ]
        },
        {
          name: 'Line Manager',
          icon: '💼',
          needs: 'Manage teams efficiently, track performance, handle requests quickly.',
          ai_support: [
            'Automated team dashboards (attendance, leave balance, workload).',
            'AI suggestions for training & development of direct reports.',
            'Alerts on employee burnout/attrition risk.',
            'Guidance on HR policies (probation, flexible work, complaints).'
          ],
          features: [
            'Document management',
            'Employee contracts',
            'Employee profile updates (dependents, skills, etc.)',
            'Attendance policy setup & exceptions',
            'Payroll processing',
            'Overtime & compensation handling',
            'Grievance and complaint resolution',
            'Resignation handling',
            'Flexible work program administration',
            'Recruitment & job requests',
            'Job shadowing program management',
            'Training & learning record administration'
          ]
        },
        {
          name: 'Leadership',
          icon: '🏛️',
          needs: 'Strategic insights, governance, and workforce performance clarity.',
          ai_support: [
            'Real-time HR analytics dashboards (mobility, diversity, promotion data).',
            'Predictive analytics (future workforce needs, risk management).',
            'Strategic reports auto-generated for board meetings.',
            'Insights on employee engagement & organizational health.'
          ],
          features: [
            'Dashboards (end 2025)',
            'Strategic reports (end 2025)',
            'Mobility insights (end 2025)',
            'Promotion data (end 2025)',
            'Workforce analytics (attendance, performance trends)',
            'Diversity & inclusion oversight',
            'High-level grievance/complaint trends',
            'Attrition and resignation trends'
          ]
        }
      ]
    },
    {
      id: 'Entities',
      name: 'Entities',
      stats: [
        { label: 'Target Entities', value: 45, color: '#3b82f6' },
        { label: 'Active Entities', value: 10, color: '#10b981' }
      ],
      details: [
        'Federal Authority of Human Resources',
        'Ministry of Sports',
        'Ministry of Industry & Advanced Tech',
        'Ministry of Culture',
        'Emirates Media Council',
        'Ministry of Climate Change & Environment',
        'Emirates Pharmaceutical Corporation',
        'Ministry of Finance',
        'National Center for Counseling'
      ]
    },
    {
      id: 'feedback',
      name: 'Feedback',
      stats: [
        { label: 'Total Interactions', value: 123, color: '#6b7280' },
        { label: 'Likes', value: 71, color: '#10b981' },
        { label: 'Dislikes', value: 52, color: '#ef4444' }
      ],
      details: [
        '1. Lack or absence of information',
        '2. Technical or systemic problems',
        '3. Failure to provide accurate answers',
        '4. Development & improvement requests'
      ]
    },
    {
      id: 'services',
      name: 'Services',
      stats: [
        { label: 'Live Services', value: 35, color: '#10b981' },
        { label: 'Ready for Testing', value: 25, color: '#3b82f6' },
        { label: 'Under Development', value: 5, color: '#f59e0b' },
        { label: 'Not Started', value: 68, color: '#ef4444' }
      ],
      details: []
    },
    {
      id: 'next-steps',
      name: 'Next Steps',
      stats: [],
      subSections: [
        {
          title: 'November Objectives',
          content: [
            '1. View objection requests',
            '2. Offer work flexibility',
            '3. Show "Ma Qassart" cards',
            '4. View notification authorizations',
            '5. View job applications',
            '6. View job listings',
            '7. Show CV',
            '8. Attendance registration information',
            '9. View a summary of team attendance and violations',
            '10. View profile picture',
            '11. View Code of Conduct',
            '12. Show previous experiences',
            '13. Presenting the objectives of the performance management system',
            '14. View performance management system ratings',
            '15. View a summary of goals and competencies',
            '16. View the objectives of the probationary period',
            '17. View individual development plan requests',
            '18. View follow-up job applications',
            '19. Check attendance violations',
            '20. View violation requests',
            '21. View vaccination information',
            '22. Add a feature to display attachments from the background',
            '23. Improving the number of calls for artificial intelligence',
            '24. Feature of displaying attachments with icon'
          ],
          extraTitle: 'Later in November',
          extraContent: [
            '1. Get user guides and FAQs about "Bayanati" system',
            '2. Obtaining knowledge documents from the work team',
            '3. Help with the list of services provided by AI',
            '4. Automate health monitoring of all APIs',
            '5. Switch your intelligent HR agent into proactive mode'
          ]
        },
        {
          title: 'December Objectives',
          content: [
            '1. Most applied for jobs',
            '2. Appointments according to age, job grade and other criteria',
            '3. Jobs during the probationary period',
            '4. Average duration of employment',
            '5. Average employee retention rate',
            '6. Probationary evaluations for new employees',
            '7. Types of promotions',
            '8. Promotions according to performance evaluation results',
            '9. Promotion rate by nationality',
            '10. Change in type of benefits',
            '11. Loan extension',
            '12. Resignation rate by year',
            '13. Resignations by organizational unit',
            '14. Employee turnover rate',
            '15. End of service procedures within a specific period',
            '16. Employees during the notice period',
            '17. Profile management',
            '18. Readiness pillar',
            '19. Efficiency pillar',
            '20. Governance pillar',
            '21. Pillar of empowerment',
            '22. Demographics',
            '23. Total available and closed vacancies',
            '24. Vacancies by job grade',
            '25. Jobs allocated to citizens and occupied by expatriates',
            '26. Average time to close a vacancy',
            '27. Transactions executed during the year',
            '28. Applicants by region',
            '29. Applicants for multiple vacancies',
            '30. Job applicants (Emiratis vs. non-Emiratis)',
            '31. Applicants with identical functional competency scores'
          ]
        }
      ]
    }
  ]
}
