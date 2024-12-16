import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { CurrentRole, ExperienceLevel, Skill, WorkEnvironment, DeveloperProfile } from '../types/developer';
import { MapPin, Briefcase, Clock, Code, Heart, Building, Globe, Link } from 'lucide-react';
import toast from 'react-hot-toast';

const currentRoles: CurrentRole[] = [
  'Frontend Developer', 'Backend Developer', 'Full Stack Developer',
  'Mobile App Developer', 'Game Developer', 'DevOps Engineer',
  'Cloud Engineer', 'Machine Learning Engineer', 'AI Developer',
  'Data Scientist', 'Data Engineer', 'Cybersecurity Analyst',
  'Blockchain Developer', 'Embedded Systems Developer', 'IoT Developer',
  'AR/VR Developer', 'Student/Intern', 'Freelancer',
  'UI/UX Designer', 'Software Architect', 'Quality Assurance Engineer',
  'Technical Lead', 'Solution Architect', 'IT Support Specialist',
  'Technical Writer'
];

const experienceLevels: ExperienceLevel[] = [
  '0-1 Years', '1-2 Years', '2-3 Years', '3-5 Years',
  '5-7 Years', '7-10 Years', '10+ Years'
];

const skills: Skill[] = [
  'Frontend Development', 'Backend Development', 'Full Stack Development',
  'Mobile App Development', 'Data Science', 'Machine Learning',
  'Artificial Intelligence', 'DevOps', 'Cloud Computing',
  'Cybersecurity', 'Blockchain Development', 'Game Development',
  'UI/UX Design', 'Web Development', 'Embedded Systems',
  'IoT Development', 'Database Management', 'Networking',
  'AR/VR Development', 'Quality Assurance', 'Software Testing',
  'Big Data', 'System Architecture', 'Technical Writing',
  'IT Support', 'Project Management'
];

const workEnvironments: { value: WorkEnvironment; label: string }[] = [
  { value: 'remote', label: 'Remote' },
  { value: 'on-site', label: 'On-site' },
  { value: 'hybrid', label: 'Hybrid' }
];

const DeveloperProfileForm: React.FC = () => {
  const { setDeveloperProfile } = useAuthStore();
  const [profile, setProfile] = useState<DeveloperProfile>({
    address: '',
    currentRole: 'Frontend Developer',
    experience: '0-1 Years',
    skills: [],
    interests: [],
    preferredEmploymentType: 'Full-time',
    workEnvironment: 'remote',
    portfolioUrl: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await setDeveloperProfile(profile);
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  const handleSkillToggle = (skill: Skill) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  return (
    <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Complete Your Developer Profile</h2>
      <p className="text-center text-gray-600 mb-8">
        Help us understand your experience and preferences better
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-2">
            <MapPin className="text-gray-400" size={20} />
            <label className="text-lg font-semibold text-gray-700">Location</label>
          </div>
          <input
            type="text"
            value={profile.address}
            onChange={e => setProfile(prev => ({ ...prev, address: e.target.value }))}
            placeholder="Enter your location"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-2">
            <Briefcase className="text-gray-400" size={20} />
            <label className="text-lg font-semibold text-gray-700">Current Role</label>
          </div>
          <select
            value={profile.currentRole}
            onChange={e => setProfile(prev => ({ ...prev, currentRole: e.target.value as CurrentRole }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            {currentRoles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-2">
            <Clock className="text-gray-400" size={20} />
            <label className="text-lg font-semibold text-gray-700">Experience</label>
          </div>
          <select
            value={profile.experience}
            onChange={e => setProfile(prev => ({ ...prev, experience: e.target.value as ExperienceLevel }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            {experienceLevels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-2">
            <Code className="text-gray-400" size={20} />
            <label className="text-lg font-semibold text-gray-700">Skills</label>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {skills.map(skill => (
              <button
                key={skill}
                type="button"
                onClick={() => handleSkillToggle(skill)}
                className={`p-2 rounded-lg text-sm transition-colors duration-200 ${
                  profile.skills.includes(skill)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-2">
            <Heart className="text-gray-400" size={20} />
            <label className="text-lg font-semibold text-gray-700">Interests</label>
          </div>
          <input
            type="text"
            value={profile.interests.join(', ')}
            onChange={e => setProfile(prev => ({ ...prev, interests: e.target.value.split(',').map(i => i.trim()) }))}
            placeholder="Enter your interests (comma-separated)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-2">
            <Building className="text-gray-400" size={20} />
            <label className="text-lg font-semibold text-gray-700">Preferred Employment Type</label>
          </div>
          <input
            type="text"
            value={profile.preferredEmploymentType}
            onChange={e => setProfile(prev => ({ ...prev, preferredEmploymentType: e.target.value }))}
            placeholder="e.g., Full-time, Contract, Freelance"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-2">
            <Globe className="text-gray-400" size={20} />
            <label className="text-lg font-semibold text-gray-700">Preferred Work Environment</label>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {workEnvironments.map(env => (
              <button
                key={env.value}
                type="button"
                onClick={() => setProfile(prev => ({ ...prev, workEnvironment: env.value }))}
                className={`p-3 rounded-lg transition-colors duration-200 ${
                  profile.workEnvironment === env.value
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {env.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-2">
            <Link className="text-gray-400" size={20} />
            <label className="text-lg font-semibold text-gray-700">Portfolio URL</label>
          </div>
          <input
            type="url"
            value={profile.portfolioUrl}
            onChange={e => setProfile(prev => ({ ...prev, portfolioUrl: e.target.value }))}
            placeholder="https://your-portfolio.com"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
          onClick={() => window.location.href = 'http://192.168.86.225:5174/'}
        >
          Complete Profile
        </button>
      </form>
    </div>
  );
};

export default DeveloperProfileForm;