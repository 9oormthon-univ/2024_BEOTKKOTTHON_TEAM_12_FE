import {
  DonationNotice,
  DonationSelectGroup,
  FormDonationBasic,
  FormDonationRequest,
} from 'components/index';

interface DonationTabProps {
  activeIndex: number;
}

const DonationTab = ({ activeIndex }: DonationTabProps) => {
  if (activeIndex === 0) return <DonationSelectGroup />;

  if (activeIndex === 1) return <DonationNotice />;

  if (activeIndex === 2) return <FormDonationBasic />;

  if (activeIndex === 3) return <FormDonationRequest />;

  return null;
};

export default DonationTab;
