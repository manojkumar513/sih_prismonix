export type InvestmentFocus =
  | 'Technology'
  | 'AI & Machine Learning'
  | 'Blockchain'
  | 'Robotics'
  | 'Cloud Computing'
  | 'Cybersecurity'
  | 'Data Science'
  | 'Healthcare'
  | 'Medical Devices'
  | 'Biotechnology'
  | 'Pharmaceuticals'
  | 'Digital Health'
  | 'Healthcare Services'
  | 'Wellness'
  | 'Sustainability & Environment'
  | 'Renewable Energy'
  | 'Waste Management'
  | 'Green Tech'
  | 'Sustainable Agriculture'
  | 'Environmental Services'
  | 'Water Purification'
  | 'Finance'
  | 'FinTech'
  | 'InsurTech'
  | 'Cryptocurrency'
  | 'Payments'
  | 'Wealth Management'
  | 'Crowdfunding'
  | 'Consumer Goods & Retail'
  | 'E-commerce'
  | 'Food & Beverages'
  | 'Consumer Electronics'
  | 'Fashion & Apparel'
  | 'Health & Beauty'
  | 'Education'
  | 'EdTech'
  | 'Online Learning Platforms'
  | 'Skill Development'
  | 'K-12 Education'
  | 'Social Impact'
  | 'Social Enterprises'
  | 'Non-Profit Initiatives'
  | 'Impact Investing'
  | 'Community Development'
  | 'Real Estate & Construction'
  | 'PropTech'
  | 'Construction Tech'
  | 'Real Estate Development'
  | 'Urban Planning'
  | 'Transportation & Logistics'
  | 'Mobility Solutions'
  | 'Autonomous Vehicles'
  | 'Supply Chain Solutions'
  | 'Last-Mile Delivery'
  | 'Manufacturing & Industry'
  | 'Industry 4.0'
  | 'Automation'
  | 'Industrial IoT (IIoT)'
  | '3D Printing';

export type CapitalRange =
  | 'Under $500K'
  | '$500K - $1M'
  | '$1M - $5M'
  | '$5M - $10M'
  | '$10M - $50M'
  | '$50M - $100M'
  | 'Over $100M';

export type InvestmentStage =
  | 'Seed Stage'
  | 'Early Stage'
  | 'Growth Stage'
  | 'Expansion Stage'
  | 'Mature Stage'
  | 'Late Stage';

export interface InvestorProfile {
  address: string;
  education: string;
  investmentFocus: InvestmentFocus[];
  capitalRange: CapitalRange;
  preferredInvestmentStage: InvestmentStage;
  portfolioCompanies: string;
  portfolioUrl?: string;
  termsAccepted: boolean;
}