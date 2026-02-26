
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
    <div className="fixed inset-0 z-[60] xl:hidden">
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md" onClick={onClose} />
      <div 
        className="fixed top-0 right-0 bottom-0 w-full max-w-[320px] bg-slate-900/95 backdrop-blur-2xl shadow-2xl flex flex-col border-l border-white/10 animate-in slide-in-from-right duration-500 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        <MobileMenuHeader onClose={onClose} />
        
        <div className="flex-1 overflow-y-auto pb-32 no-scrollbar">
          <div className="p-6">
            <MobileMenuSearch 
              searchQuery={searchQuery} 
              setSearchQuery={setSearchQuery} 
            />
          </div>
          
          <div className="space-y-2 px-6">
            {/* Personal Banking Section */}
            <MobileMenuSection
              title="Personal"
              isExpanded={expandedSection === 'personal'}
              onToggle={() => toggleSection('personal')}
              items={personalBankingItems}
              getIcon={getPersonalBankingIcon}
              onItemClick={onClose}
            />
            
            {/* Business Banking Section */}
            <MobileMenuSection
              title="Business"
              isExpanded={expandedSection === 'business'}
              onToggle={() => toggleSection('business')}
              items={businessBankingItems}
              getIcon={getBusinessBankingIcon}
              onItemClick={onClose}
            />
            
            {/* Wealth Management Section */}
            <MobileMenuSection
              title="Wealth"
              isExpanded={expandedSection === 'wealth'}
              onToggle={() => toggleSection('wealth')}
              items={wealthServices}
              getIcon={getWealthIcon}
              onItemClick={onClose}
            />
            
            <div className="h-px bg-white/5 my-6" />
            
            {/* About Us and Support */}
            <MobileMenuNavigation onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
