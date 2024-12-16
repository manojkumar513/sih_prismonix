import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import { InvestorProfile, InvestmentFocus, CapitalRange, InvestmentStage } from '../types/investor';
import { MapPin, GraduationCap, Target, Wallet, Building2, Briefcase, Link, CheckSquare } from 'lucide-react';
import toast from 'react-hot-toast';

const investmentFocusOptions: InvestmentFocus[] = [
  'Technology', 'AI & Machine Learning', 'Blockchain', 'Robotics', 'Cloud Computing',
  'Cybersecurity', 'Data Science', 'Healthcare', 'Medical Devices', 'Biotechnology',
  'Pharmaceuticals', 'Digital Health', 'Healthcare Services', 'Wellness',
  'Sustainability & Environment', 'Renewable Energy', 'Waste Management', 'Green Tech',
  'Sustainable Agriculture', 'Environmental Services', 'Water Purification', 'Finance',
  'FinTech', 'InsurTech', 'Cryptocurrency', 'Payments', 'Wealth Management',
  'Crowdfunding', 'Consumer Goods & Retail', 'E-commerce', 'Food & Beverages',
  'Consumer Electronics', 'Fashion & Apparel', 'Health & Beauty', 'Education',
  'EdTech', 'Online Learning Platforms', 'Skill Development', 'K-12 Education',
  'Social Impact', 'Social Enterprises', 'Non-Profit Initiatives', 'Impact Investing',
  'Community Development', 'Real Estate & Construction', 'PropTech', 'Construction Tech',
  'Real Estate Development', 'Urban Planning', 'Transportation & Logistics',
  'Mobility Solutions', 'Autonomous Vehicles', 'Supply Chain Solutions', 'Last-Mile Delivery',
  'Manufacturing & Industry', 'Industry 4.0', 'Automation', 'Industrial IoT (IIoT)',
  '3D Printing'
];

const capitalRanges: CapitalRange[] = [
  'Under $500K',
  '$500K - $1M',
  '$1M - $5M',
  '$5M - $10M',
  '$10M - $50M',
  '$50M - $100M',
  'Over $100M'
];

const investmentStages: InvestmentStage[] = [
  'Seed Stage',
  'Early Stage',
  'Growth Stage',
  'Expansion Stage',
  'Mature Stage',
  'Late Stage'
];

const InvestorProfileForm: React.FC = () => {
  const { setInvestorProfile } = useAuthStore();
  const [profile, setProfile] = useState<InvestorProfile>({
    address: '',
    education: '',
    investmentFocus: [],
    capitalRange: 'Under $500K',
    preferredInvestmentStage: 'Seed Stage',
    portfolioCompanies: '',
    portfolioUrl: '',
    termsAccepted: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!profile.termsAccepted) {
      toast.error('Please accept the terms and conditions');
      return;
    }

    try {
      await setInvestorProfile(profile);
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  const handleInvestmentFocusToggle = (focus: InvestmentFocus) => {
    setProfile(prev => ({
      ...prev,
      investmentFocus: prev.investmentFocus.includes(focus)
        ? prev.investmentFocus.filter(f => f !== focus)
        : [...prev.investmentFocus, focus]
    }));
  };

  return (
    <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Complete Your Investor Profile</h2>
      <p className="text-center text-gray-600 mb-8">
        Help us understand your investment preferences and portfolio
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
            <Target className="text-gray-400" size={20} />
            <label className="text-lg font-semibold text-gray-700">Investment Focus</label>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {investmentFocusOptions.map(focus => (
              <button
                key={focus}
                type="button"
                onClick={() => handleInvestmentFocusToggle(focus)}
                className={`p-2 rounded-lg text-sm transition-colors duration-200 ${
                  profile.investmentFocus.includes(focus)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {focus}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-2">
            <Wallet className="text-gray-400" size={20} />
            <label className="text-lg font-semibold text-gray-700">Capital Range</label>
          </div>
          <select
            value={profile.capitalRange}
            onChange={e => setProfile(prev => ({ ...prev, capitalRange: e.target.value as CapitalRange }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            {capitalRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-2">
            <Building2 className="text-gray-400" size={20} />
            <label className="text-lg font-semibold text-gray-700">Preferred Investment Stage</label>
          </div>
          <select
            value={profile.preferredInvestmentStage}
            onChange={e => setProfile(prev => ({ ...prev, preferredInvestmentStage: e.target.value as InvestmentStage }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            {investmentStages.map(stage => (
              <option key={stage} value={stage}>{stage}</option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-2">
            <Briefcase className="text-gray-400" size={20} />
            <label className="text-lg font-semibold text-gray-700">Portfolio Companies</label>
          </div>
          <textarea
            value={profile.portfolioCompanies}
            onChange={e => setProfile(prev => ({ ...prev, portfolioCompanies: e.target.value }))}
            placeholder="List your current portfolio companies"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[150px]"
          />
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

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <CheckSquare className="text-gray-400" size={20} />
            <label className="text-lg font-semibold text-gray-700">Terms and Conditions</label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={profile.termsAccepted}
              onChange={e => setProfile(prev => ({ ...prev, termsAccepted: e.target.checked }))}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              required
            />
            <span className="text-gray-600">
              I accept the{' '}
              <a href="#" className="text-blue-600 hover:text-blue-800">Terms and Conditions</a>
              {' '}and{' '}
              <a href="#" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
        >
          Complete Profile
        </button>
      </form>
    </div>
  );
};

export default InvestorProfileForm;