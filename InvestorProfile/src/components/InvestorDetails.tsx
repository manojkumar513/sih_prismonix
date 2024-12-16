import React from 'react';
import { EditableField } from './EditableField';
import { ReadOnlyField } from './ReadOnlyField';
import { Profile, ProfileUpdateFunction } from '../types/profile';

interface InvestorDetailsProps {
  profile: Profile;
  onUpdate: ProfileUpdateFunction;
}

export function InvestorDetails({ profile, onUpdate }: InvestorDetailsProps) {
  return (
    <div className="space-y-4">
      <EditableField
        label="Name"
        value={profile.name}
        onUpdate={(value) => onUpdate('name', value)}
      />
      
      <EditableField
        label="Gender"
        value={profile.gender}
        type="select"
        options={['Male', 'Female', 'Other', 'Prefer not to say']}
        onUpdate={(value) => onUpdate('gender', value)}
      />

      <ReadOnlyField
        label="Role"
        value={profile.role}
      />
    </div>
  );
}