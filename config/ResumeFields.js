export default {
    contact: {
        name: 'Contact',
        name: 'Contact',
        fields: [
            { name: 'name', label: 'Full Name', placeholder: 'Yesh', required: true },
            { name: 'title', label: 'Your Job Title', placeholder: 'AI Software Developer' },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'yesh@example.com' },
            { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+1234567890' },
            { name: 'address', label: 'Address', placeholder: '123 Street, City, Country' },
            { name: 'linkedin', label: 'Linked', placeholder: 'linkedin.com/in/yesh' },
            { name: 'github', label: 'Github', placeholder: 'github.com/yesh' },
            { name: 'blogs', label: 'Blogs', placeholder: 'github.com/yesh' },
            { name: 'twitter', label: 'Twitter', placeholder: 'github.com/yesh' },
            { name: 'portfolio', label: 'Portfolio', placeholder: 'yesh.com' },
        ],
    },
    summary: {
        name: 'Summary',
        fields: [
            {
                name: 'summary',
                label: 'Summary',
                type: 'textarea',
                placeholder: 'Brief summary of your skills and experience...',
                span: true,
                rows: 5,
            },
        ],
    },
    education: {
        name: 'Education',
        multiple: true,
        fields: [
            { name: 'degree', label: 'Study Program', placeholder: 'Bachelor of IT' },
            { name: 'institution', label: 'Institution', placeholder: 'University Name' },
            { name: 'start', label: 'Start Date', type: 'month', placeholder: 'MM/YYYY' },
            { name: 'end', label: 'End Date', type: 'month', placeholder: 'MM/YYYY' },
            { name: 'location', label: 'Location', placeholder: 'City, Country' },
            { name: 'gpa', label: 'GPA', placeholder: '3.8/4.0' },
        ],
    },

    experience: {
        name: 'Experience',
        multiple: true,
        fields: [
            { name: 'role', label: 'Title / Position', span: true, placeholder: 'AI Software Engineer' },
            { name: 'company', label: 'Workplace / Company', placeholder: 'Company Name' },
            { name: 'location', label: 'Location', placeholder: 'City, Country' },
            { name: 'start', label: 'Start Date', type: 'month', placeholder: 'MM/DD/YYYY' },
            { name: 'end', label: 'End Date', type: 'month', placeholder: 'MM/DD/YYYY' },
            {
                name: 'description',
                label: 'Responsibility',
                type: 'textarea',
                placeholder: 'Brief description of your responsibilities...',
                span: true,
                rows: 4,
                multipoints: true,
            },
        ],
    },

    projects: {
        name: 'Projects',
        multiple: true,
        fields: [
            { name: 'title', label: 'Project Title', placeholder: 'Project Name' },
            { name: 'url', label: 'Project Url', placeholder: 'https://example.com/project' },
            {
                name: 'description',
                label: 'Now Describe What you did',
                type: 'textarea',
                placeholder: 'Briefly describe your project...',
                span: true,
                multipoints: true,
            },
        ],
    },

    skills: {
        name: 'Skills',
        fields: [
            {
                name: 'skills',
                label: 'Skills',
                type: 'textarea',
                placeholder: 'List your skills separated by commas...',
                span: true,
                rows: 3,
            },
        ],
    },

    certificates: {
        name: 'Certificates',
        multiple: true,
        fields: [
            { name: 'title', label: 'Certificate Title', placeholder: 'Certificate Name', span: true },
            { name: 'issuer', label: 'Issuing Organization', placeholder: 'Organization Name' },
            { name: 'date', label: 'Issuance Date', type: 'month', placeholder: 'MM/DD/YYYY' },
        ],
    },

    languages: {
        name: 'Languages',
        multiple: true,
        fields: [
            { name: 'language', label: 'Language', placeholder: 'Language Name' },
            {
                name: 'proficiency',
                label: 'Proficiency',
                placeholder: 'e.g., Fluent, Intermediate, Beginner',
                type: 'select',
                options: [
                    {
                        
                        value: 'Elementary Proficiency',
                    },
                    {
                        
                        value: 'Limited Working Proficiency',
                    },
                    {
                        
                        value: 'Professional Working Proficiency',
                    },
                    {
                        
                        value: 'Full Professional Proficiency',
                    },
                    {
                        
                        value: 'Native or Bilingual Proficiency',
                    },
                ],
            },
        ],
    },
};
