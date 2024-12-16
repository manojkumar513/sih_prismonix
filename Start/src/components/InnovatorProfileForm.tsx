import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import {
  InnovatorProfile, InnovatorRole, InnovatorSkill, IndustryFocus,
  AreaOfExpertise, InnovationCategory, CollaborationType, LookingFor
} from '../types/innovator';
import { MapPin, GraduationCap, Briefcase, Code, Lightbulb, Building2, Target, Users, Search, Link } from 'lucide-react';
import toast from 'react-hot-toast';

const innovatorRoles: InnovatorRole[] = [
  'Student', 'Entrepreneur', 'Researcher', 'Innovator', 'Industry Professional',
  'Freelancer', 'Investor', 'Mentor/Advisor', 'Co-Founder', 'Engineer/Developer',
  'Designer', 'Consultant'
];

const innovatorSkills: InnovatorSkill[] = [
  'Idea Generation', 'Prototyping', 'Design Thinking', 'Market Research',
  'Business Development', 'Strategic Planning', 'Product Design', 'Pitch Deck Creation',
  'Fundraising', 'Entrepreneurship', 'Problem Solving', 'Innovation Management',
  'Team Building', 'Risk Analysis', 'Customer Validation', 'Growth Hacking',
  'Marketing Strategy', 'Technology Integration', 'Creative Thinking', 'User Research',
  'Feasibility Analysis', 'Leadership', 'Time Management', 'Visionary Thinking', 'Other'
];

const industryFocuses: IndustryFocus[] = [
  'Agriculture', 'AI&MachineLearning', 'Automation&Robotics', 'Biotechnology',
  'CleanEnergy&Environment', 'Construction&RealEstate', 'ConsumerGoods&Services',
  'Cybersecurity', 'E-Commerce', 'EdTech', 'Finance&FinTech', 'Gaming&Entertainment',
  'Healthcare&MedTech', 'Hospitality&Tourism', 'IoT&SmartDevices', 'LegalTech',
  'Manufacturing', 'Media&Communication', 'Pharmaceuticals', 'RenewableEnergy',
  'Retail&FMCG', 'SaaS&CloudComputing', 'SocialImpact', 'SpaceTech',
  'Sports&Fitness', 'Sustainability', 'Transportation&Logistics', 'WearableTechnology'
];

const areasOfExpertise: AreaOfExpertise[] = [
  'Product Design', 'Business Strategy', 'Project Management', 'Software Development',
  'Hardware Engineering', 'UI/UX Design', 'Data Science & AI', 'Machine Learning',
  'Blockchain Development', 'Cybersecurity', 'Marketing & Sales', 'Finance & Investment',
  'Legal & Compliance', 'Sustainability', 'Healthcare Innovation', 'Renewable Energy',
  'Supply Chain & Logistics', 'Education Technology', 'Creative Writing & Content Creation',
  'Research & Development', 'Human Resources & Talent Management', 'Manufacturing & Production',
  'Legal & IP Management', 'Networking & Telecommunications', 'Social Impact & Nonprofits'
];

const innovationCategories: InnovationCategory[] = [
  'Technology', 'Healthcare', 'Education', 'Environment', 'Social Impact',
  'Finance', 'Sustainability', 'Energy', 'Agriculture', 'Transportation',
  'Manufacturing', 'Consumer Goods', 'Retail', 'AI & Robotics', 'Blockchain',
  'Cybersecurity', 'Digital Media', 'Entertainment', 'Tourism', 'Real Estate',
  'Urban Development', 'Smart Cities', 'Space & Aerospace', 'Food Security',
  'Water Management', 'Public Policy', 'Nonprofit Initiatives'
];

const collaborationTypes: CollaborationType[] = [
  'Technical Support', 'Investment', 'Co-Founder Search', 'Idea Validation',
  'Mentorship', 'Team Building', 'Networking', 'Market Research',
  'Partnership Opportunities', 'Product Development', 'Funding',
  'Marketing & Outreach', 'Collaborative Research', 'Sales & Distribution'
];

const lookingForOptions: LookingFor[] = [
  'Mentorship', 'Funding', 'Team Building', 'Networking', 'Collaboration',
  'Investment', 'Partnership Opportunities', 'Sales & Distribution',
  'Market Research', 'Product Development', 'Technical Support',
  'Idea Validation', 'Resource Sharing'
];

const InnovatorProfileForm: React.FC = () => {
  const { setInnovatorProfile } = useAuthStore();
  const [profile, setProfile] = useState<InnovatorProfile>({
    address: '',
    education: '',
    currentRole: 'Entrepreneur',
    skills: [],
    industryFocus: [],
    areaOfExpertise: [],
    innovationCategory: [],
    collaborationType: [],
    lookingFor: [],
    portfolioUrl: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await setInnovatorProfile(profile);
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  const handleMultiSelect = <T extends string>(
    field: keyof InnovatorProfile,
    value: T,
    currentValues: T[]
  ) => {
    setProfile(prev => ({
      ...prev,
      [field]: currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value]
    }));
  };

  return (
    <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Complete Your Innovator Profile</h2>
      <p className="text-center text-gray-600 mb-8">
        Help us understand your innovation journey and goals
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
            <GraduationCap className="text-gray-400" size={20} />
            <label className="text-lg font-semibold text-gray-700">Education</label>
          </div>
          <input
            type="text"
            value={profile.education}
            onChange={e => setProfile(prev => ({ ...prev, education: e.target.value }))}
            placeholder="Enter your educational background"
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
            onChange={e => setProfile(prev => ({ ...prev, currentRole: e.target.value as InnovatorRole }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            {innovatorRoles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-2">
            <Code className="text-gray-400" size={20} />
            <label className="text-lg font-semibold text-gray-700">Skills</label>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {innovatorSkills.map(skill => (
              <button
                key={skill}
                type="button"
                onClick={() => handleMultiSelect('skills', skill, profile.skills)}
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
            <Building2 className="text-gray-400" size={20} />
            <label className="text-lg font-semibold text-gray-700">Industry Focus</label>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {industryFocuses.map(industry => (
              <button
                key={industry}
                type="button"
                onClick={() => handleMultiSelect('industryFocus', industry, profile.industryFocus)}
                className={`p-2 rounded-lg text-sm transition-colors duration-200 ${
                  profile.industryFocus.includes(industry)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {industry.replace(/([A-Z&])/g, ' $1').trim()}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-2">
            <Target className="text-gray-400" size={20} />
            <label className="text-lg font-semibold text-gray-700">Area of Expertise</label>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {areasOfExpertise.map(area => (
              <button
                key={area}
                type="button"
                onClick={() => handleMultiSelect('areaOfExpertise', area, profile.areaOfExpertise)}
                className={`p-2 rounded-lg text-sm transition-colors duration-200 ${
                  profile.areaOfExpertise.includes(area)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-2">
            <Lightbulb className="text-gray-400" size={20} />
            <label className="text-lg font-semibold text-gray-700">Innovation Category</label>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {innovationCategories.map(category => (
              <button
                key={category}
                type="button"
                onClick={() => handleMultiSelect('innovationCategory', category, profile.innovationCategory)}
                className={`p-2 rounded-lg text-sm transition-colors duration-200 ${
                  profile.innovationCategory.includes(category)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-2">
            <Users className="text-gray-400" size={20} />
            <label className="text-lg font-semibold text-gray-700">Preferred Collaboration Type</label>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {collaborationTypes.map(type => (
              <button
                key={type}
                type="button"
                onClick={() => handleMultiSelect('collaborationType', type, profile.collaborationType)}
                className={`p-2 rounded-lg text-sm transition-colors duration-200 ${
                  profile.collaborationType.includes(type)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-2">
            <Search className="text-gray-400" size={20} />
            <label className="text-lg font-semibold text-gray-700">Looking For</label>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {lookingForOptions.map(option => (
              <button
                key={option}
                type="button"
                onClick={() => handleMultiSelect('lookingFor', option, profile.lookingFor)}
                className={`p-2 rounded-lg text-sm transition-colors duration-200 ${
                  profile.lookingFor.includes(option)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option}
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
          onClick={() => window.location.href = 'http://localhost:5193/'}
        >
          Complete Profile
        </button>
      </form>
    </div>
  );
};

export default InnovatorProfileForm;