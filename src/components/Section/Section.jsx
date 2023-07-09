import { PageSection } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <PageSection>
      <h1>{title}</h1>
      {children}
    </PageSection>
  );
};

export default Section;
