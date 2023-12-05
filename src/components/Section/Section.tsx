import { FC, ReactNode  } from 'react';
import { WrapSection, SectionTitle } from './Section.styled';

interface SectionProps {
  title: string;
  children: ReactNode ;
}

const Section: FC<SectionProps> = ({ title, children }: SectionProps) => {
  return (
    <WrapSection>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </WrapSection>
  );
};

export default Section;
