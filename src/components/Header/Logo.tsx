
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
      <img 
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/9750767c-87e6-4916-be73-ffc602722c54/Logo-with-Crescent-Moon-and-Gemstone-1772138938608.png?width=8000&height=8000&resize=contain" 
        alt="Moonstone Holdings" 
        className="h-12 w-auto object-contain"
      />
    </Link>
  );
};

export default Logo;
