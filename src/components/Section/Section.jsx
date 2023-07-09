import { PageSection } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <PageSection>
      <h1>{title}</h1>
      {children}
    </PageSection>
  );
};
