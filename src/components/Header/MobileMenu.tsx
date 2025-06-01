
import React, { useState, useEffect } from 'react';
import { personalBankingItems, businessBankingItems } from './navigationData';
import { wealthServices } from './MobileMenu/navigationData';
import { getPersonalBankingIcon, getBusinessBankingIcon, getWealthIcon } from './MobileMenu/iconUtils';
import MobileMenuHeader from './MobileMenu/MobileMenuHeader';
import MobileMenuSearch from './MobileMenu/MobileMenuSearch';
import MobileMenuSection from './MobileMenu/MobileMenuSection';
import MobileMenuNavigation from './MobileMenu/MobileMenuNavigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div 
        className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <MobileMenuHeader onClose={onClose} />
        
        <MobileMenuSearch 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
        
        <div className="py-4 overflow-y-auto h-full pb-20">
          <div className="space-y-1 px-4">
            {/* Personal Banking Section */}
            <MobileMenuSection
              title="Personal Banking"
              isExpanded={expandedSection === 'personal'}
              onToggle={() => toggleSection('personal')}
              items={personalBankingItems}
              getIcon={getPersonalBankingIcon}
              onItemClick={onClose}
            />
            
            {/* Business Banking Section */}
            <MobileMenuSection
              title="Business Banking"
              isExpanded={expandedSection === 'business'}
              onToggle={() => toggleSection('business')}
              items={businessBankingItems}
              getIcon={getBusinessBankingIcon}
              onItemClick={onClose}
            />
            
            {/* Wealth Management Section */}
            <MobileMenuSection
              title="Wealth Management"
              isExpanded={expandedSection === 'wealth'}
              onToggle={() => toggleSection('wealth')}
              items={wealthServices}
              getIcon={getWealthIcon}
              onItemClick={onClose}
            />
            
            {/* About Us and Support */}
            <MobileMenuNavigation onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
